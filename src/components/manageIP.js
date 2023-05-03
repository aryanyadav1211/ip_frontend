import React, { useState, useEffect } from "react";
import { Button, Space, Input, Select } from "antd";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

function ManageIP(props) {
  const { bool, setBool } = props;
  const [loading, setLoading] = useState(false);
  const [ipAddress, setIpAddress] = useState("");

  const navigate = useNavigate();
  async function getIp() {
    setLoading((preValue) => !preValue);
    await fetch("https://api.ipify.org?format=json")
      .then((r) => r.json())
      .then((json) => {
        setIpAddress(json.ip);
        setLoading((preValue) => !preValue);
      })
      .catch((err) => console.log(err));
  }

  async function handleClick() {
    let inputedIp = document.getElementById("ipTextbox").value;
    let environment1 = document.querySelector(
      ".ant-select-selection-item"
    ).innerHTML;

    let userNameLocal = localStorage.getItem("username");
    const ipResponse = await fetch("https://localhost:44377/api/ip", {
      method: "POST",
      body: JSON.stringify({
        ipAddress: inputedIp,
        environment: environment1,
        username: userNameLocal,
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

    if (ipResponse) {
      console.log(
        "Congratulations!! Your IP Address has been successfully Added"
      );
    } else {
      alert("Your Ip is not added");
    }
  }

  function handleOnChange(e) {
    setIpAddress(e.target.value);
  }
  useEffect(() => {
    if (!bool) {
      // navigate("/contact");
    }
  }, []);

  return (
    <div className="container">
      <h1 id="signInHeading"> Add Your IP</h1>

      <form action="" id="form">
        <label for="name" class="Email">
          Enter IP to Access Database
        </label>
        <br />
        <div className="ipText">
          <Input
            id="ipTextbox"
            className="ipclass"
            value={ipAddress}
            placeholder="Enter Your IP Here..."
            onChange={handleOnChange}
          />
          <Spin spinning={loading}>
            <Button className="spinBtn" onClick={getIp}>
              Get IP
            </Button>
          </Spin>
        </div>
        <br />
        <label for="Password" className="password">
          Environment
        </label>
        <br />
        <Space wrap>
          <Select
            id="environment"
            defaultValue="Dev"
            style={{
              width: "30vw",
            }}
            options={[
              {
                value: "Dev",
                label: "Dev",
              },
              {
                value: "Test",
                label: "Test",
              },
            ]}
          />
        </Space>
        <br />
        <br />
        <Button
          type="primary"
          className="submitButton"
          value="Login"
          onClick={handleClick}
        >
          Add IP
        </Button>
        <br />
      </form>
    </div>
  );
}

export default ManageIP;
