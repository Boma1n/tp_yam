import { Component } from 'react'

export class Stat extends Component {
    constructor(props){
        super(props)
        this.state = {
            pair : 0,
            doublePair : 0,
            brelan : 0,
            square :0,
            yam : 0,
            suite : 0,
        }
    }
    checkRolls(){
        let [totalPair, totalBrelan, totalSquare, totalYam, totalDoublePair, totalSuite] = [0,0,0,0,0,0];
        for(const roll of this.props.rolls){
            const {pair, brelan, square, yam, doublePair} = this.checkRoll(roll)
            totalPair += pair;
            totalBrelan += brelan;
            totalSquare += square;
            totalYam += yam;
            totalDoublePair += doublePair;
            if(this.checkSuite(roll)){
                totalSuite+= 1
            }
        }
        this.setState({
            pair : totalPair/2 - totalDoublePair/2,
            brelan : totalBrelan/3,
            square : totalSquare/4,
            yam : totalYam/5,
            doublePair : totalDoublePair/2,
            suite : totalSuite
        })
    }

    checkRoll(roll){
        let [pair, brelan, square, yam, doublePair] = [0,0,0,0,0];
        let prevRoll = null;
        for(const dice of roll){
            const value = roll.filter(rolled => rolled === dice).length
            if(value === 2){
                if(prevRoll && prevRoll !== dice){
                    doublePair++
                }
                if(!prevRoll || (prevRoll && prevRoll === dice)){
                prevRoll = dice 
                pair++;
                }
            }
            if(value === 3){
                brelan++;
            }
            if(value === 4){
                square++;
            }
            if(value === 5){
                yam++;
            }
            
        }
        return {
            pair,
            doublePair,
            brelan,
            square,
            yam,
        }
    }

    checkSuite(roll){
        const sorted = roll.sort()
        let i = sorted[0]
        for(const dice of sorted){
            if(dice !== i){
                return false
            }
            i++
        }
        return true
    }

    render(){
        const {pair, brelan, square, yam, doublePair, suite} = this.state
        return(
            <div className="container mt-3">
                <button className="btn btn-primary" onClick={this.checkRolls.bind(this)}>Get Stats</button>
                <div className="mt-3">
                    <p>total pair : {pair}</p>
                    <p>total doublePair : {doublePair}</p>
                    <p>total brelan : {brelan}</p>
                    <p>total square : {square}</p>
                    <p>total yam : {yam}</p>
                    <p>total suite : {suite}</p>
                </div>
            </div>
        )
    }
}