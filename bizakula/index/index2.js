$(document).ready(function () {
    $('#homepage').fullpage({
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 2000,
        anchors: ['home', 'about-us', 'what-we-do', 'our-work'],
        sectionsColor: ['#f2f2f2', '#1BBC9B', '#7E8F7C', '#C63D0F'],
        verticalCentered: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Eureka Mediatech', 'About Us', 'What we do', 'Our Work'],
        responsiveWidth: 900,
    });
});