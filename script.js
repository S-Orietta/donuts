

$(function(){
  
	// 「.social-icon」にマウスが乗ったときに、そのfont-sizeを30pxに変更し、
	// 離れたときにはfont-sizeを24pxに。
  $('.items-1').hover(
	function(){
	  $(this).transform({
		'scale':'1.2'
	  },300);
	},
	function(){
	  $(this).animate({
		'scale':'1.0'
	  },300);
	}
	
	)

	
	  $('.items-1').click(function() {
		$('#item-modal-1').fadeIn();
	  });
	  $('.close-modal').click(function() {
		$('#item-modal-1').fadeOut();
	  });


	  $('.items-2').click(function() {
		$('#item-modal-2').fadeIn();
	  });
	  $('.close-modal').click(function() {
		$('#item-modal-2').fadeOut();
	  });
	
	  
	  $('.items-3').click(function() {
		$('#item-modal-3').fadeIn();
	  });
	  $('.close-modal').click(function() {
		$('#item-modal-3').fadeOut();
	  });

	  $('.items-4').click(function() {
		$('#item-modal-4').fadeIn();
	  });
	  $('.close-modal').click(function() {
		$('#item-modal-4').fadeOut();
	  });
	
	  $('.items-5').click(function() {
		$('#item-modal-5').fadeIn();
	  });
	  $('.close-modal').click(function() {
		$('#item-modal-5').fadeOut();
	  });
	 
	  $('.items-6').click(function() {
		$('#item-modal-6').fadeIn();
	  });
	  $('.close-modal').click(function() {
		$('#item-modal-6').fadeOut();
	  });
	
	  $('.items-7').click(function() {
		$('#item-modal-7').fadeIn();
	  });
	  $('.close-modal').click(function() {
		$('#item-modal-7').fadeOut();
	  });

	  $('.items-8').click(function() {
		$('#item-modal-8').fadeIn();
	  });
	  $('.close-modal').click(function() {
		$('#item-modal-8').fadeOut();
	  });

	
  });