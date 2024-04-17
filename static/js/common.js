// window.onload = function() {

// };

// 获取div元素
const contentDiv = document.getElementById('myWrap');

if(contentDiv){
	// 要加载的页面URL
	const url = 'header.html';
	// 使用fetch获取页面内容
	fetch(url)
		.then(response => response.text()) // 转换为文本
		.then(html => {
			// 将获取到的HTML内容设置到div中
			contentDiv.innerHTML = html;
			loadNavbar()
			// 引入多个 JavaScript 文件
			loadScript('static/js/jquery-1.11.3.js');
			loadScript('static/js/swiper-3.3.1.jquery.min.js');
			loadScript('static/js/bootstrap.min.js');
			loadScript('static/js/scrollCue.min.js');
			loadScript('static/js/wow.min.js');
			loadScript('static/js/funtion.js');
			loadScript('static/js/main.js');
	
	
	
		})
		.catch(error => {
			console.error('Error loading content:', error);
		});
}else{
	loadNavbar()
}



function loadScript(url) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	document.head.appendChild(script);
}


function loadNavbar() {
	// 移动端样式
	if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		var mheader = document.querySelector(".mheader");
		var nav = mheader.querySelector("nav");
		nav.classList.toggle("navbar");
	} else {
		var wrap = document.querySelector(".wrap");
		if (wrap) var nav = wrap.querySelector("nav");
		if (nav) nav.classList.toggle("navbar");
	}
}

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