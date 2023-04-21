const burgerIcon = document.querySelector('.burger-icon');
const mobileNav = document.querySelector('.mobile-nav');
const navList = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.mobile-nav .nav-list .nav-item');

/* Nav Open */
burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	navList.classList.toggle('active');
});

/* Nav Close */

navItem.forEach((item) => {
	item.addEventListener('click', () => {
		if (navList.classList.contains('active')) {
			navList.classList.toggle('active');
			burgerIcon.classList.toggle('active');
			mobileNav.classList.toggle('active');
		}
	});
});

/* Footer Year */
/* const setCurrentDate = () => {
	const footerYear = document.querySelector('.footer-year')
	const date = new Date()
	const year = date.getFullYear()
	footerYear.textContent = year
	console.log(footerYear)
}
setCurrentDate()
 */
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

// sroll

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

	const sections = document.querySelectorAll('[data-section]');
	// console.log(sections)
	const menuItems = document.querySelectorAll('.desktop-nav-item');
	// console.log(menuItems)
	sections.forEach((sec) => {
		if (window.scrollY <= sec.offsetTop + sec.offsetHeight - 71) {
			sectionArr.push(sec);
			// console.log(sectionArr)
			const currentSec = document.querySelectorAll(
				`[href*="${sectionArr[0].dataset.section}"]`
			);
			console.log(currentSec);
			menuItems.forEach((item) => item.classList.remove('spy'));
			currentSec.forEach((sec) => {
				currentSec[1].classList.add('spy');
			});
		}
	});
};

window.addEventListener('scroll', handleScrollSpy);
