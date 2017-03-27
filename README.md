# backstopJS 

##### Required:
https://github.com/creationix/nvm (recommended) or https://www.npmjs.com/

To install **nvm**, run in your terminal:

 ```
 curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
 ```

In-Depth documentation on using backstop: https://github.com/garris/BackstopJS
## Install
Install by clicking the download button either by zip or `git clone urlGoesHere`
in the directory of your choice. 

##### If using *npm* already
Run ```npm install``` to install node_modules. 

##### If using *nvm* 
Navigate (```cd backstopJS```) into the root of the project and run ```nvm use 5.9``` and then ```npm install```.

If referring to BackstopJS documentation, the installation and usage commands can be ignored. Use only the commands below for this project.

## Getting Started
If your project is not in ```Projects```, create a new one with your project name.  

If you already have a project you can skip forward to the next section. 

If a new folder is created, copy everything inside of ```backstopJS/Projects/Prototype_Example``` into your project folder.  (This includes a backstop_data folder and backstop.js file)

Use the new ```backstop.js``` file as a template to begin customizing your project in ```backstopJs/Projects/ProjectName/backstop.js```

#### Make sure you edit the paths at the bottom of the JS file to include the full path
```json
"paths": {
        "bitmaps_reference": "Projects/Unit4/AccVsProd/Mobile/backstop_data/bitmaps_reference",
        "bitmaps_test": "Projects/Unit4/AccVsProd/Mobile/backstop_data/bitmaps_test",
        "casper_scripts": "Projects/Unit4/AccVsProd/Mobile/backstop_data/casper_scripts",
        "html_report": "Projects/Unit4/AccVsProd/Mobile/backstop_data/html_report",
        "ci_report": "Projects/Unit4/AccVsProd/Mobile/backstop_data/ci_report"
    },
```

For guidance, refer to other projects to see different implementations. 
## To run reference
Reference creates a directory of screenshots that you want to use as your reference.

```
npm run reference -- --configPath=PathToJsFile.js
```

These commands can be ran from any directory. However, the full path is needed to the file that is being used.


#### example:
```
npm run reference -- --configPath=Projects/Unit4/AccVsProd/Desktop/testDesktop.js
```

## To run test:
Test takes a new set of screen-shots and compares against reference. If browser report is enabled (it is by default) then a report will be generated showing results of comparison. 

```
npm run test -- --configPath=PathToJsFile.js
```
#### example:
```
npm run test -- --configPath=Projects/Unit4/AccVsProd/Mobile/mobile.js
```




