// //scrollcue js
scrollCue.init();

// 在用户刷新页面之前将页面滚动到顶部
window.addEventListener('beforeunload', function() {
	window.scrollTo(0, 0);
});


$(function() {

	//======< scrollcue js >======
	scrollCue.init({
		duration: 2500,
		interval: -0.7,
		percentage: 0.90,
		smartSpeed: 5000

	})


	window.onload = function() {
		// 移动端样式
		if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			var mheader = document.querySelector(".mheader");
			var nav = mheader.querySelector("nav");
			nav.classList.toggle("navbar");
		} else {
			var wrap = document.querySelector(".wrap");
			var nav = wrap.querySelector("nav");
			nav.classList.toggle("navbar");
		}
		var iframe = document.getElementById('myBottom');
		iframe.onload = function() {
			iframe.contentWindow.postMessage('getHeight', 'http://uij.cn');
		};

		window.addEventListener('message', function(event) {
			if (event.origin === 'http://iframe.domain.com' && event.data === 'sendHeight') {
				var height = event.source.frameElement.height;
				console.log('Iframe height is: ' + height);
				// 这里可以根据获取到的高度来设置父文档的高度，实现自适应
			}
		}, false);

		// scrollFunction();
	};

	/* Navigation*/
	// 监听页面滚动事件
	// Collapse the navbar by adding the top-nav-collapse class
	// window.onscroll = function() {
	// 	scrollFunction();
	// };

	// // 页面滚动，导航栏锁定置顶样式
	// function scrollFunction() {
	// 	if (document.documentElement.scrollTop > 30) {
	// 		document.querySelector(".navbar").classList.add("top-nav-collapse");
	// 	} else if (document.documentElement.scrollTop < 30) {
	// 		document.querySelector(".navbar").classList.remove("top-nav-collapse");
	// 	}
	// }


	// 监听页面滚动事件
	window.addEventListener("scroll", function() {

		// 获取导航栏元素

		var navbar = document.querySelector(".navbar");

		var twoBoxs = document.getElementsByClassName('two_box');

		// 计算页面滚动距离

		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body
			.scrollTop;

		// 计算滚动距离与导航栏高度之比

		var ratio = scrollTop / navbar.offsetHeight;

		// 根据比值设置导航栏的透明度
		if (ratio < 0.5) {

			// 移动端样式
			if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				let i = document.querySelector("#navbar")
				if (i.classList.contains('navbar')) {
					// 打开菜单情况下不移除遮荫
					if (document.querySelector(".n-header-crossing-icon")) {
						return;
					}
					navbar.style.removeProperty("background-color");
					navbar.style.removeProperty("height");
				} else {
					navbar.style.backgroundColor = "#00000070";
					navbar.style.height = " 7%";
				}
			} else {
				// 取消滚动回到置顶导航栏透明样式
				navbar.style.backgroundColor = "rgba(255, 255, 255, " + ratio + ")";

				document.querySelector(".navbar").classList.toggle("top-nav-collapse");
			}


			// 检查是否找到了元素
			if (twoBoxs.length > 0) {
				// 遍历所有匹配的元素并设置样式
				for (var i = 0; i < twoBoxs.length; i++) {
					twoBoxs[i].style.removeProperty("background-color");
				}
			}


		} else {

			// navbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
			navbar.style.background = "rgba(0,0,0,.7)";
			// 检查是否找到了元素
			if (twoBoxs.length > 0) {
				// 遍历所有匹配的元素并设置样式
				for (var i = 0; i < twoBoxs.length; i++) {
					twoBoxs[i].style.backgroundColor = "#333";
				}
			}

			document.querySelector(".navbar").classList.remove("top-nav-collapse");

		}

	});

});

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
		} else {
			navbar.style.background = "rgba(0,0,0,.7)";
		}
	});
}


// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
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


const friendsFinish = function() {
	window.addEventListener('message', function(event) {
		var iframe = document.getElementById("myBottom")
		
		// 选择第一个匹配的元素
		var element  = document.querySelector(".visible-xs");
		if( element ){
			// 获取元素的计算后的样式
			var style = window.getComputedStyle(element);
			// 获取display值
			var displayValue = style.display;
			// 非手机端
			if(displayValue==='none'){
				return iframe.style.height = (event.data + 120) / 1.2 + "px";
				// return iframe.style.height = (event.data +20) / 1.5 + "px";
			}
		}
		iframe.style.height = (event.data + 120) / 2.2 + "px";
	})
}