import './App.css';
import {Component} from "react";
import { Yam } from "./components/yam"
import { Stat } from "./components/stat"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      rolls : [],
      stats: false,
      rollNumber: "",
    }
  }

  // Roll of 1 6-sided die
  diceRoll(){
    const roll = Math.floor(Math.random( )*6 + 1);
    return roll;
  }

  // Roll one Yams => 5 dices
  yamRoll(){
    const rolls = [];
    for(let i =0; i <5; i++){
      rolls.push(this.diceRoll());
    };
    return rolls;
  }

  play(){
    const { rollNumber } = this.state;
    const yamRolls = [];
    for(let i =0; i <rollNumber; i++){
      yamRolls.push(this.yamRoll())
    };
    this.setState({
      stats: true,
      rolls: yamRolls,
    });
  }

  // Recovery of the input at each change
  handleChange(e){
    const { value } = e.target;
    this.setState({
      rollNumber: parseInt(value),
    });
  }

  // Render game
  render(){
    const { rolls, stats } = this.state;
    return(
      <div className="container">
        <h1 className="h1 text-center my-3 font-weight-bold text-capitalize">Yam Game</h1>
        <Yam onChange={this.handleChange.bind(this)} onClick={this.play.bind(this)} rolls={rolls}/>
        {stats ? <Stat rolls={rolls}/> : null}
        
      </div>
    )
  }
}
// Lancer 5 dés, 5 types de résultat : null, brelan, double paire, carré, yams
// 1) method lance_de avec 6 possibilités pour chaque dé (1/6)
// Récupérer les stats des différents lancer ( nombre de double paire, nombre de yams etc)
// Utiliser bootstrap pour le style 

export default App;