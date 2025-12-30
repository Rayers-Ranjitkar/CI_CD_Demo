const { add, multiply,substraction } = require('../utils');

//displaying changes in index.html
document.getElementById("result").textContent = `2 + 3 = ${add(2, 3)}`;