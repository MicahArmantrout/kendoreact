import React, { Component } from 'react';
import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dateTime: new Date()
    };

    //this.onChange - this.onChange.bind(this);
  }



  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
