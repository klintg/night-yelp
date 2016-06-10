var React = require('react')
var Business = require("./Business")

var BusinessResults = React.createClass({
  render: function() {
    return (
      <div>
        <h3 className="text-center">Results</h3>
        {
          this.props.businesses.map(function(business, i) {
            return (
              <Business business={business} key={i} />
            )
          })
        }
      </div>
    )
  }
})

module.exports = BusinessResults
