const fs = require('fs');

fs.writeFile('sample.txt', "Welcome to FSD", (err) => {
    if (err) {
        console.log('Error creating a file', err);
        return;
    }
    console.log('File created successfully');

fs.readFile('sample.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file', err);
            return;
        }
        console.log('File content:', data);

        fs.appendFile('sample.txt', '\nSemester: 3', (err) => {
            if (err) {
                console.log('Error updating file:', err);
            } else {
                console.log('File updated successfully');

                fs.readFile('sample.txt', 'utf-8', (err, updatedData) => {
                    if (err) {
                        console.log('Error reading updated file', err);
                        return;
                    }
                    console.log('Updated File content:', updatedData);

fs.writeFile('example.txt', "Welcome to FSD", (err) => {
    if (err) {
        console.log('Error creating a file', err);
        return;
    }
    console.log('Example File created successfully');

fs.unlink('example.txt',(err)=>{

if(err){
    console.error('Error deleting file: ',err)
}

else{
    console.log('Example file deleted succefully');
}

});


});


                });
            }
        });
    });
});






