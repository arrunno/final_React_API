import React from "react";


export default({quantity}) => {


    const getBadgeClass = () => {
        let badge = 'badge bg-';

        if (quantity >= 2 && quantity < 10) {
            badge += 'warning';
        } else if (quantity >= 10) {
            badge += 'success';
        } else {
            badge += 'secondary';
        }

        return badge;
    }


    return(
        <div className={getBadgeClass()}>{quantity}</div>
    );
}