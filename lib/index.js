'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const fs = require('fs');
const path = require('path');
/* eslint-disable no-unused-vars */
module.exports = {
  provider: 'strapi-provider-upload-local-path',
  name: 'Local server',
  init: (config) => {
    return {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          // write file in configured folder
          fs.writeFile(path.join(config.path , `/${file.hash}${file.ext}`), file.buffer, (err) => {
            if (err) {
              return reject(err);
            }

            file.url = path.join(config.path , `/${file.hash}${file.ext}`);

            resolve();
          });
        });
      },
      delete: (file) => {
        return new Promise((resolve, reject) => {
          const filePath = path.join(config.path , `/${file.hash}${file.ext}`);

          if (!fs.existsSync(filePath)) {
            return resolve('File doesn\'t exist');
          }

          // remove file from public/assets folder
          fs.unlink(filePath, (err) => {
            if (err) {
              return reject(err);
            }

            resolve();
          });
        });
      }
    };
  }
};
