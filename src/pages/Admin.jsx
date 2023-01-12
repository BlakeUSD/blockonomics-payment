import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Admin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin")
        setOrders(res.data)
      } catch (err) {
        console.log(`Oops, something went wrong: ${err}`)
      }
    }
    fetchAllOrders();
  }, [])

  return <div>
    <h1>Admin Dashboard</h1>
    {orders.map(order =>
      <div className="books__container" key={order.id}>
        <div className="row">
          <p>Order UUID: "{order.orderUUID}"</p>
          <p>Order status: {order.orderStatus ? order.orderStatus : '"pending"'}</p>
          <p>Cart Details: {JSON.stringify(order.cartDetails)}</p>
        </div>
      </div>
    )}
  </div>
}

export default Admin