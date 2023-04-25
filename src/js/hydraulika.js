const cardsCnt = document.querySelector('.right-side')

const producers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
const links = [
	'https://mcalpine.pl',
	'https://dafi.pl',
	'https://wilo.com/pl/pl/',
	'https://www.saunierduval.pl/dla-uzytkownikow/',
	'https://www.goshe.pl',
	'https://diamond.pl',
	'https://www.elektromet.com.pl',
	'https://hydroland.com.pl',
	'https://beretta.pl',
	'https://ferro.pl',
	'http://www.gorgiel.pl',
	'https://junkers.com.pl',
	'https://heiztechnik.pl',
	'https://www.ariston.com/pl-pl/',
	'https://europlast.com.pl',
	'https://www.defro.pl',
	'https://www.vaillant.pl/klienci-indywidualni/',
	'https://www.immergas.pl',
	'https://www.viega.pl/pl/homepage.html',
	'http://wijas.com.pl/',
	'https://afriso.pl',
	'https://armakan.pl',
]

const createCards = () => {
	producers.forEach(el => {
		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
	})
}

createCards()
