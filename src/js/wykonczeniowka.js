const cardsCnt = document.querySelector('.right-side')

const producers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
const links = [
	'https://www.dulux.pl',
	'https://www.sniezka.pl',
	'https://www.dekoral.pl',
	'https://anbo.pl ',
	'https://decora.pl/en/',
	'https://www.swisskrono.com/pl-pl/#/',
	'https://www.fakro.pl',
	'https://farbyjedynka.pl/en',
	'https://www.pattex.pl/pl.html',
	'https://beckers.pl',
	'https://www.awenta.pl',
	'https://www.paradyz.com',
	'https://www.velux.pl',
	'https://dre.pl/drzwi-malowane/',
	'https://www.wkret-met.com',
	'https://majsterpol.pl',
	'http://odadoz.pl',
	'http://www.akzonobel.com',
	'https://www.sadolin.pl',
	'https://nobiles.pl',
	'https://www.altax.pl',
	'https://www.effector.pl',
]

const createCards = () => {
	producers.forEach(el => {
		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
	})
}

createCards()
