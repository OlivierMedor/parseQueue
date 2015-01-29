var app = angular.module('parseQ');

    app.factory('httpRequestInterceptor', function () {
      return {
        request: function (config) {
          config.headers = {'X-Parse-Application-Id': 'jWaeTPOuRE4sB0sM2qlWa1GhN6uHvFgbEUQu0R3W', 'X-Parse-REST-API-Key': 'cLQtJ8oCy5k6kMI0a33bMnsHGieH1lMi4zOsU8Da'}
          return config;
        }
      };
    });