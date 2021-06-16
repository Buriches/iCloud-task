


/* AJAX ↓ */

$('#submit').click(function(){
	

	document.getElementById('songs').innerHTML = "";
	var xhr = new XMLHttpRequest();
	xhr.onloadend = () => {
	const result = xhr.responseText;
	const answer = JSON.parse(result);
	const phpIn = document.querySelector("#songs");

	

	answer.results.map((tracks) => {
		
		var time = tracks.trackTimeMillis;
        var seconds = (time / 1000).toFixed(1);
        var minutes = (time / (1000 * 60)).toFixed(1);
        var fullMinutes = Math.trunc(minutes);
        var fullSeconds = Math.trunc(seconds%60);
        if (fullSeconds < 10) {
        	var trueTime = fullMinutes + ":" + "0" + fullSeconds + " min"; 
        }else{
        	var trueTime = fullMinutes + ":" + fullSeconds + " min"; 
        }
       
    
		const resultHtml = `
			
						<div class="row song-item__preview">
							<div class="song-item__img"><img src='${tracks.artworkUrl100}'></img></div>
							<div class="col song-item__artist"><div class="inner">${tracks.artistName}</div></div>
							<div class="col song-item__track"><div class="inner">${tracks.trackName}</div></div>
							<div class="col song-item__collection"><div class="inner">${tracks.collectionName}</div></div>
							<div class="col song-item__genre"><div class="inner">${tracks.primaryGenreName}</div></div>
							<div class="song-item__toggle toggle">
								<div class="toggle__button toggle__plus">
									<i class="fa fa-plus" aria-hidden="true"></i>
								</div>
								<div class="toggle__button toggle__minus">
									<i class="fa fa-minus" aria-hidden="true"></i>
								</div>
							</div>
						</div>
						<!--Full info about a song ↓ -->
						<div class="song-item__full song-full row">
							<div class="empty-img"></div>
							<div class="col row">
								<h3 class="song-full__full-name">${tracks.artistName} - ${tracks.trackName} <i class="fa fa-music" aria-hidden="true"></i></h3>
								<div class="col">
								<ul class="song-full__full-info">
									<li>Collection: <span>${tracks.collectionName}</span></li>
									<li>Track Count: <span>${tracks.trackCount}</span></li>
									<li>Price: <span> ${tracks.collectionPrice} ${tracks.currency}</span></li>
								</ul>
								</div>
								<div class="col">
								<ul class="song-full__full-info">
									<li>Track duration: <span>${trueTime}</span></li>
									<li>Track Price: <span> ${tracks.trackPrice} ${tracks.currency}</span></li>
								</ul>
							</div>
							</div>
							
							<div class="EmptyToggle"></div>
						</div>
						<!--End of full ↑ -->
					
		`;
		


		

		var songItem = document.createElement("div");
		songItem.classList.add("song-item")
		songItem.innerHTML = resultHtml;
		phpIn.insertAdjacentElement('beforeend', songItem);
		$('.song-item__full').css('display', 'flex');
	$('.song-item__full').slideUp(0);



	});

};

	let request = document.getElementById('search').value;
	request = request.replace( / /g, "+" );

	let iCloudUrl = 'https://itunes.apple.com/search?term=';
	let cors = 'https://cors-anywhere.herokuapp.com/';
	xhr.open('GET', iCloudUrl+request+'&limit=15', true);

	xhr.send();
});



// $(document).ready(function(){/* Чтоб не было бага с рывком при первой активации аккордеона */
// 	$('.song-item__full').css('display', 'flex');
// 	$('.song-item__full').slideUp(0);
// });



// $('.song-item').click(function(){
// 	if ($(this).hasClass("activate")){
// 		$('.toggle__plus').css('display', 'block');
// 		$('.toggle__minus').css('display', 'none');
// 		$('.song-item').removeClass('activate');
// 		FullToUp();
// 	}else{
// 		FullToUp();
// 		$('.song-item').removeClass('activate');
// 		$(this).addClass('activate');
// 		$('.toggle__plus').css('display', 'block');
// 		$('.toggle__minus').css('display', 'none');
// 		$('.activate > .song-item__preview > .song-item__toggle > .toggle__minus').css('display', 'block');
// 		$('.activate > .song-item__preview > .song-item__toggle > .toggle__plus').css('display', 'none');
// 		FullToDown();
// 	};
// });

// function FullToDown(){
// 	$('.activate > .song-item__full').slideDown(100);
// 	$('.activate > .song-item__full').css('display', 'flex');

// }
// function FullToUp(){
// 	$('.song-item__full').slideUp(100);
// }
// /* FORM ↓ */

$(document).ready(function(){/* Чтоб не было бага с рывком при первой активации аккордеона */
	$('.song-item__full').css('display', 'flex');
	$('.song-item__full').slideUp(0);
});

$('#songs').on('click', '.song-item', function(){

	if ($(this).hasClass("activate")){
		$('.toggle__plus').css('display', 'block');
		$('.toggle__minus').css('display', 'none');
		$('.song-item').removeClass('activate');
		FullToUp();
	}else{
		FullToUp();
		$('.song-item').removeClass('activate');
		$(this).addClass('activate');
		$('.toggle__plus').css('display', 'block');
		$('.toggle__minus').css('display', 'none');
		$('.activate > .song-item__preview > .song-item__toggle > .toggle__minus').css('display', 'block');
		$('.activate > .song-item__preview > .song-item__toggle > .toggle__plus').css('display', 'none');
		FullToDown();
	};
});

function FullToDown(){
	$('.activate > .song-item__full').slideDown(100);
	$('.activate > .song-item__full').css('display', 'flex');

}
function FullToUp(){
	$('.song-item__full').slideUp(100);
}
/* FORM ↓ */