/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkOptions": () => (/* binding */ checkOptions)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js");

function checkOptions(options) {
   true ? (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.warn)(!options.debug, 'The `debug` option is meant for development debugging and should not be used in production.') : 0;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAutocomplete": () => (/* binding */ createAutocomplete)
/* harmony export */ });
/* harmony import */ var _checkOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkOptions */ "./node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js");
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStore */ "./node_modules/@algolia/autocomplete-core/dist/esm/createStore.js");
/* harmony import */ var _getAutocompleteSetters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getAutocompleteSetters */ "./node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js");
/* harmony import */ var _getDefaultProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDefaultProps */ "./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js");
/* harmony import */ var _getPropGetters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getPropGetters */ "./node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata */ "./node_modules/@algolia/autocomplete-core/dist/esm/metadata.js");
/* harmony import */ var _onInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onInput */ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js");
/* harmony import */ var _stateReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stateReducer */ "./node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function createAutocomplete(options) {
  (0,_checkOptions__WEBPACK_IMPORTED_MODULE_0__.checkOptions)(options);
  var subscribers = [];
  var props = (0,_getDefaultProps__WEBPACK_IMPORTED_MODULE_1__.getDefaultProps)(options, subscribers);
  var store = (0,_createStore__WEBPACK_IMPORTED_MODULE_2__.createStore)(_stateReducer__WEBPACK_IMPORTED_MODULE_3__.stateReducer, props, onStoreStateChange);
  var setters = (0,_getAutocompleteSetters__WEBPACK_IMPORTED_MODULE_4__.getAutocompleteSetters)({
    store: store
  });
  var propGetters = (0,_getPropGetters__WEBPACK_IMPORTED_MODULE_5__.getPropGetters)(_objectSpread({
    props: props,
    refresh: refresh,
    store: store
  }, setters));

  function onStoreStateChange(_ref) {
    var prevState = _ref.prevState,
        state = _ref.state;
    props.onStateChange(_objectSpread({
      prevState: prevState,
      state: state,
      refresh: refresh
    }, setters));
  }

  function refresh() {
    return (0,_onInput__WEBPACK_IMPORTED_MODULE_6__.onInput)(_objectSpread({
      event: new Event('input'),
      nextState: {
        isOpen: store.getState().isOpen
      },
      props: props,
      query: store.getState().query,
      refresh: refresh,
      store: store
    }, setters));
  }

  props.plugins.forEach(function (plugin) {
    var _plugin$subscribe;

    return (_plugin$subscribe = plugin.subscribe) === null || _plugin$subscribe === void 0 ? void 0 : _plugin$subscribe.call(plugin, _objectSpread(_objectSpread({}, setters), {}, {
      refresh: refresh,
      onSelect: function onSelect(fn) {
        subscribers.push({
          onSelect: fn
        });
      },
      onActive: function onActive(fn) {
        subscribers.push({
          onActive: fn
        });
      }
    }));
  });
  (0,_metadata__WEBPACK_IMPORTED_MODULE_7__.injectMetadata)({
    metadata: (0,_metadata__WEBPACK_IMPORTED_MODULE_7__.getMetadata)({
      plugins: props.plugins,
      options: options
    }),
    environment: props.environment
  });
  return _objectSpread(_objectSpread({
    refresh: refresh
  }, propGetters), setters);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/createStore.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/createStore.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function createStore(reducer, props, onStoreStateChange) {
  var state = props.initialState;
  return {
    getState: function getState() {
      return state;
    },
    dispatch: function dispatch(action, payload) {
      var prevState = _objectSpread({}, state);

      state = reducer(state, {
        type: action,
        props: props,
        payload: payload
      });
      onStoreStateChange({
        state: state,
        prevState: prevState
      });
    },
    pendingRequests: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createCancelablePromiseList)()
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAutocompleteSetters": () => (/* binding */ getAutocompleteSetters)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getAutocompleteSetters(_ref) {
  var store = _ref.store;

  var setActiveItemId = function setActiveItemId(value) {
    store.dispatch('setActiveItemId', value);
  };

  var setQuery = function setQuery(value) {
    store.dispatch('setQuery', value);
  };

  var setCollections = function setCollections(rawValue) {
    var baseItemId = 0;
    var value = rawValue.map(function (collection) {
      return _objectSpread(_objectSpread({}, collection), {}, {
        // We flatten the stored items to support calling `getAlgoliaResults`
        // from the source itself.
        items: (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.flatten)(collection.items).map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            __autocomplete_id: baseItemId++
          });
        })
      });
    });
    store.dispatch('setCollections', value);
  };

  var setIsOpen = function setIsOpen(value) {
    store.dispatch('setIsOpen', value);
  };

  var setStatus = function setStatus(value) {
    store.dispatch('setStatus', value);
  };

  var setContext = function setContext(value) {
    store.dispatch('setContext', value);
  };

  return {
    setActiveItemId: setActiveItemId,
    setQuery: setQuery,
    setCollections: setCollections,
    setIsOpen: setIsOpen,
    setStatus: setStatus,
    setContext: setContext
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCompletion": () => (/* binding */ getCompletion)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js");

function getCompletion(_ref) {
  var _getActiveItem;

  var state = _ref.state;

  if (state.isOpen === false || state.activeItemId === null) {
    return null;
  }

  return ((_getActiveItem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getActiveItem)(state)) === null || _getActiveItem === void 0 ? void 0 : _getActiveItem.itemInputValue) || null;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultProps": () => (/* binding */ getDefaultProps)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getDefaultProps(props, pluginSubscribers) {
  var _props$id;

  /* eslint-disable no-restricted-globals */
  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */

  var plugins = props.plugins || [];
  return _objectSpread(_objectSpread({
    debug: false,
    openOnFocus: false,
    placeholder: '',
    autoFocus: false,
    defaultActiveItemId: null,
    stallThreshold: 300,
    environment: environment,
    shouldPanelOpen: function shouldPanelOpen(_ref) {
      var state = _ref.state;
      return (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.getItemsCount)(state) > 0;
    },
    reshape: function reshape(_ref2) {
      var sources = _ref2.sources;
      return sources;
    }
  }, props), {}, {
    // Since `generateAutocompleteId` triggers a side effect (it increments
    // an internal counter), we don't want to execute it if unnecessary.
    id: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__.generateAutocompleteId)(),
    plugins: plugins,
    // The following props need to be deeply defaulted.
    initialState: _objectSpread({
      activeItemId: null,
      query: '',
      completion: null,
      collections: [],
      isOpen: false,
      status: 'idle',
      context: {}
    }, props.initialState),
    onStateChange: function onStateChange(params) {
      var _props$onStateChange;

      (_props$onStateChange = props.onStateChange) === null || _props$onStateChange === void 0 ? void 0 : _props$onStateChange.call(props, params);
      plugins.forEach(function (x) {
        var _x$onStateChange;

        return (_x$onStateChange = x.onStateChange) === null || _x$onStateChange === void 0 ? void 0 : _x$onStateChange.call(x, params);
      });
    },
    onSubmit: function onSubmit(params) {
      var _props$onSubmit;

      (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0 ? void 0 : _props$onSubmit.call(props, params);
      plugins.forEach(function (x) {
        var _x$onSubmit;

        return (_x$onSubmit = x.onSubmit) === null || _x$onSubmit === void 0 ? void 0 : _x$onSubmit.call(x, params);
      });
    },
    onReset: function onReset(params) {
      var _props$onReset;

      (_props$onReset = props.onReset) === null || _props$onReset === void 0 ? void 0 : _props$onReset.call(props, params);
      plugins.forEach(function (x) {
        var _x$onReset;

        return (_x$onReset = x.onReset) === null || _x$onReset === void 0 ? void 0 : _x$onReset.call(x, params);
      });
    },
    getSources: function getSources(params) {
      return Promise.all([].concat(_toConsumableArray(plugins.map(function (plugin) {
        return plugin.getSources;
      })), [props.getSources]).filter(Boolean).map(function (getSources) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getNormalizedSources)(getSources, params);
      })).then(function (nested) {
        return (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.flatten)(nested);
      }).then(function (sources) {
        return sources.map(function (source) {
          return _objectSpread(_objectSpread({}, source), {}, {
            onSelect: function onSelect(params) {
              source.onSelect(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onSelect;

                return (_x$onSelect = x.onSelect) === null || _x$onSelect === void 0 ? void 0 : _x$onSelect.call(x, params);
              });
            },
            onActive: function onActive(params) {
              source.onActive(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onActive;

                return (_x$onActive = x.onActive) === null || _x$onActive === void 0 ? void 0 : _x$onActive.call(x, params);
              });
            }
          });
        });
      });
    },
    navigator: _objectSpread({
      navigate: function navigate(_ref3) {
        var itemUrl = _ref3.itemUrl;
        environment.location.assign(itemUrl);
      },
      navigateNewTab: function navigateNewTab(_ref4) {
        var itemUrl = _ref4.itemUrl;
        var windowReference = environment.open(itemUrl, '_blank', 'noopener');
        windowReference === null || windowReference === void 0 ? void 0 : windowReference.focus();
      },
      navigateNewWindow: function navigateNewWindow(_ref5) {
        var itemUrl = _ref5.itemUrl;
        environment.open(itemUrl, '_blank', 'noopener');
      }
    }, props.navigator)
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPropGetters": () => (/* binding */ getPropGetters)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js");
/* harmony import */ var _onInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onInput */ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js");
/* harmony import */ var _onKeyDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onKeyDown */ "./node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js");
var _excluded = ["props", "refresh", "store"],
    _excluded2 = ["inputElement", "formElement", "panelElement"],
    _excluded3 = ["inputElement"],
    _excluded4 = ["inputElement", "maxLength"],
    _excluded5 = ["item", "source"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function getPropGetters(_ref) {
  var props = _ref.props,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  var getEnvironmentProps = function getEnvironmentProps(providedProps) {
    var inputElement = providedProps.inputElement,
        formElement = providedProps.formElement,
        panelElement = providedProps.panelElement,
        rest = _objectWithoutProperties(providedProps, _excluded2);

    function onMouseDownOrTouchStart(event) {
      // The `onTouchStart`/`onMouseDown` events shouldn't trigger the `blur`
      // handler when it's not an interaction with Autocomplete.
      // We detect it with the following heuristics:
      // - the panel is closed AND there are no pending requests
      //   (no interaction with the autocomplete, no future state updates)
      // - OR the touched target is the input element (should open the panel)
      var isAutocompleteInteraction = store.getState().isOpen || !store.pendingRequests.isEmpty();

      if (!isAutocompleteInteraction || event.target === inputElement) {
        return;
      } // @TODO: support cases where there are multiple Autocomplete instances.
      // Right now, a second instance makes this computation return false.


      var isTargetWithinAutocomplete = [formElement, panelElement].some(function (contextNode) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isOrContainsNode)(contextNode, event.target);
      });

      if (isTargetWithinAutocomplete === false) {
        store.dispatch('blur', null); // If requests are still pending when the user closes the panel, they
        // could reopen the panel once they resolve.
        // We want to prevent any subsequent query from reopening the panel
        // because it would result in an unsolicited UI behavior.

        if (!props.debug) {
          store.pendingRequests.cancelAll();
        }
      }
    }

    return _objectSpread({
      // We do not rely on the native `blur` event of the input to close the
      // panel, but rather on a custom `touchstart`/`mousedown` event outside
      // of the autocomplete elements.
      // This ensures we don't mistakenly interpret interactions within the
      // autocomplete (but outside of the input) as a signal to close the panel.
      // For example, clicking reset button causes an input blur, but if
      // `openOnFocus=true`, it shouldn't close the panel.
      // On touch devices, scrolling results (`touchmove`) causes an input blur
      // but shouldn't close the panel.
      onTouchStart: onMouseDownOrTouchStart,
      onMouseDown: onMouseDownOrTouchStart,
      // When scrolling on touch devices (mobiles, tablets, etc.), we want to
      // mimic the native platform behavior where the input is blurred to
      // hide the virtual keyboard. This gives more vertical space to
      // discover all the suggestions showing up in the panel.
      onTouchMove: function onTouchMove(event) {
        if (store.getState().isOpen === false || inputElement !== props.environment.document.activeElement || event.target === inputElement) {
          return;
        }

        inputElement.blur();
      }
    }, rest);
  };

  var getRootProps = function getRootProps(rest) {
    return _objectSpread({
      role: 'combobox',
      'aria-expanded': store.getState().isOpen,
      'aria-haspopup': 'listbox',
      'aria-owns': store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
      'aria-labelledby': "".concat(props.id, "-label")
    }, rest);
  };

  var getFormProps = function getFormProps(providedProps) {
    var inputElement = providedProps.inputElement,
        rest = _objectWithoutProperties(providedProps, _excluded3);

    return _objectSpread({
      action: '',
      noValidate: true,
      role: 'search',
      onSubmit: function onSubmit(event) {
        var _providedProps$inputE;

        event.preventDefault();
        props.onSubmit(_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('submit', null);
        (_providedProps$inputE = providedProps.inputElement) === null || _providedProps$inputE === void 0 ? void 0 : _providedProps$inputE.blur();
      },
      onReset: function onReset(event) {
        var _providedProps$inputE2;

        event.preventDefault();
        props.onReset(_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('reset', null);
        (_providedProps$inputE2 = providedProps.inputElement) === null || _providedProps$inputE2 === void 0 ? void 0 : _providedProps$inputE2.focus();
      }
    }, rest);
  };

  var getInputProps = function getInputProps(providedProps) {
    var _props$environment$na;

    function onFocus(event) {
      // We want to trigger a query when `openOnFocus` is true
      // because the panel should open with the current query.
      if (props.openOnFocus || Boolean(store.getState().query)) {
        (0,_onInput__WEBPACK_IMPORTED_MODULE_1__.onInput)(_objectSpread({
          event: event,
          props: props,
          query: store.getState().completion || store.getState().query,
          refresh: refresh,
          store: store
        }, setters));
      }

      store.dispatch('focus', null);
    }

    var _ref2 = providedProps || {},
        inputElement = _ref2.inputElement,
        _ref2$maxLength = _ref2.maxLength,
        maxLength = _ref2$maxLength === void 0 ? 512 : _ref2$maxLength,
        rest = _objectWithoutProperties(_ref2, _excluded4);

    var activeItem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getActiveItem)(store.getState());
    var userAgent = ((_props$environment$na = props.environment.navigator) === null || _props$environment$na === void 0 ? void 0 : _props$environment$na.userAgent) || '';
    var shouldFallbackKeyHint = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSamsung)(userAgent);
    var enterKeyHint = activeItem !== null && activeItem !== void 0 && activeItem.itemUrl && !shouldFallbackKeyHint ? 'go' : 'search';
    return _objectSpread({
      'aria-autocomplete': 'both',
      'aria-activedescendant': store.getState().isOpen && store.getState().activeItemId !== null ? "".concat(props.id, "-item-").concat(store.getState().activeItemId) : undefined,
      'aria-controls': store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
      'aria-labelledby': "".concat(props.id, "-label"),
      value: store.getState().completion || store.getState().query,
      id: "".concat(props.id, "-input"),
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      enterKeyHint: enterKeyHint,
      spellCheck: 'false',
      autoFocus: props.autoFocus,
      placeholder: props.placeholder,
      maxLength: maxLength,
      type: 'search',
      onChange: function onChange(event) {
        (0,_onInput__WEBPACK_IMPORTED_MODULE_1__.onInput)(_objectSpread({
          event: event,
          props: props,
          query: event.currentTarget.value.slice(0, maxLength),
          refresh: refresh,
          store: store
        }, setters));
      },
      onKeyDown: function onKeyDown(event) {
        (0,_onKeyDown__WEBPACK_IMPORTED_MODULE_4__.onKeyDown)(_objectSpread({
          event: event,
          props: props,
          refresh: refresh,
          store: store
        }, setters));
      },
      onFocus: onFocus,
      // We don't rely on the `blur` event.
      // See explanation in `onTouchStart`/`onMouseDown`.
      // @MAJOR See if we need to keep this handler.
      onBlur: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_5__.noop,
      onClick: function onClick(event) {
        // When the panel is closed and you click on the input while
        // the input is focused, the `onFocus` event is not triggered
        // (default browser behavior).
        // In an autocomplete context, it makes sense to open the panel in this
        // case.
        // We mimic this event by catching the `onClick` event which
        // triggers the `onFocus` for the panel to open.
        if (providedProps.inputElement === props.environment.document.activeElement && !store.getState().isOpen) {
          onFocus(event);
        }
      }
    }, rest);
  };

  var getLabelProps = function getLabelProps(rest) {
    return _objectSpread({
      htmlFor: "".concat(props.id, "-input"),
      id: "".concat(props.id, "-label")
    }, rest);
  };

  var getListProps = function getListProps(rest) {
    return _objectSpread({
      role: 'listbox',
      'aria-labelledby': "".concat(props.id, "-label"),
      id: "".concat(props.id, "-list")
    }, rest);
  };

  var getPanelProps = function getPanelProps(rest) {
    return _objectSpread({
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the panel so
        // that the blur event is not triggered, otherwise it closes the
        // panel.
        event.preventDefault();
      },
      onMouseLeave: function onMouseLeave() {
        store.dispatch('mouseleave', null);
      }
    }, rest);
  };

  var getItemProps = function getItemProps(providedProps) {
    var item = providedProps.item,
        source = providedProps.source,
        rest = _objectWithoutProperties(providedProps, _excluded5);

    return _objectSpread({
      id: "".concat(props.id, "-item-").concat(item.__autocomplete_id),
      role: 'option',
      'aria-selected': store.getState().activeItemId === item.__autocomplete_id,
      onMouseMove: function onMouseMove(event) {
        if (item.__autocomplete_id === store.getState().activeItemId) {
          return;
        }

        store.dispatch('mousemove', item.__autocomplete_id);
        var activeItem = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getActiveItem)(store.getState());

        if (store.getState().activeItemId !== null && activeItem) {
          var _item = activeItem.item,
              itemInputValue = activeItem.itemInputValue,
              itemUrl = activeItem.itemUrl,
              _source = activeItem.source;

          _source.onActive(_objectSpread({
            event: event,
            item: _item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: _source,
            state: store.getState()
          }, setters));
        }
      },
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the item so it
        // can remain with the current `activeElement`.
        event.preventDefault();
      },
      onClick: function onClick(event) {
        var itemInputValue = source.getItemInputValue({
          item: item,
          state: store.getState()
        });
        var itemUrl = source.getItemUrl({
          item: item,
          state: store.getState()
        }); // If `getItemUrl` is provided, it means that the suggestion
        // is a link, not plain text that aims at updating the query.
        // We can therefore skip the state change because it will update
        // the `activeItemId`, resulting in a UI flash, especially
        // noticeable on mobile.

        var runPreCommand = itemUrl ? Promise.resolve() : (0,_onInput__WEBPACK_IMPORTED_MODULE_1__.onInput)(_objectSpread({
          event: event,
          nextState: {
            isOpen: false
          },
          props: props,
          query: itemInputValue,
          refresh: refresh,
          store: store
        }, setters));
        runPreCommand.then(function () {
          source.onSelect(_objectSpread({
            event: event,
            item: item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: source,
            state: store.getState()
          }, setters));
        });
      }
    }, rest);
  };

  return {
    getEnvironmentProps: getEnvironmentProps,
    getRootProps: getRootProps,
    getFormProps: getFormProps,
    getLabelProps: getLabelProps,
    getInputProps: getInputProps,
    getPanelProps: getPanelProps,
    getListProps: getListProps,
    getItemProps: getItemProps
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/metadata.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMetadata": () => (/* binding */ getMetadata),
/* harmony export */   "injectMetadata": () => (/* binding */ injectMetadata)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getMetadata(_ref) {
  var _, _options$__autocomple, _options$__autocomple2, _options$__autocomple3;

  var plugins = _ref.plugins,
      options = _ref.options;
  var optionsKey = (_ = (((_options$__autocomple = options.__autocomplete_metadata) === null || _options$__autocomple === void 0 ? void 0 : _options$__autocomple.userAgents) || [])[0]) === null || _ === void 0 ? void 0 : _.segment;
  var extraOptions = optionsKey ? _defineProperty({}, optionsKey, Object.keys(((_options$__autocomple2 = options.__autocomplete_metadata) === null || _options$__autocomple2 === void 0 ? void 0 : _options$__autocomple2.options) || {})) : {};
  return {
    plugins: plugins.map(function (plugin) {
      return {
        name: plugin.name,
        options: Object.keys(plugin.__autocomplete_pluginOptions || [])
      };
    }),
    options: _objectSpread({
      'autocomplete-core': Object.keys(options)
    }, extraOptions),
    ua: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.userAgents.concat(((_options$__autocomple3 = options.__autocomplete_metadata) === null || _options$__autocomple3 === void 0 ? void 0 : _options$__autocomple3.userAgents) || [])
  };
}
function injectMetadata(_ref3) {
  var _environment$navigato, _environment$navigato2;

  var metadata = _ref3.metadata,
      environment = _ref3.environment;
  var isMetadataEnabled = (_environment$navigato = environment.navigator) === null || _environment$navigato === void 0 ? void 0 : (_environment$navigato2 = _environment$navigato.userAgent) === null || _environment$navigato2 === void 0 ? void 0 : _environment$navigato2.includes('Algolia Crawler');

  if (isMetadataEnabled) {
    var metadataContainer = environment.document.createElement('meta');
    var headRef = environment.document.querySelector('head');
    metadataContainer.name = 'algolia:metadata';
    setTimeout(function () {
      metadataContainer.content = JSON.stringify(metadata);
      headRef.appendChild(metadataContainer);
    }, 0);
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onInput": () => (/* binding */ onInput)
/* harmony export */ });
/* harmony import */ var _reshape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reshape */ "./node_modules/@algolia/autocomplete-core/dist/esm/reshape.js");
/* harmony import */ var _resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolve */ "./node_modules/@algolia/autocomplete-core/dist/esm/resolve.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js");
var _excluded = ["event", "nextState", "props", "query", "refresh", "store"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var lastStalledId = null;
var runConcurrentSafePromise = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createConcurrentSafePromise)();
function onInput(_ref) {
  var event = _ref.event,
      _ref$nextState = _ref.nextState,
      nextState = _ref$nextState === void 0 ? {} : _ref$nextState,
      props = _ref.props,
      query = _ref.query,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  if (lastStalledId) {
    props.environment.clearTimeout(lastStalledId);
  }

  var setCollections = setters.setCollections,
      setIsOpen = setters.setIsOpen,
      setQuery = setters.setQuery,
      setActiveItemId = setters.setActiveItemId,
      setStatus = setters.setStatus;
  setQuery(query);
  setActiveItemId(props.defaultActiveItemId);

  if (!query && props.openOnFocus === false) {
    var _nextState$isOpen;

    var collections = store.getState().collections.map(function (collection) {
      return _objectSpread(_objectSpread({}, collection), {}, {
        items: []
      });
    });
    setStatus('idle');
    setCollections(collections);
    setIsOpen((_nextState$isOpen = nextState.isOpen) !== null && _nextState$isOpen !== void 0 ? _nextState$isOpen : props.shouldPanelOpen({
      state: store.getState()
    })); // We make sure to update the latest resolved value of the tracked
    // promises to keep late resolving promises from "cancelling" the state
    // updates performed in this code path.
    // We chain with a void promise to respect `onInput`'s expected return type.

    var _request = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.cancelable)(runConcurrentSafePromise(collections).then(function () {
      return Promise.resolve();
    }));

    return store.pendingRequests.add(_request);
  }

  setStatus('loading');
  lastStalledId = props.environment.setTimeout(function () {
    setStatus('stalled');
  }, props.stallThreshold); // We track the entire promise chain triggered by `onInput` before mutating
  // the Autocomplete state to make sure that any state manipulation is based on
  // fresh data regardless of when promises individually resolve.
  // We don't track nested promises and only rely on the full chain resolution,
  // meaning we should only ever manipulate the state once this concurrent-safe
  // promise is resolved.

  var request = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.cancelable)(runConcurrentSafePromise(props.getSources(_objectSpread({
    query: query,
    refresh: refresh,
    state: store.getState()
  }, setters)).then(function (sources) {
    return Promise.all(sources.map(function (source) {
      return Promise.resolve(source.getItems(_objectSpread({
        query: query,
        refresh: refresh,
        state: store.getState()
      }, setters))).then(function (itemsOrDescription) {
        return (0,_resolve__WEBPACK_IMPORTED_MODULE_2__.preResolve)(itemsOrDescription, source.sourceId);
      });
    })).then(_resolve__WEBPACK_IMPORTED_MODULE_2__.resolve).then(function (responses) {
      return (0,_resolve__WEBPACK_IMPORTED_MODULE_2__.postResolve)(responses, sources);
    }).then(function (collections) {
      return (0,_reshape__WEBPACK_IMPORTED_MODULE_3__.reshape)({
        collections: collections,
        props: props,
        state: store.getState()
      });
    });
  }))).then(function (collections) {
    var _nextState$isOpen2;

    // Parameters passed to `onInput` could be stale when the following code
    // executes, because `onInput` calls may not resolve in order.
    // If it becomes a problem we'll need to save the last passed parameters.
    // See: https://codesandbox.io/s/agitated-cookies-y290z
    setStatus('idle');
    setCollections(collections);
    var isPanelOpen = props.shouldPanelOpen({
      state: store.getState()
    });
    setIsOpen((_nextState$isOpen2 = nextState.isOpen) !== null && _nextState$isOpen2 !== void 0 ? _nextState$isOpen2 : props.openOnFocus && !query && isPanelOpen || isPanelOpen);
    var highlightedItem = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getActiveItem)(store.getState());

    if (store.getState().activeItemId !== null && highlightedItem) {
      var item = highlightedItem.item,
          itemInputValue = highlightedItem.itemInputValue,
          itemUrl = highlightedItem.itemUrl,
          source = highlightedItem.source;
      source.onActive(_objectSpread({
        event: event,
        item: item,
        itemInputValue: itemInputValue,
        itemUrl: itemUrl,
        refresh: refresh,
        source: source,
        state: store.getState()
      }, setters));
    }
  }).finally(function () {
    setStatus('idle');

    if (lastStalledId) {
      props.environment.clearTimeout(lastStalledId);
    }
  });
  return store.pendingRequests.add(request);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onKeyDown": () => (/* binding */ onKeyDown)
/* harmony export */ });
/* harmony import */ var _onInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onInput */ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js");
var _excluded = ["event", "props", "refresh", "store"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function onKeyDown(_ref) {
  var event = _ref.event,
      props = _ref.props,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    // eslint-disable-next-line no-inner-declarations
    var triggerScrollIntoView = function triggerScrollIntoView() {
      var nodeItem = props.environment.document.getElementById("".concat(props.id, "-item-").concat(store.getState().activeItemId));

      if (nodeItem) {
        if (nodeItem.scrollIntoViewIfNeeded) {
          nodeItem.scrollIntoViewIfNeeded(false);
        } else {
          nodeItem.scrollIntoView(false);
        }
      }
    }; // eslint-disable-next-line no-inner-declarations


    var triggerOnActive = function triggerOnActive() {
      var highlightedItem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getActiveItem)(store.getState());

      if (store.getState().activeItemId !== null && highlightedItem) {
        var item = highlightedItem.item,
            itemInputValue = highlightedItem.itemInputValue,
            itemUrl = highlightedItem.itemUrl,
            source = highlightedItem.source;
        source.onActive(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      }
    }; // Default browser behavior changes the caret placement on ArrowUp and
    // ArrowDown.


    event.preventDefault(); // When re-opening the panel, we need to split the logic to keep the actions
    // synchronized as `onInput` returns a promise.

    if (store.getState().isOpen === false && (props.openOnFocus || Boolean(store.getState().query))) {
      (0,_onInput__WEBPACK_IMPORTED_MODULE_1__.onInput)(_objectSpread({
        event: event,
        props: props,
        query: store.getState().query,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        store.dispatch(event.key, {
          nextActiveItemId: props.defaultActiveItemId
        });
        triggerOnActive(); // Since we rely on the DOM, we need to wait for all the micro tasks to
        // finish (which include re-opening the panel) to make sure all the
        // elements are available.

        setTimeout(triggerScrollIntoView, 0);
      });
    } else {
      store.dispatch(event.key, {});
      triggerOnActive();
      triggerScrollIntoView();
    }
  } else if (event.key === 'Escape') {
    // This prevents the default browser behavior on `input[type="search"]`
    // from removing the query right away because we first want to close the
    // panel.
    event.preventDefault();
    store.dispatch(event.key, null); // Hitting the `Escape` key signals the end of a user interaction with the
    // autocomplete. At this point, we should ignore any requests that are still
    // pending and could reopen the panel once they resolve, because that would
    // result in an unsolicited UI behavior.

    store.pendingRequests.cancelAll();
  } else if (event.key === 'Tab') {
    store.dispatch('blur', null); // Hitting the `Escape` key signals the end of a user interaction with the
    // autocomplete. At this point, we should ignore any requests that are still
    // pending and could reopen the panel once they resolve, because that would
    // result in an unsolicited UI behavior.

    store.pendingRequests.cancelAll();
  } else if (event.key === 'Enter') {
    // No active item, so we let the browser handle the native `onSubmit` form
    // event.
    if (store.getState().activeItemId === null || store.getState().collections.every(function (collection) {
      return collection.items.length === 0;
    })) {
      // If requests are still pending when the panel closes, they could reopen
      // the panel once they resolve.
      // We want to prevent any subsequent query from reopening the panel
      // because it would result in an unsolicited UI behavior.
      if (!props.debug) {
        store.pendingRequests.cancelAll();
      }

      return;
    } // This prevents the `onSubmit` event to be sent because an item is
    // highlighted.


    event.preventDefault();

    var _ref2 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getActiveItem)(store.getState()),
        item = _ref2.item,
        itemInputValue = _ref2.itemInputValue,
        itemUrl = _ref2.itemUrl,
        source = _ref2.source;

    if (event.metaKey || event.ctrlKey) {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewTab({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.shiftKey) {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewWindow({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.altKey) {// Keep native browser behavior
    } else {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigate({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
        return;
      }

      (0,_onInput__WEBPACK_IMPORTED_MODULE_1__.onInput)(_objectSpread({
        event: event,
        nextState: {
          isOpen: false
        },
        props: props,
        query: itemInputValue,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      });
    }
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/reshape.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/reshape.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reshape": () => (/* binding */ reshape)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function reshape(_ref) {
  var collections = _ref.collections,
      props = _ref.props,
      state = _ref.state;
  // Sources are grouped by `sourceId` to conveniently pick them via destructuring.
  // Example: `const { recentSearchesPlugin } = sourcesBySourceId`
  var sourcesBySourceId = collections.reduce(function (acc, collection) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, collection.source.sourceId, _objectSpread(_objectSpread({}, collection.source), {}, {
      getItems: function getItems() {
        // We provide the resolved items from the collection to the `reshape` prop.
        return (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.flatten)(collection.items);
      }
    })));
  }, {});
  var reshapeSources = props.reshape({
    sources: Object.values(sourcesBySourceId),
    sourcesBySourceId: sourcesBySourceId,
    state: state
  }); // We reconstruct the collections with the items modified by the `reshape` prop.

  return (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.flatten)(reshapeSources).filter(Boolean).map(function (source) {
    return {
      source: source,
      items: source.getItems()
    };
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/resolve.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/resolve.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postResolve": () => (/* binding */ postResolve),
/* harmony export */   "preResolve": () => (/* binding */ preResolve),
/* harmony export */   "resolve": () => (/* binding */ resolve)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function isDescription(item) {
  return Boolean(item.execute);
}

function isRequesterDescription(description) {
  return Boolean(description === null || description === void 0 ? void 0 : description.execute);
}

function preResolve(itemsOrDescription, sourceId) {
  if (isRequesterDescription(itemsOrDescription)) {
    return _objectSpread(_objectSpread({}, itemsOrDescription), {}, {
      requests: itemsOrDescription.queries.map(function (query) {
        return {
          query: query,
          sourceId: sourceId,
          transformResponse: itemsOrDescription.transformResponse
        };
      })
    });
  }

  return {
    items: itemsOrDescription,
    sourceId: sourceId
  };
}
function resolve(items) {
  var packed = items.reduce(function (acc, current) {
    if (!isDescription(current)) {
      acc.push(current);
      return acc;
    }

    var searchClient = current.searchClient,
        execute = current.execute,
        requesterId = current.requesterId,
        requests = current.requests;
    var container = acc.find(function (item) {
      return isDescription(current) && isDescription(item) && item.searchClient === searchClient && Boolean(requesterId) && item.requesterId === requesterId;
    });

    if (container) {
      var _container$items;

      (_container$items = container.items).push.apply(_container$items, _toConsumableArray(requests));
    } else {
      var request = {
        execute: execute,
        requesterId: requesterId,
        items: requests,
        searchClient: searchClient
      };
      acc.push(request);
    }

    return acc;
  }, []);
  var values = packed.map(function (maybeDescription) {
    if (!isDescription(maybeDescription)) {
      return Promise.resolve(maybeDescription);
    }

    var _ref = maybeDescription,
        execute = _ref.execute,
        items = _ref.items,
        searchClient = _ref.searchClient;
    return execute({
      searchClient: searchClient,
      requests: items
    });
  });
  return Promise.all(values).then(function (responses) {
    return (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.flatten)(responses);
  });
}
function postResolve(responses, sources) {
  return sources.map(function (source) {
    var matches = responses.filter(function (response) {
      return response.sourceId === source.sourceId;
    });
    var results = matches.map(function (_ref2) {
      var items = _ref2.items;
      return items;
    });
    var transform = matches[0].transformResponse;
    var items = transform ? transform((0,_utils__WEBPACK_IMPORTED_MODULE_1__.mapToAlgoliaResponse)(results)) : results;
    (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__.invariant)(Array.isArray(items), function () {
      return "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned type ").concat(JSON.stringify(_typeof(items)), ":\n\n").concat(JSON.stringify((0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.decycle)(items), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
    });
    (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__.invariant)(items.every(Boolean), "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned ").concat(JSON.stringify(undefined), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"));
    return {
      source: source,
      items: items
    };
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stateReducer": () => (/* binding */ stateReducer)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js");
/* harmony import */ var _getCompletion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCompletion */ "./node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var stateReducer = function stateReducer(state, action) {
  switch (action.type) {
    case 'setActiveItemId':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }

    case 'setQuery':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          query: action.payload,
          completion: null
        });
      }

    case 'setCollections':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          collections: action.payload
        });
      }

    case 'setIsOpen':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isOpen: action.payload
        });
      }

    case 'setStatus':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          status: action.payload
        });
      }

    case 'setContext':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          context: _objectSpread(_objectSpread({}, state.context), action.payload)
        });
      }

    case 'ArrowDown':
      {
        var nextState = _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload.hasOwnProperty('nextActiveItemId') ? action.payload.nextActiveItemId : (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNextActiveItemId)(1, state.activeItemId, (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__.getItemsCount)(state), action.props.defaultActiveItemId)
        });

        return _objectSpread(_objectSpread({}, nextState), {}, {
          completion: (0,_getCompletion__WEBPACK_IMPORTED_MODULE_2__.getCompletion)({
            state: nextState
          })
        });
      }

    case 'ArrowUp':
      {
        var _nextState = _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNextActiveItemId)(-1, state.activeItemId, (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__.getItemsCount)(state), action.props.defaultActiveItemId)
        });

        return _objectSpread(_objectSpread({}, _nextState), {}, {
          completion: (0,_getCompletion__WEBPACK_IMPORTED_MODULE_2__.getCompletion)({
            state: _nextState
          })
        });
      }

    case 'Escape':
      {
        if (state.isOpen) {
          return _objectSpread(_objectSpread({}, state), {}, {
            activeItemId: null,
            isOpen: false,
            completion: null
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: null,
          query: '',
          status: 'idle',
          collections: []
        });
      }

    case 'submit':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: null,
          isOpen: false,
          status: 'idle'
        });
      }

    case 'reset':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: // Since we open the panel on reset when openOnFocus=true
          // we need to restore the highlighted index to the defaultActiveItemId. (DocSearch use-case)
          // Since we close the panel when openOnFocus=false
          // we lose track of the highlighted index. (Query-suggestions use-case)
          action.props.openOnFocus === true ? action.props.defaultActiveItemId : null,
          status: 'idle',
          query: ''
        });
      }

    case 'focus':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId,
          isOpen: (action.props.openOnFocus || Boolean(state.query)) && action.props.shouldPanelOpen({
            state: state
          })
        });
      }

    case 'blur':
      {
        if (action.props.debug) {
          return state;
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          isOpen: false,
          activeItemId: null
        });
      }

    case 'mousemove':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }

    case 'mouseleave':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId
        });
      }

    default:
      (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.invariant)(false, "The reducer action ".concat(JSON.stringify(action.type), " is not supported."));
      return state;
  }
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancelable": () => (/* binding */ cancelable),
/* harmony export */   "createCancelablePromise": () => (/* binding */ createCancelablePromise)
/* harmony export */ });
function createInternalCancelablePromise(promise, initialState) {
  var state = initialState;
  return {
    then: function then(onfulfilled, onrejected) {
      return createInternalCancelablePromise(promise.then(createCallback(onfulfilled, state, promise), createCallback(onrejected, state, promise)), state);
    },
    catch: function _catch(onrejected) {
      return createInternalCancelablePromise(promise.catch(createCallback(onrejected, state, promise)), state);
    },
    finally: function _finally(onfinally) {
      if (onfinally) {
        state.onCancelList.push(onfinally);
      }

      return createInternalCancelablePromise(promise.finally(createCallback(onfinally && function () {
        state.onCancelList = [];
        return onfinally();
      }, state, promise)), state);
    },
    cancel: function cancel() {
      state.isCanceled = true;
      var callbacks = state.onCancelList;
      state.onCancelList = [];
      callbacks.forEach(function (callback) {
        callback();
      });
    },
    isCanceled: function isCanceled() {
      return state.isCanceled === true;
    }
  };
}

function createCancelablePromise(executor) {
  return createInternalCancelablePromise(new Promise(function (resolve, reject) {
    return executor(resolve, reject);
  }), {
    isCanceled: false,
    onCancelList: []
  });
}

createCancelablePromise.resolve = function (value) {
  return cancelable(Promise.resolve(value));
};

createCancelablePromise.reject = function (reason) {
  return cancelable(Promise.reject(reason));
};

function cancelable(promise) {
  return createInternalCancelablePromise(promise, {
    isCanceled: false,
    onCancelList: []
  });
}

function createCallback(onResult, state, fallback) {
  if (!onResult) {
    return fallback;
  }

  return function callback(arg) {
    if (state.isCanceled) {
      return arg;
    }

    return onResult(arg);
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCancelablePromiseList": () => (/* binding */ createCancelablePromiseList)
/* harmony export */ });
function createCancelablePromiseList() {
  var list = [];
  return {
    add: function add(cancelablePromise) {
      list.push(cancelablePromise);
      return cancelablePromise.finally(function () {
        list = list.filter(function (item) {
          return item !== cancelablePromise;
        });
      });
    },
    cancelAll: function cancelAll() {
      list.forEach(function (promise) {
        return promise.cancel();
      });
    },
    isEmpty: function isEmpty() {
      return list.length === 0;
    }
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConcurrentSafePromise": () => (/* binding */ createConcurrentSafePromise)
/* harmony export */ });
/**
 * Creates a runner that executes promises in a concurrent-safe way.
 *
 * This is useful to prevent older promises to resolve after a newer promise,
 * otherwise resulting in stale resolved values.
 */
function createConcurrentSafePromise() {
  var basePromiseId = -1;
  var latestResolvedId = -1;
  var latestResolvedValue = undefined;
  return function runConcurrentSafePromise(promise) {
    basePromiseId++;
    var currentPromiseId = basePromiseId;
    return Promise.resolve(promise).then(function (x) {
      // The promise might take too long to resolve and get outdated. This would
      // result in resolving stale values.
      // When this happens, we ignore the promise value and return the one
      // coming from the latest resolved value.
      //
      // +----------------------------------+
      // |        100ms                     |
      // | run(1) +--->  R1                 |
      // |        300ms                     |
      // | run(2) +-------------> R2 (SKIP) |
      // |        200ms                     |
      // | run(3) +--------> R3             |
      // +----------------------------------+
      if (latestResolvedValue && currentPromiseId < latestResolvedId) {
        return latestResolvedValue;
      }

      latestResolvedId = currentPromiseId;
      latestResolvedValue = x;
      return x;
    });
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActiveItem": () => (/* binding */ getActiveItem)
/* harmony export */ });
// We don't have access to the autocomplete source when we call `onKeyDown`
// or `onClick` because those are native browser events.
// However, we can get the source from the suggestion index.
function getCollectionFromActiveItemId(state) {
  // Given 3 sources with respectively 1, 2 and 3 suggestions: [1, 2, 3]
  // We want to get the accumulated counts:
  // [1, 1 + 2, 1 + 2 + 3] = [1, 3, 3 + 3] = [1, 3, 6]
  var accumulatedCollectionsCount = state.collections.map(function (collections) {
    return collections.items.length;
  }).reduce(function (acc, collectionsCount, index) {
    var previousValue = acc[index - 1] || 0;
    var nextValue = previousValue + collectionsCount;
    acc.push(nextValue);
    return acc;
  }, []); // Based on the accumulated counts, we can infer the index of the suggestion.

  var collectionIndex = accumulatedCollectionsCount.reduce(function (acc, current) {
    if (current <= state.activeItemId) {
      return acc + 1;
    }

    return acc;
  }, 0);
  return state.collections[collectionIndex];
}
/**
 * Gets the highlighted index relative to a suggestion object (not the absolute
 * highlighted index).
 *
 * Example:
 *  [['a', 'b'], ['c', 'd', 'e'], ['f']]
 *                      ↑
 *         (absolute: 3, relative: 1)
 */


function getRelativeActiveItemId(_ref) {
  var state = _ref.state,
      collection = _ref.collection;
  var isOffsetFound = false;
  var counter = 0;
  var previousItemsOffset = 0;

  while (isOffsetFound === false) {
    var currentCollection = state.collections[counter];

    if (currentCollection === collection) {
      isOffsetFound = true;
      break;
    }

    previousItemsOffset += currentCollection.items.length;
    counter++;
  }

  return state.activeItemId - previousItemsOffset;
}

function getActiveItem(state) {
  var collection = getCollectionFromActiveItemId(state);

  if (!collection) {
    return null;
  }

  var item = collection.items[getRelativeActiveItemId({
    state: state,
    collection: collection
  })];
  var source = collection.source;
  var itemInputValue = source.getItemInputValue({
    item: item,
    state: state
  });
  var itemUrl = source.getItemUrl({
    item: item,
    state: state
  });
  return {
    item: item,
    itemInputValue: itemInputValue,
    itemUrl: itemUrl,
    source: source
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNextActiveItemId": () => (/* binding */ getNextActiveItemId)
/* harmony export */ });
/**
 * Returns the next active item ID from the current state.
 *
 * We allow circular keyboard navigation from the base index.
 * The base index can either be `null` (nothing is highlighted) or `0`
 * (the first item is highlighted).
 * The base index is allowed to get assigned `null` only if
 * `props.defaultActiveItemId` is `null`. This pattern allows to "stop"
 * by the actual query before navigating to other suggestions as seen on
 * Google or Amazon.
 *
 * @param moveAmount The offset to increment (or decrement) the last index
 * @param baseIndex The current index to compute the next index from
 * @param itemCount The number of items
 * @param defaultActiveItemId The default active index to fallback to
 */
function getNextActiveItemId(moveAmount, baseIndex, itemCount, defaultActiveItemId) {
  if (!itemCount) {
    return null;
  }

  if (moveAmount < 0 && (baseIndex === null || defaultActiveItemId !== null && baseIndex === 0)) {
    return itemCount + moveAmount;
  }

  var numericIndex = (baseIndex === null ? -1 : baseIndex) + moveAmount;

  if (numericIndex <= -1 || numericIndex >= itemCount) {
    return defaultActiveItemId === null ? null : 0;
  }

  return numericIndex;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNormalizedSources": () => (/* binding */ getNormalizedSources)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


function getNormalizedSources(getSources, params) {
  var seenSourceIds = [];
  return Promise.resolve(getSources(params)).then(function (sources) {
    (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.invariant)(Array.isArray(sources), function () {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(_typeof(sources)), ":\n\n").concat(JSON.stringify((0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__.decycle)(sources), null, 2));
    });
    return Promise.all(sources // We allow `undefined` and `false` sources to allow users to use
    // `Boolean(query) && source` (=> `false`).
    // We need to remove these values at this point.
    .filter(function (maybeSource) {
      return Boolean(maybeSource);
    }).map(function (source) {
      (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof source.sourceId === 'string', 'A source must provide a `sourceId` string.');

      if (seenSourceIds.includes(source.sourceId)) {
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(source.sourceId), " is not unique."));
      }

      seenSourceIds.push(source.sourceId);

      var normalizedSource = _objectSpread({
        getItemInputValue: function getItemInputValue(_ref) {
          var state = _ref.state;
          return state.query;
        },
        getItemUrl: function getItemUrl() {
          return undefined;
        },
        onSelect: function onSelect(_ref2) {
          var setIsOpen = _ref2.setIsOpen;
          setIsOpen(false);
        },
        onActive: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__.noop
      }, source);

      return Promise.resolve(normalizedSource);
    }));
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isOrContainsNode": () => (/* binding */ isOrContainsNode)
/* harmony export */ });
function isOrContainsNode(parent, child) {
  return parent === child || parent.contains(child);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSamsung": () => (/* binding */ isSamsung)
/* harmony export */ });
var regex = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function isSamsung(userAgent) {
  return Boolean(userAgent && userAgent.match(regex));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapToAlgoliaResponse": () => (/* binding */ mapToAlgoliaResponse)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mapToAlgoliaResponse(rawResults) {
  var results = rawResults.map(function (result) {
    var _hits;

    return _objectSpread(_objectSpread({}, result), {}, {
      hits: (_hits = result.hits) === null || _hits === void 0 ? void 0 : _hits.map(function (hit) {
        // Bring support for the Insights plugin.
        return _objectSpread(_objectSpread({}, hit), {}, {
          __autocomplete_indexName: result.index,
          __autocomplete_queryID: result.queryID
        });
      })
    });
  });
  return {
    results: results,
    hits: results.map(function (result) {
      return result.hits;
    }).filter(Boolean),
    facetHits: results.map(function (result) {
      var _facetHits;

      return (_facetHits = result.facetHits) === null || _facetHits === void 0 ? void 0 : _facetHits.map(function (facetHit) {
        // Bring support for the highlighting components.
        return {
          label: facetHit.value,
          count: facetHit.count,
          _highlightResult: {
            label: {
              value: facetHit.highlighted
            }
          }
        };
      });
    }).filter(Boolean)
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js":
/*!************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autocomplete": () => (/* binding */ autocomplete)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @algolia/autocomplete-core */ "./node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/createRef.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/debounce.js");
/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");
/* harmony import */ var _createAutocompleteDom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createAutocompleteDom */ "./node_modules/@algolia/autocomplete-js/dist/esm/createAutocompleteDom.js");
/* harmony import */ var _createEffectWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEffectWrapper */ "./node_modules/@algolia/autocomplete-js/dist/esm/createEffectWrapper.js");
/* harmony import */ var _createReactiveWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createReactiveWrapper */ "./node_modules/@algolia/autocomplete-js/dist/esm/createReactiveWrapper.js");
/* harmony import */ var _getDefaultOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getDefaultOptions */ "./node_modules/@algolia/autocomplete-js/dist/esm/getDefaultOptions.js");
/* harmony import */ var _getPanelPlacementStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getPanelPlacementStyle */ "./node_modules/@algolia/autocomplete-js/dist/esm/getPanelPlacementStyle.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./render */ "./node_modules/@algolia/autocomplete-js/dist/esm/render.js");
/* harmony import */ var _userAgents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userAgents */ "./node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeDeep.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/pickBy.js");
var _excluded = ["components"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function autocomplete(options) {
  var _createEffectWrapper = (0,_createEffectWrapper__WEBPACK_IMPORTED_MODULE_1__.createEffectWrapper)(),
      runEffect = _createEffectWrapper.runEffect,
      cleanupEffects = _createEffectWrapper.cleanupEffects,
      runEffects = _createEffectWrapper.runEffects;

  var _createReactiveWrappe = (0,_createReactiveWrapper__WEBPACK_IMPORTED_MODULE_2__.createReactiveWrapper)(),
      reactive = _createReactiveWrappe.reactive,
      runReactives = _createReactiveWrappe.runReactives;

  var hasNoResultsSourceTemplateRef = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.createRef)(false);
  var optionsRef = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.createRef)(options);
  var onStateChangeRef = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.createRef)(undefined);
  var props = reactive(function () {
    return (0,_getDefaultOptions__WEBPACK_IMPORTED_MODULE_4__.getDefaultOptions)(optionsRef.current);
  });
  var isDetached = reactive(function () {
    return props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;
  });
  var autocomplete = reactive(function () {
    return (0,_algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_5__.createAutocomplete)(_objectSpread(_objectSpread({}, props.value.core), {}, {
      onStateChange: function onStateChange(params) {
        var _onStateChangeRef$cur, _props$value$core$onS, _props$value$core;

        hasNoResultsSourceTemplateRef.current = params.state.collections.some(function (collection) {
          return collection.source.templates.noResults;
        });
        (_onStateChangeRef$cur = onStateChangeRef.current) === null || _onStateChangeRef$cur === void 0 ? void 0 : _onStateChangeRef$cur.call(onStateChangeRef, params);
        (_props$value$core$onS = (_props$value$core = props.value.core).onStateChange) === null || _props$value$core$onS === void 0 ? void 0 : _props$value$core$onS.call(_props$value$core, params);
      },
      shouldPanelOpen: optionsRef.current.shouldPanelOpen || function (_ref) {
        var state = _ref.state;

        if (isDetached.value) {
          return true;
        }

        var hasItems = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_6__.getItemsCount)(state) > 0;

        if (!props.value.core.openOnFocus && !state.query) {
          return hasItems;
        }

        var hasNoResultsTemplate = Boolean(hasNoResultsSourceTemplateRef.current || props.value.renderer.renderNoResults);
        return !hasItems && hasNoResultsTemplate || hasItems;
      },
      __autocomplete_metadata: {
        userAgents: _userAgents__WEBPACK_IMPORTED_MODULE_7__.userAgents,
        options: options
      }
    }));
  });
  var lastStateRef = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.createRef)(_objectSpread({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle'
  }, props.value.core.initialState));
  var propGetters = {
    getEnvironmentProps: props.value.renderer.getEnvironmentProps,
    getFormProps: props.value.renderer.getFormProps,
    getInputProps: props.value.renderer.getInputProps,
    getItemProps: props.value.renderer.getItemProps,
    getLabelProps: props.value.renderer.getLabelProps,
    getListProps: props.value.renderer.getListProps,
    getPanelProps: props.value.renderer.getPanelProps,
    getRootProps: props.value.renderer.getRootProps
  };
  var autocompleteScopeApi = {
    setActiveItemId: autocomplete.value.setActiveItemId,
    setQuery: autocomplete.value.setQuery,
    setCollections: autocomplete.value.setCollections,
    setIsOpen: autocomplete.value.setIsOpen,
    setStatus: autocomplete.value.setStatus,
    setContext: autocomplete.value.setContext,
    refresh: autocomplete.value.refresh
  };
  var html = reactive(function () {
    return htm__WEBPACK_IMPORTED_MODULE_0__["default"].bind(props.value.renderer.renderer.createElement);
  });
  var dom = reactive(function () {
    return (0,_createAutocompleteDom__WEBPACK_IMPORTED_MODULE_8__.createAutocompleteDom)({
      autocomplete: autocomplete.value,
      autocompleteScopeApi: autocompleteScopeApi,
      classNames: props.value.renderer.classNames,
      environment: props.value.core.environment,
      isDetached: isDetached.value,
      placeholder: props.value.core.placeholder,
      propGetters: propGetters,
      setIsModalOpen: setIsModalOpen,
      state: lastStateRef.current,
      translations: props.value.renderer.translations
    });
  });

  function setPanelPosition() {
    (0,_utils__WEBPACK_IMPORTED_MODULE_9__.setProperties)(dom.value.panel, {
      style: isDetached.value ? {} : (0,_getPanelPlacementStyle__WEBPACK_IMPORTED_MODULE_10__.getPanelPlacementStyle)({
        panelPlacement: props.value.renderer.panelPlacement,
        container: dom.value.root,
        form: dom.value.form,
        environment: props.value.core.environment
      })
    });
  }

  function scheduleRender(state) {
    lastStateRef.current = state;
    var renderProps = {
      autocomplete: autocomplete.value,
      autocompleteScopeApi: autocompleteScopeApi,
      classNames: props.value.renderer.classNames,
      components: props.value.renderer.components,
      container: props.value.renderer.container,
      html: html.value,
      dom: dom.value,
      panelContainer: isDetached.value ? dom.value.detachedContainer : props.value.renderer.panelContainer,
      propGetters: propGetters,
      state: lastStateRef.current,
      renderer: props.value.renderer.renderer
    };
    var render = !(0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_6__.getItemsCount)(state) && !hasNoResultsSourceTemplateRef.current && props.value.renderer.renderNoResults || props.value.renderer.render;
    (0,_render__WEBPACK_IMPORTED_MODULE_11__.renderSearchBox)(renderProps);
    (0,_render__WEBPACK_IMPORTED_MODULE_11__.renderPanel)(render, renderProps);
  }

  runEffect(function () {
    var environmentProps = autocomplete.value.getEnvironmentProps({
      formElement: dom.value.form,
      panelElement: dom.value.panel,
      inputElement: dom.value.input
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_9__.setProperties)(props.value.core.environment, environmentProps);
    return function () {
      (0,_utils__WEBPACK_IMPORTED_MODULE_9__.setProperties)(props.value.core.environment, Object.keys(environmentProps).reduce(function (acc, key) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, undefined));
      }, {}));
    };
  });
  runEffect(function () {
    var panelContainerElement = isDetached.value ? props.value.core.environment.document.body : props.value.renderer.panelContainer;
    var panelElement = isDetached.value ? dom.value.detachedOverlay : dom.value.panel;

    if (isDetached.value && lastStateRef.current.isOpen) {
      setIsModalOpen(true);
    }

    scheduleRender(lastStateRef.current);
    return function () {
      if (panelContainerElement.contains(panelElement)) {
        panelContainerElement.removeChild(panelElement);
      }
    };
  });
  runEffect(function () {
    var containerElement = props.value.renderer.container;
    containerElement.appendChild(dom.value.root);
    return function () {
      containerElement.removeChild(dom.value.root);
    };
  });
  runEffect(function () {
    var debouncedRender = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_12__.debounce)(function (_ref2) {
      var state = _ref2.state;
      scheduleRender(state);
    }, 0);

    onStateChangeRef.current = function (_ref3) {
      var state = _ref3.state,
          prevState = _ref3.prevState;

      if (isDetached.value && prevState.isOpen !== state.isOpen) {
        setIsModalOpen(state.isOpen);
      } // The outer DOM might have changed since the last time the panel was
      // positioned. The layout might have shifted vertically for instance.
      // It's therefore safer to re-calculate the panel position before opening
      // it again.


      if (!isDetached.value && state.isOpen && !prevState.isOpen) {
        setPanelPosition();
      } // We scroll to the top of the panel whenever the query changes (i.e. new
      // results come in) so that users don't have to.


      if (state.query !== prevState.query) {
        var scrollablePanels = props.value.core.environment.document.querySelectorAll('.aa-Panel--scrollable');
        scrollablePanels.forEach(function (scrollablePanel) {
          if (scrollablePanel.scrollTop !== 0) {
            scrollablePanel.scrollTop = 0;
          }
        });
      }

      debouncedRender({
        state: state
      });
    };

    return function () {
      onStateChangeRef.current = undefined;
    };
  });
  runEffect(function () {
    var onResize = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_12__.debounce)(function () {
      var previousIsDetached = isDetached.value;
      isDetached.value = props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;

      if (previousIsDetached !== isDetached.value) {
        update({});
      } else {
        requestAnimationFrame(setPanelPosition);
      }
    }, 20);
    props.value.core.environment.addEventListener('resize', onResize);
    return function () {
      props.value.core.environment.removeEventListener('resize', onResize);
    };
  });
  runEffect(function () {
    if (!isDetached.value) {
      return function () {};
    }

    function toggleModalClassname(isActive) {
      dom.value.detachedContainer.classList.toggle('aa-DetachedContainer--modal', isActive);
    }

    function onChange(event) {
      toggleModalClassname(event.matches);
    }

    var isModalDetachedMql = props.value.core.environment.matchMedia(getComputedStyle(props.value.core.environment.document.documentElement).getPropertyValue('--aa-detached-modal-media-query'));
    toggleModalClassname(isModalDetachedMql.matches); // Prior to Safari 14, `MediaQueryList` isn't based on `EventTarget`,
    // so we must use `addListener` and `removeListener` to observe media query lists.
    // See https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener

    var hasModernEventListener = Boolean(isModalDetachedMql.addEventListener);
    hasModernEventListener ? isModalDetachedMql.addEventListener('change', onChange) : isModalDetachedMql.addListener(onChange);
    return function () {
      hasModernEventListener ? isModalDetachedMql.removeEventListener('change', onChange) : isModalDetachedMql.removeListener(onChange);
    };
  });
  runEffect(function () {
    requestAnimationFrame(setPanelPosition);
    return function () {};
  });

  function destroy() {
    cleanupEffects();
  }

  function update() {
    var updatedOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    cleanupEffects();

    var _props$value$renderer = props.value.renderer,
        components = _props$value$renderer.components,
        rendererProps = _objectWithoutProperties(_props$value$renderer, _excluded);

    optionsRef.current = (0,_utils__WEBPACK_IMPORTED_MODULE_13__.mergeDeep)(rendererProps, props.value.core, {
      // We need to filter out default components so they can be replaced with
      // a new `renderer`, without getting rid of user components.
      // @MAJOR Deal with registering components with the same name as the
      // default ones. If we disallow overriding default components, we'd just
      // need to pass all `components` here.
      components: (0,_utils__WEBPACK_IMPORTED_MODULE_14__.pickBy)(components, function (_ref4) {
        var value = _ref4.value;
        return !value.hasOwnProperty('__autocomplete_componentName');
      }),
      initialState: lastStateRef.current
    }, updatedOptions);
    runReactives();
    runEffects();
    autocomplete.value.refresh().then(function () {
      scheduleRender(lastStateRef.current);
    });
  }

  function setIsModalOpen(value) {
    requestAnimationFrame(function () {
      var prevValue = props.value.core.environment.document.body.contains(dom.value.detachedOverlay);

      if (value === prevValue) {
        return;
      }

      if (value) {
        props.value.core.environment.document.body.appendChild(dom.value.detachedOverlay);
        props.value.core.environment.document.body.classList.add('aa-Detached');
        dom.value.input.focus();
      } else {
        props.value.core.environment.document.body.removeChild(dom.value.detachedOverlay);
        props.value.core.environment.document.body.classList.remove('aa-Detached');
        autocomplete.value.setQuery('');
        autocomplete.value.refresh();
      }
    });
  }

  return _objectSpread(_objectSpread({}, autocompleteScopeApi), {}, {
    update: update,
    destroy: destroy
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/components/Highlight.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/components/Highlight.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHighlightComponent": () => (/* binding */ createHighlightComponent)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-preset-algolia */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js");

function createHighlightComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;

  function Highlight(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, (0,_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__.parseAlgoliaHitHighlight)({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }

  Highlight.__autocomplete_componentName = 'Highlight';
  return Highlight;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseHighlight.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseHighlight.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createReverseHighlightComponent": () => (/* binding */ createReverseHighlightComponent)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-preset-algolia */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseHighlight.js");

function createReverseHighlightComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;

  function ReverseHighlight(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, (0,_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__.parseAlgoliaHitReverseHighlight)({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }

  ReverseHighlight.__autocomplete_componentName = 'ReverseHighlight';
  return ReverseHighlight;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseSnippet.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseSnippet.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createReverseSnippetComponent": () => (/* binding */ createReverseSnippetComponent)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-preset-algolia */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseSnippet.js");

function createReverseSnippetComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;

  function ReverseSnippet(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, (0,_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__.parseAlgoliaHitReverseSnippet)({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }

  ReverseSnippet.__autocomplete_componentName = 'ReverseSnippet';
  return ReverseSnippet;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/components/Snippet.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/components/Snippet.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSnippetComponent": () => (/* binding */ createSnippetComponent)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-preset-algolia */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js");

function createSnippetComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;

  function Snippet(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, (0,_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__.parseAlgoliaHitSnippet)({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }

  Snippet.__autocomplete_componentName = 'Snippet';
  return Snippet;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/createAutocompleteDom.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/createAutocompleteDom.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAutocompleteDom": () => (/* binding */ createAutocompleteDom)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/SearchIcon.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/ClearIcon.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements */ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/LoadingIcon.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements */ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/Input.js");
/* harmony import */ var _getCreateDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCreateDomElement */ "./node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function createAutocompleteDom(_ref) {
  var autocomplete = _ref.autocomplete,
      autocompleteScopeApi = _ref.autocompleteScopeApi,
      classNames = _ref.classNames,
      environment = _ref.environment,
      isDetached = _ref.isDetached,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Search' : _ref$placeholder,
      propGetters = _ref.propGetters,
      setIsModalOpen = _ref.setIsModalOpen,
      state = _ref.state,
      translations = _ref.translations;
  var createDomElement = (0,_getCreateDomElement__WEBPACK_IMPORTED_MODULE_0__.getCreateDomElement)(environment);
  var rootProps = propGetters.getRootProps(_objectSpread({
    state: state,
    props: autocomplete.getRootProps({})
  }, autocompleteScopeApi));
  var root = createDomElement('div', _objectSpread({
    class: classNames.root
  }, rootProps));
  var detachedContainer = createDomElement('div', {
    class: classNames.detachedContainer,
    onMouseDown: function onMouseDown(event) {
      event.stopPropagation();
    }
  });
  var detachedOverlay = createDomElement('div', {
    class: classNames.detachedOverlay,
    children: [detachedContainer],
    onMouseDown: function onMouseDown() {
      setIsModalOpen(false);
      autocomplete.setIsOpen(false);
    }
  });
  var labelProps = propGetters.getLabelProps(_objectSpread({
    state: state,
    props: autocomplete.getLabelProps({})
  }, autocompleteScopeApi));
  var submitButton = createDomElement('button', {
    class: classNames.submitButton,
    type: 'submit',
    title: translations.submitButtonTitle,
    children: [(0,_elements__WEBPACK_IMPORTED_MODULE_1__.SearchIcon)({
      environment: environment
    })]
  });
  var label = createDomElement('label', _objectSpread({
    class: classNames.label,
    children: [submitButton]
  }, labelProps));
  var clearButton = createDomElement('button', {
    class: classNames.clearButton,
    type: 'reset',
    title: translations.clearButtonTitle,
    children: [(0,_elements__WEBPACK_IMPORTED_MODULE_2__.ClearIcon)({
      environment: environment
    })]
  });
  var loadingIndicator = createDomElement('div', {
    class: classNames.loadingIndicator,
    children: [(0,_elements__WEBPACK_IMPORTED_MODULE_3__.LoadingIcon)({
      environment: environment
    })]
  });
  var input = (0,_elements__WEBPACK_IMPORTED_MODULE_4__.Input)({
    class: classNames.input,
    environment: environment,
    state: state,
    getInputProps: propGetters.getInputProps,
    getInputPropsCore: autocomplete.getInputProps,
    autocompleteScopeApi: autocompleteScopeApi,
    isDetached: isDetached
  });
  var inputWrapperPrefix = createDomElement('div', {
    class: classNames.inputWrapperPrefix,
    children: [label, loadingIndicator]
  });
  var inputWrapperSuffix = createDomElement('div', {
    class: classNames.inputWrapperSuffix,
    children: [clearButton]
  });
  var inputWrapper = createDomElement('div', {
    class: classNames.inputWrapper,
    children: [input]
  });
  var formProps = propGetters.getFormProps(_objectSpread({
    state: state,
    props: autocomplete.getFormProps({
      inputElement: input
    })
  }, autocompleteScopeApi));
  var form = createDomElement('form', _objectSpread({
    class: classNames.form,
    children: [inputWrapperPrefix, inputWrapper, inputWrapperSuffix]
  }, formProps));
  var panelProps = propGetters.getPanelProps(_objectSpread({
    state: state,
    props: autocomplete.getPanelProps({})
  }, autocompleteScopeApi));
  var panel = createDomElement('div', _objectSpread({
    class: classNames.panel
  }, panelProps));

  if (false) {}

  if (isDetached) {
    var detachedSearchButtonIcon = createDomElement('div', {
      class: classNames.detachedSearchButtonIcon,
      children: [(0,_elements__WEBPACK_IMPORTED_MODULE_1__.SearchIcon)({
        environment: environment
      })]
    });
    var detachedSearchButtonPlaceholder = createDomElement('div', {
      class: classNames.detachedSearchButtonPlaceholder,
      textContent: placeholder
    });
    var detachedSearchButton = createDomElement('button', {
      type: 'button',
      class: classNames.detachedSearchButton,
      onClick: function onClick() {
        setIsModalOpen(true);
      },
      children: [detachedSearchButtonIcon, detachedSearchButtonPlaceholder]
    });
    var detachedCancelButton = createDomElement('button', {
      type: 'button',
      class: classNames.detachedCancelButton,
      textContent: translations.detachedCancelButtonText,
      // Prevent `onTouchStart` from closing the panel
      // since it should be initiated by `onClick` only
      onTouchStart: function onTouchStart(event) {
        event.stopPropagation();
      },
      onClick: function onClick() {
        autocomplete.setIsOpen(false);
        setIsModalOpen(false);
      }
    });
    var detachedFormContainer = createDomElement('div', {
      class: classNames.detachedFormContainer,
      children: [form, detachedCancelButton]
    });
    detachedContainer.appendChild(detachedFormContainer);
    root.appendChild(detachedSearchButton);
  } else {
    root.appendChild(form);
  }

  return {
    detachedContainer: detachedContainer,
    detachedOverlay: detachedOverlay,
    inputWrapper: inputWrapper,
    input: input,
    root: root,
    form: form,
    label: label,
    submitButton: submitButton,
    clearButton: clearButton,
    loadingIndicator: loadingIndicator,
    panel: panel
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/createEffectWrapper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/createEffectWrapper.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEffectWrapper": () => (/* binding */ createEffectWrapper)
/* harmony export */ });
function createEffectWrapper() {
  var effects = [];
  var cleanups = [];

  function runEffect(fn) {
    effects.push(fn);
    var effectCleanup = fn();
    cleanups.push(effectCleanup);
  }

  return {
    runEffect: runEffect,
    cleanupEffects: function cleanupEffects() {
      var currentCleanups = cleanups;
      cleanups = [];
      currentCleanups.forEach(function (cleanup) {
        cleanup();
      });
    },
    runEffects: function runEffects() {
      var currentEffects = effects;
      effects = [];
      currentEffects.forEach(function (effect) {
        runEffect(effect);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/createReactiveWrapper.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/createReactiveWrapper.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createReactiveWrapper": () => (/* binding */ createReactiveWrapper)
/* harmony export */ });
function createReactiveWrapper() {
  var reactives = [];
  return {
    reactive: function reactive(value) {
      var current = value();
      var reactive = {
        _fn: value,
        _ref: {
          current: current
        },

        get value() {
          return this._ref.current;
        },

        set value(value) {
          this._ref.current = value;
        }

      };
      reactives.push(reactive);
      return reactive;
    },
    runReactives: function runReactives() {
      reactives.forEach(function (value) {
        value._ref.current = value._fn();
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/ClearIcon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/elements/ClearIcon.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClearIcon": () => (/* binding */ ClearIcon)
/* harmony export */ });
var ClearIcon = function ClearIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-ClearIcon');
  element.setAttribute('viewBox', '0 0 24 24');
  element.setAttribute('width', '18');
  element.setAttribute('height', '18');
  element.setAttribute('fill', 'currentColor');
  var path = environment.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z');
  element.appendChild(path);
  return element;
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/Input.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/elements/Input.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _getCreateDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getCreateDomElement */ "./node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js");
var _excluded = ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "isDetached", "state"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Input = function Input(_ref) {
  var autocompleteScopeApi = _ref.autocompleteScopeApi,
      environment = _ref.environment,
      classNames = _ref.classNames,
      getInputProps = _ref.getInputProps,
      getInputPropsCore = _ref.getInputPropsCore,
      isDetached = _ref.isDetached,
      state = _ref.state,
      props = _objectWithoutProperties(_ref, _excluded);

  var createDomElement = (0,_getCreateDomElement__WEBPACK_IMPORTED_MODULE_0__.getCreateDomElement)(environment);
  var element = createDomElement('input', props);
  var inputProps = getInputProps(_objectSpread({
    state: state,
    props: getInputPropsCore({
      inputElement: element
    }),
    inputElement: element
  }, autocompleteScopeApi));
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setProperties)(element, _objectSpread(_objectSpread({}, inputProps), {}, {
    onKeyDown: function onKeyDown(event) {
      // In detached mode we don't want to close the panel when hittin `Tab`.
      if (isDetached && event.key === 'Tab') {
        return;
      }

      inputProps.onKeyDown(event);
    }
  }));
  return element;
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/LoadingIcon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/elements/LoadingIcon.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingIcon": () => (/* binding */ LoadingIcon)
/* harmony export */ });
var LoadingIcon = function LoadingIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-LoadingIcon');
  element.setAttribute('viewBox', '0 0 100 100');
  element.setAttribute('width', '20');
  element.setAttribute('height', '20');
  element.innerHTML = "<circle\n  cx=\"50\"\n  cy=\"50\"\n  fill=\"none\"\n  r=\"35\"\n  stroke=\"currentColor\"\n  stroke-dasharray=\"164.93361431346415 56.97787143782138\"\n  stroke-width=\"6\"\n>\n  <animateTransform\n    attributeName=\"transform\"\n    type=\"rotate\"\n    repeatCount=\"indefinite\"\n    dur=\"1s\"\n    values=\"0 50 50;90 50 50;180 50 50;360 50 50\"\n    keyTimes=\"0;0.40;0.65;1\"\n  />\n</circle>";
  return element;
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/SearchIcon.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/elements/SearchIcon.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchIcon": () => (/* binding */ SearchIcon)
/* harmony export */ });
var SearchIcon = function SearchIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-SubmitIcon');
  element.setAttribute('viewBox', '0 0 24 24');
  element.setAttribute('width', '20');
  element.setAttribute('height', '20');
  element.setAttribute('fill', 'currentColor');
  var path = environment.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z');
  element.appendChild(path);
  return element;
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCreateDomElement": () => (/* binding */ getCreateDomElement)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js");
var _excluded = ["children"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function getCreateDomElement(environment) {
  return function createDomElement(tagName, _ref) {
    var _ref$children = _ref.children,
        children = _ref$children === void 0 ? [] : _ref$children,
        props = _objectWithoutProperties(_ref, _excluded);

    var element = environment.document.createElement(tagName);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setProperties)(element, props);
    element.append.apply(element, _toConsumableArray(children));
    return element;
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/getDefaultOptions.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/getDefaultOptions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./node_modules/@algolia/autocomplete-js/dist/esm/components/Highlight.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseHighlight.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseSnippet.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./node_modules/@algolia/autocomplete-js/dist/esm/components/Snippet.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/getHTMLElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeClassNames.js");
var _excluded = ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var defaultClassNames = {
  clearButton: 'aa-ClearButton',
  detachedCancelButton: 'aa-DetachedCancelButton',
  detachedContainer: 'aa-DetachedContainer',
  detachedFormContainer: 'aa-DetachedFormContainer',
  detachedOverlay: 'aa-DetachedOverlay',
  detachedSearchButton: 'aa-DetachedSearchButton',
  detachedSearchButtonIcon: 'aa-DetachedSearchButtonIcon',
  detachedSearchButtonPlaceholder: 'aa-DetachedSearchButtonPlaceholder',
  form: 'aa-Form',
  input: 'aa-Input',
  inputWrapper: 'aa-InputWrapper',
  inputWrapperPrefix: 'aa-InputWrapperPrefix',
  inputWrapperSuffix: 'aa-InputWrapperSuffix',
  item: 'aa-Item',
  label: 'aa-Label',
  list: 'aa-List',
  loadingIndicator: 'aa-LoadingIndicator',
  panel: 'aa-Panel',
  panelLayout: 'aa-PanelLayout aa-Panel--scrollable',
  root: 'aa-Autocomplete',
  source: 'aa-Source',
  sourceFooter: 'aa-SourceFooter',
  sourceHeader: 'aa-SourceHeader',
  sourceNoResults: 'aa-SourceNoResults',
  submitButton: 'aa-SubmitButton'
};

var defaultRender = function defaultRender(_ref, root) {
  var children = _ref.children,
      render = _ref.render;
  render(children, root);
};

var defaultRenderer = {
  createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
  Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
  render: preact__WEBPACK_IMPORTED_MODULE_0__.render
};
function getDefaultOptions(options) {
  var _core$id;

  var classNames = options.classNames,
      container = options.container,
      getEnvironmentProps = options.getEnvironmentProps,
      getFormProps = options.getFormProps,
      getInputProps = options.getInputProps,
      getItemProps = options.getItemProps,
      getLabelProps = options.getLabelProps,
      getListProps = options.getListProps,
      getPanelProps = options.getPanelProps,
      getRootProps = options.getRootProps,
      panelContainer = options.panelContainer,
      panelPlacement = options.panelPlacement,
      render = options.render,
      renderNoResults = options.renderNoResults,
      renderer = options.renderer,
      detachedMediaQuery = options.detachedMediaQuery,
      components = options.components,
      translations = options.translations,
      core = _objectWithoutProperties(options, _excluded);
  /* eslint-disable no-restricted-globals */


  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */

  var containerElement = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getHTMLElement)(environment, container);
  (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_2__.invariant)(containerElement.tagName !== 'INPUT', 'The `container` option does not support `input` elements. You need to change the container to a `div`.');
   true ? (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.warn)(!(render && renderer && !(renderer !== null && renderer !== void 0 && renderer.render)), "You provided the `render` option but did not provide a `renderer.render`. Since v1.6.0, you can provide a `render` function directly in `renderer`." + "\nTo get rid of this warning, do any of the following depending on your use case." + "\n- If you are using the `render` option only to override Autocomplete's default `render` function, pass the `render` function into `renderer` and remove the `render` option." + '\n- If you are using the `render` option to customize the layout, pass your `render` function into `renderer` and use it from the provided parameters of the `render` option.' + '\n- If you are using the `render` option to work with React 18, pass an empty `render` function into `renderer`.' + '\nSee https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-render') : 0;
   true ? (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_3__.warn)(!renderer || render || renderer.Fragment && renderer.createElement && renderer.render, "You provided an incomplete `renderer` (missing: ".concat([!(renderer !== null && renderer !== void 0 && renderer.createElement) && '`renderer.createElement`', !(renderer !== null && renderer !== void 0 && renderer.Fragment) && '`renderer.Fragment`', !(renderer !== null && renderer !== void 0 && renderer.render) && '`renderer.render`'].filter(Boolean).join(', '), "). This can cause rendering issues.") + '\nSee https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-renderer') : 0;

  var defaultedRenderer = _objectSpread(_objectSpread({}, defaultRenderer), renderer);

  var defaultComponents = {
    Highlight: (0,_components__WEBPACK_IMPORTED_MODULE_4__.createHighlightComponent)(defaultedRenderer),
    ReverseHighlight: (0,_components__WEBPACK_IMPORTED_MODULE_5__.createReverseHighlightComponent)(defaultedRenderer),
    ReverseSnippet: (0,_components__WEBPACK_IMPORTED_MODULE_6__.createReverseSnippetComponent)(defaultedRenderer),
    Snippet: (0,_components__WEBPACK_IMPORTED_MODULE_7__.createSnippetComponent)(defaultedRenderer)
  };
  var defaultTranslations = {
    clearButtonTitle: 'Clear',
    detachedCancelButtonText: 'Cancel',
    submitButtonTitle: 'Submit'
  };
  return {
    renderer: {
      classNames: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.mergeClassNames)(defaultClassNames, classNames !== null && classNames !== void 0 ? classNames : {}),
      container: containerElement,
      getEnvironmentProps: getEnvironmentProps !== null && getEnvironmentProps !== void 0 ? getEnvironmentProps : function (_ref2) {
        var props = _ref2.props;
        return props;
      },
      getFormProps: getFormProps !== null && getFormProps !== void 0 ? getFormProps : function (_ref3) {
        var props = _ref3.props;
        return props;
      },
      getInputProps: getInputProps !== null && getInputProps !== void 0 ? getInputProps : function (_ref4) {
        var props = _ref4.props;
        return props;
      },
      getItemProps: getItemProps !== null && getItemProps !== void 0 ? getItemProps : function (_ref5) {
        var props = _ref5.props;
        return props;
      },
      getLabelProps: getLabelProps !== null && getLabelProps !== void 0 ? getLabelProps : function (_ref6) {
        var props = _ref6.props;
        return props;
      },
      getListProps: getListProps !== null && getListProps !== void 0 ? getListProps : function (_ref7) {
        var props = _ref7.props;
        return props;
      },
      getPanelProps: getPanelProps !== null && getPanelProps !== void 0 ? getPanelProps : function (_ref8) {
        var props = _ref8.props;
        return props;
      },
      getRootProps: getRootProps !== null && getRootProps !== void 0 ? getRootProps : function (_ref9) {
        var props = _ref9.props;
        return props;
      },
      panelContainer: panelContainer ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getHTMLElement)(environment, panelContainer) : environment.document.body,
      panelPlacement: panelPlacement !== null && panelPlacement !== void 0 ? panelPlacement : 'input-wrapper-width',
      render: render !== null && render !== void 0 ? render : defaultRender,
      renderNoResults: renderNoResults,
      renderer: defaultedRenderer,
      detachedMediaQuery: detachedMediaQuery !== null && detachedMediaQuery !== void 0 ? detachedMediaQuery : getComputedStyle(environment.document.documentElement).getPropertyValue('--aa-detached-media-query'),
      components: _objectSpread(_objectSpread({}, defaultComponents), components),
      translations: _objectSpread(_objectSpread({}, defaultTranslations), translations)
    },
    core: _objectSpread(_objectSpread({}, core), {}, {
      id: (_core$id = core.id) !== null && _core$id !== void 0 ? _core$id : (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_9__.generateAutocompleteId)(),
      environment: environment
    })
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/getPanelPlacementStyle.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/getPanelPlacementStyle.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPanelPlacementStyle": () => (/* binding */ getPanelPlacementStyle)
/* harmony export */ });
function getPanelPlacementStyle(_ref) {
  var panelPlacement = _ref.panelPlacement,
      container = _ref.container,
      form = _ref.form,
      environment = _ref.environment;
  var containerRect = container.getBoundingClientRect(); // Some browsers have specificities to retrieve the document scroll position.
  // See https://stackoverflow.com/a/28633515/9940315

  var scrollTop = environment.pageYOffset || environment.document.documentElement.scrollTop || environment.document.body.scrollTop || 0;
  var top = scrollTop + containerRect.top + containerRect.height;

  switch (panelPlacement) {
    case 'start':
      {
        return {
          top: top,
          left: containerRect.left
        };
      }

    case 'end':
      {
        return {
          top: top,
          right: environment.document.documentElement.clientWidth - (containerRect.left + containerRect.width)
        };
      }

    case 'full-width':
      {
        return {
          top: top,
          left: 0,
          right: 0,
          width: 'unset',
          maxWidth: 'unset'
        };
      }

    case 'input-wrapper-width':
      {
        var formRect = form.getBoundingClientRect();
        return {
          top: top,
          left: formRect.left,
          right: environment.document.documentElement.clientWidth - (formRect.left + formRect.width),
          width: 'unset',
          maxWidth: 'unset'
        };
      }

    default:
      {
        throw new Error("[Autocomplete] The `panelPlacement` value ".concat(JSON.stringify(panelPlacement), " is not valid."));
      }
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/render.js":
/*!******************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/render.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPanel": () => (/* binding */ renderPanel),
/* harmony export */   "renderSearchBox": () => (/* binding */ renderSearchBox)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx renderer.createElement */

function renderSearchBox(_ref) {
  var autocomplete = _ref.autocomplete,
      autocompleteScopeApi = _ref.autocompleteScopeApi,
      dom = _ref.dom,
      propGetters = _ref.propGetters,
      state = _ref.state;
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setPropertiesWithoutEvents)(dom.root, propGetters.getRootProps(_objectSpread({
    state: state,
    props: autocomplete.getRootProps({})
  }, autocompleteScopeApi)));
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setPropertiesWithoutEvents)(dom.input, propGetters.getInputProps(_objectSpread({
    state: state,
    props: autocomplete.getInputProps({
      inputElement: dom.input
    }),
    inputElement: dom.input
  }, autocompleteScopeApi)));
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setProperties)(dom.label, {
    hidden: state.status === 'stalled'
  });
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setProperties)(dom.loadingIndicator, {
    hidden: state.status !== 'stalled'
  });
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setProperties)(dom.clearButton, {
    hidden: !state.query
  });
}
function renderPanel(render, _ref2) {
  var autocomplete = _ref2.autocomplete,
      autocompleteScopeApi = _ref2.autocompleteScopeApi,
      classNames = _ref2.classNames,
      html = _ref2.html,
      dom = _ref2.dom,
      panelContainer = _ref2.panelContainer,
      propGetters = _ref2.propGetters,
      state = _ref2.state,
      components = _ref2.components,
      renderer = _ref2.renderer;

  if (!state.isOpen) {
    if (panelContainer.contains(dom.panel)) {
      panelContainer.removeChild(dom.panel);
    }

    return;
  } // We add the panel element to the DOM when it's not yet appended and that the
  // items are fetched.


  if (!panelContainer.contains(dom.panel) && state.status !== 'loading') {
    panelContainer.appendChild(dom.panel);
  }

  dom.panel.classList.toggle('aa-Panel--stalled', state.status === 'stalled');
  var sections = state.collections.filter(function (_ref3) {
    var source = _ref3.source,
        items = _ref3.items;
    return source.templates.noResults || items.length > 0;
  }).map(function (_ref4, sourceIndex) {
    var source = _ref4.source,
        items = _ref4.items;
    return renderer.createElement("section", {
      key: sourceIndex,
      className: classNames.source,
      "data-autocomplete-source-id": source.sourceId
    }, source.templates.header && renderer.createElement("div", {
      className: classNames.sourceHeader
    }, source.templates.header({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      items: items,
      source: source,
      state: state,
      html: html
    })), source.templates.noResults && items.length === 0 ? renderer.createElement("div", {
      className: classNames.sourceNoResults
    }, source.templates.noResults({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      source: source,
      state: state,
      html: html
    })) : renderer.createElement("ul", _extends({
      className: classNames.list
    }, propGetters.getListProps(_objectSpread({
      state: state,
      props: autocomplete.getListProps({})
    }, autocompleteScopeApi))), items.map(function (item) {
      var itemProps = autocomplete.getItemProps({
        item: item,
        source: source
      });
      return renderer.createElement("li", _extends({
        key: itemProps.id,
        className: classNames.item
      }, propGetters.getItemProps(_objectSpread({
        state: state,
        props: itemProps
      }, autocompleteScopeApi))), source.templates.item({
        components: components,
        createElement: renderer.createElement,
        Fragment: renderer.Fragment,
        item: item,
        state: state,
        html: html
      }));
    })), source.templates.footer && renderer.createElement("div", {
      className: classNames.sourceFooter
    }, source.templates.footer({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      items: items,
      source: source,
      state: state,
      html: html
    })));
  });
  var children = renderer.createElement(renderer.Fragment, null, renderer.createElement("div", {
    className: classNames.panelLayout
  }, sections), renderer.createElement("div", {
    className: "aa-GradientBottom"
  }));
  var elements = sections.reduce(function (acc, current) {
    acc[current.props['data-autocomplete-source-id']] = current;
    return acc;
  }, {});
  render(_objectSpread(_objectSpread({
    children: children,
    state: state,
    sections: sections,
    elements: elements
  }, renderer), {}, {
    components: components,
    html: html
  }, autocompleteScopeApi), dom.panel);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAgents": () => (/* binding */ userAgents)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/version.js");

var userAgents = [{
  segment: 'autocomplete-js',
  version: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.version
}];

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/getHTMLElement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/getHTMLElement.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHTMLElement": () => (/* binding */ getHTMLElement)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js");

function getHTMLElement(environment, value) {
  if (typeof value === 'string') {
    var element = environment.document.querySelector(value);
    (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.invariant)(element !== null, "The element ".concat(JSON.stringify(value), " is not in the document."));
    return element;
  }

  return value;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeClassNames.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeClassNames.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeClassNames": () => (/* binding */ mergeClassNames)
/* harmony export */ });
function mergeClassNames() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.reduce(function (acc, current) {
    Object.keys(current).forEach(function (key) {
      var accValue = acc[key];
      var currentValue = current[key];

      if (accValue !== currentValue) {
        acc[key] = [accValue, currentValue].filter(Boolean).join(' ');
      }
    });
    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeDeep.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeDeep.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeDeep": () => (/* binding */ mergeDeep)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var isPlainObject = function isPlainObject(value) {
  return value && _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Object]';
};

function mergeDeep() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.reduce(function (acc, current) {
    Object.keys(current).forEach(function (key) {
      var accValue = acc[key];
      var currentValue = current[key];

      if (Array.isArray(accValue) && Array.isArray(currentValue)) {
        acc[key] = accValue.concat.apply(accValue, _toConsumableArray(currentValue));
      } else if (isPlainObject(accValue) && isPlainObject(currentValue)) {
        acc[key] = mergeDeep(accValue, currentValue);
      } else {
        acc[key] = currentValue;
      }
    });
    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/pickBy.js":
/*!************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/pickBy.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pickBy": () => (/* binding */ pickBy)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function pickBy(obj, predicate) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (predicate({
      key: key,
      value: value
    })) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, value));
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setProperties": () => (/* binding */ setProperties),
/* harmony export */   "setPropertiesWithoutEvents": () => (/* binding */ setPropertiesWithoutEvents),
/* harmony export */   "setProperty": () => (/* binding */ setProperty)
/* harmony export */ });
/* eslint-disable */

/**
 * Touch-specific event aliases
 *
 * See https://w3c.github.io/touch-events/#extensions-to-the-globaleventhandlers-mixin
 */
var TOUCH_EVENTS_ALIASES = ['ontouchstart', 'ontouchend', 'ontouchmove', 'ontouchcancel'];
/*
 * Taken from Preact
 *
 * See https://github.com/preactjs/preact/blob/6ab49d9020740127577bf4af66bf63f4af7f9fee/src/diff/props.js#L58-L151
 */

function setStyle(style, key, value) {
  if (value === null) {
    style[key] = '';
  } else if (typeof value !== 'number') {
    style[key] = value;
  } else {
    style[key] = value + 'px';
  }
}
/**
 * Proxy an event to hooked event handlers
 */


function eventProxy(event) {
  this._listeners[event.type](event);
}
/**
 * Set a property value on a DOM node
 */


function setProperty(dom, name, value) {
  var useCapture;
  var nameLower;
  var oldValue = dom[name];

  if (name === 'style') {
    if (typeof value == 'string') {
      dom.style = value;
    } else {
      if (value === null) {
        dom.style = '';
      } else {
        for (name in value) {
          if (!oldValue || value[name] !== oldValue[name]) {
            setStyle(dom.style, name, value[name]);
          }
        }
      }
    }
  } // Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
  else if (name[0] === 'o' && name[1] === 'n') {
    useCapture = name !== (name = name.replace(/Capture$/, ''));
    nameLower = name.toLowerCase();
    if (nameLower in dom || TOUCH_EVENTS_ALIASES.includes(nameLower)) name = nameLower;
    name = name.slice(2);
    if (!dom._listeners) dom._listeners = {};
    dom._listeners[name] = value;

    if (value) {
      if (!oldValue) dom.addEventListener(name, eventProxy, useCapture);
    } else {
      dom.removeEventListener(name, eventProxy, useCapture);
    }
  } else if (name !== 'list' && name !== 'tagName' && // HTMLButtonElement.form and HTMLInputElement.form are read-only but can be set using
  // setAttribute
  name !== 'form' && name !== 'type' && name !== 'size' && name !== 'download' && name !== 'href' && name in dom) {
    dom[name] = value == null ? '' : value;
  } else if (typeof value != 'function' && name !== 'dangerouslySetInnerHTML') {
    if (value == null || value === false && // ARIA-attributes have a different notion of boolean values.
    // The value `false` is different from the attribute not
    // existing on the DOM, so we can't remove it. For non-boolean
    // ARIA-attributes we could treat false as a removal, but the
    // amount of exceptions would cost us too many bytes. On top of
    // that other VDOM frameworks also always stringify `false`.
    !/^ar/.test(name)) {
      dom.removeAttribute(name);
    } else {
      dom.setAttribute(name, value);
    }
  }
}

function getNormalizedName(name) {
  switch (name) {
    case 'onChange':
      return 'onInput';

    default:
      return name;
  }
}

function setProperties(dom, props) {
  for (var name in props) {
    setProperty(dom, getNormalizedName(name), props[name]);
  }
}
function setPropertiesWithoutEvents(dom, props) {
  for (var name in props) {
    if (!(name[0] === 'o' && name[1] === 'n')) {
      setProperty(dom, getNormalizedName(name), props[name]);
    }
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HIGHLIGHT_POST_TAG": () => (/* binding */ HIGHLIGHT_POST_TAG),
/* harmony export */   "HIGHLIGHT_PRE_TAG": () => (/* binding */ HIGHLIGHT_PRE_TAG)
/* harmony export */ });
var HIGHLIGHT_PRE_TAG = '__aa-highlight__';
var HIGHLIGHT_POST_TAG = '__/aa-highlight__';

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/isPartHighlighted.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/isPartHighlighted.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPartHighlighted": () => (/* binding */ isPartHighlighted)
/* harmony export */ });
var htmlEscapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};
var hasAlphanumeric = new RegExp(/\w/i);
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);

function unescape(value) {
  return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function (character) {
    return htmlEscapes[character];
  }) : value;
}

function isPartHighlighted(parts, i) {
  var _parts, _parts2;

  var current = parts[i];
  var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
  var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;

  if (!hasAlphanumeric.test(unescape(current.value)) && isPreviousHighlighted === isNextHighlighted) {
    return isPreviousHighlighted;
  }

  return current.isHighlighted;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseAlgoliaHitHighlight": () => (/* binding */ parseAlgoliaHitHighlight)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js");
/* harmony import */ var _parseAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseAttribute */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function parseAlgoliaHitHighlight(_ref) {
  var hit = _ref.hit,
      attribute = _ref.attribute;
  var path = Array.isArray(attribute) ? attribute : [attribute];
  var highlightedValue = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByPath)(hit, ['_highlightResult'].concat(_toConsumableArray(path), ['value']));

  if (typeof highlightedValue !== 'string') {
     true ? (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__.warn)(false, "The attribute \"".concat(path.join('.'), "\" described by the path ").concat(JSON.stringify(path), " does not exist on the hit. Did you set it in `attributesToHighlight`?") + '\nSee https://www.algolia.com/doc/api-reference/api-parameters/attributesToHighlight/') : 0;
    highlightedValue = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByPath)(hit, path) || '';
  }

  return (0,_parseAttribute__WEBPACK_IMPORTED_MODULE_2__.parseAttribute)({
    highlightedValue: highlightedValue
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseHighlight.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseHighlight.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseAlgoliaHitReverseHighlight": () => (/* binding */ parseAlgoliaHitReverseHighlight)
/* harmony export */ });
/* harmony import */ var _parseAlgoliaHitHighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseAlgoliaHitHighlight */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js");
/* harmony import */ var _reverseHighlightedParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverseHighlightedParts */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js");


function parseAlgoliaHitReverseHighlight(props) {
  return (0,_reverseHighlightedParts__WEBPACK_IMPORTED_MODULE_0__.reverseHighlightedParts)((0,_parseAlgoliaHitHighlight__WEBPACK_IMPORTED_MODULE_1__.parseAlgoliaHitHighlight)(props));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseSnippet.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseSnippet.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseAlgoliaHitReverseSnippet": () => (/* binding */ parseAlgoliaHitReverseSnippet)
/* harmony export */ });
/* harmony import */ var _parseAlgoliaHitSnippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseAlgoliaHitSnippet */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js");
/* harmony import */ var _reverseHighlightedParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverseHighlightedParts */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js");


function parseAlgoliaHitReverseSnippet(props) {
  return (0,_reverseHighlightedParts__WEBPACK_IMPORTED_MODULE_0__.reverseHighlightedParts)((0,_parseAlgoliaHitSnippet__WEBPACK_IMPORTED_MODULE_1__.parseAlgoliaHitSnippet)(props));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseAlgoliaHitSnippet": () => (/* binding */ parseAlgoliaHitSnippet)
/* harmony export */ });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js");
/* harmony import */ var _parseAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseAttribute */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function parseAlgoliaHitSnippet(_ref) {
  var hit = _ref.hit,
      attribute = _ref.attribute;
  var path = Array.isArray(attribute) ? attribute : [attribute];
  var highlightedValue = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByPath)(hit, ['_snippetResult'].concat(_toConsumableArray(path), ['value']));

  if (typeof highlightedValue !== 'string') {
     true ? (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__.warn)(false, "The attribute \"".concat(path.join('.'), "\" described by the path ").concat(JSON.stringify(path), " does not exist on the hit. Did you set it in `attributesToSnippet`?") + '\nSee https://www.algolia.com/doc/api-reference/api-parameters/attributesToSnippet/') : 0;
    highlightedValue = (0,_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__.getAttributeValueByPath)(hit, path) || '';
  }

  return (0,_parseAttribute__WEBPACK_IMPORTED_MODULE_2__.parseAttribute)({
    highlightedValue: highlightedValue
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseAttribute": () => (/* binding */ parseAttribute)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js");


/**
 * Creates a data structure that allows to concatenate similar highlighting
 * parts in a single value.
 */
function createAttributeSet() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = initialValue;
  return {
    get: function get() {
      return value;
    },
    add: function add(part) {
      var lastPart = value[value.length - 1];

      if ((lastPart === null || lastPart === void 0 ? void 0 : lastPart.isHighlighted) === part.isHighlighted) {
        value[value.length - 1] = {
          value: lastPart.value + part.value,
          isHighlighted: lastPart.isHighlighted
        };
      } else {
        value.push(part);
      }
    }
  };
}

function parseAttribute(_ref) {
  var highlightedValue = _ref.highlightedValue;
  var preTagParts = highlightedValue.split(_constants__WEBPACK_IMPORTED_MODULE_0__.HIGHLIGHT_PRE_TAG);
  var firstValue = preTagParts.shift();
  var parts = createAttributeSet(firstValue ? [{
    value: firstValue,
    isHighlighted: false
  }] : []);
  preTagParts.forEach(function (part) {
    var postTagParts = part.split(_constants__WEBPACK_IMPORTED_MODULE_0__.HIGHLIGHT_POST_TAG);
    parts.add({
      value: postTagParts[0],
      isHighlighted: true
    });

    if (postTagParts[1] !== '') {
      parts.add({
        value: postTagParts[1],
        isHighlighted: false
      });
    }
  });
  return parts.get();
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reverseHighlightedParts": () => (/* binding */ reverseHighlightedParts)
/* harmony export */ });
/* harmony import */ var _isPartHighlighted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPartHighlighted */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/isPartHighlighted.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function reverseHighlightedParts(parts) {
  // We don't want to highlight the whole word when no parts match.
  if (!parts.some(function (part) {
    return part.isHighlighted;
  })) {
    return parts.map(function (part) {
      return _objectSpread(_objectSpread({}, part), {}, {
        isHighlighted: false
      });
    });
  }

  return parts.map(function (part, i) {
    return _objectSpread(_objectSpread({}, part), {}, {
      isHighlighted: !(0,_isPartHighlighted__WEBPACK_IMPORTED_MODULE_0__.isPartHighlighted)(parts, i)
    });
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/createRef.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/createRef.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRef": () => (/* binding */ createRef)
/* harmony export */ });
function createRef(initialValue) {
  return {
    current: initialValue
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/debounce.js":
/*!************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/debounce.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn, time) {
  var timerId = undefined;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(function () {
      return fn.apply(void 0, args);
    }, time);
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decycle": () => (/* binding */ decycle)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Decycles objects with circular references.
 * This is used to print cyclic structures in development environment only.
 */
function decycle(obj) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if ( false || !obj || _typeof(obj) !== 'object') {
    return obj;
  }

  if (seen.has(obj)) {
    return '[Circular]';
  }

  var newSeen = seen.add(obj);

  if (Array.isArray(obj)) {
    return obj.map(function (x) {
      return decycle(x, newSeen);
    });
  }

  return Object.fromEntries(Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return [key, decycle(value, newSeen)];
  }));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flatten": () => (/* binding */ flatten)
/* harmony export */ });
function flatten(values) {
  return values.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateAutocompleteId": () => (/* binding */ generateAutocompleteId)
/* harmony export */ });
var autocompleteId = 0;
function generateAutocompleteId() {
  return "autocomplete-".concat(autocompleteId++);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAttributeValueByPath": () => (/* binding */ getAttributeValueByPath)
/* harmony export */ });
function getAttributeValueByPath(record, path) {
  return path.reduce(function (current, key) {
    return current && current[key];
  }, record);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItemsCount": () => (/* binding */ getItemsCount)
/* harmony export */ });
function getItemsCount(state) {
  if (state.collections.length === 0) {
    return 0;
  }

  return state.collections.reduce(function (sum, collection) {
    return sum + collection.items.length;
  }, 0);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invariant": () => (/* binding */ invariant)
/* harmony export */ });
/**
 * Throws an error if the condition is not met in development mode.
 * This is used to make development a better experience to provide guidance as
 * to where the error comes from.
 */
function invariant(condition, message) {
  if (false) {}

  if (!condition) {
    throw new Error("[Autocomplete] ".concat(typeof message === 'function' ? message() : message));
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
var noop = function noop() {};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAgents": () => (/* binding */ userAgents)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/@algolia/autocomplete-shared/dist/esm/version.js");

var userAgents = [{
  segment: 'autocomplete-core',
  version: _version__WEBPACK_IMPORTED_MODULE_0__.version
}];

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/version.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/version.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
var version = '1.7.1';

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js":
/*!********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "warnCache": () => (/* binding */ warnCache)
/* harmony export */ });
var warnCache = {
  current: {}
};
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */

function warn(condition, message) {
  if (false) {}

  if (condition) {
    return;
  }

  var sanitizedMessage = message.trim();
  var hasAlreadyPrinted = warnCache.current[sanitizedMessage];

  if (!hasAlreadyPrinted) {
    warnCache.current[sanitizedMessage] = true; // eslint-disable-next-line no-console

    console.warn("[Autocomplete] ".concat(sanitizedMessage));
  }
}

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ (() => {

var cart = JSON.parse(sessionStorage.getItem('cart'));

function addToCart(item_id) {
  if (!cart) {
    cart = [];
  }

  cart.push(item_id);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  document.cookie = "cart=" + cart;
}

function removeFromCart(item_id) {
  cart.location.reload();
  document.cookie = "cart=" + cart;
}

/***/ }),

/***/ "./src/js/livesearch.js":
/*!******************************!*\
  !*** ./src/js/livesearch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _algolia_autocomplete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-js */ "./node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js");
/* harmony import */ var _algolia_autocomplete_theme_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-theme-classic */ "./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var items = [];
(0,_algolia_autocomplete_js__WEBPACK_IMPORTED_MODULE_1__.autocomplete)({
  container: '#autocomplete',
  placeholder: 'Поиск...',
  getSources: function getSources(_ref) {
    var query = _ref.query;
    return [{
      sourceId: 'products',
      getItems: function getItems() {
        fetch(document.location.origin + '/lab10/search?term=' + query).then(function (response) {
          if (response.ok) {
            items = response.json();
          } else {
            return Promise.reject(response);
          }
        });
        return items;
      },
      templates: {
        item: function item(_ref2) {
          var item = _ref2.item,
              components = _ref2.components,
              html = _ref2.html;
          return html(_templateObject || (_templateObject = _taggedTemplateLiteral(["<div class=\"aa-ItemWrapper\">\n                        <div class=\"aa-ItemContent\">\n                            <div class=\"aa-ItemIcon aa-ItemIcon--alignTop\">\n                                <img\n                                    src=\"assets/images/", "\"\n                                    alt=\"", "\"\n                                    width=\"40\"\n                                    height=\"40\"\n                                />\n                            </div>\n                            <div class=\"aa-ItemContentBody\">\n                                <div class=\"aa-ItemContentTitle\">\n                                    ", "\n                                </div>\n                                <div class=\"aa-ItemContentDescription\">\n                                    ", "\n                                </div>\n                            </div>\n                            <div class=\"aa-itemActions\">\n                                <button\n                                    class=\"aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly\"\n                                    type=\"button\"\n                                    title=\"\u0412\u044B\u0431\u0440\u0430\u0442\u044C\"\n                                >\n                                    <svg\n                                        viewBox=\"0 0 24 24\"\n                                        width=\"20\"\n                                        height=\"20\"\n                                        fill=\"currentColor\"\n                                    >\n                                        <path\n                                            d=\"M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z\"\n                                        />\n                                    </svg>\n                                </button>\n                                <button\n                                    class=\"aa-ItemActionButton\"\n                                    type=\"button\"\n                                    title=\"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443\"\n                                >\n                                    <svg\n                                        viewBox=\"0 0 24 24\"\n                                        width=\"18\"\n                                        height=\"18\"\n                                        fill=\"currentColor\"\n                                    >\n                                        <path\n                                            d=\"M19 5h-14l1.5-2h11zM21.794 5.392l-2.994-3.992c-0.196-0.261-0.494-0.399-0.8-0.4h-12c-0.326 0-0.616 0.156-0.8 0.4l-2.994 3.992c-0.043 0.056-0.081 0.117-0.111 0.182-0.065 0.137-0.096 0.283-0.095 0.426v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.219-0.071-0.422-0.189-0.585-0.004-0.005-0.007-0.010-0.011-0.015zM4 7h16v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707zM15 10c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121c0-0.552-0.448-1-1-1s-1 0.448-1 1c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536c0-0.552-0.448-1-1-1s-1 0.448-1 1z\"\n                                        />\n                                    </svg>\n                                </button>\n                            </div>\n                        </div>\n                    </div>"])), item.image, item.name, components.Highlight({
            hit: item,
            attribute: 'name'
          }), components.Snippet({
            hit: item,
            attribute: 'description'
          }));
        }
      }
    }];
  }
});

/***/ }),

/***/ "./node_modules/htm/dist/htm.module.js":
/*!*********************************************!*\
  !*** ./node_modules/htm/dist/htm.module.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a)}return e},t=new Map;/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e=""},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0])}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! @algolia/autocomplete-theme-classic 1.7.1 | MIT License | © Algolia, Inc. and contributors | https://github.com/algolia/autocomplete */\n:root{--aa-search-input-height:44px;--aa-input-icon-size:20px;--aa-base-unit:16;--aa-spacing-factor:1;--aa-spacing:calc(var(--aa-base-unit)*var(--aa-spacing-factor)*1px);--aa-spacing-half:calc(var(--aa-spacing)/2);--aa-panel-max-height:650px;--aa-base-z-index:9999;--aa-font-size:calc(var(--aa-base-unit)*1px);--aa-font-family:inherit;--aa-font-weight-medium:500;--aa-font-weight-semibold:600;--aa-font-weight-bold:700;--aa-icon-size:20px;--aa-icon-stroke-width:1.6;--aa-icon-color-rgb:119,119,163;--aa-icon-color-alpha:1;--aa-action-icon-size:20px;--aa-text-color-rgb:38,38,39;--aa-text-color-alpha:1;--aa-primary-color-rgb:62,52,211;--aa-primary-color-alpha:0.2;--aa-muted-color-rgb:128,126,163;--aa-muted-color-alpha:0.6;--aa-panel-border-color-rgb:128,126,163;--aa-panel-border-color-alpha:0.3;--aa-input-border-color-rgb:128,126,163;--aa-input-border-color-alpha:0.8;--aa-background-color-rgb:255,255,255;--aa-background-color-alpha:1;--aa-input-background-color-rgb:255,255,255;--aa-input-background-color-alpha:1;--aa-selected-color-rgb:179,173,214;--aa-selected-color-alpha:0.205;--aa-description-highlight-background-color-rgb:245,223,77;--aa-description-highlight-background-color-alpha:0.5;--aa-detached-media-query:(max-width:680px);--aa-detached-modal-media-query:(min-width:680px);--aa-detached-modal-max-width:680px;--aa-detached-modal-max-height:500px;--aa-overlay-color-rgb:115,114,129;--aa-overlay-color-alpha:0.4;--aa-panel-shadow:0 0 0 1px rgba(35,38,59,0.1),0 6px 16px -4px rgba(35,38,59,0.15);--aa-scrollbar-width:13px;--aa-scrollbar-track-background-color-rgb:234,234,234;--aa-scrollbar-track-background-color-alpha:1;--aa-scrollbar-thumb-background-color-rgb:var(--aa-background-color-rgb);--aa-scrollbar-thumb-background-color-alpha:1}@media (hover:none) and (pointer:coarse){:root{--aa-spacing-factor:1.2;--aa-action-icon-size:22px}}body.dark,body[data-theme=dark]{--aa-text-color-rgb:183,192,199;--aa-primary-color-rgb:146,138,255;--aa-muted-color-rgb:146,138,255;--aa-input-background-color-rgb:0,3,9;--aa-background-color-rgb:21,24,42;--aa-selected-color-rgb:146,138,255;--aa-selected-color-alpha:0.25;--aa-description-highlight-background-color-rgb:0 255 255;--aa-description-highlight-background-color-alpha:0.25;--aa-icon-color-rgb:119,119,163;--aa-panel-shadow:inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;--aa-scrollbar-track-background-color-rgb:44,46,64;--aa-scrollbar-thumb-background-color-rgb:var(--aa-background-color-rgb)}.aa-Autocomplete *,.aa-DetachedFormContainer *,.aa-Panel *{box-sizing:border-box}.aa-Autocomplete,.aa-DetachedFormContainer,.aa-Panel{color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));font-family:inherit;font-family:var(--aa-font-family);font-size:16px;font-size:var(--aa-font-size);font-weight:400;line-height:1em;margin:0;padding:0;text-align:left}.aa-Form{align-items:center;background-color:#fff;background-color:rgba(var(--aa-input-background-color-rgb),var(--aa-input-background-color-alpha));border:1px solid rgba(128,126,163,.8);border:1px solid rgba(var(--aa-input-border-color-rgb),var(--aa-input-border-color-alpha));border-radius:3px;display:flex;line-height:1em;margin:0;position:relative;width:100%}.aa-Form[focus-within]{border-color:#3e34d3;border-color:rgba(var(--aa-primary-color-rgb),1);box-shadow:0 0 0 2px rgba(62,52,211,.2),inset 0 0 0 2px rgba(62,52,211,.2);box-shadow:rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 2px,inset rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 2px;outline:medium none currentColor}.aa-Form:focus-within{border-color:#3e34d3;border-color:rgba(var(--aa-primary-color-rgb),1);box-shadow:0 0 0 2px rgba(62,52,211,.2),inset 0 0 0 2px rgba(62,52,211,.2);box-shadow:rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 2px,inset rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 2px;outline:medium none currentColor}.aa-InputWrapperPrefix{align-items:center;display:flex;flex-shrink:0;height:44px;height:var(--aa-search-input-height);order:1}.aa-Label,.aa-LoadingIndicator{cursor:auto;flex-shrink:0;height:100%;padding:0;text-align:left}.aa-Label svg,.aa-LoadingIndicator svg{color:#3e34d3;color:rgba(var(--aa-primary-color-rgb),1);height:auto;max-height:20px;max-height:var(--aa-input-icon-size);stroke-width:1.6;stroke-width:var(--aa-icon-stroke-width);width:20px;width:var(--aa-input-icon-size)}.aa-LoadingIndicator,.aa-SubmitButton{height:100%;padding-left:11px;padding-left:calc(var(--aa-spacing)*0.75 - 1px);padding-right:8px;padding-right:var(--aa-spacing-half);width:47px;width:calc(var(--aa-spacing)*1.75 + var(--aa-icon-size) - 1px)}@media (hover:none) and (pointer:coarse){.aa-LoadingIndicator,.aa-SubmitButton{padding-left:3px;padding-left:calc(var(--aa-spacing-half)/2 - 1px);width:39px;width:calc(var(--aa-icon-size) + var(--aa-spacing)*1.25 - 1px)}}.aa-SubmitButton{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;margin:0}.aa-LoadingIndicator{align-items:center;display:flex;justify-content:center}.aa-LoadingIndicator[hidden]{display:none}.aa-InputWrapper{order:3;position:relative;width:100%}.aa-Input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));font:inherit;height:44px;height:var(--aa-search-input-height);padding:0;width:100%}.aa-Input::-moz-placeholder{color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));opacity:1}.aa-Input::placeholder{color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));opacity:1}.aa-Input:focus{border-color:none;box-shadow:none;outline:none}.aa-Input::-webkit-search-cancel-button,.aa-Input::-webkit-search-decoration,.aa-Input::-webkit-search-results-button,.aa-Input::-webkit-search-results-decoration{-webkit-appearance:none;appearance:none}.aa-InputWrapperSuffix{align-items:center;display:flex;height:44px;height:var(--aa-search-input-height);order:4}.aa-ClearButton{align-items:center;background:none;border:0;color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));cursor:pointer;display:flex;height:100%;margin:0;padding:0 12.8333333333px;padding:0 calc(var(--aa-spacing)*0.83333 - .5px)}@media (hover:none) and (pointer:coarse){.aa-ClearButton{padding:0 10.1666666667px;padding:0 calc(var(--aa-spacing)*0.66667 - .5px)}}.aa-ClearButton:focus,.aa-ClearButton:hover{color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha))}.aa-ClearButton[hidden]{display:none}.aa-ClearButton svg{stroke-width:1.6;stroke-width:var(--aa-icon-stroke-width);width:20px;width:var(--aa-icon-size)}.aa-Panel{background-color:#fff;background-color:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));border-radius:4px;border-radius:calc(var(--aa-spacing)/4);box-shadow:0 0 0 1px rgba(35,38,59,.1),0 6px 16px -4px rgba(35,38,59,.15);box-shadow:var(--aa-panel-shadow);margin:8px 0 0;overflow:hidden;position:absolute;transition:opacity .2s ease-in,filter .2s ease-in}@media screen and (prefers-reduced-motion){.aa-Panel{transition:none}}.aa-Panel button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;margin:0;padding:0}.aa-PanelLayout{height:100%;margin:0;max-height:650px;max-height:var(--aa-panel-max-height);overflow-y:auto;padding:0;position:relative;text-align:left}.aa-PanelLayoutColumns--twoGolden{display:grid;grid-template-columns:39.2% auto;overflow:hidden;padding:0}.aa-PanelLayoutColumns--two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));overflow:hidden;padding:0}.aa-PanelLayoutColumns--three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));overflow:hidden;padding:0}.aa-Panel--stalled .aa-Source{filter:grayscale(1);opacity:.8}.aa-Panel--scrollable{margin:0;max-height:650px;max-height:var(--aa-panel-max-height);overflow-x:hidden;overflow-y:auto;padding:8px;padding:var(--aa-spacing-half);scrollbar-color:#fff #eaeaea;scrollbar-color:rgba(var(--aa-scrollbar-thumb-background-color-rgb),var(--aa-scrollbar-thumb-background-color-alpha)) rgba(var(--aa-scrollbar-track-background-color-rgb),var(--aa-scrollbar-track-background-color-alpha));scrollbar-width:thin}.aa-Panel--scrollable::-webkit-scrollbar{width:13px;width:var(--aa-scrollbar-width)}.aa-Panel--scrollable::-webkit-scrollbar-track{background-color:#eaeaea;background-color:rgba(var(--aa-scrollbar-track-background-color-rgb),var(--aa-scrollbar-track-background-color-alpha))}.aa-Panel--scrollable::-webkit-scrollbar-thumb{background-color:#fff;background-color:rgba(var(--aa-scrollbar-thumb-background-color-rgb),var(--aa-scrollbar-thumb-background-color-alpha));border-radius:9999px;border:3px solid #eaeaea;border-color:rgba(var(--aa-scrollbar-track-background-color-rgb),var(--aa-scrollbar-track-background-color-alpha));border-right:2px solid rgba(var(--aa-scrollbar-track-background-color-rgb),var(--aa-scrollbar-track-background-color-alpha))}.aa-Source{margin:0;padding:0;position:relative;width:100%}.aa-Source:empty{display:none}.aa-SourceNoResults{font-size:1em;margin:0;padding:16px;padding:var(--aa-spacing)}.aa-List{list-style:none;margin:0}.aa-List,.aa-SourceHeader{padding:0;position:relative}.aa-SourceHeader{margin:8px .5em 8px 0;margin:var(--aa-spacing-half) .5em var(--aa-spacing-half) 0}.aa-SourceHeader:empty{display:none}.aa-SourceHeaderTitle{background:#fff;background:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));color:#3e34d3;color:rgba(var(--aa-primary-color-rgb),1);display:inline-block;font-size:.8em;font-weight:600;font-weight:var(--aa-font-weight-semibold);margin:0;padding:0 8px 0 0;padding:0 var(--aa-spacing-half) 0 0;position:relative;z-index:9999;z-index:var(--aa-base-z-index)}.aa-SourceHeaderLine{border-bottom:1px solid #3e34d3;border-bottom:1px solid rgba(var(--aa-primary-color-rgb),1);display:block;height:2px;left:0;margin:0;opacity:.3;padding:0;position:absolute;right:0;top:8px;top:var(--aa-spacing-half);z-index:9998;z-index:calc(var(--aa-base-z-index) - 1)}.aa-SourceFooterSeeAll{background:linear-gradient(180deg,#fff,rgba(128,126,163,.14));background:linear-gradient(180deg,rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha)),rgba(128,126,163,.14));border:1px solid rgba(128,126,163,.6);border:1px solid rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));border-radius:5px;box-shadow:inset 0 0 2px #fff,0 2px 2px -1px rgba(76,69,88,.15);color:inherit;font-size:.95em;font-weight:500;font-weight:var(--aa-font-weight-medium);padding:.475em 1em .6em;text-decoration:none}.aa-SourceFooterSeeAll:focus,.aa-SourceFooterSeeAll:hover{border:1px solid #3e34d3;border:1px solid rgba(var(--aa-primary-color-rgb),1);color:#3e34d3;color:rgba(var(--aa-primary-color-rgb),1)}.aa-Item{align-items:center;border-radius:3px;cursor:pointer;display:grid;min-height:40px;min-height:calc(var(--aa-spacing)*2.5);padding:4px;padding:calc(var(--aa-spacing-half)/2)}.aa-Item[aria-selected=true]{background-color:rgba(179,173,214,.205);background-color:rgba(var(--aa-selected-color-rgb),var(--aa-selected-color-alpha))}.aa-Item[aria-selected=true] .aa-ActiveOnly,.aa-Item[aria-selected=true] .aa-ItemActionButton{visibility:visible}.aa-ItemIcon{align-items:center;background:#fff;background:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));border-radius:3px;box-shadow:inset 0 0 0 1px rgba(128,126,163,.3);box-shadow:inset 0 0 0 1px rgba(var(--aa-panel-border-color-rgb),var(--aa-panel-border-color-alpha));color:#7777a3;color:rgba(var(--aa-icon-color-rgb),var(--aa-icon-color-alpha));display:flex;flex-shrink:0;font-size:.7em;height:28px;height:calc(var(--aa-icon-size) + var(--aa-spacing-half));justify-content:center;overflow:hidden;stroke-width:1.6;stroke-width:var(--aa-icon-stroke-width);text-align:center;width:28px;width:calc(var(--aa-icon-size) + var(--aa-spacing-half))}.aa-ItemIcon img{height:auto;max-height:20px;max-height:calc(var(--aa-icon-size) + var(--aa-spacing-half) - 8px);max-width:20px;max-width:calc(var(--aa-icon-size) + var(--aa-spacing-half) - 8px);width:auto}.aa-ItemIcon svg{height:20px;height:var(--aa-icon-size);width:20px;width:var(--aa-icon-size)}.aa-ItemIcon--alignTop{align-self:flex-start}.aa-ItemIcon--noBorder{background:none;box-shadow:none}.aa-ItemIcon--picture{height:96px;width:96px}.aa-ItemIcon--picture img{max-height:100%;max-width:100%;padding:8px;padding:var(--aa-spacing-half)}.aa-ItemContent{align-items:center;cursor:pointer;display:grid;grid-gap:8px;gap:8px;grid-gap:var(--aa-spacing-half);gap:var(--aa-spacing-half);grid-auto-flow:column;line-height:1.25em;overflow:hidden}.aa-ItemContent:empty{display:none}.aa-ItemContent mark{background:none;color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));font-style:normal;font-weight:700;font-weight:var(--aa-font-weight-bold)}.aa-ItemContent--dual{display:flex;flex-direction:column;justify-content:space-between;text-align:left}.aa-ItemContent--dual .aa-ItemContentSubtitle,.aa-ItemContent--dual .aa-ItemContentTitle{display:block}.aa-ItemContent--indented{padding-left:36px;padding-left:calc(var(--aa-icon-size) + var(--aa-spacing))}.aa-ItemContentBody{display:grid;grid-gap:4px;gap:4px;grid-gap:calc(var(--aa-spacing-half)/2);gap:calc(var(--aa-spacing-half)/2)}.aa-ItemContentTitle{display:inline-block;margin:0 .5em 0 0;max-width:100%;overflow:hidden;padding:0;text-overflow:ellipsis;white-space:nowrap}.aa-ItemContentSubtitle{font-size:.92em}.aa-ItemContentSubtitleIcon:before{border-color:rgba(128,126,163,.64);border-color:rgba(var(--aa-muted-color-rgb),.64);border-style:solid;content:\"\";display:inline-block;left:1px;position:relative;top:-3px}.aa-ItemContentSubtitle--inline .aa-ItemContentSubtitleIcon:before{border-width:0 0 1.5px;margin-left:8px;margin-left:var(--aa-spacing-half);margin-right:4px;margin-right:calc(var(--aa-spacing-half)/2);width:10px;width:calc(var(--aa-spacing-half) + 2px)}.aa-ItemContentSubtitle--standalone{align-items:center;color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));display:grid;grid-gap:8px;gap:8px;grid-gap:var(--aa-spacing-half);gap:var(--aa-spacing-half);grid-auto-flow:column;justify-content:start}.aa-ItemContentSubtitle--standalone .aa-ItemContentSubtitleIcon:before{border-radius:0 0 0 3px;border-width:0 0 1.5px 1.5px;height:8px;height:var(--aa-spacing-half);width:8px;width:var(--aa-spacing-half)}.aa-ItemContentSubtitleCategory{color:#807ea3;color:rgba(var(--aa-muted-color-rgb),1);font-weight:500}.aa-ItemContentDescription{color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));font-size:.85em;max-width:100%;overflow-x:hidden;text-overflow:ellipsis}.aa-ItemContentDescription:empty{display:none}.aa-ItemContentDescription mark{background:rgba(245,223,77,.5);background:rgba(var(--aa-description-highlight-background-color-rgb),var(--aa-description-highlight-background-color-alpha));color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));font-style:normal;font-weight:500;font-weight:var(--aa-font-weight-medium)}.aa-ItemContentDash{color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));display:none;opacity:.4}.aa-ItemContentTag{background-color:rgba(62,52,211,.2);background-color:rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha));border-radius:3px;margin:0 .4em 0 0;padding:.08em .3em}.aa-ItemLink,.aa-ItemWrapper{align-items:center;color:inherit;display:grid;grid-gap:4px;gap:4px;grid-gap:calc(var(--aa-spacing-half)/2);gap:calc(var(--aa-spacing-half)/2);grid-auto-flow:column;justify-content:space-between;width:100%}.aa-ItemLink{color:inherit;text-decoration:none}.aa-ItemActions{display:grid;grid-auto-flow:column;height:100%;justify-self:end;margin:0 -5.3333333333px;margin:0 calc(var(--aa-spacing)/-3);padding:0 2px 0 0}.aa-ItemActionButton{align-items:center;background:none;border:0;color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));cursor:pointer;display:flex;flex-shrink:0;padding:0}.aa-ItemActionButton:focus svg,.aa-ItemActionButton:hover svg{color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha))}@media (hover:none) and (pointer:coarse){.aa-ItemActionButton:focus svg,.aa-ItemActionButton:hover svg{color:inherit}}.aa-ItemActionButton svg{color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));margin:5.3333333333px;margin:calc(var(--aa-spacing)/3);stroke-width:1.6;stroke-width:var(--aa-icon-stroke-width);width:20px;width:var(--aa-action-icon-size)}.aa-ActiveOnly{visibility:hidden}.aa-PanelHeader{align-items:center;background:#3e34d3;background:rgba(var(--aa-primary-color-rgb),1);color:#fff;display:grid;height:var(--aa-modal-header-height);margin:0;padding:8px 16px;padding:var(--aa-spacing-half) var(--aa-spacing);position:relative}.aa-PanelHeader:after{background-image:linear-gradient(#fff,hsla(0,0%,100%,0));background-image:linear-gradient(rgba(var(--aa-background-color-rgb),1),rgba(var(--aa-background-color-rgb),0));bottom:-8px;bottom:calc(var(--aa-spacing-half)*-1);content:\"\";height:8px;height:var(--aa-spacing-half);left:0;pointer-events:none;position:absolute;right:0}.aa-PanelFooter,.aa-PanelHeader:after{z-index:9999;z-index:var(--aa-base-z-index)}.aa-PanelFooter{background-color:#fff;background-color:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));box-shadow:inset 0 1px 0 rgba(128,126,163,.3);box-shadow:inset 0 1px 0 rgba(var(--aa-panel-border-color-rgb),var(--aa-panel-border-color-alpha));display:flex;justify-content:space-between;margin:0;padding:16px;padding:var(--aa-spacing);position:relative}.aa-PanelFooter:after{background-image:linear-gradient(hsla(0,0%,100%,0),rgba(128,126,163,.6));background-image:linear-gradient(rgba(var(--aa-background-color-rgb),0),rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha)));content:\"\";height:16px;height:var(--aa-spacing);left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:-16px;top:calc(var(--aa-spacing)*-1);z-index:9998;z-index:calc(var(--aa-base-z-index) - 1)}.aa-DetachedContainer{background:#fff;background:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));bottom:0;box-shadow:0 0 0 1px rgba(35,38,59,.1),0 6px 16px -4px rgba(35,38,59,.15);box-shadow:var(--aa-panel-shadow);display:flex;flex-direction:column;left:0;margin:0;overflow:hidden;padding:0;position:fixed;right:0;top:0;z-index:9999;z-index:var(--aa-base-z-index)}.aa-DetachedContainer:after{height:32px}.aa-DetachedContainer .aa-SourceHeader{margin:8px 0 8px 2px;margin:var(--aa-spacing-half) 0 var(--aa-spacing-half) 2px}.aa-DetachedContainer .aa-Panel{background-color:#fff;background-color:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));border-radius:0;box-shadow:none;flex-grow:1;margin:0;padding:0;position:relative}.aa-DetachedContainer .aa-PanelLayout{bottom:0;box-shadow:none;left:0;margin:0;max-height:none;overflow-y:auto;position:absolute;right:0;top:0;width:100%}.aa-DetachedFormContainer{border-bottom:1px solid rgba(128,126,163,.3);border-bottom:1px solid rgba(var(--aa-panel-border-color-rgb),var(--aa-panel-border-color-alpha));display:flex;flex-direction:row;justify-content:space-between;margin:0;padding:8px;padding:var(--aa-spacing-half)}.aa-DetachedCancelButton{background:none;border:0;border-radius:3px;color:inherit;color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));cursor:pointer;font:inherit;margin:0 0 0 8px;margin:0 0 0 var(--aa-spacing-half);padding:0 8px;padding:0 var(--aa-spacing-half)}.aa-DetachedCancelButton:focus,.aa-DetachedCancelButton:hover{box-shadow:inset 0 0 0 1px rgba(128,126,163,.3);box-shadow:inset 0 0 0 1px rgba(var(--aa-panel-border-color-rgb),var(--aa-panel-border-color-alpha))}.aa-DetachedContainer--modal{border-radius:6px;bottom:inherit;height:auto;margin:0 auto;max-width:680px;max-width:var(--aa-detached-modal-max-width);position:absolute;top:3%}.aa-DetachedContainer--modal .aa-PanelLayout{max-height:500px;max-height:var(--aa-detached-modal-max-height);padding-bottom:8px;padding-bottom:var(--aa-spacing-half);position:static}.aa-DetachedSearchButton{align-items:center;background-color:#fff;background-color:rgba(var(--aa-input-background-color-rgb),var(--aa-input-background-color-alpha));border:1px solid rgba(128,126,163,.8);border:1px solid rgba(var(--aa-input-border-color-rgb),var(--aa-input-border-color-alpha));border-radius:3px;color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));cursor:pointer;display:flex;font:inherit;font-family:inherit;font-family:var(--aa-font-family);font-size:16px;font-size:var(--aa-font-size);height:44px;height:var(--aa-search-input-height);margin:0;padding:0 5.5px;padding:0 calc(var(--aa-search-input-height)/8);position:relative;text-align:left;width:100%}.aa-DetachedSearchButton:focus{border-color:#3e34d3;border-color:rgba(var(--aa-primary-color-rgb),1);box-shadow:0 0 0 3px rgba(62,52,211,.2),inset 0 0 0 2px rgba(62,52,211,.2);box-shadow:rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 3px,inset rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 2px;outline:medium none currentColor}.aa-DetachedSearchButtonIcon{align-items:center;color:#3e34d3;color:rgba(var(--aa-primary-color-rgb),1);cursor:auto;display:flex;height:100%;justify-content:center;width:36px;width:calc(var(--aa-icon-size) + var(--aa-spacing))}.aa-Detached{height:100vh;overflow:hidden}.aa-DetachedOverlay{background-color:rgba(115,114,129,.4);background-color:rgba(var(--aa-overlay-color-rgb),var(--aa-overlay-color-alpha));height:100vh;left:0;margin:0;padding:0;position:fixed;right:0;top:0;z-index:9998;z-index:calc(var(--aa-base-z-index) - 1)}.aa-GradientBottom,.aa-GradientTop{height:8px;height:var(--aa-spacing-half);left:0;pointer-events:none;position:absolute;right:0;z-index:9999;z-index:var(--aa-base-z-index)}.aa-GradientTop{background-image:linear-gradient(#fff,hsla(0,0%,100%,0));background-image:linear-gradient(rgba(var(--aa-background-color-rgb),1),rgba(var(--aa-background-color-rgb),0));top:0}.aa-GradientBottom{background-image:linear-gradient(hsla(0,0%,100%,0),#fff);background-image:linear-gradient(rgba(var(--aa-background-color-rgb),0),rgba(var(--aa-background-color-rgb),1));border-bottom-left-radius:4px;border-bottom-left-radius:calc(var(--aa-spacing)/4);border-bottom-right-radius:4px;border-bottom-right-radius:calc(var(--aa-spacing)/4);bottom:0}@media (hover:none) and (pointer:coarse){.aa-DesktopOnly{display:none}}@media (hover:hover){.aa-TouchOnly{display:none}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_theme_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!../../../postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./theme.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_theme_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_theme_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ d),
/* harmony export */   "Fragment": () => (/* binding */ p),
/* harmony export */   "cloneElement": () => (/* binding */ q),
/* harmony export */   "createContext": () => (/* binding */ B),
/* harmony export */   "createElement": () => (/* binding */ h),
/* harmony export */   "createRef": () => (/* binding */ y),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "hydrate": () => (/* binding */ S),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "options": () => (/* binding */ l),
/* harmony export */   "render": () => (/* binding */ P),
/* harmony export */   "toChildArray": () => (/* binding */ x)
/* harmony export */ });
var n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v(l,f,t,o,null)}function v(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function y(){return{current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?_(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function b(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||setTimeout)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_(t):o,t.__h),z(u,t),t.__e!=o&&k(t)))})}function w(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(p,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null}j(n,k,d=d||f,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m(k,s,n):s=A(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_(d))}for(u.__e=g,h=C;h--;)null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=_(i,h+1)),N(x[h],x[h]));if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h])}function m(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m(i,l,u):A(u,i,i,t,i.__e,l));return l}function x(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){x(n,l)}):l.push(n)),l}function A(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l.__b)&&a(u);try{n:if("function"==typeof H){if(g=u.props,m=(a=H.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in H&&H.prototype.render?u.__c=h=new H(g,x):(u.__c=h=new d(g,x),h.constructor=H,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=H.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,H.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==H.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==H.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k)})}if(h.context=x,h.props=g,h.__v=u,h.__P=n,A=l.__r,C=0,"prototype"in H&&H.prototype.render)h.state=h.__s,h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context);else do{h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++C<25);h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),$=null!=a&&a.type===p&&null==a.key?a.props.children:a,w(n,Array.isArray($)?$:[$],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(a=l.diffed)&&a(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),h=(y=i.props||f).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H(l,"checked",k,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||a(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function P(u,i,t){var o,r,e;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j(i,u=(!o&&t||i).__k=h(p,null,[u]),r||f,f,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z(e,u)}function S(n,l){P(n,l,S)}function q(l,u,i){var t,o,r,f=s({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),v(l.type,f,t||l.key,o||l.ref,null)}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(b)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=e.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),b(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b(this))},d.prototype.render=p,t=[],g.__r=0,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/cart */ "./src/js/cart.js");
/* harmony import */ var _js_cart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_cart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_livesearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/livesearch */ "./src/js/livesearch.js");


})();

/******/ })()
;