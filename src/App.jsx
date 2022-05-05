import React from 'react'
import { AddProduct } from './Components/AddProduct'
import { CounterProduct } from './Components/CounterProduct'
import { ProductList } from "./Components/ProductList"


function App() {
  return (
    <div>
      <AddProduct />
      <ProductList />
      <CounterProduct />
    </div>
  )
}
export default App