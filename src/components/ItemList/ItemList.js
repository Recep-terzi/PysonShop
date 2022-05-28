import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import { useCollection } from "../../hooks/useCollection";
import Detail from "../Detail/Detail";
import styles from "./ItemList.module.css";


const ItemList = ({ item }) => {
  
  // const handleClick = async (id) => {
  //   console.log(id);

  //   const ref = doc(db, "item", id);
  //   await deleteDoc(ref);
  // };

  return (
    <>
      <div className="my-5 py-3 container">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Products</h1>
          <hr />
        </div>
      </div>
      
      <div className="buttons d-flex justify-content-center mb-5 pb-5 mt-5">
        <button className="btn btn-outline-dark me-2">All</button>
        <button className="btn btn-outline-dark me-2">Men's Clothing</button>
        <button className="btn btn-outline-dark me-2">Women's Clothing</button>
        <button className="btn btn-outline-dark me-2">Jewelery</button>
        <button className="btn btn-outline-dark me-2">Electronic</button>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-5">
          {item.map((items) => (
            <div className="col" style={{ marginTop: "30px" }}>
              <div className="card" class={styles.card}>
                <img
                  src={`${items.image}`}
                  alt=""
                  className="card-img-top"
                  style={{ height: "360px" }}
                />
                <div className="card-body">
                  <p className="card-title">{items.title}</p>
                  <p>{items.id}</p>
                  <h4>{items.price} TL</h4>
                  <button className="btn btn-outline-secondary">
                    Add To Cart
                  </button>
                  <Link to={`/detail/${items.id}`} >
                  
                   
                    <button className="btn btn-outline-secondary">
                      Detail
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ItemList;
