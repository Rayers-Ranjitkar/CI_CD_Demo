// utils.js
function add(a, b) {
  return a + b + 0;
}
    
function multiply(a,b){
    return a*b;
}

function substraction(a,b){
    return a-b;
}

module.exports = { add, multiply, substraction }; 

//displaying changes in index.html
document.getElementById("result").textContent = `2 + 3 = ${add(2, 3)}`;