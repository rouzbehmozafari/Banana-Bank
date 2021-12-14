import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Konto from './Konto';



class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <body>
          <header>
            <img id='logoImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvdWTgKOhcXJGOsWvxfmImYuB3Mxv7W45PTLB-MEZZSggQQejzn4ixibDJCx7q3MxB84&usqp=CAU" alt="" />
            <div id="title">Rouz Bank</div>
          </header>          
          <main>
            <Konto/>
          </main>
        </body>
      </div>
    );
  }
}
 
export default App;
