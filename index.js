function Board(el, row, col) {
	this.el = document.querySelector(el);
	this.row = row;
	this.col = col;
	this.generateBoard();
	this.bindEvents();
}

Board.prototype.generateBoard = function () {
	const fragment = document.createDocumentFragment('div');
	let count = 0;
	let arr = this.generateNos(false);
	let arr1 = [];
	let colors = ["#6F98A8", "#2B8EAD", "#2F454E", "#2B8EAD", "#2F454E", "#BFBFBF", "#BFBFBF", "#6F98A8", "#2F454E"]
	for (var i = 0; i < this.row; i++) {
		var row = document.createElement('div');
		row.classList.add('row');
        for (var j = 0; j < this.col; j++) {
			var col = document.createElement('div');
			col.classList.add('col');
			col.dataset['name'] = i + " " + j;
			row.appendChild(col);
			col.innerHTML = arr[count];
			col.style.backgroundColor = colors[count];
			count++;

		}
		fragment.appendChild(row);
	}

	this.el.appendChild(fragment);
}

Board.prototype.generateNos = function (shuffle) {
		var arr = [];
		for (let i = 1; i <= (this.row * this.col); i++) {
			arr.push(i);
        } 
        if (shuffle) {
		arr = this.shuffle(arr);
	    }
    return arr;
}

Board.prototype.bindEvents = function (arr, el, count) {
    var shuffleButton = document.querySelector("#shuffle");
    var sortButton = document.querySelector("#sort");
	shuffleButton.addEventListener("click", () => {
		let shuffle = true;
		var arr = this.generateNos(shuffle);
		this.updateBoard(arr);
	})
	sortButton.addEventListener("click", () => {
		let shuffle = false;
		var arr = this.generateNos(shuffle);
		this.updateBoard(arr);
	})
}

Board.prototype.shuffle = function (arr) {
	var tempArr = arr;
	for (var i = arr.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = tempArr[i];
		tempArr[i] = tempArr[j];
		tempArr[j] = temp;
	}
	return tempArr;
}

Board.prototype.updateBoard = function(arr) {
	var count = 0;
	for(let i=0; i<this.row; i++){
		for(let j=0; j< this.col; j++){
			document.querySelector("div[data-name='" + i +" "+ j + "']").innerHTML = arr[count];
			count++;
		}
	}
}

