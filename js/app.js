$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        hidePoses();
        $('.ryu-ready').show();
    })
    .mouseleave(function(){
        hidePoses();
        $('.hadouken').hide();
        $('.ryu-still').show();
    })
    .mousedown(function(){
        playHadouken();
        hidePoses();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
            .animate(
                {"left": "1020px"}, 
                500, function(){
                    $(this).hide();
                    $(this).css("left", "520px");
                }
            );
        }
    )
    .mouseup(function(){
        hidePoses();
        $('.ryu-ready').show();
    });

    $(document).keydown(function(e){
        if(e.which === 88){
            hidePoses();
            $('.ryu-cool').show();
        }
    });
    $(document).keyup(function(e){
        if(e.which === 88){
            hidePoses();
            $('.ryu-still').show();
        }
    });
});

//Shows the Hadouken fire effect
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

//Hides all images before displaying the needed one.
function hidePoses(){
    $('.ryu-cool').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.ryu-still').hide();
}