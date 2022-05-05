import React from 'react'
import { useState } from 'react'


export const AddProduct = () => {

const [ name,setName ] = useState("")

function 

    return (
        <div>
            <h1>AddProduct</h1>
            <form>
                <input onChange={() => { setName(event.target.value) }} value={name} type="text" placeholder='Name' /><br /><br />
                <input type="number" placeholder='Price' /><br /><br />
                <label htmlFor="category">Category</label>
                <select name="category" id="">
                    <option value="Phone">Phone</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Computer">Computer</option>
                    <option value="Watch">Watch</option>
                </select>  <br /><br />
                <textarea name="" id="" cols="30" rows="10" className='desc'></textarea>
                <button className="" type='submit'>Submit</button>
            </form>
        </div>
    )
}
