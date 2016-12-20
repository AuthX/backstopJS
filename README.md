![alt text](https://beauthentic.digital/webfiles/1478663747187/authxusen/site/images/favicon/favicon.ico)
# backstopJS
Required: https://www.npmjs.com/ or https://github.com/creationix/nvm

Documentation: https://github.com/garris/BackstopJS
##Quick Start
Install by running:
```git clone https://github.com/garris/BackstopJS.git```
in the directory of your choice. 

#####If using *npm*
First run ```npm install``` to install any dependencies in node_modules folder

#####If using *nvm* 
Navigate (```cd backstopJS```) into the root of the project and run ```nvm use``` and then ```npm install```.
These commands can be ran from any directory, however, the full path is needed to the file that is being tested.

If refering to BackstopJS documention, the installation and usage commands can be ignored. Use only the commands below for this project.
##To run reference
Reference creates a directory of screenshots that you want to use as your reference.

```npm run reference -- --configPath=PathToJsFile.js```

####example:
```npm run reference -- --configPath=Projects/Unit4/backstop.js```

##To run tests:
Test takes a new set of screenshots and compares against reference. If browser report is enabled (it is by default) then a report will be generated showing results of comparison. 

```npm run test -- --configPath=PathToJsFile.js```
####example:
```npm run test -- --configPath=Projects/Unit4/backstop.js```

##Changing paths
When making a new project folder, the paths in backstop.js need to be changed to match target directory
####example:
```json
"paths": {
           "bitmaps_reference": "./Projects/Unit4/backstop_data/bitmaps_reference",
           "bitmaps_test": "./Projects/Unit4/backstop_data/bitmaps_test",
           "casper_scripts": "./Projects/Unit4/backstop_data/casper_scripts",
           "html_report": "./Projects/Unit4/backstop_data/html_report",
           "ci_report": "./Projects/Unit4/backstop_data/ci_report"
       }
