 import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "./context/Context";
import Rating from "./Rating";


function SingleProduct({prod}){
    const {state:{cart},
        dispatch, } = CartState()
    return (
        <div className="products">
            <Card>
            <Card.Body>
                <Card.Img variant="top" src={prod.image} alt={prod.name} />
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom:10}}>
                    <span>Rs. {prod.price.split(".")[0]}</span>
                    {prod.fastDelivary ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>4 Days Delivery</div>
                    )}
                    <Rating rating={prod.ratings} />
                </Card.Subtitle>
                {
                    cart.some((p)=> p.id === prod.id) ? (
                        <Button onClick={()=>{
                            dispatch({
                                type:"REMOVE_FROM_CART",
                                payload:prod,
                            });
                        }} variant="danger">
                            Remove from cart
                        </Button>
                    ) : (
                        <Button onClick={()=>{
                            dispatch({
                                type:"ADD_TO_CART",
                                payload:prod,
                            });
                        }} disabled={!prod.inStock}>
                            {!prod.inStock ? "Out of Stock" : "Add to Cart "}
                        </Button>
                    )
                }
                
                </Card.Body>
            </Card>
            {/* {prod.name} */}
        </div>
    )
}

export default SingleProduct;