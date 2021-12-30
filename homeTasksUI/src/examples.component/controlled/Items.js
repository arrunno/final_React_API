import React from "react";
import Item from "./Item";
import ItemHookLifecycle from "../hooks/ItemHookLifecycle";
import ItemActions from "./ItemActions";

export default class Items extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items :[
                {id:1, quantity: 0, text: ''},
                {id:2, quantity: 0, text: ''},
                {id:3, quantity: 0, text: ''},
                {id:4, quantity: 0, text: ''},
                {id:5, quantity: 0, text: ''},
                {id:6, quantity: 0, text: ''}
            ]
        }
    }

    onAddQuantity = (item) => {
        const items = [... this.state.items];
        const index = items.indexOf(item);
        items[index].quantity++;

        this.setState({items});
    }

    onRemoveQuantity = (item) => {
        const items = [... this.state.items];
        const index = items.indexOf(item);
        if(items[index].quantity > 0) {
            items[index].quantity--;
            this.setState({items});
        }
    }

    onHandlingText = (event, id) => {
       const items = this.state.items.map(item => {
           if(item.id === id) {
               item.text = event.target.value;
           }
           return item;
       });

       this.setState( {items});
    }

    onHideText = (id) => {
        const items = this.state.items.map(item => {
            if (item.id === id) {
                item.text = '';
            }
            return item;
        })
        this.setState({items});
    }

    onDeleteItem = (id) => {
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({items});
    }

    onHandlingAddItem = () => {
        const items = [...this.state.items];
        let max = 0;
        if(items && items.length > 0){
            max = items[0].id;
            for(let i=1, len=items.length; i < len; i++){
                if(items[i].id > max) {
                    max = items[i].id;
                }
            }
        }
        items.push({id: max + 1, quantity: 0, text: ''});
        this.setState({items});
    }

    onResetQuantity = () => {
        const items = this.state.items.map(item => {
            item.quantity = 0;
            return item;
        })
        this.setState({items});
    }



    render() {
        return (
            <>
                <ItemHookLifecycle  timeout={5000} />
                {
                    this.state.items.map(item => <Item key={item.id}
                                                       item={item}
                                                       onAddQuantity={this.onAddQuantity}
                                                       onRemoveQuantity={this.onRemoveQuantity}
                                                       onHandlingText={this.onHandlingText}
                                                       onHideText={this.onHideText}
                                                       onDeleteItem={this.onDeleteItem} />)

                }
                <ItemActions onHandlingAddItem={this.onHandlingAddItem}
                             onResetQuantity={this.onResetQuantity} />
            </>
        )
    }
}
