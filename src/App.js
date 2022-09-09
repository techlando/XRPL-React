
import React from 'react'
import './App.css';
// import xrpl from "xrpl";


const xrpl = require("xrpl")
async function main() {
  const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233")
  await client.connect()

  const response = await client.request({
    "command": "account_info",
    "account": "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe",
    "ledger_index": "validated"
  })
  console.log(response)

  client.disconnect()
}
main()
function App() {
  return (
   <h1>my first xrpl App</h1>
  );
}

export default App;
