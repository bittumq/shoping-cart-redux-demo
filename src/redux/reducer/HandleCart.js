
const cart = []

const HandleCart = (state = cart, action) => {
    //const {cart, setCart} = useContext(Cart);
    const product = action.payload;
    console.log();

    switch (action.type) {
        case "ADDITEM":


            //HECK IF PRODUCT IS ALREADY EXIST
            const exist = state.find((x) => x.id === product);
            //console.log(exist);
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            }
            else {
                const product = action.payload;
                return [
                    ...state, { ...product, qty: 1 }
                ]
            }

        case "DELETEITEM":
            //console.log('delete');
            let demo=state.filter((e)=>{
                return e.id!==action.payload
            })
            return state=demo
            // const exist1 = state.find((x) => x.id === product.id);
            // if (exist1.qty === 1) {
            //     return state.filter((x) => x.id !== exist1.id);
            // }
            // else {
            //     return state.map((x) =>
            //         x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            // }
            // ;

        case "INC":
          let data=state.map((ee)=>{
            if (ee.id===action.payload) {
                return{...ee,qty:Number(ee.qty+1)}
            }
            return ee
          })
          return data;
        case "DEC":
            let data1=state.map((er) =>{
                if (er.id===action.payload) {
                    return{...er,qty:Number(er.qty-1)}
                }
                return er
            })
            return data1;
       
        default:
            return state;

    }
}
export default HandleCart;