import React from "react";

export default class HelloWorldComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {...props.user}
    }

    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <strong>{this.state.name}</strong>
                <div>
                    <input onChange={this.onChangeName} value={this.state.name}/>
                </div>
            </>
        )
    }
}
