var div = document.getElementById('div');
div.addEventListener('mousedown',down);
function down(ev){
	var disX = ev.clientX - div.offsetLeft;
	var disY = ev.clientY - div.offsetTop;
}
