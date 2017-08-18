//smartRollover.js
function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].src.match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}

$(function() {
	
	//SCROLL TO TOP
	$(".page_up a").click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;

	});
});

$(function() {
	$('a img').on({
		'mouseenter':function() {
			$(this).fadeTo(200, 0.6);
		},
		'mouseleave':function() {
			$(this).fadeTo(200, 1.0);
		}
	});
    $('a.link_over').on({
        'mouseenter':function() {
            $(this).fadeTo(200, 0.6);
        },
        'mouseleave':function() {
            $(this).fadeTo(200, 1.0);
        }
    });
    $('.imghover_on').each(
        function() {
            this.onImage = $(this).attr('src').replace(/^(.+)(\.[a-z]+)$/,"$1"+'_on'+"$2");
            this.onHtml = $('<img src="'+this.onImage+'" alt="" style="position:absolute; opacity:0;" />');
            $(this).before(this.onHtml);
            $(this.onHtml).hover(
                function() {
                    $(this).stop().animate({'opacity': '1'}, 100);
                },
                function() {
                    $(this).stop().animate({'opacity': '0'}, 100);
                }
            )
        }
    )
});

$(document).ready(function() {
    var flag = false;
    var page_up = $('.page_up');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            if (flag == false) {
                flag = true;
                page_up.stop().fadeIn();
            }
        } else {
            if (flag) {
                flag = false;
                page_up.stop().fadeOut();
            }
        }
    });
    page_up.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
// SCROLL TO TOP FADE EFFECT
 /*$(window).load(function(){
  
    $(window).scroll(function(){

    var scroll = $(window).scrollTop();

    if(scroll >= 150){
       $('.page_up').fadeIn();
    }else{
       $('.page_up').fadeOut();
     }

   });

 });*/
