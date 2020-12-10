import React from 'react'
import { yes, no } from '../objects'

class YesNoBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            statement: no["no-statement"],
            image: no["no-image"],
            object: no
        }
    }

    clickHandler = () => {
        if (this.state.object === no) {
            this.setState({
                statement: yes["yes-statement"],
                image: yes["yes-image"],
                object: yes
            })
        }
        else {
            this.setState({
                statement: no["no-statement"],
                image: no["no-image"],
                object: no
            })
        }
    }


    render() {

        return (
            <body className="app display" id="root">
                <h1 className="display" > {this.state.statement} </h1> 
                <img className="display" onClick={this.clickHandler} src={this.state.image} alt={this.state.statement} />
            </body>
        )
    }
}

export default YesNoBox