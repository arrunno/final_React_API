import React from "react";

export default class ItemText extends React.Component{

    componentDidMount(){
        console.log('Komponentas idedamas');
    }

    componentDidUpdate(prevProps, prevState, snapsot){
        console.log('Atnaujino', prevProps);
    }

    componentWillUnmount(){
        console.log('Komponentas ismetamas');
    }

    render(){
        return(
            <>
            <div>{this.props.item.text}</div>
            <div>
                <button className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => this.props.onHideText(this.props.item.id)}>Hide?
                </button>
            </div>
            </>
        )
    }
}