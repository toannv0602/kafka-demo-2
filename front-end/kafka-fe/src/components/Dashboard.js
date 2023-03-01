import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import SockJsClient from "react-stomp";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import IconButton from '@mui/material/IconButton';
import Close from '@mui/material/IconButton';

export default function Dashboard() {
  const [value, setValue] = useState("");

  const SOCKET_URL = "http://localhost:8080/hola/";

  let onConnected = () => {
    console.log("Connected!!");
  };

  const [messages, setMessages] = useState([]);

  let onMessageReceived = (msg) => {
    console.log("New Message Received!!", msg);
    setMessages(messages.concat(msg));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // interface TabPanelProps {
  //   children?: React.ReactNode;
  //   index: number;
  //   value: number;
  // }

  function buttonClick(event) {
    console.log("List msg:" + JSON.stringify(messages));
  }

  // function TabPanel(props: TabPanelProps) {
  //   const { children, value, index, ...other } = props;

  //   return (
  //     <div
  //       role="tabpanel"
  //       hidden={value !== index}
  //       id={`simple-tabpanel-${index}`}
  //       aria-labelledby={`simple-tab-${index}`}
  //       {...other}
  //     >
  //       {value === index && (
  //         <Box sx={{ p: 3 }}>
  //           <Typography>{children}</Typography>
  //         </Box>
  //       )}
  //     </div>
  //   );
  // }

  const removeMessgae = () => {
    const arr = messages.filter((item) => item.id !== value);
    setMessages(arr);
};

  return (
    // <div className="body">
    //   <Box
    //     className="navbar navbar-light bg-info"
    //     sx={{ width: "100%", typography: "body1" }}
    //   >
    //     <div className="form-inline">
    //       <div className="col-md-3">
    //         <input
    //           className="form-control mr-sm-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button
    //           className="btn btn-outline-success my-2 my-sm-0"
    //           type="submit"
    //         >
    //           Search
    //         </button>
    //       </div>
    //       <div className="col-md-6 mr-sm-8">
    //         <TabContext
    //           value={value}

    //           aria-label="scrollable auto tabs example"
    //         >
    //           <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
    //             <Tabs onChange={handleChange} scrollButtons aria-label="lab API tabs example">
    //               <Tab label="Item One" value="112" />
    //               <Tab label="Item Two" value="113" />
    //               <Tab label="Item Three" value="114" />
    //               <Tab label="Item Four" value="115" />
    //               <Tab label="Item Five" value="116" />
    //               <Tab label="Item Six" value="117" />
    //               <Tab label="Item Seven" value="118" />
    //               <Tab label="Item Seven" value="111" />
    //               <Tab label="Item Seven" value="111" />
    //               <Tab label="Item Seven" value="111" />
    //               <Tab label="Item Seven" value="111" />
    //               <Tab label="Item Seven" value="111" />
    //               <Tab label="Item Seven" value="111" />
    //               <Tab label="Item Seven" value="111" />
    //               <Tab label="Item Seven" value="111" />
    //               <Tab label="Item Seven" value="111" />
    //             </Tabs>
    //           </Box>
    //           <div>
    //             <TabPanel value="222">Item One</TabPanel>
    //             <TabPanel value="111">Item Two</TabPanel>
    //             <TabPanel value="3">Item Three</TabPanel>
    //           </div>
    //         </TabContext>
    //       </div>
    // <SockJsClient
    //   url={SOCKET_URL}
    //   topics={["/topic/group"]}
    //   onConnect={onConnected}
    //   onDisconnect={console.log("Disconnected!")}
    //   onMessage={(msg) => onMessageReceived(msg)}
    //   debug={false}
    // />
    //     </div>
    //   </Box>
    //   <div className="container">
    //     {/* <TabPanel value="111">
    //       Item One
    //       <button
    //         type="button"
    //         className="btn btn-primary"
    //         onClick={buttonClick}
    //       >
    //         Primary
    //       </button>
    //     </TabPanel> */}
    //   </div>
    // </div>

    //   <Box sx={{ width: '100%', typography: 'body1' }}>
    //   <TabContext value={value}>
    //     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    //       <TabList onChange={handleChange} aria-label="lab API tabs example">
    //         <Tab label="Item One" value="111" />
    //         <Tab label="Item Two" value="222" />
    //         <Tab label="Item Three" value="3" />
    //       </TabList>
    //     </Box>
    //     <TabPanel value="222">Item One</TabPanel>
    //     <TabPanel value="111">Item Two</TabPanel>
    //     <TabPanel value="3">Item Three</TabPanel>
    //   </TabContext>
    // </Box>

    

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
                <Tab label="Item Two" value="112" />
                <Tab label="Item Three" value="113" />
                <Tab label="Item Four" value="114" />
                <Tab label="Item Five" value="115" />
                <Tab label="Item Six" value="116" />
                <Tab label="Item Seven" value="117" />
                <Tab label="Item Seven" value="118" />
                <Tab label="Item Seven" value="119" />
                <Tab label="Item Seven" value="120" />
                <Tab label="Item Seven" value="121" />
                {messages.map((msg) => (
                  <Tab label={<span>
                    {msg.id + "-" + msg.name}
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
              <h1>Name: {msg.name}</h1>
              <h1>Address: {msg.address}</h1>
            </TabPanel>
          ))}
        </div>
        <SockJsClient
          url={SOCKET_URL}
          topics={["topic"]}
          onConnect={onConnected}
          onDisconnect={console.log("Disconnected!")}
          onMessage={(msg) => onMessageReceived(msg)}
          debug={false}
        />
      </TabContext>
    </Box>
  );
}
