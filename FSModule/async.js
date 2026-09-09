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
    });
});
