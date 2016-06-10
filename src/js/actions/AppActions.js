var AppDispatcher = require('../dispatcher/Dispatcher')
var AppConstants = require("../constants/AppConstants")

var AppActions = {
  searchLocation: function(location) {
    console.log('ACTION: searching for '+ location.title)
    AppDispatcher.searchingAction({
      actionType: AppConstants.SEARCH_LOCATION,
      location: location
    })
  },

  receiveBusinessResults: function(businesses) {
    //console.log("ACTION", businesses)
    AppDispatcher.searchingAction({
      actionType: AppConstants.RECEIVE_BUSINESS_RESULTS,
      businesses: businesses
    })
  }
}
module.exports = AppActions;
