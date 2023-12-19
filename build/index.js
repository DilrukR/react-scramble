"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./scrable.css");
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ("object" != _typeof(e) && "function" != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n["default"] = e), t && t.set(e, n), n;
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t["return"] && ((u = t["return"]()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
} /* eslint-disable react-hooks/exhaustive-deps */
var TextScramble = function TextScramble(_ref) {
  var _ref$texts = _ref.texts,
    texts =
      _ref$texts === void 0 ? ["Hello world from React Scrumble "] : _ref$texts,
    _ref$letterSpeed = _ref.letterSpeed,
    letterSpeed = _ref$letterSpeed === void 0 ? 20 : _ref$letterSpeed,
    _ref$nextLetterSpeed = _ref.nextLetterSpeed,
    nextLetterSpeed =
      _ref$nextLetterSpeed === void 0 ? 100 : _ref$nextLetterSpeed,
    _ref$paused = _ref.paused,
    paused = _ref$paused === void 0 ? false : _ref$paused,
    _ref$pauseTime = _ref.pauseTime,
    pauseTime = _ref$pauseTime === void 0 ? 0 : _ref$pauseTime,
    _ref$textStyles = _ref.textStyles,
    textStyles = _ref$textStyles === void 0 ? {} : _ref$textStyles,
    _ref$containerStyle = _ref.containerStyle,
    containerStyle = _ref$containerStyle === void 0 ? {} : _ref$containerStyle,
    _ref$scrambledColor = _ref.scrambledColor,
    scrambledColor =
      _ref$scrambledColor === void 0 ? "gray" : _ref$scrambledColor,
    _ref$revealedColor = _ref.revealedColor,
    revealedColor =
      _ref$revealedColor === void 0 ? "black" : _ref$revealedColor,
    onAnimationEnd = _ref.onAnimationEnd,
    onTextScrambleComplete = _ref.onTextScrambleComplete,
    _ref$symbols = _ref.symbols,
    symbols =
      _ref$symbols === void 0
        ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
        : _ref$symbols;
  var isInitialMount = (0, _react.useRef)(true);
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    currentText = _useState2[0],
    setCurrentText = _useState2[1];
  var initSymbols = currentText.split("").map(function () {
    return symbols[Math.floor(Math.random() * symbols.length)];
  });
  var _useState3 = (0, _react.useState)(initSymbols),
    _useState4 = _slicedToArray(_useState3, 2),
    displayedText = _useState4[0],
    setDisplayedText = _useState4[1];
  var leftIndexes = [];
  var defaultLeftIndexes = function defaultLeftIndexes() {
    currentText.split("").forEach(function (_, i) {
      leftIndexes.push(i);
    });
  };
  var nextItem = function nextItem(array, currentItem) {
    var currentIndex = array.indexOf(currentItem);
    if (currentIndex === -1) {
      return array[0];
    } else if (currentIndex === array.length - 1) {
      return array[0];
    } else {
      return array[currentIndex + 1];
    }
  };
  var bakeLetterInterval;
  var bakeTextInterval;
  var bakeLetter = function bakeLetter() {
    bakeLetterInterval = setInterval(function () {
      if (!paused) {
        var updatedText = [];
        currentText.split("").forEach(function (_, i) {
          if (!leftIndexes.includes(i)) {
            updatedText[i] = /*#__PURE__*/ _react["default"].createElement(
              "span",
              {
                key: i,
                style: {
                  color: revealedColor,
                },
                className: "scramble",
              },
              currentText[i]
            );
            return;
          }
          var randomSymbol =
            symbols[Math.floor(Math.random() * symbols.length)];
          updatedText[i] = /*#__PURE__*/ _react["default"].createElement(
            "span",
            {
              key: i,
              style: {
                color: scrambledColor,
              },
            },
            randomSymbol
          );
        });
        setDisplayedText(updatedText);
      }
    }, letterSpeed);
  };
  var bakeText = function bakeText() {
    defaultLeftIndexes();
    bakeLetter();
    bakeTextInterval = setInterval(function () {
      if (!paused) {
        if (leftIndexes.length === 0) {
          clearInterval(bakeLetterInterval);
          clearInterval(bakeTextInterval);
          setTimeout(function () {
            setCurrentText(nextItem(texts, currentText));
            defaultLeftIndexes();
          }, pauseTime);
          if (currentText === texts[texts.length - 1]) {
            if (onTextScrambleComplete) {
              onTextScrambleComplete();
            }
          }
        }
        leftIndexes.shift();
      }
    }, nextLetterSpeed);
  };
  (0, _react.useEffect)(
    function () {
      if (!paused && !isInitialMount.current) {
        bakeText();
      }
      isInitialMount.current = false;
      return function () {
        clearInterval(bakeLetterInterval);
        clearInterval(bakeTextInterval);
      };
    },
    [currentText, paused]
  );
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    {
      className: "container",
    },
    /*#__PURE__*/ _react["default"].createElement("p", null, displayedText)
  );
};
var _default = (exports["default"] = TextScramble);
