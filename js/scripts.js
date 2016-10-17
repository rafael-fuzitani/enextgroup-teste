function ajax_get_json(){
	var potions = document.getElementById("potions");
    var hr = new XMLHttpRequest();
    hr.open("GET", "js/potions.json", true);
    hr.setRequestHeader("Content-type", "application/json", true);
    hr.onreadystatechange = function() {
	    if(hr.readyState === 4 && hr.status === 200) {
		    var data = JSON.parse(hr.responseText);
			potions.innerHTML = "";
			for(var obj in data){
				potions.innerHTML += data.potions[obj].name+" is "+data.potions[obj].price+" and lives in "+data.potions[obj].effect+"<hr />";
			}
	    }
    }
    hr.send(null);
    potions.innerHTML = "requesting...";
}