"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Discord.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-23":{"id":"e-23","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b639943-d5c8-3e48-026f-5050f52ed272","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b639943-d5c8-3e48-026f-5050f52ed272","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1519166892623},"e-24":{"id":"e-24","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b639943-d5c8-3e48-026f-5050f52ed272","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b639943-d5c8-3e48-026f-5050f52ed272","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1519166892627}},"actionLists":{"a-17":{"id":"a-17","title":"Hover BTN","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeIn","duration":300,"target":{"id":"7b639943-d5c8-3e48-026f-5050f52ed275"},"xValue":8,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1519166897713},"a-18":{"id":"a-18","title":"Hover Out BTN","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeIn","duration":300,"target":{"id":"7b639943-d5c8-3e48-026f-5050f52ed275"},"xValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1519166897713}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Discord({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_home_faq")}
      tag="section"
      id="join"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global", "discord")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "live-data", "discord-live-data")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-5", "landu")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="180"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a0da1326dd984af405f8c2_Leonardo_Diffusion_XL_Create_a_Bitcoin_the_bitcoin_color_shou_2-removebg-preview.png"
            />
            <_Builtin.Image
              loading="lazy"
              width="170"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a0da243c6fea394e6118f5_Leonardo_Diffusion_XL_Create_a_Ethereum_coin_the_ethereum_coi_0-removebg-preview.png"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "padding-section-large",
              "discord",
              "tab-padding"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "heading-13",
                "tabtext",
                "landtext",
                "mob"
              )}
              tag="h1"
            >
              {"JOIN US VIA"}
              <br />
              {"DISCORD"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "paragraph-7",
                "tab",
                "landscape",
                "mob"
              )}
            >
              {"Invest and manage all your crypto at one place."}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-6", "pad", "landu")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "btn-base",
            "tabbtn",
            "landbtn",
            "mobbtn"
          )}
          data-w-id="7b639943-d5c8-3e48-026f-5050f52ed272"
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "link-text", "tab-btn", "land-btn")}
            tag="div"
          >
            {"Join Discord"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "arrow", "tab", "land")}
            data-w-id="7b639943-d5c8-3e48-026f-5050f52ed275"
            tag="div"
          />
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-7")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "tabcrate", "landcrate", "mobcrate")}
          loading="lazy"
          width="380"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a611b1fd935ba9389f0f50_Leonardo_Diffusion_XL_Open_crate.png"
        />
        <_Builtin.Block className={_utils.cx(_styles, "div-block-8")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "footer-icon", "tab", "mob")}
            loading="lazy"
            height="auto"
            width="49"
            alt=""
            src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a01770f8375a7e2c1b7e7a_Group.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "footer-icon", "tab", "mob")}
            loading="lazy"
            width="40"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a0183279136c5481d6ed8e_ic_baseline-discord.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "footer-icon", "tab", "mob")}
            loading="lazy"
            width="40"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a4b7b10cdede4ab2e921a2_ri_facebook-fill.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "footer-icon", "tab", "mob")}
            loading="lazy"
            width="40"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a4b7bc264fa4767d3f0877_mingcute_youtube-fill.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-9", "mob", "tab")}
          tag="div"
        >
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "paragraph-8", "tab", "mob")}
          >
            {"Privacy"}
          </_Builtin.Paragraph>
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "paragraph-9", "tab", "mob")}
          >
            {"Terms of Use"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "tabcrate", "landcrate", "mobcrate")}
          loading="lazy"
          width="380"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a4471ad425d50b414c7dd0_Leonardo_Diffusion_XL_Money_bag_with_bunch_of_green_bitcoins_c_2-removebg-preview.png"
        />
      </_Builtin.Block>
    </_Component>
  );
}
