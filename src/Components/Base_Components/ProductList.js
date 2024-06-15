import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { getProductsDetails, addToCart } from "../../Actions/ShoppingAppActions";
import ButtonComponent from "./Button_Component";
import { useSelector, useDispatch} from "react-redux";

const ProductList = () => {
    const products = useSelector((state) => state.ProductReducer.products)
    // const error = useSelector((state) => state.ProductReducer.error)

    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getProductsDetails());
    }, []);
    
    const handleAddToCart = (productId) => {
        dispatch(addToCart(productId)); 
    };
    // useEffect(() => {
    //     // Function to fetch product details when component mounts
    //     const fetchProductDetails = async () => {
    //         try {
    //             const productDetails = await getProductsDetails(); 
    //             setProducts(productDetails); 
    //         } catch (error) {
    //             console.error("Error fetching product details:", error);
    //         }
    //     };
    //     fetchProductDetails(); 
    // }, []);// Empty dependency array ensures this effect runs only once on component mount

    return(
        <div>
            <Row lg={12} className="TitleRow">
                <Col lg={2}>Product Name</Col>
                <Col lg={3}>Description</Col>
                <Col lg={2}>Price</Col>
                <Col lg={3}>Images</Col>
                <Col lg={2}>Cart</Col>
            </Row>
            {
                products.map(product =>(
                    <div key={product.id}>
                        <Row lg={12} style={{marginTop:'30px'}}>
                            <Col lg={2}>
                                <h6>{product.title}</h6>
                            </Col>
                            <Col lg={3}>{product.description}</Col>
                            <Col lg={2}>$ {product.price}</Col>
                            <Col lg={3}>{product.images.map(image =>{
                                return <img src={image} alt={product.title} height="100"></img>
                            })}</Col>
                            <Col lg={2}>
                                <ButtonComponent variant='info' btnClick={() => handleAddToCart(product.id)} id={product.id} buttonName='addToCart' buttonText='Add To Cart'/>
                            </Col>
                        </Row>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList