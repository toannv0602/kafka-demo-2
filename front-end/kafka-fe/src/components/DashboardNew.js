import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import SockJsClient from "react-stomp";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import IconButton from '@mui/material/IconButton';
import Close from '@mui/material/IconButton';
import { ToastContainer, toast } from 'react-toastify';

export default function DashboardNew() {
  const [value, setValue] = useState("");

  const SOCKET_URL = "http://192.168.100.185:1712/retail/api/hola-retail";
  // const SOCKET_URL = "http://localhost:2108/dish/api/hola-canteen/";

  let onConnected = () => {
    console.log("Connected!!");
  };

  const [messages, setMessages] = useState([]);
  const [notifies, setNotifies] = useState([]);

  const onMessageReceived = (msg) => {
    console.log("New Message Received!!", msg);
    setMessages(messages.concat(msg));
    toast("Có thêm đơn mới:"+msg.orderCode)
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function buttonClick(event) {
    console.log("List msg:" + JSON.stringify(messages));
  }


  const removeMessgae = () => {
    console.log("valueeee="+value)
    const arr = messages.filter((item) => item.id !== value);
    setMessages(arr);
    
};

// useEffect(() => {

//   console.log("notify="+notifies[notifies.length-1])

  
// }, [notifies]);

// useEffect(() => {
//   var myHeaders = new Headers();

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//   };

//   fetch("http://localhost:8080/api/allStudent", requestOptions)
//       .then((response) => {
//         console.log(response.errorCode);
//         //console.log("res: " + JSON.stringify(response));
//         if (response.ok) {
//           return response.json();
//         }
//         if (response.status === 401) {
//           window.location.replace("/login");
//           // alert("oke nhap!");
//           return;
//         }
//         throw Error(response.status);

//         // navigate("/User");
//       })
//       .then((result) => {
//         //console.log("res: " + result);
//         console.log("data: " + JSON.stringify(result));
        
//         setMessages(result);
//         //console.log("data2: " + banners);
//       })
//       .catch((err) => {
//         //console.log("err", err);
//       });

// },[]);




  return (
  

    <Box className="body">
      <TabContext value={value}>
        <div className=" bg-info form-inline">
          <div className="col-md-3">
            <input
              className="form-control  mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>           
             <button
              className="btn btn-outline-success my-2 my-sm-0"
             
            >
              Test
            </button>
          </div>
          <div className="col-md-6">
            <Box
              className="bg-info"
              sx={{ width: "100%", typography: "body1" }}
            >
              <TabList
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label={          <span>
                    {'Active'}
                    <IconButton size="small" onClick={() => { console.log("fdfddfdsfdfs") }}>
                      <p style={{color : "red"}}>x</p>
                    </IconButton>
                  </span>} value="111">
                  
                </Tab>

                <Tab label="Item Seven" value="119" />
                <Tab label="Item Seven" value="120" />
                <Tab label="Item Seven" value="121" />
                {messages.map((msg) => (
                  <Tab label={<span>
                    {msg.orderCode + "-" + msg.priorityNumber}
                    <IconButton size="small" onClick={removeMessgae }>
                      <p style={{color : "red"}}>x</p>
                    </IconButton>
                  </span>}  value={msg.id} />
                ))}
              </TabList>
            </Box>
          </div>
        </div>
        <div className="container">
          <TabPanel value="112">
            Item One
            <button
              type="button"
              className="btn btn-primary"
              onClick={buttonClick}
            >
              Primary
            </button>
          </TabPanel>
          <TabPanel value="111">Item Two</TabPanel>
          <TabPanel value="116">Item Three</TabPanel>
          {messages.map((msg) => (
            <TabPanel value={msg.id}>
              <h1>ID: {msg.id}</h1>
              <h1>Mã đơn hàng: {msg.orderCode}</h1>
              <h1>STT: {msg.priorityNumber}</h1>
              <h1>Loại đơn hàng: {msg.orderType}</h1>
            </TabPanel>
          ))}
        </div>
        <SockJsClient
          url={SOCKET_URL}
          topics={["bartendingOrder64"]}
          onConnect={onConnected}
          onDisconnect={console.log("Disconnected!")}
          onMessage={(msg) => onMessageReceived(msg)}
          debug={false}
        />
        {/* <SockJsClient
          url={SOCKET_URL}
          topics={["notifyTopic"]}
          onConnect={onConnected}
          onDisconnect={console.log("Disconnected!")}
          onMessage={(msg) => onNotifyTopicChange(msg)}
          debug={false}
        /> */}
      </TabContext>
      <ToastContainer />
    </Box>
  );
}
