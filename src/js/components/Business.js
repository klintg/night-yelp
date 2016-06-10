var React = require('react')

var Business = React.createClass({
  render: function() {
    return (
      <div className="well">
        <div className="row">
          <div className="col-md-4">
            {this.props.business.name}

            <img className="thumbnail" src={this.props.business.image_url} />
            <img className="thumbnail" src={this.props.business.rating_img_url} />
            <a href={this.props.business.url}><button className="btn btn-success btn-xs">View On Yelp</button></a>
          </div>
          <div className="col-md-8">
            <h4>{this.props.business.snippet_text}</h4>
            <ul className="list-group">
              <li className="list-group-item">
                {this.props.business.location.neighborhoods} <br></br>
                {this.props.business.location.address}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Business
