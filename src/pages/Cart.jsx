import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EmptyCart from '../assets/empty_cart.svg'
import axios from 'axios'

const Cart = ({ cart, changeQuantity, removeItem, numberOfItems }) => {
    const [email, setEmail] = useState("");
    const [cartMetaData, setCartMetaData] = useState([{
        productId: "",
        productTitle: "",
        productQuantity: null,
        cartProductsQuantity: null,
        cartAmount: null
    }])
    const [token, setToken] = useState(null)
    const cartQuantityTotal = numberOfItems();


    const total = () => {
        let price = 0;
        cart.forEach(item => {
            price += +((item.salePrice || item.originalPrice) * item.quantity)
        });
        return price;
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }



    const trackCartProducts = () => {
        const productInfo = [];
        const cartAmount = parseFloat(total().toFixed(2));
        const cartToken = JSON.stringify(new Date().getTime())

        cart.forEach(product => {
            const cartDetails = {
                productId: product.id,
                productTitle: product.title,
                productQuantity: product.quantity,
                cartProductsQuantity: cartQuantityTotal,
                cartAmount: cartAmount,
            }

            productInfo.push(cartDetails)
        })
        setToken(cartToken)
        setCartMetaData(productInfo)
    }

    async function payWithBitcoin() {
        await axios({
            method: 'post',
            url: 'http://localhost:8000/cart',
            data: {
                dataOne: cartMetaData,
                dataTwo: token
            }
        }).then(function (res) {

            // eslint-disable-next-line no-undef
            Blockonomics.widget({
                msg_area: 'bitcoinpay',
                uid: `${res.data}`,
                email: email
            })
        }).catch(err => console.log(err))
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Show</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {cart.map((book) => {
                                    const bookPrice = book.salePrice || book.originalPrice;
                                    return (
                                        <div className="cart__item" key={book.id}>
                                            <div className="cart__book">
                                                <img src={book.url} alt="" className="cart__book--img" />
                                                <div className="cart__book--info">
                                                    <span className="cart__book--title">
                                                        {book.title}
                                                    </span>
                                                    <span className="cart__book--price">
                                                        ${bookPrice.toFixed(2)}</span>
                                                    <button
                                                        className="cart__book--remove"
                                                        onClick={() => removeItem(book)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input type="number"
                                                    className="cart__input"
                                                    min={0}
                                                    max={99}
                                                    value={book.quantity}
                                                    onChange={(event) => changeQuantity(book, event.target.value)} />
                                            </div>
                                            <div className="cart__total">
                                                ${(bookPrice * book.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    );
                                })}
                                {(cart.length === 0) && (
                                    <div className="cart__empty">
                                        <img src={EmptyCart} alt="" className="cart__empty--img" />
                                        <h2>You don't have any shows in your cart!</h2>
                                        <Link to="/books">
                                            <button className="btn">Browse shows</button>
                                        </Link>
                                    </div>
                                )}
                            </div>

                        </div>
                        {cart && cart.length > 0 && (
                            <div className="total">
                                <div className="total__item total__sub-total">
                                    <span>Subtotal</span>
                                    <span>${(total() * .9).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>${(total() * .1).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Total</span>
                                    <span>$<span>{(total()).toFixed(2)}</span></span>
                                </div>
                                <input required type="email" id="email" placeholder="Email Address" onInput={handleEmailInput} onChange={trackCartProducts} />
                                <button className="btn btn__checkout"
                                    onClick={() => { trackCartProducts(); payWithBitcoin() }} >
                                    Proceed to checkout
                                </button>
                                <div id="bitcoinpay"></div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart
