/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] The id of the resource
 * 
 * @member {string} [name] The name of the resource
 * 
 * @member {string} [type] The type of the resource
 * 
 * @member {string} [location] The location of the resource
 * 
 * @member {object} [tags] The tags of the resource
 * 
 */
function Resource() {
  Resource['super_'].call(this);
}

util.inherits(Resource, models['BaseResource']);

/**
 * Defines the metadata of Resource
 *
 * @returns {object} metadata of Resource
 *
 */
Resource.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Resource',
    type: {
      name: 'Composite',
      className: 'Resource',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: false,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = Resource;
