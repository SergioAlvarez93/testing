new Swiper('.card-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	slidesPerView: '3',

	breakpoints: {
		769: {
			slidesPerView: '3',
		},

		376: {
			slidesPerView: '2',
		},

		320: {
			slidesPerView: '1',
			autoHeight: true,
		},
	},
});

function sliderVisibility() {
	let slides = [];
	let slide = document.getElementsByClassName('swiper-slide');
	for (let i = 0; i < slide.length; ++i) {
		slide[i].style.opacity = '1';
		if (window.outerWidth > 768) {
			slide[i].style.marginRight = '-1.021rem';
		}
		if (window.outerWidth < 769 && window.outerWidth > 375) {
			slide[i].style.marginRight = '0.857rem';
		}
		if (window.outerWidth < 376) {
			slide[i].style.marginRight = '0';
		}
	    slides.push(slide[i]);
	}
	let element = null;
	let element2 = null
	for (let i = 0; i < slides.length; i++) {
		if (slides[i].classList.contains("swiper-slide-next") == true) break;
		if (slides[i].classList.contains("swiper-slide-active") !== true) {
			slide[i].style.marginRight = '0';
		}
		else {
			element = slides[i-1];
			element2 = slides[i+3];
		}
	}
	if (element !== undefined) {
		element.style.opacity = '0';
		element.style.marginRight = '0';
	}
	if (element2 !== undefined) {
		element2.style.opacity = '0';
	}
}

sliderVisibility();

let prev = document.querySelector('.swiper-button-prev');
let next = document.querySelector('.swiper-button-next');
let sliderContainer = document.querySelector('.swiper-container');
let sliderPagination = document.querySelector('.swiper-pagination');


prev.addEventListener("click", function() {
	sliderVisibility();
});

next.addEventListener("click", function() {
	sliderVisibility();
});

sliderPagination.addEventListener("click", function() {
	sliderVisibility();
});

sliderContainer.addEventListener("mousemove", function() {
	sliderVisibility();
});

sliderContainer.addEventListener("touchmove", function() {
	sliderVisibility();
});

sliderContainer.addEventListener("touchend", function() {
	sliderVisibility();
});


document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("burger").addEventListener("click", function() {
		document.querySelector("header").classList.toggle("open");
		document.body.classList.toggle("lock");
	})
	if (window.outerWidth < 769) {
		document.getElementById("one").addEventListener("click", function() {
			document.querySelector("header").classList.remove("open");
			document.body.classList.remove("lock");
		})
		document.getElementById("two").addEventListener("click", function() {
			document.querySelector("header").classList.remove("open");
			document.body.classList.remove("lock");
		})
		document.getElementById("three").addEventListener("click", function() {
			document.querySelector("header").classList.remove("open");
			document.body.classList.remove("lock");
		})
		document.getElementById("four").addEventListener("click", function() {
			document.querySelector("header").classList.remove("open");
			document.body.classList.remove("lock");
		})
	}
})

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}