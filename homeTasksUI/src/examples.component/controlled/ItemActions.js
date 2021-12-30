import React from "react";

export default class ItemActions extends React.Component{

    render() {
        return(
            <>
                <button className="btn btn-outline-primary"
                        type="button"
                        onClick={() => this.props.onHandlingAddItem()}>Add
                </button>
                <button className="btn btn-outline-warning"
                        type="button"
                        onClick={() => this.props.onResetQuantity()}>Reset
                </button>
            </>
        )
    }
}