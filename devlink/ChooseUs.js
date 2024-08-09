"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ChooseUs.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c84e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c84e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705295829820},"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c84e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c84e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705295829820},"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c856","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c856","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705305666150},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c856","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c856","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705305666150},"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c85e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c85e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705306374448},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c85e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c85e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705306374449},"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c869","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c869","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705306560696},"e-32":{"id":"e-32","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c869","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c869","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705306560697},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c871","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c871","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705306625483},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c871","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c871","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705306625483},"e-37":{"id":"e-37","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c84e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c84e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1705388949081},"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c856","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c856","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":22,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1705477187525},"e-41":{"id":"e-41","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c85e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c85e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":24,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1705477386387},"e-43":{"id":"e-43","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c869","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c869","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1705477522093},"e-45":{"id":"e-45","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c871","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c871","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":22,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1705477806277},"e-47":{"id":"e-47","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e7769c98-27e8-b754-eac1-11bad6b5c879","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e7769c98-27e8-b754-eac1-11bad6b5c879","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":24,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1705478458226}},"actionLists":{"a-31":{"id":"a-31","title":"1st","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c84e"},"xValue":-80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c84e"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-31-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c84e"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-31-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c84e"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705388957319},"a-20":{"id":"a-20","title":"Div1","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-4.interactions","selectorGuids":["8951d8ce-e85f-9d5c-219d-95995d6044a5","024e1d71-88d4-f71b-795a-13cf703466c2"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1705296106120},"a-21":{"id":"a-21","title":"div2","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-5.interactions","selectorGuids":["e42941b9-4ff0-6c19-55ab-795da3770c7e","b1f2593c-957f-f24d-fa8c-a8dc5f16e2d4"]},"globalSwatchId":"","rValue":36,"bValue":75,"gValue":119,"aValue":0}}]},{"actionItems":[{"id":"a-21-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-5.interactions","selectorGuids":["e42941b9-4ff0-6c19-55ab-795da3770c7e","b1f2593c-957f-f24d-fa8c-a8dc5f16e2d4"]},"globalSwatchId":"","rValue":55,"bValue":165,"gValue":211,"aValue":0.77}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705305675172},"a-22":{"id":"a-22","title":"div2","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-5.interactions","selectorGuids":["e42941b9-4ff0-6c19-55ab-795da3770c7e","b1f2593c-957f-f24d-fa8c-a8dc5f16e2d4"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1705305861303},"a-23":{"id":"a-23","title":"Div3","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-6","selectorGuids":["b548919f-7e39-fca3-5814-cf2da5cf3b0b"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]},{"actionItems":[{"id":"a-23-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-6","selectorGuids":["b548919f-7e39-fca3-5814-cf2da5cf3b0b"]},"globalSwatchId":"","rValue":55,"bValue":165,"gValue":211,"aValue":0.77}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705306379020},"a-24":{"id":"a-24","title":"Div3","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-6","selectorGuids":["b548919f-7e39-fca3-5814-cf2da5cf3b0b"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1705306437295},"a-25":{"id":"a-25","title":"Div4","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-7","selectorGuids":["9bc1ca18-716f-f205-4224-68f7b43b2a5c"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]},{"actionItems":[{"id":"a-25-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-7","selectorGuids":["9bc1ca18-716f-f205-4224-68f7b43b2a5c"]},"globalSwatchId":"","rValue":55,"bValue":165,"gValue":211,"aValue":0.77}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705306565776},"a-26":{"id":"a-26","title":"Div4","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-7","selectorGuids":["9bc1ca18-716f-f205-4224-68f7b43b2a5c"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1705306604390},"a-27":{"id":"a-27","title":"Div5","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-8","selectorGuids":["bba775c6-22c0-1896-eee4-ddaa5477811c"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-8","selectorGuids":["bba775c6-22c0-1896-eee4-ddaa5477811c"]},"globalSwatchId":"","rValue":55,"bValue":165,"gValue":211,"aValue":0.77}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705306628663},"a-28":{"id":"a-28","title":"Div5","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image-8","selectorGuids":["bba775c6-22c0-1896-eee4-ddaa5477811c"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1705306662643},"a-32":{"id":"a-32","title":"2nd","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c856"},"xValue":-80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-32-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c856"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-32-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c856"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-32-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c856"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705477216367},"a-33":{"id":"a-33","title":"3rd","actionItemGroups":[{"actionItems":[{"id":"a-33-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c85e"},"xValue":-80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-33-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c85e"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-33-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c85e"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-33-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c85e"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705477407631},"a-34":{"id":"a-34","title":"div1","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c869"},"xValue":80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-34-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c869"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-34-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c869"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-34-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c869"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705477536107},"a-35":{"id":"a-35","title":"div5","actionItemGroups":[{"actionItems":[{"id":"a-35-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c871"},"xValue":80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-35-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c871"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-35-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c871"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-35-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c871"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705477821659},"a-38":{"id":"a-38","title":"Div6","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c879"},"xValue":80,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-38-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c879"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-38-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c879"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-38-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":true,"id":"e7769c98-27e8-b754-eac1-11bad6b5c879"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1705478468543}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ChooseUs({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_home_faq")}
      tag="section"
      id="choose"
    >
      <_Builtin.Block className={_utils.cx(_styles, "div-block-4")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "heading-10",
            "tabtext",
            "landu",
            "mob"
          )}
          tag="h1"
        >
          {"WHY CHOOSE US"}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "choose",
          "landscape-pad"
        )}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "first-half")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block")}
            data-w-id="e7769c98-27e8-b754-eac1-11bad6b5c84e"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-2")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-4", "interactions", "tab")}
                loading="lazy"
                height="auto"
                width="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a14933de81b401ac314ba0_mingcute_wallet-fill.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-3", "tab")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "heading-4",
                  "spacing",
                  "textcolor",
                  "tab-text1"
                )}
                tag="h1"
              >
                {"CONNECT YOUR WALLET"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
                {"Use Trust Wallet, Metamask or to connect to the app."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block")}
            data-w-id="e7769c98-27e8-b754-eac1-11bad6b5c856"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-2")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-5", "interactions")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a14a90259280809936db98_mdi_pencil.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-3")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "heading-5",
                  "spacing",
                  "textcolor",
                  "tab-text1"
                )}
                tag="h1"
              >
                {"SELECT YOUR QUANTITY"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-3")}>
                {"Upload your crypto and set a title, description and price."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block")}
            data-w-id="e7769c98-27e8-b754-eac1-11bad6b5c85e"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-2")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-6", "tab")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a14abad6a64e79559d5086_icon-park-outline_transaction.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-3")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "heading-6",
                  "spacing",
                  "tab-text1"
                )}
                tag="h1"
              >
                {"CONFIRM TRANSACTION"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-6")}>
                {"Earn by selling your crypto on our marketplace."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "landscape")} tag="div">
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "image-10",
              "home_features-list_tabs-menu",
              "landimg"
            )}
            loading="lazy"
            height="auto"
            width="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a13fa261e4e39a61324db5_choose-main.39852b7511b28d44406f%20(1).png"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "sceond-half")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block")}
            data-w-id="e7769c98-27e8-b754-eac1-11bad6b5c869"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-2")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-7")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a14ac6dfbfd2af6bc9677a_ri_nft-fill.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-3")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "heading-7",
                  "spacing",
                  "textcolor",
                  "tab-text1"
                )}
                tag="h1"
              >
                {"RECEIVE YOUR OWN NFTS"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-2")}>
                {"Invest all your crypto at one place on one platform."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block")}
            data-w-id="e7769c98-27e8-b754-eac1-11bad6b5c871"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-2")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-8")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a14ad29f33dc0d5a76143b_mdi_sack.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-3")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "heading-8",
                  "spacing",
                  "textcolor",
                  "tab-text1"
                )}
                tag="h1"
              >
                {"TAKE A MARKET TO SELL"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-4")}>
                {
                  "Discover, collect the right crypto collections to buy or sell."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block")}
            data-w-id="e7769c98-27e8-b754-eac1-11bad6b5c879"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-2")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-9")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/6547e8994b0754ad48abf7b7/65a14adc779b3ead68a8d87d_bi_collection-fill.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-3")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "heading-9",
                  "spacing",
                  "textcolor",
                  "tab-text1"
                )}
                tag="h1"
              >
                {"DRIVE YOUR COLLECTION"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-5")}>
                {"We make it easy to Discover, Invest and manage."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
