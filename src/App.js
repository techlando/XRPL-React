
import {React, useState } from 'react'
import './App.css';
// import xrpl from "xrpl";


const xrpl = require("xrpl")


function App() {
  const [xrpData, setxrpData] = useState(0)

  async function main() {
    const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233")
    await client.connect()
  
    const response = await client.request({
      "command": "account_info",
      "account": "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe",
      "ledger_index": "validated"
    })
    console.log(response)
    setxrpData(response.result.account_data.Balance)
  
    client.disconnect()
  }
  main()


  return (
    <div>
   <h1>my first xrpl App</h1>
   <p>Balance: {xrpData}</p>
   </div>
  );
}

export default App;
