import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
    const products = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(remove(id))
    }


  return (
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper'>
            {
                products.map(product => (
                    <div key={product.id} className='cartCard'>
                        <img src={product.image} alt=''/>
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button className='btn' onClick={()=>handleRemove(product.id)}>Remove Item</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cart