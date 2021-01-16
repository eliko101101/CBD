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