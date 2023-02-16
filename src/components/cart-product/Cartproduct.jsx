import React, { Component } from 'react';
import "./Cartproduct.css"
import Alert from '../alert/Alert';
function Cartproduct() {
    return ( <><div class='col-xs-12 col-sm-6 col-md-6 col-lg-6 custom-col'>
        <div className='panel'>
            <div className="panel-heading-cart">
            <h1 className='panel-title-cart'>Your Cart</h1>
           
            <div className="panel-body">
                <table>
                    <thead>
                        <tr>
                            <th width="4%">#</th>
                            <th>Name</th>
                            <th width="15%">Price</th>
                            <th width="4%">Quantity</th>
                            <th width="20%">Subtotal</th>
                            <th width="25%">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-list'>
                        <tr>
                            <th>1</th>
                            <td>Lorem ipsum.</td>
                            <td>12 USD</td>
                            <td>
                                <input/>
                            </td>
                            <td><strong>12 USD</strong></td>
                            <td>
                                <a href="#" className='label update-cart-item'>Update</a>
                                <a href="#" className='label delete-cart-item'>Delete</a>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="6">Empty product in your cart</th>
                        </tr>
                        <tr>
                            <td colspan="4">
                            There are <b>5</b> items in your shopping cart.
                            </td>
                            <td colspan="2" className='total-price'>12 USD</td>
                        </tr>
                    </tfoot>
                </table>
                </div> </div></div><Alert/></div></> );
}

export default Cartproduct;