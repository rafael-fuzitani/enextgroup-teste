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
				var objIngredients = potionsObjs.ingredients; 
					console.log('before nested loop!');
				for(var j = 0; j < objIngredients.length; j++){ 
						var ingListItem = '<li>' + objIngredients[j] + '</li>';
						console.log(ingListItem);
					 }
				potions.innerHTML += '<div id="thumb" class="potions-thumb"><img src="img/thumbs/'+ potionsObjs.image+'">' + '<p>' + potionsObjs.name + ' - <strong class="price">$'+ potionsObjs.price+'</strong></p></div>' + '<div id="modal" class="potions-modal"><div class="potions-photo"><img src="img/'+ potionsObjs.image +'"></div><div class="potions-infos"><h2>'+ potionsObjs.name +'</h2><h2>Use/Effect</h2><p>'+ potionsObjs.effect +'</p><h2>Ingredients:</h2><ul>' +
					//ingredients loop
						ingListItem +					
						'</ul><h2>Price:</h2><h2 class="price">$ '+ potionsObjs.price +'</h2></div></div>';

			}
	    }
    }
    hr.send(null);
    potions.innerHTML = "requesting...";
}

function showModal {
	var thumb = document.getElementById('thumb');
	var modal = document.getElementById('modal'); 

	thumb.addEventListener('click', function (e) {
	  if (e.target === e.currentTarget) {
	    modal.style.display = 'block';
	  }
	}
} 