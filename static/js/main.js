// //scrollcue js
scrollCue.init();
$(function(){

    //======< scrollcue js >======
    scrollCue.init({
        duration : 2500,
        interval : -0.7,
        percentage : 0.90,
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
	
	    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	
	    // 计算滚动距离与导航栏高度之比
	
	    var ratio = scrollTop / navbar.offsetHeight;
	
	    // 根据比值设置导航栏的透明度
	    if (ratio < 0.5) {
	
	        // 移动端样式
	        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	            let i = document.querySelector("#navbar")
	            if(i.classList.contains('navbar')){
	                navbar.style.removeProperty("background-color");
	                navbar.style.removeProperty("height");
	            }else{
	                navbar.style.backgroundColor = "#00000070";
	                navbar.style.height = " 7%";
	            }
	        }else{
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


