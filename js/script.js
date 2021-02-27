$( ".todas-amenazas" ).click(function() {
    $( ".bg-mapa" ).css('background-image', 'url("' + '../img/bg-mapa/mapa-1.jpg' + '")');
    $(".aluviones, .terremotos, .tsunamis, .volcanes ").css('opacity','1');
    $( ".bg-mapa" ).removeClass( "remover-animacion" );
});

$( ".volcanes" ).click(function() {
    $( ".bg-mapa" ).css('background-image', 'url("' + '../img/bg-mapa/mapa-2.jpg' + '")');
    $(".aluviones, .terremotos, .tsunamis, .volcanes ").css('opacity','0.5');
    $( ".bg-mapa" ).removeClass( "remover-animacion" );
    $(this).css('opacity','1');
});

$( ".aluviones" ).click(function() {
    $( ".bg-mapa" ).css('background-image', 'url("' + '../img/bg-mapa/mapa-3.jpg' + '")');
    $(".terremotos, .tsunamis, .volcanes ").css('opacity','0.5');
    $( ".bg-mapa" ).removeClass( "remover-animacion" );
    $(this).css('opacity','1');
});

$( ".terremotos" ).click(function() {
    $( ".bg-mapa" ).css('background-image', 'url("' + '../img/bg-mapa/mapa-4.jpg' + '")');
    $(".aluviones, .tsunamis, .volcanes ").css('opacity','0.5');
    $( ".bg-mapa" ).removeClass( "remover-animacion" );
    $(this).css('opacity','1');
});

$( ".tsunamis" ).click(function() {
    $( ".bg-mapa" ).css('background-image', 'url("' + '../img/bg-mapa/mapa-5.jpg' + '")');
    $(".aluviones, .terremotos, .volcanes ").css('opacity','0.5');
    $( ".bg-mapa" ).removeClass( "remover-animacion" );
    $(this).css('opacity','1');
});

$( ".click-valparaiso" ).click(function() {    
    $( "#talcahuano, #cartagena, #iquique").hide();
    $( "#valparaiso" ).show();
    pauseVideosAudios("video-valparaiso");    
});

$( ".click-cartagena" ).click(function() {
    $( "#talcahuano, #valparaiso, #iquique").hide();
    $( "#cartagena" ).show();    
    pauseVideosAudios("video-cartagena");   
});


$( ".click-talcahuano" ).click(function() {
    $( "#valparaiso, #cartagena, #iquique").hide();
    $( "#talcahuano" ).show();
    pauseVideosAudios("video-talcahuano");   
});

$( ".click-iquique" ).click(function() {
    $( "#talcahuano, #cartagena, #valparaiso").hide();
    $( "#iquique" ).show();
    pauseVideosAudios("video-iquique");   
});

$( ".click-chaiten" ).click(function() {
    $( "#villarica").hide();
    $( "#chaiten" ).show();
    pauseVideosAudios("video-chaiten");   
});

$( ".click-villarica" ).click(function() {
    $( "#chaiten").hide();
    $( "#villarica" ).show();
    pauseVideosAudios("video-villarica");   
});

$( "#canvas, #canvas-cartagena, #canvas-talcahuano, #canvas-iquique, #canvas-volcan, #canvas-villarica, #canvas-chaiten, #canvas-tsunami" ).click(function() {
    $(this).find("div:first").hide(1500);
});

$("#canvas, #canvas-cartagena, #canvas-talcahuano, #canvas-iquique, #canvas-volcan, #canvas-villarica, #canvas-chaiten, #canvas-tsunami").on("tap",function(){
    $(this).find("div:first").hide(1500);
});

function pauseVideosAudios(multimedia) {
    var video = document.getElementById(multimedia);
    video.play();
}

$(document).ready(function(){
    setTimeout(function(){ 
        document.addEventListener('play', function(e){      
            var audios = document.getElementsByTagName('audio');
            var videos = document.getElementsByClassName('video-hablando');
            for(var i = 0, len = audios.length; i < len;i++){
                if(audios[i] != e.target){
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
            for(var i = 0, len = videos.length; i < len;i++){
                if(videos[i] != e.target){
                    videos[i].pause();
                    videos[i].currentTime = 0;
                }
            }
            
        }, true);
     }, 200);
    
});

if($(window).width() < 767)
{
    $( ".listado-amenazas").hide();
    $( ".boton-ver").show();
    $(".zona-norte").css('margin-top','-150px');    
} else {
   // change functionality for larger screens
}

$( ".boton-ver" ).click(function() {
    $( ".listado-amenazas").show();
    $( ".boton-ver").hide();
    $( ".boton-esconder").show();
    $(".zona-norte").css('margin-top','-400px');
});

$( ".boton-esconder" ).click(function() {
    $( ".listado-amenazas").hide();
    $( ".boton-ver").show();
    $( ".boton-esconder").hide();
    $(".zona-norte").css('margin-top','-150px');
});

$( ".zona-norte" ).click(function() {
    $( ".bg-mapa" ).addClass( "zona-norte-bg" );
    $(".zona-norte, .zona-centro, .zona-sur").addClass( "esconder-click" );
    $( "#amenazas-listado, .texto-zona-centro, .texto-zona-sur, .zona-centro-menu, .zona-sur-menu").hide(); 
    $( ".bg-mapa" ).removeClass( "zona-centro-bg zona-sur-bg" );
    $( ".texto-zona-norte, .volver-atras, .zona-norte-menu").show();  
    $('html, body').animate(
        {
          scrollTop: $('#titulo-zona').offset().top,
        },
        250,
        'linear'
      )
});

$( ".zona-centro" ).click(function() {
    $( ".bg-mapa" ).addClass( "zona-centro-bg" );
    $(".zona-norte, .zona-centro, .zona-sur").addClass( "esconder-click" );
    $( "#amenazas-listado, .texto-zona-norte, .texto-zona-sur, .zona-norte-menu, .zona-sur-menu").hide(); 
    $( ".bg-mapa" ).removeClass( "zona-norte-bg zona-sur-bg" );
    $( ".texto-zona-centro, .volver-atras, .zona-centro-menu").show();  
    $('html, body').animate(
        {
          scrollTop: $('#titulo-zona').offset().top,
        },
        250,
        'linear'
      )
});

$( ".zona-sur" ).click(function() {
    $( ".bg-mapa" ).addClass( "zona-sur-bg" );
    $(".zona-norte, .zona-centro, .zona-sur").addClass( "esconder-click" );
    $( "#amenazas-listado, .texto-zona-norte, .texto-zona-centro, .zona-norte-menu, .zona-centro-menu").hide(); 
    $( ".bg-mapa" ).removeClass( "zona-norte-bg zona-centro-bg" );
    $( ".texto-zona-sur, .volver-atras, .zona-sur-menu").show();  
    $('html, body').animate(
        {
          scrollTop: $('#titulo-zona').offset().top,
        },
        250,
        'linear'
      )
});

$( ".muestra-virtual" ).click(function() {
    $('html, body').animate(
        {
          scrollTop: $('#muestra-virtual-descarga').offset().top-200,
        },
        250,
        'linear'
      )
});

$( ".click-comienza-explorar" ).click(function() {
    $('html, body').animate(
        {
          scrollTop: $('.bg-mapa').offset().top,
        },
        250,
        'linear'
      )
});



$( "#titulo-zona" ).click(function() {
    $( "#amenazas-listado").show(); 
    $(".zona-norte, .zona-centro, .zona-sur").removeClass( "esconder-click" );
    $( ".texto-zona-norte, .texto-zona-centro, .texto-zona-sur, .volver-atras, .zona-norte-menu, .zona-centro-menu, .zona-sur-menu").hide(); 
    $( ".bg-mapa" ).removeClass( "zona-norte-bg zona-centro-bg zona-sur-bg" );  
    $(".texto-zona-norte, .texto-zona-centro, .texto-zona-sur").hide();
    $( ".bg-mapa" ).addClass( "remover-animacion" );
});

$( ".siguiente-boton-arica-parinacota" ).click(function() {
    $(this).closest('#arica-parinacota').find('img.card-img-top').attr("src", "../img/bg-mapa/tsunamis.jpg");
    $(this).hide();
    $(".anterior-boton-arica-parinacota").show();
});

$( ".anterior-boton-arica-parinacota" ).click(function() {
    $(this).closest('#arica-parinacota').find('img.card-img-top').attr("src", "../img/bg-mapa/terremoto.jpg");
    $(this).hide();
    $(".siguiente-boton-arica-parinacota").show();
});

$( ".siguiente-boton-coquimbo" ).click(function() {
    $(this).closest('#coquimbo').find('img.card-img-top').attr("src", "../img/bg-mapa/tsunamis.jpg");
    $(this).hide();
    $(".anterior-boton-coquimbo").show();
});

$( ".anterior-boton-coquimbo" ).click(function() {
    $(this).closest('#coquimbo').find('img.card-img-top').attr("src", "../img/bg-mapa/terremoto.jpg");
    $(this).hide();
    $(".siguiente-boton-coquimbo").show();
});

$( ".siguiente-boton-valparaiso" ).click(function() {
    $(this).closest('#valparaiso').find('img.card-img-top').attr("src", "../img/bg-mapa/tsunamis.jpg");
    $(this).hide();
    $(".anterior-boton-valparaiso").show();
});

$( ".anterior-boton-valparaiso" ).click(function() {
    $(this).closest('#valparaiso').find('img.card-img-top').attr("src", "../img/bg-mapa/terremoto.jpg");
    $(this).hide();
    $(".siguiente-boton-valparaiso").show();
});

$( ".siguiente-boton-maule" ).click(function() {
    $(this).closest('#maule').find('img.card-img-top').attr("src", "../img/bg-mapa/tsunamis.jpg");
    $(this).hide();
    $(".anterior-boton-maule").show();
});

$( ".anterior-boton-maule" ).click(function() {
    $(this).closest('#maule').find('img.card-img-top').attr("src", "../img/bg-mapa/terremoto.jpg");
    $(this).hide();
    $(".siguiente-boton-maule").show();
});

$( ".siguiente-boton-los-rios" ).click(function() {
    $(this).closest('#los-rios').find('img.card-img-top').attr("src", "../img/bg-mapa/tsunamis.jpg");
    $(this).hide();
    $(".anterior-boton-los-rios").show();
});

$( ".anterior-boton-los-rios" ).click(function() {
    $(this).closest('#los-rios').find('img.card-img-top').attr("src", "../img/bg-mapa/terremoto.jpg");
    $(this).hide();
    $(".siguiente-boton-los-rios").show();
});

$( ".bg-mapa" ).click(function() {

});

