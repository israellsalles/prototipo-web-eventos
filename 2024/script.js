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
    $('body').scrollspy({ target: '.navbar', offset: 100 });

    // Prevent scrolling when clicking on tab links
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // Check if the hash is present in the URL and remove it to prevent scroll
        if (history.pushState) {
            history.pushState(null, null, ' ');
        } else {
            window.location.hash = '';
        }
    });

      // Mostrar botões flutuantes ao rolar para o fim da página
      $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop() + $(window).height();
        var documentHeight = $(document).height();

        if (scrollPosition >= documentHeight - 100) { // 100px antes do fim da página
            $('#botao-inscricao').fadeIn();
            $('#botao-compartilhar').fadeIn();
        } else {
            $('#botao-inscricao').fadeOut();
            $('#botao-compartilhar').fadeOut();
        }
    });

    
     // Lógica de compartilhamento
     $('#botao-compartilhar').on('click', function (e) {
        e.preventDefault();

        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            }).then(() => {
                console.log('Link compartilhado com sucesso!');
            }).catch((error) => {
                console.error('Erro ao compartilhar:', error);
            });
        } else {
            alert('Desculpe, seu navegador não suporta o compartilhamento.');
        }
    });

});
