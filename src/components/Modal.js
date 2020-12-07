import React, { useRef, useState } from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
// import { setUserSession } from "../Utils/Common";
import { useHistory } from "react-router-dom";

export const Modal = ({ showModal, setShowModal }) => {
  let history = useHistory();
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange1 = (e) => setEmail(e.target.value);
  const handleChange2 = (e) => setPassword(e.target.value);
  const handleChange3 = (e) => setFullName(e.target.value);
  const handleChange4 = (e) => setPassword2(e.target.value);

  const handleRegis = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const user = {
      fullName: fullName,
      email: email,
      password: password,
    };
    if (password === password2) {
      axios
        .post(`http://13.238.142.2/register`, user)
        .then((res) => {
          console.log(res);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          // history.push("/");
          alert("Sign Up Berhasil");
          setShowModal((prev) => !prev);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      alert("Password Tidak Sama");
    }
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {console.log("user:" + fullName)}
      {console.log("email:" + email)}
      {console.log("Pass:" + password)}
      {console.log("Pass2:" + password2)}
      {showModal ? (
        <div className="backgroundModal" ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="ModalWrapper">
              <div className="ModalContent">
                <h4>
                  Sign Up For New <br /> Account
                </h4>
                <form onSubmit={handleRegis}>
                  <div class="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="fullName"
                      placeholder="Enter Name"
                      onChange={handleChange3}
                    />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter Email"
                      onChange={handleChange1}
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter Password"
                      onChange={handleChange2}
                    />
                  </div>
                  <div class="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirmPassword"
                      placeholder="Enter Password Again"
                      onChange={handleChange4}
                    />
                  </div>
                  <button className="btn-block mt-5" type="submit">
                    {loading ? "Loading..." : "SIGN UP"}
                  </button>
                </form>
              </div>
              <MdClose
                className="CloseModalButton"
                aria-label="Close Modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
