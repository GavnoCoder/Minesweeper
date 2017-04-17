var cell = []; // field's items array
var bombs = []; // Bombs array
var bombsAroundElement = [];

var Element = {
	// Constructor
	Constructor: function(size, name){
		this.size = size;
		this.name = name;
		return this;
	},
	// Create and append html elements
	Init: function(container){
		var el = document.createElement("div");
		el.className = this.name;
		el.style.width = this.size + "px";
		el.style.height = this.size + "px";
		container.appendChild(el);
	},
	// Initialize array of field's items
	InitArray: function(countOfElements){
		var counter = 0;
		for(var b = 0; b < countOfElements; b++){
			// Get random places for bombs
			bombs[b] = Math.floor(Math.random()*(countOfElements*countOfElements - 0) + 0); 
			console.log(bombs[b]);
		}
		// Set value false for all bombs
		for(var i = 0; i < countOfElements; i++){
			fieldArray[i] = [];
			for(var j = 0; j < countOfElements; j++){
				fieldArray[i][j] = false;
			}
		}
		// Set value true for some bombs
		for(var i = 0; i < countOfElements; i++){
			for(var j = 0; j < countOfElements; j++){
				for(var k = 0; k < countOfElements*countOfElements; k++){
					if(bombs[counter] == k){
						if(k < countOfElements){
							fieldArray[0][k] = true;
							var itemValue = document.createElement("i");
							itemValue.className = "fa fa-bomb";
							itemValue.style.lineHeight = item.size + "px";
							document.getElementsByClassName("item")[k].appendChild(itemValue);
						}
						else if(k > countOfElements){
							var resultI = Math.floor(k / countOfElements);
							var resultJ = k - (resultI * countOfElements);
							fieldArray[resultI][resultJ] = true;
							var itemValue = document.createElement("i");
							itemValue.className = "fa fa-bomb";
							itemValue.style.lineHeight = item.size + "px";
							document.getElementsByClassName("item")[k].appendChild(itemValue);
						}
					}
				}
				counter++;
			}
		}
		// Bombs around item
		var countNumber = 0;
		// for(var i = 0; i < countOfElements; i++){
		// 	bombsAroundElement[i] = [];
		// 	for(var j = 0; j < countOfElements; j++){
		// 		if(!fieldArray[i][j]){
		// 			bombsAroundElement[i][j] = 0;
		// 			var itemValue = document.createElement("i");
		// 			itemValue.className = "count";
		// 			itemValue.style.lineHeight = item.size + "px";
		// 			for(var bombI = 0; bombI < 2; bombI++){
		// 				for(var bombJ = 0; bombJ < 2; bombJ++){
		// 					if(fieldArray[i + bombI][j + bombJ] == true){
		// 						bombsAroundElement[i][j]++;
		// 						console.log(bombsAroundElement[i][j]);
		// 					}
		// 				}
		// 			}
		// 			itemValue.innerHTML = bombsAroundElement[i][j];
		// 			document.getElementsByClassName("item")[countNumber].appendChild(itemValue);
		// 		}
		// 		countNumber++;
		// 	}
		// }
	}
}


function OpenItem(el, countOfElements) {
	for(var i = 0; i < bombs.length; i++){
		if(bombs[i] == el){
			if(el <= countOfElements){
				//console.log(fieldArray[el][0]);
				console.log("loh padarvalsa)))))0");
				document.getElementsByClassName("item")[el].getElementsByTagName("i")[0].style.transform = "scale(1)";
				document.getElementsByClassName("loh")[0].style.transform = "scale(1)";
				return;
			}
			else if(el > countOfElements){
				// var resultI = Math.floor(el / countOfElements);
				// var resultJ = el - (resultI * countOfElements);
				//console.log(fieldArray[resultI][resultJ]);
				console.log("loh padarvalsa)))))0");
				document.getElementsByClassName("item")[el].getElementsByTagName("i")[0].style.transform = "scale(1)";
				document.getElementsByClassName("loh")[0].style.transform = "scale(1)";
				return;
			}
		}
	}
	console.log("krasava bomba ne tyt)))0");
}


var field = Object.create(Element).Constructor(400, "field");
field.Init(document.body);

var countOfElements = field.size/(100);

for(var i = 0; i < countOfElements*countOfElements; i++){
	cell[i] = Object.create(Element);
	cell[i].Constructor(100 - 4, "item");
}

for(var i = 0; i < countOfElements*countOfElements; i++){ 
	cell[i].Init(document.getElementsByClassName("field")[0]);
	document.getElementsByClassName("item")[i].setAttribute("onclick", "OpenItem("+i+", "+countOfElements+");");
}