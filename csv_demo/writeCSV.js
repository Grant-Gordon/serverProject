const fs = require("fs");
const { stringify  } = require("csv-stringify");
const db  = require ("./db");
const filename = "saved_from_db.csv";
const writableStream = fs.createWriteStream(filename);

const columns = [
	"ingredient_name",
	"hex_id",
	"ef1",
	"ef2",
	"ef3",
	"ef4",
	"weight",
	"value",
];

const stringifier = stringify({ header: true, columns: columns});
db.each(`select * from alchemyIngredients`, (error, row) => {
	if (error){
		return console.log(error.message);
	}
	stringifier.write(row);
});
stringifier.pipe(writableStream);
console.log("Finished writing data");

