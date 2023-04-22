const cardsCnt = document.querySelector('.right-side')

// const producers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// const links = [
// 	'https://www.besco.eu',
// 	'https://www.teka.com/pl-pl/',
// 	'https://www.cersanit.com.pl',
// 	'https://www.liveno.pl',
// 	'https://polimat.com.pl',
// 	'https://duschy.pl',
// 	'https://hydroland.com.pl',
// 	'http://www.narpol-meble.com',
// 	'https://www.alveus.pl/',
// 	'https://www.liveno.pl',
// 	'https://deante.pl',
// 	'https://kuchinox.pl/',
// 	'https://www.kolo.com.pl',
// 	'https://sanplast.pl',
// ]

// const createCards = () => {
// 	producers.forEach(el => {
// 		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
// 	})
// }

// createCards()

const producers = {
	besco: 'https://www.besco.eu',
	teka: 'https://www.teka.com/pl-pl/',
	cersanit:'https://www.cersanit.com.pl',
	liveno: 'https://www.liveno.pl',
	polimat: 'https://polimat.com.pl',
	duschy: 'https://duschy.pl',
	hydroland: 'https://hydroland.com.pl',
	narpol: 'http://www.narpol-meble.com',
	alveus:'https://www.alveus.pl/',
	liveno:'https://www.liveno.pl',
	deante:'https://deante.pl',
	kuchinox:'https://kuchinox.pl/',
	kolo:'https://www.kolo.com.pl',
	sanplast:'https://sanplast.pl'

}
let n = 1;
const createCards = () => {
	for (const value in producers) {
		cardsCnt.innerHTML += `<a href="${producers[value]}" target="_blank" class="card card-img${n}"></a>`
		n++;
	}
}
createCards()
