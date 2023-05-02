import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './login.js';
import ManageIP from './manageIP.js';
import { useEffect } from 'react';

export default function App() {
  // const navigate = useNavigate();

  // const navigateToIp = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/ipmanager');
  // };

  // const navigateLogin = () => {
  //   // 👇️ navigate to /
  //   navigate('/');
  // };

  // useEffect(()=>{
  //   navigateLogin()
  // })

  return (
    <div>
      <div>
        {/* <button onClick={navigateLogin}>Login</button>
        {/* <hr /> */}
        {/* <Login/> */}
        {/* <button onClick={navigateToIp}>IpManager</button> */} 

        <Routes>
          <Route path="/contact" element={<ManageIP/>} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Contacts() {
//   return <h2>Contacts</h2>;
// }
// function demo() {
//   const navigate = useNavigate();

//   const navigateToIp = () => {
//     // 👇️ navigate to /contacts
//     navigate('/ipmanager');
//   }

// function handleLoginSubmit(){

//   if(1)
//   {
//     navigateToIp();
//   }
// } 