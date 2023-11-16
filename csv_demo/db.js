const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./ingredients.db";

function connectToDatabase(){
	if(fs.existsSync(filepath)){
		return new sqlite3.Database(filepath);
	}else{
		const db = new sqlite3.Database(filepath, (error) => {
			if(error){
				return console.error(error.message);
			}
			createTable(db);
			console.log("Connected to the database successfully");
		});
	return db;
	}
}

function createTable(db){
	db.exec(`
		CREATE TABLE alchemyIngredients
		(
			ingredient_name		 VARCHAR(50),
			hex_id			VARCHAR(50),
			ef1			VARCHAR(50),
			ef2			VARCHAR(50),
			ef3			VARCHAR(50),
			ef4			VARCHAR(50),
			weight			VARCAHR(20),
			value 			VARCHAR(20)
			)
		`);
}
module.exports = connectToDatabase();
