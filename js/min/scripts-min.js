function ajax_get_json(){var e=document.getElementById("potions"),n=new XMLHttpRequest;n.open("GET","js/potions.json",!0),n.setRequestHeader("Content-type","application/json",!0),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var t=JSON.parse(n.responseText);e.innerHTML="",e.innerHTML=t}},n.send(null),e.innerHTML="requesting..."}