
jQuery(document).ready(function(){
    jQuery(".titleWrapper1").addClass("ready");
    
jQuery(".titleWrapper1 h1").each(function(){
    var fullString;
    var characters = jQuery(this).text().split("");
    
    $this = jQuery(this);
    $this.empty();
    $.each(characters, function (i, el) {
        if(el == " "){el = "&nbsp;"};
    $this.append("<span>" + el + "</span");
    });
        
});
    
});






jQuery(document).ready(function(){
    jQuery(".titleWrapper2").addClass("ready");
    
jQuery(".titleWrapper2 h1").each(function(){
    var fullString;
    var characters = jQuery(this).text().split("");
    
    $this = jQuery(this);
    $this.empty();
    $.each(characters, function (i, el) {
        if(el == " "){el = "&nbsp;"};
    $this.append("<span>" + el + "</span");
    });
        
});
    
});






jQuery(document).ready(function(){
    jQuery(".titleWrapper3").addClass("ready");
    
jQuery(".titleWrapper3 h1").each(function(){
    var fullString;
    var characters = jQuery(this).text().split("");
    
    $this = jQuery(this);
    $this.empty();
    $.each(characters, function (i, el) {
        if(el == " "){el = "&nbsp;"};
    $this.append("<span>" + el + "</span");
    });
        
});
    
});







// BAR
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});




//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//Gallery

(function() {
    var $gallery = new SimpleLightbox('.gallery a', {});
})();


