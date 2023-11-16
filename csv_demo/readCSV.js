const fs = require("fs");
const { parse} = require("csv-parse");

fs.createReadStream("./alchemyIngredients.csv")
	.pipe(parse({delimeter: ",",from_line: 2}))
	.on("data", function (row){
	console.log(row);
	})
	.on("end", function (){
		console.log("finished");
	})
	.on("error", function (error){
		console.log(error.message);
	});

