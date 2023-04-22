const cardsCnt = document.querySelector('.right-side')

const producers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const links = [
	'https://franspol.com.pl',
	'https://www.mocnekleje.pl',
	'https://www.solbet.pl',
	'https://www.atlas.com.pl',
	'https://www.swisspor.pl',
	'https://www.hplush.pl',
	'https://www.kreisel.pl',
	'https://izohan.eu',
	'https://www.soudal.pl/diy',
	'https://www.lakma.com/glowna.php',
	'https://www.wienerberger.pl',
	'https://www.leier.pl',
	'https://knauf.pl',
	'https://www.lafarge.pl',
	'https://www.ceresit.pl/pl.html',
	'https://www.mapei.com/pl/pl/strona-glowna',
]

const createCards = () => {
	producers.forEach(el => {
		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
	})
}

createCards()