$('.menu').on('click', 'a', function(event){
	event.preventDefault();
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop:  distanse
	}, 700);
});


$('.next-slide').on('click', function(){
  var link = $(this).attr('href');
  var distanse = $(link).offset().top;
  $('html, body').animate({
    scrollTop:  distanse
  }, 700);
});

// izotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
  masonry: {
    horizontalOrder: true
  }
})

// filters izotope
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  //console.log(filterValue);
  $grid.isotope({ filter: filterValue });
});

$(document).ready(function(){
  $('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
  });
});

