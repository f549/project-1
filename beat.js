$(document).ready(function() {
    let sections = $('section');
    let navbar = $('#nav');
    let navbarHeight = navbar.height();

    let sectionOffset = [];

    sections.each(function() {
        let section = $(this);

        let position = section.offset().top - navbarHeight;
        let backgroundColor = section.css("background-color");

        sectionOffset.push({ 'postion': position, 'color': backgroundColor });

    });

    $(window).on('scroll', function() {
        let scrollPos = $(document).scrollTop();

        $.each(sectionOffset, function(index, section) {
            if (scrollPos >= section.postion) {
                navbar.css("background-color", section.color);
            }
        })
    });

});