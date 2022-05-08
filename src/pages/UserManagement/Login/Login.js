import axios from 'axios'
import { useEffect, useState } from "react";
import { Button, Card, Form, Container} from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast} from "react-toastify";
import auth from "../../../firebase.init";
import Loading from '../../Shared/Loading/Loading';
import './Login.css'

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  })

  const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, loading3, githubError] = useSignInWithGithub(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

  if(loading || loading2 || loading3){
    return <Loading></Loading>
  }  

  if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value })
      setErrors({ ...errors, email: "" })
      } else {
          setErrors({ ...errors, email: "Invalid email" })
          setUserInfo({ ...userInfo, email: "" })
    }

  }

  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" })
    }

  }

  const handleLogin = async(e) => {
    e.preventDefault();

    // console.log(userInfo)

    await signInWithEmail(userInfo.email, userInfo.password);
    const email = userInfo.email
    // eslint-disable-next-line no-undef
    const {data}=await axios.post('http://localhost:5000/login', {email})
    console.log(data)
    localStorage.setItem('accessToken',data.accessToken)
      navigate(from, { replace: true }); 
      

  }

  // reset password part
  const resetPassword = async () =>{
    const email = userInfo.email
    if(email){
      await sendPasswordResetEmail(email);
            toast('Sent email');
    }else{
      toast('please enter your email address');
    }
  }

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  
  useEffect(()=>{
    if (user || googleUser || githubUser) {
      // navigate(from, { replace: true });
  }
  },[user,googleUser,githubUser])
 
// error showing part
  useEffect(() => {
    const error = hookError || googleError || githubError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!")
          break;
        default:
          toast("something went wrong")
      }
    }
  }, [hookError, googleError, githubError])


  return (
    <div className="form-container">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-3">Log In</h2>
              <hr className="mb-4" />

              <Form onSubmit={handleLogin}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" onChange={handleEmailChange} required />
                  {errors?.email && <p className="error-message">{errors.email}</p>}
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" onChange={handlePasswordChange} required />
                </Form.Group>
                <Button className="w-100 mt-3 bg-primary" type="submit">
                  Log In
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <span className='text-su'>Don't have an account?</span> <Link to='/signup'><span className='btn btn-link text-primary pe-auto text-decoration-none '> Sign Up!</span> </Link>
          </div>
          <div className="w-100 text-center mt-2">
          <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
          </div>

          {/* google login part */}

          <div className="d-flex align-items-center">
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            <p className="mt-2 px-2">Or</p>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
          </div>

          <div>
            <button className="btn btn-primary w-75 d-block mx-auto" onClick={() => signInWithGoogle()}>
              <span className="px-4">Google</span>
            </button>
          </div>
          <div className='mt-2'>
            <button className="btn btn-primary w-75 d-block mx-auto" onClick={() => signInWithGithub()}>
              <span className="px-4">Github</span>
            </button>
        </div>
        </div>
      </Container>

    </div>
  );
};

export default Login;