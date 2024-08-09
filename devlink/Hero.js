"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705048156211},"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705048496770}},"actionLists":{"a-11":{"id":"a-11","title":"Image 1 float","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"82e1debb-9424-1656-50b1-4af4095b290b"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-11-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1300,"target":{"id":"82e1debb-9424-1656-50b1-4af4095b290b"},"yValue":65,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-11-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1200,"target":{"id":"82e1debb-9424-1656-50b1-4af4095b290b"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705048167193},"a-12":{"id":"a-12","title":"Image 2 float","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"82e1debb-9424-1656-50b1-4af4095b290c"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-12-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1300,"target":{"id":"82e1debb-9424-1656-50b1-4af4095b290c"},"yValue":65,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-12-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":1200,"target":{"id":"82e1debb-9424-1656-50b1-4af4095b290c"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705048167193}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Hero({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_home_hero-header")}
      tag="header"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "live-data")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "home_hero-header_component",
                "tab-padding",
                "mob-pad"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "home_hero-header_image-wrapper",
                  "landu"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-2", "tab")}
                  data-w-id="82e1debb-9424-1656-50b1-4af4095b290b"
                  loading="lazy"
                  width="220"
                  height="180"
                  alt=""
                  src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a0da1326dd984af405f8c2_Leonardo_Diffusion_XL_Create_a_Bitcoin_the_bitcoin_color_shou_2-removebg-preview.png"
                />
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-3", "tab")}
                  data-w-id="82e1debb-9424-1656-50b1-4af4095b290c"
                  loading="lazy"
                  width="220"
                  height="170"
                  alt=""
                  src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a0da243c6fea394e6118f5_Leonardo_Diffusion_XL_Create_a_Ethereum_coin_the_ethereum_coi_0-removebg-preview.png"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "margin-bottom",
                  "margin-xxlarge"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "home_hero-header_content-left"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "heading-3",
                      "tabtext",
                      "landu",
                      "mob"
                    )}
                    tag="h1"
                  >
                    {"TRACK AND TRADE"}
                    <br />
                    {"CRYPTO CURRENCIES"}
                  </_Builtin.Heading>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
