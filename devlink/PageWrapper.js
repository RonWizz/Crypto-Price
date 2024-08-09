"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Hero } from "./Hero";
import { LivePrice } from "./LivePrice";
import { LiveChart } from "./LiveChart";
import { ChooseUs } from "./ChooseUs";
import { Discord } from "./Discord";
import * as _utils from "./utils";
import _styles from "./PageWrapper.module.css";

export function PageWrapper({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper", "tab")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="main">
        <Hero />
        <LivePrice />
        <LiveChart id="section1"/>
        <ChooseUs id="section2"/>
        <Discord id="section3"/>
      </_Builtin.Block>
    </_Component>
  );
}
