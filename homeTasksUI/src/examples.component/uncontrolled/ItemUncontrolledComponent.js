import React from "react";

export default class ItemUncontrolledComponent extends React.Component {

    constructor(props) {
        super(props);

        this.inputName = React.createRef();
    }

    onChange = (e) => {
        console.log(e.target.value);
        console.log(this.inputName.current.value);
    }

    updateName(e) {
        console.log(e.target.value);
    }

    render() {
        return (
            <>
                <input ref={this.inputName} onChange={this.onChange}/>
            </>
        )
    }
}
