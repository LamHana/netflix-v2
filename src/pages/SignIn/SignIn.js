import React from "react";
import { Container, Form } from "./SignIn.styled";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function SignIn() {
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  const navigate = useNavigate();
  const register = (e) => {
    // e.preventDefault();
    // createUserWithEmailAndPassword(
    //   auth,
    //   emailRef.current.value,
    //   passwordRef.current.valueS
    // )
    //   .then((authUser) => {
    //     console.log(authUser);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    console.log("hi");
    navigate("/home");
  };

  const signIn = (e) => {
    // e.preventDefault();
    // signInWithEmailAndPassword(
    //   auth,
    //   emailRef.current.value,
    //   passwordRef.current.value
    // )
    //   .then((authUser) => {
    //     console.log(authUser);
    //     // if (user != null) navigate("/home", { replace: true });
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
  //     if (userAuth) {
  //       //Logged in
  //       console.log(userAuth);
  //       dispatch(
  //         login({
  //           uid: userAuth.uid,
  //           email: userAuth.email,
  //         })
  //       );
  //     } else {
  //       //Logged out
  //       dispatch(logout);
  //     }
  //   });

  //   return unsubscribe;
  // }, []);
  // console.log(user);

  // const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encode JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    dispatch(login(userObject));
    console.log(user);
    navigate("/home");
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id:
        "729848820665-fufek6nfv8cs61n5mdqanv4mr9qocekk.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <Container>
      <Form>
        <h1>Sign In</h1>
        <input type="text" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span>New to Netflix?</span>
          <Link onClick={register}>Sign up now.</Link>
        </h4>
      </Form>
      <div className="App">
        <div id="signInDiv"></div>
      </div>
    </Container>
  );
}

export default SignIn;
