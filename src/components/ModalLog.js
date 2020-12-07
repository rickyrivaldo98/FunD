import React, { useRef, useState } from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import { setUserSession } from "../Utils/Common";
import { useHistory } from "react-router-dom";

export const ModalLog = ({ showModalLog, setShowModalLog }) => {
  let history = useHistory();
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModalLog ? 1 : 0,
    transform: showModalLog ? `translateY(0%)` : `translateY(-100%)`,
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange1 = (e) => setUsername(e.target.value);
  const handleChange2 = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("here");
    setError(null);
    setLoading(true);
    const user = {
      email: username,
      password: password,
    };
    axios
      .post(`https://13.238.142.2/login`, user)
      .then((res) => {
        console.log(res);
        setUserSession(res.data.token, res.data.id, res.data.fullName);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        history.push("/sidemenu/dashboard");
      })
      .catch((error) => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        alert("Akun Tidak Ditemukan");
        console.log(error);
      });
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModalLog(false);
    }
  };

  return (
    <>
      {/* {console.log("user:" + username)} */}
      {/* {console.log("Pass:" + password)} */}

      {showModalLog ? (
        <div className="backgroundModal" ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="ModalWrapperLog">
              <div className="ModalContent">
                <h4>Log In</h4>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                      onChange={handleChange1}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
                      onChange={handleChange2}
                    />
                  </div>
                  <button
                    className="btn-block mt-5"
                    type="submit"
                    // onClick={handleLogin}
                  >
                    {loading ? "Loading..." : "Login"}
                  </button>
                </form>
              </div>
              <MdClose
                className="CloseModalButton"
                aria-label="Close Modal"
                onClick={() => setShowModalLog((prev) => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
