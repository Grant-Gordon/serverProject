const fs = require('fs');

//reading fiels

fs.readFile('./docs/rando.txt', (err, data) =>{
if(err){
    console.log(err);
}
console.log(data.toString());
});

// console.log('lastline'); //demonstrates that readfile is asynchronous and does not wait to finish before executing code


//writing files

fs.writeFile('./docs/rando.txt', 'hello WORLD', () =>{
    console.log('file was written')
});

//directoreis
if(!(fs.existsSync('./assets'))){
fs.mkdir('./assets', (err) =>{
    if(err){
        console.log(err);

    }
    console.log('folder created');
})
}else{
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

//deleting fiels

if(fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt', (err) =>{
        if(err){
            console.log(err)
        }
        console.log('file deleted');
    })
}