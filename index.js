// const { add, multiply } = require('../utils');
import { add , multiply } from "./utils.js";


//displaying changes in index.html
document.getElementById("resultAdd").textContent = `2 + 3 = ${add(2, 3)}`;
document.getElementById("resultMultiply").textContent = `2 * 3 = ${multiply(2, 3)}`;
document.getElementById("resultMultiply2").textContent = `2 * 5 = ${multiply(2, 5)}`;

