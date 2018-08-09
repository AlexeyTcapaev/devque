document.addEventListener('DOMContentLoaded', function () {
    const app = new Vue({

        el: '#app',
        data: {
            user: {},
            UserList: [],
            search: ''
        },
        mounted() {
            const init = this
            $.ajax({
                url: "inituser.php",
                type: "GET",
                data: ({}),
                dataType: "json",
                success: function (request) {
                    init.user = request[0]
                }
            });
            $.ajax({
                url: "get_users.php",
                type: "GET",
                data: ({}),
                dataType: "json",
                success: function (request) {
                    Object.keys(request).forEach(user => {
                        init.UserList.push(request[user])
                    });
                }
            });
        },
        methods: {
            Call: function (user) {
                const init = this
                $.ajax({
                    url: "call.php",
                    type: "GET",
                    data: ({
                        from: init.user.phone,
                        to: user.phone
                    }),
                    dataType: "json",
                    success: function (request) {
                        console.log(request)
                    }
                });
            }
        },
        computed: {
            ReadyList() {
                return this.UserList.filter(user => {
                    if (this.search === "")
                        return true;
                    else return user.name.toLowerCase().indexOf(this.search) >-1;
                })
            }
        }
    })
});