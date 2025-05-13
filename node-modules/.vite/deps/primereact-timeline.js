"use client";
import {
  ComponentBase,
  ObjectUtils,
  PrimeReactContext,
  classNames,
  useHandleStyle,
  useMergeProps
} from "./chunk-32Q7KVQB.js";
import {
  require_react
} from "./chunk-RLJ2RCJQ.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/primereact/timeline/timeline.esm.js
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
var TimelineBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Timeline",
    align: "left",
    className: null,
    content: null,
    dataKey: null,
    layout: "vertical",
    marker: null,
    opposite: null,
    value: null,
    children: void 0
  },
  css: {
    classes: {
      marker: "p-timeline-event-marker",
      connector: "p-timeline-event-connector",
      event: "p-timeline-event",
      opposite: "p-timeline-event-opposite",
      separator: "p-timeline-event-separator",
      content: "p-timeline-event-content",
      root: function root(_ref) {
        var props = _ref.props;
        return classNames("p-timeline p-component", _defineProperty(_defineProperty({}, "p-timeline-".concat(props.align), true), "p-timeline-".concat(props.layout), true), props.className);
      }
    },
    styles: "\n        @layer primereact {\n            .p-timeline {\n                display: flex;\n                flex-grow: 1;\n                flex-direction: column;\n            }\n        \n            .p-timeline-left .p-timeline-event-opposite {\n                text-align: right;\n            }\n        \n            .p-timeline-left .p-timeline-event-content {\n                text-align: left;\n            }\n        \n            .p-timeline-right .p-timeline-event {\n                flex-direction: row-reverse;\n            }\n        \n            .p-timeline-right .p-timeline-event-opposite {\n                text-align: left;\n            }\n        \n            .p-timeline-right .p-timeline-event-content {\n                text-align: right;\n            }\n        \n            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {\n                flex-direction: row-reverse;\n            }\n        \n            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {\n                text-align: right;\n            }\n        \n            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {\n                text-align: left;\n            }\n        \n            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {\n                text-align: left;\n            }\n        \n            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {\n                text-align: right;\n            }\n        \n            .p-timeline-event {\n                display: flex;\n                position: relative;\n                min-height: 70px;\n            }\n        \n            .p-timeline-event:last-child {\n                min-height: 0;\n            }\n        \n            .p-timeline-event-opposite {\n                flex: 1;\n                padding: 0 1rem;\n            }\n        \n            .p-timeline-event-content {\n                flex: 1;\n                padding: 0 1rem;\n            }\n        \n            .p-timeline-event-separator {\n                flex: 0;\n                display: flex;\n                align-items: center;\n                flex-direction: column;\n            }\n        \n            .p-timeline-event-marker {\n                display: flex;\n                align-self: baseline;\n            }\n        \n            .p-timeline-event-connector {\n                flex-grow: 1;\n            }\n        \n            .p-timeline-horizontal {\n                flex-direction: row;\n            }\n        \n            .p-timeline-horizontal .p-timeline-event {\n                flex-direction: column;\n                flex: 1;\n            }\n        \n            .p-timeline-horizontal .p-timeline-event:last-child {\n                flex: 0;\n            }\n        \n            .p-timeline-horizontal .p-timeline-event-separator {\n                flex-direction: row;\n            }\n        \n            .p-timeline-horizontal .p-timeline-event-connector  {\n                width: 100%;\n            }\n        \n            .p-timeline-bottom .p-timeline-event {\n                flex-direction: column-reverse;\n            }\n        \n            .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {\n                flex-direction: column-reverse;\n            }\n        }\n    "
  }
});
var Timeline = React.memo(React.forwardRef(function(inProps, ref) {
  var mergeProps = useMergeProps();
  var context = React.useContext(PrimeReactContext);
  var props = TimelineBase.getProps(inProps, context);
  var _TimelineBase$setMeta = TimelineBase.setMetaData({
    props
  }), ptm = _TimelineBase$setMeta.ptm, cx = _TimelineBase$setMeta.cx, isUnstyled = _TimelineBase$setMeta.isUnstyled;
  useHandleStyle(TimelineBase.css.styles, isUnstyled, {
    name: "timeline"
  });
  var getPTOptions = function getPTOptions2(key, index) {
    return ptm(key, {
      context: {
        index
      }
    });
  };
  var elementRef = React.useRef(null);
  var getKey = function getKey2(item, index) {
    return props.dataKey ? ObjectUtils.resolveFieldData(item, props.dataKey) : "pr_id__".concat(index);
  };
  var createEvents = function createEvents2() {
    return props.value && props.value.map(function(item, index) {
      var opposite = ObjectUtils.getJSXElement(props.opposite, item, index);
      var markerProps = mergeProps({
        className: cx("marker")
      }, getPTOptions("marker", index));
      var marker = ObjectUtils.getJSXElement(props.marker, item, index) || React.createElement("div", markerProps);
      var connectorProps = mergeProps({
        className: cx("connector")
      }, getPTOptions("connector", index));
      var connector = index !== props.value.length - 1 && React.createElement("div", connectorProps);
      var content = ObjectUtils.getJSXElement(props.content, item, index);
      var eventProps = mergeProps({
        className: cx("event")
      }, getPTOptions("event", index));
      var oppositeProps = mergeProps({
        className: cx("opposite")
      }, getPTOptions("opposite", index));
      var separatorProps = mergeProps({
        className: cx("separator")
      }, getPTOptions("separator", index));
      var contentProps = mergeProps({
        className: cx("content")
      }, getPTOptions("content", index));
      return React.createElement("div", _extends({
        key: getKey(item, index)
      }, eventProps), React.createElement("div", oppositeProps, opposite), React.createElement("div", separatorProps, marker, connector), React.createElement("div", contentProps, content));
    });
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var events = createEvents();
  var rootProps = mergeProps({
    ref: elementRef,
    className: classNames(props.className, cx("root"))
  }, TimelineBase.getOtherProps(props), ptm("root"));
  return React.createElement("div", rootProps, events);
}));
Timeline.displayName = "Timeline";
export {
  Timeline
};
//# sourceMappingURL=primereact_timeline.js.map
