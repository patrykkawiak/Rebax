const cardsCnt = document.querySelector('.right-side')

// const producers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// const links = [
// 	'https://afriso.pl',
// 	'https://armakan.pl',
// 	'https://dafi.pl',
// 	'https://wilo.com/pl/pl/',
// 	'https://www.saunierduval.pl/dla-uzytkownikow/',
// 	'https://www.goshe.pl',
// 	'https://diamond.pl',
// 	'https://www.elektromet.com.pl',
// 	'https://hydroland.com.pl',
// 	'https://beretta.pl',
// 	'https://ferro.pl',
// 	'http://www.gorgiel.pl',
// 	'https://junkers.com.pl',
// 	'https://heiztechnik.pl',
// 	'https://www.ariston.com/pl-pl/',
// 	'https://europlast.com.pl',
// 	'https://www.defro.pl',
// 	'https://www.vaillant.pl/klienci-indywidualni/',
// 	'https://www.immergas.pl',
// 	'https://www.viega.pl/pl/homepage.html',
// 	'http://wijas.com.pl/',
// ]

// const createCards = () => {
// 	producers.forEach(el => {
// 		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
// 	})
// }

// createCards()



const producers = {
	afriso: 'https://afriso.pl',
	armakan: 'https://armakan.pl',
	dafi: 'https://dafi.pl',
	wilo: 'https://wilo.com/pl/pl/',
	saunierduval: 'https://www.saunierduval.pl/dla-uzytkownikow/',
	goshe: 	'https://www.goshe.pl',
	diamond: 'https://diamond.pl',
	elektromet: 'https://www.elektromet.com.pl',
	hydroland:'https://hydroland.com.pl',
	beretta: 'https://beretta.pl',
	ferro: 	'https://ferro.pl',
	gorgiel: 'http://www.gorgiel.pl',
	junkers: 'https://junkers.com.pl',
	heiztechnik: 'https://heiztechnik.pl',
	ariston: 	'https://www.ariston.com/pl-pl/',
	europlast: 'https://europlast.com.pl',
	defro: 'https://www.defro.pl',
	vaillant: 'https://www.vaillant.pl/klienci-indywidualni/',
	immergas: 	'https://www.immergas.pl',
	viega: 'https://www.viega.pl/pl/homepage.html',
	wijas: 'http://wijas.com.pl/'

}
let n = 1;
const createCards = () => {
	for (const value in producers) {	
		cardsCnt.innerHTML += `<a href="${producers[value]}" target="_blank" class="card card-img${n}"></a>`
		n++;
	}
}
createCards()