// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// environment.ts
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBbCkRD9KusHcQLvi-di7i7c7U6Q3okhEE',
    authDomain: 'angular-login-form.firebaseapp.com',
    databaseURL: 'https://angular-login-form.firebaseio.com',
    projectId: 'angular-login-form',
    storageBucket: 'angular-login-form.appspot.com',
    messagingSenderId: '325987725455'
  }
};
