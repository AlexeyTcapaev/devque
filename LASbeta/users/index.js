function getWeekDay(date) {
    var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return days[date.getDay()];
}


document.addEventListener('DOMContentLoaded', function () {

    const app = new Vue({

        el: '#app',
        data: {
            user: {},
            usersList: []

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
                }
            });

            $.ajax({
                url: "getusers.php",
                type: "GET",
                data: ({}),
                dataType: "json",
                success: function (request) {
                    init.usersList = request;
                }
            });
        },
        methods:{
            UpdateUserPrice: function(value,userid){
                $.ajax({
                    url: "updateprice.php",
                    type: "GET",
                    data: ({user:userid,value:value}),
                    dataType: "json",
                    success: function (request) {
                        init.usersList = request;
                    }
                });

            }
        }

    })
});