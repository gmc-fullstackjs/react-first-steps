import { Component } from "react";

class ClassBasedCard extends Component {


    constructor(props) {
        super(props)
        console.log("CONSTRUCTED")

    }


    render() {
        return <div className='card' >
            {this.props.text}
            <h1>{this.props.name}</h1>
        </div>
    }


}


ClassBasedCard.defaultProps = {
    text: 'DEFAULT',
    name: 'NAME'
}


export default ClassBasedCard