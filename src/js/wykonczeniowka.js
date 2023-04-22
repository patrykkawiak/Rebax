const cardsCnt = document.querySelector('.right-side')

// const producers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
// const links = [
// 	'https://www.dulux.pl',
// 	'https://www.sniezka.pl',
// 	'https://www.dekoral.pl',
// 	'https://anbo.pl ',
// 	'https://decora.pl/en/',
// 	'https://www.swisskrono.com/pl-pl/#/',
// 	'https://www.fakro.pl',
// 	'https://farbyjedynka.pl/en',
// 	'https://www.pattex.pl/pl.html',
// 	'https://beckers.pl',
// 	'https://www.awenta.pl',
// 	'https://www.paradyz.com',
// 	'https://www.velux.pl',
// 	'https://dre.pl/drzwi-malowane/',
// 	'https://www.wkret-met.com',
// 	'https://majsterpol.pl',
// 	'http://odadoz.pl',
// ]

// const createCards = () => {
// 	producers.forEach(el => {
// 		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
// 	})
// }

// createCards()

const producers = {
	dulux:'https://www.dulux.pl',
	sniezka:'https://www.sniezka.pl',
	dekoral:'https://www.dekoral.pl',
	anbo:'https://anbo.pl ',
	decora:'https://decora.pl/en/',
	swisskrono:'https://www.swisskrono.com/pl-pl/#/',
	fakro:'https://www.fakro.pl',
	farbyjedynka:'https://farbyjedynka.pl/en',
	pattex:'https://www.pattex.pl/pl.html',
	backers:'https://beckers.pl',
	awenta:'https://www.awenta.pl',
	paradyz:'https://www.paradyz.com',
	velux:'https://www.velux.pl',
	dre:'https://dre.pl/drzwi-malowane/',
	wkretmet:'https://www.wkret-met.com',
	majsterpol:'https://majsterpol.pl',
	odadoz:'https://odadoz.pl'

}
let n = 1;
const createCards = () => {
	for (const value in producers) {
		cardsCnt.innerHTML += `<a href="${producers[value]}" target="_blank" class="card card-img${n}"></a>`
		n++;
	}
}
createCards()