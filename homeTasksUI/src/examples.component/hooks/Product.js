import React, {useRef, useState} from "react";
import ProductInput from "./ProductInput";


export default () => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [visible, setVisible] = useState(false);

    const nameRef = useRef('');
    const categoryRef = useRef('');
    const descriptionRef = useRef('');
    const quantityRef = useRef(0);
    const priceRef = useRef(0);


    const createProduct = (e) => {
        e.preventDefault();

        setName(nameRef.current.value);
        setCategory(categoryRef.current.value);
        setDescription(descriptionRef.current.value);
        setQuantity(quantityRef.current.value);
        setPrice(priceRef.current.value);

        setVisible(true);

    }

    return (
        <>
            <form onSubmit={createProduct}>
                <ProductInput reference={nameRef} type="text" labelName="Name" />
                <ProductInput reference={categoryRef} type="text" labelName="Category" />
                <ProductInput reference={descriptionRef} type="text" labelName="Description" />
                <ProductInput reference={quantityRef} type="number" labelName="Quantity" />
                <ProductInput reference={priceRef} type="text" labelName="Price" />

                <button className="btn btn-outline-secondary"
                        type="submit">Submit
                </button>
            </form>

            {
                visible &&  <div>
                    Produktas:
                    <div>{name}</div>
                    <div>{description}</div>
                    <div>{category}</div>
                    <div>{quantity}</div>
                    <div>{price}</div>
                </div>
            }

        </>
    )
}