function ajax_get_json(){
	var potions = document.getElementById("potions");
    var hr = new XMLHttpRequest();
    hr.open("GET", "potions.json", true);
    hr.setRequestHeader("Content-type", "application/json", true);
    hr.onreadystatechange = function() {
	    if(hr.readyState === 4 && hr.status === 200) {
		    var data = JSON.parse(hr.responseText);
			potions.innerHTML = "";
			for(var obj in data){
				potions.innerHTML += data[obj].name+" is "+data[obj].price+" and lives in "+data[obj].effect+"<hr />";
			}
	    }
    }
    hr.send(null);
    potions.innerHTML = "requesting...";
}