$(function(){

	var contentWrap = $('#content-wrap'),
		toggleNav = $('#toggle-nav');
		
	contentWrap.addClass('closed');
	toggleNav.addClass('closed');
	
	toggleNav.on('click',function(){
		toggleNav.toggleClass('open closed');
		contentWrap.toggleClass('open closed');
	});

});