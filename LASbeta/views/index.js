function getWeekDay(date) {
    var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return days[date.getDay()];
}

function random_rgba() {
    var o = Math.round,
        r = Math.random,
        s = 254;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

document.addEventListener('DOMContentLoaded', function () {

    const app = new Vue({

        el: '#app',
        data: {
            user: {},
            formetter: []
        },
        updated: function () {

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
                }
            });
            $.ajax({
                url: "get_view.php",
                type: "GET",
                data: ({}),
                dataType: "json",
                success: function (request) {

                    Object.keys(request).forEach(project => {
                        request[project].backgroundColor = []
                        request[project].backgroundColor.push(random_rgba())
                        request[project].borderColor = []
                        request[project].borderColor.push(random_rgba())
                        request[project].borderWidth = 2
                        init.formetter.push(request[project])
                    });
                    var ctx = document.getElementById("myChart").getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
                            datasets: init.formetter
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                }
            });
        },
        watch: {

        },
        methods: {

        },
        computed: {

        },

    })
});