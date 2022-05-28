import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

import styles from "./AddItem.module.css";
const Login = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const ref = collection(db, "item");
    await addDoc(ref, {
      title: newTitle,
      price: newPrice,
      image: newImage,
      category: newCategory,
    });
    setNewImage("");
    setNewPrice("");
    setNewTitle("");
  };

  return (
    <section style={{ width: "100%" }} className={styles.gradient_custom}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              class="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <form onSubmit={handleSubmit}>
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase">Add Item</h2>
                    <p class="text-white-50 mb-5">
                      Please enter your new item!
                    </p>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        İtem Title
                      </label>
                      <input
                        type="title"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        onChange={(e) => setNewTitle(e.target.value)}
                        value={newTitle}
                        required
                      />
                    </div>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        İtem Price
                      </label>
                      <input
                        type="price"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        onChange={(e) => setNewPrice(e.target.value)}
                        value={newPrice}
                        required
                      />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        İtem İmage
                      </label>
                      <input
                        type="img"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        onChange={(e) => setNewImage(e.target.value)}
                        value={newImage}
                        required
                      />
                    </div>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        İtem Category
                      </label>
                      <input
                        type="ctg"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        onChange={(e) => setNewCategory(e.target.value)}
                        value={newCategory}
                        required
                      />
                    </div>
                      
                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                     Add To Item
                    </button>
                  </div>

                  <div></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
