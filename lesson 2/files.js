const fs = require('fs');

//reading a file
fs.readFile('./docs/blog1.txt', (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());

});

//writing file
fs.writeFile('./docs/blog1.txt', 'Hello world', () => {
    console.log('File is written');
});

// creating directories
if(!fs.existsSync('./assests')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder created');
    } )
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder deleted');
    })
}

//deleting files
if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('File Deleted');
    })
}
