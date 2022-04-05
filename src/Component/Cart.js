import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../redux/action/index';
import './Cart.css'
import { Link } from 'react-router-dom'



const Cart = () => {

  const dispatch = useDispatch();
  const deleteProduct = (cart) => {
    dispatch(deleteCart(cart));
  }
  const [total, settotal] = useState(0)


  let { HandleCart } = useSelector((ert) => ert);
  console.log(HandleCart);
  useEffect(() => {
    let totalnum = HandleCart.reduce((acc, cur) => {
      return acc + Number(Math.ceil(cur.price) * cur.qty)
    }, 0);
    settotal(totalnum)
  }, [HandleCart])
  return (
    <>
      {HandleCart.map((item) => {
        return (
          <section className="h-100 gradient-custom">
            <div container py-5>
              <div className="row d-flex justify-content-center my-4">
                <div className="col-md-8">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Cart -{item.qty} items</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                            <img src={item.image} alt={item.title}
                              height="200px" width="200px" />
                          </div>
                        </div>
                        <div className='className="col-lg-5 col-md-6 mb-4 mb-lg-0"'>
                          <h4 className='text-uppercase text-black-50'>
                            {item.category}
                          </h4>
                          <h1 className='display-5' style={{fontSize: "1rem"}}>{item.title}</h1>
                          <p className='lead fw-bolder'>
                            Rating {item.rating && item.rating.rate}
                            <i className='fa fa-star'> ★ </i>
                          </p>
                          <h3 className='display-6 fw-bold my-4'>
                            ${item.price}
                          </h3>
                          {/* <p className='led'>{item.description}</p> */}
                          <button className='btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip' style={{ marginBottom: '20px', backgroundColor: 'red' }}
                            onClick={() => dispatch(deleteCart(item.id))}>
                            Remove to Cart
                          </button>
                        </div>
                        <div className='container'>
                          <div className='row'>
                            <div className='col-lg-2'>
                              <div class="input-group">
                                <span class="input-group-btn">
                                  <button className="quantity-right-plus btn btn-success btn-number"
                                    onClick={() => {
                                      dispatch({ type: "INC", payload: item.id });
                                      // changehandle(item.id);
                                    }}
                                  >
                                    <span class="glyphicon glyphicon-plus"></span>
                                  </button>
                                </span>
                                <span className='form-control input-number'>{item.qty}  </span>
                                <span class="input-group-btn">
                                  <button className="quantity-left-minus btn btn-danger btn-number"
                                    onClick={() => {
                                      dispatch({ type: "DEC", payload: item.id });
                                      //changehandle(item.id);
                                    }}
                                    disabled={item.qty == 1 ? true : false}
                                  > <span class="glyphicon glyphicon-minus"></span></button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        )
      })}
{/* next html summary */}
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>{HandleCart.length}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>{total}</strong></span>
              </li>
            </ul>
            <Link to="/payment">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </>

  )
}

export default Cart;

