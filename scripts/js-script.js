var h3Showed = false;
function changeDisplay(){
	const header3 = document.getElementById("1");
	header3.style.display = h3Showed ? 'block' : 'none';
	h3Showed = !h3Showed;

}
var per = false;
function superClick(el){
			el.style.color = per ? 'white' : 'black';
			el.style.background = per ? '#002D6D' : 'white';
			per = !per;
		}
