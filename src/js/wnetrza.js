const cardsCnt = document.querySelector('.right-side')

const producers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const links = [
	'https://www.besco.eu',
	'https://www.teka.com/pl-pl/',
	'https://www.cersanit.com.pl',
	'https://www.liveno.pl',
	'https://polimat.com.pl',
	'https://duschy.pl',
	'https://hydroland.com.pl',
	'http://www.narpol-meble.com',
	'https://www.alveus.pl/',
	'https://www.liveno.pl',
	'https://deante.pl',
	'https://kuchinox.pl/',
	'https://www.kolo.com.pl',
	'https://sanplast.pl',
]

const createCards = () => {
	producers.forEach(el => {
		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
	})
}

createCards()
