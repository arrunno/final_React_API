import React from "react";
import Badge from "./Badge";
import ItemText from "./ItemText";
import {Button} from "@mui/material";
import {styled} from "@mui/styles";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

//<DeleteOutlinedIcon />


const DeleteButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
})

export default class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="col-3">
                    <div className="input-group mb-3">
                        <Badge quantity={this.props.item.quantity} />
                        {/*<div className={this.getBadgeClass()}>{this.props.item.quantity}</div>*/}
                        <input type="text" className="form-control" placeholder="Recipient's username"
                               aria-label="Recipient's username" aria-describedby="button-addon2"
                               onChange={(event) => this.props.onHandlingText(event, this.props.item.id)}/>

                        <Button variant="outlined"
                                color="primary"
                                onClick={() => this.props.onAddQuantity(this.props.item)}>+
                        </Button>

                        <Button variant="outlined"
                                color="secondary"
                                onClick={() => this.props.onRemoveQuantity(this.props.item)}
                                disabled={this.props.item.quantity === 0}>-
                        </Button>

                        <DeleteButton onClick={() => this.props.onDeleteItem(this.props.item.id)}><DeleteOutlineIcon/></DeleteButton>

                    </div>
                    {
                        this.props.item.text.length > 0 && <ItemText item={this.props.item}
                            onHideText={this.props.onHideText} />
                        }
                </div>
            </>
        )
    }
}
