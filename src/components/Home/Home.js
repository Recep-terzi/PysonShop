import React,{useState} from "react";

import ItemList from "../ItemList/ItemList";
import { useCollection } from "../../hooks/useCollection";
import Footer from "../Footer/Footer";
import Detail from "../Detail/Detail";


const Home = () => {
  const { documents: item } = useCollection("item");
  
  
  return (
    <>
      <div className="hero">
        <div class="card bg-dark text-white border-0 ">
          <img
            src="/assets/im43.jpg"
            class="card-img img-fluid"
            alt="Background"
            height="890px"
          />
          <div class="card-img-overlay d-flex flex-column justify-content-center ">
            <div className="container">
              <h5 class="card-title display-3 fw-bolder mb-0">
                {" "}
                NEW SEASON ARRIVALS
              </h5>
              <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
        
        {item && <ItemList item={item} />}
        
 
        
        <Footer />
      </div>
      
    </>
  );
};

export default Home;
