const cardsCnt = document.querySelector('.right-side')

// const producers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const links = [
// 	'https://www.stanleyworks.pl',
// 	'https://www.dewalt.pl',
// 	'https://drabest.pl/pl',
// 	'https://dedra.pl',
// 	'https://www.drabiny-krause.dmn.pl',
// 	'https://kubala.com/pl',
// 	'https://schmithpolska.pl',
// 	'https://bluedolphin.pl',
// 	'https://www.makita.pl',
// 	'https://milwauk.com.pl/pl/',
// ]

// const createCards = () => {
// 	producers.forEach(el => {
// 		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
// 	})
// }

// createCards()


const producers = {
	stanleyworks: 'https://www.stanleyworks.pl',
	dewalt: 'https://www.dewalt.pl',
	drabest: 'https://drabest.pl/pl',
	dedra: 'https://dedra.pl',
	drabinykrause: 'https://www.drabiny-krause.dmn.pl',
	kubala: 'https://kubala.com/pl',
	schmithpolska: 'https://schmithpolska.pl',
	bluedolphin:'https://bluedolphin.pl',
	makita: 'https://www.makita.pl',
	milwauk:'https://milwauk.com.pl/pl/'
}
let n = 1;
const createCards = () => {
	for (const value in producers) {
		cardsCnt.innerHTML += `<a href="${producers[value]}" target="_blank" class="card card-img${n}"></a>`
		n++;
	}
}
createCards()