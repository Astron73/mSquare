'use strict'
var cell11 = document.getElementById('n1');
var cell12 = document.getElementById('n2');
var cell13 = document.getElementById('n3');
var cell21 = document.getElementById('n4');
var cell22 = document.getElementById('n5');
var cell23 = document.getElementById('n6');
var cell31 = document.getElementById('n7');
var cell32 = document.getElementById('n8');
var cell33 = document.getElementById('n9');
var start = document.getElementById('start');
var check = document.getElementById('check');
var newOne = document.getElementById('newOne');
var clear = document.getElementById('clear');

var numCell11 = 0;
var numCell12 = 0;
var numCell13 = 0;
var numCell21 = 0;
var numCell22 = 0;
var numCell23 = 0;
var numCell31 = 0;
var numCell32 = 0;
var numCell33 = 0;

var count = 0;
var i = 0;
var j = 0;
    
var row1 = [cell11, cell12, cell13];
var row2 = [cell21, cell22, cell23];
var row3 = [cell31, cell32, cell33];
var matrix = [row1, row2, row3];

 function autoClear() {
     for (i=0; i<3; i++){
         for (j=0; j<3; j++){
        var temp_1 = matrix[i][j];
        var temp_2 = temp_1.setAttribute("value", "");
         };
     };
 };

start.onclick = function MSquare_1() {
autoClear();
cell22.setAttribute("value", "18"); 
cell31.setAttribute("value", "19"); 
cell33.setAttribute("value", "26"); 
count = 1;
};

newOne.onclick = function MSquare_2() {
    if (count == 1){
autoClear();
cell11.setAttribute("value", "17"); 
cell21.setAttribute("value", "25"); 
cell22.setAttribute("value", "18"); 
        count = 2;
    };    
    
newOne.onclick = function MSquare_3() {
 if (count == 2){
autoClear();
cell12.setAttribute("value", "35"); 
cell13.setAttribute("value", "14"); 
cell22.setAttribute("value", "27");
cell31.setAttribute("value", "40");
        count = 3;
    };
    
newOne.onclick = function MSquare_4() {
 if (count == 3){
autoClear();
cell11.setAttribute("value", "27"); 
cell12.setAttribute("value", "34"); 
cell13.setAttribute("value", "14");
cell22.setAttribute("value", "25");
        count = 0;
    };
    };
    };
    };

var collectRow1 = [numCell11, numCell12, numCell13];
var collectRow2 = [numCell21, numCell22, numCell23];
var collectRow3 = [numCell31, numCell32, numCell33];
var matrixCollect = [collectRow1, collectRow2, collectRow3];

check.onclick = function Collector() {
     for (i=0; i<3; i++){
         for (j=0; j<3; j++){
        matrixCollect[i][j] = Number(matrix[i][j].value);
        console.log(matrixCollect[i][j]);
        //var temp_2 = temp_1.setAttribute("value", "");
         };
     };


    //=====****Problem with NaN****=============//
    
//========рахує суму по рядках=================
for (i=0; i<3; i++){
    for(j=0; j<3; j++){
        switch (i) {
            case 0:
                var rowRes0 = Number(rowRes0) + matrixCollect[i][j];
                console.log(rowRes0);
            case 1:
                var rowRes1 = Number(rowRes1) + matrixCollect[i][j];
                console.log(rowRes1);
            case 2:
                var rowRes2 = Number(rowRes2) + matrixCollect[i][j];
                console.log(rowRes2);
                };
    };
    };
//==========================================
//=========рахує суму по стовпцях===========
for (j=0; j<3; j++){
    for(i=0; i<3; i++){
        switch (j) {
            case 0:
                var colRes0 = Number(colRes0) + matrixCollect[i][j];
            case 1:
                var colRes1 = Number(colRes1) + matrixCollect[i][j];
            case 2:
                var colRes2 = Number(colRes2) + matrixCollect[i][j];
                };
    };
    };
//==========================================

   if (rowRes0==rowRes1==rowRes2==colRes0==colRes1==colRes2){
       alert('Done!');
   } else {alert ('Try again!');};
    
};




//0===========================
/*var k = [12, 13, 14];
var m = [21, 22, 23];
var c = [31, 32, 33];
var matrix2 = [k, m, c];
for (i=0; i<3; i++){
    for(j=0; j<3; j++){ 
console.log (matrix2[i][j]);
    };
    };*/
//============================

// 1==========================
/*start.onclick = function MSquare_1() {
cell22.value = 18; 
cell31.value = 19; 
cell33.value = 26; // при такому визначені value його не буде присвоєно і його не буде існувати для іншим методів, наприклад для getAttribute!
    var n22 = cell22.getAttribute('value'); // буде виводи шо value = null
console.log(n22);
};

//var n22 = cell11.oninput.getAttribute('value');
//console.log(n22);

*/
//==============================
//2=============================
/*cell11.getAttributeNode('value').value = 87;
//cell11.getAttributeNode("value").value = "87";

var att = document.createAttribute("value");        
att.value = "57";  
cell11.setAttributeNode(att);

var b = document.getElementById("n90"); 

b.setAttribute("name", "helloButton");
b.setAttribute("disabled", ""); */
//===============================