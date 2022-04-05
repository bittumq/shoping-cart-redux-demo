// add item to cart

export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

/// remove to cart

export const deleteCart = (product) => {
    return{
        type: "DELETEITEM",
        payload: product 
    }
}

export const inc = (product) => {
    return{
        type: "INC",
        payload: product
    }
}

export const dec = (product) => {
    return{
        type: "DEC",
        payload: product
    }
}