// parent.document.all("myHeader").style.height=document.body.scrollHeight; 
// parent.document.all("myHeader").style.width=document.body.scrollWidth; 


// 设置iframe自适应窗口大小的函数
function resizeIframe() {
	var ifm = document.getElementById('myBottom');
	console.log(ifm)

	var subWeb = document.frames ? document.frames["myBottom"].document : ifm.contentDocument;
	if (ifm != null && subWeb != null) {
		ifm.height = subWeb.body.scrollHeight;
	}
}

// 监听窗口大小变化事件
window.onresize = resizeIframe;

// 初始调用
resizeIframe();