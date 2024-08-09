"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";
import {Link} from "react-scroll";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5069e43d-d005-6e78-53bf-40a7ccfa4550","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5069e43d-d005-6e78-53bf-40a7ccfa4550","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-590"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5069e43d-d005-6e78-53bf-40a7ccfa4550","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5069e43d-d005-6e78-53bf-40a7ccfa4550","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075}},"actionLists":{"a":{"id":"a","title":"Navbar 1 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["e720a99d-de97-dcba-8d3d-e8a200389601"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["e720a99d-de97-dcba-8d3d-e8a2003895fc"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["e720a99d-de97-dcba-8d3d-e8a2003895f2"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["e720a99d-de97-dcba-8d3d-e8a2003895f2"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["e720a99d-de97-dcba-8d3d-e8a2003895fc"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-2":{"id":"a-2","title":"Navbar 1 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["e720a99d-de97-dcba-8d3d-e8a2003895fc"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["e720a99d-de97-dcba-8d3d-e8a2003895f2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["e720a99d-de97-dcba-8d3d-e8a2003895fc"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["e720a99d-de97-dcba-8d3d-e8a2003895f2"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["e720a99d-de97-dcba-8d3d-e8a200389601"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar1_component")}
      data-w-id="5069e43d-d005-6e78-53bf-40a7ccfa4550"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        collapse: "medium",
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar1_container", "tab")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "navbar1_logo-link")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "navbar1_logo", "tab", "land", "mob")}
            loading="lazy"
            height="auto"
            width="300"
            alt=""
            src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a62986a3e1b765082c0afd_Frame%2040.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(
            _styles,
            "navbar1_menu",
            "is-page-height-tablet"
          )}
          tag="nav"
          role="navigation"
        >
          <Link
            className={_utils.cx(_styles, "navbar1_link", "mobfont")}
            to="market"
            smooth={true}
            offset={50}
            duration={500}
            options={{
              href: "#",
            }}
          >
            {"Market"}
          </Link>
          <Link
            className={_utils.cx(_styles, "navbar1_link", "mobfont")}
            to="choose"
            smooth={true}
            offset={50}
            duration={500}
            options={{
              href: "#",
            }}
          >
            {"Choose Us"}
          </Link>
          <Link
            className={_utils.cx(_styles, "navbar1_link", "mobfont")}
            to="join"
            smooth={true}
            offset={50}
            duration={500}
            options={{
              href: "#",
            }}
          >
            {"Join Us"}
          </Link>
        </_Builtin.NavbarMenu>
        <_Builtin.Block className={_utils.cx(_styles, "tabicon")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "image")}
            loading="lazy"
            width="30"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a01770f8375a7e2c1b7e7a_Group.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "image-11")}
            loading="lazy"
            height="auto"
            width="30"
            alt=""
            src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a0183279136c5481d6ed8e_ic_baseline-discord.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
