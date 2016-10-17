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
				var potionsObjs = data.potions[obj];
					console.log('before nested loop!');
					console.log(potionsObjs.ingredients);
				// for(var j = 0; j < potionsObjs.length; j++){ 
				// 	var objIngredients = potionsObjs.ingredients[j]; 
				// 		console.log(objIngredients);
				// 		console.log('nested loop!');
				// 	 }
				potions.innerHTML += '<div class="potions-thumb"><img src="img/thumbs/'+ potionsObjs.image+'">' + '<p>' + potionsObjs.name + ' - <strong class="price">$'+ potionsObjs.price+'</strong></p></div>' + '<div class="potions-modal"><div class="potions-photo"><img src="img/'+ potionsObjs.image +'"></div><div class="potions-infos"><h2>'+ potionsObjs.name +'</h2><h2>Use/Effect</h2><p>'+ potionsObjs.effect +'</p><h2>Ingredients:</h2><ul>' + potionsObjs.ingredients +
					//ingredients loop
					
						'</ul><h2>Price:</h2><h2 class="price">$ '+ potionsObjs.price +'</h2></div></div>';

			}
	    }
    }
    hr.send(null);
    potions.innerHTML = "requesting...";
}