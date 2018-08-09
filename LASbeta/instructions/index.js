function getWeekDay(date) {
    var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return days[date.getDay()];
}


document.addEventListener('DOMContentLoaded', function () {

    const app = new Vue({

        el: '#app',
        data: {
            user: {},
            usersList: {},
            SetInstructions: [],
            ShowInstructions: [],
            ToMineList: [],
            ToWorkList: [],
            ToReadyList: [],
            ToFinishList: [],
            targetInstruction: {},
            targetInstructionForFile: {},
            targetInstructionForMessages: {},
            messageToTarget: [],
            usersToNewInst: {},
            TypeOfSelecrInstruction: 'set',
            selectDateToNewInst: {},
            usCreator: {},
            subContent: '',
            maxwidth: true,
            filewidth: '',
            InstToDel: {}
        },
        updated: function () {
            $('.tabs').tabs();
        },
        mounted: function () {
            this.filewidth = Math.floor($(window).width() / 2.4);
            this.subContent = "default"
            const init = this
            $('.modal').modal();
            $('.collapsible').collapsible();
            var $header = $('.collapsible .collapsible-header');
            var elem = document.querySelector('.datepicker');
            var instance = M.Datepicker.init(elem, {
                format: 'dd.mm.yyyy',
                minDate: new Date(),
                onClose: function () {
                    init.selectDateToNewInst = this.date
                }
            });
            $.ajax({
                url: "inituser.php",
                type: "GET",
                data: ({}),
                dataType: "json",
                success: function (request) {
                    init.user = request[0]
                    $.ajax({
                        url: "get_inst_to_work.php",
                        type: "GET",
                        data: ({
                            user: init.user.id
                        }),
                        dataType: "json",
                        success: function (request) {
                            init.ToWorkList = []
                            Object.keys(request).forEach(instruction => {
                                var p = Array();
                                Object.keys(request[instruction].piped_user).forEach(pipe => {
                                    p.push(request[instruction].piped_user[pipe])
                                })
                                init.PipedStatus(request[instruction])
                                init.ToWorkList.push(request[instruction])
                                init.ToWorkList[instruction].piped_user = p
                            })
                        }
                    });
                    $.ajax({
                        url: "set_to_user_instructions.php",
                        type: "GET",
                        data: ({
                            user: init.user
                        }),
                        dataType: "json",
                        success: function (request) {

                            init.SetInstructions = []
                            Object.keys(request).forEach(instruction => {
                                var p = Array();
                                Object.keys(request[instruction].piped_user).forEach(pipe => {
                                    p.push(request[instruction].piped_user[pipe])
                                })
                                init.PipedStatus(request[instruction])
                                init.SetInstructions.push(request[instruction])
                                init.SetInstructions[instruction].piped_user = p
                                init.SetInstructions[instruction].slow = new Date(request[instruction].dountil) - new Date(request[instruction].dountil)
                            })
                        }
                    });
                    $.ajax({
                        url: "wait_instructions.php",
                        type: "GET",
                        data: ({
                            user: init.user
                        }),
                        dataType: "json",
                        success: function (request) {
                            init.ToReadyList = []
                            Object.keys(request).forEach(instruction => {
                                var p = Array();
                                Object.keys(request[instruction].piped_user).forEach(pipe => {
                                    p.push(request[instruction].piped_user[pipe])
                                })
                                init.PipedStatus(request[instruction])
                                init.ToReadyList.push(request[instruction])
                                init.ToReadyList[instruction].piped_user = p
                            })
                        }
                    });
                    $.ajax({
                        url: "set_instructions.php",
                        type: "GET",
                        data: ({
                            user: init.user
                        }),
                        dataType: "json",
                        success: function (request) {

                            init.ToMineList = []
                            Object.keys(request).forEach(instruction => {
                                var p = Array();
                                Object.keys(request[instruction].piped_user).forEach(pipe => {
                                    p.push(request[instruction].piped_user[pipe])
                                })
                                init.PipedStatus(request[instruction])
                                init.ToMineList.push(request[instruction])
                                init.ToMineList[instruction].piped_user = p
                            })
                        }
                    });
                    $.ajax({
                        url: "closed_instructions.php",
                        type: "GET",
                        data: ({
                            user: init.user
                        }),
                        dataType: "json",
                        success: function (request) {

                            init.ToFinishList = []
                            Object.keys(request).forEach(instruction => {
                                var p = Array();
                                Object.keys(request[instruction].piped_user).forEach(pipe => {
                                    p.push(request[instruction].piped_user[pipe])
                                })
                                init.PipedStatus(request[instruction])
                                init.ToFinishList.push(request[instruction])
                                init.ToFinishList[instruction].piped_user = p
                            })
                        }
                    });
                }
            });
            $.ajax({
                url: "../get_users.php",
                type: "GET",

                data: ({}),
                dataType: "json",
                success: function (request) {
                    Object.keys(request).forEach(user => {
                        if (request[user]['name'] !== null)
                            if (request[user]['name'] !== " ")
                                if (request[user]['photo'] !== null)
                                    init.usersList[request[user]['name']] = "../" + request[user]['photo'];
                                else init.usersList[request[user]['name']] = "../photo/default.svg"
                    })

                    $('input.users-list').autocomplete({
                        data: init.usersList,
                        onAutocomplete: function (val) {
                            Object.keys(init.usersList).forEach(user => {
                                if (user === val) {

                                    Vue.set(init.usersToNewInst, user, init.usersList[user])
                                    $('input.users-list').val("")
                                }
                            })


                        },
                        minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
                    });
                    var a = init.usersList
                    $('input.creator-input').autocomplete({
                        data: a,
                        minLength: 0, // The minimum length of the input for the autocomplete to start. Default: 1.
                    });


                }
            });
        },
        watch: {
            targetInstruction: function () {

                if (Object.keys(this.targetInstruction).length === 0) {
                    this.targetInstructionForMessages = {}
                    this.targetInstructionForFile = {}
                }
                if (this.targetInstructionForMessages.title !== this.targetInstruction.title) {
                    this.targetInstructionForMessages = {}
                }
            },

            targetInstructionForFile: function () {
                if (Object.keys(this.targetInstructionForFile).length === 0) {}
                if (Object.keys(this.targetInstructionForFile).length === 0) {
                    this.maxwidth = true
                } else {
                    this.maxwidth = false
                }
            },
            targetInstructionForMessages: function () {
                if (Object.keys(this.targetInstructionForMessages).length === 0) {
                    this.maxwidth = true
                } else {
                    this.maxwidth = false
                }
            },
            subContent: function () {
                if (this.subContent === 'files') {
                    this.maxwidth = false
                } else this.maxwidth = true
            }
        },
        methods: {
            ChangeUntilDate(instruction) {
                const init = this
                let date = instruction.dountil.split('.')
                $.ajax({
                    url: "UpdateInst.php",
                    type: "GET",
                    data: ({
                        instruction: instruction.id,
                        date: this.tophpdate(new Date(date[2], date[1] - 1, date[0]))
                    }),
                    dataType: "json",
                    success: function (request) {}
                });
            },
            DeleteInstruction: function () {
                const init = this;
                $.ajax({
                    url: "deleteinstruction.php",
                    type: "GET",
                    data: ({
                        instruction: init.InstToDel.id,
                    }),
                    dataType: "json",
                    success: function (request) {

                    }
                });
            },
            BindForDel: function (instruction) {
                this.InstToDel = instruction;
            },
            Accept: function (inst, user) {
                const init = this
                $.ajax({
                    url: "acceptInst.php",
                    type: "GET",
                    data: ({
                        instruction: inst.id,
                        user: user.id,
                    }),
                    dataType: "json",
                    success: function (request1) {
                        if (request1 !== "error!") {
                            $.ajax({
                                url: "send_messages.php",
                                type: "GET",
                                data: ({
                                    instruction: inst.id,
                                    user: "The Система",
                                    content: "Отчёт по данному поручению от " + user.name + " принят"
                                }),
                                dataType: "json",
                                success: function (request1) {
                                    if (request1 !== "error!") {
                                        inst.message_count++
                                            $('.sendingmessage').val("")
                                        Vue.set(init.messageToTarget, Object.keys(init.messageToTarget).length + 1, request1)
                                    }
                                }
                            });
                        }
                    }
                });

            },
            Reject: function (inst, user) {
                const init = this
                $.ajax({
                    url: "rejectInst.php",
                    type: "GET",
                    data: ({
                        instruction: inst.id,
                        user: user.id,
                    }),
                    dataType: "json",
                    success: function (request1) {
                        if (request1 !== "error!") {
                            $.ajax({
                                url: "send_messages.php",
                                type: "GET",
                                data: ({
                                    instruction: inst.id,
                                    user: "The Система",
                                    content: "Отчёт по данному поручению от " + user.name + " не принят"
                                }),
                                dataType: "json",
                                success: function (request1) {
                                    if (request1 !== "error!") {
                                        inst.message_count++
                                            $('.sendingmessage').val("")
                                        Vue.set(init.messageToTarget, Object.keys(init.messageToTarget).length + 1, request1)
                                    }
                                }
                            });
                        }
                    }
                });
            },
            Call: function (TargetUser) {
                const init = this

                $.ajax({
                    url: "call.php",
                    type: "GET",
                    data: ({
                        to: TargetUser,
                        from: this.user.name
                    }),
                    dataType: "json",
                    success: function (request) {
                        $.ajax({
                            url: "send_messages.php",
                            type: "GET",
                            data: ({
                                instruction: init.targetInstruction.id,
                                user: "The Система",
                                content: request
                            }),
                            dataType: "json",
                            success: function (request1) {
                                if (request1 !== "error!") {
                                    $('.sendingmessage').val("")
                                    Vue.set(init.messageToTarget, Object.keys(init.messageToTarget).length + 1, request1)
                                }
                            }
                        });
                    }
                });
            },
            PipedStatus: function (instruction) {

                Object.keys(instruction.piped_user).forEach(user => {
                    if (instruction.piped_user[user].name === this.user.name) {
                        instruction.piped_status_self = instruction.piped_user[user].piped_status
                    }
                })
            },
            ChangeToFinishList: function () {
                this.ShowInstructions = this.ToFinishList

                this.targetInstruction = new Object()
                for (var i = 1; i <= this.ShowInstructions.length; i++)
                    $('.collapsible').collapsible('close', i)
                this.TypeOfSelecrInstruction = "fin"
            },
            ChangeToMineList: function () {
                this.ShowInstructions = this.ToMineListWithFilter
                //this.ShowInstructions = this.ToMineList

                this.targetInstruction = new Object()
                for (var i = 1; i <= this.ShowInstructions.length; i++)
                    $('.collapsible').collapsible('close', i)
                this.TypeOfSelecrInstruction = "mine"
            },
            ChangeToSetList: function () {
                this.ShowInstructions = this.SetInstructions

                this.targetInstruction = new Object()
                for (var i = 1; i <= this.ShowInstructions.length; i++)
                    $('.collapsible').collapsible('close', i)
                this.TypeOfSelecrInstruction = "set"
            },
            ChangeToWorkList: function () {
                // this.ShowInstructions = this.ToWorkList
                this.ShowInstructions = this.ToWorkWithFilter
                this.TypeOfSelecrInstruction = "worked"

                this.targetInstruction = new Object()
                for (var i = 1; i <= this.ShowInstructions.length; i++)
                    $('.collapsible').collapsible('close', i)

            },
            ChangeToReadyList: function () {
                this.ShowInstructions = this.ToReadyWithFilter
                // this.ShowInstructions = this.ToReadyList

                this.targetInstruction = new Object()
                for (var i = 1; i <= this.ShowInstructions.length; i++)
                    $('.collapsible').collapsible('close', i)
                this.TypeOfSelecrInstruction = "closed"
            },
            ToReady: function (inst) {

                const init = this
                if ($("#prom").prop("checked") === true)
                    var type = 0
                else var type = 1

                $.ajax({
                    url: "InstToReady.php",
                    type: "GET",
                    data: ({
                        instId: inst.id,
                        user: init.user.id,
                        content: $('.readyContent').val(),
                        type: type
                    }),
                    dataType: "json",
                    success: function (request) {
                        if (request === "good") {
                            init.targetInstruction.piped_status_self = '2'
                            Object.keys(init.ShowInstructions[init.ShowInstructions.indexOf(inst)].piped_user).forEach(user => {
                                if (init.ShowInstructions[init.ShowInstructions.indexOf(inst)].piped_user[user]['id'] === init.user.id) {
                                    init.ShowInstructions[init.ShowInstructions.indexOf(inst)].piped_user[user]['piped_status'] = 2
                                    init.ToReadyList.push(init.ShowInstructions[init.ShowInstructions.indexOf(inst)])
                                    init.ShowInstructions.splice(init.ShowInstructions.indexOf(inst), 1)
                                    init.targetInstruction = new Object()
                                }
                            })

                        }
                    }
                });
            },
            ToWork: function (inst) {
                const init = this
                $.ajax({
                    url: "InstToWork.php",
                    type: "GET",
                    data: ({
                        instId: inst.id,
                        user: init.user.id
                    }),
                    dataType: "json",
                    success: function (request) {
                        if (request === "good") {
                            init.targetInstruction.piped_status_self = '1'
                            Object.keys(init.ShowInstructions[init.ShowInstructions.indexOf(inst)].piped_user).forEach(user => {
                                if (init.ShowInstructions[init.ShowInstructions.indexOf(inst)].piped_user[user]['id'] === init.user.id) {
                                    init.ShowInstructions[init.ShowInstructions.indexOf(inst)].piped_user[user]['piped_status'] = 1
                                    init.ToWorkList.push(init.ShowInstructions[init.ShowInstructions.indexOf(inst)])
                                    init.ShowInstructions.splice(init.ShowInstructions.indexOf(inst), 1)
                                    init.targetInstruction = new Object()
                                }
                            })

                        }
                    }
                });
            },
            tophpdate: function (date) {

                if (date.getDate() < 10) {
                    var day = '0' + date.getDate();
                } else var day = date.getDate();
                var str = [date.getFullYear(), (date.getMonth() + 1), day];
                return str;
            },
            createInstruction: function () {

                const init = this
                var file_data = $('.file').prop('files')[0];
                var form_data = new FormData();
                form_data.append('file', file_data);
                if (document.querySelector('input.creator-input') !== null) {
                    init.usCreator = $('input.creator-input').val()
                } else {
                    init.usCreator = init.user.id
                }

                $.ajax({
                    url: 'uploadfile.php',
                    dataType: 'text',
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,
                    type: 'post',
                    success: function (php_script_response) {
                        if (init.user.role === "4") {
                            if (document.querySelector('input.creator-input').value !== "") {
                                var creator = document.querySelector('input.creator-input').value
                            } else {
                                var creator = init.user.id
                            }

                        } else
                        if (document.querySelector('input.creator-input') !== null) {
                            var creator = document.querySelector('input.creator-input').value
                        } else {
                            var creator = init.user.id
                        }
                        console.log(creator)
                        $.ajax({
                            url: "createInstruction.php",
                            type: "GET",
                            data: ({
                                content: $('.instructionContent').val(),
                                name: $('.instructionName').val(),
                                whoAdded: init.usersToNewInst,
                                creator: creator,
                                file: php_script_response,
                                dountil: init.tophpdate(init.selectDateToNewInst)
                            }),
                            dataType: "json",
                            success: function (request) {
                                $.ajax({
                                    url: "set_instructions.php",
                                    type: "GET",
                                    data: ({
                                        user: init.user
                                    }),
                                    dataType: "json",
                                    success: function (request) {

                                        init.ToMineList = []
                                        Object.keys(request).forEach(instruction => {
                                            init.PipedStatus(request[instruction])
                                            init.ToMineList.push(request[instruction])
                                        })
                                    }
                                });
                                $.ajax({
                                    url: "wait_instructions.php",
                                    type: "GET",
                                    data: ({
                                        user: init.user
                                    }),
                                    dataType: "json",
                                    success: function (request) {
                                        console.log(request)
                                        init.ToReadyList = []
                                        Object.keys(request).forEach(instruction => {
                                            init.PipedStatus(request[instruction])
                                            init.ToReadyList.push(request[instruction])
                                        })
                                    }
                                });
                            }
                        });

                    }

                });

            },
            deleteUserToNewList: function (user) {
                Vue.delete(this.usersToNewInst, user)
            },
            setTargetInstructionToFiles: function (target, event) {

                this.subContent = 'files'
                if (!$(event.path[5]).hasClass('active')) {
                    $('.collapsible').collapsible('open', $(event.path[5]).index());
                }
                if (Object.keys(this.targetInstructionForFile).length > 0 && target.id === this.targetInstructionForFile.id) {
                    this.targetInstructionForFile = {}
                    //this.targetInstruction = {}
                } else {
                    this.targetInstructionForFile = target;
                    this.targetInstruction = target
                }
            },
            setTargetInstructionToMessages: function (target, event) {
                this.subContent = 'default'
                if (!$(event.path[5]).hasClass('active')) {
                    $('.collapsible').collapsible('open', $(event.path[5]).index());
                }
                this.targetInstructionForMessages = target;
                this.targetInstruction = target;
                const init = this;
                $.ajax({
                    url: "get_messages.php",
                    type: "GET",
                    data: ({
                        instruction: target.id
                    }),
                    dataType: "json",
                    success: function (request) {
                        if (request === null) {
                            this.targetInstructionForMessages = {}
                        }
                        init.messageToTarget = request;
                    }
                });

            },
            setTargetInstruction: function (target, event) {
                if ($(event.target).hasClass('msg') || $(event.target).hasClass('files')) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    if (Object.keys(this.targetInstruction).length > 0 && target.id === this.targetInstruction.id) {

                        this.targetInstruction = {}
                        this.subContent = 'default'
                    } else {
                        this.targetInstruction = target;
                    }
                }
            },
            SendMessage: function (targetId) {
                const init = this;
                if ($('.sendingmessage').val() !== "" || $('.sendingmessage').val().indexOf("\n") != 0) {
                    $.ajax({
                        url: "send_messages.php",
                        type: "GET",
                        data: ({
                            instruction: targetId,
                            user: init.user.id,
                            content: $('.sendingmessage').val()
                        }),
                        dataType: "json",
                        success: function (request) {
                            if (request !== "error!") {

                                $('.sendingmessage').val("")
                                Vue.set(init.messageToTarget, Object.keys(init.messageToTarget).length + 1, request)
                                Object.keys(init.ShowInstructions).forEach(instruction => {
                                    if (init.ShowInstructions[instruction].id == targetId)
                                        init.ShowInstructions[instruction].message_count++
                                })
                            }
                        }
                    });
                }
            }
        },
        computed: {
            ToMineListWithFilter: function () {
                var found1 = '83'
                var found2 = '175'
                var found3 = this.user.id
                const init = this
                if (this.user.id === '83' || this.user.id === '174' || this.user.id === '13')
                    return this.ToMineList.filter(function (inst) {
                        if (inst.creator.id.indexOf(found1) > -1)
                            return inst.creator.id.indexOf(found1) > -1
                        else if (inst.creator.id.indexOf(found2) > -1)
                            return inst.creator.id.indexOf(found2) > -1
                        else if (inst.piped_status_self === '3')
                            return inst.piped_status_self
                    })
                else return this.ToMineList
            },
            ToReadyWithFilter: function () {
                var found1 = '83'
                var found2 = '175'
                var found3 = this.user
                if (this.user.id === '83' || this.user.id === '174' || this.user.id === '13')
                    return this.ToReadyList.filter(function (inst) {
                        if (inst.creator.id.indexOf(found1) > -1)
                            return inst.creator.id.indexOf(found1) > -1
                        else if (inst.creator.id.indexOf(found2) > -1)
                            return inst.creator.id.indexOf(found2) > -1
                        else if (inst.piped_user.indexOf(found3) > -1)
                            return inst.piped_user.indexOf(found3) > -1
                    })
                else return this.ToReadyList
            },
            ToWorkWithFilter: function () {
                var found1 = '83'
                var found2 = '175'
                var found3 = this.user
                if (this.user.id === '83' || this.user.id === '174' || this.user.id === '13')
                    return this.ToWorkList.filter(function (inst) {

                        if (inst.creator.id.indexOf(found1) > -1)
                            return inst.creator.id.indexOf(found1) > -1
                        else if (inst.creator.id.indexOf(found2) > -1)
                            return inst.creator.id.indexOf(found2) > -1
                        else if (inst.piped_user.indexOf(found3) > -1) {
                            return inst.piped_user.indexOf(found3) > -1
                        }
                    })
                else return this.ToWorkList
            },
        },

    })
});