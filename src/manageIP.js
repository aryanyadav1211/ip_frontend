import React, { useState, useEffect } from "react";
import { Button, Divider, Space, Input } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
function ManageIP() {
  // const [count, setCount] = useState(0);
const [loading,setLoading] = useState(false);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  function handleClick(){
    alert("Your IP has been successfully registered");
  }

  useEffect(() => {
    console.log("hiii");
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json())
      .then((json) => {
        document.getElementById("signInHeading").innerHTML = json.ip;
        document.getElementById("email").value = json.ip;
      });
  },[]);

  return (
    <div className="container">
      <h1 id="signInHeading"> My IP Address:</h1>

      <form action="" id="form">
        <label for="name" class="Email">
          Enter IP to Access Database
        </label>
        <br />
        {/* <input
          type="text"
          id="email"
          className="textbox"
          placeholder="Your IP Address"
          required
        /> */}
        <Input placeholder="Enter Your Email Here..." />
        {/* <Spin spinning="true"></Spin> */}
        {/* <Spin indicator={antIcon} /> */}
        <br/>
        <label for="Password" className="password">
          Environment
        </label>
        <br />
        {/* <input
          type="text"
          id="password"
          className="textbox"
          placeholder="Password"
          required
        /> */}
        <select className="dropDown">
          <option value="dev"> Dev</option>
          <option value="test"> Test</option>
        </select>
        <br />
        <br />

        {/* <input type="button" value="Submit" id="signInBtn" onClick={handleClick} /> */}
        <Button type="primary" value="Login" onClick={handleClick}>
            Add IP
          </Button>
        <br />
      </form>
    </div>
  );
}

export default ManageIP;
