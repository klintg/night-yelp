var AppDispatcher = require('../dispatcher/Dispatcher')
var AppConstants = require("../constants/AppConstants")
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var AppApi = require('../utils/appApi')

var CHANGE_EVENT = 'change';

var _businesses = []        //when we use the api we'll put the buinesses in this array

var _selected = '';         //selected from the api.

var AppStore = assign({}, EventEmitter.prototype, {
  setBusinessResults: function(businesses) {
    _businesses = businesses;
  },
  getBusinessResults: function() {
    return _businesses;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback)
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback)
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action

  switch(action.actionType) {
    case AppConstants.SEARCH_LOCATION:
        console.log('STORE: searching for '+ action.location.title)
        AppApi.searchLocation(action.location)
        AppStore.emit(CHANGE_EVENT);
        break;
    case AppConstants.RECEIVE_BUSINESS_RESULTS:
        AppStore.setBusinessResults(action.businesses)
        AppStore.emit(CHANGE_EVENT)
        break;
  }
  return true;
})

module.exports = AppStore
