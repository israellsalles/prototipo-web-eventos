$(document).ready(function () {

    // Smooth scrolling
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "" && !$(this).attr('data-toggle')) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });

            // Collapse the navbar after clicking on an item (only on mobile view)
            if ($('.navbar-toggler').is(':visible')) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });

    // Show modal when clicking on the "Download" menu item
    $('a[href="#download"]').on('click', function(event) {
        event.preventDefault();
        $('#downloadModal').modal('show');
    });

    // Show gallery modal when clicking on the "Gallery" menu item
    $('a[href="#gallery"]').on('click', function(event) {
        event.preventDefault();
        $('#galleryModal').modal('show');
    });

        // Show versoes modal when clicking on the "Gallery" menu item
        $('a[href="#versoes"]').on('click', function(event) {
            event.preventDefault();
            $('#previousVersionsModal').modal('show');
        });

    // Activate scrollspy
    $('body').scrollspy({ target: '.navbar', offset: 70 });

    // Prevent scrolling when clicking on tab links
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // Check if the hash is present in the URL and remove it to prevent scroll
        if (history.pushState) {
            history.pushState(null, null, ' ');
        } else {
            window.location.hash = '';
        }
    });
});
