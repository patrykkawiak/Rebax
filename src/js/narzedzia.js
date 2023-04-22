const cardsCnt = document.querySelector('.right-side')

const producers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const links = [
	'https://www.stanleyworks.pl',
	'https://www.dewalt.pl',
	'https://drabest.pl/pl',
	'https://dedra.pl',
	'https://www.drabiny-krause.dmn.pl',
	'https://kubala.com/pl',
	'https://schmithpolska.pl',
	'https://bluedolphin.pl',
	'https://www.makita.pl',
	'https://milwauk.com.pl/pl/',
]

const createCards = () => {
	producers.forEach(el => {
		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
	})
}

createCards()
