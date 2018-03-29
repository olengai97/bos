window.addEventListener('scroll', changeRangi); 
function changeRangi() {
	var photoSet = document.getElementById('hobbies').offsetTop;
	var logoNav = document.getElementById('logoNav');
	var hobbies = document.getElementById("hobbies");
	var menu = document.getElementById('menu');
	var scrollTopBtn = document.getElementById('scrollTop');
	var footer = document.getElementById('footer');



	if(window.pageYOffset >= photoSet) {
		logoNav.classList.add("changeRangi");
		menu.classList.add("changeRangi");
	} else {
		logoNav.classList.remove("changeRangi");
		menu.classList.remove("changeRangi");
	}

	if (window.pageYOffset >= photoSet-200) {
		hobbies.style.opacity = "1";
	}

	

	if (window.pageYOffset >= footer.offsetTop-800) {
		scrollTopBtn.style.display = "block";
	} else {
		scrollTopBtn.style.display = "none";
	}


}

function pandisha() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
}