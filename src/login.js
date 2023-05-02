import React from "react";
import "./login.css";
// import { EyeTwoTone } from "@ant-design/icons";
import { Button, Divider, Space, Input } from "antd";
// import ManageIP from "./manageIP";
import { useNavigate} from "react-router-dom";


function Login() {
  const navigate=useNavigate();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn]=React.useState(0);
  const [inputEmail, setInputEmail]=React.useState('0');
  // function clickFunc() {
  //   console.log("hello bro...");
  //   navigate('/contact')
  // }
 

  React.useEffect(() => {
    if(inputEmail==='0'){
      console.log("enter details");
    }
    else{
      navigate('/contact')
    }
})

  async function handleLoginSubmit() {
    // let inputEmail = document.getElementById("email1").value;
    let email = '1';
    // let inputPassword = document.getElementById("password").value;
    // console.log(inputEmail);
    setInputEmail(email);
    setIsLoggedIn(isLoggedIn+1);
    console.log(isLoggedIn);
    console.log(inputEmail);
    {
      fetch("http://restapi.adequateshop.com/api/Tourist", {
        method: "POST",
        body: JSON.stringify({
          tourist_name: "ydv42",
          tourist_email: "abc2412.com",
          tourist_location: "xyz41",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
    }
    navigate('/contact')
    console.log(isLoggedIn);
  }
  return (
    <>
      <div className="container">
        <h1 id="signInHeading"> Login Form</h1>

        <form action="" id="form">
          {/* <input
            type="text"
            id="email"
            className="textbox"
            placeholder="Email"
            required
          /> */}
          <Input id="email1" placeholder="Enter Your Email Here..." />
          <br />
          <br />
          {/* <Input placeholder="Password" /> */}
          <Space direction="horizontal">
            <Input.Password
              placeholder="input password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </Space>
          {/* <input
            type="password"
            id="password"
            className="textbox"
            placeholder="Password"
            required
          /> */}
          <br />
          <br />
          <Button type="primary" value="Login" onClick={handleLoginSubmit}>
            Login
          </Button>
          {/* <input
            type="button"
            value="Submit"
            id="signInBtn"
            onClick={handleLoginSubmit}
          /> */}
          <br />
        </form>
      </div>
    </>
  );
}


export default Login;
