const burgerIcon = document.querySelector('.burger-icon');
const mobileNav = document.querySelector('.mobile-nav');
const navList = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.mobile-nav .nav-list .nav-item');

burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	navList.classList.toggle('active');
});

navItem.forEach((item) => {
	item.addEventListener('click', () => {
		if (navList.classList.contains('active')) {
			navList.classList.toggle('active');
			burgerIcon.classList.toggle('active');
			mobileNav.classList.toggle('active');
		}
	});
});

const setCurrentDate = () => {
	const footerYear = document.querySelector('.year');
	const date = new Date();
	const year = date.getFullYear();
	footerYear.textContent = year;
	console.log(footerYear);
};
setCurrentDate();

const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
const sliderBox = document.querySelector('.slider-box');
const images = document.querySelectorAll('.slider-img');
let sliderSize;

let index = 0;
let picture = 1;
const autoSpeed = 4000;

const counter = document.querySelector('.counter');
counter.textContent = `${picture} / ${images.length}`;

const handleCarousel = () => {
	index++;
	picture++;
	changeImage();
};
let startCarousel = setInterval(handleCarousel, autoSpeed);

const changeImage = () => {
	sliderSize = document.querySelector('.slider-img').offsetWidth;

	if (index > images.length - 1) {
		index = 0;
		picture = 1;
	} else if (index < 0) {
		index = images.length - 1;
		picture = images.length;
	}

	counter.textContent = `${picture} / ${images.length}`;

	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove('slider-animation');
	}
	images[index].classList.add('slider-animation');

	sliderBox.style.transform = `translateX(${-index * sliderSize}px)`;
};

const handleRightArrow = () => {
	index++;
	picture++;
	resetInterval();
};
const handleLeftArrow = () => {
	index--;
	picture--;
	resetInterval();
};

const resetInterval = () => {
	changeImage();
	clearInterval(startCarousel);
};

nextBtn.addEventListener('click', handleRightArrow);
prevBtn.addEventListener('click', handleLeftArrow);

// scroll

const revalSection = document.querySelectorAll('.reval-section');

const handleFirstReval = () => {
	const revalSection = document.querySelector('.reval-section');

	if (revalSection.offsetTop - window.scrollY < window.innerHeight - 150) {
		revalSection.classList.add('reval');
	}
};
const handleSecondReval = () => {
	setTimeout(() => {
		revalSection[1].classList.add('reval');
	}, 400);
};
const handleThirdReval = () => {
	setTimeout(() => {
		revalSection[2].classList.add('reval');
	}, 800);
};
const handleReval = () => {
	revalSection.forEach((sec) => {
		if (sec.offsetTop - window.scrollY < window.innerHeight - 150) {
			sec.classList.add('reval');
		}
	});
};

window.addEventListener('scroll', handleReval);
window.addEventListener('DOMContentLoaded', handleFirstReval);
window.addEventListener('DOMContentLoaded', handleSecondReval);
window.addEventListener('DOMContentLoaded', handleThirdReval);

// scroll spy

const handleScrollSpy = () => {
	let sectionArr = [];

	const sections = document.querySelectorAll('.reval-section');
	const menuItems = document.querySelectorAll('.desktop-nav-item');
	sections.forEach((sec) => {
		if (window.scrollY <= sec.offsetTop + sec.offsetHeight - 71) {
			sectionArr.push(sec);
			const currentSec = document.querySelectorAll(
				`[href*="${sectionArr[0].dataset.section}"]`
			);
			menuItems.forEach((item) => item.classList.remove('spy'));
			currentSec.forEach((sec) => {
				if (sec.classList.contains('desktop-nav-item')) {
					sec.classList.add('spy');
				}
			});
		}
	});
};

window.addEventListener('scroll', handleScrollSpy);
