/*
 *  Loads all the other modules defined in the
 *  array and the configuration. The configuration
 *  names of the modules are case insensitive
 */
export const moduleLoader = (function() {
  return async function getModulesToRunFromConfig(
    thirdPartyModules,
    appModules,
    configFilePath
  ) {
    const configModulues = await fetchApplicationModulesFromConfiguration(
      configFilePath
    );

    bootstrapAppAndThirdPartyModules(
      configModulues,
      thirdPartyModules,
      appModules
    );

    return "All modules loaded OK and runned";
  };
})();

async function fetchApplicationModulesFromConfiguration(configFilePath) {
  if (!configFilePath || configFilePath.length === 0) {
    return [];
  }
  const config = await fetchConfiguration(configFilePath);

  const { applicationModules, thirdPartyModules } = config;

  return {
    appModules: applicationModules.map(appMod => appMod.toLowerCase()),
    thirdPartyModules: thirdPartyModules.map(_3rdMod => _3rdMod.toLowerCase())
  };
}

async function fetchConfiguration(configFilePath) {
  const config = await fetch(configFilePath);
  if (!config.ok) {
    return Promise.reject(`configuration file not found at: ${configFilePath}`);
  }

  return await config.json();
}

function bootstrapAppAndThirdPartyModules(
  configModules,
  thirdPartyModules,
  appModules
) {
  bootstrapModules(configModules.thirdPartyModules, thirdPartyModules, true);
  bootstrapModules(configModules.appModules, appModules, false);
}

function bootstrapModules(configModules, modules, isThirdParty) {
  if (configModules && configModules.length > 0) {
    runOnlyMatchingModulesFromConfig(modules, configModules, isThirdParty);
  } else {
    runModules(modules, isThirdParty);
  }
}

function runOnlyMatchingModulesFromConfig(
  modules,
  modulesFromConfig,
  isThirdParty
) {
  if (modules instanceof Array) {
    modules.forEach(module => {
      if (modulesFromConfig.includes(module.name.toLowerCase())) {
        runModule(module, isThirdParty);
      }
    });
  }
}

function runModules(modules, isThirdParty) {
  if (modules instanceof Array) {
    modules.forEach(module => runModule(module, isThirdParty));
  }
}

function runModule(module, isThirdParty) {
  const moduleText = "Module loaded and executed";
  const thirdPartyModule = isThirdParty ? "Third Party:" : "";
  if (typeof module === "function") {
    console.info(
      `|-------------------------- ${thirdPartyModule} ${moduleText} --------------------------|: ${module.name}`
    );
    module();
  }
}
