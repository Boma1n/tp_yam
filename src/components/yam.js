import "./yam.css";
import { Component } from 'react'

export class Yam extends Component {
   
    handleChange(e){
        this.props.onChange(e);
    }

    handleClick(){
        this.props.onClick();
    }

    render(){
        const { rolls } = this.props
        return(
            <div className="container">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Nombre de lancer(s)</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.handleChange.bind(this)}/>
                    <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Play</button>
                </div>

    
                {rolls.length !== 0 ?
                    <div className="container_result alert alert-success">
                        <div className="rolls">
                            {rolls.map((roll, i) => <p className="element" key={i}>{roll.join(" - ")}</p> )}
                        </div>
                    </div> : null
                }
            </div>
        )
    }
}

