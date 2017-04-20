var cell = []; // array of objects(field items)
var bombs = []; // numbers of objects which have bomb

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
	}
}

// Initialize array of field's items
function InitArray(countOfElements){
	for(var b = 0; b < countOfElements; b++){
		// Get random places for bombs
		bombs[b] = Math.floor(Math.random()*(countOfElements*countOfElements - 0) + 0);
		console.log(bombs[b]);
	}

	// Set value true for some bombs
	for(var i = 0; i < countOfElements; i++){
		for(var j = 0; j < countOfElements; j++){
			for(var k = 0; k < countOfElements; k++){
				if(bombs[k] == cell[i][j].id){
					var itemValue = document.createElement("i");
					itemValue.className = "fa fa-bomb";
					itemValue.style.lineHeight = cell[i][j].size + "px";
					document.getElementsByClassName("item")[bombs[k]].appendChild(itemValue);
					cell[i][j].bomb = true;
				}
			}
		}
	}

	//Bombs around item

	var countNumber = 0;
	for(var i = 0; i < countOfElements; i++){
		for(var j = 0; j < countOfElements; j++){
			if(cell[i][j].bomb == false){
				var itemValue = document.createElement("i");
				itemValue.className = "count";
				itemValue.style.lineHeight = cell[i][j].size + "px";

				// extreme central cells
				if(i > 0 && i < (countOfElements - 1) && j > 0 && j < (countOfElements - 1)){
					for(var bombI = -1; bombI < 2; bombI++){
						for(var bombJ = -1; bombJ < 2; bombJ++){
							if(cell[i + bombI][j + bombJ].bomb == true){
								cell[i][j].bombsAround++; 
							}
						}
					}
				}
				// extreme left top cell
				else if(i == 0 && j == 0){
					for(var bombI = 0; bombI < 2; bombI++){
						for(var bombJ = 0; bombJ < 2; bombJ++){
							if(cell[i + bombI][j + bombJ].bomb == true){
								cell[i][j].bombsAround++;
							}
						}
					}
				}
				// extreme right top cell
				else if(i == 0 && j == (countOfElements - 1)){
					for(var bombI = 0; bombI < 2; bombI++){
						for(var bombJ = -1; bombJ < 1; bombJ++){
							if(cell[i + bombI][j + bombJ].bomb == true){
								cell[i][j].bombsAround++;
							}
						}
					}
				}
				// extreme left bottom cell
				else if(i == (countOfElements - 1) && j == 0){
					for(var bombI = -1; bombI < 1; bombI++){
						for(var bombJ = 0; bombJ < 2; bombJ++){
							if(cell[i + bombI][j + bombJ].bomb == true){
								cell[i][j].bombsAround++;
							}
						}
					}
				}
				// extreme right bottom cell
				else if(i == (countOfElements - 1) && j == (countOfElements - 1)){
					for(var bombI = -1; bombI < 1; bombI++){
						for(var bombJ = -1; bombJ < 1; bombJ++){
							if(cell[i + bombI][j + bombJ].bomb == true){
								cell[i][j].bombsAround++;
							}
						}
					}
				}
				// extreme top central cells
				else if(j > 0 && j < (countOfElements - 1) && i == 0){
					for(var bombI = 0; bombI < 2; bombI++){
						for(var bombJ = -1; bombJ < 2; bombJ++){
							if(cell[i + bombI][j + bombJ].bomb == true){
								cell[i][j].bombsAround++;
							}
						}
					}
				}
				// extreme bottom central cells
				else if(j > 0 && j < (countOfElements - 1) && i == (countOfElements - 1)){
					for(var bombI = -1; bombI < 1; bombI++){
						for(var bombJ = -1; bombJ < 2; bombJ++){
							if(cell[i + bombI][j + bombJ].bomb == true){
								cell[i][j].bombsAround++;
							}
						}
					}
				}
				// extreme right central cells
				else if(i > 0 && i < (countOfElements - 1) && j == (countOfElements - 1)){
					for(var bombI = -1; bombI < 2; bombI++){
						for(var bombJ = -1; bombJ < 1; bombJ++){
							if(cell[i + bombI][j + bombJ].bomb == true){
								cell[i][j].bombsAround++;
							}
						}
					}
				}
				// extreme left central cells
				else if(i > 0 && i < (countOfElements - 1) && j == 0){
					for(var bombI = -1; bombI < 2; bombI++){
						for(var bombJ = 0; bombJ < 2; bombJ++){
							if(cell[i + bombI][j + bombJ].bomb == true){
								cell[i][j].bombsAround++;
							}
						}
					}
				}

				itemValue.innerHTML = cell[i][j].bombsAround;
				document.getElementsByClassName("item")[countNumber].appendChild(itemValue);
			}
			countNumber++;
		}
	}
}


function OpenItem(elI, elJ, countOfElements) {
	if(cell[elI][elJ].bomb == true){
		console.log("loh padarvalsa)))))0");
		// document.getElementsByClassName("item")[el].getElementsByTagName("i")[0].style.transform = "scale(1)";
		return;
		}
	else{
		console.log("krasava bomba ne tyt)))0");
	}
}


var field = Object.create(Element).Constructor(400, "field");
field.Init(document.body);

var countOfElements = field.size/(50);

var counter = 0;
for(var i = 0; i < countOfElements; i++){
	cell[i] = [];
	for(var j = 0; j < countOfElements; j++){
		cell[i][j] = Object.create(Element);
		cell[i][j].Constructor(50 - 4, "item");
		cell[i][j].bomb = false;
		cell[i][j].id = counter;
		cell[i][j].bombsAround = 0;
		cell[i][j].Init(document.getElementsByClassName("field")[0]);
		document.getElementsByClassName("item")[counter].setAttribute("onclick", "OpenItem("+i+", "+j+", "+countOfElements+");");
		counter++;
	}
}

InitArray(countOfElements);
