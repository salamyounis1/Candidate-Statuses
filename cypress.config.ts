

// export default defineConfig({
//   e2e: {
//     baseUrl:'https://opensource-demo.orangehrmlive.com/web/index.php',
//     specPattern: "**/*.feature",
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
    
//   },
// });



// export default {
//   e2e: {
//     baseUrl:'https://opensource-demo.orangehrmlive.com/web/index.php',
//     specPattern: "**/*.feature",
    
//     // specPattern: "**/*.feature",
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },

// };
// import { defineConfig } from 'cypress';

// export default defineConfig({
//   e2e: {
//     baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
//     specPattern: '**/*.feature',
    
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';


export default defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
