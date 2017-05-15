Title = gon.video_title




function color(name){
   $(name).css('color', 'red')
}

color('.place');
/*
function samnail(title){
  $('#' + title + 'img').on({
    'mouseenter':function(){
      sethover = setTimeout(function(){
        $('#').css('display' , 'inline');
        $('#Paparazziimg').css('display' , 'none');
      },200);
    }
  });
}
}*/

$(function() {
$('#Paparazziimg').on({
    'mouseenter':function(){
      sethover = setTimeout(function(){
        $('#Paparazzi').css('display' , 'inline');
        $('#Paparazziimg').css('display' , 'none');
      },200);
    }
  });
});

$(function() {
$('#Paparazzi').on({
'mouseleave':function(){
sethover = setTimeout(function(){
  $('#Paparazzi').css('display' , 'none');
    $('#Paparazziimg').css('display' , 'inline');
},2000);
}
});
});

$(function() {
$('#BadRomanceimg').on({
'mouseenter':function(){
sethover = setTimeout(function(){
  $('#BadRomance').css('display' , 'inline');
  $('#BadRomanceimg').css('display' , 'none');
},200);
}
});
});

$(function() {
$('#BadRomance').on({
'mouseleave':function(){
sethover = setTimeout(function(){
$('#BadRomance').css('display' , 'none');
$('#BadRomanceimg').css('display' , 'inline');
},2000);
}
});
});

$(function() {
$('#Unicornimg').on({
'mouseenter':function(){
sethover = setTimeout(function(){
  $('#Unicorn').css('display' , 'inline');
  $('#Unicornimg').css('display' , 'none');
},200);
}
});
});

$(function() {
$('#Unicorn').on({
'mouseleave':function(){
sethover = setTimeout(function(){
$('#Unicorn').css('display' , 'none');
$('#Unicornimg').css('display' , 'inline');
},2000);
}
});
});


$(function() {
$('#PerfectIllusionimg').on({
    'mouseenter':function(){
      sethover = setTimeout(function(){
        $('#PerfectIllusion').css('display' , 'inline');
        $('#PerfectIllusionimg').css('display' , 'none');
      },200);
    }
  });
});

$(function() {
$('#PerfectIllusion').on({
'mouseleave':function(){
sethover = setTimeout(function(){
  $('#PerfectIllusion').css('display' , 'none');
    $('#PerfectIllusionimg').css('display' , 'inline');
},2000);
}
});
});


$(function() {
$('#PerfectIllusionimg').on({
    'mouseenter':function(){
      sethover = setTimeout(function(){
        $('#PerfectIllusion').css('display' , 'inline');
        $('#PerfectIllusionimg').css('display' , 'none');
      },200);
    }
  });
});

$(function() {
$('#PerfectIllusion').on({
'mouseleave':function(){
sethover = setTimeout(function(){
  $('#PerfectIllusion').css('display' , 'none');
    $('#PerfectIllusionimg').css('display' , 'inline');
},2000);
}
});
});


/*$(function(){
  $("#maincontents").css({opacity:'0'});;
  setTimeout(function(){
    $("#maincontents").stop().animate({opacity:'1'},1000);
  },5000);
});

$(function(){
      $( '#welcome' ).fadeOut( 5000, function() {
  $( '#welcome' ).remove();
});
});              */

 $(function(){
        $("gon.video_id").css('color', 'red');
      });