// Função para adicionar animação ao clicar nas seções da barra de navegação
$(document).ready(function() {
    // Suavizar o scroll para as seções
    $(".navbar-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Play do vídeo ao clicar na imagem
    $('.video-thumbnail a').on('click', function(event) {
        var videoUrl = $(this).attr('href');
        // Adiciona o link do vídeo no iframe
        $('#videoFrame').attr('src', videoUrl);
        event.preventDefault();
    });
});
