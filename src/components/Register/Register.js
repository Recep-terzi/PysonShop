import React, { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";
import styles from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { error, signup } = useSignUp();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password,username);
    setEmail("");
    setPassword("");
    setUsername("")
  };
  return (
    <section class="vh-100" className={styles.gradient_custom}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              class="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                  <p class="text-white-50 mb-5">
                    Please enter your Username,email and password!
                  </p>
                  <form onSubmit={handleSubmit}>
                    {" "}
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        Username
                      </label>
                      <input
                        type="username"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                      />
                    </div>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        Email
                      </label>
                      <input
                        type="email"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>{" "}
                    <p class="small mb-5 pb-lg-2">
                      <a class="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                </div>

                {error && <p>{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
