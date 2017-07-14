var div = document.getElementById('div');
div.addEventListener('mousedown',down);
function down(ev){
	var disX = ev.clientX - div.offsetLeft;
	var disY = ev.clientY - div.offsetTop;
	document.addEventListener('mousemove',move);
	document.addEventListener('mouseup',up);
	function move(ev){
		div.style.left = ev.clientX - disX +'px';
		div.style.top = ev.clientY - disY +'px';
	}
	function up(){
		document.removeEventListener('mousedown',move);
		document.removeEventListener('mouseup',up);
	}
}