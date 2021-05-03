# strapi-provider-upload-local-path

## Resources

- [MIT License](LICENSE.md)

## Install

`npm install strapi-provider-upload-local-path` 

## Description

This package create possiblilty for use configurable path. The key for this package is to: 
Package use a copy of code: 
https://github.com/francoislongatte/strapi-provider-upload-local-folder/blob/master/lib/index.js

1. Reads the path from the environment variables.

## Set Path
You need to add a new property called `path` to your `config/plugins` file.

```
// config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    provider: 'local-path',
    providerOptions: {
      path: env('UPLOADS_PATH')
    },
  },
});
```
You can rename the `environment variables` as you like.
