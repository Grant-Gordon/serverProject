const fs = require("fs");
const { parse} = require("csv-parse");
const db = require("./db");

fs.createReadStream("./alchemyIngredients.csv")
	.pipe(parse({delimeter: ",",from_line: 2}))
	.on("data", function (row){
	db.serialize(function () {
		db.run(
			`INSERT INTO alchemyIngredients VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
			[row[0],row[1], row[2], row[3], row[4], row[5], row[6], row[7]],
			function(error){
				if(error){
					return console.log(error.message);
				}
				return console.log(`Inserted a row with the id: ${this.lastID}`);
			}
		);
		});
	});
