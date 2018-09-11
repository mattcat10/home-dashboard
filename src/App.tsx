import * as React from 'react';
import HeaderContent from './HeaderContent/HeaderContent';
import './App.css';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="container">
          <div className="item header">
            <HeaderContent />
          </div>
          <div className="item sidebar">sidebar</div>
          <div className="item content-1">Content-1</div>
          <div className="item footer">footer</div>
        </div>

      </div>
    );
  }
}

export default App;
