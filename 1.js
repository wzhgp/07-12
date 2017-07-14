var div = document.getElementById('div');
document.addEventListener('mouseup',up);
function up(){
	document.removeEventListener('mousedown',down);
	document.removeEventListener('mouseup',up);
}
