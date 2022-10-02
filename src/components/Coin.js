import { queryByDisplayValue } from "@testing-library/react";
import React, { Fragment } from "react";
import Avalanche from "../icons/Avalanche";
import Binance from "../icons/Binance";
import UsdCoin from "../icons/UsdCoin";
import Balance from "./Balance"
import styles from "./Coin.css";


class Coin extends React.Component {
    render() {
      let coinName = null;
      let component = null;
   

      return (
    
          <Fragment>
            <td>
              <table><tbody><tr><th>{this.props.coinName}</th></tr><tr><td>{this.props.coin}</td></tr></tbody></table>
            </td>
            <td>
              <table><tbody><tr><th><Balance coin={this.props.coin}/></th></tr><tr><td>0.9936</td></tr></tbody></table>
            </td>
          </Fragment>

      );
    }
  }

  export default Coin;