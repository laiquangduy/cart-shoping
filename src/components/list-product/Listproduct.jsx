/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Listproduct.css";
import "bootstrap/dist/css/bootstrap.css";
// import airpods from '../../../public/img/apple-airpods-pro-2-2022-didongviet.png'

function Listproduct() {
  return (
    <>
      <div class='col-xs-12 col-sm-6 col-md-6 col-lg-6 custom-col'>
        <div className='panel-heading'>
          <h1 className='panel-title'>List Products</h1>
        
        <div className='panel-body'>
          <div className='media product'>
            <div className='media-left'>
              <a href='#'>
                <img
                  className='media-object'
                  src={
                    process.env.PUBLIC_URL +
                    "/img/apple-airpods-pro-2-2022-didongviet.png"
                  }
                  alt='airport'
                />
              </a>
            </div>
            <div className='media-body'>
              <h4>Air Pods Pro</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                dicta asperiores veniam repellat unde debitis quisquam magnam
                magni ut deleniti!
              </p>
              <input type='number' />
              <a data-product='1' href='#' class='price'>
                {" "}
                12 USD{" "}
              </a>
            </div>
          </div>
          
          <div className='media product'>
            <div className='media-left'>
              <a href='#'>
                <img
                  className='media-object'
                  src={
                    process.env.PUBLIC_URL +
                    "/img/Gear-Samsung-Galaxy-S22-Ultra.webp"
                  }
                  alt='airport'
                />
              </a>
            </div>
            <div className='media-body'>
              <h4>Air Pods Pro</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                dicta asperiores veniam repellat unde debitis quisquam magnam
                magni ut deleniti!
              </p>
              <input type='number' />
              <a data-product='1' href='#' class='price'>
                {" "}
                12 USD{" "}
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listproduct;
