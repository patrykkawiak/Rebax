const cardsCnt = document.querySelector('.right-side')

// const producers = [1, 2, 3]
// const links = ['https://balex.eu/', 'https://www.budmat.com/pl', 'https://scalaplastics.pl/kategoria-produktu/dachy/']

// const createCards = () => {
// 	producers.forEach(el => {
// 		cardsCnt.innerHTML += `<a href="${links[el - 1]}" target="_blank" class="card card-img${el}"></a>`
// 	})
// }
// createCards()

const producers = {
	balex: 'https://balex.eu/',
	budmat: 'https://www.budmat.com/pl',
	scalaplastic: 'https://scalaplastics.pl/kategoria-produktu/dachy/'

}
let n = 1;
const createCards = () => {
	for (const value in producers) {
		cardsCnt.innerHTML += `<a href="${producers[value]}" target="_blank" class="card card-img${n}"></a>`
		n++;
	}
}
createCards()