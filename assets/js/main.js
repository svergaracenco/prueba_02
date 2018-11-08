$(function() {
	
	$('.lista-tweets').on('click', '.card',  function() {
		$(this).toggleClass('card--open');
	});
	
	$('.lista-tweets').on('click', '.card__like' , function (event) {
		event.stopPropagation();
		event.preventDefault();
//		$(this).toggleClass('card__like--red');
		
		var target =$(this).siblings('.card__hidden')
											  .find ('.social__element')
											  .eq(1)
											  .children ('.social__number')
										
		
		var number = target.text ();
		number = parseInt (number);
		
		if ($(this).hasClass('card__like--red')) {
			$(this).removeClass('card__like--red');
			target.text(number-=1);
		} else {
			$(this).addClass('card__like--red');
			target.text(number+=1);
		}
		

		
	});
	
	
	$('.borrar').click(function(){
   $(this).parent().parent().parent().remove();
});
		

	
	$('#author').on('change', function (event) {
		var fileName = $(this).val();
		var fileUrl = 'assets/img/profiles/' + fileName;
		
		$('.create__profile .create__img').attr('src', fileUrl);
		
	});
	
	$('.create__form').on('submit', function	(event) {
		event.preventDefault();
	
			     
	var title					 = $('#name').val();
	var author				 = $('#author').val();
	var name					= $('select#author').children(':selected').text();
	var likes					 = $('#likes').val();
						 
	$('.lista-tweets').append(`



	<li class="media  tweet">
			<img class="mr-3" src="${ author }">
			<div class="media-body">
				<h5 class="mt-0 mb-1 celeste">User</h5>
				<p>${ title }</p>
				<a class="card__like card__like" href="#">
					<i class="fas fa-heart"></i>
					<div class="social__number">89</div>
				</a>
				<a href="#"><p class="borrar">borrar</p></a>
			</div>
		</li>


`);			
		
		 $('#name').val('');
		 $('#image').val('uk.png');
		$('.create__profile .create__img').attr('src', 'assets/img/profiles/uk.png');
		$('#likes').val('');
		

	});
});