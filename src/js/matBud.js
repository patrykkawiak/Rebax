const cardsCnt = document.querySelector('.right-side')

// const producers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
// const links = [
// 	'https://franspol.com.pl',
// 	'https://www.mocnekleje.pl',
// 	'https://www.solbet.pl',
// 	'https://www.atlas.com.pl',
// 	'https://www.swisspor.pl',
// 	'https://www.hplush.pl',
// 	'https://www.kreisel.pl',
// 	'https://izohan.eu',
// 	'https://www.soudal.pl/diy',
// 	'https://www.lakma.com/glowna.php',
// 	'https://www.wienerberger.pl',
// 	'https://www.leier.pl',
// 	'https://knauf.pl',
// 	'https://www.lafarge.pl',
// 	'https://www.ceresit.pl/pl.html',
// 	'https://www.mapei.com/pl/pl/strona-glowna',
// ]

// const createCards = () => {
// 	producers.forEach(el => {
// 		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
// 	})
// }

// createCards()

const producers = {
	franspol: 'https://franspol.com.pl',
	mocnekleje: 'https://www.mocnekleje.pl',
	solbet: 'https://www.solbet.pl',
	atlas: 'https://www.atlas.com.pl',
	swisspor: 'https://www.swisspor.pl',
	hplush: 'https://www.hplush.pl',
	kreisel: 'https://www.kreisel.pl',
	izohan: 'https://izohan.eu',
	soudal: 'https://www.soudal.pl/diy',
	lakma: 'https://www.lakma.com/glowna.php',
	wienerberger: 'https://www.wienerberger.pl',
	leier: 'https://www.leier.pl',
	knauf: 'https://knauf.pl',
	lafarge: 'https://www.lafarge.pl',
	ceresit: 'https://www.ceresit.pl/pl.html',
	mapei: 'https://www.mapei.com/pl/pl/strona-glowna',

}
let n = 1;
const createCards = () => {
	for (const value in producers) {
		cardsCnt.innerHTML += `<a href="${producers[value]}" target="_blank" class="card card-img${n}"></a>`
		n++;
	}
}
createCards()