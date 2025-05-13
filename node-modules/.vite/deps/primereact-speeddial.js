"use client";
import {
  Button
} from "./chunk-EH67GMPJ.js";
import {
  Ripple
} from "./chunk-UVXLWAXJ.js";
import {
  IconBase
} from "./chunk-HKTI7H4R.js";
import "./chunk-6CJ7XW26.js";
import "./chunk-YSQLDN43.js";
import {
  ComponentBase,
  DomHandler,
  ESC_KEY_HANDLING_PRIORITIES,
  IconUtils,
  ObjectUtils,
  PrimeReactContext,
  UniqueComponentId,
  classNames,
  useDisplayOrder,
  useEventListener,
  useGlobalOnEscapeKey,
  useHandleStyle,
  useMergeProps,
  useMountEffect,
  useUpdateEffect
} from "./chunk-32Q7KVQB.js";
import "./chunk-KDCVS43I.js";
import {
  require_react
} from "./chunk-RLJ2RCJQ.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/primereact/speeddial/speeddial.esm.js
var React3 = __toESM(require_react());

// node_modules/primereact/icons/minus/index.esm.js
var React = __toESM(require_react());
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var MinusIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    d: "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",
    fill: "currentColor"
  }));
}));
MinusIcon.displayName = "MinusIcon";

// node_modules/primereact/icons/plus/index.esm.js
var React2 = __toESM(require_react());
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var PlusIcon = React2.memo(React2.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React2.createElement("svg", _extends2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React2.createElement("path", {
    d: "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",
    fill: "currentColor"
  }));
}));
PlusIcon.displayName = "PlusIcon";

// node_modules/primereact/speeddial/speeddial.esm.js
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var styles = "\n@layer primereact {\n    .p-speeddial {\n        position: absolute;\n        display: flex;\n        z-index: 1;\n    }\n\n    .p-speeddial-list {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: top 0s linear 0.2s;\n        pointer-events: none;\n    }\n\n    .p-speeddial-item {\n        transform: scale(0);\n        opacity: 0;\n        transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;\n        will-change: transform;\n    }\n\n    .p-speeddial-action {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        position: relative;\n        overflow: hidden;\n        text-decoration: none;\n    }\n\n    .p-speeddial-circle .p-speeddial-item,\n    .p-speeddial-semi-circle .p-speeddial-item,\n    .p-speeddial-quarter-circle .p-speeddial-item {\n        position: absolute;\n    }\n\n    .p-speeddial-rotate {\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        will-change: transform;\n    }\n\n    .p-speeddial-mask {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);\n    }\n\n    .p-speeddial-mask-visible {\n        pointer-events: none;\n        opacity: 1;\n        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n    }\n\n    .p-speeddial-opened .p-speeddial-list {\n        pointer-events: auto;\n    }\n\n    .p-speeddial-opened .p-speeddial-item {\n        transform: scale(1);\n        opacity: 1;\n    }\n\n    .p-speeddial-opened .p-speeddial-rotate {\n        transform: rotate(45deg);\n    }\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props, visible = _ref.visible;
    return classNames("p-speeddial p-component p-speeddial-".concat(props.type), _defineProperty(_defineProperty(_defineProperty({}, "p-speeddial-direction-".concat(props.direction), props.type !== "circle"), "p-speeddial-opened", visible), "p-disabled", props.disabled));
  },
  button: function button(_ref2) {
    var props = _ref2.props;
    return classNames("p-speeddial-button p-button-rounded", {
      "p-speeddial-rotate": props.rotateAnimation && !props.hideIcon
    });
  },
  mask: function mask(_ref3) {
    var visible = _ref3.visible;
    return classNames("p-speeddial-mask", {
      "p-speeddial-mask-visible": visible
    });
  },
  action: function action(_ref4) {
    var disabled = _ref4.disabled;
    return classNames("p-speeddial-action", {
      "p-disabled": disabled
    });
  },
  actionIcon: function actionIcon(_ref5) {
    var _icon = _ref5._icon;
    return classNames("p-speeddial-action-icon", _icon);
  },
  menu: "p-speeddial-list",
  menuitem: function menuitem(_ref6) {
    var active = _ref6.active;
    return classNames("p-speeddial-item", {
      "p-focus": active
    });
  }
};
var inlineStyles = {
  root: function root2(_ref7) {
    var props = _ref7.props;
    return {
      alignItems: props.direction === "up" || props.direction === "down" ? "center" : "",
      justifyContent: props.direction === "left" || props.direction === "right" ? "center" : "",
      flexDirection: props.direction === "up" ? "column-reverse" : props.direction === "down" ? "column" : props.direction === "left" ? "row-reverse" : props.direction === "right" ? "row" : null
    };
  },
  menu: function menu(_ref8) {
    var props = _ref8.props;
    return {
      flexDirection: props.direction === "up" ? "column-reverse" : props.direction === "down" ? "column" : props.direction === "left" ? "row-reverse" : props.direction === "right" ? "row" : null
    };
  }
};
var SpeedDialBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "SpeedDial",
    id: null,
    model: null,
    visible: false,
    style: null,
    className: null,
    direction: "up",
    transitionDelay: 30,
    type: "linear",
    radius: 0,
    mask: false,
    disabled: false,
    hideOnClickOutside: true,
    buttonStyle: null,
    buttonClassName: null,
    buttonTemplate: null,
    "aria-label": null,
    ariaLabelledby: null,
    maskStyle: null,
    maskClassName: null,
    showIcon: null,
    hideIcon: null,
    rotateAnimation: true,
    onVisibleChange: null,
    onClick: null,
    onShow: null,
    onHide: null,
    children: void 0
  },
  css: {
    classes,
    styles,
    inlineStyles
  }
});
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var SpeedDial = React3.memo(React3.forwardRef(function(inProps, ref) {
  var _React$useState = React3.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), visibleState = _React$useState2[0], setVisibleState = _React$useState2[1];
  var _React$useState3 = React3.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), idState = _React$useState4[0], setIdState = _React$useState4[1];
  var _React$useState5 = React3.useState(false), _React$useState6 = _slicedToArray(_React$useState5, 2), focused = _React$useState6[0], setFocused = _React$useState6[1];
  var _React$useState7 = React3.useState(-1), _React$useState8 = _slicedToArray(_React$useState7, 2), focusedOptionIndex = _React$useState8[0], setFocusedOptionIndex = _React$useState8[1];
  var isItemClicked = React3.useRef(false);
  var elementRef = React3.useRef(null);
  var listRef = React3.useRef(null);
  var mergeProps = useMergeProps();
  var context = React3.useContext(PrimeReactContext);
  var props = SpeedDialBase.getProps(inProps, context);
  var visible = props.onVisibleChange ? props.visible : visibleState;
  var speedDialDisplayOrder = useDisplayOrder("speed-dial", visible);
  var metaData = {
    props,
    state: {
      visible
    }
  };
  var _SpeedDialBase$setMet = SpeedDialBase.setMetaData(metaData), ptm = _SpeedDialBase$setMet.ptm, cx = _SpeedDialBase$setMet.cx, sx = _SpeedDialBase$setMet.sx, isUnstyled = _SpeedDialBase$setMet.isUnstyled;
  useHandleStyle(SpeedDialBase.css.styles, isUnstyled, {
    name: "speeddial"
  });
  useGlobalOnEscapeKey({
    callback: function callback() {
      hide();
    },
    when: visible && speedDialDisplayOrder,
    priority: [ESC_KEY_HANDLING_PRIORITIES.SPEED_DIAL, speedDialDisplayOrder]
  });
  var _useEventListener = useEventListener({
    type: "click",
    listener: function listener(event) {
      if (!isItemClicked.current && isOutsideClicked(event)) {
        hide();
      }
      isItemClicked.current = false;
    },
    when: visibleState
  }), _useEventListener2 = _slicedToArray(_useEventListener, 2), bindDocumentClickListener = _useEventListener2[0], unbindDocumentClickListener = _useEventListener2[1];
  var show = function show2() {
    props.onVisibleChange ? props.onVisibleChange(true) : setVisibleState(true);
    props.onShow && props.onShow();
  };
  var onFocus = function onFocus2() {
    setFocused(true);
  };
  var onBlur = function onBlur2() {
    setFocused(false);
    setFocusedOptionIndex(-1);
  };
  var hide = function hide2() {
    props.onVisibleChange ? props.onVisibleChange(false) : setVisibleState(false);
    props.onHide && props.onHide();
  };
  var _onClick = function onClick(e) {
    visible ? hide() : show();
    props.onClick && props.onClick(e);
    isItemClicked.current = true;
  };
  var onItemClick = function onItemClick2(e, item) {
    item.command && item.command({
      originalEvent: e,
      item
    });
    hide();
    isItemClicked.current = true;
    e.preventDefault();
  };
  var onKeyDown = function onKeyDown2(event) {
    switch (event.code) {
      case "ArrowDown":
        onArrowDown(event);
        break;
      case "ArrowUp":
        onArrowUp(event);
        break;
      case "ArrowLeft":
        onArrowLeft(event);
        break;
      case "ArrowRight":
        onArrowRight(event);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        onEnterKey(event);
        break;
      case "Escape":
        onEscapeKey();
        break;
      case "Home":
        onHomeKey(event);
        break;
      case "End":
        onEndKey(event);
        break;
    }
  };
  var onTogglerKeydown = function onTogglerKeydown2(event) {
    switch (event.code) {
      case "ArrowDown":
      case "ArrowLeft":
        onTogglerArrowDown(event);
        break;
      case "ArrowUp":
      case "ArrowRight":
        onTogglerArrowUp(event);
        break;
      case "Escape":
        onEscapeKey();
        break;
    }
  };
  var onTogglerArrowUp = function onTogglerArrowUp2(event) {
    setFocused(true);
    DomHandler.focus(listRef.current);
    show();
    navigatePrevItem(event);
    event.preventDefault();
  };
  var onTogglerArrowDown = function onTogglerArrowDown2(event) {
    setFocused(true);
    DomHandler.focus(listRef.current);
    show();
    navigateNextItem(event);
    event.preventDefault();
  };
  var onEnterKey = function onEnterKey2(event) {
    var items = DomHandler.find(elementRef.current, '[data-pc-section="menuitem"]');
    var itemIndex = _toConsumableArray(items).findIndex(function(item) {
      return item.id === focusedOptionIndex;
    });
    onItemClick(event, props.model[itemIndex]);
    onBlur();
    var buttonEl = DomHandler.findSingle(elementRef.current, "button");
    buttonEl && DomHandler.focus(buttonEl);
  };
  var onEscapeKey = function onEscapeKey2() {
    hide();
    var buttonEl = DomHandler.findSingle(elementRef.current, "button");
    buttonEl && DomHandler.focus(buttonEl);
  };
  var onArrowUp = function onArrowUp2(event) {
    var direction = props.direction;
    if (direction === "up") {
      navigateNextItem(event);
    } else if (direction === "down") {
      navigatePrevItem(event);
    } else {
      navigateNextItem(event);
    }
  };
  var onArrowDown = function onArrowDown2(event) {
    var direction = props.direction;
    if (direction === "up") {
      navigatePrevItem(event);
    } else if (direction === "down") {
      navigateNextItem(event);
    } else {
      navigatePrevItem(event);
    }
  };
  var onArrowLeft = function onArrowLeft2(event) {
    var direction = props.direction;
    var leftValidDirections = ["left", "up-right", "down-left"];
    var rightValidDirections = ["right", "up-left", "down-right"];
    if (leftValidDirections.includes(direction)) {
      navigateNextItem(event);
    } else if (rightValidDirections.includes(direction)) {
      navigatePrevItem(event);
    } else {
      navigatePrevItem(event);
    }
  };
  var onArrowRight = function onArrowRight2(event) {
    var direction = props.direction;
    var leftValidDirections = ["left", "up-right", "down-left"];
    var rightValidDirections = ["right", "up-left", "down-right"];
    if (leftValidDirections.includes(direction)) {
      navigatePrevItem(event);
    } else if (rightValidDirections.includes(direction)) {
      navigateNextItem(event);
    } else {
      navigateNextItem(event);
    }
  };
  var onEndKey = function onEndKey2(event) {
    event.preventDefault();
    setFocusedOptionIndex(-1);
    navigatePrevItem(event, -1);
  };
  var onHomeKey = function onHomeKey2(event) {
    event.preventDefault();
    setFocusedOptionIndex(-1);
    navigateNextItem(event, -1);
  };
  var navigateNextItem = function navigateNextItem2(event) {
    var index = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var optionIndex = findNextOptionIndex(index || focusedOptionIndex);
    changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  };
  var navigatePrevItem = function navigatePrevItem2(event) {
    var index = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var optionIndex = findPrevOptionIndex(index || focusedOptionIndex);
    changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  };
  var changeFocusedOptionIndex = function changeFocusedOptionIndex2(index) {
    var items = DomHandler.find(elementRef.current, '[data-pc-section="menuitem"]');
    var filteredItems = _toConsumableArray(items).filter(function(item) {
      return !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled");
    });
    if (filteredItems[index]) {
      setFocusedOptionIndex(filteredItems[index].getAttribute("id"));
    }
  };
  var findPrevOptionIndex = function findPrevOptionIndex2(index) {
    var items = DomHandler.find(elementRef.current, '[data-pc-section="menuitem"]');
    var filteredItems = _toConsumableArray(items).filter(function(item) {
      return !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled");
    });
    var newIndex = index === -1 ? filteredItems[filteredItems.length - 1].id : index;
    var matchedOptionIndex = filteredItems.findIndex(function(link) {
      return link.getAttribute("id") === newIndex;
    });
    matchedOptionIndex = index === -1 ? filteredItems.length - 1 : matchedOptionIndex - 1;
    return matchedOptionIndex;
  };
  var findNextOptionIndex = function findNextOptionIndex2(index) {
    var items = DomHandler.find(elementRef.current, '[data-pc-section="menuitem"]');
    var filteredItems = _toConsumableArray(items).filter(function(item) {
      return !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled");
    });
    var newIndex = index === -1 ? filteredItems[0].id : index;
    var matchedOptionIndex = filteredItems.findIndex(function(link) {
      return link.getAttribute("id") === newIndex;
    });
    matchedOptionIndex = index === -1 ? 0 : matchedOptionIndex + 1;
    return matchedOptionIndex;
  };
  var isOutsideClicked = function isOutsideClicked2(event) {
    return elementRef.current && !(elementRef.current.isSameNode(event.target) || elementRef.current.contains(event.target));
  };
  var isItemActive = function isItemActive2(id) {
    return focusedOptionIndex === id;
  };
  var focusedOptionId = function focusedOptionId2() {
    return focusedOptionIndex !== -1 ? focusedOptionIndex : null;
  };
  var calculateTransitionDelay = function calculateTransitionDelay2(index) {
    var length = props.model.length;
    return (visible ? index : length - index - 1) * props.transitionDelay;
  };
  var calculatePointStyle = function calculatePointStyle2(index) {
    var type = props.type;
    if (type !== "linear") {
      var length = props.model.length;
      var radius = props.radius || length * 20;
      if (type === "circle") {
        var step = 2 * Math.PI / length;
        return {
          left: "calc(".concat(radius * Math.cos(step * index), "px + var(--item-diff-x, 0px))"),
          top: "calc(".concat(radius * Math.sin(step * index), "px + var(--item-diff-y, 0px))")
        };
      } else if (type === "semi-circle") {
        var direction = props.direction;
        var _step = Math.PI / (length - 1);
        var x = "calc(".concat(radius * Math.cos(_step * index), "px + var(--item-diff-x, 0px))");
        var y = "calc(".concat(radius * Math.sin(_step * index), "px + var(--item-diff-y, 0px))");
        if (direction === "up") {
          return {
            left: x,
            bottom: y
          };
        } else if (direction === "down") {
          return {
            left: x,
            top: y
          };
        } else if (direction === "left") {
          return {
            right: y,
            top: x
          };
        } else if (direction === "right") {
          return {
            left: y,
            top: x
          };
        }
      } else if (type === "quarter-circle") {
        var _direction = props.direction;
        var _step2 = Math.PI / (2 * (length - 1));
        var _x = "calc(".concat(radius * Math.cos(_step2 * index), "px + var(--item-diff-x, 0px))");
        var _y = "calc(".concat(radius * Math.sin(_step2 * index), "px + var(--item-diff-y, 0px))");
        if (_direction === "up-left") {
          return {
            right: _x,
            bottom: _y
          };
        } else if (_direction === "up-right") {
          return {
            left: _x,
            bottom: _y
          };
        } else if (_direction === "down-left") {
          return {
            right: _y,
            top: _x
          };
        } else if (_direction === "down-right") {
          return {
            left: _y,
            top: _x
          };
        }
      }
    }
    return {};
  };
  var getItemStyle = function getItemStyle2(index) {
    var transitionDelay = calculateTransitionDelay(index);
    var pointStyle = calculatePointStyle(index);
    return _objectSpread({
      transitionDelay: "".concat(transitionDelay, "ms")
    }, pointStyle);
  };
  useMountEffect(function() {
    if (props.type !== "linear") {
      var _button = DomHandler.findSingle(elementRef.current, ".p-speeddial-button");
      var firstItem = DomHandler.findSingle(listRef.current, ".p-speeddial-item");
      if (_button && firstItem) {
        var wDiff = Math.abs(_button.offsetWidth - firstItem.offsetWidth);
        var hDiff = Math.abs(_button.offsetHeight - firstItem.offsetHeight);
        listRef.current.style.setProperty("--item-diff-x", "".concat(wDiff / 2, "px"));
        listRef.current.style.setProperty("--item-diff-y", "".concat(hDiff / 2, "px"));
      }
    }
  });
  useUpdateEffect(function() {
    if (visibleState) {
      props.hideOnClickOutside && bindDocumentClickListener();
    }
    return function() {
      props.hideOnClickOutside && unbindDocumentClickListener();
    };
  }, [visibleState]);
  React3.useImperativeHandle(ref, function() {
    return {
      props,
      show,
      hide,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var createItem = function createItem2(item, index) {
    if (item.visible === false) {
      return null;
    }
    var disabled = item.disabled, _icon = item.icon, label = item.label, template = item.template, url = item.url, target = item.target, _itemClassName = item.className, _itemStyle = item.style;
    var contentClassName = classNames("p-speeddial-action", {
      "p-disabled": disabled
    });
    var iconClassName = classNames("p-speeddial-action-icon", _icon);
    var actionIconProps = mergeProps({
      className: cx("actionIcon")
    }, ptm("actionIcon"));
    var actionProps = mergeProps({
      href: url || "#",
      role: "menuitem",
      className: classNames(_itemClassName, cx("action", {
        disabled
      })),
      "aria-label": item.label,
      style: _itemStyle,
      target,
      tabIndex: "-1",
      "data-pr-tooltip": label,
      onClick: function onClick(e) {
        return onItemClick(e, item);
      }
    }, ptm("action"));
    var icon = IconUtils.getJSXIcon(_icon, _objectSpread({}, actionIconProps), {
      props
    });
    var content = React3.createElement("a", actionProps, icon, React3.createElement(Ripple, null));
    if (template) {
      var defaultContentOptions = {
        onClick: function onClick(e) {
          return onItemClick(e, item);
        },
        className: contentClassName,
        iconClassName,
        element: content,
        props,
        visible
      };
      content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
    }
    var menuItemProps = mergeProps({
      id: "".concat(idState, "_").concat(index),
      className: cx("menuitem", {
        active: isItemActive("".concat(idState, "_").concat(index))
      }),
      style: getItemStyle(index),
      role: "menuitem"
    }, ptm("menuitem"));
    return React3.createElement("li", _extends3({}, menuItemProps, {
      key: "".concat(idState, "_").concat(index)
    }), content);
  };
  var createItems = function createItems2() {
    return props.model ? props.model.map(createItem) : null;
  };
  var createList = function createList2() {
    var items = createItems();
    var menuProps = mergeProps({
      ref: listRef,
      className: cx("menu"),
      style: sx("menu"),
      role: "menu",
      tabIndex: "-1",
      onFocus,
      onKeyDown,
      onBlur,
      "aria-activedescendant": focused ? focusedOptionId() : void 0
    }, ptm("menu"));
    return React3.createElement("ul", menuProps, items);
  };
  var createButton = function createButton2() {
    var showIconVisible = !visible && !!props.showIcon || !props.hideIcon;
    var hideIconVisible = visible && !!props.hideIcon;
    var className = classNames("p-speeddial-button p-button-rounded", {
      "p-speeddial-rotate": props.rotateAnimation && !props.hideIcon
    }, props.buttonClassName);
    var iconClassName = classNames(_defineProperty(_defineProperty({}, "".concat(props.showIcon), !visible && !!props.showIcon || !props.hideIcon), "".concat(props.hideIcon), visible && !!props.hideIcon));
    var icon = showIconVisible ? props.showIcon || React3.createElement(PlusIcon, null) : hideIconVisible ? props.hideIcon || React3.createElement(MinusIcon, null) : null;
    var toggleIcon = IconUtils.getJSXIcon(icon, void 0, {
      props,
      visible
    });
    var buttonProps = mergeProps({
      type: "button",
      style: props.buttonStyle,
      className: classNames(props.buttonClassName, cx("button")),
      icon: toggleIcon,
      onClick: function onClick(e) {
        return _onClick(e);
      },
      disabled: props.disabled,
      onKeyDown: onTogglerKeydown,
      "aria-label": props["aria-label"],
      "aria-expanded": visible,
      "aria-haspopup": true,
      "aria-controls": getAriaControls,
      "aria-labelledby": props.ariaLabelledby,
      pt: ptm("button"),
      unstyled: props.unstyled,
      __parentMetadata: {
        parent: metaData
      }
    });
    var content = React3.createElement(Button, buttonProps);
    if (props.buttonTemplate) {
      var defaultContentOptions = {
        onClick: _onClick,
        className,
        iconClassName,
        element: content,
        props,
        visible
      };
      return ObjectUtils.getJSXElement(props.buttonTemplate, defaultContentOptions);
    }
    return content;
  };
  var getAriaControls = function getAriaControls2() {
    var ariaControls = "";
    for (var index = 0; index < props.model.length; index++) {
      ariaControls = ariaControls + "".concat(idState, "_").concat(index, " ");
    }
    return ariaControls.trim();
  };
  var createMask = function createMask2() {
    if (props.mask) {
      var maskProps = mergeProps({
        className: classNames(props.maskClassName, cx("mask", {
          visible
        })),
        style: props.maskStyle
      }, ptm("mask"));
      return React3.createElement("div", maskProps);
    }
    return null;
  };
  React3.useEffect(function() {
    setIdState(props.id || UniqueComponentId());
  }, [props.id]);
  var button2 = createButton();
  var list = createList();
  var mask2 = createMask();
  var rootProps = mergeProps({
    className: classNames(props.className, cx("root", {
      visible
    })),
    style: _objectSpread(_objectSpread({}, props.style), sx("root")),
    id: idState
  }, SpeedDialBase.getOtherProps(props), ptm("root"));
  return React3.createElement(React3.Fragment, null, React3.createElement("div", _extends3({
    ref: elementRef
  }, rootProps), button2, list), mask2);
}));
SpeedDial.displayName = "SpeedDial";
export {
  SpeedDial
};
//# sourceMappingURL=primereact_speeddial.js.map
