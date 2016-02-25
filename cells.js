function fillArray(rowsNum, columnsNum, minRange, maxRange) {
	var cells = [];
	for (var i = 0; i < rowsNum; i++) {
		cells[i] = [];
		for (var j = 0; j < columnsNum; j++) {
			cells[i][j] = Math.floor(Math.random() * maxRange) + minRange;
		}
	}
	return cells;
}

function findNeighbours(cells, rowIndex, columnIndex, array) {
	var cellValue = cells[rowIndex][columnIndex],
		rowsNum = cells.length,
		columnsNum = cells[0].length;

	array = array || [];
	if (isAdded(array, rowIndex, columnIndex)) {
		return array;
	}
	array.push({row: rowIndex, column: columnIndex});
	if ((rowIndex > 0) && (cellValue === cells[rowIndex - 1][columnIndex])) {
		findNeighbours(cells, rowIndex - 1, columnIndex, array);
	}
	if ((rowIndex < rowsNum - 1) && (cellValue === cells[rowIndex + 1][columnIndex])) {
		findNeighbours(cells, rowIndex + 1, columnIndex, array);
	}
	if ((columnIndex > 0) && (cellValue === cells[rowIndex][columnIndex - 1])) {
		findNeighbours(cells, rowIndex, columnIndex - 1, array);
	}
	if ((columnIndex < columnsNum - 1) && (cellValue === cells[rowIndex][columnIndex + 1])) {
		findNeighbours(cells, rowIndex, columnIndex + 1, array);
	}
	return array;
}

function isAdded(array, rowIndex, columnIndex) {
	return array.some(function (coordinate) {
		return (coordinate.row === rowIndex) && (coordinate.column === columnIndex);
	});
}

function printArray(cells) {
	var rowsNum = cells.length,
		columnsNum = cells[0].length,
		row;

	for (var i = 0; i < rowsNum; i++) {
		row = "";
		for (var j = 0; j < columnsNum; j++) {
			row = row + " " + cells[i][j];
		}
		console.log(row);
	}
}

var rowsNum = 4,
	columnsNum = 3,
	minValue = 1,
	maxValue = 3,
	cellRowIndex = 0,
	cellColumnIndex = 0;

var genArray = fillArray(rowsNum, columnsNum, minValue, maxValue);
//var genArray =[[3, 3, 3], [1, 3, 3],[3, 2, 3],[2, 3, 2]];
printArray(genArray);
var result = findNeighbours(genArray, cellRowIndex, cellColumnIndex);
console.log(result);

