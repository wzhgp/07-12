var div = document.getElementById('div');
div.addEventListener('mousedown',down);
function down(ev){
	var disX = ev.clientX - div.offsetLeft;
	var disY = ev.clientY - div.offsetTop;
	document.addEventListener('mousemove',move);
	function move(ev){
		div.style.left = ev.clientX - disX+'px';
		div style.top = ev.clientY - disY+'px';
	}
	document.addEventListener('mouseup',up);
	function up(){
		document.removeEventListener('mousedown',down);
		document.removeEventListener('mouseup',up);
	}
}
