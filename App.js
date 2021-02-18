/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

import BusinessCard from './js/BusinessCard';

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var apiKey = "YOUR_API_KEY_HERE";


var arScenes = {
  'BusinessCard' : require('./js/BusinessCard'),
}

var showARScene = true;

var ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {

    if (showARScene) {
      return (
        <ViroARSceneNavigator
          initialScene={{
            scene: arScenes['BusinessCard'],
          }}
          apiKey={apiKey} />
        );
    } else {
      return (
        <ViroVRSceneNavigator
          initialScene={{
            scene: vrScenes['BusinessCard'],
          }}
          apiKey={apiKey} />
      );

    }
  }
});

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

module.exports = ViroCodeSamplesSceneNavigator;