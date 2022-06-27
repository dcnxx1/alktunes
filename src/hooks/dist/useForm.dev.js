"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _statics = _interopRequireDefault(require("../static/statics"));

var _codes = _interopRequireWildcard(require("../errors/codes.request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useForm(typeOfForm, inputData) {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      inputFields = _useState2[0],
      setInputFields = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setErrors = _useState4[1];

  function setDataForLogin(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setInputFields(function (prevValue) {
      return _objectSpread({}, prevValue, _defineProperty({}, name, value));
    });
  }

  function inputValidation(typeOfForm) {
    switch (typeOfForm) {
      case _statics["default"].FORM.LOGIN:
        if (inputFields.username.length == 0 && inputFields.password.length == 0) {
          setErrors(function (prevValue) {
            return [].concat(_toConsumableArray(prevValue), [{
              ERR: _codes["default"].FORM_ERR.ERR_NO_INPUT.ERR,
              message: _codes.FORM_ERR.ERR_NO_INPUT.message
            }]);
          });
        }

        break;

      case _statics["default"].FORM.REGISTER:
        var username = inputFields.username,
            password = inputFields.password,
            repeatPassword = inputFields.repeatPassword;

        if (username.length < 5) {
          if (error.includes(function (ss) {
            return ss.ERR !== _codes["default"].FORM_ERR.ERR_MIN_CHARS.ERR;
          }) == false) {
            setErrors(function (prevValue) {
              return [].concat(_toConsumableArray(prevValue), [{
                ERR: _codes["default"].FORM_ERR.ERR_MIN_CHARS_USR.ERR,
                message: _codes["default"].FORM_ERR.ERR_MIN_CHARS_USR.message
              }]);
            });
          }
        } else {
          setErrors(function (prevValue) {
            return prevValue.filter(function (obj) {
              return obj.ERR !== _codes["default"].FORM_ERR.ERR_MIN_CHARS_USR.ERR;
            });
          });
        }

        if (password.length < 5) {
          if (error.includes(function (ss) {
            return ss.ERR !== _codes["default"].FORM_ERR.ERR_MIN_CHARS.ERR;
          }) == false) {
            setErrors(function (prevValue) {
              return [].concat(_toConsumableArray(prevValue), [{
                ERR: _codes["default"].FORM_ERR.ERR_MIN_CHARS_PASS.ERR,
                message: _codes["default"].FORM_ERR.ERR_MIN_CHARS_PASS.message
              }]);
            });
          }
        } else {
          setErrors(function (prevValue) {
            return prevValue.filter(function (obj) {
              return obj.ERR !== _codes["default"].FORM_ERR.ERR_MIN_CHARS_PASS.ERR;
            });
          });
        }

        break;
    }
  }

  (0, _react.useEffect)(function () {
    console.log(error);
  }, [error]);

  function formControl(e) {
    e.preventDefault();

    switch (typeOfForm) {
      case _statics["default"].FORM.LOGIN:
        break;

      case _statics["default"].FORM.REGISTER:
        inputValidation(_statics["default"].FORM.REGISTER);
        console.log(inputFields);
        break;
    }
  }

  return [formControl, {
    inputFields: inputFields,
    setDataForLogin: setDataForLogin
  }, error];
}

var _default = useForm;
exports["default"] = _default;