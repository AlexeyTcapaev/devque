function delay(f, ms) {

    return function () {
        var savedThis = this;
        var savedArgs = arguments;

        setTimeout(function () {
            f.apply(savedThis, savedArgs);
        }, ms);
    };

}


function getMonday(date) {
    var day = date.getDay() || 7;
    if (day !== 1)
        date.setHours(-24 * (day - 1));

    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    if (date.getDate() < 10) {
        var day = '0' + date.getDate();
    }
    return date;
}

function proverka(input) {
    input.value = input.value.replace(/[^\d\.{1}]/g, '');
};

$(document).ready(function () {

    $.ajax({
        url: "get_treatment.php",
        type: "GET",
        data: ({}),
        dataType: "json",
        success: function (request) {
            var treat_list = {}
            Object.keys(request).forEach(treat => {
                treat_list[request[treat]['theme']] = null;
            })
            $('input.autocomplete7').autocomplete({
                data: treat_list,
                onAutocomplete: function (val) {


                },
                minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
            });

        }
    });
    $(".send_treat").click(function () {

        $.ajax({
            url: "send_treatment.php",
            type: "GET",
            data: ({
                user: $('.name').text(),
                message: $("#textarea1").val(),
                theme: $('input.autocomplete7').val()
            }),
            dataType: "json",
            success: function (request) {
                $(".sss").prepend(("<p class='sended'>Ваше сообщение зарагестрировано под номером #" + request + " и отправлено в службу поддержки. Ответ будет отправлен вам на e-mail</p>"));
                document.querySelector('.s_t').style.display = "none";
                setTimeout(function () {
                    document.querySelector('.sended').style.display = "none";
                    document.querySelector('.s_t').style.display = "block";
                }, 7000);
            }
        });
    });


    $('.collapsible').collapsible();
    var a = new Date()
    a.setHours(0);
    a.setSeconds(0);
    a.setMinutes(0);
    a.setMilliseconds(0);
    var mon = getMonday(new Date());
    mon.setHours(0);
    mon.setMilliseconds(0);
    mon.setSeconds(0);
    mon.setMinutes(0);
    var sun = new Date(mon.getFullYear(), mon.getMonth(), (mon.getDate() + 6));
    var slider = document.getElementById('test-slider');
    $(".user-info").sideNav();
    $(".button-collapse").sideNav();
    $(document).keyup(function (e) {

        if (e.keyCode === 27)
            $('.button-collapse').sideNav('hide');

    });
    $(".dropdown-button").dropdown();
    $('#menu').click(function () {
        $('.tap-target').tapTarget('open');
    });
    $('.tap-target').tapTarget('close');

    const app = new Vue({

        el: '#app',
        data: {
            usersList: {},
            r: {},
            reservhidelist: {},
            message: '',
            prjList: {},
            objList: {},
            Summ: [],
            Hide: {},
            select_user: '',
            target: {},
            daterange: [],
            s: mon,
            e: sun,
            buff: '',
            DItem: [{
                prj: '',
                obj: '',
            }],
            key: '',
            list: [],
            hl: 0,
            hidetoshow: [],
            hidelist: [],
            inputB: '',
            user: {}
        },
        computed: {
            dateline: function () {
                return (this.s.getDate() + '.' + (this.s.getMonth() + 1) + '.' + this.s.getFullYear() + '-' + this.e.getDate() + '.' + (this.e.getMonth() + 1) + '.' + this.e.getFullYear());
            },
        },
        mounted: function () {

            const init = this
            $.ajax({
                url: "inituser.php",
                type: "GET",
                data: ({}),
                dataType: "json",
                success: function (request) {
                    init.user = request[0]
                    init.user.photo = "../" + init.user.photo;
                    init.select_user = request[0].name;
                }
            });
            $.ajax({
                url: "setsession.php",
                type: "GET",

                data: ({}),
                dataType: "json",
                success: function (request) {
                   // init.select_user = request['name'];
                    $('.name').text(request['name'])
                    $('.email').text(request['mail'])
                    $('.position').text(request['position'])
                    $('.department_ad').text(request['department_ad'])
                    $('.user-info').text(request['name'])
                }
            });

            if (this.list.length == 0) {
                document.querySelector('#addd').classList.add("green")
                document.querySelector('#addd').classList.remove("black")

            } else {
                document.querySelector('#addd').classList.add("black")
                document.querySelector('#addd').classList.remove("green")
            }

            $.ajax({
                url: "hidetoshow.php",
                type: "GET",
                data: ({}),
                dataType: "json",

                success: function (request) {
                    Object.keys(request).forEach(user => {
                        init.reservhidelist[request[user]] = null;
                    })

                    $('input.autocomplete3').autocomplete({
                        data: init.reservhidelist,
                        onAutocomplete: function (val) {
                            this.disabled = true

                        },
                        minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
                    });

                }
            });

            $.ajax({
                url: "get_users.php",
                type: "GET",

                data: ({}),
                dataType: "json",
                success: function (request) {
                    Object.keys(request).forEach(user => {
                        if (request[user]['name'] !== null)
                            if (request[user]['name'] !== " ")
                                if (request[user]['photo'] !== null)
                                    init.usersList[request[user]['name']] = request[user]['photo'];
                                else init.usersList[request[user]['name']] = "photo/default.svg"
                    })
                    $('input.autocomplete').autocomplete({
                        data: init.usersList,
                        onAutocomplete: function (val) {
                            init.select_user = val;
                        },
                        minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
                    });

                }
            });
            $('#modal1').modal();
            $('#modal3').modal();
            $('#modal4').modal();
            $('#modal2').modal();
            this.setdaterange(this.s, this.e);
            $.ajax({
                url: "hidelines.php",
                type: "GET",

                data: ({
                    selectuser: init.select_user,
                    s: init.tophpdate(init.s),
                    e: init.tophpdate(init.e)
                }),
                dataType: "json",
                success: function (request) {
                    init.hl = request;

                }
            });

        },
        methods: {
            Note: function (r, index) {
                this.target = {}
                this.target = r;
                console.log(r)
                console.log(index)
            },
            HideTime: function () {
                const init = this
                Object.keys(this.daterange).forEach(key => {
                    Vue.set(this.Hide, this.tophpdatestr(this.daterange[key]), 0)
                })

                $.ajax({
                    url: "HideTime.php",

                    type: "GET",
                    data: ({
                        selectuser: init.select_user,
                        s: init.tophpdate(init.s),
                        e: init.tophpdate(init.e)
                    }),
                    dataType: "json",
                    success: function (request) {
                        Object.keys(request).forEach(key => {
                            if (init.daterange.indexOf(request[key]['work_date']))
                                Vue.set(init.Hide, request[key]['work_date'], (Number(init.Hide[request[key]['work_date']]) + Number(request[key]['time'])))

                        })



                    }
                });

            },
            BindItem: function (key) {
                Vue.set(this.DItem, 0, this.list[key]);
                this.key = key;
            },
            ChekValue: function (e, key, obj) {
                if (this.list[key].hours[obj] < 0)
                    Vue.set(this.list[key].hours, obj, 0)
                if (this.list[key].hours[obj] > 24)
                    Vue.set(this.list[key].hours, obj, 24)
            },
            getWeekDay: function (date) {
                var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

                return days[date.getDay()];
            },
            AddLine: function () {
                const init = this
                console.log(document.querySelector('.autocomplete1').value.indexOf("#"))
                if (document.querySelector('.autocomplete1').value.indexOf("#") !== -1) {
                    var p = document.querySelector('.autocomplete1').value.substring(0, document.querySelector('.autocomplete1').value.indexOf("#") - 1)
                    var pcode = document.querySelector('.autocomplete1').value.substring(document.querySelector('.autocomplete1').value.indexOf("#") + 2)
                } else {
                    var p = document.querySelector('.autocomplete1').value

                }
                $.ajax({
                    url: "newline.php",
                    type: "GET",
                    data: ({
                        selectuser: init.user.id,
                        prj: p,
                        obj: document.querySelector('.autocomplete2').value,
                        pcode: pcode
                    }),
                    dataType: "json",
                    success: function (request) {

                        console.log(request)
                        if (request != "Error!")
                            init.UpdateNewList();
                    }
                });

            },
            SendToBase: function () {
                const init = this
                if (document.querySelector('.autocomplete4').value.indexOf("#") !== -1)
                    var p = document.querySelector('.autocomplete4').value.substring(0, document.querySelector('.autocomplete4').value.indexOf("#") - 1)
                else var p = document.querySelector('.autocomplete4').value
                $.ajax({
                    url: "send_base.php",
                    type: "GET",
                    data: ({
                        selectuser: init.select_user,
                        prj: p,
                        code: document.querySelector('.autocomplete5').value,
                        obj: document.querySelector('.autocomplete6').value
                    }),
                    dataType: "json",
                    success: function (request) {

                        console.log(request)
                        if (request != "Error!")
                            init.UpdateNewList();
                    }
                });

            },
            UpdateUser: function (user) {
                this.select_user = user
            },
            UpdateList: function (request) {
                Vue.set(request, 'dates', Array())
                Vue.set(request, 'hours', Array())
                this.list.push(request)
            },
            UpdateNewList: function () {
                const init = this
                this.list = []
                $.ajax({
                    url: "ajax_main.php",

                    type: "GET",
                    data: ({
                        selectuser: this.user.id,
                        s: init.tophpdate(init.s),
                        e: init.tophpdate(init.e)
                    }),
                    dataType: "json",
                    success: function (request) {
                        init.list = []
                        Object.keys(request).forEach(key => {
                            var hours = [];
                            var dates = [];
                            var notes = [];
                            Object.keys(request[key]).forEach(k => {

                                if (k === 'dates') {
                                    Object.keys(request[key][k]).forEach(d => {
                                        dates.push(request[key][k][d])
                                    })
                                    dates.reverse();
                                }
                                if (k === 'hours') {
                                    Object.keys(request[key][k]).forEach(d => {
                                        hours.push(request[key][k][d])
                                    })
                                    hours.reverse();
                                }
                                if (k === 'note') {
                                    Object.keys(request[key][k]).forEach(d => {
                                        notes.push(request[key][k][d])
                                    })
                                    notes.reverse();
                                }

                            })
                            init.list.push(request[key])
                            Vue.set(init.list[key], 'dates', dates)
                            Vue.set(init.list[key], 'hours', hours)
                            Vue.set(init.list[key], 'notes', notes)
                        })
                    }
                });

            },
            InputHours: function (e, r, d) {
                console.log(e.target.value)
                if (e.target.value === '') {
                    e.target.value = 0
                } else
                if (e.target.value === "") {
                    return
                } else {
                    if (e.target.value < 0)
                        e.target.value = 0
                    if (e.target.value > 24)
                        e.target.value = 24

                    var h = e.target.value;
                    h = parseFloat(h).toFixed(1);
                    this.list[this.list.indexOf(r)].dates.push(d)
                    this.list[this.list.indexOf(r)].hours.push(h)

                    const init = this;
                    $.ajax({
                        url: "add_obj.php",

                        type: "GET",
                        data: ({
                            selectuser: init.user.id,
                            s: d,
                            obj: r.o_id,
                            hours: h
                        }),
                        dataType: "json",
                        success: function () {

                        }

                    });
                    this.SetSumm();
                    this.$forceUpdate();
                }
            },
            ShowItem: function () {

                const init = this;
                $.ajax({
                    url: "showitem.php",

                    type: "GET",
                    data: ({
                        selectuser: init.select_user
                    }),
                    dataType: "json",
                    success: function () {
                        $.ajax({
                            url: "ajax_main.php",
                            type: "GET",
                            data: ({
                                selectuser: init.user.id,
                                s: init.tophpdate(init.s),
                                e: init.tophpdate(init.e)
                            }),
                            dataType: "json",
                            success: function (request) {
                                init.list = []
                                Object.keys(request).forEach(key => {
                                    var hours = [];
                                    var dates = [];
                                    var notes = [];
                                    Object.keys(request[key]).forEach(k => {

                                        if (k === 'dates') {
                                            Object.keys(request[key][k]).forEach(d => {
                                                dates.push(request[key][k][d])
                                            })
                                            dates.reverse();
                                        }
                                        if (k === 'hours') {
                                            Object.keys(request[key][k]).forEach(d => {
                                                hours.push(request[key][k][d])
                                            })
                                            hours.reverse();
                                        }
                                        if (k === 'note') {
                                            Object.keys(request[key][k]).forEach(d => {
                                                notes.push(request[key][k][d])
                                            })
                                            notes.reverse();
                                        }

                                    })
                                    init.list.push(request[key])
                                    Vue.set(init.list[key], 'dates', dates)
                                    Vue.set(init.list[key], 'hours', hours)
                                    Vue.set(init.list[key], 'notes', notes)
                                })
                            }
                        });

                    }
                });
                this.hl = 0;
            },
            HideItem: function (key) {
                const init = this;
                this.hl++;
                this.reservhidelist[this.list[key]['prj'] + " - " + this.list[key]['obj']] = null;
                $.ajax({
                    url: "hidequery.php",
                    type: "GET",
                    data: ({
                        selectuser: init.select_user,
                        hide_object: init.list[key].o_id
                    }),
                    dataType: "json",
                    success: function () {
                        init.list.splice(key, 1)
                        init.HideTime()
                    }
                });
            },
            nowWeek: function () {
                var mon1 = getMonday(new Date());
                mon1.setHours(0);
                mon1.setSeconds(0);
                mon1.setMinutes(0);
                mon1.setMilliseconds(0);
                var sun1 = new Date(mon1.getFullYear(), mon1.getMonth(), (mon1.getDate() + 6));
                this.s = mon1;
                this.e = sun1;

                this.setdaterange(this.s, this.e);




            },
            DelItem: function () {
                const init = this;
                $.ajax({
                    url: "delete_object.php",
                    type: "GET",
                    data: ({
                        selectuser: init.select_user,
                        s: init.tophpdate(init.s),
                        e: init.tophpdate(init.e),
                        deleted_object: init.DItem[0].o_id
                    }),
                    dataType: "json",
                    success: function () {
                        init.UpdateNewList();
                    }
                });
                this.key = '';
            },
            SetSumm: function () {
                Object.keys(this.daterange).forEach(d => {
                    var s = 0;
                    Object.keys(this.list).forEach(r => {
                        if (this.list[r].dates.indexOf(this.tophpdatestr(this.daterange[d])) != -1) {
                            s += Number(this.list[r].hours[this.list[r].dates.indexOf(this.tophpdatestr(this.daterange[d]))])

                        }
                    })
                    s = parseFloat(s.toFixed(3))
                    Vue.set(this.Summ, d, s)
                })
            },
            ArrSumm: function (mass) {
                var s = 0;
                Object.keys(mass).forEach(elem => {
                    s += Number(mass[elem]);
                })
                return s;
            },
            Reset: function () {
                document.querySelector('.autocomplete2').value = '';
                document.querySelector('.autocomplete1').value = '';
                document.querySelector('.autocomplete1').disabled = false;
                document.querySelector('.autocomplete2').disabled = true;
                this.prjList = {};
                this.objList = {};
                const init = this;
                $.ajax({
                    url: "get_projects.php",
                    type: "GET",
                    data: ({
                        selectuser: init.select_user
                    }),
                    dataType: "json",
                    success: function (request) {
                        Object.keys(request).forEach(prj => {
                            if (request[prj] !== null) {
                                if (request[prj].code !== '0')
                                    var line = request[prj].p_name + " # " + request[prj].code
                                else var line = request[prj].p_name
                                init.prjList[line] = null;
                            }
                        })
                        $('input.autocomplete1').autocomplete({
                            data: init.prjList,
                            onAutocomplete: function (val) {
                                console.log($('.dropdown-content').children())
                                document.querySelector('.autocomplete2').value = '';
                                document.querySelector('.autocomplete2').disabled = false;
                                init.objList = []
                                var p = val

                                $.ajax({
                                    url: "get_objs.php",
                                    type: "GET",
                                    data: ({
                                        selectuser: init.select_user,
                                        prj: p
                                    }),
                                    dataType: "json",
                                    success: function (request) {
                                        Object.keys(request).forEach(obj => {
                                            if (request[obj] !== null) {
                                                var line = request[obj].o_name
                                                init.objList[line] = null;
                                            }
                                        })
                                        $('input.autocomplete2').autocomplete({
                                            data: init.objList,
                                            onAutocomplete: function (val) {

                                            },
                                            minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
                                        });

                                    }
                                });

                            },
                            minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
                        });

                    }
                });

            },
            NewPrj: function () {
                this.prjList = {};
                this.objList = {};
                const init = this;
                $.ajax({
                    url: "get_projects.php",
                    type: "GET",
                    data: ({
                        selectuser: init.select_user
                    }),
                    dataType: "json",
                    success: function (request) {
                        Object.keys(request).forEach(prj => {
                            if (request[prj] !== null) {
                                if (request[prj].code !== '0')
                                    var line = request[prj].p_name + " # " + request[prj].code
                                else var line = request[prj].p_name
                                init.prjList[line] = null;
                            }
                        })

                        $('input.autocomplete4').autocomplete({
                            data: init.prjList,
                            onAutocomplete: function (val) {
                                if (document.querySelector('.autocomplete4').value.indexOf("#") !== -1)
                                    var p = document.querySelector('.autocomplete4').value.substring(0, document.querySelector('.autocomplete4').value.indexOf("#") - 1)
                                else var p = document.querySelector('.autocomplete4').value
                                init.r = []
                                console.log(val)
                                $.ajax({
                                    url: "get_code.php",
                                    type: "GET",
                                    data: ({
                                        prj: p
                                    }),
                                    dataType: "json",
                                    success: function (request) {
                                        init.r[request] = null;
                                        console.log(init.r)
                                        $('input.autocomplete5').autocomplete({
                                            data: init.r,
                                            onAutocomplete: function (val) {

                                            },
                                            minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
                                        });
                                    }
                                });
                            },
                            minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
                        });
                    }
                });

            },
            tophpdatestr: function (date) {

                if (date.getDate() < 10) {
                    var day = ('0' + date.getDate()).toString();
                } else var day = date.getDate();


                if (date.getMonth() + 1 < 10) {
                    var month = ('0' + (date.getMonth() + 1).toString());
                } else var month = date.getMonth() + 1;

                var str = (date.getFullYear() + '-' + month + '-' + day + ' 00:00:00').toString();
                return str;
            },
            Showed: function () {
                this.UpdateNewList()
                $('input.autocomplete3').autocomplete({
                    data: this.reservhidelist,
                    limit: 50, // The max amount of results that can be shown at once. Default: Infinity.
                    onAutocomplete: function (val) {

                    },
                    minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
                });
                document.querySelector('.autocomplete3').disabled = false;
                document.querySelector('.autocomplete3').value = '';
            },
            RetToShow: function () {
                const init = this;
                $.ajax({
                    url: "return_line.php",
                    type: "GET",
                    data: ({
                        selectuser: init.select_user,
                        obj: document.querySelector('.autocomplete3').value
                    }),
                    dataType: "json",
                    success: function (request) {
                        if (request !== "Error!") {
                            delete init.reservhidelist[document.querySelector('.autocomplete3').value]
                            init.UpdateNewList();
                            init.hl -= 1;
                            init.HideTime()
                        }
                    }
                });
            },
            formatDate: function (date) {
                return date.getDate() + '.' + date.getMonth()
            },
            setdaterange: function (ss, ee) {
                var msPerDay = 86400000
                this.daterange = []

                for (var i = 0; i < 7; i++) {

                    var date = new Date(ss.getTime() + msPerDay * i)
                    this.daterange.push(date)
                }
            },
            tophpdate: function (date) {

                if (date.getDate() < 10) {
                    var day = '0' + date.getDate();
                } else var day = date.getDate();
                var str = [date.getFullYear(), (date.getMonth() + 1), day];
                return str;
            },
            leftdata: function () {
                this.s.setDate(this.s.getDate() - 7);
                this.e = new Date(this.s.getFullYear(), this.s.getMonth(), (this.s.getDate() + 6));
                this.setdaterange(this.s, this.e);
            },
            rightdata: function () {
                this.s.setDate(this.s.getDate() + 7);
                this.e = new Date(this.s.getFullYear(), this.s.getMonth(), (this.s.getDate() + 6));
                this.setdaterange(this.s, this.e);
            },
            tophpdate: function (date) {

                if (date.getDate() < 10) {
                    var day = ('0' + date.getDate());
                } else var day = date.getDate();
                var str = [date.getFullYear(), (date.getMonth() + 1), day];
                return str;
            }
        },

        watch: {
            select_user: function () {
                const init = this
                $.ajax({
                    url: "ajax_main.php",
                    type: "GET",
                    data: ({
                        selectuser: init.select_user,
                        s: init.tophpdate(init.s),
                        e: init.tophpdate(init.e)
                    }),
                    dataType: "json",
                    success: function (request) {
                        init.list = []
                        Object.keys(request).forEach(key => {
                            var hours = [];
                            var dates = [];
                            var notes = [];
                            Object.keys(request[key]).forEach(k => {

                                if (k === 'dates') {
                                    Object.keys(request[key][k]).forEach(d => {
                                        dates.push(request[key][k][d])
                                    })
                                    dates.reverse();
                                }
                                if (k === 'hours') {
                                    Object.keys(request[key][k]).forEach(d => {
                                        hours.push(request[key][k][d])
                                    })
                                    hours.reverse();
                                }
                                if (k === 'note') {
                                    Object.keys(request[key][k]).forEach(d => {
                                        notes.push(request[key][k][d])
                                    })
                                    notes.reverse();
                                }

                            })
                            init.list.push(request[key])
                            Vue.set(init.list[key], 'dates', dates)
                            Vue.set(init.list[key], 'hours', hours)
                            Vue.set(init.list[key], 'notes', notes)
                        })
                    }
                });
            },
            s: function () {

            },

            daterange: function () {
                Object.keys(this.daterange).forEach(key => {
                    Vue.set(this.Hide, this.tophpdatestr(this.daterange[key]), 0)
                })

                this.HideTime();
                if (this.s <= a.setMilliseconds(0) && this.e >= a.setMilliseconds(0)) {

                    document.querySelector('#nowWeek').style.display = "none"
                    document.querySelector('#nowWeek').classList.remove("btn")
                    document.querySelector('#nowWeek').classList.remove("waves-effect")
                    document.querySelector('#nowWeek').classList.remove("waves-light")

                } else {

                    document.querySelector('#nowWeek').style.display = "flex"
                    document.querySelector('#nowWeek').classList.add("btn")
                    document.querySelector('#nowWeek').classList.add("waves-effect")
                    document.querySelector('#nowWeek').classList.add("waves-light")

                }

                const init = this
                $.ajax({
                    url: "ajax_main.php",
                    type: "GET",
                    data: ({
                        selectuser: init.user.id,
                        s: init.tophpdate(init.s),
                        e: init.tophpdate(init.e)
                    }),
                    dataType: "json",
                    success: function (request) {
                        init.list = []
                        Object.keys(request).forEach(key => {
                            var hours = [];
                            var dates = [];
                            var notes = [];
                            Object.keys(request[key]).forEach(k => {

                                if (k === 'dates') {
                                    Object.keys(request[key][k]).forEach(d => {
                                        dates.push(request[key][k][d])
                                    })
                                    dates.reverse();
                                }
                                if (k === 'hours') {
                                    Object.keys(request[key][k]).forEach(d => {
                                        hours.push(request[key][k][d])
                                    })
                                    hours.reverse();
                                }
                                if (k === 'note') {
                                    Object.keys(request[key][k]).forEach(d => {
                                        notes.push(request[key][k][d])
                                    })
                                    notes.reverse();
                                }

                            })
                            init.list.push(request[key])
                            Vue.set(init.list[key], 'dates', dates)
                            Vue.set(init.list[key], 'hours', hours)
                            Vue.set(init.list[key], 'notes', notes)
                        })
                    }
                });
            },
            list: function () {
                if (this.list.length == 0) {
                    document.querySelector('#addd').classList.add("green")
                    document.querySelector('#addd').classList.remove("black")

                } else {
                    document.querySelector('#addd').classList.add("black")
                    document.querySelector('#addd').classList.remove("green")
                }
                Object.keys(this.daterange).forEach(d => {
                    var s = 0;
                    Object.keys(this.list).forEach(r => {
                        if (Object.keys(r).length != 0)
                            if (this.list[r].dates.indexOf(this.tophpdatestr(this.daterange[d])) != -1)
                                s += Number(this.list[r].hours[this.list[r].dates.indexOf(this.tophpdatestr(this.daterange[d]))])
                    })
                    Vue.set(this.Summ, d, parseFloat(s.toFixed(3)))
                })
            }

        },
        created: function () {

        }
    });
});