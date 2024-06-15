import axios from "axios";

export const getProductsRequest = () => {
    return{
        type: 'GET_PRODUCTS_REQUEST'
    }
}

export const getProductsSuccess = (products) =>{
    return{
         type: 'GET_PRODUCTS_SUCCESS',
         payload: products
    }
}
export const getProductsError = (error) =>{
    return{
         type: 'GET_PRODUCTS_ERROR',
         payload: error
    }
}

export const addToCart = (productId) =>{
    return{
         type: 'ADD_TO_CART',
         payload: productId
    }
}
export const removeFromCart = (productId) =>{
    return{
         type: 'REMOVE_FROM_CART',
         payload: productId
    }
}
export const getProductsDetails = () => {
   return async (dispatch) => {
    dispatch(getProductsRequest());
        axios
        .get('https://api.escuelajs.co/api/v1/products')
        .then(response => {
            const productDetails = response.data;
            console.error('Product details', productDetails);
            dispatch(getProductsSuccess(productDetails));
        }).catch(error =>{
            console.error('Error fetching product details:', error);
            dispatch(getProductsError('Failed to fetch product details'))
        })
    }
}   


