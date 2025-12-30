// const { add, multiply,substraction } = require('../utils');
import { add } from "./utils.js";


//displaying changes in index.html
document.getElementById("resultAdd").textContent = `2 + 3 = ${add(2, 3)}`;

