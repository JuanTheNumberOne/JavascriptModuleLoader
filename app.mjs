/**
 * This is the app.mjs, in other words the entry point of the js program
 * It first loads any third party modules that are used by the application modules
 * (like lodash for example). After that one has to define the modules to run in the 
 * 'allModules' variable. 
 
 * It is possible to configure which modules should be run
 * in a configuration .json file that specifies which modules should be runned.
 
 * If the configuration path is wrong an error will be thrown. If the configuration has an
 * empty array, all modules specified in the 'allModules' variable will be run. If one wants to
 * not run any modules, a one element array with an empty string will do.
 * 
 * If no configuration is provided or an empty string for the configuration file is provided
 * all modules will be run.
 */

//Imports third party modules
import { lodashModule } from "../thirdparty/lodash.mjs";
import { jQueryModule } from "../thirdparty/jQuery.mjs";

// Imports project modules
import { prototypeTest } from "./libs/modules/prototypeTest.mjs";
import { reflectionAndExtend } from "./libs/modules/reflectionAndExtend.mjs";
import { constructorsAndClasses } from "./libs/modules/constructorsAndClasses.mjs";
import { moduleLoader } from "./libs/mainModule.mjs";

const thirdPartyModules = [lodashModule, jQueryModule];
const projectModules = [
  prototypeTest,
  reflectionAndExtend,
  constructorsAndClasses
];
const configurationFile = "./appConfig.json";

// It first loads your third party modules, then the
// module loader loads the project modules.
// additional configuration provided to ignore some of the modules "appConfig.json"
moduleLoader(thirdPartyModules, projectModules, configurationFile)
  .then(done => console.info(done))
  .catch(error => {
    console.error(error);
  });
