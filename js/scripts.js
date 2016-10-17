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
				potions.innerHTML += '<div class="potions-thumb"><img src="img/thumbs/'+data.potions[obj].image+'">' + '<p>' +data.potions[obj].name + ' - <strong class="price">$'+ data.potions[obj].price+'</strong></p></div>' + '<div class="potions-modal"><div class="potions-photo"><img src="img/'+data.potions[obj].image +'"></div><div class="potions-infos"><h2>'+data.potions[obj].name +'</h2><h2>Use/Effect</h2><p>'+data.potions[obj].effect +'</p><h2>Ingredients:</h2><ul>'+ 
					//ingredients loop
					// for(var ing in data.potions[obj].ingredients){
					// 	'<li>' + data.potions[obj].ingredients[ing] + '</li>'
					// }
				'</ul><h2>Price:</h2><h2>$ '+ data.potions[obj].price +'</h2></div></div>';
			}
	    }
    }
    hr.send(null);
    potions.innerHTML = "requesting...";
}