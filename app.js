let frame = document.querySelector('.frame');

// --- cheese burgers menu events ---

let openMenu = document.querySelector('.open-menu-btn');
let closeMenu = document.querySelector('.close-menu-btn');
let sideWrapper = document.querySelector('.side-wrapper');


openMenu.addEventListener('click', e=> {
	sideWrapper.style.display = 'flex';
	openMenu.style.display = 'none';
})

closeMenu.addEventListener('click', e=> {
	sideWrapper.style.display = 'none';
	openMenu.style.display = 'block';
})