import React from "react";
import ReactDOM from "react-dom";

const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

//              your code inside these <div> tags
const output = {
 <div>
 <h1>My name is {customer.first_name}/h1></div>
 <h2>My last name is {customer.last_name</h2>
 </div> 
};

//              what     where
ReactDOM.render(output, document.querySelector("#myDiv"));
