import React, { Component } from 'react';
import {info} from './Kunde.js';



class Konto extends React.Component {
    state = {
        bet : info[0].kontoStand
        // bet : 0
    }
    add = ()=> {
        let plus = document.querySelector('.geldbetrag')
        this.setState({bet : this.state.bet + Number(plus.value)}) 
    }
    reduce = ()=> {
        let plus = document.querySelector('.geldbetrag')
        this.setState({bet : this.state.bet - Number(plus.value)}) 
    }
    render() { 
        return (
        <div className="konto">
            <div className="saldo">
                {this.state.bet}€
            </div>
            <input className='geldbetrag' type="number" name="" id="" />
            <button id='add' onClick={this.add} className='einzahlen'>Einzahlen</button>
            <button onClick={this.reduce} className='auszahlen'>Auszahlen</button>
        </div>
        );
    }
}
 
export default Konto;