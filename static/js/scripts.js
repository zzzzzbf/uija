/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function() {
	// scrollFunction();
	// scrollFunctionBTT(); // back to top button
};

// 在用户刷新页面之前将页面滚动到顶部
window.addEventListener('beforeunload', function() {
	window.scrollTo(0, 0);
});


/* Rotating Text - Word Cycle */
var checkReplace = document.querySelector('.replace-me');
if (checkReplace !== null) {
	var replace = new ReplaceMe(document.querySelector('.replace-me'), {
		animation: 'animated fadeIn', // Animation class or classes
		speed: 2000, // Delay between each phrase in miliseconds
		separator: ',', // Phrases separator
		hoverStop: false, // Stop rotator on phrase hover
		clickChange: false, // Change phrase on click
		loopCount: 'infinite', // Loop Count - 'infinite' or number
		autoRun: true, // Run rotator automatically
		onInit: false, // Function
		onChange: false, // Function
		onComplete: false // Function
	});
}




// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
		document.querySelector(".n-hamburger-menu-bars").classList.toggle("open");
	});
}

let selectors = document.querySelector(".navbar-toggler");
if (selectors !== null) {
	selectors.addEventListener("click", () => {
		
		// 切换头部菜单按钮图标
		let i = document.querySelector("#head_menu")
		if (i !== null) {
			i.classList.toggle("nav_button");
			i.classList.toggle("n-header-crossing-icon");
		}
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
			
		// // 获取所有子元素
		// const children = document.querySelectorAll('#head_menu span');
		// // 遍历所有子元素，切换"class1"和"class2"
		// children.forEach(child => {
		//   // child.classList.toggle('class1', true);
		//   child.classList.toggle('head_menu');
		// });
		
		var navbar = document.querySelector(".navbar");
		if (navbar.classList.contains('top-nav-collapse')) {
			navbar.style.removeProperty("background-color");
			navbar.style.removeProperty("height");
		}else{
			navbar.style.background = "rgba(0,0,0,.7)";
		}
	});
}

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function() {
			const shouldOpen = _d.matches(":hover");
			_m.classList.toggle("show", shouldOpen);
			_d.classList.toggle("show", shouldOpen);

			_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) {
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}

/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// function scrollFunctionBTT() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// 		myButton.style.display = "block";
// 	} else {
// 		myButton.style.display = "none";
// 	}
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}