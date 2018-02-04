function menu() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top < 80) {
		document.getElementById('menu').style.display="none";
	} else if(top > 80) {
		document.getElementById('menu').style.display="block";
	}
	setTimeout(menu, 100);
}
setTimeout(menu, 100);