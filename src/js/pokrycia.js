const cardsCnt = document.querySelector('.right-side')

const producers = [1, 2, 3]
const links = ['https://balex.eu/', 'https://www.budmat.com/pl', 'https://scalaplastics.pl/kategoria-produktu/dachy/']

const createCards = () => {
	producers.forEach(el => {
		cardsCnt.innerHTML += `  <a href="${links[el - 1]}" target="_blank" rel="noopener" class="card card-img${el}"></a>`
	})
}

createCards()
