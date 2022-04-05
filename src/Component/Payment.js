import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import './Payment.css'

export const Payment = () => {

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
        <div>
  <section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-lg-5">
                  <div className="card bg-primary text-white rounded-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="mb-0">Card details</h5>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" className="img-fluid rounded-3" style={{width: 45}} alt="Avatar" />
                      </div>
                      <p className="small mb-2">Card type</p>
                      <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-mastercard fa-2x me-2" /></a>
                      <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-visa fa-2x me-2" /></a>
                      <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-amex fa-2x me-2" /></a>
                      <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x" /></a>
                      <form className="mt-4">
                        <div className="form-outline form-white mb-4">
                          <input type="text" id="typeName" className="form-control form-control-lg" siez={17} placeholder="Cardholder's Name" />
                          <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                        </div>
                        <div className="form-outline form-white mb-4">
                          <input type="text" id="typeText" className="form-control form-control-lg" siez={17} placeholder="1234 5678 9012 3457" minLength={19} maxLength={19} />
                          <label className="form-label" htmlFor="typeText">Card Number</label>
                        </div>
                        <div className="row mb-4">
                          <div className="col-md-6">
                            <div className="form-outline form-white">
                              <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YYYY" size={7} minLength={7} maxLength={7} />
                              <label className="form-label" htmlFor="typeExp">Expiration</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline form-white">
                              <input type="password" id="typeText" className="form-control form-control-lg" placeholder="●●●" size={1} minLength={3} maxLength={3} />
                              <label className="form-label" htmlFor="typeText">Cvv</label>
                            </div>
                          </div>
                        </div>
                      </form>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">${total}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">$0</p>
                      </div>
                      <div className="d-flex justify-content-between mb-4">
                        <p className="mb-2">Total(Incl. taxes)</p>
                        <p className="mb-2">${total}</p>
                      </div>
                      <button type="button" className="btn btn-info btn-block btn-lg">
                        <div className="d-flex justify-content-between">
                          <span>$4818.00</span>
                          <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2" /></span>
                        </div>
                      </button>
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
</div>

    )
}
