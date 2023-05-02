import React from 'react'
import { Button, Divider, Space,Input } from 'antd';
function Demo() {
    function clickFunc(){
        console.log("hello bro...")
    }
  return (
    <>
    <Button type="primary" onClick={clickFunc}>Primary Button</Button>
    <Input placeholder="Basic usage" />;
    </>
  )
}

export default Demo;