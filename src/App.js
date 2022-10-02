import Coin from './components/Coin'
import React from "react";
import Avalanche from "./icons/Avalanche";
import Binance from "./icons/Binance";
import UsdCoin from "./icons/UsdCoin";
import Balance from "./components/Balance"
import './App.css';

function App() {
  
  return (


    <div >
    <table>
    <tbody>
      <tr>

      </tr>
      <tr class='row-border'>
          <td></td>
      </tr>
      <tr class='row-border'>
        <td style={{fontSize: '10px'}}>Last Updated: 1 Min ago</td>
      </tr>
      <tr class='row-border'>
      <td >
          <Avalanche/>
      </td>
        <Coin coin = 'AVAX' coinName='Avalanche Coin'/>
      </tr>

      <tr class='row-border'>
        <td >
          <Avalanche/>
        </td>
        <Coin coin = 'FTM' coinName='Fantom'/>
      </tr>

      <tr class='row-border'>
        <td >
          <Binance/>
        </td>
        <Coin coin = 'BNB' coinName='Binance Coin'/>
      </tr>


      <tr class='row-border'>
        <td >
          <UsdCoin/>
        </td>
        <Coin coin = 'USDC' coinName='USD Coin(PoS)'/>
        
      </tr>

      </tbody>

      

    
    </table>
 </div>

    
    
  );
}

export default App;
