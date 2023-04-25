const burgerIcon = document.querySelector('.burger-icon')
const mobileNav = document.querySelector('.mobile-nav')
const navList = document.querySelector('.nav-list')
const navItem = document.querySelectorAll('.mobile-nav .nav-list .nav-item')

burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('active')
	mobileNav.classList.toggle('active')
	navList.classList.toggle('active')
})

navItem.forEach(item => {
	item.addEventListener('click', () => {
		if (navList.classList.contains('active')) {
			navList.classList.toggle('active')
			burgerIcon.classList.toggle('active')
			mobileNav.classList.toggle('active')
		}
	})
})
