import React from 'react'
import { AppRegistry } from 'react-native'
import { createStore } from 'redux'

// Import the reducer and create a store
import { reducer } from './todoListRedux'
const store = createStore(reducer)

// Import the App container component
import App from './App'

// Pass the store into the app container
const AppWithStore = () => <App store={store} />

AppRegistry.registerComponent('Redux', () => AppWithStore);
