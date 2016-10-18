$(document).ready(function(){
    $('button').click(function(){
       alert('Это вомбат Сергей. Он потерялся');
       });
    $(document).keydown(function(key){
        switch (parseInt(key.which, 10)) {
            case 37:
                $('#dude').animate({left: "-=20px"}, 'fast');
                break;
            case 38:
                $('#dude').animate({top: "-=20px"}, 'fast');
                break;
            case 39:
                $('#dude').animate({left: "+=20px"}, 'fast');
                break;
            case 40:
                $('#dude').animate({top: "+=20px"}, 'fast');
                break;
            case 116:
                break;
            case 18:
                break;
            case 9:
                break;
            default:
                alert('Используйте клавишы \u2190 \u2192 \u2191  \u2193');
        };
        // if (check){
        //     alert('You saved his life!!!');
        // }
    });
});
