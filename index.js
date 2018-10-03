
 const categoryGrid = new Grid({
    numberOfRows: 5,
    numberOfColumns: 5,
    targetElement: document.querySelector("main"),
    cellClasses: ["topCell"]

})

const questionGrid = new Grid({
    numberOfRows: 1,
    numberOfColumns: categoryGrid.length,
    targetElement: document.querySelector("main"),
    cellClasses: ["bottomCell"]

})
  
// // Notes from Friday: classes/cell.js, classes.gridjs, index.js
// //one div for grid in html
// //this means represents the calling context of the function you are running


// class Grid { 
//     constructor (options) {
//     this.numberOfRows = options.numberOfRows;
//     this.numberOfColumns = options.numberOfColumns;
//     this.cellClasses = options.cellClasses || [];
//     this.targetElement = options.targetelement || document.body;
//     this.gridElement = this.createGridElement(); 
//     this.createrows();
//     this.rows = [];
//     this.gridElement.addEventListener('click', this.clickevent.bind(this));
//     //("click", this) {handleEvent: function (event){}} and use handleevent as the function below instead of clickevent....does the binding for you(another way)
//     }
    

// //console.log(this)

// clickEvent (event) {
//     if(!event.target.classList.contains("cell")
//     return;
//     const cellElement = event.target;
//     console.log("Row Index:`, cellElement.dataset.rowIndex, `| Column index: `, cellElement.dataset.colIndex");
//     conosle.log(cellElement, cellInstance);

//     // console.log(event.target)
//     // const cellelement = event.target
   
//     const cell = this.findCellByIndexes(rowIndex * 1, colIndex);
//     console.log(this);

//     this.onClick(cell);

// }

// onClick (cell) {
//     // override me
// }


// // const createRow = function() {
// //     const rowDiv = document.createElement("div")
// //     rowDiv.classList.add("row")
// //     return rowDiv
// // }

// createRows() {
//     const rowDiv = document.createElement("div")
//     rowDiv.classList.add("row")
//     return rowDiv
// }

// // in cell.js
// class Cell {
//     constructor(rowindex, colindex, cellclasses) {
//     this = {};
//     this.rowindex;
//     this.colindex;
//     this.cellclasses = cellclasses|| [];
//     this.element = this.createlement();
//     }
// }
// function createElement() {
//     const element = document.createlement("div");
//     element.classlist.add("cell, ....this.cellclasses");
//     element.dataset.rowindex = this.rowindex;
//     element.dataset.colindex = this.colindex;
//     return element
// }

// //grid.js
// const genericGrid = new grid({ 
//     numberOfRows: 7,
//     numberOfColumns: 6,
//     targetElement: document.querySelector("main"),
//     cellClasses: ["red-border", "black-background"]
// })

// const rows = [];
// for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) 
//     rows[rowIndex] = [];

// const rowElement = this.createRowElement(rowIndex);
// this.createCells(rowIndex, rowElement);

// return rows

// //after class grid constructor

// createGridElement()
// const elememnt = document.getElementById("div")
// elelemnt.classList.add("grid")
// this.targetElement.appendChild(element)

// createRowelement(rowindex)
// const elelemnt = document. createElement("div")
// element.classList.add("row")
// element.dataset = rowindex
// this.gridelement.appendchild(element)

// createCells(rowIndex, rowElement)
// for(let colIndex = 0; colIndex < this.numberOfRows, rowIndex++) {
//     const cell = new cell(rowIndex, colIndex, this.cellClasses)
//     this.rows ({rowIndex}{colIndex}) = cell
//     rowElement.appenChild(cell.element)
// }

//  const row = this.rows[rowIndex]
//  const cell = row ? row[colIndex] : null
//  //can use number or parseInt(look up and review what this means)   
// findCellByIndexes(rowIndex, colIndex) 
//     rowIndex = number(rowIndex)
//     colIndex = number(colIndex)

//     if(this.rows[rowindex]) {
//         if (this.rows[rowindex] [colindex])
//         return this.rows[rowindex][colindex]
//     }
// return cell || null



// // class CheckersGird extends Grid {
// //     constructor (options) {

// //         super(options)
// //     }

// //     onClick (cell) {
// //         console.log('I\'ve clicked')
// //     }

// //namewastook