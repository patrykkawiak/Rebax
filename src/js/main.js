const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
const sliderBox = document.querySelector('.slider-box');
const images = document.querySelectorAll('.slider-img');
let sliderSize;

let index = 0;
const autoSpeed = 4000;

const dots = document.querySelector('.dots');
const dotsArr = [];

const createAllDots = () => {
	for (let item = 0; item < images.length; item++) {
		const newDot = document.createElement('div');
		newDot.classList.add('dot');
		dots.append(newDot);
		dotsArr.push(newDot);
	}
	dotsArr[0].classList.add('active-dot');
};

const handleCarousel = () => {
	index++;
	changeImage();
};

let startCarousel = setInterval(handleCarousel, autoSpeed);

const changeImage = () => {
	sliderSize = document.querySelector('.slider-img').offsetWidth;

	if (index > images.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = images.length - 1;
	}

	for (let i = 0; i < images.length; i++) {
		dotsArr[i].classList.remove('active-dot');
	}
	dotsArr[index].classList.add('active-dot');

	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove('slider-animation');
	}
	images[index].classList.add('slider-animation');

	sliderBox.style.transform = `translateX(${-index * sliderSize}px)`;
};

const handleRightArrow = () => {
	index++;
	resetInterval();
};
const handleLeftArrow = () => {
	index--;
	resetInterval();
};

const resetInterval = () => {
	changeImage();
	clearInterval(startCarousel);
};

createAllDots();
nextBtn.addEventListener('click', handleRightArrow);
prevBtn.addEventListener('click', handleLeftArrow);
