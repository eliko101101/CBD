//==========="табы"
$('#benefits').hide();
$('#diference').hide();
$('#tab-1').on('click', function(){
    $('#what').show();
    $('#benefits').hide();
    $('#diference').hide();
})
$('#tab-2').on('click', function(){
    $('#benefits').show();
    $('#what').hide();
    $('#diference').hide();
})

$('#tab-3').on('click', function(){
    $('#diference').show();
    $('#what').hide();
    $('#benefits').hide();
})

//========================гармошка
  $( function() {
    $( "#accordion" ).accordion({
        heightStyle: "content",
    });
  } );

//====================плавная прокрутка
$(function () {
    $('#menu').on('click', 'a', function (event) {
        event.preventDefault();

        let id = $(this).attr('href');
        let top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 1700);
    });
});