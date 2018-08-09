"use strict";

$(document).ready(function () {
    // data table
    $('.js-data-table').dataTable({
        paging: false,
        info: false,
        language: {
            "processing": "Подождите...",
            "search": "Поиск:",
            "lengthMenu": "Показать _MENU_ записей",
            "info": "Записи с _START_ до _END_ из _TOTAL_ записей",
            "infoEmpty": "Записи с 0 до 0 из 0 записей",
            "infoFiltered": "(отфильтровано из _MAX_ записей)",
            "infoPostFix": "",
            "loadingRecords": "Загрузка записей...",
            "zeroRecords": "Записи отсутствуют.",
            "emptyTable": "В таблице отсутствуют данные",
            "paginate": {
                "first": "Первая",
                "previous": "Предыдущая",
                "next": "Следующая",
                "last": "Последняя"
            },
            "aria": {
                "sortAscending": ": активировать для сортировки столбца по возрастанию",
                "sortDescending": ": активировать для сортировки столбца по убыванию"
            }
        }
    });

    // Full calendar
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('.js-full-calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            riht: 'today'
        },
        // editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function drop() {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        events: [{
            title: 'Событие на целый день',
            start: new Date(y, m, 1)
        }, {
            title: 'Длинное событие',
            start: new Date(y, m, d - 7),
            end: new Date(y, m, d - 3)
        }, {
            id: 999,
            title: 'Повторяющееся событие',
            start: new Date(y, m, d - 3, 16, 0),
            allDay: false,
            className: 'h-bg-green'
        }, {
            title: 'Задача верстки',
            start: new Date(y, m, d + 5, 19, 0),
            end: new Date(y, m, d + 6, 22, 30),
            allDay: false,
            className: 'h-bg-yellow'
        }, {
            id: 999,
            title: 'Повторяем',
            start: new Date(y, m, d + 4, 16, 0),
            allDay: false
        }, {
            title: 'Встреча',
            start: new Date(y, m, d, 10, 30),
            allDay: false
        }, {
            title: 'Обед',
            start: new Date(y, m, d, 12, 0),
            end: new Date(y, m, d, 14, 0),
            allDay: false
        }, {
            title: 'День рождение',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false
        }, {
            title: 'Событие ссылка',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: 'http://google.com/'
        }]
    });

    // Forms repeater
    $('.js-form-repeater').repeater({
        initEmpty: true,
        // (Required if there is a nested repeater)
        // Specify the configuration of the nested repeaters.
        // Nested configuration follows the same format as the base configuration,
        // supporting options "defaultValues", "show", "hide", etc.
        // Nested repeaters additionally require a "selector" field.
        repeaters: [{
            // (Required)
            // Specify the jQuery selector for this nested repeater
            selector: '.js-repeater-item'
        }],
        hide: function hide(deleteElement) {
            if (confirm('Уверены что хотите удалить?')) {
                $(this).slideUp(deleteElement);
            }
        }
    });

    // Check only 1 checkbox if group 
    $("input:checkbox").click(function () {
        if ($(this).is(":checked")) {
            var group = "input:checkbox[name='" + $(this).attr("name") + "']";
            $(group).prop("checked", false);
            $(this).prop("checked", true);
        } else {
            $(this).prop("checked", false);
        }
    });
    // Add special class to minimalize page elements when screen is less than 768px
    setBodySmall();

    // Check if sidebar scroll is enabled
    if ($('body').hasClass('sidebar-scroll')) {
        $('#navigation').slimScroll({
            height: '100%',
            opacity: 0.3,
            size: 0,
            wheelStep: 5
        });
    };

    // Handle minimalize sidebar menu
    $('.hide-menu').on('click', function (event) {
        event.preventDefault();
        if ($(window).width() < 769) {
            $("body").toggleClass("show-sidebar");
        } else {
            $("body").toggleClass("hide-sidebar");
        }
    });

    //Summernote editor

    $('.js-editor').summernote({
        placeholder: 'Написать комментарий...'
    });

    $('.js-editor-small').summernote({
        placeholder: 'Написать комментарий...'
    });

    $('.js-date-input').datepicker({
        format: 'dd/mm/yyyy',
        language: 'ru'
    });

    // Initialize metsiMenu plugin to sidebar menu
    $('#side-menu').metisMenu();

    // Initialize iCheck plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });

    // Initialize animate panel function
    $('.animate-panel').animatePanel();

    // Function for collapse hpanel
    $('.showhide').on('click', function (event) {
        event.preventDefault();
        var hpanel = $(this).closest('div.hpanel');
        var icon = $(this).find('i:first');
        var body = hpanel.find('div.panel-body');
        var footer = hpanel.find('div.panel-footer');
        body.slideToggle(300);
        footer.slideToggle(200);

        // Toggle icon from up to down
        icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        hpanel.toggleClass('').toggleClass('panel-collapse');
        setTimeout(function () {
            hpanel.resize();
            hpanel.find('[id^=map-]').resize();
        }, 50);
    });

    // Function for close hpanel
    $('.closebox').on('click', function (event) {
        event.preventDefault();
        var hpanel = $(this).closest('div.hpanel');
        hpanel.remove();
        if ($('body').hasClass('fullscreen-panel-mode')) {
            $('body').removeClass('fullscreen-panel-mode');
        }
    });

    // Fullscreen for fullscreen hpanel
    $('.fullscreen').on('click', function () {
        var hpanel = $(this).closest('div.hpanel');
        var icon = $(this).find('i:first');
        $('body').toggleClass('fullscreen-panel-mode');
        icon.toggleClass('fa-expand').toggleClass('fa-compress');
        hpanel.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });

    // Open close right sidebar
    $('.right-sidebar-toggle').on('click', function () {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

    // Function for small header
    $('.small-header-action').on('click', function (event) {
        event.preventDefault();
        var icon = $(this).find('i:first');
        var breadcrumb = $(this).parent().find('#hbreadcrumb');
        $(this).parent().parent().parent().toggleClass('small-header');
        breadcrumb.toggleClass('m-t-lg');
        icon.toggleClass('fa-arrow-up').toggleClass('fa-arrow-down');
    });

    // Set minimal height of #wrapper to fit the window
    setTimeout(function () {
        fixWrapperHeight();
    });

    // Sparkline bar chart data and options used under Profile image on left navigation panel
    $("#sparkline1").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 11, 4], {
        type: 'bar',
        barWidth: 7,
        height: '30px',
        barColor: '#62cb31',
        negBarColor: '#53ac2a'
    });

    // Initialize tooltips
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]"
    });

    // Initialize popover
    $("[data-toggle=popover]").popover();

    $('.modal').appendTo("body");

    $(".js-select2").select2({
        language: "ru",
        placeholder: "Не выбрано"
    });

    $(".js-select2-tags").select2({
        language: "ru",
        tags: true
    });

    $(".js-touch-spin-vertical").TouchSpin({
        verticalbuttons: true
    });

    $(".js-touch-spin-horizontal").TouchSpin({});
});

$(window).bind("load", function () {
    // Since Homer 2.0 splash screen is disable by default
    // To enable splash screen please set in oyur style additional rule: .splash { display: block }
    $('.splash').css('display', 'none');
});

$(window).bind("resize click", function () {

    // Add special class to minimalize page elements when screen is less than 768px
    setBodySmall();

    // Waint until metsiMenu, collapse and other effect finish and set wrapper height
    setTimeout(function () {
        fixWrapperHeight();
    }, 300);
});

function fixWrapperHeight() {

    // Get and set current height
    var headerH = 62;
    var navigationH = $("#navigation").height();
    var contentH = $(".content").height();

    // Set new height when contnet height is less then navigation
    if (contentH < navigationH) {
        $("#wrapper").css("min-height", navigationH + 'px');
    }

    // Set new height when contnet height is less then navigation and navigation is less then window
    if (contentH < navigationH && navigationH < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerH + 'px');
    }

    // Set new height when contnet is higher then navigation but less then window
    if (contentH > navigationH && contentH < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerH + 'px');
    }
}

function setBodySmall() {
    if ($(this).width() < 769) {
        $('body').addClass('page-small');
    } else {
        $('body').removeClass('page-small');
        $('body').removeClass('show-sidebar');
    }
}

// Animate panel function
$.fn['animatePanel'] = function () {

    var element = $(this);
    var effect = $(this).data('effect');
    var delay = $(this).data('delay');
    var child = $(this).data('child');

    // Set default values for attrs
    if (!effect) {
        effect = 'zoomIn';
    }
    if (!delay) {
        delay = 0.05;
    } else {
        delay = delay / 10;
    }
    if (!child) {
        child = '.row > div';
    } else {
        child = "." + child;
    }

    //Set defaul values for start animation and delay
    var startAnimation = 0;
    var start = Math.abs(delay) + startAnimation;

    // Get all visible element and set opacity to 0
    var panel = element.find(child);
    panel.addClass('opacity-0');

    // Get all elements and add effect class
    panel = element.find(child);
    panel.addClass('stagger').addClass('animated-panel').addClass(effect);

    var panelsCount = panel.length + 10;
    var animateTime = panelsCount * delay * 10000 / 10;

    // Add delay for each child elements
    panel.each(function (i, elm) {
        start += delay;
        var rounded = Math.round(start * 10) / 10;
        $(elm).css('animation-delay', rounded + 's');
        // Remove opacity 0 after finish
        $(elm).removeClass('opacity-0');
    });

    // Clear animation after finish
    setTimeout(function () {
        $('.stagger').css('animation', '');
        $('.stagger').removeClass(effect).removeClass('animated-panel').removeClass('stagger');
    }, animateTime);
};

/**
 * Pie charts data and options used in many views
 */
$(function () {

    $("span.pie").peity("pie", {
        fill: ["#62cb31", "#edf0f5"]
    });

    $(".line").peity("line", {
        fill: '#62cb31',
        stroke: '#edf0f5'
    });

    $(".bar").peity("bar", {
        fill: ["#62cb31", "#edf0f5"]
    });

    $(".bar_dashboard").peity("bar", {
        fill: ["#62cb31", "#edf0f5"]
    });
});
//# sourceMappingURL=theme-run.js.map
