$(document).ready(function(){

	$('.slider__body').slick({
	  /* setting-name: setting-value */
	  /* $('.single-item').slick(); */
	  dots: true,
	 // arrows: false,
	  accessibility: false,
	  slidesToShow: 1,
	  autoplaySpeed: 3000,
	  adaptiveHeight: true,
	  nextArrow:'<button type="button" class="slick-next"><img src="images/icon/arrow-next.svg"></button>',
	  prevArrow:'<button type="button" class="slick-prev"><img src="images/icon/arrow-prev.svg"></button>', 
	  responsive:[{
		  breakpoint: 768,
		  settings: {
			arrows: false
		  }
	  }]
	});

	$('.slider-2__box').slick({
		/* setting-name: setting-value */
		/* $('.single-item').slick(); */
		dots: false,
	  	//arrows: true,
		accessibility: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		nextArrow:'<button type="button" class="slick-2-next"><img src="images/icon/slid-2-next.svg"></button>',
		prevArrow:'<button type="button" class="slick-2-prev"><img src="images/icon/slid-2-prev.svg"></button>', 
		responsive:[{
			breakpoint: 768,
			settings: {
			  //arrows: true
			}
		}]
	  });
  

  })
  if($('.gallery').length>0){
	baguetteBox.run('.gallery', {
		// Custom options
		//fullScreen: true
		//overlayBackgroundColor:'rgba(245, 10, 10, 0.8)'
	});
}
/*
CLOUD-ZOOM
<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
	<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
</a>
*/
$('.filter__item').click(function(event){
	var category=$(this).data('filter');
	if (category==1) {
		$('.projects__columns').show();
	}else{
		$('.projects__columns').hide();
		$('.projects__columns.f_'+category).show();
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active');
	
	return false;
});      