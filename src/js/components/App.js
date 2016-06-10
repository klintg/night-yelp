var React = require('react')

//flux stuff
var AppActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore')

//components
var SearchForm = require('./SearchForm')
var BusinessResults = require("./BusinessResults")

function getAppState() {
  return {
    businesses: AppStore.getBusinessResults()
  }
}

var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange)
  },

  render: function() {
    //to prevent showing up before search
    if (this.state.businesses == '') {
      var businessResults = ''
    } else {
      var businessResults =  <BusinessResults businesses={this.state.businesses}/>
    }

    return (
      <div>
        <SearchForm/>
        {businessResults}
      </div>
    )
  },

  _onChange: function () {
    this.setState(getAppState())
  }




})

module.exports = App;
