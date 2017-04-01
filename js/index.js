window.addEventListener('load',function(){
     $('.wrapper_picture')[0].addEventListener('click',function(){
//   	$('.prount_wra').css('display','none');
//   	$('.second_info').css('display','block');
     	$('.wrapper_text').css('transform','rotate(360deg)').css('opacity','0');
     	$('.wrapper_left').css('transform','translate(-100%)');
     	$('.wrapper_right').css('transform','translate(100%)');
     	$('.wrapper_pic_center').css('opacity','0')
     })
	
	
	
},false);