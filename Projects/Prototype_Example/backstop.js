/**
 * Created by Alex on 1/25/17.
 * This is the backstop.js config file for CSS regression testing for projects
 * Designed to be reusable and easy to configure
 * https://github.com/garris/BackstopJS for detailed documentation
 */


//Different base URL's based on environment
var baseUrl = {
    prod: "http://www.kohler.co.in/",
    indiaTest: "http://plumbingindia.kohlerco.test.us.onehippo.com/",
    brazilTest: "http://plumbingbrazil.kohlerco.test.us.onehippo.com/"
};

//Change testing Environment here by changing baseUrl suffix
var BASE_URL = baseUrl.indiaTest;

//Can be enabled to test url against base_url. To enable, uncomment BASE_REFERENCE_URL variable and referenceUrl object
//in the loopThroughUrlArray function and parameter
var BASE_REFERENCE_URL = baseUrl.prod;

//Selectors that are selected for every test, can leave empty or add multiple selectors such as:
// var DEFAULT_SELECTORS = ["selector1","selector2"]
var DEFAULT_SELECTORS = ["document"];


/**
 *
 * Example config object in configList
 * Only need url page to test. By default a screenshot of the whole page is taken
 * Custom properties can be taken as well
 {
    url: "URL_PAGE",                    //Target URL goes here
    hide: "selector",                   //Selector content that is hidden
    remove: "selector",                 //Selectors that will be removed
    selector:"selector"                 //Additional selectors for testing for specific URL -- can have multiple
 }
 *
 */


var configList = [{
    url: "" //home
},{
    url: "browse/Bathroom/Sink+Faucets"
},{
    url: "browse/Kitchen/Kitchen+Faucets"
},{
    url: "product-detail/2369"
},{
    url: "about-us"
},{
    url: "store-listing"
},{
    url: "press-releases"
},{
    url: "results?search=vibrant&currentpage=1&orderBy=relevancy&sort=asc"
},{
    url: "contact-us"
},{
    url: "literature"
},{
    url: "care-and-cleaning---kitchen-sinks"
},{
    url: "faqs"
}];


/**
 *

 * Do not edit anything below these comments
 * Only the above code needs to be changed
 *
 *
 *
 */


//Logging to help with debugging
if (BASE_URL == undefined) {
    console.log("BASE_URL is undefined");
    process.exit();
} else {
    console.log("BASE_URL is: " + BASE_URL);
}

if (DEFAULT_SELECTORS != undefined){
    console.log("DEFAULT_SELECTORS ARE: ")
    console.log(DEFAULT_SELECTORS)
}

console.log("****************");

//Function to reduce redundancy and make code easier to read and manage
//These are suggested default configs that can be overwritten by configList array
function loopThroughUrlArray() {

    var scenarios = [];
    var selectorsArray = [];
    for (var prop in configList) {

        //Conditional to prevent error when only default selectors are being used.
        if (configList[prop].selector == undefined){
            selectorsArray = DEFAULT_SELECTORS;
        } else {
            selectorsArray = [configList[prop].selector];
            selectorsArray.push(DEFAULT_SELECTORS);
            selectorsArray = [].concat.apply([], selectorsArray);
        }
        //Concating allows the merge of two arrays into one
        var hideSelectorsArray = [configList[prop].hide];
        hideSelectorsArray = [].concat.apply([], hideSelectorsArray);

        var removeSelectorsArray = [configList[prop].remove];
        removeSelectorsArray = [].concat.apply([], removeSelectorsArray);

        var scenario = {
            "label": BASE_URL + configList[prop].url,
            "url": BASE_URL + configList[prop].url,
            //reference URL can be enabled that tests url against referenceUrl
            "referenceUrl": BASE_REFERENCE_URL + configList[prop].url,
            "hideSelectors": hideSelectorsArray,
            "removeSelectors": removeSelectorsArray,
            "selectors":  selectorsArray,
            "readyEvent": null,
            "delay": 500,
            "misMatchThreshold": 0.1,
            "onBeforeScript": "onBefore.js",
            "onReadyScript": "onReady.js"
        };

        scenarios.push(scenario);
        selectorsArray = [];
        hideSelectorsArray = [];
        removeSelectorsArray = [];
        provideLogging(BASE_URL+configList[prop].url,configList[prop].hide,
            configList[prop].remove/*,BASE_REFERENCE_URL+configList[prop].url*/);
    }
    return scenarios;
}

//Logging to help with debugging and tracking
//Tells you every URL being used and what the hiding and removed selectors are
function provideLogging(url,hide,remove,referenceUrl){
    referenceUrl = referenceUrl || url;
    console.log("Url: " + url);
    if (referenceUrl != undefined){
        console.log("Reference URL: " + referenceUrl);
    }
    if (hide != undefined){
        console.log("Selector Hiding: " + hide);
    }
    if (remove != undefined) {
        console.log("Selector Removing: " + remove);
    }
    console.log("*******************\n");
}

//JSON object that is being exported for Backstop
var exporting = { "id": "testdesktop01",
    "viewports": [
        {
            "name": "desktop",
            "width": 1440,
            "height": 900
        }
    ],
    "scenarios":
        loopThroughUrlArray(),

    "paths": {
        "bitmaps_reference": "Projects/Prototype_Example/backstop_data/bitmaps_reference",
        "bitmaps_test": "Projects/Prototype_Example/backstop_data/bitmaps_test",
        "casper_scripts": "Projects/Prototype_Example/backstop_data/casper_scripts",
        "html_report": "Projects/Prototype_Example/backstop_data/html_report",
        "ci_report": "Projects/Prototype_Example/backstop_data/ci_report"
    },
    "casperFlags": [],
    "engine": "slimerjs",
    "report": ["browser"],
    "debug": false
};

//Backstop only looks for config data in module.exports. Change export to change configs
module.exports = exporting;

