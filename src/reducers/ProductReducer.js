const initalState = {
    products: [],
    cartItems: [],
    loading: false,
    error: ''
}

const ProductReducer = (state = initalState, action) =>{
    switch(action.type){
        case 'GET_PRODUCTS_REQUEST':
            return{
                ...state,
                loading: true
            };
        case 'GET_PRODUCTS_SUCCESS':
            return{
                ...state,
                loading: false,
                products: action.payload
            };
        case 'GET_PRODUCTS_ERROR':
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        case 'ADD_TO_CART':
            const productId = action.payload;
            const product = state.products.find((product) => product.id === productId);
            const cartItems = [...state.cartItems];
            const existingCartItemIndex = cartItems.findIndex(item => item.id === productId);
          
            if (existingCartItemIndex !== -1) {
              // If item already exists in cart, create a new array with updated quantity
              const updatedCartItems = [...cartItems];
              updatedCartItems[existingCartItemIndex] = {
                ...updatedCartItems[existingCartItemIndex],
                quantity: updatedCartItems[existingCartItemIndex].quantity + 1
              };
          
              return {
                ...state,
                cartItems: updatedCartItems
              };
            } else {
              // If item does not exist in cart, add it with quantity 1
              return {
                ...state,
                cartItems: [
                  ...cartItems,
                  { ...product, quantity: 1 }
                ]
              };
            }
        case 'REMOVE_FROM_CART':
            const id = action.payload;
            const updatedCartItems = state.cartItems.filter(item => item.id !== id);
            return {
                ...state,
                cartItems: updatedCartItems
            };
        default:
        return state;
    }
}

export default ProductReducer