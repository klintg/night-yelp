var Dispatcher = require('flux').Dispatcher
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
  searchingAction: function (action) {
    var payload = {
      source: 'SEARCH_ACTION',
      action: action
    }
    this.dispatch(payload)
  }
})

module.exports = AppDispatcher;
