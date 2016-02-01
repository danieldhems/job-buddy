var React = require("react");
var locationStore = require("../stores/locationStore");

var Locations = React.createClass({
  getInitialState(){
    return LocationStore.getState();
  },

  componentWillMount(){
    LocationStore.unlisten(this.onChange)
  },

  componentDidMount(){
    LocationStore.listen(this.onChange)
  },

  onChange(state){
    this.setState(state);
  }

  getLocations(){
    this.locations.map( location => {
      return <li>{location.name}</li>
    })
  }

  render(){
    const locationList = this.getLocations();
    return (
      <ul>
        {locationList}
      </ul>
    )
  }
})

export default Locations;
