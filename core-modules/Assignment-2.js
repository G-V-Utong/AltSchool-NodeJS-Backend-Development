// Using the FS module:
//1. Create directory/folder named: “Students”

const fs = require('fs');

const directoryName = 'Students';

fs.mkdir(directoryName, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log(`Directory "${directoryName}" created successfully.`);
  }
});

// 2. In the Students directory, create a file named user.js

const fs = require('fs');
const path = require('path');

const fileName = 'user.js';

fs.mkdir(directoryName, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log(`Directory "${directoryName}" created successfully.`);
    
    const filePath = path.join(directoryName, fileName);

    fs.writeFile(filePath, '', (err) => {
      if (err) {
        console.error('Error creating file:', err);
      } else {
        console.log(`File "${fileName}" created successfully in "${directoryName}" directory.`);
      }
    });
  }
});

// 3. Update the Students directory to “Names”

const fs = require('fs');

const originalDirectoryName = 'Students';
const newDirectoryName = 'Names';

fs.mkdir(originalDirectoryName, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log(`Directory "${originalDirectoryName}" created successfully.`);
    
    fs.rename(originalDirectoryName, newDirectoryName, (err) => {
      if (err) {
        console.error('Error renaming directory:', err);
      } else {
        console.log(`Directory "${originalDirectoryName}" renamed to "${newDirectoryName}" successfully.`);
      }
    });
  }
});

// 4. Add your name as content to the file user.js

const fs = require('fs');
const path = require('path');


const content = 'Godswill Utong';

fs.mkdir(directoryName, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log(`Directory "${directoryName}" created successfully.`);
    
    const filePath = path.join(directoryName, fileName);

    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error('Error creating file:', err);
      } else {
        console.log(`File "${fileName}" created successfully in "${directoryName}" directory.`);
      }
    });
  }
});

//5. Update the file and add your age, sex, nationality, phone number and any other information about yourself

const fs = require('fs');
const path = require('path');


const newContent = 'Age: 32, Sex: M, Nationality: Nigerian, Phone: +23400000000000' ;

fs.mkdir(directoryName, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log(`Directory "${directoryName}" created successfully.`);
    
    const filePath = path.join(directoryName, fileName);

    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error('Error creating file:', err);
      } else {
        console.log(`File "${fileName}" created successfully in "${directoryName}" directory.`);
      }
    });
  }
});

// 6. Update the file user.js to {your_name}.js eg daniel_adesoji.js

const fs = require('fs');
const path = require('path');

const originalFileName = 'user.js';
const newFileName = 'Godswill_Utong.js';

const originalFilePath = path.join('Names', originalFileName);
const newFilePath = path.join('Names', newFileName);

fs.rename(originalFilePath, newFilePath, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('File renamed successfully.');
  }
});

// 7. Read the contents from {your_name}.js. User fs.open or fs.readFile

const fs = require('fs');
const path = require('path');

const filePath = path.join('Names', 'Godswill_Utong.js');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:\n', data);
  }
});


// 8. Delete the file {your_name}.js

const fs = require('fs');
const path = require('path');

fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully.');
  }
});

// 9. Delete the directory "Names"

const fs = require('fs');

const directoryPath = 'Names';

fs.rmdir(directoryPath, { recursive: true }, (err) => {
  if (err) {
    console.error('Error deleting directory:', err);
  } else {
    console.log('Directory deleted successfully.');
  }
});

