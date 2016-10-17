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
				potions.innerHTML += '<div class="potions-thumb"><img src="img/thumbs/'+data.potions[obj].image+'">' + '<p>' +data.potions[obj].name + ' - <strong class="price">$'+ data.potions[obj].price+'</strong></p></div>';
			}
	    }
    }
    hr.send(null);
    potions.innerHTML = "requesting...";
}