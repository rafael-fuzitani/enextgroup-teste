function ajax_get_json(){
	var potions = document.getElementById("potions");
    var hr = new XMLHttpRequest();
    hr.open("GET", "js/potions.json", true);
    hr.setRequestHeader("Content-type", "application/json", true);
    hr.onreadystatechange = function() {
	    if(hr.readyState === 4 && hr.status === 200) {
		    var data = JSON.parse(hr.responseText);
			potions.innerHTML = "";
			for(var obj in data.potions){
				potions.innerHTML += '<div class="potions-thumb"><img src="img/thumbs/'+data.potions[obj].image+'"></div>' + '<h2>' +data.potions[obj].name + '</h2><h2>Use/Effect</h2><p>' + data.potions[obj].effect + '<p><h2>Ingredients:</h2>';
			}
	    }
    }
    hr.send(null);
    potions.innerHTML = "requesting...";
}