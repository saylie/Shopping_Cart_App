import React from "react";
import ProductList from "../Base_Components/ProductList";
import Cart from "../Base_Components/Cart";
import { Row, Col } from "react-bootstrap";

const ShoppingApp = () =>{
    return(
        <div>
            <Row>
                <Col lg={9}>
                    <ProductList />
                </Col>
                <Col lg={3}>
                    <Cart />
                </Col>
            </Row>
        </div>
    )
}

export default ShoppingApp