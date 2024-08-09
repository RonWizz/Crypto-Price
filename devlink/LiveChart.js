"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LiveChart.module.css";

export function LiveChart({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_home_contact")}
      tag="section"
      id="market"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "live-data")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-12")}
            tag="h1"
          >
            {"Market Cap & All Details"}
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed className={_utils.cx(_styles, "chart")} value="%3C!--%20TradingView%20Widget%20BEGIN%20--%3E%0A%3Cdiv%20class%3D%22tradingview-widget-container%22%3E%0A%20%20%3Cdiv%20class%3D%22tradingview-widget-container__widget%22%3E%3C%2Fdiv%3E%0A%20%20%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22https%3A%2F%2Fs3.tradingview.com%2Fexternal-embedding%2Fembed-widget-screener.js%22%20async%3E%0A%20%20%7B%0A%20%20%22width%22%3A%20%221000%22%2C%0A%20%20%22height%22%3A%20%22490%22%2C%0A%20%20%22defaultColumn%22%3A%20%22overview%22%2C%0A%20%20%22screener_type%22%3A%20%22crypto_mkt%22%2C%0A%20%20%22displayCurrency%22%3A%20%22USD%22%2C%0A%20%20%22colorTheme%22%3A%20%22dark%22%2C%0A%20%20%22locale%22%3A%20%22in%22%2C%0A%20%20%22isTransparent%22%3A%20false%0A%7D%0A%20%20%3C%2Fscript%3E%0A%3C%2Fdiv%3E%0A%0A%3C!--%20TradingView%20Widget%20END%20--%3E" />
    </_Component>
  );
}
