import React, { useEffect } from "react";
import { Button, Space, Input } from "antd";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { bool, setBool } = props;
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  useEffect(() => {
    if (bool) {
      navigate("/ipmanager");
    } else {
    }
  });

  async function handleLoginSubmit() {
    let inputedEmail = document.getElementById("email1").value;
    let inputedPassword = document.getElementById("password1").value;

    const newarray = inputedEmail.split("@");
    let userName = newarray[0];
    if (inputedEmail === "" || inputedPassword == "") {
      alert("Please properly enter your credentials!!");
    } else if (
      /^([A-Z0-9a-z._-]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6})$/.test(
        inputedEmail
      )
    ) {
      {
        const response = await fetch("https://localhost:44377/api/user/login", {
          method: "POST",
          body: JSON.stringify({
            username: userName,
            password: inputedPassword,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            return json;
          })
          .catch((err) => console.log(err));

        localStorage.setItem("username", userName);
        if (response) {
          if (!bool) {
            setBool(true);
          }
          navigate("/ipmanager");
        } else {
          alert("You are not a registered member");
        }
      }
    } else {
      alert("The format of email is not correct");
    }
  }
  return (
    <>
      <div className="container">
        <h1 id="signInHeading"> Login Form</h1>

        <form action="" id="form">
          <Input id="email1" placeholder="Enter Your Email Here..." />
          <br />
          <br />
          <Space direction="horizontal">
            <Input.Password
              id="password1"
              className="passwordText"
              placeholder="Enter password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
          </Space>
          <br />
          <br />
          <Button
            type="primary"
            className="submitButton"
            value="Login"
            onClick={handleLoginSubmit}
          >
            Login
          </Button>
          <br />
        </form>
        {true ? <></> : null}
      </div>
    </>
  );
}

export default Login;
