// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  
  // Initialize Firebase
  firebase: {
    apiKey: "AIzaSyAKOW8e-Pu6Gv91JKBit_BND8M7th8rXBk",
    authDomain: "rinorsvp.firebaseapp.com",
    databaseURL: "https://rinorsvp.firebaseio.com",
    projectId: "rinorsvp",
    storageBucket: "",
    messagingSenderId: "327742544874"
  }
};
