"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LivePrice.module.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export function LivePrice({ as: _Component = _Builtin.Block }) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,dogecoin&vs_currencies=usd'
        );
        setPrices(response.data);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
    const intervalId = setInterval(fetchPrices, 10000); // Fetch prices every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section_home_features-list",
        "landscapepad"
      )}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "live-data")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-11")}
            tag="h1"
          >
            {"Live Coin prices"}
            
          </_Builtin.Heading>
          <div className={_utils.cx(_styles, "container")}>
              <div className={_utils.cx(_styles, "prices")}>
                {Object.keys(prices).length > 0 ? (
                  <>
                  <div className={_utils.cx(_styles, "coin")}>
                    <img className={_utils.cx(_styles, "image")} src="/images/bitcoin.svg" alt="" />
                    <h2>Bitcoin</h2>
                    <p>${prices.bitcoin.usd}</p>
                  </div>
                  <div className={_utils.cx(_styles, "coin")}>
                    <img className={_utils.cx(_styles, "image")} src="/images/ethereum.svg" alt="" />
                    <h2>Ethereum</h2>
                    <p>${prices.ethereum.usd}</p>
                  </div>
                  <div className={_utils.cx(_styles, "coin")}>
                  <img className={_utils.cx(_styles, "image")} src="/images/litecoin.svg" alt="" />
                    <h2>Litecoin</h2>
                    <p>${prices.litecoin.usd}</p>
                  </div>
                  <div className={_utils.cx(_styles, "coin")}>
                  <img className={_utils.cx(_styles, "image")} src="/images/dogecoin.svg" alt="" />
                    <h2>Dogecoin</h2>
                    <p>${prices.dogecoin.usd}</p>
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
