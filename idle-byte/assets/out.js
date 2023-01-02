function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _assertThisInitialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possibleConstructorReturn(self1, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self1);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v1) {
            return step([
                n,
                v1
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var _a2, __defProp = Object.defineProperty, __publicField = function(obj, key, value) {
    return function(obj, key, value) {
        key in obj ? __defProp(obj, key, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: value
        }) : obj[key] = value;
    }(obj, "symbol" != (typeof key === "undefined" ? "undefined" : _typeof(key)) ? key + "" : key, value), value;
};
function makeMap(str, expectsLowerCase) {
    var map = Object.create(null), list = str.split(",");
    for(var i = 0; i < list.length; i++)map[list[i]] = !0;
    return expectsLowerCase ? function(val) {
        return !!map[val.toLowerCase()];
    } : function(val) {
        return !!map[val];
    };
}
function normalizeStyle(value) {
    if (isArray$1(value)) {
        var res = {};
        for(var i = 0; i < value.length; i++){
            var item = value[i], normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(var key in normalized)res[key] = normalized[key];
        }
        return res;
    }
    return isString(value) || isObject(value) ? value : void 0;
}
!function polyfill() {
    var processPreload = function processPreload(link) {
        if (link.ep) return;
        link.ep = !0;
        var fetchOpts = function getFetchOpts(script) {
            var fetchOpts = {};
            return script.integrity && (fetchOpts.integrity = script.integrity), script.referrerpolicy && (fetchOpts.referrerPolicy = script.referrerpolicy), "use-credentials" === script.crossorigin ? fetchOpts.credentials = "include" : "anonymous" === script.crossorigin ? fetchOpts.credentials = "omit" : fetchOpts.credentials = "same-origin", fetchOpts;
        }(link);
        fetch(link.href, fetchOpts);
    };
    var relList = document.createElement("link").relList;
    if (!(relList && relList.supports && relList.supports("modulepreload"))) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = document.querySelectorAll('link[rel="modulepreload"]')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var link = _step.value;
                processPreload(link);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        new MutationObserver(function(mutations) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator = mutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                    var mutation = _step.value;
                    if ("childList" === mutation.type) try {
                        for(var _iterator1 = mutation.addedNodes[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                            var node = _step1.value;
                            "LINK" === node.tagName && "modulepreload" === node.rel && processPreload(node);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
    }
}();
var listDelimiterRE = /;(?![^(]*\))/g, propertyDelimiterRE = /:([^]+)/, styleCommentRE = RegExp("\\/\\*.*?\\*\\/", "gs");
function parseStringStyle(cssText) {
    var ret = {};
    return cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach(function(item) {
        if (item) {
            var tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    }), ret;
}
function normalizeClass(value) {
    var res = "";
    if (isString(value)) res = value;
    else if (isArray$1(value)) for(var i = 0; i < value.length; i++){
        var normalized = normalizeClass(value[i]);
        normalized && (res += normalized + " ");
    }
    else if (isObject(value)) for(var name in value)value[name] && (res += name + " ");
    return res.trim();
}
var isSpecialBooleanAttr = makeMap("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function includeBooleanAttr(value) {
    return !!value || "" === value;
}
function looseEqual(a, b) {
    if (a === b) return !0;
    var aValidType = isDate(a), bValidType = isDate(b);
    if (aValidType || bValidType) return !(!aValidType || !bValidType) && a.getTime() === b.getTime();
    if (aValidType = isSymbol(a), bValidType = isSymbol(b), aValidType || bValidType) return a === b;
    if (aValidType = isArray$1(a), bValidType = isArray$1(b), aValidType || bValidType) return !(!aValidType || !bValidType) && function looseCompareArrays(a, b) {
        if (a.length !== b.length) return !1;
        var equal = !0;
        for(var i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
        return equal;
    }(a, b);
    if (aValidType = isObject(a), bValidType = isObject(b), aValidType || bValidType) {
        if (!aValidType || !bValidType) return !1;
        if (Object.keys(a).length !== Object.keys(b).length) return !1;
        for(var key in a){
            var aHasKey = a.hasOwnProperty(key), bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return !1;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(function(item) {
        return looseEqual(item, val);
    });
}
var toDisplayString = function(val) {
    return isString(val) ? val : null == val ? "" : isArray$1(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
}, replacer = function(_key, val) {
    return val && val.__v_isRef ? replacer(_key, val.value) : isMap(val) ? _defineProperty({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function(entries, param) {
        var _param = _slicedToArray(param, 2), key = _param[0], val2 = _param[1];
        return entries["".concat(key, " =>")] = val2, entries;
    }, {})) : isSet(val) ? _defineProperty({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values())) : !isObject(val) || isArray$1(val) || isPlainObject(val) ? val : String(val);
}, EMPTY_OBJ = {}, EMPTY_ARR = [], NOOP = function() {}, NO = function() {
    return !1;
}, onRE = /^on[^a-z]/, isOn = function(key) {
    return onRE.test(key);
}, isModelListener = function(key) {
    return key.startsWith("onUpdate:");
}, extend$1 = Object.assign, remove = function(arr, el) {
    var i = arr.indexOf(el);
    i > -1 && arr.splice(i, 1);
}, hasOwnProperty = Object.prototype.hasOwnProperty, hasOwn$1 = function(val, key) {
    return hasOwnProperty.call(val, key);
}, isArray$1 = Array.isArray, isMap = function(val) {
    return "[object Map]" === toTypeString(val);
}, isSet = function(val) {
    return "[object Set]" === toTypeString(val);
}, isDate = function(val) {
    return "[object Date]" === toTypeString(val);
}, isFunction = function(val) {
    return "function" == typeof val;
}, isString = function(val) {
    return "string" == typeof val;
}, isSymbol = function(val) {
    return "symbol" == (typeof val === "undefined" ? "undefined" : _typeof(val));
}, isObject = function(val) {
    return null !== val && "object" == typeof val;
}, isPromise = function(val) {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}, objectToString = Object.prototype.toString, toTypeString = function(value) {
    return objectToString.call(value);
}, isPlainObject = function(val) {
    return "[object Object]" === toTypeString(val);
}, isIntegerKey = function(key) {
    return isString(key) && "NaN" !== key && "-" !== key[0] && "" + parseInt(key, 10) === key;
}, isReservedProp = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), cacheStringFunction = function(fn) {
    var cache = Object.create(null);
    return function(str) {
        return cache[str] || (cache[str] = fn(str));
    };
}, camelizeRE = /-(\w)/g, camelize = cacheStringFunction(function(str) {
    return str.replace(camelizeRE, function(_, c) {
        return c ? c.toUpperCase() : "";
    });
}), hyphenateRE = /\B([A-Z])/g, hyphenate = cacheStringFunction(function(str) {
    return str.replace(hyphenateRE, "-$1").toLowerCase();
}), capitalize = cacheStringFunction(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}), toHandlerKey = cacheStringFunction(function(str) {
    return str ? "on".concat(capitalize(str)) : "";
}), hasChanged = function(value, oldValue) {
    return !Object.is(value, oldValue);
}, invokeArrayFns = function(fns, arg) {
    for(var i = 0; i < fns.length; i++)fns[i](arg);
}, def = function(obj, key, value) {
    Object.defineProperty(obj, key, {
        configurable: !0,
        enumerable: !1,
        value: value
    });
}, toNumber = function(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
};
var _globalThis;
var activeEffectScope;
var EffectScope = /*#__PURE__*/ function() {
    "use strict";
    function EffectScope() {
        var detached = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
        _classCallCheck(this, EffectScope);
        this.detached = detached, this.active = !0, this.effects = [], this.cleanups = [], this.parent = activeEffectScope, !detached && activeEffectScope && (this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1);
    }
    _createClass(EffectScope, [
        {
            key: "run",
            value: function run(fn) {
                if (this.active) {
                    var currentEffectScope = activeEffectScope;
                    try {
                        return activeEffectScope = this, fn();
                    } finally{
                        activeEffectScope = currentEffectScope;
                    }
                }
            }
        },
        {
            key: "on",
            value: function on() {
                activeEffectScope = this;
            }
        },
        {
            key: "off",
            value: function off() {
                activeEffectScope = this.parent;
            }
        },
        {
            key: "stop",
            value: function stop(fromParent) {
                if (this.active) {
                    var i, l;
                    for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
                    for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
                    if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(!0);
                    if (!this.detached && this.parent && !fromParent) {
                        var last = this.parent.scopes.pop();
                        last && last !== this && (this.parent.scopes[this.index] = last, last.index = this.index);
                    }
                    this.parent = void 0, this.active = !1;
                }
            }
        }
    ]);
    return EffectScope;
}();
var createDep = function(effects) {
    var dep = new Set(effects);
    return dep.w = 0, dep.n = 0, dep;
}, wasTracked = function(dep) {
    return (dep.w & trackOpBit) > 0;
}, newTracked = function(dep) {
    return (dep.n & trackOpBit) > 0;
}, targetMap = new WeakMap;
var effectTrackDepth = 0, trackOpBit = 1;
var activeEffect;
var ITERATE_KEY = Symbol(""), MAP_KEY_ITERATE_KEY = Symbol("");
var ReactiveEffect = /*#__PURE__*/ function() {
    "use strict";
    function ReactiveEffect(fn) {
        var scheduler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, scope = arguments.length > 2 ? arguments[2] : void 0;
        _classCallCheck(this, ReactiveEffect);
        this.fn = fn, this.scheduler = scheduler, this.active = !0, this.deps = [], this.parent = void 0, function recordEffectScope(effect) {
            var scope = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : activeEffectScope;
            scope && scope.active && scope.effects.push(effect);
        }(this, scope);
    }
    _createClass(ReactiveEffect, [
        {
            key: "run",
            value: function run() {
                if (!this.active) return this.fn();
                var parent = activeEffect, lastShouldTrack = shouldTrack;
                for(; parent;){
                    if (parent === this) return;
                    parent = parent.parent;
                }
                try {
                    return this.parent = activeEffect, activeEffect = this, shouldTrack = !0, trackOpBit = 1 << ++effectTrackDepth, effectTrackDepth <= 30 ? function(param) {
                        var deps = param.deps;
                        if (deps.length) for(var i = 0; i < deps.length; i++)deps[i].w |= trackOpBit;
                    }(this) : cleanupEffect(this), this.fn();
                } finally{
                    effectTrackDepth <= 30 && function(effect) {
                        var deps = effect.deps;
                        if (deps.length) {
                            var ptr = 0;
                            for(var i = 0; i < deps.length; i++){
                                var dep = deps[i];
                                wasTracked(dep) && !newTracked(dep) ? dep.delete(effect) : deps[ptr++] = dep, dep.w &= ~trackOpBit, dep.n &= ~trackOpBit;
                            }
                            deps.length = ptr;
                        }
                    }(this), trackOpBit = 1 << --effectTrackDepth, activeEffect = this.parent, shouldTrack = lastShouldTrack, this.parent = void 0, this.deferStop && this.stop();
                }
            }
        },
        {
            key: "stop",
            value: function stop() {
                activeEffect === this ? this.deferStop = !0 : this.active && (cleanupEffect(this), this.onStop && this.onStop(), this.active = !1);
            }
        }
    ]);
    return ReactiveEffect;
}();
function cleanupEffect(effect) {
    var deps = effect.deps;
    if (deps.length) {
        for(var i = 0; i < deps.length; i++)deps[i].delete(effect);
        deps.length = 0;
    }
}
var shouldTrack = !0;
var trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack), shouldTrack = !1;
}
function resetTracking() {
    var last = trackStack.pop();
    shouldTrack = void 0 === last || last;
}
function track(target, type2, key) {
    if (shouldTrack && activeEffect) {
        var depsMap = targetMap.get(target);
        depsMap || targetMap.set(target, depsMap = new Map);
        var dep = depsMap.get(key);
        dep || depsMap.set(key, dep = createDep()), trackEffects(dep);
    }
}
function trackEffects(dep, debuggerEventExtraInfo) {
    var shouldTrack2 = !1;
    effectTrackDepth <= 30 ? newTracked(dep) || (dep.n |= trackOpBit, shouldTrack2 = !wasTracked(dep)) : shouldTrack2 = !dep.has(activeEffect), shouldTrack2 && (dep.add(activeEffect), activeEffect.deps.push(dep));
}
function trigger(target, type2, key, newValue, oldValue, oldTarget) {
    var depsMap = targetMap.get(target);
    if (!depsMap) return;
    var deps = [];
    if ("clear" === type2) deps = _toConsumableArray(depsMap.values());
    else if ("length" === key && isArray$1(target)) {
        var newLength = toNumber(newValue);
        depsMap.forEach(function(dep, key2) {
            ("length" === key2 || key2 >= newLength) && deps.push(dep);
        });
    } else switch(void 0 !== key && deps.push(depsMap.get(key)), type2){
        case "add":
            isArray$1(target) ? isIntegerKey(key) && deps.push(depsMap.get("length")) : (deps.push(depsMap.get(ITERATE_KEY)), isMap(target) && deps.push(depsMap.get(MAP_KEY_ITERATE_KEY)));
            break;
        case "delete":
            isArray$1(target) || (deps.push(depsMap.get(ITERATE_KEY)), isMap(target) && deps.push(depsMap.get(MAP_KEY_ITERATE_KEY)));
            break;
        case "set":
            isMap(target) && deps.push(depsMap.get(ITERATE_KEY));
    }
    if (1 === deps.length) deps[0] && triggerEffects(deps[0]);
    else {
        var _effects;
        var effects = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = deps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var dep = _step.value;
                dep && (_effects = effects).push.apply(_effects, _toConsumableArray(dep));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        triggerEffects(createDep(effects));
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    var effects = isArray$1(dep) ? dep : _toConsumableArray(dep);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = effects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var effect = _step.value;
            effect.computed && triggerEffect(effect);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = effects[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var effect1 = _step1.value;
            effect1.computed || triggerEffect(effect1);
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
    (effect !== activeEffect || effect.allowRecurse) && (effect.scheduler ? effect.scheduler() : effect.run());
}
var isNonTrackableKeys = makeMap("__proto__,__v_isRef,__isVue"), builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).filter(function(key) {
    return "arguments" !== key && "caller" !== key;
}).map(function(key) {
    return Symbol[key];
}).filter(isSymbol)), get = createGetter(), shallowGet = createGetter(!1, !0), readonlyGet = createGetter(!0), arrayInstrumentations = createArrayInstrumentations();
function createArrayInstrumentations() {
    var instrumentations = {};
    return [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach(function(key) {
        instrumentations[key] = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _arr, _arr1;
            var arr = toRaw(this);
            for(var i = 0, l = this.length; i < l; i++)track(arr, 0, i + "");
            var res = (_arr = arr)[key].apply(_arr, _toConsumableArray(args));
            return -1 === res || !1 === res ? (_arr1 = arr)[key].apply(_arr1, _toConsumableArray(args.map(toRaw))) : res;
        };
    }), [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach(function(key) {
        instrumentations[key] = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            pauseTracking();
            var res = toRaw(this)[key].apply(this, args);
            return resetTracking(), res;
        };
    }), instrumentations;
}
function createGetter() {
    var isReadonly2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, shallow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return function get2(target, key, receiver) {
        if ("__v_isReactive" === key) return !isReadonly2;
        if ("__v_isReadonly" === key) return isReadonly2;
        if ("__v_isShallow" === key) return shallow;
        if ("__v_raw" === key && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        var targetIsArray = isArray$1(target);
        if (!isReadonly2 && targetIsArray && hasOwn$1(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        var res = Reflect.get(target, key, receiver);
        return (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) ? res : (isReadonly2 || track(target, 0, key), shallow ? res : isRef(res) ? targetIsArray && isIntegerKey(key) ? res : res.value : isObject(res) ? isReadonly2 ? readonly(res) : reactive(res) : res);
    };
}
function createSetter() {
    var shallow = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return function set2(target, key, value, receiver) {
        var oldValue = target[key];
        if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) return !1;
        if (!shallow && (isShallow(value) || isReadonly(value) || (oldValue = toRaw(oldValue), value = toRaw(value)), !isArray$1(target) && isRef(oldValue) && !isRef(value))) return oldValue.value = value, !0;
        var hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn$1(target, key), result = Reflect.set(target, key, value, receiver);
        return target === toRaw(receiver) && (hadKey ? hasChanged(value, oldValue) && trigger(target, "set", key, value) : trigger(target, "add", key, value)), result;
    };
}
var mutableHandlers = {
    get: get,
    set: createSetter(),
    deleteProperty: function deleteProperty(target, key) {
        var hadKey = hasOwn$1(target, key);
        target[key];
        var result = Reflect.deleteProperty(target, key);
        return result && hadKey && trigger(target, "delete", key, void 0), result;
    },
    has: function has(target, key) {
        var result = Reflect.has(target, key);
        return isSymbol(key) && builtInSymbols.has(key) || track(target, 0, key), result;
    },
    ownKeys: function ownKeys(target) {
        return track(target, 0, isArray$1(target) ? "length" : ITERATE_KEY), Reflect.ownKeys(target);
    }
}, readonlyHandlers = {
    get: readonlyGet,
    set: function(target, key) {
        return !0;
    },
    deleteProperty: function(target, key) {
        return !0;
    }
}, shallowReactiveHandlers = extend$1({}, mutableHandlers, {
    get: shallowGet,
    set: createSetter(!0)
}), toShallow = function(value) {
    return value;
}, getProto$1 = function(v1) {
    return Reflect.getPrototypeOf(v1);
};
function get$1(target, key) {
    var isReadonly2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, isShallow2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    var rawTarget = toRaw(target = target.__v_raw), rawKey = toRaw(key);
    isReadonly2 || (key !== rawKey && track(rawTarget, 0, key), track(rawTarget, 0, rawKey));
    var _getProto$1 = getProto$1(rawTarget), has2 = _getProto$1.has, wrap2 = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    return has2.call(rawTarget, key) ? wrap2(target.get(key)) : has2.call(rawTarget, rawKey) ? wrap2(target.get(rawKey)) : void (target !== rawTarget && target.get(key));
}
function has$1(key) {
    var isReadonly2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    var target = this.__v_raw, rawTarget = toRaw(target), rawKey = toRaw(key);
    return isReadonly2 || (key !== rawKey && track(rawTarget, 0, key), track(rawTarget, 0, rawKey)), key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target) {
    var isReadonly2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return target = target.__v_raw, !isReadonly2 && track(toRaw(target), 0, ITERATE_KEY), Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    var target = toRaw(this);
    return getProto$1(target).has.call(target, value) || (target.add(value), trigger(target, "add", value, value)), this;
}
function set$1(key, value) {
    value = toRaw(value);
    var target = toRaw(this), _getProto$1 = getProto$1(target), has2 = _getProto$1.has, get2 = _getProto$1.get;
    var hadKey = has2.call(target, key);
    hadKey || (key = toRaw(key), hadKey = has2.call(target, key));
    var oldValue = get2.call(target, key);
    return target.set(key, value), hadKey ? hasChanged(value, oldValue) && trigger(target, "set", key, value) : trigger(target, "add", key, value), this;
}
function deleteEntry(key) {
    var target = toRaw(this), _getProto$1 = getProto$1(target), has2 = _getProto$1.has, get2 = _getProto$1.get;
    var hadKey = has2.call(target, key);
    hadKey || (key = toRaw(key), hadKey = has2.call(target, key)), get2 && get2.call(target, key);
    var result = target.delete(key);
    return hadKey && trigger(target, "delete", key, void 0), result;
}
function clear() {
    var target = toRaw(this), hadItems = 0 !== target.size, result = target.clear();
    return hadItems && trigger(target, "clear", void 0, void 0), result;
}
function createForEach(isReadonly2, isShallow2) {
    return function forEach(callback, thisArg) {
        var observed = this, target = observed.__v_raw, rawTarget = toRaw(target), wrap2 = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        return !isReadonly2 && track(rawTarget, 0, ITERATE_KEY), target.forEach(function(value, key) {
            return callback.call(thisArg, wrap2(value), wrap2(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var _target;
        var target = this.__v_raw, rawTarget = toRaw(target), targetIsMap = isMap(rawTarget), isPair = "entries" === method || method === Symbol.iterator && targetIsMap, isKeyOnly = "keys" === method && targetIsMap, innerIterator = (_target = target)[method].apply(_target, _toConsumableArray(args)), wrap2 = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        return !isReadonly2 && track(rawTarget, 0, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY), _defineProperty({
            next: function next() {
                var _innerIterator_next = innerIterator.next(), value = _innerIterator_next.value, done = _innerIterator_next.done;
                return done ? {
                    value: value,
                    done: done
                } : {
                    value: isPair ? [
                        wrap2(value[0]),
                        wrap2(value[1])
                    ] : wrap2(value),
                    done: done
                };
            }
        }, Symbol.iterator, function() {
            return this;
        });
    };
}
function createReadonlyMethod(type2) {
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return "delete" !== type2 && this;
    };
}
function createInstrumentations() {
    var mutableInstrumentations2 = {
        get: function get(key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add: add,
        set: set$1,
        delete: deleteEntry,
        clear: clear,
        forEach: createForEach(!1, !1)
    }, shallowInstrumentations2 = {
        get: function get(key) {
            return get$1(this, key, !1, !0);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add: add,
        set: set$1,
        delete: deleteEntry,
        clear: clear,
        forEach: createForEach(!1, !0)
    }, readonlyInstrumentations2 = {
        get: function get(key) {
            return get$1(this, key, !0);
        },
        get size () {
            return size(this, !0);
        },
        has: function has(key) {
            return has$1.call(this, key, !0);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(!0, !1)
    }, shallowReadonlyInstrumentations2 = {
        get: function get(key) {
            return get$1(this, key, !0, !0);
        },
        get size () {
            return size(this, !0);
        },
        has: function has(key) {
            return has$1.call(this, key, !0);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(!0, !0)
    };
    return [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ].forEach(function(method) {
        mutableInstrumentations2[method] = createIterableMethod(method, !1, !1), readonlyInstrumentations2[method] = createIterableMethod(method, !0, !1), shallowInstrumentations2[method] = createIterableMethod(method, !1, !0), shallowReadonlyInstrumentations2[method] = createIterableMethod(method, !0, !0);
    }), [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
var _createInstrumentations = _slicedToArray(createInstrumentations(), 4), mutableInstrumentations = _createInstrumentations[0], readonlyInstrumentations = _createInstrumentations[1], shallowInstrumentations = _createInstrumentations[2], shallowReadonlyInstrumentations = _createInstrumentations[3];
function createInstrumentationGetter(isReadonly2, shallow) {
    var instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return function(target, key, receiver) {
        return "__v_isReactive" === key ? !isReadonly2 : "__v_isReadonly" === key ? isReadonly2 : "__v_raw" === key ? target : Reflect.get(hasOwn$1(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
var mutableCollectionHandlers = {
    get: createInstrumentationGetter(!1, !1)
}, shallowCollectionHandlers = {
    get: createInstrumentationGetter(!1, !0)
}, readonlyCollectionHandlers = {
    get: createInstrumentationGetter(!0, !1)
}, reactiveMap = new WeakMap, shallowReactiveMap = new WeakMap, readonlyMap = new WeakMap, shallowReadonlyMap = new WeakMap;
function getTargetType(value) {
    return value.__v_skip || !Object.isExtensible(value) ? 0 : function targetTypeMap(rawType) {
        switch(rawType){
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0;
        }
    }(function(value) {
        return toTypeString(value).slice(8, -1);
    }(value));
}
function reactive(target) {
    return isReadonly(target) ? target : createReactiveObject(target, !1, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, !0, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) return target;
    if (target.__v_raw && (!isReadonly2 || !target.__v_isReactive)) return target;
    var existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    var targetType = getTargetType(target);
    if (0 === targetType) return target;
    var proxy = new Proxy(target, 2 === targetType ? collectionHandlers : baseHandlers);
    return proxyMap.set(target, proxy), proxy;
}
function isReactive(value) {
    return isReadonly(value) ? isReactive(value.__v_raw) : !(!value || !value.__v_isReactive);
}
function isReadonly(value) {
    return !(!value || !value.__v_isReadonly);
}
function isShallow(value) {
    return !(!value || !value.__v_isShallow);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    var raw = observed && observed.__v_raw;
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    return def(value, "__v_skip", !0), value;
}
var toReactive = function(value) {
    return isObject(value) ? reactive(value) : value;
}, toReadonly = function(value) {
    return isObject(value) ? readonly(value) : value;
};
function isRef(r) {
    return !(!r || !0 !== r.__v_isRef);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
var shallowUnwrapHandlers = {
    get: function(target, key, receiver) {
        return unref(Reflect.get(target, key, receiver));
    },
    set: function(target, key, value, receiver) {
        var oldValue = target[key];
        return isRef(oldValue) && !isRef(value) ? (oldValue.value = value, !0) : Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var _a$2;
var ComputedRefImpl = /*#__PURE__*/ function() {
    "use strict";
    function ComputedRefImpl(getter, _setter, isReadonly2, isSSR) {
        var _this = this;
        _classCallCheck(this, ComputedRefImpl);
        this._setter = _setter, this.dep = void 0, this.__v_isRef = !0, this[_a$2] = !1, this._dirty = !0, this.effect = new ReactiveEffect(getter, function() {
            _this._dirty || (_this._dirty = !0, function triggerRefValue(ref, newVal) {
                (ref = toRaw(ref)).dep && triggerEffects(ref.dep);
            }(_this));
        }), this.effect.computed = this, this.effect.active = this._cacheable = !isSSR, this.__v_isReadonly = isReadonly2;
    }
    _createClass(ComputedRefImpl, [
        {
            key: "value",
            get: function get() {
                var self2 = toRaw(this);
                return function trackRefValue(ref) {
                    shouldTrack && activeEffect && trackEffects((ref = toRaw(ref)).dep || (ref.dep = createDep()));
                }(self2), !self2._dirty && self2._cacheable || (self2._dirty = !1, self2._value = self2.effect.run()), self2._value;
            },
            set: function set(newValue) {
                this._setter(newValue);
            }
        }
    ]);
    return ComputedRefImpl;
}();
function callWithErrorHandling(fn, instance, type2, args) {
    var res;
    try {
        res = args ? fn.apply(void 0, _toConsumableArray(args)) : fn();
    } catch (err) {
        handleError(err, instance, type2);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type2, args) {
    if (isFunction(fn)) {
        var res = callWithErrorHandling(fn, instance, type2, args);
        return res && isPromise(res) && res.catch(function(err) {
            handleError(err, instance, type2);
        }), res;
    }
    var values = [];
    for(var i = 0; i < fn.length; i++)values.push(callWithAsyncErrorHandling(fn[i], instance, type2, args));
    return values;
}
function handleError(err, instance, type2) {
    var throwInDev = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
    instance && instance.vnode;
    if (instance) {
        var cur = instance.parent;
        var exposedInstance = instance.proxy, errorInfo = type2;
        for(; cur;){
            var errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for(var i = 0; i < errorCapturedHooks.length; i++)if (!1 === errorCapturedHooks[i](err, exposedInstance, errorInfo)) return;
            }
            cur = cur.parent;
        }
        var appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) return void callWithErrorHandling(appErrorHandler, null, 10, [
            err,
            exposedInstance,
            errorInfo
        ]);
    }
    !function logError(err, type2, contextVNode) {
        var throwInDev = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
        console.error(err);
    }(err, 0, 0, throwInDev);
}
_a$2 = "__v_isReadonly";
var isFlushing = !1, isFlushPending = !1;
var queue = [];
var flushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null, postFlushIndex = 0;
var resolvedPromise = Promise.resolve();
var currentFlushPromise = null;
function nextTick(fn) {
    var p2 = currentFlushPromise || resolvedPromise;
    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function queueJob(job) {
    queue.length && queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex) || (null == job.id ? queue.push(job) : queue.splice(function findInsertionIndex(id) {
        var start = flushIndex + 1, end = queue.length;
        for(; start < end;){
            var middle = start + end >>> 1;
            getId(queue[middle]) < id ? start = middle + 1 : end = middle;
        }
        return start;
    }(job.id), 0, job), queueFlush());
}
function queueFlush() {
    isFlushing || isFlushPending || (isFlushPending = !0, currentFlushPromise = resolvedPromise.then(flushJobs));
}
function flushPreFlushCbs(seen) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : isFlushing ? flushIndex + 1 : 0;
    for(; i < queue.length; i++){
        var cb = queue[i];
        cb && cb.pre && (queue.splice(i, 1), i--, cb());
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        var _activePostFlushCbs;
        var deduped = _toConsumableArray(new Set(pendingPostFlushCbs));
        if (pendingPostFlushCbs.length = 0, activePostFlushCbs) return void (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, _toConsumableArray(deduped));
        for(activePostFlushCbs = deduped, activePostFlushCbs.sort(function(a, b) {
            return getId(a) - getId(b);
        }), postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++)activePostFlushCbs[postFlushIndex]();
        activePostFlushCbs = null, postFlushIndex = 0;
    }
}
var getId = function(job) {
    return null == job.id ? 1 / 0 : job.id;
}, comparator = function(a, b) {
    var diff = getId(a) - getId(b);
    if (0 === diff) {
        if (a.pre && !b.pre) return -1;
        if (b.pre && !a.pre) return 1;
    }
    return diff;
};
function flushJobs(seen) {
    isFlushPending = !1, isFlushing = !0, queue.sort(comparator);
    try {
        for(flushIndex = 0; flushIndex < queue.length; flushIndex++){
            var job = queue[flushIndex];
            job && !1 !== job.active && callWithErrorHandling(job, null, 14);
        }
    } finally{
        flushIndex = 0, queue.length = 0, flushPostFlushCbs(), isFlushing = !1, currentFlushPromise = null, (queue.length || pendingPostFlushCbs.length) && flushJobs();
    }
}
function emit$1(instance, event) {
    for(var _len = arguments.length, rawArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        rawArgs[_key - 2] = arguments[_key];
    }
    if (instance.isUnmounted) return;
    var props2 = instance.vnode.props || EMPTY_OBJ;
    var args = rawArgs;
    var isModelListener2 = event.startsWith("update:"), modelArg = isModelListener2 && event.slice(7);
    if (modelArg && modelArg in props2) {
        var modifiersKey = "".concat("modelValue" === modelArg ? "model" : modelArg, "Modifiers"), _ref = props2[modifiersKey] || EMPTY_OBJ, number = _ref.number, trim = _ref.trim;
        trim && (args = rawArgs.map(function(a) {
            return isString(a) ? a.trim() : a;
        })), number && (args = rawArgs.map(toNumber));
    }
    var handlerName, handler = props2[handlerName = toHandlerKey(event)] || props2[handlerName = toHandlerKey(camelize(event))];
    !handler && isModelListener2 && (handler = props2[handlerName = toHandlerKey(hyphenate(event))]), handler && callWithAsyncErrorHandling(handler, instance, 6, args);
    var onceHandler = props2[handlerName + "Once"];
    if (onceHandler) {
        if (instance.emitted) {
            if (instance.emitted[handlerName]) return;
        } else instance.emitted = {};
        instance.emitted[handlerName] = !0, callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
}
function normalizeEmitsOptions(comp, appContext) {
    var asMixin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    var cache = appContext.emitsCache, cached = cache.get(comp);
    if (void 0 !== cached) return cached;
    var raw = comp.emits;
    var normalized = {}, hasExtends = !1;
    if (!isFunction(comp)) {
        var extendEmits = function(raw2) {
            var normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, !0);
            normalizedFromExtend && (hasExtends = !0, extend$1(normalized, normalizedFromExtend));
        };
        !asMixin && appContext.mixins.length && appContext.mixins.forEach(extendEmits), comp.extends && extendEmits(comp.extends), comp.mixins && comp.mixins.forEach(extendEmits);
    }
    return raw || hasExtends ? (isArray$1(raw) ? raw.forEach(function(key) {
        return normalized[key] = null;
    }) : extend$1(normalized, raw), isObject(comp) && cache.set(comp, normalized), normalized) : (isObject(comp) && cache.set(comp, null), null);
}
function isEmitListener(options, key) {
    return !(!options || !isOn(key)) && (key = key.slice(2).replace(/Once$/, ""), hasOwn$1(options, key[0].toLowerCase() + key.slice(1)) || hasOwn$1(options, hyphenate(key)) || hasOwn$1(options, key));
}
var currentRenderingInstance = null, currentScopeId = null;
function setCurrentRenderingInstance(instance) {
    var prev = currentRenderingInstance;
    return currentRenderingInstance = instance, currentScopeId = instance && instance.type.__scopeId || null, prev;
}
function pushScopeId(id) {
    currentScopeId = id;
}
function popScopeId() {
    currentScopeId = null;
}
function withCtx(fn) {
    var ctx = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : currentRenderingInstance, isNonScopedSlot = arguments.length > 2 ? arguments[2] : void 0;
    if (!ctx) return fn;
    if (fn._n) return fn;
    var renderFnWithContext = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        renderFnWithContext._d && setBlockTracking(-1);
        var prevInstance = setCurrentRenderingInstance(ctx);
        var res;
        try {
            res = fn.apply(void 0, _toConsumableArray(args));
        } finally{
            setCurrentRenderingInstance(prevInstance), renderFnWithContext._d && setBlockTracking(1);
        }
        return res;
    };
    return renderFnWithContext._n = !0, renderFnWithContext._c = !0, renderFnWithContext._d = !0, renderFnWithContext;
}
function renderComponentRoot(instance) {
    var Component = instance.type, vnode = instance.vnode, proxy = instance.proxy, withProxy = instance.withProxy, props2 = instance.props, _instance_propsOptions = _slicedToArray(instance.propsOptions, 1), propsOptions = _instance_propsOptions[0], slots = instance.slots, attrs = instance.attrs, emit = instance.emit, render = instance.render, renderCache = instance.renderCache, data2 = instance.data, setupState = instance.setupState, ctx = instance.ctx, inheritAttrs = instance.inheritAttrs;
    var result, fallthroughAttrs;
    var prev = setCurrentRenderingInstance(instance);
    try {
        if (4 & vnode.shapeFlag) {
            var proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props2, setupState, data2, ctx)), fallthroughAttrs = attrs;
        } else {
            var render2 = Component;
            result = normalizeVNode(render2.length > 1 ? render2(props2, {
                attrs: attrs,
                slots: slots,
                emit: emit
            }) : render2(props2, null)), fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        blockStack.length = 0, handleError(err, instance, 1), result = createVNode(Comment);
    }
    var root = result;
    if (fallthroughAttrs && !1 !== inheritAttrs) {
        var keys2 = Object.keys(fallthroughAttrs), shapeFlag = root.shapeFlag;
        keys2.length && 7 & shapeFlag && (propsOptions && keys2.some(isModelListener) && (fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions)), root = cloneVNode(root, fallthroughAttrs));
    }
    return vnode.dirs && (root = cloneVNode(root), root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs), vnode.transition && (root.transition = vnode.transition), result = root, setCurrentRenderingInstance(prev), result;
}
var getFunctionalFallthrough = function(attrs) {
    var res;
    for(var key in attrs)("class" === key || "style" === key || isOn(key)) && ((res || (res = {}))[key] = attrs[key]);
    return res;
}, filterModelListeners = function(attrs, props2) {
    var res = {};
    for(var key in attrs)isModelListener(key) && key.slice(9) in props2 || (res[key] = attrs[key]);
    return res;
};
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    var nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return !0;
    for(var i = 0; i < nextKeys.length; i++){
        var key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return !0;
    }
    return !1;
}
function inject(key, defaultValue) {
    var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    var instance = currentInstance || currentRenderingInstance;
    if (instance) {
        var provides = null == instance.parent ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
        if (provides && key in provides) return provides[key];
        if (arguments.length > 1) return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    }
}
var INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
    return doWatch(source, cb, options);
}
function doWatch(source, cb) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EMPTY_OBJ, immediate = _ref.immediate, deep = _ref.deep, flush = _ref.flush, onTrack = _ref.onTrack, onTrigger = _ref.onTrigger;
    var instance = currentInstance;
    var getter, cleanup, forceTrigger = !1, isMultiSource = !1;
    if (isRef(source) ? (getter = function() {
        return source.value;
    }, forceTrigger = isShallow(source)) : isReactive(source) ? (getter = function() {
        return source;
    }, deep = !0) : isArray$1(source) ? (isMultiSource = !0, forceTrigger = source.some(function(s) {
        return isReactive(s) || isShallow(s);
    }), getter = function() {
        return source.map(function(s) {
            return isRef(s) ? s.value : isReactive(s) ? traverse(s) : isFunction(s) ? callWithErrorHandling(s, instance, 2) : void 0;
        });
    }) : getter = isFunction(source) ? cb ? function() {
        return callWithErrorHandling(source, instance, 2);
    } : function() {
        if (!instance || !instance.isUnmounted) return cleanup && cleanup(), callWithAsyncErrorHandling(source, instance, 3, [
            onCleanup
        ]);
    } : NOOP, cb && deep) {
        var baseGetter = getter;
        getter = function() {
            return traverse(baseGetter());
        };
    }
    var ssrCleanup, onCleanup = function(fn) {
        cleanup = effect.onStop = function() {
            callWithErrorHandling(fn, instance, 4);
        };
    };
    if (isInSSRComponentSetup) {
        if (onCleanup = NOOP, cb ? immediate && callWithAsyncErrorHandling(cb, instance, 3, [
            getter(),
            isMultiSource ? [] : void 0,
            onCleanup
        ]) : getter(), "sync" !== flush) return NOOP;
        {
            var ctx = useSSRContext();
            ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
        }
    }
    var oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    var job = function() {
        if (effect.active) if (cb) {
            var newValue = effect.run();
            (deep || forceTrigger || (isMultiSource ? newValue.some(function(v1, i) {
                return hasChanged(v1, oldValue[i]);
            }) : hasChanged(newValue, oldValue))) && (cleanup && cleanup(), callWithAsyncErrorHandling(cb, instance, 3, [
                newValue,
                oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                onCleanup
            ]), oldValue = newValue);
        } else effect.run();
    };
    var scheduler;
    job.allowRecurse = !!cb, "sync" === flush ? scheduler = job : "post" === flush ? scheduler = function() {
        return queuePostRenderEffect(job, instance && instance.suspense);
    } : (job.pre = !0, instance && (job.id = instance.uid), scheduler = function() {
        return queueJob(job);
    });
    var effect = new ReactiveEffect(getter, scheduler);
    cb ? immediate ? job() : oldValue = effect.run() : "post" === flush ? queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense) : effect.run();
    var unwatch = function() {
        effect.stop(), instance && instance.scope && remove(instance.scope.effects, effect);
    };
    return ssrCleanup && ssrCleanup.push(unwatch), unwatch;
}
function instanceWatch(source, value, options) {
    var publicThis = this.proxy, getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : function() {
        return publicThis[source];
    } : source.bind(publicThis, publicThis);
    var cb;
    isFunction(value) ? cb = value : (cb = value.handler, options = value);
    var cur = currentInstance;
    setCurrentInstance(this);
    var res = doWatch(getter, cb.bind(publicThis), options);
    return cur ? setCurrentInstance(cur) : unsetCurrentInstance(), res;
}
function createPathGetter(ctx, path) {
    var segments = path.split(".");
    return function() {
        var cur = ctx;
        for(var i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function traverse(value, seen) {
    if (!isObject(value) || value.__v_skip) return value;
    if ((seen = seen || new Set).has(value)) return value;
    if (seen.add(value), isRef(value)) traverse(value.value, seen);
    else if (isArray$1(value)) for(var i = 0; i < value.length; i++)traverse(value[i], seen);
    else if (isSet(value) || isMap(value)) value.forEach(function(v1) {
        traverse(v1, seen);
    });
    else if (isPlainObject(value)) for(var key in value)traverse(value[key], seen);
    return value;
}
var TransitionHookValidator = [
    Function,
    Array
];
Boolean, Boolean;
function getLeavingNodesForType(state, vnode) {
    var leavingVNodes = state.leavingVNodes;
    var leavingVNodesCache = leavingVNodes.get(vnode.type);
    return leavingVNodesCache || (leavingVNodesCache = Object.create(null), leavingVNodes.set(vnode.type, leavingVNodesCache)), leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props2, state, instance) {
    var appear = props2.appear, mode = props2.mode, tmp = props2.persisted, persisted = tmp === void 0 ? !1 : tmp, onBeforeEnter = props2.onBeforeEnter, onEnter = props2.onEnter, onAfterEnter = props2.onAfterEnter, onEnterCancelled = props2.onEnterCancelled, onBeforeLeave = props2.onBeforeLeave, onLeave = props2.onLeave, onAfterLeave = props2.onAfterLeave, onLeaveCancelled = props2.onLeaveCancelled, onBeforeAppear = props2.onBeforeAppear, onAppear = props2.onAppear, onAfterAppear = props2.onAfterAppear, onAppearCancelled = props2.onAppearCancelled, key = String(vnode.key), leavingVNodesCache = getLeavingNodesForType(state, vnode), callHook2 = function(hook, args) {
        hook && callWithAsyncErrorHandling(hook, instance, 9, args);
    }, callAsyncHook = function(hook, args) {
        var done = args[1];
        callHook2(hook, args), isArray$1(hook) ? hook.every(function(hook2) {
            return hook2.length <= 1;
        }) && done() : hook.length <= 1 && done();
    }, hooks = {
        mode: mode,
        persisted: persisted,
        beforeEnter: function beforeEnter(el) {
            var hook = onBeforeEnter;
            if (!state.isMounted) {
                if (!appear) return;
                hook = onBeforeAppear || onBeforeEnter;
            }
            el._leaveCb && el._leaveCb(!0);
            var leavingVNode = leavingVNodesCache[key];
            leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb && leavingVNode.el._leaveCb(), callHook2(hook, [
                el
            ]);
        },
        enter: function enter(el) {
            var hook = onEnter, afterHook = onAfterEnter, cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (!appear) return;
                hook = onAppear || onEnter, afterHook = onAfterAppear || onAfterEnter, cancelHook = onAppearCancelled || onEnterCancelled;
            }
            var called = !1;
            var done = el._enterCb = function(cancelled) {
                called || (called = !0, callHook2(cancelled ? cancelHook : afterHook, [
                    el
                ]), hooks.delayedLeave && hooks.delayedLeave(), el._enterCb = void 0);
            };
            hook ? callAsyncHook(hook, [
                el,
                done
            ]) : done();
        },
        leave: function leave(el, remove2) {
            var key2 = String(vnode.key);
            if (el._enterCb && el._enterCb(!0), state.isUnmounting) return remove2();
            callHook2(onBeforeLeave, [
                el
            ]);
            var called = !1;
            var done = el._leaveCb = function(cancelled) {
                called || (called = !0, remove2(), callHook2(cancelled ? onLeaveCancelled : onAfterLeave, [
                    el
                ]), el._leaveCb = void 0, leavingVNodesCache[key2] === vnode && delete leavingVNodesCache[key2]);
            };
            leavingVNodesCache[key2] = vnode, onLeave ? callAsyncHook(onLeave, [
                el,
                done
            ]) : done();
        },
        clone: function(vnode2) {
            return resolveTransitionHooks(vnode2, props2, state, instance);
        }
    };
    return hooks;
}
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) return (vnode = cloneVNode(vnode)).children = null, vnode;
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
    6 & vnode.shapeFlag && vnode.component ? setTransitionHooks(vnode.component.subTree, hooks) : 128 & vnode.shapeFlag ? (vnode.ssContent.transition = hooks.clone(vnode.ssContent), vnode.ssFallback.transition = hooks.clone(vnode.ssFallback)) : vnode.transition = hooks;
}
function getTransitionRawChildren(children) {
    var keepComment = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, parentKey = arguments.length > 2 ? arguments[2] : void 0;
    var ret = [], keyedFragmentCount = 0;
    for(var i = 0; i < children.length; i++){
        var child = children[i];
        var key = null == parentKey ? child.key : String(parentKey) + String(null != child.key ? child.key : i);
        child.type === Fragment ? (128 & child.patchFlag && keyedFragmentCount++, ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key))) : (keepComment || child.type !== Comment) && ret.push(null != key ? cloneVNode(child, {
            key: key
        }) : child);
    }
    if (keyedFragmentCount > 1) for(var i1 = 0; i1 < ret.length; i1++)ret[i1].patchFlag = -2;
    return ret;
}
function defineComponent(options) {
    return isFunction(options) ? {
        setup: options,
        name: options.name
    } : options;
}
var isAsyncWrapper = function(i) {
    return !!i.type.__asyncLoader;
}, isKeepAlive = function(vnode) {
    return vnode.type.__isKeepAlive;
};
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type2) {
    var target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : currentInstance;
    var wrappedHook = hook.__wdc || (hook.__wdc = function() {
        var current = target;
        for(; current;){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    if (injectHook(type2, wrappedHook, target), target) {
        var current = target.parent;
        for(; current && current.parent;)isKeepAlive(current.parent.vnode) && injectToKeepAliveRoot(wrappedHook, type2, target, current), current = current.parent;
    }
}
function injectToKeepAliveRoot(hook, type2, target, keepAliveRoot) {
    var injected = injectHook(type2, hook, keepAliveRoot, !0);
    onUnmounted(function() {
        remove(keepAliveRoot[type2], injected);
    }, target);
}
function injectHook(type2, hook) {
    var target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : currentInstance, prepend = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (target) {
        var hooks = target[type2] || (target[type2] = []), wrappedHook = hook.__weh || (hook.__weh = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            if (target.isUnmounted) return;
            pauseTracking(), setCurrentInstance(target);
            var res = callWithAsyncErrorHandling(hook, target, type2, args);
            return unsetCurrentInstance(), resetTracking(), res;
        });
        return prepend ? hooks.unshift(wrappedHook) : hooks.push(wrappedHook), wrappedHook;
    }
}
var createHook = function(lifecycle) {
    return function(hook) {
        var target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : currentInstance;
        return (!isInSSRComponentSetup || "sp" === lifecycle) && injectHook(lifecycle, function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return hook.apply(void 0, _toConsumableArray(args));
        }, target);
    };
}, onBeforeMount = createHook("bm"), onMounted = createHook("m"), onBeforeUpdate = createHook("bu"), onUpdated = createHook("u"), onBeforeUnmount = createHook("bum"), onUnmounted = createHook("um"), onServerPrefetch = createHook("sp"), onRenderTriggered = createHook("rtg"), onRenderTracked = createHook("rtc");
function onErrorCaptured(hook) {
    var target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : currentInstance;
    injectHook("ec", hook, target);
}
function withDirectives(vnode, directives) {
    var internalInstance = currentRenderingInstance;
    if (null === internalInstance) return vnode;
    var instance = getExposeProxy(internalInstance) || internalInstance.proxy, bindings = vnode.dirs || (vnode.dirs = []);
    for(var i = 0; i < directives.length; i++){
        var _directives_i = _slicedToArray(directives[i], 4), dir = _directives_i[0], value = _directives_i[1], arg = _directives_i[2], tmp = _directives_i[3], modifiers = tmp === void 0 ? EMPTY_OBJ : tmp;
        dir && (isFunction(dir) && (dir = {
            mounted: dir,
            updated: dir
        }), dir.deep && traverse(value), bindings.push({
            dir: dir,
            instance: instance,
            value: value,
            oldValue: void 0,
            arg: arg,
            modifiers: modifiers
        }));
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    var bindings = vnode.dirs, oldBindings = prevVNode && prevVNode.dirs;
    for(var i = 0; i < bindings.length; i++){
        var binding = bindings[i];
        oldBindings && (binding.oldValue = oldBindings[i].value);
        var hook = binding.dir[name];
        hook && (pauseTracking(), callWithAsyncErrorHandling(hook, instance, 8, [
            vnode.el,
            binding,
            vnode,
            prevVNode
        ]), resetTracking());
    }
}
var NULL_DYNAMIC_COMPONENT = Symbol();
function renderList(source, renderItem, cache, index) {
    var ret;
    var cached = cache && cache[index];
    if (isArray$1(source) || isString(source)) {
        ret = new Array(source.length);
        for(var i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    } else if ("number" == typeof source) {
        ret = new Array(source);
        for(var i1 = 0; i1 < source; i1++)ret[i1] = renderItem(i1 + 1, i1, void 0, cached && cached[i1]);
    } else if (isObject(source)) if (source[Symbol.iterator]) ret = Array.from(source, function(item, i) {
        return renderItem(item, i, void 0, cached && cached[i]);
    });
    else {
        var keys2 = Object.keys(source);
        ret = new Array(keys2.length);
        for(var i2 = 0, l1 = keys2.length; i2 < l1; i2++){
            var key = keys2[i2];
            ret[i2] = renderItem(source[key], key, i2, cached && cached[i2]);
        }
    }
    else ret = [];
    return cache && (cache[index] = ret), ret;
}
function renderSlot(slots, name) {
    var props2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, fallback = arguments.length > 3 ? arguments[3] : void 0, noSlotted = arguments.length > 4 ? arguments[4] : void 0;
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) return "default" !== name && (props2.name = name), createVNode("slot", props2, fallback && fallback());
    var slot = slots[name];
    slot && slot._c && (slot._d = !1), openBlock();
    var validSlotContent = slot && ensureValidVNode(slot(props2)), rendered = createBlock(Fragment, {
        key: props2.key || validSlotContent && validSlotContent.key || "_".concat(name)
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && 1 === slots._ ? 64 : -2);
    return !noSlotted && rendered.scopeId && (rendered.slotScopeIds = [
        rendered.scopeId + "-s"
    ]), slot && slot._c && (slot._d = !0), rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some(function(child) {
        return !isVNode(child) || child.type !== Comment && !(child.type === Fragment && !ensureValidVNode(child.children));
    }) ? vnodes : null;
}
var getPublicInstance = function(i) {
    return i ? isStatefulComponent(i) ? getExposeProxy(i) || i.proxy : getPublicInstance(i.parent) : null;
}, publicPropertiesMap = extend$1(Object.create(null), {
    $: function(i) {
        return i;
    },
    $el: function(i) {
        return i.vnode.el;
    },
    $data: function(i) {
        return i.data;
    },
    $props: function(i) {
        return i.props;
    },
    $attrs: function(i) {
        return i.attrs;
    },
    $slots: function(i) {
        return i.slots;
    },
    $refs: function(i) {
        return i.refs;
    },
    $parent: function(i) {
        return getPublicInstance(i.parent);
    },
    $root: function(i) {
        return getPublicInstance(i.root);
    },
    $emit: function(i) {
        return i.emit;
    },
    $options: function(i) {
        return resolveMergedOptions(i);
    },
    $forceUpdate: function(i) {
        return i.f || (i.f = function() {
            return queueJob(i.update);
        });
    },
    $nextTick: function(i) {
        return i.n || (i.n = nextTick.bind(i.proxy));
    },
    $watch: function(i) {
        return instanceWatch.bind(i);
    }
}), hasSetupBinding = function(state, key) {
    return state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn$1(state, key);
}, PublicInstanceProxyHandlers = {
    get: function get(param, key) {
        var instance = param._;
        var ctx = instance.ctx, setupState = instance.setupState, data2 = instance.data, props2 = instance.props, accessCache = instance.accessCache, type2 = instance.type, appContext = instance.appContext;
        var normalizedProps;
        if ("$" !== key[0]) {
            var n = accessCache[key];
            if (void 0 !== n) switch(n){
                case 1:
                    return setupState[key];
                case 2:
                    return data2[key];
                case 4:
                    return ctx[key];
                case 3:
                    return props2[key];
            }
            else {
                if (hasSetupBinding(setupState, key)) return accessCache[key] = 1, setupState[key];
                if (data2 !== EMPTY_OBJ && hasOwn$1(data2, key)) return accessCache[key] = 2, data2[key];
                if ((normalizedProps = instance.propsOptions[0]) && hasOwn$1(normalizedProps, key)) return accessCache[key] = 3, props2[key];
                if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) return accessCache[key] = 4, ctx[key];
                shouldCacheAccess && (accessCache[key] = 0);
            }
        }
        var publicGetter = publicPropertiesMap[key];
        var cssModule, globalProperties;
        return publicGetter ? ("$attrs" === key && track(instance, 0, key), publicGetter(instance)) : (cssModule = type2.__cssModules) && (cssModule = cssModule[key]) ? cssModule : ctx !== EMPTY_OBJ && hasOwn$1(ctx, key) ? (accessCache[key] = 4, ctx[key]) : (globalProperties = appContext.config.globalProperties, hasOwn$1(globalProperties, key) ? globalProperties[key] : void 0);
    },
    set: function set(param, key, value) {
        var instance = param._;
        var data2 = instance.data, setupState = instance.setupState, ctx = instance.ctx;
        return hasSetupBinding(setupState, key) ? (setupState[key] = value, !0) : data2 !== EMPTY_OBJ && hasOwn$1(data2, key) ? (data2[key] = value, !0) : !hasOwn$1(instance.props, key) && ("$" !== key[0] || !(key.slice(1) in instance)) && (ctx[key] = value, !0);
    },
    has: function has(param, key) {
        var _param__ = param._, data2 = _param__.data, setupState = _param__.setupState, accessCache = _param__.accessCache, ctx = _param__.ctx, appContext = _param__.appContext, propsOptions = _param__.propsOptions;
        var normalizedProps;
        return !!accessCache[key] || data2 !== EMPTY_OBJ && hasOwn$1(data2, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn$1(normalizedProps, key) || hasOwn$1(ctx, key) || hasOwn$1(publicPropertiesMap, key) || hasOwn$1(appContext.config.globalProperties, key);
    },
    defineProperty: function defineProperty(target, key, descriptor) {
        return null != descriptor.get ? target._.accessCache[key] = 0 : hasOwn$1(descriptor, "value") && this.set(target, key, descriptor.value, null), Reflect.defineProperty(target, key, descriptor);
    }
};
var shouldCacheAccess = !0;
function applyOptions(instance) {
    var _loop = function(key1) {
        var opt = computedOptions[key1], get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP, set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP, c = computed({
            get: get2,
            set: set2
        });
        Object.defineProperty(ctx, key1, {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return c.value;
            },
            set: function(v1) {
                return c.value = v1;
            }
        });
    };
    var registerLifecycleHook = function registerLifecycleHook(register, hook) {
        isArray$1(hook) ? hook.forEach(function(_hook) {
            return register(_hook.bind(publicThis));
        }) : hook && register(hook.bind(publicThis));
    };
    var options = resolveMergedOptions(instance), publicThis = instance.proxy, ctx = instance.ctx;
    shouldCacheAccess = !1, options.beforeCreate && callHook(options.beforeCreate, instance, "bc");
    var dataOptions = options.data, computedOptions = options.computed, methods = options.methods, watchOptions = options.watch, provideOptions = options.provide, injectOptions = options.inject, created = options.created, beforeMount = options.beforeMount, mounted = options.mounted, beforeUpdate = options.beforeUpdate, updated = options.updated, activated = options.activated, deactivated = options.deactivated, beforeDestroy = options.beforeDestroy, beforeUnmount = options.beforeUnmount, destroyed = options.destroyed, unmounted = options.unmounted, render = options.render, renderTracked = options.renderTracked, renderTriggered = options.renderTriggered, errorCaptured = options.errorCaptured, serverPrefetch = options.serverPrefetch, expose = options.expose, inheritAttrs = options.inheritAttrs, components2 = options.components, directives = options.directives, filters = options.filters;
    if (injectOptions && function resolveInjections(injectOptions, ctx) {
        var _loop = function(key) {
            var opt = injectOptions[key];
            var injected = void 0;
            injected = isObject(opt) ? "default" in opt ? inject(opt.from || key, opt.default, !0) : inject(opt.from || key) : inject(opt), isRef(injected) && unwrapRef ? Object.defineProperty(ctx, key, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return injected.value;
                },
                set: function(v1) {
                    return injected.value = v1;
                }
            }) : ctx[key] = injected;
        };
        var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NOOP, unwrapRef = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        isArray$1(injectOptions) && (injectOptions = normalizeInject(injectOptions));
        for(var key in injectOptions)_loop(key);
    }(injectOptions, ctx, null, instance.appContext.config.unwrapInjectedRef), methods) for(var key in methods){
        var methodHandler = methods[key];
        isFunction(methodHandler) && (ctx[key] = methodHandler.bind(publicThis));
    }
    if (dataOptions) {
        var data2 = dataOptions.call(publicThis, publicThis);
        isObject(data2) && (instance.data = reactive(data2));
    }
    if (shouldCacheAccess = !0, computedOptions) for(var key1 in computedOptions)_loop(key1);
    if (watchOptions) for(var key2 in watchOptions)createWatcher(watchOptions[key2], ctx, publicThis, key2);
    if (provideOptions) {
        var provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach(function(key) {
            !function provide(key, value) {
                if (currentInstance) {
                    var provides = currentInstance.provides;
                    var parentProvides = currentInstance.parent && currentInstance.parent.provides;
                    parentProvides === provides && (provides = currentInstance.provides = Object.create(parentProvides)), provides[key] = value;
                }
            }(key, provides[key]);
        });
    }
    if (created && callHook(created, instance, "c"), registerLifecycleHook(onBeforeMount, beforeMount), registerLifecycleHook(onMounted, mounted), registerLifecycleHook(onBeforeUpdate, beforeUpdate), registerLifecycleHook(onUpdated, updated), registerLifecycleHook(onActivated, activated), registerLifecycleHook(onDeactivated, deactivated), registerLifecycleHook(onErrorCaptured, errorCaptured), registerLifecycleHook(onRenderTracked, renderTracked), registerLifecycleHook(onRenderTriggered, renderTriggered), registerLifecycleHook(onBeforeUnmount, beforeUnmount), registerLifecycleHook(onUnmounted, unmounted), registerLifecycleHook(onServerPrefetch, serverPrefetch), isArray$1(expose)) if (expose.length) {
        var exposed = instance.exposed || (instance.exposed = {});
        expose.forEach(function(key) {
            Object.defineProperty(exposed, key, {
                get: function() {
                    return publicThis[key];
                },
                set: function(val) {
                    return publicThis[key] = val;
                }
            });
        });
    } else instance.exposed || (instance.exposed = {});
    render && instance.render === NOOP && (instance.render = render), null != inheritAttrs && (instance.inheritAttrs = inheritAttrs), components2 && (instance.components = components2), directives && (instance.directives = directives);
}
function callHook(hook, instance, type2) {
    callWithAsyncErrorHandling(isArray$1(hook) ? hook.map(function(h) {
        return h.bind(instance.proxy);
    }) : hook.bind(instance.proxy), instance, type2);
}
function createWatcher(raw, ctx, publicThis, key) {
    var getter = key.includes(".") ? createPathGetter(publicThis, key) : function() {
        return publicThis[key];
    };
    if (isString(raw)) {
        var handler = ctx[raw];
        isFunction(handler) && watch(getter, handler);
    } else if (isFunction(raw)) watch(getter, raw.bind(publicThis));
    else if (isObject(raw)) if (isArray$1(raw)) raw.forEach(function(r) {
        return createWatcher(r, ctx, publicThis, key);
    });
    else {
        var handler1 = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        isFunction(handler1) && watch(getter, handler1, raw);
    }
}
function resolveMergedOptions(instance) {
    var base = instance.type, mixins = base.mixins, extendsOptions = base.extends, _instance_appContext = instance.appContext, globalMixins = _instance_appContext.mixins, cache = _instance_appContext.optionsCache, _instance_appContext_config = _instance_appContext.config, optionMergeStrategies = _instance_appContext_config.optionMergeStrategies, cached = cache.get(base);
    var resolved;
    return cached ? resolved = cached : globalMixins.length || mixins || extendsOptions ? (resolved = {}, globalMixins.length && globalMixins.forEach(function(m) {
        return mergeOptions(resolved, m, optionMergeStrategies, !0);
    }), mergeOptions(resolved, base, optionMergeStrategies)) : resolved = base, isObject(base) && cache.set(base, resolved), resolved;
}
function mergeOptions(to, from, strats) {
    var asMixin = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    var mixins = from.mixins, extendsOptions = from.extends;
    extendsOptions && mergeOptions(to, extendsOptions, strats, !0), mixins && mixins.forEach(function(m) {
        return mergeOptions(to, m, strats, !0);
    });
    for(var key in from)if (asMixin && "expose" === key) ;
    else {
        var strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
var internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    watch: function mergeWatchOptions(to, from) {
        if (!to) return from;
        if (!from) return to;
        var merged = extend$1(Object.create(null), to);
        for(var key in from)merged[key] = mergeAsArray(to[key], from[key]);
        return merged;
    },
    provide: mergeDataFn,
    inject: function mergeInject(to, from) {
        return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
    }
};
function mergeDataFn(to, from) {
    return from ? to ? function mergedDataFn() {
        return extend$1(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
    } : from : to;
}
function normalizeInject(raw) {
    if (isArray$1(raw)) {
        var res = {};
        for(var i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? _toConsumableArray(new Set([].concat(to, from))) : from;
}
function mergeObjectOptions(to, from) {
    return to ? extend$1(extend$1(Object.create(null), to), from) : from;
}
function initProps(instance, rawProps, isStateful) {
    var isSSR = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    var props2 = {}, attrs = {};
    def(attrs, InternalObjectKey, 1), instance.propsDefaults = Object.create(null), setFullProps(instance, rawProps, props2, attrs);
    for(var key in instance.propsOptions[0])key in props2 || (props2[key] = void 0);
    isStateful ? instance.props = isSSR ? props2 : function shallowReactive(target) {
        return createReactiveObject(target, !1, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
    }(props2) : instance.type.props ? instance.props = props2 : instance.props = attrs, instance.attrs = attrs;
}
function setFullProps(instance, rawProps, props2, attrs) {
    var _instance_propsOptions = _slicedToArray(instance.propsOptions, 2), options = _instance_propsOptions[0], needCastKeys = _instance_propsOptions[1];
    var rawCastValues, hasAttrsChanged = !1;
    if (rawProps) for(var key in rawProps){
        if (isReservedProp(key)) continue;
        var value = rawProps[key];
        var camelKey = void 0;
        options && hasOwn$1(options, camelKey = camelize(key)) ? needCastKeys && needCastKeys.includes(camelKey) ? (rawCastValues || (rawCastValues = {}))[camelKey] = value : props2[camelKey] = value : isEmitListener(instance.emitsOptions, key) || key in attrs && value === attrs[key] || (attrs[key] = value, hasAttrsChanged = !0);
    }
    if (needCastKeys) {
        var rawCurrentProps = toRaw(props2), castValues = rawCastValues || EMPTY_OBJ;
        for(var i = 0; i < needCastKeys.length; i++){
            var key1 = needCastKeys[i];
            props2[key1] = resolvePropValue(options, rawCurrentProps, key1, castValues[key1], instance, !hasOwn$1(castValues, key1));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props2, key, value, instance, isAbsent) {
    var opt = options[key];
    if (null != opt) {
        var hasDefault = hasOwn$1(opt, "default");
        if (hasDefault && void 0 === value) {
            var defaultValue = opt.default;
            if (opt.type !== Function && isFunction(defaultValue)) {
                var propsDefaults = instance.propsDefaults;
                key in propsDefaults ? value = propsDefaults[key] : (setCurrentInstance(instance), value = propsDefaults[key] = defaultValue.call(null, props2), unsetCurrentInstance());
            } else value = defaultValue;
        }
        opt[0] && (isAbsent && !hasDefault ? value = !1 : !opt[1] || "" !== value && value !== hyphenate(key) || (value = !0));
    }
    return value;
}
function normalizePropsOptions(comp, appContext) {
    var asMixin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    var cache = appContext.propsCache, cached = cache.get(comp);
    if (cached) return cached;
    var raw = comp.props, normalized = {}, needCastKeys = [];
    var hasExtends = !1;
    if (!isFunction(comp)) {
        var extendProps = function(raw2) {
            var _needCastKeys;
            hasExtends = !0;
            var _normalizePropsOptions = _slicedToArray(normalizePropsOptions(raw2, appContext, !0), 2), props2 = _normalizePropsOptions[0], keys2 = _normalizePropsOptions[1];
            extend$1(normalized, props2), keys2 && (_needCastKeys = needCastKeys).push.apply(_needCastKeys, _toConsumableArray(keys2));
        };
        !asMixin && appContext.mixins.length && appContext.mixins.forEach(extendProps), comp.extends && extendProps(comp.extends), comp.mixins && comp.mixins.forEach(extendProps);
    }
    if (!raw && !hasExtends) return isObject(comp) && cache.set(comp, EMPTY_ARR), EMPTY_ARR;
    if (isArray$1(raw)) for(var i = 0; i < raw.length; i++){
        var normalizedKey = camelize(raw[i]);
        validatePropName(normalizedKey) && (normalized[normalizedKey] = EMPTY_OBJ);
    }
    else if (raw) for(var key in raw){
        var normalizedKey1 = camelize(key);
        if (validatePropName(normalizedKey1)) {
            var opt = raw[key], prop = normalized[normalizedKey1] = isArray$1(opt) || isFunction(opt) ? {
                type: opt
            } : Object.assign({}, opt);
            if (prop) {
                var booleanIndex = getTypeIndex(Boolean, prop.type), stringIndex = getTypeIndex(String, prop.type);
                prop[0] = booleanIndex > -1, prop[1] = stringIndex < 0 || booleanIndex < stringIndex, (booleanIndex > -1 || hasOwn$1(prop, "default")) && needCastKeys.push(normalizedKey1);
            }
        }
    }
    var res = [
        normalized,
        needCastKeys
    ];
    return isObject(comp) && cache.set(comp, res), res;
}
function validatePropName(key) {
    return "$" !== key[0];
}
function getType(ctor) {
    var match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : null === ctor ? "null" : "";
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type2, expectedTypes) {
    return isArray$1(expectedTypes) ? expectedTypes.findIndex(function(t) {
        return isSameType(t, type2);
    }) : isFunction(expectedTypes) && isSameType(expectedTypes, type2) ? 0 : -1;
}
var isInternalKey = function(key) {
    return "_" === key[0] || "$stable" === key;
}, normalizeSlotValue = function(value) {
    return isArray$1(value) ? value.map(normalizeVNode) : [
        normalizeVNode(value)
    ];
}, normalizeSlot = function(key, rawSlot, ctx) {
    if (rawSlot._n) return rawSlot;
    var normalized = withCtx(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return normalizeSlotValue(rawSlot.apply(void 0, _toConsumableArray(args)));
    }, ctx);
    return normalized._c = !1, normalized;
}, normalizeObjectSlots = function(rawSlots, slots, instance) {
    var _loop = function(key) {
        if (isInternalKey(key)) return "continue";
        var value = rawSlots[key];
        if (isFunction(value)) slots[key] = normalizeSlot(0, value, ctx);
        else if (null != value) {
            var normalized = normalizeSlotValue(value);
            slots[key] = function() {
                return normalized;
            };
        }
    };
    var ctx = rawSlots._ctx;
    for(var key in rawSlots)_loop(key);
}, normalizeVNodeSlots = function(instance, children) {
    var normalized = normalizeSlotValue(children);
    instance.slots.default = function() {
        return normalized;
    };
};
function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: NO,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    };
}
var uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp2(rootComponent) {
        var rootProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var _plugin;
        isFunction(rootComponent) || (rootComponent = Object.assign({}, rootComponent)), null == rootProps || isObject(rootProps) || (rootProps = null);
        var context = createAppContext(), installedPlugins = new Set;
        var isMounted = !1;
        var app2 = context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version: version,
            get config () {
                return context.config;
            },
            set config (v){},
            use: function(plugin) {
                for(var _len = arguments.length, options = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    options[_key - 1] = arguments[_key];
                }
                return installedPlugins.has(plugin) || (plugin && isFunction(plugin.install) ? (installedPlugins.add(plugin), (_plugin = plugin).install.apply(_plugin, [
                    app2
                ].concat(_toConsumableArray(options)))) : isFunction(plugin) && (installedPlugins.add(plugin), plugin.apply(void 0, [
                    app2
                ].concat(_toConsumableArray(options))))), app2;
            },
            mixin: function(mixin) {
                return context.mixins.includes(mixin) || context.mixins.push(mixin), app2;
            },
            component: function(name, component) {
                return component ? (context.components[name] = component, app2) : context.components[name];
            },
            directive: function(name, directive) {
                return directive ? (context.directives[name] = directive, app2) : context.directives[name];
            },
            mount: function mount(rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    var vnode = createVNode(rootComponent, rootProps);
                    return vnode.appContext = context, isHydrate && hydrate ? hydrate(vnode, rootContainer) : render(vnode, rootContainer, isSVG), isMounted = !0, app2._container = rootContainer, rootContainer.__vue_app__ = app2, getExposeProxy(vnode.component) || vnode.component.proxy;
                }
            },
            unmount: function unmount() {
                isMounted && (render(null, app2._container), delete app2._container.__vue_app__);
            },
            provide: function(key, value) {
                return context.provides[key] = value, app2;
            }
        };
        return app2;
    };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
    var isUnmount = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (isArray$1(rawRef)) return void rawRef.forEach(function(r, i) {
        return setRef(r, oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount);
    });
    if (isAsyncWrapper(vnode) && !isUnmount) return;
    var refValue = 4 & vnode.shapeFlag ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el, value = isUnmount ? null : refValue, owner = rawRef.i, ref = rawRef.r, oldRef = oldRawRef && oldRawRef.r, refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs, setupState = owner.setupState;
    if (null != oldRef && oldRef !== ref && (isString(oldRef) ? (refs[oldRef] = null, hasOwn$1(setupState, oldRef) && (setupState[oldRef] = null)) : isRef(oldRef) && (oldRef.value = null)), isFunction(ref)) callWithErrorHandling(ref, owner, 12, [
        value,
        refs
    ]);
    else {
        var _isString = isString(ref), _isRef = isRef(ref);
        if (_isString || _isRef) {
            var doSet = function() {
                if (rawRef.f) {
                    var existing = _isString ? hasOwn$1(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
                    isUnmount ? isArray$1(existing) && remove(existing, refValue) : isArray$1(existing) ? existing.includes(refValue) || existing.push(refValue) : _isString ? (refs[ref] = [
                        refValue
                    ], hasOwn$1(setupState, ref) && (setupState[ref] = refs[ref])) : (ref.value = [
                        refValue
                    ], rawRef.k && (refs[rawRef.k] = ref.value));
                } else _isString ? (refs[ref] = value, hasOwn$1(setupState, ref) && (setupState[ref] = value)) : _isRef && (ref.value = value, rawRef.k && (refs[rawRef.k] = value));
            };
            value ? (doSet.id = -1, queuePostRenderEffect(doSet, parentSuspense)) : doSet();
        }
    }
}
var queuePostRenderEffect = function queueEffectWithSuspense(fn, suspense) {
    var _suspense_effects;
    suspense && suspense.pendingBranch ? isArray$1(fn) ? (_suspense_effects = suspense.effects).push.apply(_suspense_effects, _toConsumableArray(fn)) : suspense.effects.push(fn) : function queuePostFlushCb(cb) {
        var _pendingPostFlushCbs;
        isArray$1(cb) ? (_pendingPostFlushCbs = pendingPostFlushCbs).push.apply(_pendingPostFlushCbs, _toConsumableArray(cb)) : activePostFlushCbs && activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex) || pendingPostFlushCbs.push(cb), queueFlush();
    }(fn);
};
function createRenderer(options) {
    return function baseCreateRenderer(options, createHydrationFns) {
        (_globalThis || (_globalThis = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})).__VUE__ = !0;
        var hostInsert = options.insert, hostRemove = options.remove, hostPatchProp = options.patchProp, hostCreateElement = options.createElement, hostCreateText = options.createText, hostCreateComment = options.createComment, hostSetText = options.setText, hostSetElementText = options.setElementText, hostParentNode = options.parentNode, hostNextSibling = options.nextSibling, tmp = options.setScopeId, hostSetScopeId = tmp === void 0 ? NOOP : tmp, hostInsertStaticContent = options.insertStaticContent, patch = function(n1, n2, container) {
            var anchor = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, parentComponent = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, parentSuspense = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, isSVG = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : !1, slotScopeIds = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, optimized = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : !!n2.dynamicChildren;
            if (n1 === n2) return;
            n1 && !isSameVNodeType(n1, n2) && (anchor = getNextHostNode(n1), unmount(n1, parentComponent, parentSuspense, !0), n1 = null), -2 === n2.patchFlag && (optimized = !1, n2.dynamicChildren = null);
            var type2 = n2.type, ref = n2.ref, shapeFlag = n2.shapeFlag;
            switch(type2){
                case Text:
                    processText(n1, n2, container, anchor);
                    break;
                case Comment:
                    processCommentNode(n1, n2, container, anchor);
                    break;
                case Static:
                    null == n1 && mountStaticNode(n2, container, anchor, isSVG);
                    break;
                case Fragment:
                    processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    break;
                default:
                    1 & shapeFlag ? processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) : 6 & shapeFlag ? processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) : (64 & shapeFlag || 128 & shapeFlag) && type2.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
            }
            null != ref && parentComponent && setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
        }, processText = function(n1, n2, container, anchor) {
            if (null == n1) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
            else {
                var el = n2.el = n1.el;
                n2.children !== n1.children && hostSetText(el, n2.children);
            }
        }, processCommentNode = function(n1, n2, container, anchor) {
            null == n1 ? hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor) : n2.el = n1.el;
        }, mountStaticNode = function(n2, container, anchor, isSVG) {
            var ref;
            ref = _slicedToArray(hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor), 2), n2.el = ref[0], n2.anchor = ref[1], ref;
        }, moveStaticNode = function(param, container, nextSibling) {
            var el = param.el, anchor = param.anchor;
            var next;
            for(; el && el !== anchor;)next = hostNextSibling(el), hostInsert(el, container, nextSibling), el = next;
            hostInsert(anchor, container, nextSibling);
        }, removeStaticNode = function(param) {
            var el = param.el, anchor = param.anchor;
            var next;
            for(; el && el !== anchor;)next = hostNextSibling(el), hostRemove(el), el = next;
            hostRemove(anchor);
        }, processElement = function(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
            isSVG = isSVG || "svg" === n2.type, null == n1 ? mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) : patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }, mountElement = function(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
            var el, vnodeHook;
            var type2 = vnode.type, props2 = vnode.props, shapeFlag = vnode.shapeFlag, transition = vnode.transition, dirs = vnode.dirs;
            if (el = vnode.el = hostCreateElement(vnode.type, isSVG, props2 && props2.is, props2), 8 & shapeFlag ? hostSetElementText(el, vnode.children) : 16 & shapeFlag && mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && "foreignObject" !== type2, slotScopeIds, optimized), dirs && invokeDirectiveHook(vnode, null, parentComponent, "created"), props2) {
                for(var key in props2)"value" === key || isReservedProp(key) || hostPatchProp(el, key, null, props2[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                "value" in props2 && hostPatchProp(el, "value", null, props2.value), (vnodeHook = props2.onVnodeBeforeMount) && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            }
            setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent), dirs && invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
            needCallTransitionHooks && transition.beforeEnter(el), hostInsert(el, container, anchor), ((vnodeHook = props2 && props2.onVnodeMounted) || needCallTransitionHooks || dirs) && queuePostRenderEffect(function() {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode), needCallTransitionHooks && transition.enter(el), dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
        }, setScopeId = function(el, vnode, scopeId, slotScopeIds, parentComponent) {
            if (scopeId && hostSetScopeId(el, scopeId), slotScopeIds) for(var i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
            if (parentComponent) {
                if (vnode === parentComponent.subTree) {
                    var parentVNode = parentComponent.vnode;
                    setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
                }
            }
        }, mountChildren = function(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
            var start = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0;
            for(var i = start; i < children.length; i++){
                var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
                patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
        }, patchElement = function(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
            var el = n2.el = n1.el;
            var patchFlag = n2.patchFlag, dynamicChildren = n2.dynamicChildren, dirs = n2.dirs;
            patchFlag |= 16 & n1.patchFlag;
            var oldProps = n1.props || EMPTY_OBJ, newProps = n2.props || EMPTY_OBJ;
            var vnodeHook;
            parentComponent && toggleRecurse(parentComponent, !1), (vnodeHook = newProps.onVnodeBeforeUpdate) && invokeVNodeHook(vnodeHook, parentComponent, n2, n1), dirs && invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate"), parentComponent && toggleRecurse(parentComponent, !0);
            var areChildrenSVG = isSVG && "foreignObject" !== n2.type;
            if (dynamicChildren ? patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds) : optimized || patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, !1), patchFlag > 0) {
                if (16 & patchFlag) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
                else if (2 & patchFlag && oldProps.class !== newProps.class && hostPatchProp(el, "class", null, newProps.class, isSVG), 4 & patchFlag && hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG), 8 & patchFlag) {
                    var propsToUpdate = n2.dynamicProps;
                    for(var i = 0; i < propsToUpdate.length; i++){
                        var key = propsToUpdate[i], prev = oldProps[key], next = newProps[key];
                        next === prev && "value" !== key || hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
                1 & patchFlag && n1.children !== n2.children && hostSetElementText(el, n2.children);
            } else optimized || null != dynamicChildren || patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            ((vnodeHook = newProps.onVnodeUpdated) || dirs) && queuePostRenderEffect(function() {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1), dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
            }, parentSuspense);
        }, patchBlockChildren = function(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) {
            for(var i = 0; i < newChildren.length; i++){
                var oldVNode = oldChildren[i], newVNode = newChildren[i], container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || 70 & oldVNode.shapeFlag) ? hostParentNode(oldVNode.el) : fallbackContainer;
                patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, !0);
            }
        }, patchProps = function(el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
            if (oldProps !== newProps) {
                if (oldProps !== EMPTY_OBJ) for(var key in oldProps)isReservedProp(key) || key in newProps || hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                for(var key1 in newProps){
                    if (isReservedProp(key1)) continue;
                    var next = newProps[key1], prev = oldProps[key1];
                    next !== prev && "value" !== key1 && hostPatchProp(el, key1, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
                "value" in newProps && hostPatchProp(el, "value", oldProps.value, newProps.value);
            }
        }, processFragment = function(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
            var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText(""), fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
            var patchFlag = n2.patchFlag, dynamicChildren = n2.dynamicChildren, fragmentSlotScopeIds = n2.slotScopeIds;
            fragmentSlotScopeIds && (slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds), null == n1 ? (hostInsert(fragmentStartAnchor, container, anchor), hostInsert(fragmentEndAnchor, container, anchor), mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)) : patchFlag > 0 && 64 & patchFlag && dynamicChildren && n1.dynamicChildren ? (patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds), (null != n2.key || parentComponent && n2 === parentComponent.subTree) && traverseStaticChildren(n1, n2, !0)) : patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }, processComponent = function(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
            n2.slotScopeIds = slotScopeIds, null == n1 ? 512 & n2.shapeFlag ? parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized) : mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) : updateComponent(n1, n2, optimized);
        }, mountComponent = function(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
            var instance = initialVNode.component = function createComponentInstance(vnode, parent, suspense) {
                var type2 = vnode.type, appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext, instance = {
                    uid: uid$1++,
                    vnode: vnode,
                    type: type2,
                    parent: parent,
                    appContext: appContext,
                    root: null,
                    next: null,
                    subTree: null,
                    effect: null,
                    update: null,
                    scope: new EffectScope(!0),
                    render: null,
                    proxy: null,
                    exposed: null,
                    exposeProxy: null,
                    withProxy: null,
                    provides: parent ? parent.provides : Object.create(appContext.provides),
                    accessCache: null,
                    renderCache: [],
                    components: null,
                    directives: null,
                    propsOptions: normalizePropsOptions(type2, appContext),
                    emitsOptions: normalizeEmitsOptions(type2, appContext),
                    emit: null,
                    emitted: null,
                    propsDefaults: EMPTY_OBJ,
                    inheritAttrs: type2.inheritAttrs,
                    ctx: EMPTY_OBJ,
                    data: EMPTY_OBJ,
                    props: EMPTY_OBJ,
                    attrs: EMPTY_OBJ,
                    slots: EMPTY_OBJ,
                    refs: EMPTY_OBJ,
                    setupState: EMPTY_OBJ,
                    setupContext: null,
                    suspense: suspense,
                    suspenseId: suspense ? suspense.pendingId : 0,
                    asyncDep: null,
                    asyncResolved: !1,
                    isMounted: !1,
                    isUnmounted: !1,
                    isDeactivated: !1,
                    bc: null,
                    c: null,
                    bm: null,
                    m: null,
                    bu: null,
                    u: null,
                    um: null,
                    bum: null,
                    da: null,
                    a: null,
                    rtg: null,
                    rtc: null,
                    ec: null,
                    sp: null
                };
                instance.ctx = {
                    _: instance
                }, instance.root = parent ? parent.root : instance, instance.emit = emit$1.bind(null, instance), vnode.ce && vnode.ce(instance);
                return instance;
            }(initialVNode, parentComponent, parentSuspense);
            if (isKeepAlive(initialVNode) && (instance.ctx.renderer = internals), function setupComponent(instance) {
                var isSSR = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                isInSSRComponentSetup = isSSR;
                var _instance_vnode = instance.vnode, props2 = _instance_vnode.props, children = _instance_vnode.children, isStateful = isStatefulComponent(instance);
                initProps(instance, props2, isStateful, isSSR), function(instance, children) {
                    if (32 & instance.vnode.shapeFlag) {
                        var type2 = children._;
                        type2 ? (instance.slots = toRaw(children), def(children, "_", type2)) : normalizeObjectSlots(children, instance.slots = {});
                    } else instance.slots = {}, children && normalizeVNodeSlots(instance, children);
                    def(instance.slots, InternalObjectKey, 1);
                }(instance, children);
                var setupResult = isStateful ? function setupStatefulComponent(instance, isSSR) {
                    var Component = instance.type;
                    instance.accessCache = Object.create(null), instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
                    var setup = Component.setup;
                    if (setup) {
                        var setupContext = instance.setupContext = setup.length > 1 ? function createSetupContext(instance) {
                            var expose = function(exposed) {
                                instance.exposed = exposed || {};
                            };
                            var attrs;
                            return {
                                get attrs () {
                                    return attrs || (attrs = function createAttrsProxy(instance) {
                                        return new Proxy(instance.attrs, {
                                            get: function(target, key) {
                                                return track(instance, 0, "$attrs"), target[key];
                                            }
                                        });
                                    }(instance));
                                },
                                slots: instance.slots,
                                emit: instance.emit,
                                expose: expose
                            };
                        }(instance) : null;
                        setCurrentInstance(instance), pauseTracking();
                        var setupResult = callWithErrorHandling(setup, instance, 0, [
                            instance.props,
                            setupContext
                        ]);
                        if (resetTracking(), unsetCurrentInstance(), isPromise(setupResult)) {
                            if (setupResult.then(unsetCurrentInstance, unsetCurrentInstance), isSSR) return setupResult.then(function(resolvedResult) {
                                handleSetupResult(instance, resolvedResult, isSSR);
                            }).catch(function(e) {
                                handleError(e, instance, 0);
                            });
                            instance.asyncDep = setupResult;
                        } else handleSetupResult(instance, setupResult, isSSR);
                    } else finishComponentSetup(instance, isSSR);
                }(instance, isSSR) : void 0;
                return isInSSRComponentSetup = !1, setupResult;
            }(instance), instance.asyncDep) {
                if (parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect), !initialVNode.el) {
                    var placeholder = instance.subTree = createVNode(Comment);
                    processCommentNode(null, placeholder, container, anchor);
                }
            } else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        }, updateComponent = function(n1, n2, optimized) {
            var instance = n2.component = n1.component;
            if (function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
                var prevProps = prevVNode.props, prevChildren = prevVNode.children, component = prevVNode.component, nextProps = nextVNode.props, nextChildren = nextVNode.children, patchFlag = nextVNode.patchFlag, emits = component.emitsOptions;
                if (nextVNode.dirs || nextVNode.transition) return !0;
                if (!(optimized && patchFlag >= 0)) return !(!prevChildren && !nextChildren || nextChildren && nextChildren.$stable) || prevProps !== nextProps && (prevProps ? !nextProps || hasPropsChanged(prevProps, nextProps, emits) : !!nextProps);
                if (1024 & patchFlag) return !0;
                if (16 & patchFlag) return prevProps ? hasPropsChanged(prevProps, nextProps, emits) : !!nextProps;
                if (8 & patchFlag) {
                    var dynamicProps = nextVNode.dynamicProps;
                    for(var i = 0; i < dynamicProps.length; i++){
                        var key = dynamicProps[i];
                        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return !0;
                    }
                }
                return !1;
            }(n1, n2, optimized)) {
                if (instance.asyncDep && !instance.asyncResolved) return void updateComponentPreRender(instance, n2, optimized);
                instance.next = n2, function invalidateJob(job) {
                    var i = queue.indexOf(job);
                    i > flushIndex && queue.splice(i, 1);
                }(instance.update), instance.update();
            } else n2.el = n1.el, instance.vnode = n2;
        }, setupRenderEffect = function(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
            var componentUpdateFn = function() {
                if (instance.isMounted) {
                    var vnodeHook, next = instance.next, bu = instance.bu, u = instance.u, parent = instance.parent, vnode = instance.vnode, originNext = next;
                    toggleRecurse(instance, !1), next ? (next.el = vnode.el, updateComponentPreRender(instance, next, optimized)) : next = vnode, bu && invokeArrayFns(bu), (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) && invokeVNodeHook(vnodeHook, parent, next, vnode), toggleRecurse(instance, !0);
                    var nextTree = renderComponentRoot(instance), prevTree = instance.subTree;
                    instance.subTree = nextTree, patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG), next.el = nextTree.el, null === originNext && function updateHOCHostEl(param, el) {
                        var vnode = param.vnode, parent = param.parent;
                        for(; parent && parent.subTree === vnode;)(vnode = parent.vnode).el = el, parent = parent.parent;
                    }(instance, nextTree.el), u && queuePostRenderEffect(u, parentSuspense), (vnodeHook = next.props && next.props.onVnodeUpdated) && queuePostRenderEffect(function() {
                        return invokeVNodeHook(vnodeHook, parent, next, vnode);
                    }, parentSuspense);
                } else {
                    var vnodeHook1;
                    var el = initialVNode.el, props2 = initialVNode.props, bm = instance.bm, m = instance.m, parent1 = instance.parent, isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                    if (toggleRecurse(instance, !1), bm && invokeArrayFns(bm), !isAsyncWrapperVNode && (vnodeHook1 = props2 && props2.onVnodeBeforeMount) && invokeVNodeHook(vnodeHook1, parent1, initialVNode), toggleRecurse(instance, !0), el && hydrateNode) {
                        var hydrateSubTree = function() {
                            instance.subTree = renderComponentRoot(instance), hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        };
                        isAsyncWrapperVNode ? initialVNode.type.__asyncLoader().then(function() {
                            return !instance.isUnmounted && hydrateSubTree();
                        }) : hydrateSubTree();
                    } else {
                        var subTree = instance.subTree = renderComponentRoot(instance);
                        patch(null, subTree, container, anchor, instance, parentSuspense, isSVG), initialVNode.el = subTree.el;
                    }
                    if (m && queuePostRenderEffect(m, parentSuspense), !isAsyncWrapperVNode && (vnodeHook1 = props2 && props2.onVnodeMounted)) {
                        var scopedInitialVNode = initialVNode;
                        queuePostRenderEffect(function() {
                            return invokeVNodeHook(vnodeHook1, parent1, scopedInitialVNode);
                        }, parentSuspense);
                    }
                    (256 & initialVNode.shapeFlag || parent1 && isAsyncWrapper(parent1.vnode) && 256 & parent1.vnode.shapeFlag) && instance.a && queuePostRenderEffect(instance.a, parentSuspense), instance.isMounted = !0, initialVNode = container = anchor = null;
                }
            }, effect = instance.effect = new ReactiveEffect(componentUpdateFn, function() {
                return queueJob(update2);
            }, instance.scope), update2 = instance.update = function() {
                return effect.run();
            };
            update2.id = instance.uid, toggleRecurse(instance, !0), update2();
        }, updateComponentPreRender = function(instance, nextVNode, optimized) {
            nextVNode.component = instance;
            var prevProps = instance.vnode.props;
            instance.vnode = nextVNode, instance.next = null, function updateProps(instance, rawProps, rawPrevProps, optimized) {
                var props2 = instance.props, attrs = instance.attrs, _instance_vnode = instance.vnode, patchFlag = _instance_vnode.patchFlag, rawCurrentProps = toRaw(props2), _instance_propsOptions = _slicedToArray(instance.propsOptions, 1), _$options = _instance_propsOptions[0];
                var hasAttrsChanged = !1;
                if (!(optimized || patchFlag > 0) || 16 & patchFlag) {
                    var kebabKey;
                    setFullProps(instance, rawProps, props2, attrs) && (hasAttrsChanged = !0);
                    for(var key in rawCurrentProps)rawProps && (hasOwn$1(rawProps, key) || (kebabKey = hyphenate(key)) !== key && hasOwn$1(rawProps, kebabKey)) || (_$options ? !rawPrevProps || void 0 === rawPrevProps[key] && void 0 === rawPrevProps[kebabKey] || (props2[key] = resolvePropValue(_$options, rawCurrentProps, key, void 0, instance, !0)) : delete props2[key]);
                    if (attrs !== rawCurrentProps) for(var key1 in attrs)rawProps && hasOwn$1(rawProps, key1) || (delete attrs[key1], hasAttrsChanged = !0);
                } else if (8 & patchFlag) {
                    var propsToUpdate = instance.vnode.dynamicProps;
                    for(var i = 0; i < propsToUpdate.length; i++){
                        var key2 = propsToUpdate[i];
                        if (isEmitListener(instance.emitsOptions, key2)) continue;
                        var value = rawProps[key2];
                        if (_$options) if (hasOwn$1(attrs, key2)) value !== attrs[key2] && (attrs[key2] = value, hasAttrsChanged = !0);
                        else {
                            var camelizedKey = camelize(key2);
                            props2[camelizedKey] = resolvePropValue(_$options, rawCurrentProps, camelizedKey, value, instance, !1);
                        }
                        else value !== attrs[key2] && (attrs[key2] = value, hasAttrsChanged = !0);
                    }
                }
                hasAttrsChanged && trigger(instance, "set", "$attrs");
            }(instance, nextVNode.props, prevProps, optimized), function(instance, children, optimized) {
                var vnode = instance.vnode, slots = instance.slots;
                var needDeletionCheck = !0, deletionComparisonTarget = EMPTY_OBJ;
                if (32 & vnode.shapeFlag) {
                    var type2 = children._;
                    type2 ? optimized && 1 === type2 ? needDeletionCheck = !1 : (extend$1(slots, children), optimized || 1 !== type2 || delete slots._) : (needDeletionCheck = !children.$stable, normalizeObjectSlots(children, slots)), deletionComparisonTarget = children;
                } else children && (normalizeVNodeSlots(instance, children), deletionComparisonTarget = {
                    default: 1
                });
                if (needDeletionCheck) for(var key in slots)isInternalKey(key) || key in deletionComparisonTarget || delete slots[key];
            }(instance, nextVNode.children, optimized), pauseTracking(), flushPreFlushCbs(), resetTracking();
        }, patchChildren = function(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds) {
            var optimized = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : !1;
            var c1 = n1 && n1.children, prevShapeFlag = n1 ? n1.shapeFlag : 0, c2 = n2.children, patchFlag = n2.patchFlag, shapeFlag = n2.shapeFlag;
            if (patchFlag > 0) {
                if (128 & patchFlag) return void patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                if (256 & patchFlag) return void patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            8 & shapeFlag ? (16 & prevShapeFlag && unmountChildren(c1, parentComponent, parentSuspense), c2 !== c1 && hostSetElementText(container, c2)) : 16 & prevShapeFlag ? 16 & shapeFlag ? patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) : unmountChildren(c1, parentComponent, parentSuspense, !0) : (8 & prevShapeFlag && hostSetElementText(container, ""), 16 & shapeFlag && mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized));
        }, patchUnkeyedChildren = function(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
            c2 = c2 || EMPTY_ARR;
            var oldLength = (c1 = c1 || EMPTY_ARR).length, newLength = c2.length, commonLength = Math.min(oldLength, newLength);
            var i;
            for(i = 0; i < commonLength; i++){
                var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            oldLength > newLength ? unmountChildren(c1, parentComponent, parentSuspense, !0, !1, commonLength) : mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
        }, patchKeyedChildren = function(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
            var i = 0;
            var l2 = c2.length;
            var e1 = c1.length - 1, e2 = l2 - 1;
            for(; i <= e1 && i <= e2;){
                var n1 = c1[i], n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (!isSameVNodeType(n1, n2)) break;
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized), i++;
            }
            for(; i <= e1 && i <= e2;){
                var n11 = c1[e1], n21 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
                if (!isSameVNodeType(n11, n21)) break;
                patch(n11, n21, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized), e1--, e2--;
            }
            if (i > e1) {
                if (i <= e2) {
                    var nextPos = e2 + 1, anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                    for(; i <= e2;)patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized), i++;
                }
            } else if (i > e2) for(; i <= e1;)unmount(c1[i], parentComponent, parentSuspense, !0), i++;
            else {
                var s1 = i, s2 = i, keyToNewIndexMap = new Map;
                for(i = s2; i <= e2; i++){
                    var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                    null != nextChild.key && keyToNewIndexMap.set(nextChild.key, i);
                }
                var j, patched = 0;
                var toBePatched = e2 - s2 + 1;
                var moved = !1, maxNewIndexSoFar = 0;
                var newIndexToOldIndexMap = new Array(toBePatched);
                for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
                for(i = s1; i <= e1; i++){
                    var prevChild = c1[i];
                    if (patched >= toBePatched) {
                        unmount(prevChild, parentComponent, parentSuspense, !0);
                        continue;
                    }
                    var newIndex = void 0;
                    if (null != prevChild.key) newIndex = keyToNewIndexMap.get(prevChild.key);
                    else for(j = s2; j <= e2; j++)if (0 === newIndexToOldIndexMap[j - s2] && isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                    void 0 === newIndex ? unmount(prevChild, parentComponent, parentSuspense, !0) : (newIndexToOldIndexMap[newIndex - s2] = i + 1, newIndex >= maxNewIndexSoFar ? maxNewIndexSoFar = newIndex : moved = !0, patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized), patched++);
                }
                var increasingNewIndexSequence = moved ? function getSequence(arr) {
                    var p2 = arr.slice(), result = [
                        0
                    ];
                    var i, j, u, v1, c;
                    var len = arr.length;
                    for(i = 0; i < len; i++){
                        var arrI = arr[i];
                        if (0 !== arrI) {
                            if (j = result[result.length - 1], arr[j] < arrI) {
                                p2[i] = j, result.push(i);
                                continue;
                            }
                            for(u = 0, v1 = result.length - 1; u < v1;)c = u + v1 >> 1, arr[result[c]] < arrI ? u = c + 1 : v1 = c;
                            arrI < arr[result[u]] && (u > 0 && (p2[i] = result[u - 1]), result[u] = i);
                        }
                    }
                    u = result.length, v1 = result[u - 1];
                    for(; u-- > 0;)result[u] = v1, v1 = p2[v1];
                    return result;
                }(newIndexToOldIndexMap) : EMPTY_ARR;
                for(j = increasingNewIndexSequence.length - 1, i = toBePatched - 1; i >= 0; i--){
                    var nextIndex = s2 + i, nextChild1 = c2[nextIndex], anchor1 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                    0 === newIndexToOldIndexMap[i] ? patch(null, nextChild1, container, anchor1, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) : moved && (j < 0 || i !== increasingNewIndexSequence[j] ? move(nextChild1, container, anchor1, 2) : j--);
                }
            }
        }, move = function(vnode, container, anchor, moveType) {
            var parentSuspense = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
            var el = vnode.el, type2 = vnode.type, transition = vnode.transition, children = vnode.children, shapeFlag = vnode.shapeFlag;
            if (6 & shapeFlag) return void move(vnode.component.subTree, container, anchor, moveType);
            if (128 & shapeFlag) return void vnode.suspense.move(container, anchor, moveType);
            if (64 & shapeFlag) return void type2.move(vnode, container, anchor, internals);
            if (type2 === Fragment) {
                hostInsert(el, container, anchor);
                for(var i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
                return void hostInsert(vnode.anchor, container, anchor);
            }
            if (type2 === Static) return void moveStaticNode(vnode, container, anchor);
            if (2 !== moveType && 1 & shapeFlag && transition) if (0 === moveType) transition.beforeEnter(el), hostInsert(el, container, anchor), queuePostRenderEffect(function() {
                return transition.enter(el);
            }, parentSuspense);
            else {
                var leave = transition.leave, delayLeave = transition.delayLeave, afterLeave = transition.afterLeave, remove3 = function() {
                    return hostInsert(el, container, anchor);
                }, performLeave = function() {
                    leave(el, function() {
                        remove3(), afterLeave && afterLeave();
                    });
                };
                delayLeave ? delayLeave(el, remove3, performLeave) : performLeave();
            }
            else hostInsert(el, container, anchor);
        }, unmount = function(vnode, parentComponent, parentSuspense) {
            var doRemove = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, optimized = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
            var type2 = vnode.type, props2 = vnode.props, ref = vnode.ref, children = vnode.children, dynamicChildren = vnode.dynamicChildren, shapeFlag = vnode.shapeFlag, patchFlag = vnode.patchFlag, dirs = vnode.dirs;
            if (null != ref && setRef(ref, null, parentSuspense, vnode, !0), 256 & shapeFlag) return void parentComponent.ctx.deactivate(vnode);
            var shouldInvokeDirs = 1 & shapeFlag && dirs, shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
            var vnodeHook;
            if (shouldInvokeVnodeHook && (vnodeHook = props2 && props2.onVnodeBeforeUnmount) && invokeVNodeHook(vnodeHook, parentComponent, vnode), 6 & shapeFlag) unmountComponent(vnode.component, parentSuspense, doRemove);
            else {
                if (128 & shapeFlag) return void vnode.suspense.unmount(parentSuspense, doRemove);
                shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount"), 64 & shapeFlag ? vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove) : dynamicChildren && (type2 !== Fragment || patchFlag > 0 && 64 & patchFlag) ? unmountChildren(dynamicChildren, parentComponent, parentSuspense, !1, !0) : (type2 === Fragment && 384 & patchFlag || !optimized && 16 & shapeFlag) && unmountChildren(children, parentComponent, parentSuspense), doRemove && remove2(vnode);
            }
            (shouldInvokeVnodeHook && (vnodeHook = props2 && props2.onVnodeUnmounted) || shouldInvokeDirs) && queuePostRenderEffect(function() {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode), shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
            }, parentSuspense);
        }, remove2 = function(vnode) {
            var type2 = vnode.type, el = vnode.el, anchor = vnode.anchor, transition = vnode.transition;
            if (type2 === Fragment) return void removeFragment(el, anchor);
            if (type2 === Static) return void removeStaticNode(vnode);
            var performRemove = function() {
                hostRemove(el), transition && !transition.persisted && transition.afterLeave && transition.afterLeave();
            };
            if (1 & vnode.shapeFlag && transition && !transition.persisted) {
                var leave = transition.leave, delayLeave = transition.delayLeave, performLeave = function() {
                    return leave(el, performRemove);
                };
                delayLeave ? delayLeave(vnode.el, performRemove, performLeave) : performLeave();
            } else performRemove();
        }, removeFragment = function(cur, end) {
            var next;
            for(; cur !== end;)next = hostNextSibling(cur), hostRemove(cur), cur = next;
            hostRemove(end);
        }, unmountComponent = function(instance, parentSuspense, doRemove) {
            var bum = instance.bum, scope = instance.scope, update2 = instance.update, subTree = instance.subTree, um = instance.um;
            bum && invokeArrayFns(bum), scope.stop(), update2 && (update2.active = !1, unmount(subTree, instance, parentSuspense, doRemove)), um && queuePostRenderEffect(um, parentSuspense), queuePostRenderEffect(function() {
                instance.isUnmounted = !0;
            }, parentSuspense), parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId && (parentSuspense.deps--, 0 === parentSuspense.deps && parentSuspense.resolve());
        }, unmountChildren = function(children, parentComponent, parentSuspense) {
            var doRemove = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, optimized = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, start = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
            for(var i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }, getNextHostNode = function(vnode) {
            return 6 & vnode.shapeFlag ? getNextHostNode(vnode.component.subTree) : 128 & vnode.shapeFlag ? vnode.suspense.next() : hostNextSibling(vnode.anchor || vnode.el);
        }, render = function(vnode, container, isSVG) {
            null == vnode ? container._vnode && unmount(container._vnode, null, null, !0) : patch(container._vnode || null, vnode, container, null, null, null, isSVG), flushPreFlushCbs(), flushPostFlushCbs(), container._vnode = vnode;
        }, internals = {
            p: patch,
            um: unmount,
            m: move,
            r: remove2,
            mt: mountComponent,
            mc: mountChildren,
            pc: patchChildren,
            pbc: patchBlockChildren,
            n: getNextHostNode,
            o: options
        };
        var hydrate, hydrateNode;
        var ref;
        createHydrationFns && (ref = _slicedToArray(createHydrationFns(internals), 2), hydrate = ref[0], hydrateNode = ref[1], ref);
        return {
            render: render,
            hydrate: hydrate,
            createApp: createAppAPI(render, hydrate)
        };
    }(options);
}
function toggleRecurse(param, allowed) {
    var effect = param.effect, update2 = param.update;
    effect.allowRecurse = update2.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2) {
    var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    var ch1 = n1.children, ch2 = n2.children;
    if (isArray$1(ch1) && isArray$1(ch2)) for(var i = 0; i < ch1.length; i++){
        var c1 = ch1[i];
        var c2 = ch2[i];
        1 & c2.shapeFlag && !c2.dynamicChildren && ((c2.patchFlag <= 0 || 32 === c2.patchFlag) && (c2 = ch2[i] = cloneIfMounted(ch2[i]), c2.el = c1.el), shallow || traverseStaticChildren(c1, c2)), c2.type === Text && (c2.el = c1.el);
    }
}
var Fragment = Symbol(void 0), Text = Symbol(void 0), Comment = Symbol(void 0), Static = Symbol(void 0), blockStack = [];
var currentBlock = null;
function openBlock() {
    var disableTracking = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    blockStack.push(currentBlock = disableTracking ? null : []);
}
var isBlockTreeEnabled = 1;
function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    return vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null, function closeBlock() {
        blockStack.pop(), currentBlock = blockStack[blockStack.length - 1] || null;
    }(), isBlockTreeEnabled > 0 && currentBlock && currentBlock.push(vnode), vnode;
}
function createElementBlock(type2, props2, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type2, props2, children, patchFlag, dynamicProps, shapeFlag, !0));
}
function createBlock(type2, props2, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type2, props2, children, patchFlag, dynamicProps, !0));
}
function isVNode(value) {
    return !!value && !0 === value.__v_isVNode;
}
function isSameVNodeType(n1, n2) {
    return n1.type === n2.type && n1.key === n2.key;
}
var InternalObjectKey = "__vInternal", normalizeKey = function(param) {
    var key = param.key;
    return null != key ? key : null;
}, normalizeRef = function(param) {
    var ref = param.ref, ref_key = param.ref_key, ref_for = param.ref_for;
    return null != ref ? isString(ref) || isRef(ref) || isFunction(ref) ? {
        i: currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function createBaseVNode(type2) {
    var props2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, children = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, patchFlag = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, dynamicProps = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, shapeFlag = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : type2 === Fragment ? 0 : 1, isBlockNode = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : !1, needFullChildrenNormalization = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : !1;
    var vnode = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: type2,
        props: props2,
        key: props2 && normalizeKey(props2),
        ref: props2 && normalizeRef(props2),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children: children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: shapeFlag,
        patchFlag: patchFlag,
        dynamicProps: dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: currentRenderingInstance
    };
    return needFullChildrenNormalization ? (normalizeChildren(vnode, children), 128 & shapeFlag && type2.normalize(vnode)) : children && (vnode.shapeFlag |= isString(children) ? 8 : 16), isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || 6 & shapeFlag) && 32 !== vnode.patchFlag && currentBlock.push(vnode), vnode;
}
var createVNode = function _createVNode(type2) {
    var props2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, children = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, patchFlag = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, dynamicProps = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, isBlockNode = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1;
    type2 && type2 !== NULL_DYNAMIC_COMPONENT || (type2 = Comment);
    if (isVNode(type2)) {
        var cloned = cloneVNode(type2, props2, !0);
        return children && normalizeChildren(cloned, children), isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (6 & cloned.shapeFlag ? currentBlock[currentBlock.indexOf(type2)] = cloned : currentBlock.push(cloned)), cloned.patchFlag |= -2, cloned;
    }
    (function isClassComponent(value) {
        return isFunction(value) && "__vccOpts" in value;
    })(type2) && (type2 = type2.__vccOpts);
    if (props2) {
        props2 = function guardReactiveProps(props2) {
            return props2 ? isProxy(props2) || InternalObjectKey in props2 ? extend$1({}, props2) : props2 : null;
        }(props2);
        var klass = props2.class, style = props2.style;
        klass && !isString(klass) && (props2.class = normalizeClass(klass)), isObject(style) && (isProxy(style) && !isArray$1(style) && (style = extend$1({}, style)), props2.style = normalizeStyle(style));
    }
    var shapeFlag = isString(type2) ? 1 : function(type2) {
        return type2.__isSuspense;
    }(type2) ? 128 : function(type2) {
        return type2.__isTeleport;
    }(type2) ? 64 : isObject(type2) ? 4 : isFunction(type2) ? 2 : 0;
    return createBaseVNode(type2, props2, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, !0);
};
function cloneVNode(vnode, extraProps) {
    var mergeRef = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    var props2 = vnode.props, ref = vnode.ref, patchFlag = vnode.patchFlag, children = vnode.children, mergedProps = extraProps ? function mergeProps() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var ret = {};
        for(var i = 0; i < args.length; i++){
            var toMerge = args[i];
            for(var key in toMerge)if ("class" === key) ret.class !== toMerge.class && (ret.class = normalizeClass([
                ret.class,
                toMerge.class
            ]));
            else if ("style" === key) ret.style = normalizeStyle([
                ret.style,
                toMerge.style
            ]);
            else if (isOn(key)) {
                var existing = ret[key], incoming = toMerge[key];
                !incoming || existing === incoming || isArray$1(existing) && existing.includes(incoming) || (ret[key] = existing ? [].concat(existing, incoming) : incoming);
            } else "" !== key && (ret[key] = toMerge[key]);
        }
        return ret;
    }(props2 || {}, extraProps) : props2;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray$1(ref) ? ref.concat(normalizeRef(extraProps)) : [
            ref,
            normalizeRef(extraProps)
        ] : normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        patchFlag: extraProps && vnode.type !== Fragment ? -1 === patchFlag ? 16 : 16 | patchFlag : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx
    };
}
function createTextVNode() {
    var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", flag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return createVNode(Text, null, text, flag);
}
function createCommentVNode() {
    var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", asBlock = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    return null == child || "boolean" == typeof child ? createVNode(Comment) : isArray$1(child) ? createVNode(Fragment, null, child.slice()) : "object" == typeof child ? cloneIfMounted(child) : createVNode(Text, null, String(child));
}
function cloneIfMounted(child) {
    return null === child.el && -1 !== child.patchFlag || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    var type2 = 0;
    var shapeFlag = vnode.shapeFlag;
    if (null == children) children = null;
    else if (isArray$1(children)) type2 = 16;
    else if ("object" == typeof children) {
        if (65 & shapeFlag) {
            var slot = children.default;
            return void (slot && (slot._c && (slot._d = !1), normalizeChildren(vnode, slot()), slot._c && (slot._d = !0)));
        }
        {
            type2 = 32;
            var slotFlag = children._;
            slotFlag || InternalObjectKey in children ? 3 === slotFlag && currentRenderingInstance && (1 === currentRenderingInstance.slots._ ? children._ = 1 : (children._ = 2, vnode.patchFlag |= 1024)) : children._ctx = currentRenderingInstance;
        }
    } else isFunction(children) ? (children = {
        default: children,
        _ctx: currentRenderingInstance
    }, type2 = 32) : (children = String(children), 64 & shapeFlag ? (type2 = 16, children = [
        createTextVNode(children)
    ]) : type2 = 8);
    vnode.children = children, vnode.shapeFlag |= type2;
}
function invokeVNodeHook(hook, instance, vnode) {
    var prevVNode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    callWithAsyncErrorHandling(hook, instance, 7, [
        vnode,
        prevVNode
    ]);
}
var emptyAppContext = createAppContext();
var uid$1 = 0;
var currentInstance = null;
var getCurrentInstance = function() {
    return currentInstance || currentRenderingInstance;
}, setCurrentInstance = function(instance) {
    currentInstance = instance, instance.scope.on();
}, unsetCurrentInstance = function() {
    currentInstance && currentInstance.scope.off(), currentInstance = null;
};
function isStatefulComponent(instance) {
    return 4 & instance.vnode.shapeFlag;
}
var isInSSRComponentSetup = !1;
function handleSetupResult(instance, setupResult, isSSR) {
    isFunction(setupResult) ? instance.type.__ssrInlineRender ? instance.ssrRender = setupResult : instance.render = setupResult : isObject(setupResult) && (instance.setupState = proxyRefs(setupResult)), finishComponentSetup(instance, isSSR);
}
function finishComponentSetup(instance, isSSR, skipOptions) {
    var Component = instance.type;
    instance.render || (instance.render = Component.render || NOOP), setCurrentInstance(instance), pauseTracking(), applyOptions(instance), resetTracking(), unsetCurrentInstance();
}
function getExposeProxy(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get: function(target, key) {
            return key in target ? target[key] : key in publicPropertiesMap ? publicPropertiesMap[key](instance) : void 0;
        },
        has: function(target, key) {
            return key in target || key in publicPropertiesMap;
        }
    }));
}
var computed = function(getterOrOptions, debugOptions) {
    return function computed$1(getterOrOptions, debugOptions) {
        var isSSR = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        var getter, setter;
        var onlyGetter = isFunction(getterOrOptions);
        return onlyGetter ? (getter = getterOrOptions, setter = NOOP) : (getter = getterOrOptions.get, setter = getterOrOptions.set), new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    }(getterOrOptions, 0, isInSSRComponentSetup);
}, ssrContextKey = Symbol(""), useSSRContext = function() {
    return inject(ssrContextKey);
}, version = "3.2.45", doc = "undefined" != typeof document ? document : null, templateContainer = doc && doc.createElement("template"), nodeOps = {
    insert: function(child, parent, anchor) {
        parent.insertBefore(child, anchor || null);
    },
    remove: function(child) {
        var parent = child.parentNode;
        parent && parent.removeChild(child);
    },
    createElement: function(tag, isSVG, is, props2) {
        var el = isSVG ? doc.createElementNS("http://www.w3.org/2000/svg", tag) : doc.createElement(tag, is ? {
            is: is
        } : void 0);
        return "select" === tag && props2 && null != props2.multiple && el.setAttribute("multiple", props2.multiple), el;
    },
    createText: function(text) {
        return doc.createTextNode(text);
    },
    createComment: function(text) {
        return doc.createComment(text);
    },
    setText: function(node, text) {
        node.nodeValue = text;
    },
    setElementText: function(el, text) {
        el.textContent = text;
    },
    parentNode: function(node) {
        return node.parentNode;
    },
    nextSibling: function(node) {
        return node.nextSibling;
    },
    querySelector: function(selector) {
        return doc.querySelector(selector);
    },
    setScopeId: function setScopeId(el, id) {
        el.setAttribute(id, "");
    },
    insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG, start, end) {
        var before = anchor ? anchor.previousSibling : parent.lastChild;
        if (start && (start === end || start.nextSibling)) for(; parent.insertBefore(start.cloneNode(!0), anchor), start !== end && (start = start.nextSibling););
        else {
            templateContainer.innerHTML = isSVG ? "<svg>".concat(content, "</svg>") : content;
            var template = templateContainer.content;
            if (isSVG) {
                var wrapper = template.firstChild;
                for(; wrapper.firstChild;)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            before ? before.nextSibling : parent.firstChild,
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
var importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (isArray$1(val)) val.forEach(function(v1) {
        return setStyle(style, name, v1);
    });
    else if (null == val && (val = ""), name.startsWith("--")) style.setProperty(name, val);
    else {
        var prefixed = function autoPrefix(style, rawName) {
            var cached = prefixCache[rawName];
            if (cached) return cached;
            var _$name = camelize(rawName);
            if ("filter" !== _$name && _$name in style) return prefixCache[rawName] = _$name;
            _$name = capitalize(_$name);
            for(var i = 0; i < prefixes.length; i++){
                var prefixed = prefixes[i] + _$name;
                if (prefixed in style) return prefixCache[rawName] = prefixed;
            }
            return rawName;
        }(style, name);
        importantRE.test(val) ? style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important") : style[prefixed] = val;
    }
}
var prefixes = [
    "Webkit",
    "Moz",
    "ms"
], prefixCache = {};
var xlinkNS = "http://www.w3.org/1999/xlink";
function addEventListener$1(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue) {
    var instance = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    var invokers = el._vei || (el._vei = {}), existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) existingInvoker.value = nextValue;
    else {
        var _parseName = _slicedToArray(function parseName(name) {
            var options;
            if (optionsModifierRE.test(name)) {
                var m;
                for(options = {}; m = name.match(optionsModifierRE);)name = name.slice(0, name.length - m[0].length), options[m[0].toLowerCase()] = !0;
            }
            var event = ":" === name[2] ? name.slice(3) : hyphenate(name.slice(2));
            return [
                event,
                options
            ];
        }(rawName), 2), name = _parseName[0], options = _parseName[1];
        if (nextValue) {
            var invoker = invokers[rawName] = function createInvoker(initialValue, instance) {
                var invoker = function(e) {
                    if (e._vts) {
                        if (e._vts <= invoker.attached) return;
                    } else e._vts = Date.now();
                    callWithAsyncErrorHandling(function patchStopImmediatePropagation(e, value) {
                        if (isArray$1(value)) {
                            var originalStop = e.stopImmediatePropagation;
                            return e.stopImmediatePropagation = function() {
                                originalStop.call(e), e._stopped = !0;
                            }, value.map(function(fn) {
                                return function(e2) {
                                    return !e2._stopped && fn && fn(e2);
                                };
                            });
                        }
                        return value;
                    }(e, invoker.value), instance, 5, [
                        e
                    ]);
                };
                return invoker.value = initialValue, invoker.attached = function() {
                    return cachedNow || (p.then(function() {
                        return cachedNow = 0;
                    }), cachedNow = Date.now());
                }(), invoker;
            }(nextValue, instance);
            addEventListener$1(el, name, invoker, options);
        } else existingInvoker && (!function removeEventListener(el, event, handler, options) {
            el.removeEventListener(event, handler, options);
        }(el, name, existingInvoker, options), invokers[rawName] = void 0);
    }
}
var optionsModifierRE = /(?:Once|Passive|Capture)$/;
var cachedNow = 0;
var p = Promise.resolve();
var nativeOnRE = /^on[a-z]/;
Boolean;
var getModelAssigner = function(vnode) {
    var fn = vnode.props["onUpdate:modelValue"] || !1;
    return isArray$1(fn) ? function(value) {
        return invokeArrayFns(fn, value);
    } : fn;
}, vModelSelect = {
    deep: !0,
    created: function created(el, param, vnode) {
        var value = param.value, _param_modifiers = param.modifiers, number = _param_modifiers.number;
        var isSetModel = isSet(value);
        addEventListener$1(el, "change", function() {
            var selectedVal = Array.prototype.filter.call(el.options, function(o) {
                return o.selected;
            }).map(function(o) {
                return number ? toNumber(getValue(o)) : getValue(o);
            });
            el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
        }), el._assign = getModelAssigner(vnode);
    },
    mounted: function mounted(el, param) {
        var value = param.value;
        setSelected(el, value);
    },
    beforeUpdate: function beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated: function updated(el, param) {
        var value = param.value;
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    var isMultiple = el.multiple;
    if (!isMultiple || isArray$1(value) || isSet(value)) {
        for(var i = 0, l = el.options.length; i < l; i++){
            var option = el.options[i], optionValue = getValue(option);
            if (isMultiple) isArray$1(value) ? option.selected = looseIndexOf(value, optionValue) > -1 : option.selected = value.has(optionValue);
            else if (looseEqual(getValue(option), value)) return void (el.selectedIndex !== i && (el.selectedIndex = i));
        }
        isMultiple || -1 === el.selectedIndex || (el.selectedIndex = -1);
    }
}
function getValue(el) {
    return "_value" in el ? el._value : el.value;
}
var rendererOptions = extend$1({
    patchProp: function(el, key, prevValue, nextValue) {
        var isSVG = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, prevChildren = arguments.length > 5 ? arguments[5] : void 0, parentComponent = arguments.length > 6 ? arguments[6] : void 0, parentSuspense = arguments.length > 7 ? arguments[7] : void 0, unmountChildren = arguments.length > 8 ? arguments[8] : void 0;
        "class" === key ? function patchClass(el, value, isSVG) {
            var transitionClasses = el._vtc;
            transitionClasses && (value = (value ? [
                value
            ].concat(_toConsumableArray(transitionClasses)) : _toConsumableArray(transitionClasses)).join(" ")), null == value ? el.removeAttribute("class") : isSVG ? el.setAttribute("class", value) : el.className = value;
        }(el, nextValue, isSVG) : "style" === key ? function patchStyle(el, prev, next) {
            var style = el.style, isCssString = isString(next);
            if (next && !isCssString) {
                for(var _$key in next)setStyle(style, _$key, next[_$key]);
                if (prev && !isString(prev)) for(var _$key1 in prev)null == next[_$key1] && setStyle(style, _$key1, "");
            } else {
                var currentDisplay = style.display;
                isCssString ? prev !== next && (style.cssText = next) : prev && el.removeAttribute("style"), "_vod" in el && (style.display = currentDisplay);
            }
        }(el, prevValue, nextValue) : isOn(key) ? isModelListener(key) || patchEvent(el, key, 0, nextValue, parentComponent) : ("." === key[0] ? (key = key.slice(1), 1) : "^" === key[0] ? (key = key.slice(1), 0) : function shouldSetAsProp(el, key, value, isSVG) {
            if (isSVG) return "innerHTML" === key || "textContent" === key || !!(key in el && nativeOnRE.test(key) && isFunction(value));
            if ("spellcheck" === key || "draggable" === key || "translate" === key) return !1;
            if ("form" === key) return !1;
            if ("list" === key && "INPUT" === el.tagName) return !1;
            if ("type" === key && "TEXTAREA" === el.tagName) return !1;
            if (nativeOnRE.test(key) && isString(value)) return !1;
            return key in el;
        }(el, key, nextValue, isSVG)) ? function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
            if ("innerHTML" === key || "textContent" === key) return prevChildren && unmountChildren(prevChildren, parentComponent, parentSuspense), void (el[key] = null == value ? "" : value);
            if ("value" === key && "PROGRESS" !== el.tagName && !el.tagName.includes("-")) {
                el._value = value;
                var newValue = null == value ? "" : value;
                return el.value === newValue && "OPTION" !== el.tagName || (el.value = newValue), void (null == value && el.removeAttribute(key));
            }
            var needRemove = !1;
            if ("" === value || null == value) {
                var type2 = _typeof(el[key]);
                "boolean" === type2 ? value = includeBooleanAttr(value) : null == value && "string" === type2 ? (value = "", needRemove = !0) : "number" === type2 && (value = 0, needRemove = !0);
            }
            try {
                el[key] = value;
            } catch (e) {}
            needRemove && el.removeAttribute(key);
        }(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren) : ("true-value" === key ? el._trueValue = nextValue : "false-value" === key && (el._falseValue = nextValue), function patchAttr(el, key, value, isSVG, instance) {
            if (isSVG && key.startsWith("xlink:")) null == value ? el.removeAttributeNS(xlinkNS, key.slice(6, key.length)) : el.setAttributeNS(xlinkNS, key, value);
            else {
                var isBoolean = isSpecialBooleanAttr(key);
                null == value || isBoolean && !includeBooleanAttr(value) ? el.removeAttribute(key) : el.setAttribute(key, isBoolean ? "" : value);
            }
        }(el, key, nextValue, isSVG));
    }
}, nodeOps);
var renderer;
var util, util2;
(util2 = util || (util = {})).assertEqual = function(val) {
    return val;
}, util2.assertIs = function assertIs(_arg) {}, util2.assertNever = function assertNever(_x) {
    throw new Error;
}, util2.arrayToEnum = function(items) {
    var obj = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var item = _step.value;
            obj[item] = item;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return obj;
}, util2.getValidEnumValues = function(obj) {
    var validKeys = util2.objectKeys(obj).filter(function(k) {
        return "number" != typeof obj[obj[k]];
    }), filtered = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = validKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var k = _step.value;
            filtered[k] = obj[k];
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return util2.objectValues(filtered);
}, util2.objectValues = function(obj) {
    return util2.objectKeys(obj).map(function(e) {
        return obj[e];
    });
}, util2.objectKeys = "function" == typeof Object.keys ? function(obj) {
    return Object.keys(obj);
} : function(object) {
    var keys2 = [];
    for(var key in object)Object.prototype.hasOwnProperty.call(object, key) && keys2.push(key);
    return keys2;
}, util2.find = function(arr, checker) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var item = _step.value;
            if (checker(item)) return item;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}, util2.isInteger = "function" == typeof Number.isInteger ? function(val) {
    return Number.isInteger(val);
} : function(val) {
    return "number" == typeof val && isFinite(val) && Math.floor(val) === val;
}, util2.joinValues = function joinValues(array) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " | ";
    return array.map(function(val) {
        return "string" == typeof val ? "'".concat(val, "'") : val;
    }).join(separator);
}, util2.jsonStringifyReplacer = function(_, value) {
    return "bigint" == (typeof value === "undefined" ? "undefined" : _typeof(value)) ? value.toString() : value;
};
var ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]), getParsedType = function(data2) {
    switch(typeof data2 === "undefined" ? "undefined" : _typeof(data2)){
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data2) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            return Array.isArray(data2) ? ZodParsedType.array : null === data2 ? ZodParsedType.null : data2.then && "function" == typeof data2.then && data2.catch && "function" == typeof data2.catch ? ZodParsedType.promise : "undefined" != typeof Map && _instanceof(data2, Map) ? ZodParsedType.map : "undefined" != typeof Set && _instanceof(data2, Set) ? ZodParsedType.set : "undefined" != typeof Date && _instanceof(data2, Date) ? ZodParsedType.date : ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
}, ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
var ZodError = /*#__PURE__*/ function _target(Error1) {
    "use strict";
    _inherits(ZodError, Error1);
    var _super = _createSuper(ZodError);
    function ZodError(issues) {
        _classCallCheck(this, ZodError);
        var _this;
        _this = _super.call(this), _this.issues = [], _this.addIssue = function(sub) {
            _this.issues = _toConsumableArray(_this.issues).concat([
                sub
            ]);
        }, _this.addIssues = function() {
            var subs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            _this.issues = _toConsumableArray(_this.issues).concat(_toConsumableArray(subs));
        };
        var actualProto = (_instanceof(this, ZodError) ? this.constructor : void 0).prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(_assertThisInitialized(_this), actualProto) : _this.__proto__ = actualProto, _this.name = "ZodError", _this.issues = issues;
        return _possibleConstructorReturn(_this);
    }
    _createClass(ZodError, [
        {
            key: "errors",
            get: function get() {
                return this.issues;
            }
        },
        {
            key: "format",
            value: function format(_mapper) {
                var mapper = _mapper || function(issue) {
                    return issue.message;
                }, fieldErrors = {
                    _errors: []
                }, processError = function(error) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = error.issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var issue = _step.value;
                            if ("invalid_union" === issue.code) issue.unionErrors.map(processError);
                            else if ("invalid_return_type" === issue.code) processError(issue.returnTypeError);
                            else if ("invalid_arguments" === issue.code) processError(issue.argumentsError);
                            else if (0 === issue.path.length) fieldErrors._errors.push(mapper(issue));
                            else {
                                var curr = fieldErrors, i = 0;
                                for(; i < issue.path.length;){
                                    var el = issue.path[i];
                                    i === issue.path.length - 1 ? (curr[el] = curr[el] || {
                                        _errors: []
                                    }, curr[el]._errors.push(mapper(issue))) : curr[el] = curr[el] || {
                                        _errors: []
                                    }, curr = curr[el], i++;
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                };
                return processError(this), fieldErrors;
            }
        },
        {
            key: "toString",
            value: function toString() {
                return this.message;
            }
        },
        {
            key: "message",
            get: function get() {
                return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
            }
        },
        {
            key: "isEmpty",
            get: function get() {
                return 0 === this.issues.length;
            }
        },
        {
            key: "flatten",
            value: function flatten() {
                var mapper = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(issue) {
                    return issue.message;
                };
                var fieldErrors = {}, formErrors = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var sub = _step.value;
                        sub.path.length > 0 ? (fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [], fieldErrors[sub.path[0]].push(mapper(sub))) : formErrors.push(mapper(sub));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    formErrors: formErrors,
                    fieldErrors: fieldErrors
                };
            }
        },
        {
            key: "formErrors",
            get: function get() {
                return this.flatten();
            }
        }
    ]);
    return ZodError;
}(_wrapNativeSuper(Error));
ZodError.create = function(issues) {
    return new ZodError(issues);
};
var errorMap = function(issue, _ctx) {
    var message;
    switch(issue.code){
        case ZodIssueCode.invalid_type:
            message = issue.received === ZodParsedType.undefined ? "Required" : "Expected ".concat(issue.expected, ", received ").concat(issue.received);
            break;
        case ZodIssueCode.invalid_literal:
            message = "Invalid literal value, expected ".concat(JSON.stringify(issue.expected, util.jsonStringifyReplacer));
            break;
        case ZodIssueCode.unrecognized_keys:
            message = "Unrecognized key(s) in object: ".concat(util.joinValues(issue.keys, ", "));
            break;
        case ZodIssueCode.invalid_union:
            message = "Invalid input";
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = "Invalid discriminator value. Expected ".concat(util.joinValues(issue.options));
            break;
        case ZodIssueCode.invalid_enum_value:
            message = "Invalid enum value. Expected ".concat(util.joinValues(issue.options), ", received '").concat(issue.received, "'");
            break;
        case ZodIssueCode.invalid_arguments:
            message = "Invalid function arguments";
            break;
        case ZodIssueCode.invalid_return_type:
            message = "Invalid function return type";
            break;
        case ZodIssueCode.invalid_date:
            message = "Invalid date";
            break;
        case ZodIssueCode.invalid_string:
            "object" == typeof issue.validation ? "startsWith" in issue.validation ? message = 'Invalid input: must start with "'.concat(issue.validation.startsWith, '"') : "endsWith" in issue.validation ? message = 'Invalid input: must end with "'.concat(issue.validation.endsWith, '"') : util.assertNever(issue.validation) : message = "regex" !== issue.validation ? "Invalid ".concat(issue.validation) : "Invalid";
            break;
        case ZodIssueCode.too_small:
            message = "array" === issue.type ? "Array must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at least" : "more than", " ").concat(issue.minimum, " element(s)") : "string" === issue.type ? "String must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at least" : "over", " ").concat(issue.minimum, " character(s)") : "number" === issue.type ? "Number must be ".concat(issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than ").concat(issue.minimum) : "date" === issue.type ? "Date must be ".concat(issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than ").concat(new Date(issue.minimum)) : "Invalid input";
            break;
        case ZodIssueCode.too_big:
            message = "array" === issue.type ? "Array must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at most" : "less than", " ").concat(issue.maximum, " element(s)") : "string" === issue.type ? "String must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at most" : "under", " ").concat(issue.maximum, " character(s)") : "number" === issue.type ? "Number must be ".concat(issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than", " ").concat(issue.maximum) : "date" === issue.type ? "Date must be ".concat(issue.exact ? "exactly" : issue.inclusive ? "smaller than or equal to" : "smaller than", " ").concat(new Date(issue.maximum)) : "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = "Invalid input";
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = "Intersection results could not be merged";
            break;
        case ZodIssueCode.not_multiple_of:
            message = "Number must be a multiple of ".concat(issue.multipleOf);
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError, util.assertNever(issue);
    }
    return {
        message: message
    };
};
var overrideErrorMap = errorMap;
function getErrorMap() {
    return overrideErrorMap;
}
var makeIssue = function(params) {
    var data2 = params.data, path = params.path, errorMaps = params.errorMaps, issueData = params.issueData, fullPath = _toConsumableArray(path).concat(_toConsumableArray(issueData.path || [])), fullIssue = _objectSpreadProps(_objectSpread({}, issueData), {
        path: fullPath
    });
    var errorMessage = "";
    var maps = errorMaps.filter(function(m) {
        return !!m;
    }).slice().reverse();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = maps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var map = _step.value;
            errorMessage = map(fullIssue, {
                data: data2,
                defaultError: errorMessage
            }).message;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return _objectSpreadProps(_objectSpread({}, issueData), {
        path: fullPath,
        message: issueData.message || errorMessage
    });
};
function addIssueToContext(ctx, issueData) {
    var issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
        ].filter(function(x) {
            return !!x;
        })
    });
    ctx.common.issues.push(issue);
}
var ParseStatus = /*#__PURE__*/ function() {
    "use strict";
    function ParseStatus() {
        _classCallCheck(this, ParseStatus);
        this.value = "valid";
    }
    _createClass(ParseStatus, [
        {
            key: "dirty",
            value: function dirty() {
                "valid" === this.value && (this.value = "dirty");
            }
        },
        {
            key: "abort",
            value: function abort() {
                "aborted" !== this.value && (this.value = "aborted");
            }
        }
    ], [
        {
            key: "mergeArray",
            value: function mergeArray(status, results) {
                var arrayValue = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var s = _step.value;
                        if ("aborted" === s.status) return INVALID;
                        "dirty" === s.status && status.dirty(), arrayValue.push(s.value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    status: status.value,
                    value: arrayValue
                };
            }
        },
        {
            key: "mergeObjectAsync",
            value: function mergeObjectAsync(status, pairs) {
                return _asyncToGenerator(function() {
                    var syncPairs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, pair, _, _tmp, err;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                syncPairs = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    7,
                                    8,
                                    9
                                ]);
                                _iterator = pairs[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                pair = _step.value;
                                _ = syncPairs.push;
                                _tmp = {};
                                return [
                                    4,
                                    pair.key
                                ];
                            case 3:
                                _tmp.key = _state.sent();
                                return [
                                    4,
                                    pair.value
                                ];
                            case 4:
                                _.apply(syncPairs, [
                                    (_tmp.value = _state.sent(), _tmp)
                                ]);
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                return [
                                    2,
                                    ParseStatus.mergeObjectSync(status, syncPairs)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "mergeObjectSync",
            value: function mergeObjectSync(status, pairs) {
                var finalObject = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var pair = _step.value;
                        var key = pair.key, value = pair.value;
                        if ("aborted" === key.status) return INVALID;
                        if ("aborted" === value.status) return INVALID;
                        "dirty" === key.status && status.dirty(), "dirty" === value.status && status.dirty(), (void 0 !== value.value || pair.alwaysSet) && (finalObject[key.value] = value.value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    status: status.value,
                    value: finalObject
                };
            }
        }
    ]);
    return ParseStatus;
}();
var INVALID = Object.freeze({
    status: "aborted"
}), DIRTY = function(value) {
    return {
        status: "dirty",
        value: value
    };
}, OK = function(value) {
    return {
        status: "valid",
        value: value
    };
}, isAborted = function(x) {
    return "aborted" === x.status;
}, isDirty = function(x) {
    return "dirty" === x.status;
}, isValid = function(x) {
    return "valid" === x.status;
}, isAsync = function(x) {
    return void 0 !== (typeof Promise === "undefined" ? "undefined" : _typeof(Promise)) && _instanceof(x, Promise);
};
var errorUtil, errorUtil2;
(errorUtil2 = errorUtil || (errorUtil = {})).errToObj = function(message) {
    return "string" == typeof message ? {
        message: message
    } : message || {};
}, errorUtil2.toString = function(message) {
    return "string" == typeof message ? message : null == message ? void 0 : message.message;
};
var ParseInputLazyPath = /*#__PURE__*/ function() {
    "use strict";
    function ParseInputLazyPath(parent, value, path, key) {
        _classCallCheck(this, ParseInputLazyPath);
        this.parent = parent, this.data = value, this._path = path, this._key = key;
    }
    _createClass(ParseInputLazyPath, [
        {
            key: "path",
            get: function get() {
                return this._path.concat(this._key);
            }
        }
    ]);
    return ParseInputLazyPath;
}();
var handleResult = function(ctx, result) {
    if (isValid(result)) return {
        success: !0,
        data: result.value
    };
    if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        error: new ZodError(ctx.common.issues)
    };
};
function processCreateParams(params) {
    if (!params) return {};
    var errorMap2 = params.errorMap, invalid_type_error = params.invalid_type_error, required_error = params.required_error, description = params.description;
    if (errorMap2 && (invalid_type_error || required_error)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
    if (errorMap2) return {
        errorMap: errorMap2,
        description: description
    };
    return {
        errorMap: function(iss, ctx) {
            return "invalid_type" !== iss.code ? {
                message: ctx.defaultError
            } : void 0 === ctx.data ? {
                message: null != required_error ? required_error : ctx.defaultError
            } : {
                message: null != invalid_type_error ? invalid_type_error : ctx.defaultError
            };
        },
        description: description
    };
}
var ZodType = /*#__PURE__*/ function() {
    "use strict";
    function ZodType(def2) {
        _classCallCheck(this, ZodType);
        this.spa = this.safeParseAsync, this._def = def2, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
    }
    _createClass(ZodType, [
        {
            key: "description",
            get: function get() {
                return this._def.description;
            }
        },
        {
            key: "_getType",
            value: function _getType(input) {
                return getParsedType(input.data);
            }
        },
        {
            key: "_getOrReturnCtx",
            value: function _getOrReturnCtx(input, ctx) {
                return ctx || {
                    common: input.parent.common,
                    data: input.data,
                    parsedType: getParsedType(input.data),
                    schemaErrorMap: this._def.errorMap,
                    path: input.path,
                    parent: input.parent
                };
            }
        },
        {
            key: "_processInputParams",
            value: function _processInputParams(input) {
                return {
                    status: new ParseStatus,
                    ctx: {
                        common: input.parent.common,
                        data: input.data,
                        parsedType: getParsedType(input.data),
                        schemaErrorMap: this._def.errorMap,
                        path: input.path,
                        parent: input.parent
                    }
                };
            }
        },
        {
            key: "_parseSync",
            value: function _parseSync(input) {
                var result = this._parse(input);
                if (isAsync(result)) throw new Error("Synchronous parse encountered promise.");
                return result;
            }
        },
        {
            key: "_parseAsync",
            value: function _parseAsync(input) {
                var result = this._parse(input);
                return Promise.resolve(result);
            }
        },
        {
            key: "parse",
            value: function parse(data2, params) {
                var result = this.safeParse(data2, params);
                if (result.success) return result.data;
                throw result.error;
            }
        },
        {
            key: "safeParse",
            value: function safeParse(data2, params) {
                var _a3;
                var ctx = {
                    common: {
                        issues: [],
                        async: null !== (_a3 = null == params ? void 0 : params.async) && void 0 !== _a3 && _a3,
                        contextualErrorMap: null == params ? void 0 : params.errorMap
                    },
                    path: (null == params ? void 0 : params.path) || [],
                    schemaErrorMap: this._def.errorMap,
                    parent: null,
                    data: data2,
                    parsedType: getParsedType(data2)
                }, result = this._parseSync({
                    data: data2,
                    path: ctx.path,
                    parent: ctx
                });
                return handleResult(ctx, result);
            }
        },
        {
            key: "parseAsync",
            value: function parseAsync(data2, params) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var result;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.safeParseAsync(data2, params)
                                ];
                            case 1:
                                result = _state.sent();
                                if (result.success) return [
                                    2,
                                    result.data
                                ];
                                throw result.error;
                        }
                    });
                })();
            }
        },
        {
            key: "safeParseAsync",
            value: function safeParseAsync(data2, params) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var ctx, maybeAsyncResult, result;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                ctx = {
                                    common: {
                                        issues: [],
                                        contextualErrorMap: null == params ? void 0 : params.errorMap,
                                        async: !0
                                    },
                                    path: (null == params ? void 0 : params.path) || [],
                                    schemaErrorMap: _this._def.errorMap,
                                    parent: null,
                                    data: data2,
                                    parsedType: getParsedType(data2)
                                }, maybeAsyncResult = _this._parse({
                                    data: data2,
                                    path: ctx.path,
                                    parent: ctx
                                });
                                return [
                                    4,
                                    isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult)
                                ];
                            case 1:
                                result = _state.sent();
                                return [
                                    2,
                                    handleResult(ctx, result)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "refine",
            value: function refine(check, message) {
                var getIssueProperties = function(val) {
                    return "string" == typeof message || void 0 === message ? {
                        message: message
                    } : "function" == typeof message ? message(val) : message;
                };
                return this._refinement(function(val, ctx) {
                    var result = check(val), setError = function() {
                        return ctx.addIssue(_objectSpread({
                            code: ZodIssueCode.custom
                        }, getIssueProperties(val)));
                    };
                    return "undefined" != typeof Promise && _instanceof(result, Promise) ? result.then(function(data2) {
                        return !!data2 || (setError(), !1);
                    }) : !!result || (setError(), !1);
                });
            }
        },
        {
            key: "refinement",
            value: function refinement(check, refinementData) {
                return this._refinement(function(val, ctx) {
                    return !!check(val) || (ctx.addIssue("function" == typeof refinementData ? refinementData(val, ctx) : refinementData), !1);
                });
            }
        },
        {
            key: "_refinement",
            value: function _refinement(refinement) {
                return new ZodEffects({
                    schema: this,
                    typeName: ZodFirstPartyTypeKind.ZodEffects,
                    effect: {
                        type: "refinement",
                        refinement: refinement
                    }
                });
            }
        },
        {
            key: "superRefine",
            value: function superRefine(refinement) {
                return this._refinement(refinement);
            }
        },
        {
            key: "optional",
            value: function optional() {
                return ZodOptional.create(this);
            }
        },
        {
            key: "nullable",
            value: function nullable() {
                return ZodNullable.create(this);
            }
        },
        {
            key: "nullish",
            value: function nullish() {
                return this.optional().nullable();
            }
        },
        {
            key: "array",
            value: function array() {
                return ZodArray.create(this);
            }
        },
        {
            key: "promise",
            value: function promise() {
                return ZodPromise.create(this);
            }
        },
        {
            key: "or",
            value: function or(option) {
                return ZodUnion.create([
                    this,
                    option
                ]);
            }
        },
        {
            key: "and",
            value: function and(incoming) {
                return ZodIntersection.create(this, incoming);
            }
        },
        {
            key: "transform",
            value: function transform(transform) {
                return new ZodEffects({
                    schema: this,
                    typeName: ZodFirstPartyTypeKind.ZodEffects,
                    effect: {
                        type: "transform",
                        transform: transform
                    }
                });
            }
        },
        {
            key: "default",
            value: function _default(def2) {
                return new ZodDefault({
                    innerType: this,
                    defaultValue: "function" == typeof def2 ? def2 : function() {
                        return def2;
                    },
                    typeName: ZodFirstPartyTypeKind.ZodDefault
                });
            }
        },
        {
            key: "brand",
            value: function brand() {
                return new ZodBranded(_objectSpread({
                    typeName: ZodFirstPartyTypeKind.ZodBranded,
                    type: this
                }, processCreateParams(void 0)));
            }
        },
        {
            key: "catch",
            value: function _catch(def2) {
                return new ZodCatch({
                    innerType: this,
                    defaultValue: "function" == typeof def2 ? def2 : function() {
                        return def2;
                    },
                    typeName: ZodFirstPartyTypeKind.ZodCatch
                });
            }
        },
        {
            key: "describe",
            value: function describe(description) {
                return new (0, this.constructor)(_objectSpreadProps(_objectSpread({}, this._def), {
                    description: description
                }));
            }
        },
        {
            key: "pipe",
            value: function pipe(target) {
                return ZodPipeline.create(this, target);
            }
        },
        {
            key: "isOptional",
            value: function isOptional() {
                return this.safeParse(void 0).success;
            }
        },
        {
            key: "isNullable",
            value: function isNullable() {
                return this.safeParse(null).success;
            }
        }
    ]);
    return ZodType;
}();
var cuidRegex = /^c[^\s-]{8,}$/i, uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var ZodString = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodString, ZodType);
    var _super = _createSuper(ZodString);
    function ZodString() {
        _classCallCheck(this, ZodString);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments))), _this._regex = function(regex, validation, message) {
            return _this.refinement(function(data2) {
                return regex.test(data2);
            }, _objectSpread({
                validation: validation,
                code: ZodIssueCode.invalid_string
            }, errorUtil.errToObj(message)));
        }, _this.nonempty = function(message) {
            return _this.min(1, errorUtil.errToObj(message));
        }, _this.trim = function() {
            return new ZodString(_objectSpreadProps(_objectSpread({}, _this._def), {
                checks: _toConsumableArray(_this._def.checks).concat([
                    {
                        kind: "trim"
                    }
                ])
            }));
        };
        return _possibleConstructorReturn(_this);
    }
    _createClass(ZodString, [
        {
            key: "_parse",
            value: function _parse(input) {
                this._def.coerce && (input.data = String(input.data));
                if (this._getType(input) !== ZodParsedType.string) {
                    var ctx2 = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx2, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.string,
                        received: ctx2.parsedType
                    }), INVALID;
                }
                var status = new ParseStatus;
                var ctx;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var check = _step.value;
                        if ("min" === check.kind) input.data.length < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: check.message
                        }), status.dirty());
                        else if ("max" === check.kind) input.data.length > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: check.message
                        }), status.dirty());
                        else if ("length" === check.kind) {
                            var tooBig = input.data.length > check.value, tooSmall = input.data.length < check.value;
                            (tooBig || tooSmall) && (ctx = this._getOrReturnCtx(input, ctx), tooBig ? addIssueToContext(ctx, {
                                code: ZodIssueCode.too_big,
                                maximum: check.value,
                                type: "string",
                                inclusive: !0,
                                exact: !0,
                                message: check.message
                            }) : tooSmall && addIssueToContext(ctx, {
                                code: ZodIssueCode.too_small,
                                minimum: check.value,
                                type: "string",
                                inclusive: !0,
                                exact: !0,
                                message: check.message
                            }), status.dirty());
                        } else if ("email" === check.kind) emailRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            validation: "email",
                            code: ZodIssueCode.invalid_string,
                            message: check.message
                        }), status.dirty());
                        else if ("uuid" === check.kind) uuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            validation: "uuid",
                            code: ZodIssueCode.invalid_string,
                            message: check.message
                        }), status.dirty());
                        else if ("cuid" === check.kind) cuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            validation: "cuid",
                            code: ZodIssueCode.invalid_string,
                            message: check.message
                        }), status.dirty());
                        else if ("url" === check.kind) try {
                            new URL(input.data);
                        } catch (_a3) {
                            ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                                validation: "url",
                                code: ZodIssueCode.invalid_string,
                                message: check.message
                            }), status.dirty();
                        }
                        else if ("regex" === check.kind) {
                            check.regex.lastIndex = 0;
                            check.regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                                validation: "regex",
                                code: ZodIssueCode.invalid_string,
                                message: check.message
                            }), status.dirty());
                        } else if ("trim" === check.kind) input.data = input.data.trim();
                        else if ("startsWith" === check.kind) input.data.startsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_string,
                            validation: {
                                startsWith: check.value
                            },
                            message: check.message
                        }), status.dirty());
                        else if ("endsWith" === check.kind) input.data.endsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_string,
                            validation: {
                                endsWith: check.value
                            },
                            message: check.message
                        }), status.dirty());
                        else if ("datetime" === check.kind) {
                            ((args = check).precision ? args.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(args.precision, "}(([+-]\\d{2}:\\d{2})|Z)$")) : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(args.precision, "}Z$")) : 0 === args.precision ? args.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}:\\d{2})|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : args.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}:\\d{2})|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                                code: ZodIssueCode.invalid_string,
                                validation: "datetime",
                                message: check.message
                            }), status.dirty());
                        } else util.assertNever(check);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var args;
                return {
                    status: status.value,
                    value: input.data
                };
            }
        },
        {
            key: "_addCheck",
            value: function _addCheck(check) {
                return new ZodString(_objectSpreadProps(_objectSpread({}, this._def), {
                    checks: _toConsumableArray(this._def.checks).concat([
                        check
                    ])
                }));
            }
        },
        {
            key: "email",
            value: function email(message) {
                return this._addCheck(_objectSpread({
                    kind: "email"
                }, errorUtil.errToObj(message)));
            }
        },
        {
            key: "url",
            value: function url(message) {
                return this._addCheck(_objectSpread({
                    kind: "url"
                }, errorUtil.errToObj(message)));
            }
        },
        {
            key: "uuid",
            value: function uuid(message) {
                return this._addCheck(_objectSpread({
                    kind: "uuid"
                }, errorUtil.errToObj(message)));
            }
        },
        {
            key: "cuid",
            value: function cuid(message) {
                return this._addCheck(_objectSpread({
                    kind: "cuid"
                }, errorUtil.errToObj(message)));
            }
        },
        {
            key: "datetime",
            value: function datetime(options) {
                var _a3;
                return "string" == typeof options ? this._addCheck({
                    kind: "datetime",
                    precision: null,
                    offset: !1,
                    message: options
                }) : this._addCheck(_objectSpread({
                    kind: "datetime",
                    precision: void 0 === (null == options ? void 0 : options.precision) ? null : null == options ? void 0 : options.precision,
                    offset: null !== (_a3 = null == options ? void 0 : options.offset) && void 0 !== _a3 && _a3
                }, errorUtil.errToObj(null == options ? void 0 : options.message)));
            }
        },
        {
            key: "regex",
            value: function regex(regex, message) {
                return this._addCheck(_objectSpread({
                    kind: "regex",
                    regex: regex
                }, errorUtil.errToObj(message)));
            }
        },
        {
            key: "startsWith",
            value: function startsWith(value, message) {
                return this._addCheck(_objectSpread({
                    kind: "startsWith",
                    value: value
                }, errorUtil.errToObj(message)));
            }
        },
        {
            key: "endsWith",
            value: function endsWith(value, message) {
                return this._addCheck(_objectSpread({
                    kind: "endsWith",
                    value: value
                }, errorUtil.errToObj(message)));
            }
        },
        {
            key: "min",
            value: function min(minLength, message) {
                return this._addCheck(_objectSpread({
                    kind: "min",
                    value: minLength
                }, errorUtil.errToObj(message)));
            }
        },
        {
            key: "max",
            value: function max(maxLength, message) {
                return this._addCheck(_objectSpread({
                    kind: "max",
                    value: maxLength
                }, errorUtil.errToObj(message)));
            }
        },
        {
            key: "length",
            value: function length(len, message) {
                return this._addCheck(_objectSpread({
                    kind: "length",
                    value: len
                }, errorUtil.errToObj(message)));
            }
        },
        {
            key: "isDatetime",
            get: function get() {
                return !!this._def.checks.find(function(ch) {
                    return "datetime" === ch.kind;
                });
            }
        },
        {
            key: "isEmail",
            get: function get() {
                return !!this._def.checks.find(function(ch) {
                    return "email" === ch.kind;
                });
            }
        },
        {
            key: "isURL",
            get: function get() {
                return !!this._def.checks.find(function(ch) {
                    return "url" === ch.kind;
                });
            }
        },
        {
            key: "isUUID",
            get: function get() {
                return !!this._def.checks.find(function(ch) {
                    return "uuid" === ch.kind;
                });
            }
        },
        {
            key: "isCUID",
            get: function get() {
                return !!this._def.checks.find(function(ch) {
                    return "cuid" === ch.kind;
                });
            }
        },
        {
            key: "minLength",
            get: function get() {
                var min = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var ch = _step.value;
                        "min" === ch.kind && (null === min || ch.value > min) && (min = ch.value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return min;
            }
        },
        {
            key: "maxLength",
            get: function get() {
                var max = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var ch = _step.value;
                        "max" === ch.kind && (null === max || ch.value < max) && (max = ch.value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return max;
            }
        }
    ]);
    return ZodString;
}(ZodType);
function floatSafeRemainder(val, step) {
    var valDecCount = (val.toString().split(".")[1] || "").length, stepDecCount = (step.toString().split(".")[1] || "").length, decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    return parseInt(val.toFixed(decCount).replace(".", "")) % parseInt(step.toFixed(decCount).replace(".", "")) / Math.pow(10, decCount);
}
ZodString.create = function(params) {
    var _a3;
    return new ZodString(_objectSpread({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: null !== (_a3 = null == params ? void 0 : params.coerce) && void 0 !== _a3 && _a3
    }, processCreateParams(params)));
};
var ZodNumber = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodNumber, ZodType);
    var _super = _createSuper(ZodNumber);
    function ZodNumber() {
        _classCallCheck(this, ZodNumber);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments))), _this.min = _this.gte, _this.max = _this.lte, _this.step = _this.multipleOf;
        return _possibleConstructorReturn(_this);
    }
    _createClass(ZodNumber, [
        {
            key: "_parse",
            value: function _parse(input) {
                this._def.coerce && (input.data = Number(input.data));
                if (this._getType(input) !== ZodParsedType.number) {
                    var ctx2 = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx2, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.number,
                        received: ctx2.parsedType
                    }), INVALID;
                }
                var ctx;
                var status = new ParseStatus;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var check = _step.value;
                        if ("int" === check.kind) util.isInteger(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_type,
                            expected: "integer",
                            received: "float",
                            message: check.message
                        }), status.dirty());
                        else if ("min" === check.kind) {
                            (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                                code: ZodIssueCode.too_small,
                                minimum: check.value,
                                type: "number",
                                inclusive: check.inclusive,
                                exact: !1,
                                message: check.message
                            }), status.dirty());
                        } else if ("max" === check.kind) {
                            (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                                code: ZodIssueCode.too_big,
                                maximum: check.value,
                                type: "number",
                                inclusive: check.inclusive,
                                exact: !1,
                                message: check.message
                            }), status.dirty());
                        } else "multipleOf" === check.kind ? 0 !== floatSafeRemainder(input.data, check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            code: ZodIssueCode.not_multiple_of,
                            multipleOf: check.value,
                            message: check.message
                        }), status.dirty()) : "finite" === check.kind ? Number.isFinite(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            code: ZodIssueCode.not_finite,
                            message: check.message
                        }), status.dirty()) : util.assertNever(check);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    status: status.value,
                    value: input.data
                };
            }
        },
        {
            key: "gte",
            value: function gte(value, message) {
                return this.setLimit("min", value, !0, errorUtil.toString(message));
            }
        },
        {
            key: "gt",
            value: function gt(value, message) {
                return this.setLimit("min", value, !1, errorUtil.toString(message));
            }
        },
        {
            key: "lte",
            value: function lte(value, message) {
                return this.setLimit("max", value, !0, errorUtil.toString(message));
            }
        },
        {
            key: "lt",
            value: function lt(value, message) {
                return this.setLimit("max", value, !1, errorUtil.toString(message));
            }
        },
        {
            key: "setLimit",
            value: function setLimit(kind, value, inclusive, message) {
                return new ZodNumber(_objectSpreadProps(_objectSpread({}, this._def), {
                    checks: _toConsumableArray(this._def.checks).concat([
                        {
                            kind: kind,
                            value: value,
                            inclusive: inclusive,
                            message: errorUtil.toString(message)
                        }
                    ])
                }));
            }
        },
        {
            key: "_addCheck",
            value: function _addCheck(check) {
                return new ZodNumber(_objectSpreadProps(_objectSpread({}, this._def), {
                    checks: _toConsumableArray(this._def.checks).concat([
                        check
                    ])
                }));
            }
        },
        {
            key: "int",
            value: function int(message) {
                return this._addCheck({
                    kind: "int",
                    message: errorUtil.toString(message)
                });
            }
        },
        {
            key: "positive",
            value: function positive(message) {
                return this._addCheck({
                    kind: "min",
                    value: 0,
                    inclusive: !1,
                    message: errorUtil.toString(message)
                });
            }
        },
        {
            key: "negative",
            value: function negative(message) {
                return this._addCheck({
                    kind: "max",
                    value: 0,
                    inclusive: !1,
                    message: errorUtil.toString(message)
                });
            }
        },
        {
            key: "nonpositive",
            value: function nonpositive(message) {
                return this._addCheck({
                    kind: "max",
                    value: 0,
                    inclusive: !0,
                    message: errorUtil.toString(message)
                });
            }
        },
        {
            key: "nonnegative",
            value: function nonnegative(message) {
                return this._addCheck({
                    kind: "min",
                    value: 0,
                    inclusive: !0,
                    message: errorUtil.toString(message)
                });
            }
        },
        {
            key: "multipleOf",
            value: function multipleOf(value, message) {
                return this._addCheck({
                    kind: "multipleOf",
                    value: value,
                    message: errorUtil.toString(message)
                });
            }
        },
        {
            key: "finite",
            value: function finite(message) {
                return this._addCheck({
                    kind: "finite",
                    message: errorUtil.toString(message)
                });
            }
        },
        {
            key: "minValue",
            get: function get() {
                var min = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var ch = _step.value;
                        "min" === ch.kind && (null === min || ch.value > min) && (min = ch.value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return min;
            }
        },
        {
            key: "maxValue",
            get: function get() {
                var max = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var ch = _step.value;
                        "max" === ch.kind && (null === max || ch.value < max) && (max = ch.value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return max;
            }
        },
        {
            key: "isInt",
            get: function get() {
                return !!this._def.checks.find(function(ch) {
                    return "int" === ch.kind;
                });
            }
        }
    ]);
    return ZodNumber;
}(ZodType);
ZodNumber.create = function(params) {
    return new ZodNumber(_objectSpread({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: (null == params ? void 0 : params.coerce) || !1
    }, processCreateParams(params)));
};
var ZodBigInt = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodBigInt, ZodType);
    var _super = _createSuper(ZodBigInt);
    function ZodBigInt() {
        _classCallCheck(this, ZodBigInt);
        return _super.apply(this, arguments);
    }
    _createClass(ZodBigInt, [
        {
            key: "_parse",
            value: function _parse(input) {
                this._def.coerce && (input.data = BigInt(input.data));
                if (this._getType(input) !== ZodParsedType.bigint) {
                    var ctx = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.bigint,
                        received: ctx.parsedType
                    }), INVALID;
                }
                return OK(input.data);
            }
        }
    ]);
    return ZodBigInt;
}(ZodType);
ZodBigInt.create = function(params) {
    var _a3;
    return new ZodBigInt(_objectSpread({
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: null !== (_a3 = null == params ? void 0 : params.coerce) && void 0 !== _a3 && _a3
    }, processCreateParams(params)));
};
var ZodBoolean = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodBoolean, ZodType);
    var _super = _createSuper(ZodBoolean);
    function ZodBoolean() {
        _classCallCheck(this, ZodBoolean);
        return _super.apply(this, arguments);
    }
    _createClass(ZodBoolean, [
        {
            key: "_parse",
            value: function _parse(input) {
                this._def.coerce && (input.data = Boolean(input.data));
                if (this._getType(input) !== ZodParsedType.boolean) {
                    var ctx = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.boolean,
                        received: ctx.parsedType
                    }), INVALID;
                }
                return OK(input.data);
            }
        }
    ]);
    return ZodBoolean;
}(ZodType);
ZodBoolean.create = function(params) {
    return new ZodBoolean(_objectSpread({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (null == params ? void 0 : params.coerce) || !1
    }, processCreateParams(params)));
};
var ZodDate = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodDate, ZodType);
    var _super = _createSuper(ZodDate);
    function ZodDate() {
        _classCallCheck(this, ZodDate);
        return _super.apply(this, arguments);
    }
    _createClass(ZodDate, [
        {
            key: "_parse",
            value: function _parse(input) {
                this._def.coerce && (input.data = new Date(input.data));
                if (this._getType(input) !== ZodParsedType.date) {
                    var ctx2 = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx2, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.date,
                        received: ctx2.parsedType
                    }), INVALID;
                }
                if (isNaN(input.data.getTime())) {
                    return addIssueToContext(this._getOrReturnCtx(input), {
                        code: ZodIssueCode.invalid_date
                    }), INVALID;
                }
                var status = new ParseStatus;
                var ctx;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var check = _step.value;
                        "min" === check.kind ? input.data.getTime() < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            message: check.message,
                            inclusive: !0,
                            exact: !1,
                            minimum: check.value,
                            type: "date"
                        }), status.dirty()) : "max" === check.kind ? input.data.getTime() > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            message: check.message,
                            inclusive: !0,
                            exact: !1,
                            maximum: check.value,
                            type: "date"
                        }), status.dirty()) : util.assertNever(check);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    status: status.value,
                    value: new Date(input.data.getTime())
                };
            }
        },
        {
            key: "_addCheck",
            value: function _addCheck(check) {
                return new ZodDate(_objectSpreadProps(_objectSpread({}, this._def), {
                    checks: _toConsumableArray(this._def.checks).concat([
                        check
                    ])
                }));
            }
        },
        {
            key: "min",
            value: function min(minDate, message) {
                return this._addCheck({
                    kind: "min",
                    value: minDate.getTime(),
                    message: errorUtil.toString(message)
                });
            }
        },
        {
            key: "max",
            value: function max(maxDate, message) {
                return this._addCheck({
                    kind: "max",
                    value: maxDate.getTime(),
                    message: errorUtil.toString(message)
                });
            }
        },
        {
            key: "minDate",
            get: function get() {
                var min = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var ch = _step.value;
                        "min" === ch.kind && (null === min || ch.value > min) && (min = ch.value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return null != min ? new Date(min) : null;
            }
        },
        {
            key: "maxDate",
            get: function get() {
                var max = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var ch = _step.value;
                        "max" === ch.kind && (null === max || ch.value < max) && (max = ch.value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return null != max ? new Date(max) : null;
            }
        }
    ]);
    return ZodDate;
}(ZodType);
ZodDate.create = function(params) {
    return new ZodDate(_objectSpread({
        checks: [],
        coerce: (null == params ? void 0 : params.coerce) || !1,
        typeName: ZodFirstPartyTypeKind.ZodDate
    }, processCreateParams(params)));
};
var ZodSymbol = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodSymbol, ZodType);
    var _super = _createSuper(ZodSymbol);
    function ZodSymbol() {
        _classCallCheck(this, ZodSymbol);
        return _super.apply(this, arguments);
    }
    _createClass(ZodSymbol, [
        {
            key: "_parse",
            value: function _parse(input) {
                if (this._getType(input) !== ZodParsedType.symbol) {
                    var ctx = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.symbol,
                        received: ctx.parsedType
                    }), INVALID;
                }
                return OK(input.data);
            }
        }
    ]);
    return ZodSymbol;
}(ZodType);
ZodSymbol.create = function(params) {
    return new ZodSymbol(_objectSpread({
        typeName: ZodFirstPartyTypeKind.ZodSymbol
    }, processCreateParams(params)));
};
var ZodUndefined = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodUndefined, ZodType);
    var _super = _createSuper(ZodUndefined);
    function ZodUndefined() {
        _classCallCheck(this, ZodUndefined);
        return _super.apply(this, arguments);
    }
    _createClass(ZodUndefined, [
        {
            key: "_parse",
            value: function _parse(input) {
                if (this._getType(input) !== ZodParsedType.undefined) {
                    var ctx = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.undefined,
                        received: ctx.parsedType
                    }), INVALID;
                }
                return OK(input.data);
            }
        }
    ]);
    return ZodUndefined;
}(ZodType);
ZodUndefined.create = function(params) {
    return new ZodUndefined(_objectSpread({
        typeName: ZodFirstPartyTypeKind.ZodUndefined
    }, processCreateParams(params)));
};
var ZodNull = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodNull, ZodType);
    var _super = _createSuper(ZodNull);
    function ZodNull() {
        _classCallCheck(this, ZodNull);
        return _super.apply(this, arguments);
    }
    _createClass(ZodNull, [
        {
            key: "_parse",
            value: function _parse(input) {
                if (this._getType(input) !== ZodParsedType.null) {
                    var ctx = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.null,
                        received: ctx.parsedType
                    }), INVALID;
                }
                return OK(input.data);
            }
        }
    ]);
    return ZodNull;
}(ZodType);
ZodNull.create = function(params) {
    return new ZodNull(_objectSpread({
        typeName: ZodFirstPartyTypeKind.ZodNull
    }, processCreateParams(params)));
};
var ZodAny = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodAny, ZodType);
    var _super = _createSuper(ZodAny);
    function ZodAny() {
        _classCallCheck(this, ZodAny);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments))), _this._any = !0;
        return _possibleConstructorReturn(_this);
    }
    _createClass(ZodAny, [
        {
            key: "_parse",
            value: function _parse(input) {
                return OK(input.data);
            }
        }
    ]);
    return ZodAny;
}(ZodType);
ZodAny.create = function(params) {
    return new ZodAny(_objectSpread({
        typeName: ZodFirstPartyTypeKind.ZodAny
    }, processCreateParams(params)));
};
var ZodUnknown = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodUnknown, ZodType);
    var _super = _createSuper(ZodUnknown);
    function ZodUnknown() {
        _classCallCheck(this, ZodUnknown);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments))), _this._unknown = !0;
        return _possibleConstructorReturn(_this);
    }
    _createClass(ZodUnknown, [
        {
            key: "_parse",
            value: function _parse(input) {
                return OK(input.data);
            }
        }
    ]);
    return ZodUnknown;
}(ZodType);
ZodUnknown.create = function(params) {
    return new ZodUnknown(_objectSpread({
        typeName: ZodFirstPartyTypeKind.ZodUnknown
    }, processCreateParams(params)));
};
var ZodNever = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodNever, ZodType);
    var _super = _createSuper(ZodNever);
    function ZodNever() {
        _classCallCheck(this, ZodNever);
        return _super.apply(this, arguments);
    }
    _createClass(ZodNever, [
        {
            key: "_parse",
            value: function _parse(input) {
                var ctx = this._getOrReturnCtx(input);
                return addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.never,
                    received: ctx.parsedType
                }), INVALID;
            }
        }
    ]);
    return ZodNever;
}(ZodType);
ZodNever.create = function(params) {
    return new ZodNever(_objectSpread({
        typeName: ZodFirstPartyTypeKind.ZodNever
    }, processCreateParams(params)));
};
var ZodVoid = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodVoid, ZodType);
    var _super = _createSuper(ZodVoid);
    function ZodVoid() {
        _classCallCheck(this, ZodVoid);
        return _super.apply(this, arguments);
    }
    _createClass(ZodVoid, [
        {
            key: "_parse",
            value: function _parse(input) {
                if (this._getType(input) !== ZodParsedType.undefined) {
                    var ctx = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.void,
                        received: ctx.parsedType
                    }), INVALID;
                }
                return OK(input.data);
            }
        }
    ]);
    return ZodVoid;
}(ZodType);
ZodVoid.create = function(params) {
    return new ZodVoid(_objectSpread({
        typeName: ZodFirstPartyTypeKind.ZodVoid
    }, processCreateParams(params)));
};
var ZodArray = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodArray, ZodType);
    var _super = _createSuper(ZodArray);
    function ZodArray() {
        _classCallCheck(this, ZodArray);
        return _super.apply(this, arguments);
    }
    _createClass(ZodArray, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input), ctx = _this__processInputParams.ctx, status = _this__processInputParams.status, def2 = this._def;
                if (ctx.parsedType !== ZodParsedType.array) return addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.array,
                    received: ctx.parsedType
                }), INVALID;
                if (null !== def2.exactLength) {
                    var tooBig = ctx.data.length > def2.exactLength.value, tooSmall = ctx.data.length < def2.exactLength.value;
                    (tooBig || tooSmall) && (addIssueToContext(ctx, {
                        code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                        minimum: tooSmall ? def2.exactLength.value : void 0,
                        maximum: tooBig ? def2.exactLength.value : void 0,
                        type: "array",
                        inclusive: !0,
                        exact: !0,
                        message: def2.exactLength.message
                    }), status.dirty());
                }
                if (null !== def2.minLength && ctx.data.length < def2.minLength.value && (addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def2.minLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: def2.minLength.message
                }), status.dirty()), null !== def2.maxLength && ctx.data.length > def2.maxLength.value && (addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def2.maxLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: def2.maxLength.message
                }), status.dirty()), ctx.common.async) return Promise.all(ctx.data.map(function(item, i) {
                    return def2.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
                })).then(function(result2) {
                    return ParseStatus.mergeArray(status, result2);
                });
                var result = ctx.data.map(function(item, i) {
                    return def2.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
                });
                return ParseStatus.mergeArray(status, result);
            }
        },
        {
            key: "element",
            get: function get() {
                return this._def.type;
            }
        },
        {
            key: "min",
            value: function min(minLength, message) {
                return new ZodArray(_objectSpreadProps(_objectSpread({}, this._def), {
                    minLength: {
                        value: minLength,
                        message: errorUtil.toString(message)
                    }
                }));
            }
        },
        {
            key: "max",
            value: function max(maxLength, message) {
                return new ZodArray(_objectSpreadProps(_objectSpread({}, this._def), {
                    maxLength: {
                        value: maxLength,
                        message: errorUtil.toString(message)
                    }
                }));
            }
        },
        {
            key: "length",
            value: function length(len, message) {
                return new ZodArray(_objectSpreadProps(_objectSpread({}, this._def), {
                    exactLength: {
                        value: len,
                        message: errorUtil.toString(message)
                    }
                }));
            }
        },
        {
            key: "nonempty",
            value: function nonempty(message) {
                return this.min(1, message);
            }
        }
    ]);
    return ZodArray;
}(ZodType);
var objectUtil;
ZodArray.create = function(schema, params) {
    return new ZodArray(_objectSpread({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray
    }, processCreateParams(params)));
}, (objectUtil || (objectUtil = {})).mergeShapes = function(first, second) {
    return _objectSpread({}, first, second);
};
var AugmentFactory = function(def2) {
    return function(augmentation) {
        return new ZodObject(_objectSpreadProps(_objectSpread({}, def2), {
            shape: function() {
                return _objectSpread({}, def2.shape(), augmentation);
            }
        }));
    };
};
function deepPartialify(schema) {
    if (_instanceof(schema, ZodObject)) {
        var newShape = {};
        for(var key in schema.shape){
            var fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject(_objectSpreadProps(_objectSpread({}, schema._def), {
            shape: function() {
                return newShape;
            }
        }));
    }
    return _instanceof(schema, ZodArray) ? ZodArray.create(deepPartialify(schema.element)) : _instanceof(schema, ZodOptional) ? ZodOptional.create(deepPartialify(schema.unwrap())) : _instanceof(schema, ZodNullable) ? ZodNullable.create(deepPartialify(schema.unwrap())) : _instanceof(schema, ZodTuple) ? ZodTuple.create(schema.items.map(function(item) {
        return deepPartialify(item);
    })) : schema;
}
var ZodObject = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodObject, ZodType);
    var _super = _createSuper(ZodObject);
    function ZodObject() {
        _classCallCheck(this, ZodObject);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments))), _this._cached = null, _this.nonstrict = _this.passthrough, _this.augment = AugmentFactory(_this._def), _this.extend = AugmentFactory(_this._def);
        return _possibleConstructorReturn(_this);
    }
    _createClass(ZodObject, [
        {
            key: "_getCached",
            value: function _getCached() {
                if (null !== this._cached) return this._cached;
                var shape = this._def.shape(), keys2 = util.objectKeys(shape);
                return this._cached = {
                    shape: shape,
                    keys: keys2
                };
            }
        },
        {
            key: "_parse",
            value: function _parse(input) {
                if (this._getType(input) !== ZodParsedType.object) {
                    var ctx2 = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx2, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.object,
                        received: ctx2.parsedType
                    }), INVALID;
                }
                var _this__processInputParams = this._processInputParams(input), status = _this__processInputParams.status, ctx = _this__processInputParams.ctx, _this__getCached = this._getCached(), shape = _this__getCached.shape, shapeKeys = _this__getCached.keys, extraKeys = [];
                if (!(_instanceof(this._def.catchall, ZodNever) && "strip" === this._def.unknownKeys)) for(var key in ctx.data)shapeKeys.includes(key) || extraKeys.push(key);
                var pairs = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = shapeKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var key1 = _step.value;
                        var keyValidator = shape[key1], value = ctx.data[key1];
                        pairs.push({
                            key: {
                                status: "valid",
                                value: key1
                            },
                            value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key1)),
                            alwaysSet: key1 in ctx.data
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (_instanceof(this._def.catchall, ZodNever)) {
                    var unknownKeys = this._def.unknownKeys;
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    if ("passthrough" === unknownKeys) try {
                        for(var _iterator1 = extraKeys[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var key2 = _step1.value;
                            pairs.push({
                                key: {
                                    status: "valid",
                                    value: key2
                                },
                                value: {
                                    status: "valid",
                                    value: ctx.data[key2]
                                }
                            });
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    else if ("strict" === unknownKeys) extraKeys.length > 0 && (addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys
                    }), status.dirty());
                    else if ("strip" !== unknownKeys) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
                } else {
                    var catchall = this._def.catchall;
                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator2 = extraKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            var key3 = _step2.value;
                            var value1 = ctx.data[key3];
                            pairs.push({
                                key: {
                                    status: "valid",
                                    value: key3
                                },
                                value: catchall._parse(new ParseInputLazyPath(ctx, value1, ctx.path, key3)),
                                alwaysSet: key3 in ctx.data
                            });
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                _iterator2.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
                return ctx.common.async ? Promise.resolve().then(/*#__PURE__*/ _asyncToGenerator(function() {
                    var syncPairs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, pair, key, _, _tmp, err;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                syncPairs = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    7,
                                    8,
                                    9
                                ]);
                                _iterator = pairs[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                pair = _step.value;
                                return [
                                    4,
                                    pair.key
                                ];
                            case 3:
                                key = _state.sent();
                                _ = syncPairs.push;
                                _tmp = {
                                    key: key
                                };
                                return [
                                    4,
                                    pair.value
                                ];
                            case 4:
                                _.apply(syncPairs, [
                                    (_tmp.value = _state.sent(), _tmp.alwaysSet = pair.alwaysSet, _tmp)
                                ]);
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                return [
                                    2,
                                    syncPairs
                                ];
                        }
                    });
                })).then(function(syncPairs) {
                    return ParseStatus.mergeObjectSync(status, syncPairs);
                }) : ParseStatus.mergeObjectSync(status, pairs);
            }
        },
        {
            key: "shape",
            get: function get() {
                return this._def.shape();
            }
        },
        {
            key: "strict",
            value: function strict(message) {
                var _this = this;
                return errorUtil.errToObj, new ZodObject(_objectSpread(_objectSpreadProps(_objectSpread({}, this._def), {
                    unknownKeys: "strict"
                }), void 0 !== message ? {
                    errorMap: function(issue, ctx) {
                        var _a3, _b, _c, _d;
                        var defaultError = null !== (_c = null === (_b = (_a3 = _this._def).errorMap) || void 0 === _b ? void 0 : _b.call(_a3, issue, ctx).message) && void 0 !== _c ? _c : ctx.defaultError;
                        return "unrecognized_keys" === issue.code ? {
                            message: null !== (_d = errorUtil.errToObj(message).message) && void 0 !== _d ? _d : defaultError
                        } : {
                            message: defaultError
                        };
                    }
                } : {}));
            }
        },
        {
            key: "strip",
            value: function strip() {
                return new ZodObject(_objectSpreadProps(_objectSpread({}, this._def), {
                    unknownKeys: "strip"
                }));
            }
        },
        {
            key: "passthrough",
            value: function passthrough() {
                return new ZodObject(_objectSpreadProps(_objectSpread({}, this._def), {
                    unknownKeys: "passthrough"
                }));
            }
        },
        {
            key: "setKey",
            value: function setKey(key, schema) {
                return this.augment(_defineProperty({}, key, schema));
            }
        },
        {
            key: "merge",
            value: function merge(merging) {
                var _this = this;
                return new ZodObject({
                    unknownKeys: merging._def.unknownKeys,
                    catchall: merging._def.catchall,
                    shape: function() {
                        return objectUtil.mergeShapes(_this._def.shape(), merging._def.shape());
                    },
                    typeName: ZodFirstPartyTypeKind.ZodObject
                });
            }
        },
        {
            key: "catchall",
            value: function catchall(index) {
                return new ZodObject(_objectSpreadProps(_objectSpread({}, this._def), {
                    catchall: index
                }));
            }
        },
        {
            key: "pick",
            value: function pick(mask) {
                var _this = this;
                var shape = {};
                return util.objectKeys(mask).map(function(key) {
                    _this.shape[key] && (shape[key] = _this.shape[key]);
                }), new ZodObject(_objectSpreadProps(_objectSpread({}, this._def), {
                    shape: function() {
                        return shape;
                    }
                }));
            }
        },
        {
            key: "omit",
            value: function omit(mask) {
                var _this = this;
                var shape = {};
                return util.objectKeys(this.shape).map(function(key) {
                    -1 === util.objectKeys(mask).indexOf(key) && (shape[key] = _this.shape[key]);
                }), new ZodObject(_objectSpreadProps(_objectSpread({}, this._def), {
                    shape: function() {
                        return shape;
                    }
                }));
            }
        },
        {
            key: "deepPartial",
            value: function deepPartial() {
                return deepPartialify(this);
            }
        },
        {
            key: "partial",
            value: function partial(mask) {
                var _this = this;
                var newShape = {};
                if (mask) return util.objectKeys(this.shape).map(function(key) {
                    -1 === util.objectKeys(mask).indexOf(key) ? newShape[key] = _this.shape[key] : newShape[key] = _this.shape[key].optional();
                }), new ZodObject(_objectSpreadProps(_objectSpread({}, this._def), {
                    shape: function() {
                        return newShape;
                    }
                }));
                for(var key in this.shape){
                    var fieldSchema = this.shape[key];
                    newShape[key] = fieldSchema.optional();
                }
                return new ZodObject(_objectSpreadProps(_objectSpread({}, this._def), {
                    shape: function() {
                        return newShape;
                    }
                }));
            }
        },
        {
            key: "required",
            value: function required(mask) {
                var _this = this;
                var newShape = {};
                if (mask) util.objectKeys(this.shape).map(function(key) {
                    if (-1 === util.objectKeys(mask).indexOf(key)) newShape[key] = _this.shape[key];
                    else {
                        var newField = _this.shape[key];
                        for(; _instanceof(newField, ZodOptional);)newField = newField._def.innerType;
                        newShape[key] = newField;
                    }
                });
                else for(var key in this.shape){
                    var newField = this.shape[key];
                    for(; _instanceof(newField, ZodOptional);)newField = newField._def.innerType;
                    newShape[key] = newField;
                }
                return new ZodObject(_objectSpreadProps(_objectSpread({}, this._def), {
                    shape: function() {
                        return newShape;
                    }
                }));
            }
        },
        {
            key: "keyof",
            value: function keyof() {
                return createZodEnum(util.objectKeys(this.shape));
            }
        }
    ]);
    return ZodObject;
}(ZodType);
ZodObject.create = function(shape, params) {
    return new ZodObject(_objectSpread({
        shape: function() {
            return shape;
        },
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject
    }, processCreateParams(params)));
}, ZodObject.strictCreate = function(shape, params) {
    return new ZodObject(_objectSpread({
        shape: function() {
            return shape;
        },
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject
    }, processCreateParams(params)));
}, ZodObject.lazycreate = function(shape, params) {
    return new ZodObject(_objectSpread({
        shape: shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject
    }, processCreateParams(params)));
};
var ZodUnion = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodUnion, ZodType);
    var _super = _createSuper(ZodUnion);
    function ZodUnion() {
        _classCallCheck(this, ZodUnion);
        return _super.apply(this, arguments);
    }
    _createClass(ZodUnion, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input), ctx = _this__processInputParams.ctx, options = this._def.options;
                if (ctx.common.async) return Promise.all(options.map(function() {
                    var _ref = _asyncToGenerator(function(option) {
                        var childCtx, _tmp;
                        return __generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    childCtx = _objectSpreadProps(_objectSpread({}, ctx), {
                                        common: _objectSpreadProps(_objectSpread({}, ctx.common), {
                                            issues: []
                                        }),
                                        parent: null
                                    });
                                    _tmp = {};
                                    return [
                                        4,
                                        option._parseAsync({
                                            data: ctx.data,
                                            path: ctx.path,
                                            parent: childCtx
                                        })
                                    ];
                                case 1:
                                    return [
                                        2,
                                        (_tmp.result = _state.sent(), _tmp.ctx = childCtx, _tmp)
                                    ];
                            }
                        });
                    });
                    return function(option) {
                        return _ref.apply(this, arguments);
                    };
                }())).then(function handleResults(results) {
                    var _ctx_common_issues;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var result = _step.value;
                            if ("valid" === result.result.status) return result.result;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = results[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var result1 = _step1.value;
                            if ("dirty" === result1.result.status) return (_ctx_common_issues = ctx.common.issues).push.apply(_ctx_common_issues, _toConsumableArray(result1.ctx.common.issues)), result1.result;
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    var unionErrors = results.map(function(result) {
                        return new ZodError(result.ctx.common.issues);
                    });
                    return addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_union,
                        unionErrors: unionErrors
                    }), INVALID;
                });
                {
                    var _ctx_common_issues;
                    var dirty;
                    var issues = [];
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var option = _step.value;
                            var childCtx = _objectSpreadProps(_objectSpread({}, ctx), {
                                common: _objectSpreadProps(_objectSpread({}, ctx.common), {
                                    issues: []
                                }),
                                parent: null
                            }), result = option._parseSync({
                                data: ctx.data,
                                path: ctx.path,
                                parent: childCtx
                            });
                            if ("valid" === result.status) return result;
                            "dirty" !== result.status || dirty || (dirty = {
                                result: result,
                                ctx: childCtx
                            }), childCtx.common.issues.length && issues.push(childCtx.common.issues);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    if (dirty) return (_ctx_common_issues = ctx.common.issues).push.apply(_ctx_common_issues, _toConsumableArray(dirty.ctx.common.issues)), dirty.result;
                    var unionErrors = issues.map(function(issues2) {
                        return new ZodError(issues2);
                    });
                    return addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_union,
                        unionErrors: unionErrors
                    }), INVALID;
                }
            }
        },
        {
            key: "options",
            get: function get() {
                return this._def.options;
            }
        }
    ]);
    return ZodUnion;
}(ZodType);
ZodUnion.create = function(types, params) {
    return new ZodUnion(_objectSpread({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion
    }, processCreateParams(params)));
};
var getDiscriminator = function(type2) {
    return _instanceof(type2, ZodLazy) ? getDiscriminator(type2.schema) : _instanceof(type2, ZodEffects) ? getDiscriminator(type2.innerType()) : _instanceof(type2, ZodLiteral) ? [
        type2.value
    ] : _instanceof(type2, ZodEnum) ? type2.options : _instanceof(type2, ZodNativeEnum) ? Object.keys(type2.enum) : _instanceof(type2, ZodDefault) ? getDiscriminator(type2._def.innerType) : _instanceof(type2, ZodUndefined) ? [
        void 0
    ] : _instanceof(type2, ZodNull) ? [
        null
    ] : null;
};
var ZodDiscriminatedUnion = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodDiscriminatedUnion, ZodType);
    var _super = _createSuper(ZodDiscriminatedUnion);
    function ZodDiscriminatedUnion() {
        _classCallCheck(this, ZodDiscriminatedUnion);
        return _super.apply(this, arguments);
    }
    _createClass(ZodDiscriminatedUnion, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input), ctx = _this__processInputParams.ctx;
                if (ctx.parsedType !== ZodParsedType.object) return addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.object,
                    received: ctx.parsedType
                }), INVALID;
                var discriminator = this.discriminator, discriminatorValue = ctx.data[discriminator], option = this.optionsMap.get(discriminatorValue);
                return option ? ctx.common.async ? option._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }) : option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }) : (addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_union_discriminator,
                    options: Array.from(this.optionsMap.keys()),
                    path: [
                        discriminator
                    ]
                }), INVALID);
            }
        },
        {
            key: "discriminator",
            get: function get() {
                return this._def.discriminator;
            }
        },
        {
            key: "options",
            get: function get() {
                return this._def.options;
            }
        },
        {
            key: "optionsMap",
            get: function get() {
                return this._def.optionsMap;
            }
        }
    ], [
        {
            key: "create",
            value: function create(discriminator, options, params) {
                var optionsMap = new Map;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var type2 = _step.value;
                        var discriminatorValues = getDiscriminator(type2.shape[discriminator]);
                        if (!discriminatorValues) throw new Error("A discriminator value for key `".concat(discriminator, "` could not be extracted from all schema options"));
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = discriminatorValues[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var value = _step1.value;
                                if (optionsMap.has(value)) throw new Error("Discriminator property ".concat(String(discriminator), " has duplicate value ").concat(String(value)));
                                optionsMap.set(value, type2);
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return new ZodDiscriminatedUnion(_objectSpread({
                    typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
                    discriminator: discriminator,
                    options: options,
                    optionsMap: optionsMap
                }, processCreateParams(params)));
            }
        }
    ]);
    return ZodDiscriminatedUnion;
}(ZodType);
function mergeValues(a, b) {
    var aType = getParsedType(a), bType = getParsedType(b);
    if (a === b) return {
        valid: !0,
        data: a
    };
    if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        var bKeys = util.objectKeys(b), sharedKeys = util.objectKeys(a).filter(function(key) {
            return -1 !== bKeys.indexOf(key);
        }), newObj = _objectSpread({}, a, b);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = sharedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                var sharedValue = mergeValues(a[key], b[key]);
                if (!sharedValue.valid) return {
                    valid: !1
                };
                newObj[key] = sharedValue.data;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return {
            valid: !0,
            data: newObj
        };
    }
    if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) return {
            valid: !1
        };
        var newArray = [];
        for(var index = 0; index < a.length; index++){
            var sharedValue1 = mergeValues(a[index], b[index]);
            if (!sharedValue1.valid) return {
                valid: !1
            };
            newArray.push(sharedValue1.data);
        }
        return {
            valid: !0,
            data: newArray
        };
    }
    return aType === ZodParsedType.date && bType === ZodParsedType.date && +a == +b ? {
        valid: !0,
        data: a
    } : {
        valid: !1
    };
}
var ZodIntersection = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodIntersection, ZodType);
    var _super = _createSuper(ZodIntersection);
    function ZodIntersection() {
        _classCallCheck(this, ZodIntersection);
        return _super.apply(this, arguments);
    }
    _createClass(ZodIntersection, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input), status = _this__processInputParams.status, ctx = _this__processInputParams.ctx, handleParsed = function(parsedLeft, parsedRight) {
                    if (isAborted(parsedLeft) || isAborted(parsedRight)) return INVALID;
                    var merged = mergeValues(parsedLeft.value, parsedRight.value);
                    return merged.valid ? ((isDirty(parsedLeft) || isDirty(parsedRight)) && status.dirty(), {
                        status: status.value,
                        value: merged.data
                    }) : (addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_intersection_types
                    }), INVALID);
                };
                return ctx.common.async ? Promise.all([
                    this._def.left._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx
                    }),
                    this._def.right._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx
                    })
                ]).then(function(param) {
                    var _param = _slicedToArray(param, 2), left = _param[0], right = _param[1];
                    return handleParsed(left, right);
                }) : handleParsed(this._def.left._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }), this._def.right._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }));
            }
        }
    ]);
    return ZodIntersection;
}(ZodType);
ZodIntersection.create = function(left, right, params) {
    return new ZodIntersection(_objectSpread({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection
    }, processCreateParams(params)));
};
var ZodTuple = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodTuple, ZodType);
    var _super = _createSuper(ZodTuple);
    function ZodTuple() {
        _classCallCheck(this, ZodTuple);
        return _super.apply(this, arguments);
    }
    _createClass(ZodTuple, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this = this;
                var _this__processInputParams = this._processInputParams(input), status = _this__processInputParams.status, ctx = _this__processInputParams.ctx;
                if (ctx.parsedType !== ZodParsedType.array) return addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.array,
                    received: ctx.parsedType
                }), INVALID;
                if (ctx.data.length < this._def.items.length) return addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: this._def.items.length,
                    inclusive: !0,
                    exact: !1,
                    type: "array"
                }), INVALID;
                !this._def.rest && ctx.data.length > this._def.items.length && (addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: this._def.items.length,
                    inclusive: !0,
                    exact: !1,
                    type: "array"
                }), status.dirty());
                var items = ctx.data.map(function(item, itemIndex) {
                    var schema = _this._def.items[itemIndex] || _this._def.rest;
                    return schema ? schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex)) : null;
                }).filter(function(x) {
                    return !!x;
                });
                return ctx.common.async ? Promise.all(items).then(function(results) {
                    return ParseStatus.mergeArray(status, results);
                }) : ParseStatus.mergeArray(status, items);
            }
        },
        {
            key: "items",
            get: function get() {
                return this._def.items;
            }
        },
        {
            key: "rest",
            value: function rest(rest) {
                return new ZodTuple(_objectSpreadProps(_objectSpread({}, this._def), {
                    rest: rest
                }));
            }
        }
    ]);
    return ZodTuple;
}(ZodType);
ZodTuple.create = function(schemas, params) {
    if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new ZodTuple(_objectSpread({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null
    }, processCreateParams(params)));
};
var ZodRecord = /*#__PURE__*/ function(ZodType1) {
    "use strict";
    _inherits(ZodRecord, ZodType1);
    var _super = _createSuper(ZodRecord);
    function ZodRecord() {
        _classCallCheck(this, ZodRecord);
        return _super.apply(this, arguments);
    }
    _createClass(ZodRecord, [
        {
            key: "keySchema",
            get: function get() {
                return this._def.keyType;
            }
        },
        {
            key: "valueSchema",
            get: function get() {
                return this._def.valueType;
            }
        },
        {
            key: "_parse",
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input), status = _this__processInputParams.status, ctx = _this__processInputParams.ctx;
                if (ctx.parsedType !== ZodParsedType.object) return addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.object,
                    received: ctx.parsedType
                }), INVALID;
                var pairs = [], keyType = this._def.keyType, valueType = this._def.valueType;
                for(var key in ctx.data)pairs.push({
                    key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                    value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
                });
                return ctx.common.async ? ParseStatus.mergeObjectAsync(status, pairs) : ParseStatus.mergeObjectSync(status, pairs);
            }
        },
        {
            key: "element",
            get: function get() {
                return this._def.valueType;
            }
        }
    ], [
        {
            key: "create",
            value: function create(first, second, third) {
                return new ZodRecord(_instanceof(second, ZodType) ? _objectSpread({
                    keyType: first,
                    valueType: second,
                    typeName: ZodFirstPartyTypeKind.ZodRecord
                }, processCreateParams(third)) : _objectSpread({
                    keyType: ZodString.create(),
                    valueType: first,
                    typeName: ZodFirstPartyTypeKind.ZodRecord
                }, processCreateParams(second)));
            }
        }
    ]);
    return ZodRecord;
}(ZodType);
var ZodMap = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodMap, ZodType);
    var _super = _createSuper(ZodMap);
    function ZodMap() {
        _classCallCheck(this, ZodMap);
        return _super.apply(this, arguments);
    }
    _createClass(ZodMap, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input), status = _this__processInputParams.status, ctx = _this__processInputParams.ctx;
                if (ctx.parsedType !== ZodParsedType.map) return addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.map,
                    received: ctx.parsedType
                }), INVALID;
                var keyType = this._def.keyType, valueType = this._def.valueType, pairs = _toConsumableArray(ctx.data.entries()).map(function(param, index) {
                    var _param = _slicedToArray(param, 2), key = _param[0], value = _param[1];
                    return {
                        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [
                            index,
                            "key"
                        ])),
                        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [
                            index,
                            "value"
                        ]))
                    };
                });
                if (ctx.common.async) {
                    var finalMap = new Map;
                    return Promise.resolve().then(/*#__PURE__*/ _asyncToGenerator(function() {
                        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, pair, key, value, err;
                        return __generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        7,
                                        8,
                                        9
                                    ]);
                                    _iterator = pairs[Symbol.iterator]();
                                    _state.label = 2;
                                case 2:
                                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                        3,
                                        6
                                    ];
                                    pair = _step.value;
                                    return [
                                        4,
                                        pair.key
                                    ];
                                case 3:
                                    key = _state.sent();
                                    return [
                                        4,
                                        pair.value
                                    ];
                                case 4:
                                    value = _state.sent();
                                    if ("aborted" === key.status || "aborted" === value.status) return [
                                        2,
                                        INVALID
                                    ];
                                    "dirty" !== key.status && "dirty" !== value.status || status.dirty(), finalMap.set(key.value, value.value);
                                    _state.label = 5;
                                case 5:
                                    _iteratorNormalCompletion = true;
                                    return [
                                        3,
                                        2
                                    ];
                                case 6:
                                    return [
                                        3,
                                        9
                                    ];
                                case 7:
                                    err = _state.sent();
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                    return [
                                        3,
                                        9
                                    ];
                                case 8:
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                    return [
                                        7
                                    ];
                                case 9:
                                    return [
                                        2,
                                        {
                                            status: status.value,
                                            value: finalMap
                                        }
                                    ];
                            }
                        });
                    }));
                }
                {
                    var finalMap1 = new Map;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var pair = _step.value;
                            var key = pair.key, value = pair.value;
                            if ("aborted" === key.status || "aborted" === value.status) return INVALID;
                            "dirty" !== key.status && "dirty" !== value.status || status.dirty(), finalMap1.set(key.value, value.value);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return {
                        status: status.value,
                        value: finalMap1
                    };
                }
            }
        }
    ]);
    return ZodMap;
}(ZodType);
ZodMap.create = function(keyType, valueType, params) {
    return new ZodMap(_objectSpread({
        valueType: valueType,
        keyType: keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap
    }, processCreateParams(params)));
};
var ZodSet = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodSet, ZodType);
    var _super = _createSuper(ZodSet);
    function ZodSet() {
        _classCallCheck(this, ZodSet);
        return _super.apply(this, arguments);
    }
    _createClass(ZodSet, [
        {
            key: "_parse",
            value: function _parse(input) {
                var finalizeSet = function finalizeSet(elements2) {
                    var parsedSet = new Set;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = elements2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var element = _step.value;
                            if ("aborted" === element.status) return INVALID;
                            "dirty" === element.status && status.dirty(), parsedSet.add(element.value);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return {
                        status: status.value,
                        value: parsedSet
                    };
                };
                var _this__processInputParams = this._processInputParams(input), status = _this__processInputParams.status, ctx = _this__processInputParams.ctx;
                if (ctx.parsedType !== ZodParsedType.set) return addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.set,
                    received: ctx.parsedType
                }), INVALID;
                var def2 = this._def;
                null !== def2.minSize && ctx.data.size < def2.minSize.value && (addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def2.minSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: def2.minSize.message
                }), status.dirty()), null !== def2.maxSize && ctx.data.size > def2.maxSize.value && (addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def2.maxSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: def2.maxSize.message
                }), status.dirty());
                var valueType = this._def.valueType;
                var elements = _toConsumableArray(ctx.data.values()).map(function(item, i) {
                    return valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i));
                });
                return ctx.common.async ? Promise.all(elements).then(function(elements2) {
                    return finalizeSet(elements2);
                }) : finalizeSet(elements);
            }
        },
        {
            key: "min",
            value: function min(minSize, message) {
                return new ZodSet(_objectSpreadProps(_objectSpread({}, this._def), {
                    minSize: {
                        value: minSize,
                        message: errorUtil.toString(message)
                    }
                }));
            }
        },
        {
            key: "max",
            value: function max(maxSize, message) {
                return new ZodSet(_objectSpreadProps(_objectSpread({}, this._def), {
                    maxSize: {
                        value: maxSize,
                        message: errorUtil.toString(message)
                    }
                }));
            }
        },
        {
            key: "size",
            value: function size(size2, message) {
                return this.min(size2, message).max(size2, message);
            }
        },
        {
            key: "nonempty",
            value: function nonempty(message) {
                return this.min(1, message);
            }
        }
    ]);
    return ZodSet;
}(ZodType);
ZodSet.create = function(valueType, params) {
    return new ZodSet(_objectSpread({
        valueType: valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet
    }, processCreateParams(params)));
};
var ZodFunction = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodFunction, ZodType);
    var _super = _createSuper(ZodFunction);
    function ZodFunction() {
        _classCallCheck(this, ZodFunction);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments))), _this.validate = _this.implement;
        return _possibleConstructorReturn(_this);
    }
    _createClass(ZodFunction, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this = this;
                var makeArgsIssue = function makeArgsIssue(args, error) {
                    return makeIssue({
                        data: args,
                        path: ctx.path,
                        errorMaps: [
                            ctx.common.contextualErrorMap,
                            ctx.schemaErrorMap,
                            getErrorMap(),
                            errorMap
                        ].filter(function(x) {
                            return !!x;
                        }),
                        issueData: {
                            code: ZodIssueCode.invalid_arguments,
                            argumentsError: error
                        }
                    });
                };
                var makeReturnsIssue = function makeReturnsIssue(returns, error) {
                    return makeIssue({
                        data: returns,
                        path: ctx.path,
                        errorMaps: [
                            ctx.common.contextualErrorMap,
                            ctx.schemaErrorMap,
                            getErrorMap(),
                            errorMap
                        ].filter(function(x) {
                            return !!x;
                        }),
                        issueData: {
                            code: ZodIssueCode.invalid_return_type,
                            returnTypeError: error
                        }
                    });
                };
                var _this__processInputParams = this._processInputParams(input), ctx = _this__processInputParams.ctx;
                if (ctx.parsedType !== ZodParsedType.function) return addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.function,
                    received: ctx.parsedType
                }), INVALID;
                var params = {
                    errorMap: ctx.common.contextualErrorMap
                }, fn = ctx.data;
                var _this1 = this;
                return _instanceof(this._def.returns, ZodPromise) ? OK(/*#__PURE__*/ _asyncToGenerator(function() {
                    var _len, args, _key, error, parsedArgs, result;
                    var _arguments = arguments;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                for(_len = _arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                    args[_key] = _arguments[_key];
                                }
                                error = new ZodError([]);
                                return [
                                    4,
                                    _this1._def.args.parseAsync(args, params).catch(function(e) {
                                        throw error.addIssue(makeArgsIssue(args, e)), error;
                                    })
                                ];
                            case 1:
                                parsedArgs = _state.sent();
                                return [
                                    4,
                                    fn.apply(void 0, _toConsumableArray(parsedArgs))
                                ];
                            case 2:
                                result = _state.sent();
                                return [
                                    4,
                                    _this1._def.returns._def.type.parseAsync(result, params).catch(function(e) {
                                        throw error.addIssue(makeReturnsIssue(result, e)), error;
                                    })
                                ];
                            case 3:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })) : OK(function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var parsedArgs = _this._def.args.safeParse(args, params);
                    if (!parsedArgs.success) throw new ZodError([
                        makeArgsIssue(args, parsedArgs.error)
                    ]);
                    var result = fn.apply(void 0, _toConsumableArray(parsedArgs.data)), parsedReturns = _this._def.returns.safeParse(result, params);
                    if (!parsedReturns.success) throw new ZodError([
                        makeReturnsIssue(result, parsedReturns.error)
                    ]);
                    return parsedReturns.data;
                });
            }
        },
        {
            key: "parameters",
            value: function parameters() {
                return this._def.args;
            }
        },
        {
            key: "returnType",
            value: function returnType() {
                return this._def.returns;
            }
        },
        {
            key: "args",
            value: function args() {
                for(var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++){
                    items[_key] = arguments[_key];
                }
                return new ZodFunction(_objectSpreadProps(_objectSpread({}, this._def), {
                    args: ZodTuple.create(items).rest(ZodUnknown.create())
                }));
            }
        },
        {
            key: "returns",
            value: function returns(returnType) {
                return new ZodFunction(_objectSpreadProps(_objectSpread({}, this._def), {
                    returns: returnType
                }));
            }
        },
        {
            key: "implement",
            value: function implement(func) {
                return this.parse(func);
            }
        },
        {
            key: "strictImplement",
            value: function strictImplement(func) {
                return this.parse(func);
            }
        }
    ], [
        {
            key: "create",
            value: function create(args, returns, params) {
                return new ZodFunction(_objectSpread({
                    args: args || ZodTuple.create([]).rest(ZodUnknown.create()),
                    returns: returns || ZodUnknown.create(),
                    typeName: ZodFirstPartyTypeKind.ZodFunction
                }, processCreateParams(params)));
            }
        }
    ]);
    return ZodFunction;
}(ZodType);
var ZodLazy = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodLazy, ZodType);
    var _super = _createSuper(ZodLazy);
    function ZodLazy() {
        _classCallCheck(this, ZodLazy);
        return _super.apply(this, arguments);
    }
    _createClass(ZodLazy, [
        {
            key: "schema",
            get: function get() {
                return this._def.getter();
            }
        },
        {
            key: "_parse",
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input), ctx = _this__processInputParams.ctx;
                return this._def.getter()._parse({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
            }
        }
    ]);
    return ZodLazy;
}(ZodType);
ZodLazy.create = function(getter, params) {
    return new ZodLazy(_objectSpread({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy
    }, processCreateParams(params)));
};
var ZodLiteral = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodLiteral, ZodType);
    var _super = _createSuper(ZodLiteral);
    function ZodLiteral() {
        _classCallCheck(this, ZodLiteral);
        return _super.apply(this, arguments);
    }
    _createClass(ZodLiteral, [
        {
            key: "_parse",
            value: function _parse(input) {
                if (input.data !== this._def.value) {
                    return addIssueToContext(this._getOrReturnCtx(input), {
                        code: ZodIssueCode.invalid_literal,
                        expected: this._def.value
                    }), INVALID;
                }
                return {
                    status: "valid",
                    value: input.data
                };
            }
        },
        {
            key: "value",
            get: function get() {
                return this._def.value;
            }
        }
    ]);
    return ZodLiteral;
}(ZodType);
function createZodEnum(values, params) {
    return new ZodEnum(_objectSpread({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodEnum
    }, processCreateParams(params)));
}
ZodLiteral.create = function(value, params) {
    return new ZodLiteral(_objectSpread({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral
    }, processCreateParams(params)));
};
var ZodEnum = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodEnum, ZodType);
    var _super = _createSuper(ZodEnum);
    function ZodEnum() {
        _classCallCheck(this, ZodEnum);
        return _super.apply(this, arguments);
    }
    _createClass(ZodEnum, [
        {
            key: "_parse",
            value: function _parse(input) {
                if ("string" != typeof input.data) {
                    var ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
                    return addIssueToContext(ctx, {
                        expected: util.joinValues(expectedValues),
                        received: ctx.parsedType,
                        code: ZodIssueCode.invalid_type
                    }), INVALID;
                }
                if (-1 === this._def.values.indexOf(input.data)) {
                    var ctx1 = this._getOrReturnCtx(input), expectedValues1 = this._def.values;
                    return addIssueToContext(ctx1, {
                        received: ctx1.data,
                        code: ZodIssueCode.invalid_enum_value,
                        options: expectedValues1
                    }), INVALID;
                }
                return OK(input.data);
            }
        },
        {
            key: "options",
            get: function get() {
                return this._def.values;
            }
        },
        {
            key: "enum",
            get: function get() {
                var enumValues = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var val = _step.value;
                        enumValues[val] = val;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return enumValues;
            }
        },
        {
            key: "Values",
            get: function get() {
                var enumValues = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var val = _step.value;
                        enumValues[val] = val;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return enumValues;
            }
        },
        {
            key: "Enum",
            get: function get() {
                var enumValues = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._def.values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var val = _step.value;
                        enumValues[val] = val;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return enumValues;
            }
        }
    ]);
    return ZodEnum;
}(ZodType);
ZodEnum.create = createZodEnum;
var ZodNativeEnum = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodNativeEnum, ZodType);
    var _super = _createSuper(ZodNativeEnum);
    function ZodNativeEnum() {
        _classCallCheck(this, ZodNativeEnum);
        return _super.apply(this, arguments);
    }
    _createClass(ZodNativeEnum, [
        {
            key: "_parse",
            value: function _parse(input) {
                var nativeEnumValues = util.getValidEnumValues(this._def.values), ctx = this._getOrReturnCtx(input);
                if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
                    var expectedValues = util.objectValues(nativeEnumValues);
                    return addIssueToContext(ctx, {
                        expected: util.joinValues(expectedValues),
                        received: ctx.parsedType,
                        code: ZodIssueCode.invalid_type
                    }), INVALID;
                }
                if (-1 === nativeEnumValues.indexOf(input.data)) {
                    var expectedValues1 = util.objectValues(nativeEnumValues);
                    return addIssueToContext(ctx, {
                        received: ctx.data,
                        code: ZodIssueCode.invalid_enum_value,
                        options: expectedValues1
                    }), INVALID;
                }
                return OK(input.data);
            }
        },
        {
            key: "enum",
            get: function get() {
                return this._def.values;
            }
        }
    ]);
    return ZodNativeEnum;
}(ZodType);
ZodNativeEnum.create = function(values, params) {
    return new ZodNativeEnum(_objectSpread({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum
    }, processCreateParams(params)));
};
var ZodPromise = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodPromise, ZodType);
    var _super = _createSuper(ZodPromise);
    function ZodPromise() {
        _classCallCheck(this, ZodPromise);
        return _super.apply(this, arguments);
    }
    _createClass(ZodPromise, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this = this;
                var _this__processInputParams = this._processInputParams(input), ctx = _this__processInputParams.ctx;
                if (ctx.parsedType !== ZodParsedType.promise && !1 === ctx.common.async) return addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.promise,
                    received: ctx.parsedType
                }), INVALID;
                var promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
                return OK(promisified.then(function(data2) {
                    return _this._def.type.parseAsync(data2, {
                        path: ctx.path,
                        errorMap: ctx.common.contextualErrorMap
                    });
                }));
            }
        }
    ]);
    return ZodPromise;
}(ZodType);
ZodPromise.create = function(schema, params) {
    return new ZodPromise(_objectSpread({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise
    }, processCreateParams(params)));
};
var ZodEffects = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodEffects, ZodType);
    var _super = _createSuper(ZodEffects);
    function ZodEffects() {
        _classCallCheck(this, ZodEffects);
        return _super.apply(this, arguments);
    }
    _createClass(ZodEffects, [
        {
            key: "innerType",
            value: function innerType() {
                return this._def.schema;
            }
        },
        {
            key: "sourceType",
            value: function sourceType() {
                return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
            }
        },
        {
            key: "_parse",
            value: function _parse(input) {
                var _this = this;
                var _this__processInputParams = this._processInputParams(input), status = _this__processInputParams.status, ctx = _this__processInputParams.ctx, effect = this._def.effect || null;
                if ("preprocess" === effect.type) {
                    var processed = effect.transform(ctx.data);
                    return ctx.common.async ? Promise.resolve(processed).then(function(processed2) {
                        return _this._def.schema._parseAsync({
                            data: processed2,
                            path: ctx.path,
                            parent: ctx
                        });
                    }) : this._def.schema._parseSync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx
                    });
                }
                var checkCtx = {
                    addIssue: function(arg) {
                        addIssueToContext(ctx, arg), arg.fatal ? status.abort() : status.dirty();
                    },
                    get path () {
                        return ctx.path;
                    }
                };
                if (checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx), "refinement" === effect.type) {
                    var executeRefinement = function(acc) {
                        var result = effect.refinement(acc, checkCtx);
                        if (ctx.common.async) return Promise.resolve(result);
                        if (_instanceof(result, Promise)) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                        return acc;
                    };
                    if (!1 === ctx.common.async) {
                        var inner = this._def.schema._parseSync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx
                        });
                        return "aborted" === inner.status ? INVALID : ("dirty" === inner.status && status.dirty(), executeRefinement(inner.value), {
                            status: status.value,
                            value: inner.value
                        });
                    }
                    return this._def.schema._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx
                    }).then(function(inner) {
                        return "aborted" === inner.status ? INVALID : ("dirty" === inner.status && status.dirty(), executeRefinement(inner.value).then(function() {
                            return {
                                status: status.value,
                                value: inner.value
                            };
                        }));
                    });
                }
                if ("transform" === effect.type) {
                    if (!1 === ctx.common.async) {
                        var base = this._def.schema._parseSync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx
                        });
                        if (!isValid(base)) return base;
                        var result = effect.transform(base.value, checkCtx);
                        if (_instanceof(result, Promise)) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                        return {
                            status: status.value,
                            value: result
                        };
                    }
                    return this._def.schema._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx
                    }).then(function(base) {
                        return isValid(base) ? Promise.resolve(effect.transform(base.value, checkCtx)).then(function(result) {
                            return {
                                status: status.value,
                                value: result
                            };
                        }) : base;
                    });
                }
                util.assertNever(effect);
            }
        }
    ]);
    return ZodEffects;
}(ZodType);
ZodEffects.create = function(schema, effect, params) {
    return new ZodEffects(_objectSpread({
        schema: schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: effect
    }, processCreateParams(params)));
}, ZodEffects.createWithPreprocess = function(preprocess, schema, params) {
    return new ZodEffects(_objectSpread({
        schema: schema,
        effect: {
            type: "preprocess",
            transform: preprocess
        },
        typeName: ZodFirstPartyTypeKind.ZodEffects
    }, processCreateParams(params)));
};
var ZodOptional = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodOptional, ZodType);
    var _super = _createSuper(ZodOptional);
    function ZodOptional() {
        _classCallCheck(this, ZodOptional);
        return _super.apply(this, arguments);
    }
    _createClass(ZodOptional, [
        {
            key: "_parse",
            value: function _parse(input) {
                return this._getType(input) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(input);
            }
        },
        {
            key: "unwrap",
            value: function unwrap() {
                return this._def.innerType;
            }
        }
    ]);
    return ZodOptional;
}(ZodType);
ZodOptional.create = function(type2, params) {
    return new ZodOptional(_objectSpread({
        innerType: type2,
        typeName: ZodFirstPartyTypeKind.ZodOptional
    }, processCreateParams(params)));
};
var ZodNullable = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodNullable, ZodType);
    var _super = _createSuper(ZodNullable);
    function ZodNullable() {
        _classCallCheck(this, ZodNullable);
        return _super.apply(this, arguments);
    }
    _createClass(ZodNullable, [
        {
            key: "_parse",
            value: function _parse(input) {
                return this._getType(input) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(input);
            }
        },
        {
            key: "unwrap",
            value: function unwrap() {
                return this._def.innerType;
            }
        }
    ]);
    return ZodNullable;
}(ZodType);
ZodNullable.create = function(type2, params) {
    return new ZodNullable(_objectSpread({
        innerType: type2,
        typeName: ZodFirstPartyTypeKind.ZodNullable
    }, processCreateParams(params)));
};
var ZodDefault = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodDefault, ZodType);
    var _super = _createSuper(ZodDefault);
    function ZodDefault() {
        _classCallCheck(this, ZodDefault);
        return _super.apply(this, arguments);
    }
    _createClass(ZodDefault, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input), ctx = _this__processInputParams.ctx;
                var data2 = ctx.data;
                return ctx.parsedType === ZodParsedType.undefined && (data2 = this._def.defaultValue()), this._def.innerType._parse({
                    data: data2,
                    path: ctx.path,
                    parent: ctx
                });
            }
        },
        {
            key: "removeDefault",
            value: function removeDefault() {
                return this._def.innerType;
            }
        }
    ]);
    return ZodDefault;
}(ZodType);
ZodDefault.create = function(type2, params) {
    return new ZodDefault(_objectSpread({
        innerType: type2,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: "function" == typeof params.default ? params.default : function() {
            return params.default;
        }
    }, processCreateParams(params)));
};
var ZodCatch = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodCatch, ZodType);
    var _super = _createSuper(ZodCatch);
    function ZodCatch() {
        _classCallCheck(this, ZodCatch);
        return _super.apply(this, arguments);
    }
    _createClass(ZodCatch, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this = this;
                var _this__processInputParams = this._processInputParams(input), ctx = _this__processInputParams.ctx, result = this._def.innerType._parse({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                return isAsync(result) ? result.then(function(result2) {
                    return {
                        status: "valid",
                        value: "valid" === result2.status ? result2.value : _this._def.defaultValue()
                    };
                }) : {
                    status: "valid",
                    value: "valid" === result.status ? result.value : this._def.defaultValue()
                };
            }
        },
        {
            key: "removeDefault",
            value: function removeDefault() {
                return this._def.innerType;
            }
        }
    ]);
    return ZodCatch;
}(ZodType);
ZodCatch.create = function(type2, params) {
    return new ZodCatch(_objectSpread({
        innerType: type2,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        defaultValue: "function" == typeof params.default ? params.default : function() {
            return params.default;
        }
    }, processCreateParams(params)));
};
var ZodNaN = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodNaN, ZodType);
    var _super = _createSuper(ZodNaN);
    function ZodNaN() {
        _classCallCheck(this, ZodNaN);
        return _super.apply(this, arguments);
    }
    _createClass(ZodNaN, [
        {
            key: "_parse",
            value: function _parse(input) {
                if (this._getType(input) !== ZodParsedType.nan) {
                    var ctx = this._getOrReturnCtx(input);
                    return addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: ZodParsedType.nan,
                        received: ctx.parsedType
                    }), INVALID;
                }
                return {
                    status: "valid",
                    value: input.data
                };
            }
        }
    ]);
    return ZodNaN;
}(ZodType);
ZodNaN.create = function(params) {
    return new ZodNaN(_objectSpread({
        typeName: ZodFirstPartyTypeKind.ZodNaN
    }, processCreateParams(params)));
};
var BRAND = Symbol("zod_brand");
var ZodBranded = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodBranded, ZodType);
    var _super = _createSuper(ZodBranded);
    function ZodBranded() {
        _classCallCheck(this, ZodBranded);
        return _super.apply(this, arguments);
    }
    _createClass(ZodBranded, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input), ctx = _this__processInputParams.ctx, data2 = ctx.data;
                return this._def.type._parse({
                    data: data2,
                    path: ctx.path,
                    parent: ctx
                });
            }
        },
        {
            key: "unwrap",
            value: function unwrap() {
                return this._def.type;
            }
        }
    ]);
    return ZodBranded;
}(ZodType);
var ZodPipeline = /*#__PURE__*/ function(ZodType) {
    "use strict";
    _inherits(ZodPipeline, ZodType);
    var _super = _createSuper(ZodPipeline);
    function ZodPipeline() {
        _classCallCheck(this, ZodPipeline);
        return _super.apply(this, arguments);
    }
    _createClass(ZodPipeline, [
        {
            key: "_parse",
            value: function _parse(input) {
                var _this__processInputParams = this._processInputParams(input), status = _this__processInputParams.status, ctx = _this__processInputParams.ctx;
                if (ctx.common.async) {
                    var _this = this;
                    return _asyncToGenerator(function() {
                        var inResult;
                        return __generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this._def.in._parseAsync({
                                            data: ctx.data,
                                            path: ctx.path,
                                            parent: ctx
                                        })
                                    ];
                                case 1:
                                    inResult = _state.sent();
                                    return [
                                        2,
                                        "aborted" === inResult.status ? INVALID : "dirty" === inResult.status ? (status.dirty(), DIRTY(inResult.value)) : _this._def.out._parseAsync({
                                            data: inResult.value,
                                            path: ctx.path,
                                            parent: ctx
                                        })
                                    ];
                            }
                        });
                    })();
                }
                {
                    var inResult = this._def.in._parseSync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx
                    });
                    return "aborted" === inResult.status ? INVALID : "dirty" === inResult.status ? (status.dirty(), {
                        status: "dirty",
                        value: inResult.value
                    }) : this._def.out._parseSync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx
                    });
                }
            }
        }
    ], [
        {
            key: "create",
            value: function create(a, b) {
                return new ZodPipeline({
                    in: a,
                    out: b,
                    typeName: ZodFirstPartyTypeKind.ZodPipeline
                });
            }
        }
    ]);
    return ZodPipeline;
}(ZodType);
var custom = function(check) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fatal = arguments.length > 2 ? arguments[2] : void 0;
    return check ? ZodAny.create().superRefine(function(data2, ctx) {
        if (!check(data2)) {
            var p2 = "function" == typeof params ? params(data2) : params, p22 = "string" == typeof p2 ? {
                message: p2
            } : p2;
            ctx.addIssue(_objectSpreadProps(_objectSpread({
                code: "custom"
            }, p22), {
                fatal: fatal
            }));
        }
    }) : ZodAny.create();
}, late = {
    object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind, ZodFirstPartyTypeKind2;
(ZodFirstPartyTypeKind2 = ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {})).ZodString = "ZodString", ZodFirstPartyTypeKind2.ZodNumber = "ZodNumber", ZodFirstPartyTypeKind2.ZodNaN = "ZodNaN", ZodFirstPartyTypeKind2.ZodBigInt = "ZodBigInt", ZodFirstPartyTypeKind2.ZodBoolean = "ZodBoolean", ZodFirstPartyTypeKind2.ZodDate = "ZodDate", ZodFirstPartyTypeKind2.ZodSymbol = "ZodSymbol", ZodFirstPartyTypeKind2.ZodUndefined = "ZodUndefined", ZodFirstPartyTypeKind2.ZodNull = "ZodNull", ZodFirstPartyTypeKind2.ZodAny = "ZodAny", ZodFirstPartyTypeKind2.ZodUnknown = "ZodUnknown", ZodFirstPartyTypeKind2.ZodNever = "ZodNever", ZodFirstPartyTypeKind2.ZodVoid = "ZodVoid", ZodFirstPartyTypeKind2.ZodArray = "ZodArray", ZodFirstPartyTypeKind2.ZodObject = "ZodObject", ZodFirstPartyTypeKind2.ZodUnion = "ZodUnion", ZodFirstPartyTypeKind2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", ZodFirstPartyTypeKind2.ZodIntersection = "ZodIntersection", ZodFirstPartyTypeKind2.ZodTuple = "ZodTuple", ZodFirstPartyTypeKind2.ZodRecord = "ZodRecord", ZodFirstPartyTypeKind2.ZodMap = "ZodMap", ZodFirstPartyTypeKind2.ZodSet = "ZodSet", ZodFirstPartyTypeKind2.ZodFunction = "ZodFunction", ZodFirstPartyTypeKind2.ZodLazy = "ZodLazy", ZodFirstPartyTypeKind2.ZodLiteral = "ZodLiteral", ZodFirstPartyTypeKind2.ZodEnum = "ZodEnum", ZodFirstPartyTypeKind2.ZodEffects = "ZodEffects", ZodFirstPartyTypeKind2.ZodNativeEnum = "ZodNativeEnum", ZodFirstPartyTypeKind2.ZodOptional = "ZodOptional", ZodFirstPartyTypeKind2.ZodNullable = "ZodNullable", ZodFirstPartyTypeKind2.ZodDefault = "ZodDefault", ZodFirstPartyTypeKind2.ZodCatch = "ZodCatch", ZodFirstPartyTypeKind2.ZodPromise = "ZodPromise", ZodFirstPartyTypeKind2.ZodBranded = "ZodBranded", ZodFirstPartyTypeKind2.ZodPipeline = "ZodPipeline";
var stringType = ZodString.create, numberType = ZodNumber.create, nanType = ZodNaN.create, bigIntType = ZodBigInt.create, booleanType = ZodBoolean.create, dateType = ZodDate.create, symbolType = ZodSymbol.create, undefinedType = ZodUndefined.create, nullType = ZodNull.create, anyType = ZodAny.create, unknownType = ZodUnknown.create, neverType = ZodNever.create, voidType = ZodVoid.create, arrayType = ZodArray.create, objectType = ZodObject.create, strictObjectType = ZodObject.strictCreate, unionType = ZodUnion.create, discriminatedUnionType = ZodDiscriminatedUnion.create, intersectionType = ZodIntersection.create, tupleType = ZodTuple.create, recordType = ZodRecord.create, mapType = ZodMap.create, setType = ZodSet.create, functionType = ZodFunction.create, lazyType = ZodLazy.create, literalType = ZodLiteral.create, enumType = ZodEnum.create, nativeEnumType = ZodNativeEnum.create, promiseType = ZodPromise.create, effectsType = ZodEffects.create, optionalType = ZodOptional.create, nullableType = ZodNullable.create, preprocessType = ZodEffects.createWithPreprocess, pipelineType = ZodPipeline.create, coerce = {
    string: function(arg) {
        return ZodString.create(_objectSpreadProps(_objectSpread({}, arg), {
            coerce: !0
        }));
    },
    number: function(arg) {
        return ZodNumber.create(_objectSpreadProps(_objectSpread({}, arg), {
            coerce: !0
        }));
    },
    boolean: function(arg) {
        return ZodBoolean.create(_objectSpreadProps(_objectSpread({}, arg), {
            coerce: !0
        }));
    },
    bigint: function(arg) {
        return ZodBigInt.create(_objectSpreadProps(_objectSpread({}, arg), {
            coerce: !0
        }));
    },
    date: function(arg) {
        return ZodDate.create(_objectSpreadProps(_objectSpread({}, arg), {
            coerce: !0
        }));
    }
}, NEVER = INVALID;
var Strings, Strings2, mod = Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap: function setErrorMap(map) {
        overrideErrorMap = map;
    },
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: [],
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () {
        return util;
    },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    get objectUtil () {
        return objectUtil;
    },
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () {
        return ZodFirstPartyTypeKind;
    },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    enum: enumType,
    function: functionType,
    instanceof: function(cls) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            message: "Input not instance of ".concat(cls.name)
        };
        return custom(function(data2) {
            return _instanceof(data2, cls);
        }, params, !0);
    },
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    null: nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: function() {
        return booleanType().optional();
    },
    onumber: function() {
        return numberType().optional();
    },
    optional: optionalType,
    ostring: function() {
        return stringType().optional();
    },
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    undefined: undefinedType,
    union: unionType,
    unknown: unknownType,
    void: voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: function(obj) {
        return JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, "$1:");
    },
    ZodError: ZodError
});
var Purchase = /*#__PURE__*/ function() {
    "use strict";
    function Purchase(name, cost, callback) {
        _classCallCheck(this, Purchase);
        __publicField(this, "_name"), __publicField(this, "_cost"), __publicField(this, "_callback"), this._name = name, this._cost = Math.floor(cost), this._callback = callback;
    }
    _createClass(Purchase, [
        {
            key: "name",
            get: function get() {
                return this._name;
            }
        },
        {
            key: "cost",
            get: function get() {
                return this._cost;
            }
        },
        {
            key: "callback",
            get: function get() {
                return this._callback;
            }
        }
    ]);
    return Purchase;
}();
var CostManager = /*#__PURE__*/ function() {
    "use strict";
    function CostManager(initialCost, calculator, options) {
        _classCallCheck(this, CostManager);
        var _ref, _ref1;
        __publicField(this, "initialCost"), __publicField(this, "initialAmount"), __publicField(this, "calculator"), __publicField(this, "incrementer"), __publicField(this, "lastComputedAmount", null), __publicField(this, "lastComputedCost", 0), this.initialCost = initialCost, this.initialAmount = (_ref = null == options ? void 0 : options.initialAmount) !== null && _ref !== void 0 ? _ref : 0, this.calculator = calculator, this.incrementer = (_ref1 = null == options ? void 0 : options.incrementer) !== null && _ref1 !== void 0 ? _ref1 : function(prevAmount) {
            return prevAmount + 1;
        };
    }
    _createClass(CostManager, [
        {
            key: "getNextCostAt",
            value: function getNextCostAt(amount) {
                if (!1 === Number.isSafeInteger(amount)) throw new Error("Amount must be a safe integer");
                return amount !== this.lastComputedAmount && (this.lastComputedCost = this.calculateCost(amount), this.lastComputedAmount = amount), this.lastComputedCost;
            }
        },
        {
            key: "calculateCost",
            value: function calculateCost(amount) {
                if (!1 === Number.isSafeInteger(amount)) throw new Error("Amount must be a safe integer");
                var startAmount, cost;
                null === this.lastComputedAmount || amount < this.lastComputedAmount ? (cost = this.initialCost, startAmount = this.initialAmount) : (cost = this.lastComputedCost, startAmount = this.lastComputedAmount);
                for(var i = this.incrementer(startAmount); i <= amount; i = this.incrementer(i))cost = this.calculator(i, cost);
                return cost;
            }
        }
    ]);
    return CostManager;
}();
function formatUnit(num, unit, short) {
    var prefixIndex = 0 === num ? 0 : Math.floor(Math.log2(num) / 10), significant = num / Math.pow(2, 10 * prefixIndex), floored = Math.floor(1e3 * significant) / 1e3;
    return "".concat(new Intl.NumberFormat(navigator.language, {
        minimumFractionDigits: short ? 0 : 3,
        maximumFractionDigits: short ? 0 : 3
    }).format(floored), " ").concat([
        "",
        "ki",
        "Mi",
        "Gi",
        "Ti",
        "Pi",
        "Ei",
        "Zi",
        "Yi"
    ][prefixIndex]).concat(unit);
}
function formatBits(num) {
    var short = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (num < 8192) {
        return "".concat(new Intl.NumberFormat(navigator.language).format(num), " b");
    }
    return formatUnit(num / 8, "B", short);
}
function formatTime(seconds) {
    var secondsMod = Math.floor(seconds % 60), minutes = Math.floor(seconds / 60) % 60, hours = Math.floor(seconds / 3600), parts = [];
    return hours > 0 && parts.push(hours + "h"), minutes > 0 && parts.push(minutes + "m"), secondsMod > 0 && parts.push(secondsMod + "s"), parts.join(", ");
}
(Strings2 = Strings || (Strings = {})).padStart = function padStart(str, targetLength) {
    var padString = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : " ";
    if (str.length >= targetLength) return str;
    var padding = "";
    for(var i = 0; i < targetLength - str.length; i++)padding += padString;
    return padding + str;
}, Strings2.insertEvery = function insertEvery(str, insert, interval) {
    var result = "";
    for(var i = 0; i < str.length; i++)i % interval == 0 && 0 !== i && (result += insert), result += str[i];
    return result;
};
var _Chip = /*#__PURE__*/ function() {
    "use strict";
    function _Chip1() {
        _classCallCheck(this, _Chip1);
        __publicField(this, "_clockSpeed", _Chip.DEFAULTS.clockSpeed), __publicField(this, "_overclock", _Chip.DEFAULTS.overclock), __publicField(this, "lastOverclockTime", _Chip.DEFAULTS.lastOverclockTime), __publicField(this, "targetDisk", _Chip.DEFAULTS.targetDisk), __publicField(this, "clockSpeedCostManager", new CostManager(110, function(amount, prevCost) {
            return Math.pow(prevCost, 1.09);
        }, {
            initialAmount: 1,
            incrementer: function(prevAmount) {
                return 2 * prevAmount;
            }
        })), __publicField(this, "overclockCostManager", new CostManager(8388608, function(amount, prevCost) {
            return Math.pow(prevCost, 1.5);
        })), __publicField(this, "lastUpdate", -1);
    }
    _createClass(_Chip1, [
        {
            key: "clockSpeed",
            get: function get() {
                return this._clockSpeed;
            },
            set: function set(clockSpeed) {
                this._clockSpeed = clockSpeed;
            }
        },
        {
            key: "overclock",
            get: function get() {
                return this._overclock;
            },
            set: function set(overclock) {
                this._overclock = overclock;
            }
        },
        {
            key: "targetDiskID",
            get: function get() {
                var _a3;
                var _ref;
                return (_ref = null == (_a3 = this.targetDisk) ? void 0 : _a3.id) !== null && _ref !== void 0 ? _ref : null;
            }
        },
        {
            key: "name",
            get: function get() {
                return "".concat(function formatHertz(num) {
                    var short = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                    return formatUnit(num, "Hz", short);
                }(this.clockSpeed, !0), " Chip");
            }
        },
        {
            key: "clockSpeedPurchase",
            get: function get() {
                var _this = this;
                return new Purchase("x2 Clock Speed", this.clockSpeedCostManager.getNextCostAt(this.clockSpeed), function() {
                    return _this.clockSpeed *= 2;
                });
            }
        },
        {
            key: "overclockPurchase",
            get: function get() {
                var _this = this;
                return new Purchase("Overclocking", this.overclockCostManager.getNextCostAt(this.overclock), function() {
                    return _this.overclock++;
                });
            }
        },
        {
            key: "schema",
            get: function get() {
                return _Chip.CODEC.parse(this);
            }
        },
        {
            key: "activeClockSpeed",
            get: function get() {
                var overclockMultiplier = this.isOverclocking ? Math.pow(32, this.overclock) : 1;
                return this.clockSpeed * overclockMultiplier;
            }
        },
        {
            key: "bitsPerSecond",
            get: function get() {
                return null === this.targetDisk || this.targetDisk.isFull ? 0 : this.activeClockSpeed;
            }
        },
        {
            key: "isOverclocking",
            get: function get() {
                return this.overclock > 0 && Date.now() - this.lastOverclockTime <= _Chip.OVERCLOCK_LENGTH_MILLIS;
            }
        },
        {
            key: "overclockProgress",
            get: function get() {
                return Math.min(1, (Date.now() - this.lastOverclockTime) / _Chip.OVERCLOCK_LENGTH_MILLIS);
            }
        },
        {
            key: "overclockCooldownProgress",
            get: function get() {
                return Math.min(1, (Date.now() - this.lastOverclockTime) / _Chip.OVERCLOCK_COOLDOWN_MILLIS);
            }
        },
        {
            key: "cycle",
            value: function cycle() {
                if (null === this.targetDisk) return;
                -1 === this.lastUpdate && (this.lastUpdate = Date.now());
                var millisPerCycle = 1e3 / this.activeClockSpeed, deltaMillis = Date.now() - this.lastUpdate;
                this.targetDisk.increment(deltaMillis / millisPerCycle), this.lastUpdate = Date.now();
            }
        },
        {
            key: "activateOverclock",
            value: function activateOverclock() {
                Date.now() - this.lastOverclockTime < _Chip.OVERCLOCK_COOLDOWN_MILLIS || (this.lastOverclockTime = Date.now());
            }
        }
    ], [
        {
            key: "fromSchema",
            value: function fromSchema(schema, disks) {
                var chip = new _Chip;
                var _disks_find;
                return chip.clockSpeed = schema.clockSpeed, chip.overclock = schema.overclock, chip.lastOverclockTime = schema.lastOverclockTime, chip.targetDisk = (_disks_find = disks.find(function(disk) {
                    return disk.id === schema.targetDiskID;
                })) !== null && _disks_find !== void 0 ? _disks_find : null, chip;
            }
        }
    ]);
    return _Chip1;
}();
var Chip = _Chip;
var _ref;
__publicField(Chip, "OVERCLOCK_LENGTH_MILLIS", 5e3), __publicField(Chip, "OVERCLOCK_COOLDOWN_MILLIS", 15e3), __publicField(Chip, "DEFAULTS", {
    clockSpeed: 1,
    overclock: 0,
    lastOverclockTime: -1,
    targetDisk: null
}), __publicField(Chip, "CODEC", mod.object({
    clockSpeed: mod.number().default(_Chip.DEFAULTS.clockSpeed),
    overclock: mod.number().default(_Chip.DEFAULTS.overclock),
    lastOverclockTime: mod.number().default(_Chip.DEFAULTS.lastOverclockTime),
    targetDiskID: mod.nullable(mod.number()).default((_ref = null == (_a2 = _Chip.DEFAULTS) ? void 0 : _a2.targetDisk) !== null && _ref !== void 0 ? _ref : null)
}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var __assign = function __assign1() {
    return __assign = Object.assign || function __assign2(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++)for(var p2 in s = arguments[i])Object.prototype.hasOwnProperty.call(s, p2) && (t[p2] = s[p2]);
        return t;
    }, __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
    if (pack || 2 === arguments.length) for(var ar, i = 0, l = from.length; i < l; i++)!ar && i in from || (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
    return to.concat(ar || Array.prototype.slice.call(from));
}
var _global = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global, keys = Object.keys, isArray = Array.isArray;
function extend(obj, extension) {
    return "object" != typeof extension || keys(extension).forEach(function(key) {
        obj[key] = extension[key];
    }), obj;
}
"undefined" == typeof Promise || _global.Promise || (_global.Promise = Promise);
var getProto = Object.getPrototypeOf, _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
    return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
    "function" == typeof extension && (extension = extension(getProto(proto))), ("undefined" == typeof Reflect ? keys : Reflect.ownKeys)(extension).forEach(function(key) {
        setProp(proto, key, extension[key]);
    });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
    defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && "function" == typeof functionOrGetSet.get ? {
        get: functionOrGetSet.get,
        set: functionOrGetSet.set,
        configurable: !0
    } : {
        value: functionOrGetSet,
        configurable: !0,
        writable: !0
    }, options));
}
function derive(Child) {
    return {
        from: function from(Parent) {
            return Child.prototype = Object.create(Parent.prototype), setProp(Child.prototype, "constructor", Child), {
                extend: props.bind(null, Child.prototype)
            };
        }
    };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
    var proto;
    return getOwnPropertyDescriptor(obj, prop) || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
    return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
    return overridedFactory(origFunc);
}
function assert(b) {
    if (!b) throw new Error("Assertion Failed");
}
function asap$1(fn) {
    _global.setImmediate ? setImmediate(fn) : setTimeout(fn, 0);
}
function arrayToObject(array, extractor) {
    return array.reduce(function(result, item, i) {
        var nameAndValue = extractor(item, i);
        return nameAndValue && (result[nameAndValue[0]] = nameAndValue[1]), result;
    }, {});
}
function getByKeyPath(obj, keyPath) {
    if (hasOwn(obj, keyPath)) return obj[keyPath];
    if (!keyPath) return obj;
    if ("string" != typeof keyPath) {
        for(var rv = [], i = 0, l = keyPath.length; i < l; ++i){
            var val = getByKeyPath(obj, keyPath[i]);
            rv.push(val);
        }
        return rv;
    }
    var period = keyPath.indexOf(".");
    if (-1 !== period) {
        var innerObj = obj[keyPath.substr(0, period)];
        return void 0 === innerObj ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
    }
}
function setByKeyPath(obj, keyPath, value) {
    if (obj && void 0 !== keyPath && (!("isFrozen" in Object) || !Object.isFrozen(obj))) if ("string" != typeof keyPath && "length" in keyPath) {
        assert("string" != typeof value && "length" in value);
        for(var i = 0, l = keyPath.length; i < l; ++i)setByKeyPath(obj, keyPath[i], value[i]);
    } else {
        var period = keyPath.indexOf(".");
        if (-1 !== period) {
            var currentKeyPath = keyPath.substr(0, period), remainingKeyPath = keyPath.substr(period + 1);
            if ("" === remainingKeyPath) void 0 === value ? isArray(obj) && !isNaN(parseInt(currentKeyPath)) ? obj.splice(currentKeyPath, 1) : delete obj[currentKeyPath] : obj[currentKeyPath] = value;
            else {
                var innerObj = obj[currentKeyPath];
                innerObj && hasOwn(obj, currentKeyPath) || (innerObj = obj[currentKeyPath] = {}), setByKeyPath(innerObj, remainingKeyPath, value);
            }
        } else void 0 === value ? isArray(obj) && !isNaN(parseInt(keyPath)) ? obj.splice(keyPath, 1) : delete obj[keyPath] : obj[keyPath] = value;
    }
}
function shallowClone(obj) {
    var rv = {};
    for(var m in obj)hasOwn(obj, m) && (rv[m] = obj[m]);
    return rv;
}
var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([
    8,
    16,
    32,
    64
].map(function(num) {
    return [
        "Int",
        "Uint",
        "Float"
    ].map(function(t) {
        return t + num + "Array";
    });
}))).filter(function(t) {
    return _global[t];
}), intrinsicTypes = intrinsicTypeNames.map(function(t) {
    return _global[t];
});
arrayToObject(intrinsicTypeNames, function(x) {
    return [
        x,
        !0
    ];
});
var circularRefs = null;
function deepClone(any) {
    circularRefs = "undefined" != typeof WeakMap && new WeakMap;
    var rv = innerDeepClone(any);
    return circularRefs = null, rv;
}
function innerDeepClone(any) {
    if (!any || "object" != typeof any) return any;
    var rv = circularRefs && circularRefs.get(any);
    if (rv) return rv;
    if (isArray(any)) {
        rv = [], circularRefs && circularRefs.set(any, rv);
        for(var i = 0, l = any.length; i < l; ++i)rv.push(innerDeepClone(any[i]));
    } else if (intrinsicTypes.indexOf(any.constructor) >= 0) rv = any;
    else {
        var proto = getProto(any);
        for(var prop in rv = proto === Object.prototype ? {} : Object.create(proto), circularRefs && circularRefs.set(any, rv), any)hasOwn(any, prop) && (rv[prop] = innerDeepClone(any[prop]));
    }
    return rv;
}
var toString = {}.toString;
function toStringTag(o) {
    return toString.call(o).slice(8, -1);
}
var iteratorSymbol = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator", getIteratorOf = "symbol" == (typeof iteratorSymbol === "undefined" ? "undefined" : _typeof(iteratorSymbol)) ? function getIteratorOf(x) {
    var i;
    return null != x && (i = x[iteratorSymbol]) && i.apply(x);
} : function() {
    return null;
}, NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
    var i, a, x, it;
    if (1 === arguments.length) {
        if (isArray(arrayLike)) return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && "string" == typeof arrayLike) return [
            arrayLike
        ];
        if (it = getIteratorOf(arrayLike)) {
            for(a = []; !(x = it.next()).done;)a.push(x.value);
            return a;
        }
        if (null == arrayLike) return [
            arrayLike
        ];
        if ("number" == typeof (i = arrayLike.length)) {
            for(a = new Array(i); i--;)a[i] = arrayLike[i];
            return a;
        }
        return [
            arrayLike
        ];
    }
    for(i = arguments.length, a = new Array(i); i--;)a[i] = arguments[i];
    return a;
}
var isAsyncFunction = "undefined" != typeof Symbol ? function isAsyncFunction(fn) {
    return "AsyncFunction" === fn[Symbol.toStringTag];
} : function() {
    return !1;
}, debug = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
    debug = value, libraryFilter = filter;
}
var libraryFilter = function libraryFilter() {
    return !0;
}, NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
    if (NEEDS_THROW_FOR_STACK) try {
        throw getErrorWithStack.arguments, new Error;
    } catch (e) {
        return e;
    }
    return new Error;
}
function prettyStack(exception, numIgnoredFrames) {
    var stack = exception.stack;
    return stack ? (numIgnoredFrames = numIgnoredFrames || 0, 0 === stack.indexOf(exception.name) && (numIgnoredFrames += (exception.name + exception.message).split("\n").length), stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map(function(frame) {
        return "\n" + frame;
    }).join("")) : "";
}
var idbDomErrorNames = [
    "Unknown",
    "Constraint",
    "Data",
    "TransactionInactive",
    "ReadOnly",
    "Version",
    "NotFound",
    "InvalidState",
    "InvalidAccess",
    "Abort",
    "Timeout",
    "QuotaExceeded",
    "Syntax",
    "DataClone"
], errorList = [
    "Modify",
    "Bulk",
    "OpenFailed",
    "VersionChange",
    "Schema",
    "Upgrade",
    "InvalidTable",
    "MissingAPI",
    "NoSuchDatabase",
    "InvalidArgument",
    "SubTransaction",
    "Unsupported",
    "Internal",
    "DatabaseClosed",
    "PrematureCommit",
    "ForeignAwait"
].concat(idbDomErrorNames), defaultTexts = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed",
    MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function DexieError(name, msg) {
    this._e = getErrorWithStack(), this.name = name, this.message = msg;
}
function getMultiErrorMessage(msg, failures) {
    return msg + ". Errors: " + Object.keys(failures).map(function(key) {
        return failures[key].toString();
    }).filter(function(v1, i, s) {
        return s.indexOf(v1) === i;
    }).join("\n");
}
function ModifyError(msg, failures, successCount, failedKeys) {
    this._e = getErrorWithStack(), this.failures = failures, this.failedKeys = failedKeys, this.successCount = successCount, this.message = getMultiErrorMessage(msg, failures);
}
function BulkError(msg, failures) {
    this._e = getErrorWithStack(), this.name = "BulkError", this.failures = Object.keys(failures).map(function(pos) {
        return failures[pos];
    }), this.failuresByPos = failures, this.message = getMultiErrorMessage(msg, failures);
}
derive(DexieError).from(Error).extend({
    stack: {
        get: function get() {
            return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
        }
    },
    toString: function toString() {
        return this.name + ": " + this.message;
    }
}), derive(ModifyError).from(DexieError), derive(BulkError).from(DexieError);
var errnames = errorList.reduce(function(obj, name) {
    return obj[name] = name + "Error", obj;
}, {}), BaseException = DexieError, exceptions = errorList.reduce(function(obj, name) {
    var DexieError2 = function DexieError2(msgOrInner, inner) {
        this._e = getErrorWithStack(), this.name = fullName, msgOrInner ? "string" == typeof msgOrInner ? (this.message = msgOrInner + (inner ? "\n " + inner : ""), this.inner = inner || null) : "object" == typeof msgOrInner && (this.message = msgOrInner.name + " " + msgOrInner.message, this.inner = msgOrInner) : (this.message = defaultTexts[name] || fullName, this.inner = null);
    };
    var fullName = name + "Error";
    return derive(DexieError2).from(BaseException), obj[name] = DexieError2, obj;
}, {});
exceptions.Syntax = SyntaxError, exceptions.Type = TypeError, exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function(obj, name) {
    return obj[name + "Error"] = exceptions[name], obj;
}, {});
var fullNameExceptions = errorList.reduce(function(obj, name) {
    return -1 === [
        "Syntax",
        "Type",
        "Range"
    ].indexOf(name) && (obj[name + "Error"] = exceptions[name]), obj;
}, {});
function nop() {}
function mirror(val) {
    return val;
}
function pureFunctionChain(f1, f2) {
    return null == f1 || f1 === mirror ? f2 : function(val) {
        return f2(f1(val));
    };
}
function callBoth(on1, on2) {
    return function() {
        on1.apply(this, arguments), on2.apply(this, arguments);
    };
}
function hookCreatingChain(f1, f2) {
    return f1 === nop ? f2 : function() {
        var res = f1.apply(this, arguments);
        void 0 !== res && (arguments[0] = res);
        var onsuccess = this.onsuccess, onerror = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var res2 = f2.apply(this, arguments);
        return onsuccess && (this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess), onerror && (this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror), void 0 !== res2 ? res2 : res;
    };
}
function hookDeletingChain(f1, f2) {
    return f1 === nop ? f2 : function() {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess, onerror = this.onerror;
        this.onsuccess = this.onerror = null, f2.apply(this, arguments), onsuccess && (this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess), onerror && (this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror);
    };
}
function hookUpdatingChain(f1, f2) {
    return f1 === nop ? f2 : function(modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res);
        var onsuccess = this.onsuccess, onerror = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var res2 = f2.apply(this, arguments);
        return onsuccess && (this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess), onerror && (this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror), void 0 === res ? void 0 === res2 ? void 0 : res2 : extend(res, res2);
    };
}
function reverseStoppableEventChain(f1, f2) {
    return f1 === nop ? f2 : function() {
        return !1 !== f2.apply(this, arguments) && f1.apply(this, arguments);
    };
}
function promisableChain(f1, f2) {
    return f1 === nop ? f2 : function() {
        var res = f1.apply(this, arguments);
        if (res && "function" == typeof res.then) {
            for(var thiz = this, i = arguments.length, args = new Array(i); i--;)args[i] = arguments[i];
            return res.then(function() {
                return f2.apply(thiz, args);
            });
        }
        return f2.apply(this, arguments);
    };
}
fullNameExceptions.ModifyError = ModifyError, fullNameExceptions.DexieError = DexieError, fullNameExceptions.BulkError = BulkError;
var INTERNAL = {}, _a$1 = "undefined" == typeof Promise ? [] : function() {
    var globalP = Promise.resolve();
    if ("undefined" == typeof crypto || !crypto.subtle) return [
        globalP,
        getProto(globalP),
        globalP
    ];
    var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([
        0
    ]));
    return [
        nativeP,
        getProto(nativeP),
        globalP
    ];
}(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then, NativePromise = resolvedNativePromise && resolvedNativePromise.constructor, patchGlobalPromise = !!resolvedGlobalPromise, stack_being_generated = !1, schedulePhysicalTick = resolvedGlobalPromise ? function schedulePhysicalTick() {
    resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? function() {
    var hiddenDiv = document.createElement("div");
    new MutationObserver(function() {
        physicalTick(), hiddenDiv = null;
    }).observe(hiddenDiv, {
        attributes: !0
    }), hiddenDiv.setAttribute("i", "1");
} : function() {
    setTimeout(physicalTick, 0);
}, asap = function asap(callback, args) {
    microtickQueue.push([
        callback,
        args
    ]), needsNewPhysicalTick && (schedulePhysicalTick(), needsNewPhysicalTick = !1);
}, isOutsideMicroTick = !0, needsNewPhysicalTick = !0, unhandledErrors = [], rejectingErrors = [], currentFulfiller = null, rejectionMapper = mirror, globalPSD = {
    id: "global",
    global: !0,
    ref: 0,
    unhandleds: [],
    onunhandled: globalError,
    pgp: !1,
    env: {},
    finalize: function finalize() {
        this.unhandleds.forEach(function(uh) {
            try {
                globalError(uh[0], uh[1]);
            } catch (e) {}
        });
    }
}, PSD = globalPSD, microtickQueue = [], numScheduledCalls = 0, tickFinalizers = [];
function DexiePromise(fn) {
    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
    this._listeners = [], this.onuncatched = nop, this._lib = !1;
    var psd = this._PSD = PSD;
    if (debug && (this._stackHolder = getErrorWithStack(), this._prev = null, this._numPrev = 0), "function" != typeof fn) {
        if (fn !== INTERNAL) throw new TypeError("Not a function");
        return this._state = arguments[1], this._value = arguments[2], void (!1 === this._state && handleRejection(this, this._value));
    }
    this._state = null, this._value = null, ++psd.ref, executePromiseTask(this, fn);
}
var thenProp = {
    get: function get() {
        var then = function then(onFulfilled, onRejected) {
            var _this = this, possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes), cleanup = possibleAwait && !decrementExpectedAwaits(), rv = new DexiePromise(function(resolve, reject) {
                propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
            });
            return debug && linkToPreviousPromise(rv, this), rv;
        };
        var psd = PSD, microTaskId = totalEchoes;
        return then.prototype = INTERNAL, then;
    },
    set: function set(value) {
        setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
            get: function get() {
                return value;
            },
            set: thenProp.set
        });
    }
};
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
    this.onFulfilled = "function" == typeof onFulfilled ? onFulfilled : null, this.onRejected = "function" == typeof onRejected ? onRejected : null, this.resolve = resolve, this.reject = reject, this.psd = zone;
}
function executePromiseTask(promise, fn) {
    try {
        fn(function(value) {
            if (null === promise._state) {
                if (value === promise) throw new TypeError("A promise cannot be resolved with itself.");
                var shouldExecuteTick = promise._lib && beginMicroTickScope();
                value && "function" == typeof value.then ? executePromiseTask(promise, function(resolve, reject) {
                    _instanceof(value, DexiePromise) ? value._then(resolve, reject) : value.then(resolve, reject);
                }) : (promise._state = !0, promise._value = value, propagateAllListeners(promise)), shouldExecuteTick && endMicroTickScope();
            }
        }, handleRejection.bind(null, promise));
    } catch (ex) {
        handleRejection(promise, ex);
    }
}
function handleRejection(promise, reason) {
    if (rejectingErrors.push(reason), null === promise._state) {
        var shouldExecuteTick = promise._lib && beginMicroTickScope();
        reason = rejectionMapper(reason), promise._state = !1, promise._value = reason, debug && null !== reason && "object" == typeof reason && !reason._promise && function tryCatch(fn, onerror, args) {
            try {
                fn.apply(null, args);
            } catch (ex) {
                onerror && onerror(ex);
            }
        }(function() {
            var origProp = getPropertyDescriptor(reason, "stack");
            reason._promise = promise, setProp(reason, "stack", {
                get: function get() {
                    return stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack;
                }
            });
        }), function addPossiblyUnhandledError(promise) {
            unhandledErrors.some(function(p2) {
                return p2._value === promise._value;
            }) || unhandledErrors.push(promise);
        }(promise), propagateAllListeners(promise), shouldExecuteTick && endMicroTickScope();
    }
}
function propagateAllListeners(promise) {
    var listeners = promise._listeners;
    promise._listeners = [];
    for(var i = 0, len = listeners.length; i < len; ++i)propagateToListener(promise, listeners[i]);
    var psd = promise._PSD;
    --psd.ref || psd.finalize(), 0 === numScheduledCalls && (++numScheduledCalls, asap(function() {
        0 == --numScheduledCalls && finalizePhysicalTick();
    }, []));
}
function propagateToListener(promise, listener) {
    if (null !== promise._state) {
        var cb = promise._state ? listener.onFulfilled : listener.onRejected;
        if (null === cb) return (promise._state ? listener.resolve : listener.reject)(promise._value);
        ++listener.psd.ref, ++numScheduledCalls, asap(callListener, [
            cb,
            promise,
            listener
        ]);
    } else promise._listeners.push(listener);
}
function callListener(cb, promise, listener) {
    try {
        currentFulfiller = promise;
        var ret, value = promise._value;
        promise._state ? ret = cb(value) : (rejectingErrors.length && (rejectingErrors = []), ret = cb(value), -1 === rejectingErrors.indexOf(value) && function markErrorAsHandled(promise) {
            var i = unhandledErrors.length;
            for(; i;)if (unhandledErrors[--i]._value === promise._value) return void unhandledErrors.splice(i, 1);
        }(promise)), listener.resolve(ret);
    } catch (e) {
        listener.reject(e);
    } finally{
        currentFulfiller = null, 0 == --numScheduledCalls && finalizePhysicalTick(), --listener.psd.ref || listener.psd.finalize();
    }
}
function getStack(promise, stacks, limit) {
    if (stacks.length === limit) return stacks;
    var stack = "";
    if (!1 === promise._state) {
        var errorName, message, failure = promise._value;
        null != failure ? (errorName = failure.name || "Error", message = failure.message || failure, stack = prettyStack(failure, 0)) : (errorName = failure, message = ""), stacks.push(errorName + (message ? ": " + message : "") + stack);
    }
    return debug && ((stack = prettyStack(promise._stackHolder, 2)) && -1 === stacks.indexOf(stack) && stacks.push(stack), promise._prev && getStack(promise._prev, stacks, limit)), stacks;
}
function linkToPreviousPromise(promise, prev) {
    var numPrev = prev ? prev._numPrev + 1 : 0;
    numPrev < 100 && (promise._prev = prev, promise._numPrev = numPrev);
}
function physicalTick() {
    beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
    var wasRootExec = isOutsideMicroTick;
    return isOutsideMicroTick = !1, needsNewPhysicalTick = !1, wasRootExec;
}
function endMicroTickScope() {
    var callbacks, i, l;
    do {
        for(; microtickQueue.length > 0;)for(callbacks = microtickQueue, microtickQueue = [], l = callbacks.length, i = 0; i < l; ++i){
            var item = callbacks[i];
            item[0].apply(null, item[1]);
        }
    }while (microtickQueue.length > 0);
    isOutsideMicroTick = !0, needsNewPhysicalTick = !0;
}
function finalizePhysicalTick() {
    var unhandledErrs = unhandledErrors;
    unhandledErrors = [], unhandledErrs.forEach(function(p2) {
        p2._PSD.onunhandled.call(null, p2._value, p2);
    });
    for(var finalizers = tickFinalizers.slice(0), i = finalizers.length; i;)finalizers[--i]();
}
function PromiseReject(reason) {
    return new DexiePromise(INTERNAL, !1, reason);
}
function wrap(fn, errorCatcher) {
    var psd = PSD;
    return function() {
        var wasRootExec = beginMicroTickScope(), outerScope = PSD;
        try {
            return switchToZone(psd, !0), fn.apply(this, arguments);
        } catch (e) {
            errorCatcher && errorCatcher(e);
        } finally{
            switchToZone(outerScope, !1), wasRootExec && endMicroTickScope();
        }
    };
}
props(DexiePromise.prototype, {
    then: thenProp,
    _then: function _then(onFulfilled, onRejected) {
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
    },
    catch: function _catch(onRejected) {
        if (1 === arguments.length) return this.then(null, onRejected);
        var type2 = arguments[0], handler = arguments[1];
        return "function" == typeof type2 ? this.then(null, function(err) {
            return _instanceof(err, type2) ? handler(err) : PromiseReject(err);
        }) : this.then(null, function(err) {
            return err && err.name === type2 ? handler(err) : PromiseReject(err);
        });
    },
    finally: function _finally(onFinally) {
        return this.then(function(value) {
            return onFinally(), value;
        }, function(err) {
            return onFinally(), PromiseReject(err);
        });
    },
    stack: {
        get: function get() {
            if (this._stack) return this._stack;
            try {
                stack_being_generated = !0;
                var stack = getStack(this, [], 20).join("\nFrom previous: ");
                return null !== this._state && (this._stack = stack), stack;
            } finally{
                stack_being_generated = !1;
            }
        }
    },
    timeout: function timeout(ms, msg) {
        var _this = this;
        return ms < 1 / 0 ? new DexiePromise(function(resolve, reject) {
            var handle = setTimeout(function() {
                return reject(new exceptions.Timeout(msg));
            }, ms);
            _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
        }) : this;
    }
}), "undefined" != typeof Symbol && Symbol.toStringTag && setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise"), globalPSD.env = snapShot(), props(DexiePromise, {
    all: function all() {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function(resolve, reject) {
            0 === values.length && resolve([]);
            var remaining = values.length;
            values.forEach(function(a, i) {
                return DexiePromise.resolve(a).then(function(x) {
                    values[i] = x, --remaining || resolve(values);
                }, reject);
            });
        });
    },
    resolve: function resolve(value) {
        if (_instanceof(value, DexiePromise)) return value;
        if (value && "function" == typeof value.then) return new DexiePromise(function(resolve, reject) {
            value.then(resolve, reject);
        });
        var rv = new DexiePromise(INTERNAL, !0, value);
        return linkToPreviousPromise(rv, currentFulfiller), rv;
    },
    reject: PromiseReject,
    race: function race() {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function(resolve, reject) {
            values.map(function(value) {
                return DexiePromise.resolve(value).then(resolve, reject);
            });
        });
    },
    PSD: {
        get: function get() {
            return PSD;
        },
        set: function set(value) {
            return PSD = value;
        }
    },
    totalEchoes: {
        get: function get() {
            return totalEchoes;
        }
    },
    newPSD: newScope,
    usePSD: usePSD,
    scheduler: {
        get: function get() {
            return asap;
        },
        set: function set(value) {
            asap = value;
        }
    },
    rejectionMapper: {
        get: function get() {
            return rejectionMapper;
        },
        set: function set(value) {
            rejectionMapper = value;
        }
    },
    follow: function follow(fn, zoneProps) {
        return new DexiePromise(function(resolve, reject) {
            return newScope(function(resolve2, reject2) {
                var psd = PSD;
                psd.unhandleds = [], psd.onunhandled = reject2, psd.finalize = callBoth(function() {
                    var _this = this;
                    !function run_at_end_of_this_or_next_physical_tick(fn) {
                        function finalizer() {
                            fn(), tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
                        }
                        tickFinalizers.push(finalizer), ++numScheduledCalls, asap(function() {
                            0 == --numScheduledCalls && finalizePhysicalTick();
                        }, []);
                    }(function() {
                        0 === _this.unhandleds.length ? resolve2() : reject2(_this.unhandleds[0]);
                    });
                }, psd.finalize), fn();
            }, zoneProps, resolve, reject);
        });
    }
}), NativePromise && (NativePromise.allSettled && setProp(DexiePromise, "allSettled", function() {
    var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function(resolve) {
        0 === possiblePromises.length && resolve([]);
        var remaining = possiblePromises.length, results = new Array(remaining);
        possiblePromises.forEach(function(p2, i) {
            return DexiePromise.resolve(p2).then(function(value) {
                return results[i] = {
                    status: "fulfilled",
                    value: value
                };
            }, function(reason) {
                return results[i] = {
                    status: "rejected",
                    reason: reason
                };
            }).then(function() {
                return --remaining || resolve(results);
            });
        });
    });
}), NativePromise.any && "undefined" != typeof AggregateError && setProp(DexiePromise, "any", function() {
    var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function(resolve, reject) {
        0 === possiblePromises.length && reject(new AggregateError([]));
        var remaining = possiblePromises.length, failures = new Array(remaining);
        possiblePromises.forEach(function(p2, i) {
            return DexiePromise.resolve(p2).then(function(value) {
                return resolve(value);
            }, function(failure) {
                failures[i] = failure, --remaining || reject(new AggregateError(failures));
            });
        });
    });
}));
var task = {
    awaits: 0,
    echoes: 0,
    id: 0
}, taskCounter = 0, zoneStack = [], zoneEchoes = 0, totalEchoes = 0, zone_id_counter = 0;
function newScope(fn, props2, a1, a2) {
    var parent = PSD, psd = Object.create(parent);
    psd.parent = parent, psd.ref = 0, psd.global = !1, psd.id = ++zone_id_counter;
    var globalEnv = globalPSD.env;
    psd.env = patchGlobalPromise ? {
        Promise: DexiePromise,
        PromiseProp: {
            value: DexiePromise,
            configurable: !0,
            writable: !0
        },
        all: DexiePromise.all,
        race: DexiePromise.race,
        allSettled: DexiePromise.allSettled,
        any: DexiePromise.any,
        resolve: DexiePromise.resolve,
        reject: DexiePromise.reject,
        nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
        gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
    } : {}, props2 && extend(psd, props2), ++parent.ref, psd.finalize = function() {
        --this.parent.ref || this.parent.finalize();
    };
    var rv = usePSD(psd, fn, a1, a2);
    return 0 === psd.ref && psd.finalize(), rv;
}
function incrementExpectedAwaits() {
    return task.id || (task.id = ++taskCounter), ++task.awaits, task.echoes += 100, task.id;
}
function decrementExpectedAwaits() {
    return !!task.awaits && (0 == --task.awaits && (task.id = 0), task.echoes = 100 * task.awaits, !0);
}
function onPossibleParallellAsync(possiblePromise) {
    return task.echoes && possiblePromise && possiblePromise.constructor === NativePromise ? (incrementExpectedAwaits(), possiblePromise.then(function(x) {
        return decrementExpectedAwaits(), x;
    }, function(e) {
        return decrementExpectedAwaits(), rejection(e);
    })) : possiblePromise;
}
function zoneEnterEcho(targetZone) {
    ++totalEchoes, task.echoes && 0 != --task.echoes || (task.echoes = task.id = 0), zoneStack.push(PSD), switchToZone(targetZone, !0);
}
function zoneLeaveEcho() {
    var zone = zoneStack[zoneStack.length - 1];
    zoneStack.pop(), switchToZone(zone, !1);
}
function switchToZone(targetZone, bEnteringZone) {
    var currentZone = PSD;
    if ((bEnteringZone ? !task.echoes || zoneEchoes++ && targetZone === PSD : !zoneEchoes || --zoneEchoes && targetZone === PSD) || enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho), targetZone !== PSD && (PSD = targetZone, currentZone === globalPSD && (globalPSD.env = snapShot()), patchGlobalPromise)) {
        var GlobalPromise_1 = globalPSD.env.Promise, targetEnv = targetZone.env;
        nativePromiseProto.then = targetEnv.nthen, GlobalPromise_1.prototype.then = targetEnv.gthen, (currentZone.global || targetZone.global) && (Object.defineProperty(_global, "Promise", targetEnv.PromiseProp), GlobalPromise_1.all = targetEnv.all, GlobalPromise_1.race = targetEnv.race, GlobalPromise_1.resolve = targetEnv.resolve, GlobalPromise_1.reject = targetEnv.reject, targetEnv.allSettled && (GlobalPromise_1.allSettled = targetEnv.allSettled), targetEnv.any && (GlobalPromise_1.any = targetEnv.any));
    }
}
function snapShot() {
    var GlobalPromise = _global.Promise;
    return patchGlobalPromise ? {
        Promise: GlobalPromise,
        PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
        all: GlobalPromise.all,
        race: GlobalPromise.race,
        allSettled: GlobalPromise.allSettled,
        any: GlobalPromise.any,
        resolve: GlobalPromise.resolve,
        reject: GlobalPromise.reject,
        nthen: nativePromiseProto.then,
        gthen: GlobalPromise.prototype.then
    } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
    var outerScope = PSD;
    try {
        return switchToZone(psd, !0), fn(a1, a2, a3);
    } finally{
        switchToZone(outerScope, !1);
    }
}
function enqueueNativeMicroTask(job) {
    nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
    return "function" != typeof fn ? fn : function() {
        var outerZone = PSD;
        possibleAwait && incrementExpectedAwaits(), switchToZone(zone, !0);
        try {
            return fn.apply(this, arguments);
        } finally{
            switchToZone(outerZone, !1), cleanup && enqueueNativeMicroTask(decrementExpectedAwaits);
        }
    };
}
function getPatchedPromiseThen(origThen, zone) {
    return function(onResolved, onRejected) {
        return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
    };
}
-1 === ("" + nativePromiseThen).indexOf("[native code]") && (incrementExpectedAwaits = decrementExpectedAwaits = nop);
function globalError(err, promise) {
    var rv;
    try {
        rv = promise.onuncatched(err);
    } catch (e) {}
    if (!1 !== rv) try {
        var event, eventData = {
            promise: promise,
            reason: err
        };
        if (_global.document && document.createEvent ? ((event = document.createEvent("Event")).initEvent("unhandledrejection", !0, !0), extend(event, eventData)) : _global.CustomEvent && extend(event = new CustomEvent("unhandledrejection", {
            detail: eventData
        }), eventData), event && _global.dispatchEvent && (dispatchEvent(event), !_global.PromiseRejectionEvent && _global.onunhandledrejection)) try {
            _global.onunhandledrejection(event);
        } catch (_) {}
        debug && event && !event.defaultPrevented && console.warn("Unhandled rejection: " + (err.stack || err));
    } catch (e1) {}
}
var rejection = DexiePromise.reject;
function tempTransaction(db2, mode, storeNames, fn) {
    if (db2.idbdb && (db2._state.openComplete || PSD.letThrough || db2._vip)) {
        var trans = db2._createTransaction(mode, storeNames, db2._dbSchema);
        try {
            trans.create(), db2._state.PR1398_maxLoop = 3;
        } catch (ex) {
            return ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), db2._close(), db2.open().then(function() {
                return tempTransaction(db2, mode, storeNames, fn);
            })) : rejection(ex);
        }
        return trans._promise(mode, function(resolve, reject) {
            return newScope(function() {
                return PSD.trans = trans, fn(resolve, reject, trans);
            });
        }).then(function(result) {
            return trans._completion.then(function() {
                return result;
            });
        });
    }
    if (db2._state.openComplete) return rejection(new exceptions.DatabaseClosed(db2._state.dbOpenError));
    if (!db2._state.isBeingOpened) {
        if (!db2._options.autoOpen) return rejection(new exceptions.DatabaseClosed);
        db2.open().catch(nop);
    }
    return db2._state.dbReadyPromise.then(function() {
        return tempTransaction(db2, mode, storeNames, fn);
    });
}
var maxString = String.fromCharCode(65535), INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", connections = [], isIEOrEdge = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent), hasIEDeleteObjectStoreBug = isIEOrEdge, hangsOnDeleteLargeKeyRange = isIEOrEdge, dexieStackFrameFilter = function dexieStackFrameFilter(frame) {
    return !/(dexie\.js|dexie\.min\.js)/.test(frame);
};
function combine(filter1, filter2) {
    return filter1 ? filter2 ? function() {
        return filter1.apply(this, arguments) && filter2.apply(this, arguments);
    } : filter1 : filter2;
}
var AnyRange = {
    type: 3,
    lower: -1 / 0,
    lowerOpen: !1,
    upper: [
        []
    ],
    upperOpen: !1
};
function workaroundForUndefinedPrimKey(keyPath) {
    return "string" != typeof keyPath || /\./.test(keyPath) ? function(obj) {
        return obj;
    } : function(obj) {
        return void 0 === obj[keyPath] && keyPath in obj && delete (obj = deepClone(obj))[keyPath], obj;
    };
}
var Table = function() {
    var Table2 = function Table2() {};
    return Table2.prototype._trans = function(mode, fn, writeLocked) {
        var checkTableInTransaction = function checkTableInTransaction(resolve, reject, trans2) {
            if (!trans2.schema[tableName]) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            return fn(trans2.idbtrans, trans2);
        };
        var trans = this._tx || PSD.trans, tableName = this.name;
        var wasRootExec = beginMicroTickScope();
        try {
            return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function() {
                return trans._promise(mode, checkTableInTransaction, writeLocked);
            }, {
                trans: trans,
                transless: PSD.transless || PSD
            }) : tempTransaction(this.db, mode, [
                this.name
            ], checkTableInTransaction);
        } finally{
            wasRootExec && endMicroTickScope();
        }
    }, Table2.prototype.get = function(keyOrCrit, cb) {
        var _this = this;
        return keyOrCrit && keyOrCrit.constructor === Object ? this.where(keyOrCrit).first(cb) : this._trans("readonly", function(trans) {
            return _this.core.get({
                trans: trans,
                key: keyOrCrit
            }).then(function(res) {
                return _this.hook.reading.fire(res);
            });
        }).then(cb);
    }, Table2.prototype.where = function(indexOrCrit) {
        var equals = function equals(a, b) {
            try {
                return 0 === idb.cmp(a, b);
            } catch (e) {
                return !1;
            }
        };
        if ("string" == typeof indexOrCrit) return new this.db.WhereClause(this, indexOrCrit);
        if (isArray(indexOrCrit)) return new this.db.WhereClause(this, "[" + indexOrCrit.join("+") + "]");
        var keyPaths = keys(indexOrCrit);
        if (1 === keyPaths.length) return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
        var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function(ix) {
            return ix.compound && keyPaths.every(function(keyPath) {
                return ix.keyPath.indexOf(keyPath) >= 0;
            }) && ix.keyPath.every(function(keyPath) {
                return keyPaths.indexOf(keyPath) >= 0;
            });
        })[0];
        if (compoundIndex && this.db._maxKey !== maxString) return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(function(kp) {
            return indexOrCrit[kp];
        }));
        !compoundIndex && debug && console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a compound index [" + keyPaths.join("+") + "]");
        var idxByName = this.schema.idxByName, idb = this.db._deps.indexedDB;
        var _a3 = keyPaths.reduce(function(_a4, keyPath) {
            var prevIndex = _a4[0], prevFilterFn = _a4[1], index = idxByName[keyPath], value = indexOrCrit[keyPath];
            return [
                prevIndex || index,
                prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function(x) {
                    var prop = getByKeyPath(x, keyPath);
                    return isArray(prop) && prop.some(function(item) {
                        return equals(value, item);
                    });
                } : function(x) {
                    return equals(value, getByKeyPath(x, keyPath));
                }) : prevFilterFn
            ];
        }, [
            null,
            null
        ]), idx = _a3[0], filterFunction = _a3[1];
        return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
    }, Table2.prototype.filter = function(filterFunction) {
        return this.toCollection().and(filterFunction);
    }, Table2.prototype.count = function(thenShortcut) {
        return this.toCollection().count(thenShortcut);
    }, Table2.prototype.offset = function(offset) {
        return this.toCollection().offset(offset);
    }, Table2.prototype.limit = function(numRows) {
        return this.toCollection().limit(numRows);
    }, Table2.prototype.each = function(callback) {
        return this.toCollection().each(callback);
    }, Table2.prototype.toArray = function(thenShortcut) {
        return this.toCollection().toArray(thenShortcut);
    }, Table2.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
    }, Table2.prototype.orderBy = function(index) {
        return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[" + index.join("+") + "]" : index));
    }, Table2.prototype.reverse = function() {
        return this.toCollection().reverse();
    }, Table2.prototype.mapToClass = function(constructor) {
        this.schema.mappedClass = constructor;
        var readHook = function readHook(obj) {
            if (!obj) return obj;
            var res = Object.create(constructor.prototype);
            for(var m in obj)if (hasOwn(obj, m)) try {
                res[m] = obj[m];
            } catch (_) {}
            return res;
        };
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = readHook, this.hook("reading", readHook), constructor;
    }, Table2.prototype.defineClass = function() {
        return this.mapToClass(function Class(content) {
            extend(this, content);
        });
    }, Table2.prototype.add = function(obj, key) {
        var _this = this, _a3 = this.schema.primKey, auto = _a3.auto, keyPath = _a3.keyPath, objToAdd = obj;
        return keyPath && auto && (objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj)), this._trans("readwrite", function(trans) {
            return _this.core.mutate({
                trans: trans,
                type: "add",
                keys: null != key ? [
                    key
                ] : null,
                values: [
                    objToAdd
                ]
            });
        }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
        }).then(function(lastResult) {
            if (keyPath) try {
                setByKeyPath(obj, keyPath, lastResult);
            } catch (_) {}
            return lastResult;
        });
    }, Table2.prototype.update = function(keyOrObject, modifications) {
        if ("object" != typeof keyOrObject || isArray(keyOrObject)) return this.where(":id").equals(keyOrObject).modify(modifications);
        var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
        if (void 0 === key) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
        try {
            "function" != typeof modifications ? keys(modifications).forEach(function(keyPath) {
                setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
            }) : modifications(keyOrObject, {
                value: keyOrObject,
                primKey: key
            });
        } catch (_a3) {}
        return this.where(":id").equals(key).modify(modifications);
    }, Table2.prototype.put = function(obj, key) {
        var _this = this, _a3 = this.schema.primKey, auto = _a3.auto, keyPath = _a3.keyPath, objToAdd = obj;
        return keyPath && auto && (objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj)), this._trans("readwrite", function(trans) {
            return _this.core.mutate({
                trans: trans,
                type: "put",
                values: [
                    objToAdd
                ],
                keys: null != key ? [
                    key
                ] : null
            });
        }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
        }).then(function(lastResult) {
            if (keyPath) try {
                setByKeyPath(obj, keyPath, lastResult);
            } catch (_) {}
            return lastResult;
        });
    }, Table2.prototype.delete = function(key) {
        var _this = this;
        return this._trans("readwrite", function(trans) {
            return _this.core.mutate({
                trans: trans,
                type: "delete",
                keys: [
                    key
                ]
            });
        }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
        });
    }, Table2.prototype.clear = function() {
        var _this = this;
        return this._trans("readwrite", function(trans) {
            return _this.core.mutate({
                trans: trans,
                type: "deleteRange",
                range: AnyRange
            });
        }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
        });
    }, Table2.prototype.bulkGet = function(keys2) {
        var _this = this;
        return this._trans("readonly", function(trans) {
            return _this.core.getMany({
                keys: keys2,
                trans: trans
            }).then(function(result) {
                return result.map(function(res) {
                    return _this.hook.reading.fire(res);
                });
            });
        });
    }, Table2.prototype.bulkAdd = function(objects, keysOrOptions, options) {
        var _this = this, keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0, wantResults = (options = options || (keys2 ? void 0 : keysOrOptions)) ? options.allKeys : void 0;
        return this._trans("readwrite", function(trans) {
            var _a3 = _this.schema.primKey, auto = _a3.auto, keyPath = _a3.keyPath;
            if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length, objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
            return _this.core.mutate({
                trans: trans,
                type: "add",
                keys: keys2,
                values: objectsToAdd,
                wantResults: wantResults
            }).then(function(_a4) {
                var numFailures = _a4.numFailures, results = _a4.results, lastResult = _a4.lastResult, failures = _a4.failures;
                if (0 === numFailures) return wantResults ? results : lastResult;
                throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", failures);
            });
        });
    }, Table2.prototype.bulkPut = function(objects, keysOrOptions, options) {
        var _this = this, keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0, wantResults = (options = options || (keys2 ? void 0 : keysOrOptions)) ? options.allKeys : void 0;
        return this._trans("readwrite", function(trans) {
            var _a3 = _this.schema.primKey, auto = _a3.auto, keyPath = _a3.keyPath;
            if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length, objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
            return _this.core.mutate({
                trans: trans,
                type: "put",
                keys: keys2,
                values: objectsToPut,
                wantResults: wantResults
            }).then(function(_a4) {
                var numFailures = _a4.numFailures, results = _a4.results, lastResult = _a4.lastResult, failures = _a4.failures;
                if (0 === numFailures) return wantResults ? results : lastResult;
                throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", failures);
            });
        });
    }, Table2.prototype.bulkDelete = function(keys2) {
        var _this = this, numKeys = keys2.length;
        return this._trans("readwrite", function(trans) {
            return _this.core.mutate({
                trans: trans,
                type: "delete",
                keys: keys2
            });
        }).then(function(_a3) {
            var numFailures = _a3.numFailures, lastResult = _a3.lastResult, failures = _a3.failures;
            if (0 === numFailures) return lastResult;
            throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
        });
    }, Table2;
}();
function Events(ctx) {
    var add2 = function add2(eventName, chainFunction, defaultFunction) {
        if ("object" == typeof eventName) return addConfiguredEvents(eventName);
        chainFunction || (chainFunction = reverseStoppableEventChain), defaultFunction || (defaultFunction = nop);
        var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function subscribe(cb) {
                -1 === context.subscribers.indexOf(cb) && (context.subscribers.push(cb), context.fire = chainFunction(context.fire, cb));
            },
            unsubscribe: function unsubscribe(cb) {
                context.subscribers = context.subscribers.filter(function(fn) {
                    return fn !== cb;
                }), context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
        };
        return evs[eventName] = rv[eventName] = context, context;
    };
    var addConfiguredEvents = function addConfiguredEvents(cfg) {
        keys(cfg).forEach(function(eventName) {
            var args = cfg[eventName];
            if (isArray(args)) add2(eventName, cfg[eventName][0], cfg[eventName][1]);
            else {
                if ("asap" !== args) throw new exceptions.InvalidArgument("Invalid event config");
                var context = add2(eventName, mirror, function fire() {
                    for(var i2 = arguments.length, args2 = new Array(i2); i2--;)args2[i2] = arguments[i2];
                    context.subscribers.forEach(function(fn) {
                        asap$1(function fireEvent() {
                            fn.apply(null, args2);
                        });
                    });
                });
            }
        });
    };
    var evs = {}, rv = function rv(eventName, subscriber) {
        if (subscriber) {
            for(var i2 = arguments.length, args = new Array(i2 - 1); --i2;)args[i2 - 1] = arguments[i2];
            return evs[eventName].subscribe.apply(null, args), ctx;
        }
        if ("string" == typeof eventName) return evs[eventName];
    };
    rv.addEventType = add2;
    for(var i = 1, l = arguments.length; i < l; ++i)add2(arguments[i]);
    return rv;
}
function makeClassConstructor(prototype, constructor) {
    return derive(constructor).from({
        prototype: prototype
    }), constructor;
}
function isPlainKeyRange(ctx, ignoreLimitFilter) {
    return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
    ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
    var curr = ctx.replayFilter;
    ctx.replayFilter = curr ? function() {
        return combine(curr(), factory());
    } : factory, ctx.justLimit = isLimitFilter && !curr;
}
function getIndexOrStore(ctx, coreSchema) {
    if (ctx.isPrimKey) return coreSchema.primaryKey;
    var index = coreSchema.getIndexByKeyPath(ctx.index);
    if (!index) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
    return index;
}
function openCursor(ctx, coreTable, trans) {
    var index = getIndexOrStore(ctx, coreTable.schema);
    return coreTable.openCursor({
        trans: trans,
        values: !ctx.keysOnly,
        reverse: "prev" === ctx.dir,
        unique: !!ctx.unique,
        query: {
            index: index,
            range: ctx.range
        }
    });
}
function iter(ctx, fn, coreTrans, coreTable) {
    var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
    if (ctx.or) {
        var set_1 = {}, union = function union(item, cursor, advance) {
            if (!filter || filter(cursor, advance, function(result) {
                return cursor.stop(result);
            }, function(err) {
                return cursor.fail(err);
            })) {
                var primaryKey = cursor.primaryKey, key = "" + primaryKey;
                "[object ArrayBuffer]" === key && (key = "" + new Uint8Array(primaryKey)), hasOwn(set_1, key) || (set_1[key] = !0, fn(item, cursor, advance));
            }
        };
        return Promise.all([
            ctx.or._iterate(union, coreTrans),
            iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
        ]);
    }
    return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
}
function iterate(cursorPromise, filter, fn, valueMapper) {
    var wrappedFn = wrap(valueMapper ? function(x, c, a) {
        return fn(valueMapper(x), c, a);
    } : fn);
    return cursorPromise.then(function(cursor) {
        if (cursor) return cursor.start(function() {
            var c = function c() {
                return cursor.continue();
            };
            filter && !filter(cursor, function(advancer) {
                return c = advancer;
            }, function(val) {
                cursor.stop(val), c = nop;
            }, function(e) {
                cursor.fail(e), c = nop;
            }) || wrappedFn(cursor.value, cursor, function(advancer) {
                return c = advancer;
            }), c();
        });
    });
}
function cmp(a, b) {
    try {
        var ta = type(a), tb = type(b);
        if (ta !== tb) return "Array" === ta ? 1 : "Array" === tb ? -1 : "binary" === ta ? 1 : "binary" === tb ? -1 : "string" === ta ? 1 : "string" === tb ? -1 : "Date" === ta ? 1 : "Date" !== tb ? NaN : -1;
        switch(ta){
            case "number":
            case "Date":
            case "string":
                return a > b ? 1 : a < b ? -1 : 0;
            case "binary":
                return function compareUint8Arrays(a, b) {
                    for(var al = a.length, bl = b.length, l = al < bl ? al : bl, i = 0; i < l; ++i)if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
                    return al === bl ? 0 : al < bl ? -1 : 1;
                }(getUint8Array(a), getUint8Array(b));
            case "Array":
                return function compareArrays(a, b) {
                    for(var al = a.length, bl = b.length, l = al < bl ? al : bl, i = 0; i < l; ++i){
                        var res = cmp(a[i], b[i]);
                        if (0 !== res) return res;
                    }
                    return al === bl ? 0 : al < bl ? -1 : 1;
                }(a, b);
        }
    } catch (_a3) {}
    return NaN;
}
function type(x) {
    var t = typeof x === "undefined" ? "undefined" : _typeof(x);
    if ("object" !== t) return t;
    if (ArrayBuffer.isView(x)) return "binary";
    var tsTag = toStringTag(x);
    return "ArrayBuffer" === tsTag ? "binary" : tsTag;
}
function getUint8Array(a) {
    return _instanceof(a, Uint8Array) ? a : ArrayBuffer.isView(a) ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength) : new Uint8Array(a);
}
var Collection = function() {
    var Collection2 = function Collection2() {};
    return Collection2.prototype._read = function(fn, cb) {
        var ctx = this._ctx;
        return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
    }, Collection2.prototype._write = function(fn) {
        var ctx = this._ctx;
        return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
    }, Collection2.prototype._addAlgorithm = function(fn) {
        var ctx = this._ctx;
        ctx.algorithm = combine(ctx.algorithm, fn);
    }, Collection2.prototype._iterate = function(fn, coreTrans) {
        return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
    }, Collection2.prototype.clone = function(props2) {
        var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
        return props2 && extend(ctx, props2), rv._ctx = ctx, rv;
    }, Collection2.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
    }, Collection2.prototype.each = function(fn) {
        var ctx = this._ctx;
        return this._read(function(trans) {
            return iter(ctx, fn, trans, ctx.table.core);
        });
    }, Collection2.prototype.count = function(cb) {
        var _this = this;
        return this._read(function(trans) {
            var ctx = _this._ctx, coreTable = ctx.table.core;
            if (isPlainKeyRange(ctx, !0)) return coreTable.count({
                trans: trans,
                query: {
                    index: getIndexOrStore(ctx, coreTable.schema),
                    range: ctx.range
                }
            }).then(function(count2) {
                return Math.min(count2, ctx.limit);
            });
            var count = 0;
            return iter(ctx, function() {
                return ++count, !1;
            }, trans, coreTable).then(function() {
                return count;
            });
        }).then(cb);
    }, Collection2.prototype.sortBy = function(keyPath, cb) {
        var sorter = function sorter(a, b) {
            var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
            return aVal < bVal ? -order : aVal > bVal ? order : 0;
        };
        var parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
        function getval(obj, i) {
            return i ? getval(obj[parts[i]], i - 1) : obj[lastPart];
        }
        var order = "next" === this._ctx.dir ? 1 : -1;
        return this.toArray(function(a) {
            return a.sort(sorter);
        }).then(cb);
    }, Collection2.prototype.toArray = function(cb) {
        var _this = this;
        return this._read(function(trans) {
            var ctx = _this._ctx;
            if ("next" === ctx.dir && isPlainKeyRange(ctx, !0) && ctx.limit > 0) {
                var valueMapper_1 = ctx.valueMapper, index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                    trans: trans,
                    limit: ctx.limit,
                    values: !0,
                    query: {
                        index: index,
                        range: ctx.range
                    }
                }).then(function(_a3) {
                    var result = _a3.result;
                    return valueMapper_1 ? result.map(valueMapper_1) : result;
                });
            }
            var a_1 = [];
            return iter(ctx, function(item) {
                return a_1.push(item);
            }, trans, ctx.table.core).then(function() {
                return a_1;
            });
        }, cb);
    }, Collection2.prototype.offset = function(offset) {
        var ctx = this._ctx;
        return offset <= 0 || (ctx.offset += offset, isPlainKeyRange(ctx) ? addReplayFilter(ctx, function() {
            var offsetLeft = offset;
            return function(cursor, advance) {
                return 0 === offsetLeft || (1 === offsetLeft ? (--offsetLeft, !1) : (advance(function() {
                    cursor.advance(offsetLeft), offsetLeft = 0;
                }), !1));
            };
        }) : addReplayFilter(ctx, function() {
            var offsetLeft = offset;
            return function() {
                return --offsetLeft < 0;
            };
        })), this;
    }, Collection2.prototype.limit = function(numRows) {
        return this._ctx.limit = Math.min(this._ctx.limit, numRows), addReplayFilter(this._ctx, function() {
            var rowsLeft = numRows;
            return function(cursor, advance, resolve) {
                return --rowsLeft <= 0 && advance(resolve), rowsLeft >= 0;
            };
        }, !0), this;
    }, Collection2.prototype.until = function(filterFunction, bIncludeStopEntry) {
        return addFilter(this._ctx, function(cursor, advance, resolve) {
            return !filterFunction(cursor.value) || (advance(resolve), bIncludeStopEntry);
        }), this;
    }, Collection2.prototype.first = function(cb) {
        return this.limit(1).toArray(function(a) {
            return a[0];
        }).then(cb);
    }, Collection2.prototype.last = function(cb) {
        return this.reverse().first(cb);
    }, Collection2.prototype.filter = function(filterFunction) {
        return addFilter(this._ctx, function(cursor) {
            return filterFunction(cursor.value);
        }), function addMatchFilter(ctx, fn) {
            ctx.isMatch = combine(ctx.isMatch, fn);
        }(this._ctx, filterFunction), this;
    }, Collection2.prototype.and = function(filter) {
        return this.filter(filter);
    }, Collection2.prototype.or = function(indexName) {
        return new this.db.WhereClause(this._ctx.table, indexName, this);
    }, Collection2.prototype.reverse = function() {
        return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, Collection2.prototype.desc = function() {
        return this.reverse();
    }, Collection2.prototype.eachKey = function(cb) {
        var ctx = this._ctx;
        return ctx.keysOnly = !ctx.isMatch, this.each(function(val, cursor) {
            cb(cursor.key, cursor);
        });
    }, Collection2.prototype.eachUniqueKey = function(cb) {
        return this._ctx.unique = "unique", this.eachKey(cb);
    }, Collection2.prototype.eachPrimaryKey = function(cb) {
        var ctx = this._ctx;
        return ctx.keysOnly = !ctx.isMatch, this.each(function(val, cursor) {
            cb(cursor.primaryKey, cursor);
        });
    }, Collection2.prototype.keys = function(cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function(item, cursor) {
            a.push(cursor.key);
        }).then(function() {
            return a;
        }).then(cb);
    }, Collection2.prototype.primaryKeys = function(cb) {
        var ctx = this._ctx;
        if ("next" === ctx.dir && isPlainKeyRange(ctx, !0) && ctx.limit > 0) return this._read(function(trans) {
            var index = getIndexOrStore(ctx, ctx.table.core.schema);
            return ctx.table.core.query({
                trans: trans,
                values: !1,
                limit: ctx.limit,
                query: {
                    index: index,
                    range: ctx.range
                }
            });
        }).then(function(_a3) {
            return _a3.result;
        }).then(cb);
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function(item, cursor) {
            a.push(cursor.primaryKey);
        }).then(function() {
            return a;
        }).then(cb);
    }, Collection2.prototype.uniqueKeys = function(cb) {
        return this._ctx.unique = "unique", this.keys(cb);
    }, Collection2.prototype.firstKey = function(cb) {
        return this.limit(1).keys(function(a) {
            return a[0];
        }).then(cb);
    }, Collection2.prototype.lastKey = function(cb) {
        return this.reverse().firstKey(cb);
    }, Collection2.prototype.distinct = function() {
        var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
        if (!idx || !idx.multi) return this;
        var set2 = {};
        return addFilter(this._ctx, function(cursor) {
            var strKey = cursor.primaryKey.toString(), found = hasOwn(set2, strKey);
            return set2[strKey] = !0, !found;
        }), this;
    }, Collection2.prototype.modify = function(changes) {
        var _this = this, ctx = this._ctx;
        return this._write(function(trans) {
            var modifyer;
            if ("function" == typeof changes) modifyer = changes;
            else {
                var keyPaths = keys(changes), numKeys = keyPaths.length;
                modifyer = function modifyer(item) {
                    for(var anythingModified = !1, i = 0; i < numKeys; ++i){
                        var keyPath = keyPaths[i], val = changes[keyPath];
                        getByKeyPath(item, keyPath) !== val && (setByKeyPath(item, keyPath, val), anythingModified = !0);
                    }
                    return anythingModified;
                };
            }
            var coreTable = ctx.table.core, _a3 = coreTable.schema.primaryKey, outbound = _a3.outbound, extractKey = _a3.extractKey, limit = _this.db._options.modifyChunkSize || 200, totalFailures = [], successCount = 0, failedKeys = [], applyMutateResult = function applyMutateResult(expectedCount, res) {
                var failures = res.failures, numFailures = res.numFailures;
                successCount += expectedCount - numFailures;
                for(var _i = 0, _a4 = keys(failures); _i < _a4.length; _i++){
                    var pos = _a4[_i];
                    totalFailures.push(failures[pos]);
                }
            };
            return _this.clone().primaryKeys().then(function(keys2) {
                var nextChunk = function nextChunk1(offset) {
                    var count = Math.min(limit, keys2.length - offset);
                    return coreTable.getMany({
                        trans: trans,
                        keys: keys2.slice(offset, offset + count),
                        cache: "immutable"
                    }).then(function(values) {
                        for(var addValues = [], putValues = [], putKeys = outbound ? [] : null, deleteKeys = [], i = 0; i < count; ++i){
                            var origValue = values[i], ctx_1 = {
                                value: deepClone(origValue),
                                primKey: keys2[offset + i]
                            };
                            !1 !== modifyer.call(ctx_1, ctx_1.value, ctx_1) && (null == ctx_1.value ? deleteKeys.push(keys2[offset + i]) : outbound || 0 === cmp(extractKey(origValue), extractKey(ctx_1.value)) ? (putValues.push(ctx_1.value), outbound && putKeys.push(keys2[offset + i])) : (deleteKeys.push(keys2[offset + i]), addValues.push(ctx_1.value)));
                        }
                        var criteria = isPlainKeyRange(ctx) && ctx.limit === 1 / 0 && ("function" != typeof changes || changes === deleteCallback) && {
                            index: ctx.index,
                            range: ctx.range
                        };
                        return Promise.resolve(addValues.length > 0 && coreTable.mutate({
                            trans: trans,
                            type: "add",
                            values: addValues
                        }).then(function(res) {
                            for(var pos in res.failures)deleteKeys.splice(parseInt(pos), 1);
                            applyMutateResult(addValues.length, res);
                        })).then(function() {
                            return (putValues.length > 0 || criteria && "object" == typeof changes) && coreTable.mutate({
                                trans: trans,
                                type: "put",
                                keys: putKeys,
                                values: putValues,
                                criteria: criteria,
                                changeSpec: "function" != typeof changes && changes
                            }).then(function(res) {
                                return applyMutateResult(putValues.length, res);
                            });
                        }).then(function() {
                            return (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
                                trans: trans,
                                type: "delete",
                                keys: deleteKeys,
                                criteria: criteria
                            }).then(function(res) {
                                return applyMutateResult(deleteKeys.length, res);
                            });
                        }).then(function() {
                            return keys2.length > offset + count && nextChunk(offset + limit);
                        });
                    });
                };
                return nextChunk(0).then(function() {
                    if (totalFailures.length > 0) throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                    return keys2.length;
                });
            });
        });
    }, Collection2.prototype.delete = function() {
        var ctx = this._ctx, range = ctx.range;
        return isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || 3 === range.type) ? this._write(function(trans) {
            var primaryKey = ctx.table.core.schema.primaryKey, coreRange = range;
            return ctx.table.core.count({
                trans: trans,
                query: {
                    index: primaryKey,
                    range: coreRange
                }
            }).then(function(count) {
                return ctx.table.core.mutate({
                    trans: trans,
                    type: "deleteRange",
                    range: coreRange
                }).then(function(_a3) {
                    var failures = _a3.failures;
                    _a3.lastResult, _a3.results;
                    var numFailures = _a3.numFailures;
                    if (numFailures) throw new ModifyError("Could not delete some values", Object.keys(failures).map(function(pos) {
                        return failures[pos];
                    }), count - numFailures);
                    return count - numFailures;
                });
            });
        }) : this.modify(deleteCallback);
    }, Collection2;
}(), deleteCallback = function deleteCallback(value, ctx) {
    return ctx.value = null;
};
function simpleCompare(a, b) {
    return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
}
function fail(collectionOrWhereClause, err, T) {
    var collection = _instanceof(collectionOrWhereClause, WhereClause) ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
    return collection._ctx.error = T ? new T(err) : new TypeError(err), collection;
}
function emptyCollection(whereClause) {
    return new whereClause.Collection(whereClause, function() {
        return rangeEqual("");
    }).limit(0);
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
    for(var length = Math.min(key.length, lowerNeedle.length), llp = -1, i = 0; i < length; ++i){
        var lwrKeyChar = lowerKey[i];
        if (lwrKeyChar !== lowerNeedle[i]) return cmp2(key[i], upperNeedle[i]) < 0 ? key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1) : cmp2(key[i], lowerNeedle[i]) < 0 ? key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1) : llp >= 0 ? key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1) : null;
        cmp2(key[i], lwrKeyChar) < 0 && (llp = i);
    }
    return length < lowerNeedle.length && "next" === dir ? key + upperNeedle.substr(key.length) : length < key.length && "prev" === dir ? key.substr(0, upperNeedle.length) : llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
    var initDirection = function initDirection(dir) {
        upper = function upperFactory(dir) {
            return "next" === dir ? function(s) {
                return s.toUpperCase();
            } : function(s) {
                return s.toLowerCase();
            };
        }(dir), lower = function lowerFactory(dir) {
            return "next" === dir ? function(s) {
                return s.toLowerCase();
            } : function(s) {
                return s.toUpperCase();
            };
        }(dir), compare = "next" === dir ? simpleCompare : simpleCompareReverse;
        var needleBounds = needles.map(function(needle) {
            return {
                lower: lower(needle),
                upper: upper(needle)
            };
        }).sort(function(a, b) {
            return compare(a.lower, b.lower);
        });
        upperNeedles = needleBounds.map(function(nb) {
            return nb.upper;
        }), lowerNeedles = needleBounds.map(function(nb) {
            return nb.lower;
        }), direction = dir, nextKeySuffix = "next" === dir ? "" : suffix;
    };
    var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
    if (!needles.every(function(s) {
        return "string" == typeof s;
    })) return fail(whereClause, "String expected.");
    initDirection("next");
    var c = new whereClause.Collection(whereClause, function() {
        return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
    });
    c._ondirectionchange = function(direction2) {
        initDirection(direction2);
    };
    var firstPossibleNeedle = 0;
    return c._addAlgorithm(function(cursor, advance, resolve) {
        var key = cursor.key;
        if ("string" != typeof key) return !1;
        var lowerKey = lower(key);
        if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) return !0;
        for(var lowestPossibleCasing = null, i = firstPossibleNeedle; i < needlesLen; ++i){
            var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
            null === casing && null === lowestPossibleCasing ? firstPossibleNeedle = i + 1 : (null === lowestPossibleCasing || compare(lowestPossibleCasing, casing) > 0) && (lowestPossibleCasing = casing);
        }
        return advance(null !== lowestPossibleCasing ? function() {
            cursor.continue(lowestPossibleCasing + nextKeySuffix);
        } : resolve), !1;
    }), c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
    return {
        type: 2,
        lower: lower,
        upper: upper,
        lowerOpen: lowerOpen,
        upperOpen: upperOpen
    };
}
function rangeEqual(value) {
    return {
        type: 1,
        lower: value,
        upper: value
    };
}
var WhereClause = function() {
    var WhereClause2 = function WhereClause2() {};
    return Object.defineProperty(WhereClause2.prototype, "Collection", {
        get: function get() {
            return this._ctx.table.db.Collection;
        },
        enumerable: !1,
        configurable: !0
    }), WhereClause2.prototype.between = function(lower, upper, includeLower, includeUpper) {
        includeLower = !1 !== includeLower, includeUpper = !0 === includeUpper;
        try {
            return this._cmp(lower, upper) > 0 || 0 === this._cmp(lower, upper) && (includeLower || includeUpper) && (!includeLower || !includeUpper) ? emptyCollection(this) : new this.Collection(this, function() {
                return createRange(lower, upper, !includeLower, !includeUpper);
            });
        } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
    }, WhereClause2.prototype.equals = function(value) {
        return null == value ? fail(this, INVALID_KEY_ARGUMENT) : new this.Collection(this, function() {
            return rangeEqual(value);
        });
    }, WhereClause2.prototype.above = function(value) {
        return null == value ? fail(this, INVALID_KEY_ARGUMENT) : new this.Collection(this, function() {
            return createRange(value, void 0, !0);
        });
    }, WhereClause2.prototype.aboveOrEqual = function(value) {
        return null == value ? fail(this, INVALID_KEY_ARGUMENT) : new this.Collection(this, function() {
            return createRange(value, void 0, !1);
        });
    }, WhereClause2.prototype.below = function(value) {
        return null == value ? fail(this, INVALID_KEY_ARGUMENT) : new this.Collection(this, function() {
            return createRange(void 0, value, !1, !0);
        });
    }, WhereClause2.prototype.belowOrEqual = function(value) {
        return null == value ? fail(this, INVALID_KEY_ARGUMENT) : new this.Collection(this, function() {
            return createRange(void 0, value);
        });
    }, WhereClause2.prototype.startsWith = function(str) {
        return "string" != typeof str ? fail(this, "String expected.") : this.between(str, str + maxString, !0, !0);
    }, WhereClause2.prototype.startsWithIgnoreCase = function(str) {
        return "" === str ? this.startsWith(str) : addIgnoreCaseAlgorithm(this, function(x, a) {
            return 0 === x.indexOf(a[0]);
        }, [
            str
        ], maxString);
    }, WhereClause2.prototype.equalsIgnoreCase = function(str) {
        return addIgnoreCaseAlgorithm(this, function(x, a) {
            return x === a[0];
        }, [
            str
        ], "");
    }, WhereClause2.prototype.anyOfIgnoreCase = function() {
        var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        return 0 === set2.length ? emptyCollection(this) : addIgnoreCaseAlgorithm(this, function(x, a) {
            return -1 !== a.indexOf(x);
        }, set2, "");
    }, WhereClause2.prototype.startsWithAnyOfIgnoreCase = function() {
        var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        return 0 === set2.length ? emptyCollection(this) : addIgnoreCaseAlgorithm(this, function(x, a) {
            return a.some(function(n) {
                return 0 === x.indexOf(n);
            });
        }, set2, maxString);
    }, WhereClause2.prototype.anyOf = function() {
        var _this = this, set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments), compare = this._cmp;
        try {
            set2.sort(compare);
        } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        if (0 === set2.length) return emptyCollection(this);
        var c = new this.Collection(this, function() {
            return createRange(set2[0], set2[set2.length - 1]);
        });
        c._ondirectionchange = function(direction) {
            compare = "next" === direction ? _this._ascending : _this._descending, set2.sort(compare);
        };
        var i = 0;
        return c._addAlgorithm(function(cursor, advance, resolve) {
            for(var key = cursor.key; compare(key, set2[i]) > 0;)if (++i === set2.length) return advance(resolve), !1;
            return 0 === compare(key, set2[i]) || (advance(function() {
                cursor.continue(set2[i]);
            }), !1);
        }), c;
    }, WhereClause2.prototype.notEqual = function(value) {
        return this.inAnyRange([
            [
                -1 / 0,
                value
            ],
            [
                value,
                this.db._maxKey
            ]
        ], {
            includeLowers: !1,
            includeUppers: !1
        });
    }, WhereClause2.prototype.noneOf = function() {
        var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (0 === set2.length) return new this.Collection(this);
        try {
            set2.sort(this._ascending);
        } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        var ranges = set2.reduce(function(res, val) {
            return res ? res.concat([
                [
                    res[res.length - 1][1],
                    val
                ]
            ]) : [
                [
                    -1 / 0,
                    val
                ]
            ];
        }, null);
        return ranges.push([
            set2[set2.length - 1],
            this.db._maxKey
        ]), this.inAnyRange(ranges, {
            includeLowers: !1,
            includeUppers: !1
        });
    }, WhereClause2.prototype.inAnyRange = function(ranges, options) {
        var rangeSorter = function rangeSorter(a, b) {
            return sortDirection(a[0], b[0]);
        };
        var _this = this, cmp2 = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
        if (0 === ranges.length) return emptyCollection(this);
        if (!ranges.every(function(range) {
            return void 0 !== range[0] && void 0 !== range[1] && ascending(range[0], range[1]) <= 0;
        })) return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
        var includeLowers = !options || !1 !== options.includeLowers, includeUppers = options && !0 === options.includeUppers;
        var set2, sortDirection = ascending;
        try {
            (set2 = ranges.reduce(function addRange2(ranges2, newRange) {
                for(var i = 0, l = ranges2.length; i < l; ++i){
                    var range = ranges2[i];
                    if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
                        range[0] = min(range[0], newRange[0]), range[1] = max(range[1], newRange[1]);
                        break;
                    }
                }
                return i === l && ranges2.push(newRange), ranges2;
            }, [])).sort(rangeSorter);
        } catch (ex) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        var rangePos = 0, keyIsBeyondCurrentEntry = includeUppers ? function keyIsBeyondCurrentEntry(key) {
            return ascending(key, set2[rangePos][1]) > 0;
        } : function(key) {
            return ascending(key, set2[rangePos][1]) >= 0;
        }, keyIsBeforeCurrentEntry = includeLowers ? function keyIsBeforeCurrentEntry(key) {
            return descending(key, set2[rangePos][0]) > 0;
        } : function(key) {
            return descending(key, set2[rangePos][0]) >= 0;
        };
        var checkKey = keyIsBeyondCurrentEntry, c = new this.Collection(this, function() {
            return createRange(set2[0][0], set2[set2.length - 1][1], !includeLowers, !includeUppers);
        });
        return c._ondirectionchange = function(direction) {
            "next" === direction ? (checkKey = keyIsBeyondCurrentEntry, sortDirection = ascending) : (checkKey = keyIsBeforeCurrentEntry, sortDirection = descending), set2.sort(rangeSorter);
        }, c._addAlgorithm(function(cursor, advance, resolve) {
            for(var key = cursor.key; checkKey(key);)if (++rangePos === set2.length) return advance(resolve), !1;
            return !!function keyWithinCurrentRange(key) {
                return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
            }(key) || (0 === _this._cmp(key, set2[rangePos][1]) || 0 === _this._cmp(key, set2[rangePos][0]) || advance(function() {
                sortDirection === ascending ? cursor.continue(set2[rangePos][0]) : cursor.continue(set2[rangePos][1]);
            }), !1);
        }), c;
    }, WhereClause2.prototype.startsWithAnyOf = function() {
        var set2 = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        return set2.every(function(s) {
            return "string" == typeof s;
        }) ? 0 === set2.length ? emptyCollection(this) : this.inAnyRange(set2.map(function(str) {
            return [
                str,
                str + maxString
            ];
        })) : fail(this, "startsWithAnyOf() only works with strings");
    }, WhereClause2;
}();
function eventRejectHandler(reject) {
    return wrap(function(event) {
        return preventDefault(event), reject(event.target.error), !1;
    });
}
function preventDefault(event) {
    event.stopPropagation && event.stopPropagation(), event.preventDefault && event.preventDefault();
}
var globalEvents = Events(null, "storagemutated"), Transaction = function() {
    var Transaction2 = function Transaction2() {};
    return Transaction2.prototype._lock = function() {
        return assert(!PSD.global), ++this._reculock, 1 !== this._reculock || PSD.global || (PSD.lockOwnerFor = this), this;
    }, Transaction2.prototype._unlock = function() {
        if (assert(!PSD.global), 0 == --this._reculock) for(PSD.global || (PSD.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();){
            var fnAndPSD = this._blockedFuncs.shift();
            try {
                usePSD(fnAndPSD[1], fnAndPSD[0]);
            } catch (e) {}
        }
        return this;
    }, Transaction2.prototype._locked = function() {
        return this._reculock && PSD.lockOwnerFor !== this;
    }, Transaction2.prototype.create = function(idbtrans) {
        var _this = this;
        if (!this.mode) return this;
        var idbdb = this.db.idbdb, dbOpenError = this.db._state.dbOpenError;
        if (assert(!this.idbtrans), !idbtrans && !idbdb) switch(dbOpenError && dbOpenError.name){
            case "DatabaseClosedError":
                throw new exceptions.DatabaseClosed(dbOpenError);
            case "MissingAPIError":
                throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
            default:
                throw new exceptions.OpenFailed(dbOpenError);
        }
        if (!this.active) throw new exceptions.TransactionInactive;
        return assert(null === this._completion._state), (idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
            durability: this.chromeTransactionDurability
        }) : idbdb.transaction(this.storeNames, this.mode, {
            durability: this.chromeTransactionDurability
        }))).onerror = wrap(function(ev) {
            preventDefault(ev), _this._reject(idbtrans.error);
        }), idbtrans.onabort = wrap(function(ev) {
            preventDefault(ev), _this.active && _this._reject(new exceptions.Abort(idbtrans.error)), _this.active = !1, _this.on("abort").fire(ev);
        }), idbtrans.oncomplete = wrap(function() {
            _this.active = !1, _this._resolve(), "mutatedParts" in idbtrans && globalEvents.storagemutated.fire(idbtrans.mutatedParts);
        }), this;
    }, Transaction2.prototype._promise = function(mode, fn, bWriteLock) {
        var _this = this;
        if ("readwrite" === mode && "readwrite" !== this.mode) return rejection(new exceptions.ReadOnly("Transaction is readonly"));
        if (!this.active) return rejection(new exceptions.TransactionInactive);
        if (this._locked()) return new DexiePromise(function(resolve, reject) {
            _this._blockedFuncs.push([
                function() {
                    _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                },
                PSD
            ]);
        });
        if (bWriteLock) return newScope(function() {
            var p3 = new DexiePromise(function(resolve, reject) {
                _this._lock();
                var rv = fn(resolve, reject, _this);
                rv && rv.then && rv.then(resolve, reject);
            });
            return p3.finally(function() {
                return _this._unlock();
            }), p3._lib = !0, p3;
        });
        var p2 = new DexiePromise(function(resolve, reject) {
            var rv = fn(resolve, reject, _this);
            rv && rv.then && rv.then(resolve, reject);
        });
        return p2._lib = !0, p2;
    }, Transaction2.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
    }, Transaction2.prototype.waitFor = function(promiseLike) {
        var root = this._root(), promise = DexiePromise.resolve(promiseLike);
        if (root._waitingFor) root._waitingFor = root._waitingFor.then(function() {
            return promise;
        });
        else {
            root._waitingFor = promise, root._waitingQueue = [];
            var store = root.idbtrans.objectStore(root.storeNames[0]);
            !function spin() {
                for(++root._spinCount; root._waitingQueue.length;)root._waitingQueue.shift()();
                root._waitingFor && (store.get(-1 / 0).onsuccess = spin);
            }();
        }
        var currentWaitPromise = root._waitingFor;
        return new DexiePromise(function(resolve, reject) {
            promise.then(function(res) {
                return root._waitingQueue.push(wrap(resolve.bind(null, res)));
            }, function(err) {
                return root._waitingQueue.push(wrap(reject.bind(null, err)));
            }).finally(function() {
                root._waitingFor === currentWaitPromise && (root._waitingFor = null);
            });
        });
    }, Transaction2.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new exceptions.Abort));
    }, Transaction2.prototype.table = function(tableName) {
        var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
        if (hasOwn(memoizedTables, tableName)) return memoizedTables[tableName];
        var tableSchema = this.schema[tableName];
        if (!tableSchema) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
        var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
        return transactionBoundTable.core = this.db.core.table(tableName), memoizedTables[tableName] = transactionBoundTable, transactionBoundTable;
    }, Transaction2;
}();
function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
    return {
        name: name,
        keyPath: keyPath,
        unique: unique,
        multi: multi,
        auto: auto,
        compound: compound,
        src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
    };
}
function nameFromKeyPath(keyPath) {
    return "string" == typeof keyPath ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
}
function createTableSchema(name, primKey, indexes) {
    return {
        name: name,
        primKey: primKey,
        indexes: indexes,
        mappedClass: null,
        idxByName: arrayToObject(indexes, function(index) {
            return [
                index.name,
                index
            ];
        })
    };
}
var getMaxKey = function getMaxKey1(IdbKeyRange) {
    try {
        return IdbKeyRange.only([
            []
        ]), getMaxKey = function getMaxKey() {
            return [
                []
            ];
        }, [
            []
        ];
    } catch (e) {
        return getMaxKey = function getMaxKey() {
            return maxString;
        }, maxString;
    }
};
function getKeyExtractor(keyPath) {
    return null == keyPath ? function() {} : "string" == typeof keyPath ? function getSinglePathKeyExtractor(keyPath) {
        var split = keyPath.split(".");
        return 1 === split.length ? function(obj) {
            return obj[keyPath];
        } : function(obj) {
            return getByKeyPath(obj, keyPath);
        };
    }(keyPath) : function(obj) {
        return getByKeyPath(obj, keyPath);
    };
}
function arrayify(arrayLike) {
    return [].slice.call(arrayLike);
}
var _id_counter = 0;
function getKeyPathAlias(keyPath) {
    return null == keyPath ? ":id" : "string" == typeof keyPath ? keyPath : "[" + keyPath.join("+") + "]";
}
function createDBCore(db2, IdbKeyRange, tmpTrans) {
    var makeIDBKeyRange = function makeIDBKeyRange(range) {
        if (3 === range.type) return null;
        if (4 === range.type) throw new Error("Cannot convert never type to IDBKeyRange");
        var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
        return void 0 === lower ? void 0 === upper ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : void 0 === upper ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
    };
    var _a3 = function extractSchema(db3, trans) {
        var tables2 = arrayify(db3.objectStoreNames);
        return {
            schema: {
                name: db3.name,
                tables: tables2.map(function(table) {
                    return trans.objectStore(table);
                }).map(function(store) {
                    var keyPath = store.keyPath, autoIncrement = store.autoIncrement, compound = isArray(keyPath), outbound = null == keyPath, indexByKeyPath = {}, result = {
                        name: store.name,
                        primaryKey: {
                            name: null,
                            isPrimaryKey: !0,
                            outbound: outbound,
                            compound: compound,
                            keyPath: keyPath,
                            autoIncrement: autoIncrement,
                            unique: !0,
                            extractKey: getKeyExtractor(keyPath)
                        },
                        indexes: arrayify(store.indexNames).map(function(indexName) {
                            return store.index(indexName);
                        }).map(function(index) {
                            var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath2 = index.keyPath, result2 = {
                                name: name,
                                compound: isArray(keyPath2),
                                keyPath: keyPath2,
                                unique: unique,
                                multiEntry: multiEntry,
                                extractKey: getKeyExtractor(keyPath2)
                            };
                            return indexByKeyPath[getKeyPathAlias(keyPath2)] = result2, result2;
                        }),
                        getIndexByKeyPath: function getIndexByKeyPath(keyPath2) {
                            return indexByKeyPath[getKeyPathAlias(keyPath2)];
                        }
                    };
                    return indexByKeyPath[":id"] = result.primaryKey, null != keyPath && (indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey), result;
                })
            },
            hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
        };
    }(db2, tmpTrans), schema = _a3.schema, hasGetAll = _a3.hasGetAll, tables = schema.tables.map(function(tableSchema) {
        return function createDbCoreTable(tableSchema) {
            var tableName = tableSchema.name;
            return {
                name: tableName,
                schema: tableSchema,
                mutate: function mutate(_a4) {
                    var trans = _a4.trans, type2 = _a4.type, keys2 = _a4.keys, values = _a4.values, range = _a4.range;
                    return new Promise(function(resolve, reject) {
                        resolve = wrap(resolve);
                        var store = trans.objectStore(tableName), outbound = null == store.keyPath, isAddOrPut = "put" === type2 || "add" === type2;
                        if (!isAddOrPut && "delete" !== type2 && "deleteRange" !== type2) throw new Error("Invalid operation type: " + type2);
                        var req, length = (keys2 || values || {
                            length: 1
                        }).length;
                        if (keys2 && values && keys2.length !== values.length) throw new Error("Given keys array must have same length as given values array.");
                        if (0 === length) return resolve({
                            numFailures: 0,
                            failures: {},
                            results: [],
                            lastResult: void 0
                        });
                        var reqs = [], failures = [], numFailures = 0, errorHandler = function errorHandler(event) {
                            ++numFailures, preventDefault(event);
                        };
                        if ("deleteRange" === type2) {
                            if (4 === range.type) return resolve({
                                numFailures: numFailures,
                                failures: failures,
                                results: [],
                                lastResult: void 0
                            });
                            3 === range.type ? reqs.push(req = store.clear()) : reqs.push(req = store.delete(makeIDBKeyRange(range)));
                        } else {
                            var _a5 = isAddOrPut ? outbound ? [
                                values,
                                keys2
                            ] : [
                                values,
                                null
                            ] : [
                                keys2,
                                null
                            ], args1 = _a5[0], args2 = _a5[1];
                            if (isAddOrPut) for(var i = 0; i < length; ++i)reqs.push(req = args2 && void 0 !== args2[i] ? store[type2](args1[i], args2[i]) : store[type2](args1[i])), req.onerror = errorHandler;
                            else for(i = 0; i < length; ++i)reqs.push(req = store[type2](args1[i])), req.onerror = errorHandler;
                        }
                        var done = function done(event) {
                            var lastResult = event.target.result;
                            reqs.forEach(function(req2, i2) {
                                return null != req2.error && (failures[i2] = req2.error);
                            }), resolve({
                                numFailures: numFailures,
                                failures: failures,
                                results: "delete" === type2 ? keys2 : reqs.map(function(req2) {
                                    return req2.result;
                                }),
                                lastResult: lastResult
                            });
                        };
                        req.onerror = function(event) {
                            errorHandler(event), done(event);
                        }, req.onsuccess = done;
                    });
                },
                getMany: function getMany(_a4) {
                    var trans = _a4.trans, keys2 = _a4.keys;
                    return new Promise(function(resolve, reject) {
                        resolve = wrap(resolve);
                        for(var req, store = trans.objectStore(tableName), length = keys2.length, result = new Array(length), keyCount = 0, callbackCount = 0, successHandler = function successHandler(event) {
                            var req2 = event.target;
                            result[req2._pos] = req2.result, ++callbackCount === keyCount && resolve(result);
                        }, errorHandler = eventRejectHandler(reject), i = 0; i < length; ++i)null != keys2[i] && ((req = store.get(keys2[i]))._pos = i, req.onsuccess = successHandler, req.onerror = errorHandler, ++keyCount);
                        0 === keyCount && resolve(result);
                    });
                },
                get: function get(_a4) {
                    var trans = _a4.trans, key = _a4.key;
                    return new Promise(function(resolve, reject) {
                        resolve = wrap(resolve);
                        var req = trans.objectStore(tableName).get(key);
                        req.onsuccess = function(event) {
                            return resolve(event.target.result);
                        }, req.onerror = eventRejectHandler(reject);
                    });
                },
                query: function query(hasGetAll2) {
                    return function(request) {
                        return new Promise(function(resolve, reject) {
                            resolve = wrap(resolve);
                            var trans = request.trans, values = request.values, limit = request.limit, query2 = request.query, nonInfinitLimit = limit === 1 / 0 ? void 0 : limit, index = query2.index, range = query2.range, store = trans.objectStore(tableName), source = index.isPrimaryKey ? store : store.index(index.name), idbKeyRange = makeIDBKeyRange(range);
                            if (0 === limit) return resolve({
                                result: []
                            });
                            if (hasGetAll2) {
                                var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
                                req.onsuccess = function(event) {
                                    return resolve({
                                        result: event.target.result
                                    });
                                }, req.onerror = eventRejectHandler(reject);
                            } else {
                                var count_1 = 0, req_1 = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange), result_1 = [];
                                req_1.onsuccess = function(event) {
                                    var cursor = req_1.result;
                                    return cursor ? (result_1.push(values ? cursor.value : cursor.primaryKey), ++count_1 === limit ? resolve({
                                        result: result_1
                                    }) : void cursor.continue()) : resolve({
                                        result: result_1
                                    });
                                }, req_1.onerror = eventRejectHandler(reject);
                            }
                        });
                    };
                }(hasGetAll),
                openCursor: function openCursor2(_a4) {
                    var trans = _a4.trans, values = _a4.values, query2 = _a4.query, reverse = _a4.reverse, unique = _a4.unique;
                    return new Promise(function(resolve, reject) {
                        resolve = wrap(resolve);
                        var index = query2.index, range = query2.range, store = trans.objectStore(tableName), source = index.isPrimaryKey ? store : store.index(index.name), direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next", req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
                        req.onerror = eventRejectHandler(reject), req.onsuccess = wrap(function(ev) {
                            var cursor = req.result;
                            if (cursor) {
                                cursor.___id = ++_id_counter, cursor.done = !1;
                                var _cursorContinue = cursor.continue.bind(cursor), _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                                _cursorContinuePrimaryKey && (_cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor));
                                var _cursorAdvance = cursor.advance.bind(cursor), doThrowCursorIsStopped = function doThrowCursorIsStopped() {
                                    throw new Error("Cursor not stopped");
                                };
                                cursor.trans = trans, cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = function() {
                                    throw new Error("Cursor not started");
                                }, cursor.fail = wrap(reject), cursor.next = function() {
                                    var _this = this, gotOne = 1;
                                    return this.start(function() {
                                        return gotOne-- ? _this.continue() : _this.stop();
                                    }).then(function() {
                                        return _this;
                                    });
                                }, cursor.start = function(callback) {
                                    var iterationPromise = new Promise(function(resolveIteration, rejectIteration) {
                                        resolveIteration = wrap(resolveIteration), req.onerror = eventRejectHandler(rejectIteration), cursor.fail = rejectIteration, cursor.stop = function(value) {
                                            cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped, resolveIteration(value);
                                        };
                                    }), guardedCallback = function guardedCallback() {
                                        if (req.result) try {
                                            callback();
                                        } catch (err) {
                                            cursor.fail(err);
                                        }
                                        else cursor.done = !0, cursor.start = function() {
                                            throw new Error("Cursor behind last entry");
                                        }, cursor.stop();
                                    };
                                    return req.onsuccess = wrap(function(ev2) {
                                        req.onsuccess = guardedCallback, guardedCallback();
                                    }), cursor.continue = _cursorContinue, cursor.continuePrimaryKey = _cursorContinuePrimaryKey, cursor.advance = _cursorAdvance, guardedCallback(), iterationPromise;
                                }, resolve(cursor);
                            } else resolve(null);
                        }, reject);
                    });
                },
                count: function count(_a4) {
                    var query2 = _a4.query, trans = _a4.trans, index = query2.index, range = query2.range;
                    return new Promise(function(resolve, reject) {
                        var store = trans.objectStore(tableName), source = index.isPrimaryKey ? store : store.index(index.name), idbKeyRange = makeIDBKeyRange(range), req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                        req.onsuccess = wrap(function(ev) {
                            return resolve(ev.target.result);
                        }), req.onerror = eventRejectHandler(reject);
                    });
                }
            };
        }(tableSchema);
    }), tableMap = {};
    return tables.forEach(function(table) {
        return tableMap[table.name] = table;
    }), {
        stack: "dbcore",
        transaction: db2.transaction.bind(db2),
        table: function table(name) {
            if (!tableMap[name]) throw new Error("Table '" + name + "' not found");
            return tableMap[name];
        },
        MIN_KEY: -1 / 0,
        MAX_KEY: getMaxKey(IdbKeyRange),
        schema: schema
    };
}
function createMiddlewareStacks(middlewares, idbdb, _a3, tmpTrans) {
    var IDBKeyRange = _a3.IDBKeyRange;
    _a3.indexedDB;
    var dbcore = function createMiddlewareStack(stackImpl, middlewares) {
        return middlewares.reduce(function(down, _a3) {
            var create = _a3.create;
            return __assign(__assign({}, down), create(down));
        }, stackImpl);
    }(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
    return {
        dbcore: dbcore
    };
}
function generateMiddlewareStacks(_a3, tmpTrans) {
    var db2 = _a3._novip, idbdb = tmpTrans.db, stacks = createMiddlewareStacks(db2._middlewares, idbdb, db2._deps, tmpTrans);
    db2.core = stacks.dbcore, db2.tables.forEach(function(table) {
        var tableName = table.name;
        db2.core.schema.tables.some(function(tbl) {
            return tbl.name === tableName;
        }) && (table.core = db2.core.table(tableName), _instanceof(db2[tableName], db2.Table) && (db2[tableName].core = table.core));
    });
}
function setApiOnPlace(_a3, objs, tableNames, dbschema) {
    var db2 = _a3._novip;
    tableNames.forEach(function(tableName) {
        var schema = dbschema[tableName];
        objs.forEach(function(obj) {
            var propDesc = getPropertyDescriptor(obj, tableName);
            (!propDesc || "value" in propDesc && void 0 === propDesc.value) && (obj === db2.Transaction.prototype || _instanceof(obj, db2.Transaction) ? setProp(obj, tableName, {
                get: function get() {
                    return this.table(tableName);
                },
                set: function set(value) {
                    defineProperty(this, tableName, {
                        value: value,
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    });
                }
            }) : obj[tableName] = new db2.Table(tableName, schema));
        });
    });
}
function removeTablesApi(_a3, objs) {
    var db2 = _a3._novip;
    objs.forEach(function(obj) {
        for(var key in obj)_instanceof(obj[key], db2.Table) && delete obj[key];
    });
}
function lowerVersionFirst(a, b) {
    return a._cfg.version - b._cfg.version;
}
function runUpgraders(db2, oldVersion, idbUpgradeTrans, reject) {
    var globalSchema = db2._dbSchema, trans = db2._createTransaction("readwrite", db2._storeNames, globalSchema);
    trans.create(idbUpgradeTrans), trans._completion.catch(reject);
    var rejectTransaction = trans._reject.bind(trans), transless = PSD.transless || PSD;
    newScope(function() {
        PSD.trans = trans, PSD.transless = transless, 0 === oldVersion ? (keys(globalSchema).forEach(function(tableName) {
            createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
        }), generateMiddlewareStacks(db2, idbUpgradeTrans), DexiePromise.follow(function() {
            return db2.on.populate.fire(trans);
        }).catch(rejectTransaction)) : (function updateTablesAndIndexes(_a3, oldVersion, trans, idbUpgradeTrans) {
            var _$db2 = _a3._novip, queue2 = [], versions = _$db2._versions, globalSchema = _$db2._dbSchema = buildGlobalSchema(_$db2, _$db2.idbdb, idbUpgradeTrans), anyContentUpgraderHasRun = !1, versToRun = versions.filter(function(v1) {
                return v1._cfg.version >= oldVersion;
            });
            function runQueue() {
                return queue2.length ? DexiePromise.resolve(queue2.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
            }
            return versToRun.forEach(function(version2) {
                queue2.push(function() {
                    var oldSchema = globalSchema, newSchema = version2._cfg.dbschema;
                    adjustToExistingIndexNames(_$db2, oldSchema, idbUpgradeTrans), adjustToExistingIndexNames(_$db2, newSchema, idbUpgradeTrans), globalSchema = _$db2._dbSchema = newSchema;
                    var diff = getSchemaDiff(oldSchema, newSchema);
                    diff.add.forEach(function(tuple) {
                        createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
                    }), diff.change.forEach(function(change) {
                        if (change.recreate) throw new exceptions.Upgrade("Not yet support for changing primary key");
                        var store_1 = idbUpgradeTrans.objectStore(change.name);
                        change.add.forEach(function(idx) {
                            return addIndex(store_1, idx);
                        }), change.change.forEach(function(idx) {
                            store_1.deleteIndex(idx.name), addIndex(store_1, idx);
                        }), change.del.forEach(function(idxName) {
                            return store_1.deleteIndex(idxName);
                        });
                    });
                    var contentUpgrade = version2._cfg.contentUpgrade;
                    if (contentUpgrade && version2._cfg.version > oldVersion) {
                        generateMiddlewareStacks(_$db2, idbUpgradeTrans), trans._memoizedTables = {}, anyContentUpgraderHasRun = !0;
                        var upgradeSchema_1 = shallowClone(newSchema);
                        diff.del.forEach(function(table) {
                            upgradeSchema_1[table] = oldSchema[table];
                        }), removeTablesApi(_$db2, [
                            _$db2.Transaction.prototype
                        ]), setApiOnPlace(_$db2, [
                            _$db2.Transaction.prototype
                        ], keys(upgradeSchema_1), upgradeSchema_1), trans.schema = upgradeSchema_1;
                        var returnValue_1, contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
                        contentUpgradeIsAsync_1 && incrementExpectedAwaits();
                        var promiseFollowed = DexiePromise.follow(function() {
                            if ((returnValue_1 = contentUpgrade(trans)) && contentUpgradeIsAsync_1) {
                                var decrementor = decrementExpectedAwaits.bind(null, null);
                                returnValue_1.then(decrementor, decrementor);
                            }
                        });
                        return returnValue_1 && "function" == typeof returnValue_1.then ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function() {
                            return returnValue_1;
                        });
                    }
                }), queue2.push(function(idbtrans) {
                    anyContentUpgraderHasRun && hasIEDeleteObjectStoreBug || function deleteRemovedTables(newSchema, idbtrans) {
                        [].slice.call(idbtrans.db.objectStoreNames).forEach(function(storeName) {
                            return null == newSchema[storeName] && idbtrans.db.deleteObjectStore(storeName);
                        });
                    }(version2._cfg.dbschema, idbtrans);
                    removeTablesApi(_$db2, [
                        _$db2.Transaction.prototype
                    ]), setApiOnPlace(_$db2, [
                        _$db2.Transaction.prototype
                    ], _$db2._storeNames, _$db2._dbSchema), trans.schema = _$db2._dbSchema;
                });
            }), runQueue().then(function() {
                !function createMissingTables(newSchema, idbtrans) {
                    keys(newSchema).forEach(function(tableName) {
                        idbtrans.db.objectStoreNames.contains(tableName) || createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
                    });
                }(globalSchema, idbUpgradeTrans);
            });
        })(db2, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
    });
}
function getSchemaDiff(oldSchema, newSchema) {
    var table, diff = {
        del: [],
        add: [],
        change: []
    };
    for(table in oldSchema)newSchema[table] || diff.del.push(table);
    for(table in newSchema){
        var oldDef = oldSchema[table], newDef = newSchema[table];
        if (oldDef) {
            var change = {
                name: table,
                def: newDef,
                recreate: !1,
                del: [],
                add: [],
                change: []
            };
            if ("" + (oldDef.primKey.keyPath || "") != "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) change.recreate = !0, diff.change.push(change);
            else {
                var oldIndexes = oldDef.idxByName, newIndexes = newDef.idxByName, idxName = void 0;
                for(idxName in oldIndexes)newIndexes[idxName] || change.del.push(idxName);
                for(idxName in newIndexes){
                    var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                    oldIdx ? oldIdx.src !== newIdx.src && change.change.push(newIdx) : change.add.push(newIdx);
                }
                (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) && diff.change.push(change);
            }
        } else diff.add.push([
            table,
            newDef
        ]);
    }
    return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
    var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
        keyPath: primKey.keyPath,
        autoIncrement: primKey.auto
    } : {
        autoIncrement: primKey.auto
    });
    return indexes.forEach(function(idx) {
        return addIndex(store, idx);
    }), store;
}
function addIndex(store, idx) {
    store.createIndex(idx.name, idx.keyPath, {
        unique: idx.unique,
        multiEntry: idx.multi
    });
}
function buildGlobalSchema(db2, idbdb, tmpTrans) {
    var globalSchema = {};
    return slice(idbdb.objectStoreNames, 0).forEach(function(storeName) {
        for(var store = tmpTrans.objectStore(storeName), keyPath = store.keyPath, primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", !1, !1, !!store.autoIncrement, keyPath && "string" != typeof keyPath, !0), indexes = [], j = 0; j < store.indexNames.length; ++j){
            var idbindex = store.index(store.indexNames[j]);
            keyPath = idbindex.keyPath;
            var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, !1, keyPath && "string" != typeof keyPath, !1);
            indexes.push(index);
        }
        globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
    }), globalSchema;
}
function adjustToExistingIndexNames(_a3, schema, idbtrans) {
    for(var db2 = _a3._novip, storeNames = idbtrans.db.objectStoreNames, i = 0; i < storeNames.length; ++i){
        var storeName = storeNames[i], store = idbtrans.objectStore(storeName);
        db2._hasGetAll = "getAll" in store;
        for(var j = 0; j < store.indexNames.length; ++j){
            var indexName = store.indexNames[j], keyPath = store.index(indexName).keyPath, dexieName = "string" == typeof keyPath ? keyPath : "[" + slice(keyPath).join("+") + "]";
            if (schema[storeName]) {
                var indexSpec = schema[storeName].idxByName[dexieName];
                indexSpec && (indexSpec.name = indexName, delete schema[storeName].idxByName[dexieName], schema[storeName].idxByName[indexName] = indexSpec);
            }
        }
    }
    "undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _instanceof(_global, _global.WorkerGlobalScope) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (db2._hasGetAll = !1);
}
var Version = function() {
    var Version2 = function Version2() {};
    return Version2.prototype._parseStoresSpec = function(stores, outSchema) {
        keys(stores).forEach(function(tableName) {
            if (null !== stores[tableName]) {
                var indexes = function parseIndexSyntax(primKeyAndIndexes) {
                    return primKeyAndIndexes.split(",").map(function(index, indexNum) {
                        var name = (index = index.trim()).replace(/([&*]|\+\+)/g, ""), keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
                        return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), 0 === indexNum);
                    });
                }(stores[tableName]), primKey = indexes.shift();
                if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
                indexes.forEach(function(idx) {
                    if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                    if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                }), outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
            }
        });
    }, Version2.prototype.stores = function(stores) {
        var db2 = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
        var versions = db2._versions, storesSpec = {}, dbschema = {};
        return versions.forEach(function(version2) {
            extend(storesSpec, version2._cfg.storesSource), dbschema = version2._cfg.dbschema = {}, version2._parseStoresSpec(storesSpec, dbschema);
        }), db2._dbSchema = dbschema, removeTablesApi(db2, [
            db2._allTables,
            db2,
            db2.Transaction.prototype
        ]), setApiOnPlace(db2, [
            db2._allTables,
            db2,
            db2.Transaction.prototype,
            this._cfg.tables
        ], keys(dbschema), dbschema), db2._storeNames = keys(dbschema), this;
    }, Version2.prototype.upgrade = function(upgradeFunction) {
        return this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction), this;
    }, Version2;
}();
function getDbNamesTable(indexedDB2, IDBKeyRange) {
    var dbNamesDB = indexedDB2._dbNamesDB;
    return dbNamesDB || (dbNamesDB = indexedDB2._dbNamesDB = new Dexie$1("__dbnames", {
        addons: [],
        indexedDB: indexedDB2,
        IDBKeyRange: IDBKeyRange
    })).version(1).stores({
        dbnames: "name"
    }), dbNamesDB.table("dbnames");
}
function hasDatabasesNative(indexedDB2) {
    return indexedDB2 && "function" == typeof indexedDB2.databases;
}
function _onDatabaseDeleted(_a3, name) {
    var indexedDB2 = _a3.indexedDB, IDBKeyRange = _a3.IDBKeyRange;
    !hasDatabasesNative(indexedDB2) && "__dbnames" !== name && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
}
function vip(fn) {
    return newScope(function() {
        return PSD.letThrough = !0, fn();
    });
}
function dexieOpen(db2) {
    var throwIfCancelled = function throwIfCancelled() {
        if (state.openCanceller !== openCanceller) throw new exceptions.DatabaseClosed("db.open() was cancelled");
    };
    var state = db2._state, indexedDB2 = db2._deps.indexedDB;
    if (state.isBeingOpened || db2.idbdb) return state.dbReadyPromise.then(function() {
        return state.dbOpenError ? rejection(state.dbOpenError) : db2;
    });
    debug && (state.openCanceller._stackHolder = getErrorWithStack()), state.isBeingOpened = !0, state.dbOpenError = null, state.openComplete = !1;
    var openCanceller = state.openCanceller;
    var intervalId, resolveDbReady = state.dbReadyResolve, upgradeTransaction = null, wasCreated = !1;
    return DexiePromise.race([
        openCanceller,
        ("undefined" == typeof navigator ? DexiePromise.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(resolve) {
            var tryIdb = function tryIdb() {
                return indexedDB.databases().finally(resolve);
            };
            intervalId = setInterval(tryIdb, 100), tryIdb();
        }).finally(function() {
            return clearInterval(intervalId);
        }) : Promise.resolve()).then(function() {
            return new DexiePromise(function(resolve, reject) {
                if (throwIfCancelled(), !indexedDB2) throw new exceptions.MissingAPI;
                var dbName = db2.name, req = state.autoSchema ? indexedDB2.open(dbName) : indexedDB2.open(dbName, Math.round(10 * db2.verno));
                if (!req) throw new exceptions.MissingAPI;
                req.onerror = eventRejectHandler(reject), req.onblocked = wrap(db2._fireOnBlocked), req.onupgradeneeded = wrap(function(e) {
                    if (upgradeTransaction = req.transaction, state.autoSchema && !db2._options.allowEmptyDB) {
                        req.onerror = preventDefault, upgradeTransaction.abort(), req.result.close();
                        var delreq = indexedDB2.deleteDatabase(dbName);
                        delreq.onsuccess = delreq.onerror = wrap(function() {
                            reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
                        });
                    } else {
                        upgradeTransaction.onerror = eventRejectHandler(reject);
                        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                        wasCreated = oldVer < 1, db2._novip.idbdb = req.result, runUpgraders(db2, oldVer / 10, upgradeTransaction, reject);
                    }
                }, reject), req.onsuccess = wrap(function() {
                    upgradeTransaction = null;
                    var idbdb = db2._novip.idbdb = req.result, objectStoreNames = slice(idbdb.objectStoreNames);
                    if (objectStoreNames.length > 0) try {
                        var tmpTrans = idbdb.transaction(function safariMultiStoreFix(storeNames) {
                            return 1 === storeNames.length ? storeNames[0] : storeNames;
                        }(objectStoreNames), "readonly");
                        state.autoSchema ? function readGlobalSchema(_a3, idbdb, tmpTrans) {
                            var _$db2 = _a3._novip;
                            _$db2.verno = idbdb.version / 10;
                            var globalSchema = _$db2._dbSchema = buildGlobalSchema(0, idbdb, tmpTrans);
                            _$db2._storeNames = slice(idbdb.objectStoreNames, 0), setApiOnPlace(_$db2, [
                                _$db2._allTables
                            ], keys(globalSchema), globalSchema);
                        }(db2, idbdb, tmpTrans) : (adjustToExistingIndexNames(db2, db2._dbSchema, tmpTrans), function verifyInstalledSchema(db2, tmpTrans) {
                            var diff = getSchemaDiff(buildGlobalSchema(0, db2.idbdb, tmpTrans), db2._dbSchema);
                            return !(diff.add.length || diff.change.some(function(ch) {
                                return ch.add.length || ch.change.length;
                            }));
                        }(db2, tmpTrans) || console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")), generateMiddlewareStacks(db2, tmpTrans);
                    } catch (e) {}
                    connections.push(db2), idbdb.onversionchange = wrap(function(ev) {
                        state.vcFired = !0, db2.on("versionchange").fire(ev);
                    }), idbdb.onclose = wrap(function(ev) {
                        db2.on("close").fire(ev);
                    }), wasCreated && function _onDatabaseCreated(_a3, name) {
                        var indexedDB2 = _a3.indexedDB, IDBKeyRange = _a3.IDBKeyRange;
                        !hasDatabasesNative(indexedDB2) && "__dbnames" !== name && getDbNamesTable(indexedDB2, IDBKeyRange).put({
                            name: name
                        }).catch(nop);
                    }(db2._deps, dbName), resolve();
                }, reject);
            });
        })
    ]).then(function() {
        return throwIfCancelled(), state.onReadyBeingFired = [], DexiePromise.resolve(vip(function() {
            return db2.on.ready.fire(db2.vip);
        })).then(function fireRemainders() {
            if (state.onReadyBeingFired.length > 0) {
                var remainders_1 = state.onReadyBeingFired.reduce(promisableChain, nop);
                return state.onReadyBeingFired = [], DexiePromise.resolve(vip(function() {
                    return remainders_1(db2.vip);
                })).then(fireRemainders);
            }
        });
    }).finally(function() {
        state.onReadyBeingFired = null, state.isBeingOpened = !1;
    }).then(function() {
        return db2;
    }).catch(function(err) {
        state.dbOpenError = err;
        try {
            upgradeTransaction && upgradeTransaction.abort();
        } catch (_a3) {}
        return openCanceller === state.openCanceller && db2._close(), rejection(err);
    }).finally(function() {
        state.openComplete = !0, resolveDbReady();
    });
}
function awaitIterator(iterator) {
    var step = function step(getNext) {
        return function(val) {
            var next = getNext(val), value = next.value;
            return next.done ? value : value && "function" == typeof value.then ? value.then(onSuccess, onError) : isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value);
        };
    };
    var callNext = function callNext(result) {
        return iterator.next(result);
    }, onSuccess = step(callNext), onError = step(function(error) {
        return iterator.throw(error);
    });
    return step(callNext)();
}
function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
    var i = arguments.length;
    if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
    for(var args = new Array(i - 1); --i;)args[i - 1] = arguments[i];
    scopeFunc = args.pop();
    var tables = flatten(args);
    return [
        mode,
        tables,
        scopeFunc
    ];
}
function enterTransactionScope(db2, mode, storeNames, parentTransaction, scopeFunc) {
    return DexiePromise.resolve().then(function() {
        var transless = PSD.transless || PSD, trans = db2._createTransaction(mode, storeNames, db2._dbSchema, parentTransaction), zoneProps = {
            trans: trans,
            transless: transless
        };
        if (parentTransaction) trans.idbtrans = parentTransaction.idbtrans;
        else try {
            trans.create(), db2._state.PR1398_maxLoop = 3;
        } catch (ex) {
            return ex.name === errnames.InvalidState && db2.isOpen() && --db2._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), db2._close(), db2.open().then(function() {
                return enterTransactionScope(db2, mode, storeNames, null, scopeFunc);
            })) : rejection(ex);
        }
        var returnValue, scopeFuncIsAsync = isAsyncFunction(scopeFunc);
        scopeFuncIsAsync && incrementExpectedAwaits();
        var promiseFollowed = DexiePromise.follow(function() {
            if (returnValue = scopeFunc.call(trans, trans)) if (scopeFuncIsAsync) {
                var decrementor = decrementExpectedAwaits.bind(null, null);
                returnValue.then(decrementor, decrementor);
            } else "function" == typeof returnValue.next && "function" == typeof returnValue.throw && (returnValue = awaitIterator(returnValue));
        }, zoneProps);
        return (returnValue && "function" == typeof returnValue.then ? DexiePromise.resolve(returnValue).then(function(x) {
            return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
        }) : promiseFollowed.then(function() {
            return returnValue;
        })).then(function(x) {
            return parentTransaction && trans._resolve(), trans._completion.then(function() {
                return x;
            });
        }).catch(function(e) {
            return trans._reject(e), rejection(e);
        });
    });
}
function pad(a, value, count) {
    for(var result = isArray(a) ? a.slice() : [
        a
    ], i = 0; i < count; ++i)result.push(value);
    return result;
}
var virtualIndexMiddleware = {
    stack: "dbcore",
    name: "VirtualIndexMiddleware",
    level: 1,
    create: function createVirtualIndexMiddleware(down) {
        return __assign(__assign({}, down), {
            table: function table(tableName) {
                var translateRequest = function translateRequest(req) {
                    var range, keyTail, index2 = req.query.index;
                    return index2.isVirtual ? __assign(__assign({}, req), {
                        query: {
                            index: index2,
                            range: (range = req.query.range, keyTail = index2.keyTail, {
                                type: 1 === range.type ? 2 : range.type,
                                lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
                                lowerOpen: !0,
                                upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
                                upperOpen: !0
                            })
                        }
                    }) : req;
                };
                var table = down.table(tableName), schema = table.schema, indexLookup = {}, allVirtualIndexes = [];
                function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
                    var keyPathAlias = getKeyPathAlias(keyPath), indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [], keyLength = null == keyPath ? 0 : "string" == typeof keyPath ? 1 : keyPath.length, isVirtual = keyTail > 0, virtualIndex = __assign(__assign({}, lowLevelIndex), {
                        isVirtual: isVirtual,
                        keyTail: keyTail,
                        keyLength: keyLength,
                        extractKey: getKeyExtractor(keyPath),
                        unique: !isVirtual && lowLevelIndex.unique
                    });
                    (indexList.push(virtualIndex), virtualIndex.isPrimaryKey || allVirtualIndexes.push(virtualIndex), keyLength > 1) && addVirtualIndexes(2 === keyLength ? keyPath[0] : keyPath.slice(0, keyLength - 1), keyTail + 1, lowLevelIndex);
                    return indexList.sort(function(a, b) {
                        return a.keyTail - b.keyTail;
                    }), virtualIndex;
                }
                var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
                indexLookup[":id"] = [
                    primaryKey
                ];
                for(var _i = 0, _a3 = schema.indexes; _i < _a3.length; _i++){
                    var index = _a3[_i];
                    addVirtualIndexes(index.keyPath, 0, index);
                }
                return __assign(__assign({}, table), {
                    schema: __assign(__assign({}, schema), {
                        primaryKey: primaryKey,
                        indexes: allVirtualIndexes,
                        getIndexByKeyPath: function findBestIndex(keyPath) {
                            var result2 = indexLookup[getKeyPathAlias(keyPath)];
                            return result2 && result2[0];
                        }
                    }),
                    count: function count(req) {
                        return table.count(translateRequest(req));
                    },
                    query: function query(req) {
                        return table.query(translateRequest(req));
                    },
                    openCursor: function openCursor(req) {
                        var _a4 = req.query.index, keyTail = _a4.keyTail, isVirtual = _a4.isVirtual, keyLength = _a4.keyLength;
                        if (!isVirtual) return table.openCursor(req);
                        return table.openCursor(translateRequest(req)).then(function(cursor) {
                            return cursor && function createVirtualCursor(cursor) {
                                return Object.create(cursor, {
                                    continue: {
                                        value: function _continue(key) {
                                            null != key ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
                                        }
                                    },
                                    continuePrimaryKey: {
                                        value: function value(key, primaryKey2) {
                                            cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                                        }
                                    },
                                    primaryKey: {
                                        get: function get() {
                                            return cursor.primaryKey;
                                        }
                                    },
                                    key: {
                                        get: function get() {
                                            var key = cursor.key;
                                            return 1 === keyLength ? key[0] : key.slice(0, keyLength);
                                        }
                                    },
                                    value: {
                                        get: function get() {
                                            return cursor.value;
                                        }
                                    }
                                });
                            }(cursor);
                        });
                    }
                });
            }
        });
    }
};
function getObjectDiff(a, b, rv, prfx) {
    return rv = rv || {}, prfx = prfx || "", keys(a).forEach(function(prop) {
        if (hasOwn(b, prop)) {
            var ap = a[prop], bp = b[prop];
            if ("object" == typeof ap && "object" == typeof bp && ap && bp) {
                var apTypeName = toStringTag(ap);
                apTypeName !== toStringTag(bp) ? rv[prfx + prop] = b[prop] : "Object" === apTypeName ? getObjectDiff(ap, bp, rv, prfx + prop + ".") : ap !== bp && (rv[prfx + prop] = b[prop]);
            } else ap !== bp && (rv[prfx + prop] = b[prop]);
        } else rv[prfx + prop] = void 0;
    }), keys(b).forEach(function(prop) {
        hasOwn(a, prop) || (rv[prfx + prop] = b[prop]);
    }), rv;
}
var hooksMiddleware = {
    stack: "dbcore",
    name: "HooksMiddleware",
    level: 2,
    create: function create(downCore) {
        return __assign(__assign({}, downCore), {
            table: function table(tableName) {
                var downTable = downCore.table(tableName), primaryKey = downTable.schema.primaryKey;
                return __assign(__assign({}, downTable), {
                    mutate: function mutate(req) {
                        var addPutOrDelete = function addPutOrDelete(req2) {
                            var dxTrans2 = PSD.trans, keys2 = req2.keys || function getEffectiveKeys(primaryKey, req) {
                                return "delete" === req.type ? req.keys : req.keys || req.values.map(primaryKey.extractKey);
                            }(primaryKey, req2);
                            if (!keys2) throw new Error("Keys missing");
                            return "delete" !== (req2 = "add" === req2.type || "put" === req2.type ? __assign(__assign({}, req2), {
                                keys: keys2
                            }) : __assign({}, req2)).type && (req2.values = __spreadArray([], req2.values, !0)), req2.keys && (req2.keys = __spreadArray([], req2.keys, !0)), (function getExistingValues(table, req, effectiveKeys) {
                                return "add" === req.type ? Promise.resolve([]) : table.getMany({
                                    trans: req.trans,
                                    keys: effectiveKeys,
                                    cache: "immutable"
                                });
                            })(downTable, req2, keys2).then(function(existingValues) {
                                var contexts = keys2.map(function(key, i) {
                                    var existingValue = existingValues[i], ctx = {
                                        onerror: null,
                                        onsuccess: null
                                    };
                                    if ("delete" === req2.type) deleting.fire.call(ctx, key, existingValue, dxTrans2);
                                    else if ("add" === req2.type || void 0 === existingValue) {
                                        var generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                                        null == key && null != generatedPrimaryKey && (key = generatedPrimaryKey, req2.keys[i] = key, primaryKey.outbound || setByKeyPath(req2.values[i], primaryKey.keyPath, key));
                                    } else {
                                        var objectDiff = getObjectDiff(existingValue, req2.values[i]), additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                                        if (additionalChanges_1) {
                                            var requestedValue_1 = req2.values[i];
                                            Object.keys(additionalChanges_1).forEach(function(keyPath) {
                                                hasOwn(requestedValue_1, keyPath) ? requestedValue_1[keyPath] = additionalChanges_1[keyPath] : setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                                            });
                                        }
                                    }
                                    return ctx;
                                });
                                return downTable.mutate(req2).then(function(_a4) {
                                    for(var failures = _a4.failures, results = _a4.results, numFailures = _a4.numFailures, lastResult = _a4.lastResult, i = 0; i < keys2.length; ++i){
                                        var primKey = results ? results[i] : keys2[i], ctx = contexts[i];
                                        null == primKey ? ctx.onerror && ctx.onerror(failures[i]) : ctx.onsuccess && ctx.onsuccess("put" === req2.type && existingValues[i] ? req2.values[i] : primKey);
                                    }
                                    return {
                                        failures: failures,
                                        results: results,
                                        numFailures: numFailures,
                                        lastResult: lastResult
                                    };
                                }).catch(function(error) {
                                    return contexts.forEach(function(ctx) {
                                        return ctx.onerror && ctx.onerror(error);
                                    }), Promise.reject(error);
                                });
                            });
                        };
                        var dxTrans = PSD.trans, _a3 = dxTrans.table(tableName).hook, deleting = _a3.deleting, creating = _a3.creating, updating = _a3.updating;
                        switch(req.type){
                            case "add":
                                if (creating.fire === nop) break;
                                return dxTrans._promise("readwrite", function() {
                                    return addPutOrDelete(req);
                                }, !0);
                            case "put":
                                if (creating.fire === nop && updating.fire === nop) break;
                                return dxTrans._promise("readwrite", function() {
                                    return addPutOrDelete(req);
                                }, !0);
                            case "delete":
                                if (deleting.fire === nop) break;
                                return dxTrans._promise("readwrite", function() {
                                    return addPutOrDelete(req);
                                }, !0);
                            case "deleteRange":
                                if (deleting.fire === nop) break;
                                return dxTrans._promise("readwrite", function() {
                                    return function deleteRange(req2) {
                                        return deleteNextChunk(req2.trans, req2.range, 1e4);
                                    }(req);
                                }, !0);
                        }
                        return downTable.mutate(req);
                        function deleteNextChunk(trans, range, limit) {
                            return downTable.query({
                                trans: trans,
                                values: !1,
                                query: {
                                    index: primaryKey,
                                    range: range
                                },
                                limit: limit
                            }).then(function(_a4) {
                                var result = _a4.result;
                                return addPutOrDelete({
                                    type: "delete",
                                    keys: result,
                                    trans: trans
                                }).then(function(res) {
                                    return res.numFailures > 0 ? Promise.reject(res.failures[0]) : result.length < limit ? {
                                        failures: [],
                                        numFailures: 0,
                                        lastResult: void 0
                                    } : deleteNextChunk(trans, __assign(__assign({}, range), {
                                        lower: result[result.length - 1],
                                        lowerOpen: !0
                                    }), limit);
                                });
                            });
                        }
                    }
                });
            }
        });
    }
};
function getFromTransactionCache(keys2, cache, clone) {
    try {
        if (!cache) return null;
        if (cache.keys.length < keys2.length) return null;
        for(var result = [], i = 0, j = 0; i < cache.keys.length && j < keys2.length; ++i)0 === cmp(cache.keys[i], keys2[j]) && (result.push(clone ? deepClone(cache.values[i]) : cache.values[i]), ++j);
        return result.length === keys2.length ? result : null;
    } catch (_a3) {
        return null;
    }
}
var _a, cacheExistingValuesMiddleware = {
    stack: "dbcore",
    level: -1,
    create: function create(core) {
        return {
            table: function table(tableName) {
                var table = core.table(tableName);
                return __assign(__assign({}, table), {
                    getMany: function getMany(req) {
                        if (!req.cache) return table.getMany(req);
                        var cachedResult = getFromTransactionCache(req.keys, req.trans._cache, "clone" === req.cache);
                        return cachedResult ? DexiePromise.resolve(cachedResult) : table.getMany(req).then(function(res) {
                            return req.trans._cache = {
                                keys: req.keys,
                                values: "clone" === req.cache ? deepClone(res) : res
                            }, res;
                        });
                    },
                    mutate: function mutate(req) {
                        return "add" !== req.type && (req.trans._cache = null), table.mutate(req);
                    }
                });
            }
        };
    }
};
function isEmptyRange(node) {
    return !("from" in node);
}
var RangeSet = function RangeSet1(fromOrTree, to) {
    if (!this) {
        var rv = new RangeSet;
        return fromOrTree && "d" in fromOrTree && extend(rv, fromOrTree), rv;
    }
    extend(this, arguments.length ? {
        d: 1,
        from: fromOrTree,
        to: arguments.length > 1 ? to : fromOrTree
    } : {
        d: 0
    });
};
function addRange(target, from, to) {
    var diff = cmp(from, to);
    if (!isNaN(diff)) {
        if (diff > 0) throw RangeError();
        if (isEmptyRange(target)) return extend(target, {
            from: from,
            to: to,
            d: 1
        });
        var left = target.l, right = target.r;
        if (cmp(to, target.from) < 0) return left ? addRange(left, from, to) : target.l = {
            from: from,
            to: to,
            d: 1,
            l: null,
            r: null
        }, rebalance(target);
        if (cmp(from, target.to) > 0) return right ? addRange(right, from, to) : target.r = {
            from: from,
            to: to,
            d: 1,
            l: null,
            r: null
        }, rebalance(target);
        cmp(from, target.from) < 0 && (target.from = from, target.l = null, target.d = right ? right.d + 1 : 1), cmp(to, target.to) > 0 && (target.to = to, target.r = null, target.d = target.l ? target.l.d + 1 : 1);
        var rightWasCutOff = !target.r;
        left && !target.l && mergeRanges(target, left), right && rightWasCutOff && mergeRanges(target, right);
    }
}
function mergeRanges(target, newSet) {
    isEmptyRange(newSet) || function _addRangeSet(target2, _a3) {
        var from = _a3.from, to = _a3.to, l = _a3.l, r = _a3.r;
        addRange(target2, from, to), l && _addRangeSet(target2, l), r && _addRangeSet(target2, r);
    }(target, newSet);
}
function getRangeSetIterator(node) {
    var state = isEmptyRange(node) ? null : {
        s: 0,
        n: node
    };
    return {
        next: function next(key) {
            for(var keyProvided = arguments.length > 0; state;)switch(state.s){
                case 0:
                    if (state.s = 1, keyProvided) for(; state.n.l && cmp(key, state.n.from) < 0;)state = {
                        up: state,
                        n: state.n.l,
                        s: 1
                    };
                    else for(; state.n.l;)state = {
                        up: state,
                        n: state.n.l,
                        s: 1
                    };
                case 1:
                    if (state.s = 2, !keyProvided || cmp(key, state.n.to) <= 0) return {
                        value: state.n,
                        done: !1
                    };
                case 2:
                    if (state.n.r) {
                        state.s = 3, state = {
                            up: state,
                            n: state.n.r,
                            s: 0
                        };
                        continue;
                    }
                case 3:
                    state = state.up;
            }
            return {
                done: !0
            };
        }
    };
}
function rebalance(target) {
    var _a3, _b, diff = ((null === (_a3 = target.r) || void 0 === _a3 ? void 0 : _a3.d) || 0) - ((null === (_b = target.l) || void 0 === _b ? void 0 : _b.d) || 0), r = diff > 1 ? "r" : diff < -1 ? "l" : "";
    if (r) {
        var l = "r" === r ? "l" : "r", rootClone = __assign({}, target), oldRootRight = target[r];
        target.from = oldRootRight.from, target.to = oldRootRight.to, target[r] = oldRootRight[r], rootClone[r] = oldRootRight[l], target[l] = rootClone, rootClone.d = computeDepth(rootClone);
    }
    target.d = computeDepth(target);
}
function computeDepth(_a3) {
    var r = _a3.r, l = _a3.l;
    return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
}
props(RangeSet.prototype, ((_a = {
    add: function add(rangeSet) {
        return mergeRanges(this, rangeSet), this;
    },
    addKey: function addKey(key) {
        return addRange(this, key, key), this;
    },
    addKeys: function addKeys(keys2) {
        var _this = this;
        return keys2.forEach(function(key) {
            return addRange(_this, key, key);
        }), this;
    }
})[iteratorSymbol] = function() {
    return getRangeSetIterator(this);
}, _a));
var observabilityMiddleware = {
    stack: "dbcore",
    level: 0,
    create: function create(core) {
        var dbName = core.schema.name, FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
        return __assign(__assign({}, core), {
            table: function table(tableName) {
                var table = core.table(tableName), schema = table.schema, primaryKey = schema.primaryKey, extractKey = primaryKey.extractKey, outbound = primaryKey.outbound, tableClone = __assign(__assign({}, table), {
                    mutate: function mutate(req) {
                        var trans = req.trans, mutatedParts = trans.mutatedParts || (trans.mutatedParts = {}), getRangeSet = function getRangeSet(indexName) {
                            var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
                            return mutatedParts[part] || (mutatedParts[part] = new RangeSet);
                        }, pkRangeSet = getRangeSet(""), delsRangeSet = getRangeSet(":dels"), type2 = req.type, _a3 = "deleteRange" === req.type ? [
                            req.range
                        ] : "delete" === req.type ? [
                            req.keys
                        ] : req.values.length < 50 ? [
                            [],
                            req.values
                        ] : [], keys2 = _a3[0], newObjs = _a3[1], oldCache = req.trans._cache;
                        return table.mutate(req).then(function(res) {
                            if (isArray(keys2)) {
                                "delete" !== type2 && (keys2 = res.results), pkRangeSet.addKeys(keys2);
                                var oldObjs = getFromTransactionCache(keys2, oldCache);
                                oldObjs || "add" === type2 || delsRangeSet.addKeys(keys2), (oldObjs || newObjs) && function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
                                    var addAffectedIndex = function addAffectedIndex(ix) {
                                        var rangeSet = getRangeSet(ix.name || "");
                                        function extractKey(obj) {
                                            return null != obj ? ix.extractKey(obj) : null;
                                        }
                                        var addKeyOrKeys = function addKeyOrKeys(key) {
                                            return ix.multiEntry && isArray(key) ? key.forEach(function(key2) {
                                                return rangeSet.addKey(key2);
                                            }) : rangeSet.addKey(key);
                                        };
                                        (oldObjs || newObjs).forEach(function(_, i) {
                                            var oldKey = oldObjs && extractKey(oldObjs[i]), newKey = newObjs && extractKey(newObjs[i]);
                                            0 !== cmp(oldKey, newKey) && (null != oldKey && addKeyOrKeys(oldKey), null != newKey && addKeyOrKeys(newKey));
                                        });
                                    };
                                    schema.indexes.forEach(addAffectedIndex);
                                }(getRangeSet, schema, oldObjs, newObjs);
                            } else if (keys2) {
                                var range = {
                                    from: keys2.lower,
                                    to: keys2.upper
                                };
                                delsRangeSet.add(range), pkRangeSet.add(range);
                            } else pkRangeSet.add(FULL_RANGE), delsRangeSet.add(FULL_RANGE), schema.indexes.forEach(function(idx) {
                                return getRangeSet(idx.name).add(FULL_RANGE);
                            });
                            return res;
                        });
                    }
                }), getRange = function getRange(_a3) {
                    var _b, _c, _d = _a3.query, index = _d.index, range = _d.range;
                    return [
                        index,
                        new RangeSet(null !== (_b = range.lower) && void 0 !== _b ? _b : core.MIN_KEY, null !== (_c = range.upper) && void 0 !== _c ? _c : core.MAX_KEY)
                    ];
                }, readSubscribers = {
                    get: function get(req) {
                        return [
                            primaryKey,
                            new RangeSet(req.key)
                        ];
                    },
                    getMany: function getMany(req) {
                        return [
                            primaryKey,
                            (new RangeSet).addKeys(req.keys)
                        ];
                    },
                    count: getRange,
                    query: getRange,
                    openCursor: getRange
                };
                return keys(readSubscribers).forEach(function(method) {
                    tableClone[method] = function(req) {
                        var subscr = PSD.subscr;
                        if (subscr) {
                            var getRangeSet = function getRangeSet(indexName) {
                                var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
                                return subscr[part] || (subscr[part] = new RangeSet);
                            }, pkRangeSet_1 = getRangeSet(""), delsRangeSet_1 = getRangeSet(":dels"), _a3 = readSubscribers[method](req), queriedIndex = _a3[0], queriedRanges = _a3[1];
                            if (getRangeSet(queriedIndex.name || "").add(queriedRanges), !queriedIndex.isPrimaryKey) {
                                if ("count" !== method) {
                                    var keysPromise_1 = "query" === method && outbound && req.values && table.query(__assign(__assign({}, req), {
                                        values: !1
                                    }));
                                    return table[method].apply(this, arguments).then(function(res) {
                                        if ("query" === method) {
                                            if (outbound && req.values) return keysPromise_1.then(function(_a4) {
                                                var resultingKeys = _a4.result;
                                                return pkRangeSet_1.addKeys(resultingKeys), res;
                                            });
                                            var pKeys = req.values ? res.result.map(extractKey) : res.result;
                                            req.values ? pkRangeSet_1.addKeys(pKeys) : delsRangeSet_1.addKeys(pKeys);
                                        } else if ("openCursor" === method) {
                                            var cursor_1 = res, wantValues_1 = req.values;
                                            return cursor_1 && Object.create(cursor_1, {
                                                key: {
                                                    get: function get() {
                                                        return delsRangeSet_1.addKey(cursor_1.primaryKey), cursor_1.key;
                                                    }
                                                },
                                                primaryKey: {
                                                    get: function get() {
                                                        var pkey = cursor_1.primaryKey;
                                                        return delsRangeSet_1.addKey(pkey), pkey;
                                                    }
                                                },
                                                value: {
                                                    get: function get() {
                                                        return wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey), cursor_1.value;
                                                    }
                                                }
                                            });
                                        }
                                        return res;
                                    });
                                }
                                delsRangeSet_1.add(FULL_RANGE);
                            }
                        }
                        return table[method].apply(this, arguments);
                    };
                }), tableClone;
            }
        });
    }
};
var domDeps, Dexie$1 = function() {
    function Dexie2(name, options) {
        var _this = this;
        this._middlewares = {}, this.verno = 0;
        var deps = Dexie2.dependencies;
        this._options = options = __assign({
            addons: Dexie2.addons,
            autoOpen: !0,
            indexedDB: deps.indexedDB,
            IDBKeyRange: deps.IDBKeyRange
        }, options), this._deps = {
            indexedDB: options.indexedDB,
            IDBKeyRange: options.IDBKeyRange
        };
        var addons = options.addons;
        this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var state = {
            dbOpenError: null,
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: nop,
            dbReadyPromise: null,
            cancelOpen: nop,
            openCanceller: null,
            autoSchema: !0,
            PR1398_maxLoop: 3
        };
        state.dbReadyPromise = new DexiePromise(function(resolve) {
            state.dbReadyResolve = resolve;
        }), state.openCanceller = new DexiePromise(function(_, reject) {
            state.cancelOpen = reject;
        }), this._state = state, this.name = name, this.on = Events(this, "populate", "blocked", "versionchange", "close", {
            ready: [
                promisableChain,
                nop
            ]
        }), this.on.ready.subscribe = override(this.on.ready.subscribe, function(subscribe) {
            return function(subscriber, bSticky) {
                Dexie2.vip(function() {
                    var state2 = _this._state;
                    if (state2.openComplete) state2.dbOpenError || DexiePromise.resolve().then(subscriber), bSticky && subscribe(subscriber);
                    else if (state2.onReadyBeingFired) state2.onReadyBeingFired.push(subscriber), bSticky && subscribe(subscriber);
                    else {
                        subscribe(subscriber);
                        var db_1 = _this;
                        bSticky || subscribe(function unsubscribe() {
                            db_1.on.ready.unsubscribe(subscriber), db_1.on.ready.unsubscribe(unsubscribe);
                        });
                    }
                });
            };
        }), this.Collection = function createCollectionConstructor(db2) {
            return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
                this.db = db2;
                var keyRange = AnyRange, error = null;
                if (keyRangeGenerator) try {
                    keyRange = keyRangeGenerator();
                } catch (ex) {
                    error = ex;
                }
                var whereCtx = whereClause._ctx, table = whereCtx.table, readingHook = table.hook.reading.fire;
                this._ctx = {
                    table: table,
                    index: whereCtx.index,
                    isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
                    range: keyRange,
                    keysOnly: !1,
                    dir: "next",
                    unique: "",
                    algorithm: null,
                    filter: null,
                    replayFilter: null,
                    justLimit: !0,
                    isMatch: null,
                    offset: 0,
                    limit: 1 / 0,
                    error: error,
                    or: whereCtx.or,
                    valueMapper: readingHook !== mirror ? readingHook : null
                };
            });
        }(this), this.Table = function createTableConstructor(db2) {
            return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
                this.db = db2, this._tx = trans, this.name = name, this.schema = tableSchema, this.hook = db2._allTables[name] ? db2._allTables[name].hook : Events(null, {
                    creating: [
                        hookCreatingChain,
                        nop
                    ],
                    reading: [
                        pureFunctionChain,
                        mirror
                    ],
                    updating: [
                        hookUpdatingChain,
                        nop
                    ],
                    deleting: [
                        hookDeletingChain,
                        nop
                    ]
                });
            });
        }(this), this.Transaction = function createTransactionConstructor(db2) {
            return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
                var _this = this;
                this.db = db2, this.mode = mode, this.storeNames = storeNames, this.schema = dbschema, this.chromeTransactionDurability = chromeTransactionDurability, this.idbtrans = null, this.on = Events(this, "complete", "error", "abort"), this.parent = parent || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new DexiePromise(function(resolve, reject) {
                    _this._resolve = resolve, _this._reject = reject;
                }), this._completion.then(function() {
                    _this.active = !1, _this.on.complete.fire();
                }, function(e) {
                    var wasActive = _this.active;
                    return _this.active = !1, _this.on.error.fire(e), _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort(), rejection(e);
                });
            });
        }(this), this.Version = function createVersionConstructor(db2) {
            return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
                this.db = db2, this._cfg = {
                    version: versionNumber,
                    storesSource: null,
                    dbschema: {},
                    tables: {},
                    contentUpgrade: null
                };
            });
        }(this), this.WhereClause = function createWhereClauseConstructor(db2) {
            return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
                this.db = db2, this._ctx = {
                    table: table,
                    index: ":id" === index ? null : index,
                    or: orCollection
                };
                var indexedDB2 = db2._deps.indexedDB;
                if (!indexedDB2) throw new exceptions.MissingAPI;
                this._cmp = this._ascending = indexedDB2.cmp.bind(indexedDB2), this._descending = function(a, b) {
                    return indexedDB2.cmp(b, a);
                }, this._max = function(a, b) {
                    return indexedDB2.cmp(a, b) > 0 ? a : b;
                }, this._min = function(a, b) {
                    return indexedDB2.cmp(a, b) < 0 ? a : b;
                }, this._IDBKeyRange = db2._deps.IDBKeyRange;
            });
        }(this), this.on("versionchange", function(ev) {
            ev.newVersion > 0 ? console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.") : console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request."), _this.close();
        }), this.on("blocked", function(ev) {
            !ev.newVersion || ev.newVersion < ev.oldVersion ? console.warn("Dexie.delete('" + _this.name + "') was blocked") : console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
        }), this._maxKey = getMaxKey(options.IDBKeyRange), this._createTransaction = function(mode, storeNames, dbschema, parentTransaction) {
            return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
        }, this._fireOnBlocked = function(ev) {
            _this.on("blocked").fire(ev), connections.filter(function(c) {
                return c.name === _this.name && c !== _this && !c._state.vcFired;
            }).map(function(c) {
                return c.on("versionchange").fire(ev);
            });
        }, this.use(virtualIndexMiddleware), this.use(hooksMiddleware), this.use(observabilityMiddleware), this.use(cacheExistingValuesMiddleware), this.vip = Object.create(this, {
            _vip: {
                value: !0
            }
        }), addons.forEach(function(addon) {
            return addon(_this);
        });
    }
    return Dexie2.prototype.version = function(versionNumber) {
        if (isNaN(versionNumber) || versionNumber < .1) throw new exceptions.Type("Given version is not a positive number");
        if (versionNumber = Math.round(10 * versionNumber) / 10, this.idbdb || this._state.isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versions = this._versions, versionInstance = versions.filter(function(v1) {
            return v1._cfg.version === versionNumber;
        })[0];
        return versionInstance || (versionInstance = new this.Version(versionNumber), versions.push(versionInstance), versions.sort(lowerVersionFirst), versionInstance.stores({}), this._state.autoSchema = !1, versionInstance);
    }, Dexie2.prototype._whenReady = function(fn) {
        var _this = this;
        return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise(function(resolve, reject) {
            if (_this._state.openComplete) return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
            if (!_this._state.isBeingOpened) {
                if (!_this._options.autoOpen) return void reject(new exceptions.DatabaseClosed);
                _this.open().catch(nop);
            }
            _this._state.dbReadyPromise.then(resolve, reject);
        }).then(fn);
    }, Dexie2.prototype.use = function(_a3) {
        var stack = _a3.stack, create = _a3.create, level = _a3.level, name = _a3.name;
        name && this.unuse({
            stack: stack,
            name: name
        });
        var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
        return middlewares.push({
            stack: stack,
            create: create,
            level: null == level ? 10 : level,
            name: name
        }), middlewares.sort(function(a, b) {
            return a.level - b.level;
        }), this;
    }, Dexie2.prototype.unuse = function(_a3) {
        var stack = _a3.stack, name = _a3.name, create = _a3.create;
        return stack && this._middlewares[stack] && (this._middlewares[stack] = this._middlewares[stack].filter(function(mw) {
            return create ? mw.create !== create : !!name && mw.name !== name;
        })), this;
    }, Dexie2.prototype.open = function() {
        return dexieOpen(this);
    }, Dexie2.prototype._close = function() {
        var state = this._state, idx = connections.indexOf(this);
        if (idx >= 0 && connections.splice(idx, 1), this.idbdb) {
            try {
                this.idbdb.close();
            } catch (e) {}
            this._novip.idbdb = null;
        }
        state.dbReadyPromise = new DexiePromise(function(resolve) {
            state.dbReadyResolve = resolve;
        }), state.openCanceller = new DexiePromise(function(_, reject) {
            state.cancelOpen = reject;
        });
    }, Dexie2.prototype.close = function() {
        this._close();
        var state = this._state;
        this._options.autoOpen = !1, state.dbOpenError = new exceptions.DatabaseClosed, state.isBeingOpened && state.cancelOpen(state.dbOpenError);
    }, Dexie2.prototype.delete = function() {
        var _this = this, hasArguments = arguments.length > 0, state = this._state;
        return new DexiePromise(function(resolve, reject) {
            var doDelete = function doDelete() {
                _this.close();
                var req = _this._deps.indexedDB.deleteDatabase(_this.name);
                req.onsuccess = wrap(function() {
                    _onDatabaseDeleted(_this._deps, _this.name), resolve();
                }), req.onerror = eventRejectHandler(reject), req.onblocked = _this._fireOnBlocked;
            };
            if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
            state.isBeingOpened ? state.dbReadyPromise.then(doDelete) : doDelete();
        });
    }, Dexie2.prototype.backendDB = function() {
        return this.idbdb;
    }, Dexie2.prototype.isOpen = function() {
        return null !== this.idbdb;
    }, Dexie2.prototype.hasBeenClosed = function() {
        var dbOpenError = this._state.dbOpenError;
        return dbOpenError && "DatabaseClosed" === dbOpenError.name;
    }, Dexie2.prototype.hasFailed = function() {
        return null !== this._state.dbOpenError;
    }, Dexie2.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
    }, Object.defineProperty(Dexie2.prototype, "tables", {
        get: function get() {
            var _this = this;
            return keys(this._allTables).map(function(name) {
                return _this._allTables[name];
            });
        },
        enumerable: !1,
        configurable: !0
    }), Dexie2.prototype.transaction = function() {
        var args = extractTransactionArgs.apply(this, arguments);
        return this._transaction.apply(this, args);
    }, Dexie2.prototype._transaction = function(mode, tables, scopeFunc) {
        var _this = this, parentTransaction = PSD.trans;
        parentTransaction && parentTransaction.db === this && -1 === mode.indexOf("!") || (parentTransaction = null);
        var idbMode, storeNames, onlyIfCompatible = -1 !== mode.indexOf("?");
        mode = mode.replace("!", "").replace("?", "");
        try {
            if (storeNames = tables.map(function(table) {
                var storeName = _instanceof(table, _this.Table) ? table.name : table;
                if ("string" != typeof storeName) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
            }), "r" == mode || "readonly" === mode) idbMode = "readonly";
            else {
                if ("rw" != mode && "readwrite" != mode) throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
                idbMode = "readwrite";
            }
            if (parentTransaction) {
                if ("readonly" === parentTransaction.mode && "readwrite" === idbMode) {
                    if (!onlyIfCompatible) throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                    parentTransaction = null;
                }
                parentTransaction && storeNames.forEach(function(storeName) {
                    if (parentTransaction && -1 === parentTransaction.storeNames.indexOf(storeName)) {
                        if (!onlyIfCompatible) throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                        parentTransaction = null;
                    }
                }), onlyIfCompatible && parentTransaction && !parentTransaction.active && (parentTransaction = null);
            }
        } catch (e) {
            return parentTransaction ? parentTransaction._promise(null, function(_, reject) {
                reject(e);
            }) : rejection(e);
        }
        var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
        return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function() {
            return _this._whenReady(enterTransaction);
        }) : this._whenReady(enterTransaction);
    }, Dexie2.prototype.table = function(tableName) {
        if (!hasOwn(this._allTables, tableName)) throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
        return this._allTables[tableName];
    }, Dexie2;
}(), symbolObservable = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable", Observable = function() {
    var Observable2 = function Observable2(subscribe) {
        this._subscribe = subscribe;
    };
    return Observable2.prototype.subscribe = function(x, error, complete) {
        return this._subscribe(x && "function" != typeof x ? x : {
            next: x,
            error: error,
            complete: complete
        });
    }, Observable2.prototype[symbolObservable] = function() {
        return this;
    }, Observable2;
}();
function extendObservabilitySet(target, newSet) {
    return keys(newSet).forEach(function(part) {
        mergeRanges(target[part] || (target[part] = new RangeSet), newSet[part]);
    }), target;
}
try {
    domDeps = {
        indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
        IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
    };
} catch (e) {
    domDeps = {
        indexedDB: null,
        IDBKeyRange: null
    };
}
var Dexie = Dexie$1;
function propagateLocally(updateParts) {
    var wasMe = propagatingLocally;
    try {
        propagatingLocally = !0, globalEvents.storagemutated.fire(updateParts);
    } finally{
        propagatingLocally = wasMe;
    }
}
props(Dexie, __assign(__assign({}, fullNameExceptions), {
    delete: function _delete(databaseName) {
        return new Dexie(databaseName, {
            addons: []
        }).delete();
    },
    exists: function exists(name) {
        return new Dexie(name, {
            addons: []
        }).open().then(function(db2) {
            return db2.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
            return !1;
        });
    },
    getDatabaseNames: function getDatabaseNames(cb) {
        try {
            return (function getDatabaseNames(_a3) {
                var indexedDB2 = _a3.indexedDB, IDBKeyRange = _a3.IDBKeyRange;
                return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(function(infos) {
                    return infos.map(function(info) {
                        return info.name;
                    }).filter(function(name) {
                        return "__dbnames" !== name;
                    });
                }) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
            })(Dexie.dependencies).then(cb);
        } catch (_a3) {
            return rejection(new exceptions.MissingAPI);
        }
    },
    defineClass: function defineClass() {
        return function Class(content) {
            extend(this, content);
        };
    },
    ignoreTransaction: function ignoreTransaction(scopeFunc) {
        return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
    },
    vip: vip,
    async: function async(generatorFn) {
        return function() {
            try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                return rv && "function" == typeof rv.then ? rv : DexiePromise.resolve(rv);
            } catch (e) {
                return rejection(e);
            }
        };
    },
    spawn: function spawn(generatorFn, args, thiz) {
        try {
            var rv = awaitIterator(generatorFn.apply(thiz, args || []));
            return rv && "function" == typeof rv.then ? rv : DexiePromise.resolve(rv);
        } catch (e) {
            return rejection(e);
        }
    },
    currentTransaction: {
        get: function get() {
            return PSD.trans || null;
        }
    },
    waitFor: function waitFor(promiseOrFunction, optionalTimeout) {
        var promise = DexiePromise.resolve("function" == typeof promiseOrFunction ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
        return PSD.trans ? PSD.trans.waitFor(promise) : promise;
    },
    Promise: DexiePromise,
    debug: {
        get: function get() {
            return debug;
        },
        set: function set(value) {
            setDebug(value, "dexie" === value ? function() {
                return !0;
            } : dexieStackFrameFilter);
        }
    },
    derive: derive,
    extend: extend,
    props: props,
    override: override,
    Events: Events,
    on: globalEvents,
    liveQuery: function liveQuery(querier) {
        return new Observable(function(observer) {
            var shouldNotify = function shouldNotify() {
                return keys(currentObs).some(function(key) {
                    return accumMuts[key] && function rangesOverlap(rangeSet1, rangeSet2) {
                        var i1 = getRangeSetIterator(rangeSet2), nextResult1 = i1.next();
                        if (nextResult1.done) return !1;
                        for(var a = nextResult1.value, i2 = getRangeSetIterator(rangeSet1), nextResult2 = i2.next(a.from), b = nextResult2.value; !nextResult1.done && !nextResult2.done;){
                            if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0) return !0;
                            cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
                        }
                        return !1;
                    }(accumMuts[key], currentObs[key]);
                });
            };
            var scopeFuncIsAsync = isAsyncFunction(querier);
            var closed = !1, accumMuts = {}, currentObs = {}, subscription = {
                get closed () {
                    return closed;
                },
                unsubscribe: function unsubscribe() {
                    closed = !0, globalEvents.storagemutated.unsubscribe(mutationListener);
                }
            };
            observer.start && observer.start(subscription);
            var querying = !1, startedListening = !1;
            var mutationListener = function mutationListener(parts) {
                extendObservabilitySet(accumMuts, parts), shouldNotify() && doQuery();
            }, doQuery = function doQuery1() {
                if (!querying && !closed) {
                    accumMuts = {};
                    var subscr = {}, ret = function execute(subscr) {
                        scopeFuncIsAsync && incrementExpectedAwaits();
                        var exec = function exec() {
                            return newScope(querier, {
                                subscr: subscr,
                                trans: null
                            });
                        }, rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
                        return scopeFuncIsAsync && rv.then(decrementExpectedAwaits, decrementExpectedAwaits), rv;
                    }(subscr);
                    startedListening || (globalEvents("storagemutated", mutationListener), startedListening = !0), querying = !0, Promise.resolve(ret).then(function(result) {
                        querying = !1, closed || (shouldNotify() ? doQuery() : (accumMuts = {}, currentObs = subscr, observer.next && observer.next(result)));
                    }, function(err) {
                        querying = !1, observer.error && observer.error(err), subscription.unsubscribe();
                    });
                }
            };
            return doQuery(), subscription;
        });
    },
    extendObservabilitySet: extendObservabilitySet,
    getByKeyPath: getByKeyPath,
    setByKeyPath: setByKeyPath,
    delByKeyPath: function delByKeyPath(obj, keyPath) {
        "string" == typeof keyPath ? setByKeyPath(obj, keyPath, void 0) : "length" in keyPath && [].map.call(keyPath, function(kp) {
            setByKeyPath(obj, kp, void 0);
        });
    },
    shallowClone: shallowClone,
    deepClone: deepClone,
    getObjectDiff: getObjectDiff,
    cmp: cmp,
    asap: asap$1,
    minKey: -1 / 0,
    addons: [],
    connections: connections,
    errnames: errnames,
    dependencies: domDeps,
    semVer: "3.2.2",
    version: "3.2.2".split(".").map(function(n) {
        return parseInt(n);
    }).reduce(function(p2, c, i) {
        return p2 + c / Math.pow(10, 2 * i);
    })
})), Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange), "undefined" != typeof dispatchEvent && "undefined" != typeof addEventListener && (globalEvents("storagemutated", function(updatedParts) {
    var event_1;
    propagatingLocally || (isIEOrEdge ? (event_1 = document.createEvent("CustomEvent")).initCustomEvent("x-storagemutated-1", !0, !0, updatedParts) : event_1 = new CustomEvent("x-storagemutated-1", {
        detail: updatedParts
    }), propagatingLocally = !0, dispatchEvent(event_1), propagatingLocally = !1);
}), addEventListener("x-storagemutated-1", function(_a3) {
    var detail = _a3.detail;
    propagatingLocally || propagateLocally(detail);
}));
var propagatingLocally = !1;
if ("undefined" != typeof BroadcastChannel) {
    var bc_1 = new BroadcastChannel("x-storagemutated-1");
    globalEvents("storagemutated", function(changedParts) {
        propagatingLocally || bc_1.postMessage(changedParts);
    }), bc_1.onmessage = function(ev) {
        ev.data && propagateLocally(ev.data);
    };
} else if ("undefined" != typeof self && "undefined" != typeof navigator) {
    globalEvents("storagemutated", function(changedParts) {
        try {
            propagatingLocally || ("undefined" != typeof localStorage && localStorage.setItem("x-storagemutated-1", JSON.stringify({
                trig: Math.random(),
                changedParts: changedParts
            })), "object" == typeof self.clients && __spreadArray([], self.clients.matchAll({
                includeUncontrolled: !0
            }), !0).forEach(function(client) {
                return client.postMessage({
                    type: "x-storagemutated-1",
                    changedParts: changedParts
                });
            }));
        } catch (_a3) {}
    }), "undefined" != typeof addEventListener && addEventListener("storage", function(ev) {
        if ("x-storagemutated-1" === ev.key) {
            var data2 = JSON.parse(ev.newValue);
            data2 && propagateLocally(data2.changedParts);
        }
    });
    var swContainer = self.document && navigator.serviceWorker;
    swContainer && swContainer.addEventListener("message", function propagateMessageLocally(_a3) {
        var data2 = _a3.data;
        data2 && "x-storagemutated-1" === data2.type && propagateLocally(data2.changedParts);
    });
}
DexiePromise.rejectionMapper = function mapError(domError, message) {
    if (!domError || _instanceof(domError, DexieError) || _instanceof(domError, TypeError) || _instanceof(domError, SyntaxError) || !domError.name || !exceptionMap[domError.name]) return domError;
    var rv = new exceptionMap[domError.name](message || domError.message, domError);
    return "stack" in domError && setProp(rv, "stack", {
        get: function get() {
            return this.inner.stack;
        }
    }), rv;
}, setDebug(debug, dexieStackFrameFilter);
var db = new /*#__PURE__*/ (function(Dexie$1) {
    "use strict";
    _inherits(IdleBitDB, Dexie$1);
    var _super = _createSuper(IdleBitDB);
    function IdleBitDB() {
        _classCallCheck(this, IdleBitDB);
        var _this;
        _this = _super.call(this, "idle-bit"), __publicField(_assertThisInitialized(_this), "save"), _this.version(1).stores({
            save: ",data"
        });
        return _possibleConstructorReturn(_this);
    }
    return IdleBitDB;
}(Dexie$1)), _Disk = /*#__PURE__*/ function() {
    "use strict";
    function _Disk1(id, capacity) {
        _classCallCheck(this, _Disk1);
        __publicField(this, "id"), __publicField(this, "_capacity", _Disk.DEFAULTS.capacity), __publicField(this, "capacityCostManager"), __publicField(this, "floatBits", _Disk.DEFAULTS.bits), this.id = id, this.capacity = capacity, this.capacityCostManager = new CostManager(16 * Math.pow(1.05, this.id), function(amount, prevCost) {
            return Math.pow(prevCost, 1.07);
        }, {
            initialAmount: 8,
            incrementer: function(prevAmount) {
                return 2 * prevAmount;
            }
        });
    }
    _createClass(_Disk1, [
        {
            key: "diskLetter",
            get: function get() {
                var letterID = this.id + 2;
                var digits = [];
                for(; letterID > 0;){
                    var nextDigit = letterID % 26 + 1;
                    letterID = (letterID - nextDigit) / 26, digits.push(nextDigit);
                }
                return digits.reduce(function(letters, digit) {
                    return String.fromCharCode(64 + digit) + letters;
                }, "");
            }
        },
        {
            key: "nameWithoutLetter",
            get: function get() {
                return "".concat(formatBits(this.capacity, !0), " Disk");
            }
        },
        {
            key: "name",
            get: function get() {
                return "".concat(this.nameWithoutLetter, " (").concat(this.diskLetter, ":)");
            }
        },
        {
            key: "capacity",
            get: function get() {
                return this._capacity;
            },
            set: function set(capacity) {
                this._capacity = capacity;
            }
        },
        {
            key: "capacityPurchase",
            get: function get() {
                var _this = this;
                return new Purchase("x2 Capacity", this.capacityCostManager.getNextCostAt(this.capacity), function() {
                    return _this.capacity *= 2;
                });
            }
        },
        {
            key: "bits",
            get: function get() {
                return Math.floor(this.floatBits);
            }
        },
        {
            key: "isFull",
            get: function get() {
                return this.bits >= this.capacity;
            }
        },
        {
            key: "schema",
            get: function get() {
                return _Disk.CODEC.parse(this);
            }
        },
        {
            key: "increment",
            value: function increment() {
                var bits = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
                this.floatBits = Math.min(this.floatBits + bits, this.capacity);
            }
        },
        {
            key: "drain",
            value: function drain(bits) {
                var depleted = Math.min(bits, this.bits);
                return this.floatBits -= depleted, depleted;
            }
        },
        {
            key: "upgradeStorage",
            value: function upgradeStorage() {
                this.capacity *= 2;
            }
        }
    ], [
        {
            key: "fromSchema",
            value: function fromSchema(schema) {
                var disk = new _Disk(schema.id, schema.capacity);
                return disk.floatBits = schema.bits, disk;
            }
        }
    ]);
    return _Disk1;
}();
var Disk = _Disk;
__publicField(Disk, "DEFAULTS", {
    capacity: 8,
    bits: 0
}), __publicField(Disk, "CODEC", mod.object({
    capacity: mod.number().default(_Disk.DEFAULTS.capacity),
    bits: mod.number().default(_Disk.DEFAULTS.bits),
    id: mod.number()
}));
var _PlayerStats = /*#__PURE__*/ function() {
    "use strict";
    function _PlayerStats1() {
        _classCallCheck(this, _PlayerStats1);
        __publicField(this, "maxBits", 0), __publicField(this, "chipCount", 0), __publicField(this, "boughtCloud", !1), __publicField(this, "_bitsPerSecond", 0);
    }
    _createClass(_PlayerStats1, [
        {
            key: "schema",
            get: function get() {
                return _PlayerStats.CODEC.parse(this);
            },
            set: function set(schema) {
                var _schema_maxBits;
                schema !== null && schema !== void 0 ? schema : schema = {}, this.maxBits = (_schema_maxBits = schema.maxBits) !== null && _schema_maxBits !== void 0 ? _schema_maxBits : _PlayerStats.DEFAULTS.maxBits;
            }
        },
        {
            key: "bitsPerSecond",
            get: function get() {
                return this._bitsPerSecond;
            },
            set: function set(bitsPerSecond) {
                this._bitsPerSecond = bitsPerSecond;
            }
        },
        {
            key: "chipsUnlocked",
            get: function get() {
                return this.chipCount > 0 || this.maxBits > 25;
            }
        },
        {
            key: "cloudUnlocked",
            get: function get() {
                return this.boughtCloud || this.maxBits >= 256;
            }
        },
        {
            key: "internetUnlocked",
            get: function get() {
                return this.cloudUnlocked;
            }
        },
        {
            key: "update",
            value: function update(player2) {
                player2.bits > this.maxBits && (this.maxBits = player2.bits), this.chipCount = player2.chips.length, this.boughtCloud = null !== player2.cloud, this.bitsPerSecond = player2.chips.reduce(function(bps, chip) {
                    return bps + chip.bitsPerSecond;
                }, 0);
            }
        }
    ]);
    return _PlayerStats1;
}();
var PlayerStats = _PlayerStats;
__publicField(PlayerStats, "CODEC", mod.object({
    maxBits: mod.number()
}).partial()), __publicField(PlayerStats, "DEFAULTS", {
    maxBits: 0
});
var _Cloud = /*#__PURE__*/ function() {
    "use strict";
    function _Cloud1() {
        _classCallCheck(this, _Cloud1);
        __publicField(this, "_bits", _Cloud.DEFAULTS.bits), __publicField(this, "_uploadSpeed", _Cloud.DEFAULTS.uploadSpeed), __publicField(this, "uploadStartTime", _Cloud.DEFAULTS.uploadStartTime), __publicField(this, "currentUploadedBits", _Cloud.DEFAULTS.currentUploadedBits), __publicField(this, "_uploadSpeedCostManager", new CostManager(512, function(amount, prevCost) {
            return Math.pow(prevCost, 1.0635);
        }, {
            initialAmount: 64,
            incrementer: function(prevAmount) {
                return 2 * prevAmount;
            }
        }));
    }
    _createClass(_Cloud1, [
        {
            key: "schema",
            set: function set(schema) {
                this.bits = schema.bits, this.uploadSpeed = schema.uploadSpeed;
            }
        },
        {
            key: "bits",
            get: function get() {
                return this._bits;
            },
            set: function set(bits) {
                this._bits = bits;
            }
        },
        {
            key: "uploadSpeed",
            get: function get() {
                return this._uploadSpeed;
            },
            set: function set(uploadSpeed) {
                this._uploadSpeed = uploadSpeed;
            }
        },
        {
            key: "uploadSpeedPurchase",
            get: function get() {
                var _this = this;
                return new Purchase("x2 Upload Speed", this._uploadSpeedCostManager.getNextCostAt(this.uploadSpeed), function() {
                    return _this.uploadSpeed *= 2;
                });
            }
        },
        {
            key: "startUpload",
            value: function startUpload() {
                null === this.uploadStartTime && (this.uploadStartTime = Date.now(), this.currentUploadedBits = 0);
            }
        },
        {
            key: "upload",
            value: function upload(bits) {
                if (null === this.uploadStartTime) return 0;
                var maxUploadableBits = Math.floor(this.uploadProgress * this.uploadSpeed) - this.currentUploadedBits, uploadableBits = Math.max(Math.min(bits, maxUploadableBits), 0);
                return this.bits += uploadableBits, this.currentUploadedBits += uploadableBits, (this.currentUploadedBits >= this.uploadSpeed || bits <= maxUploadableBits) && (this.uploadStartTime = null), uploadableBits;
            }
        },
        {
            key: "drain",
            value: function drain(bits) {
                var bitsDrained = Math.min(bits, this.bits);
                return this.bits -= bitsDrained, bitsDrained;
            }
        },
        {
            key: "uploadProgress",
            get: function get() {
                return null === this.uploadStartTime ? 0 : Math.min((Date.now() - this.uploadStartTime) / _Cloud.UPLOAD_MILLIS, 1);
            }
        }
    ], [
        {
            key: "fromSchema",
            value: function fromSchema(schema) {
                var cloud = new _Cloud;
                return cloud.schema = schema, cloud;
            }
        }
    ]);
    return _Cloud1;
}();
var Cloud = _Cloud;
__publicField(Cloud, "DEFAULTS", {
    bits: 0,
    uploadSpeed: 64,
    uploadStartTime: null,
    currentUploadedBits: 0
}), __publicField(Cloud, "CODEC", mod.object({
    bits: mod.number().default(_Cloud.DEFAULTS.bits),
    uploadSpeed: mod.number().default(_Cloud.DEFAULTS.uploadSpeed),
    uploadStartTime: mod.nullable(mod.number()).default(_Cloud.DEFAULTS.currentUploadedBits),
    currentUploadedBits: mod.number().default(_Cloud.DEFAULTS.currentUploadedBits)
})), __publicField(Cloud, "UPLOAD_MILLIS", 1e3);
var _Player = /*#__PURE__*/ function() {
    "use strict";
    function _Player1() {
        _classCallCheck(this, _Player1);
        __publicField(this, "_bits", 0), __publicField(this, "_cloud", _Player.DEFAULTS.cloud), __publicField(this, "_disks", _Player.DEFAULTS.disks), __publicField(this, "_chips", _Player.DEFAULTS.chips), __publicField(this, "_diskCostManager", new CostManager(6, function(amount, prevCost) {
            return amount < 4 ? Math.pow(prevCost, 2.1) : Math.pow(prevCost, 2.5);
        }, {
            initialAmount: 1
        })), __publicField(this, "_chipCostManager", new CostManager(100, function(amount, prevCost) {
            return amount < 4 ? Math.pow(prevCost, 1.15) : Math.pow(prevCost, 1.75);
        })), __publicField(this, "_selection", null), __publicField(this, "_lastSaveTime", Date.now()), __publicField(this, "stats", _Player.DEFAULTS.stats);
    }
    _createClass(_Player1, [
        {
            key: "bits",
            get: function get() {
                return this._bits;
            },
            set: function set(bits) {
                this._bits = bits;
            }
        },
        {
            key: "cloud",
            get: function get() {
                return this._cloud;
            },
            set: function set(cloud) {
                this._cloud = cloud;
            }
        },
        {
            key: "cloudPurchase",
            get: function get() {
                return new Purchase("Buy Cloud Storage", 325, function(player2) {
                    return player2.cloud = new Cloud;
                });
            }
        },
        {
            key: "bitsOnDisks",
            get: function get() {
                return this.disks.reduce(function(totalBits, disk) {
                    return totalBits + disk.bits;
                }, 0);
            }
        },
        {
            key: "bitsOnCloud",
            get: function get() {
                var _a3;
                var _ref;
                return (_ref = null == (_a3 = this.cloud) ? void 0 : _a3.bits) !== null && _ref !== void 0 ? _ref : 0;
            }
        },
        {
            key: "disks",
            get: function get() {
                return this._disks;
            },
            set: function set(disks) {
                this._disks = disks;
            }
        },
        {
            key: "chips",
            get: function get() {
                return this._chips;
            },
            set: function set(chips) {
                this._chips = chips;
            }
        },
        {
            key: "nextDiskCost",
            get: function get() {
                return this._diskCostManager.getNextCostAt(this.disks.length);
            }
        },
        {
            key: "nextChipCost",
            get: function get() {
                return this._chipCostManager.getNextCostAt(this.chips.length);
            }
        },
        {
            key: "nextDiskPurchase",
            get: function get() {
                var _this = this;
                return new Purchase("Buy ".concat(formatBits(8, !0), " Disk"), this.nextDiskCost, function(player2) {
                    return player2.disks.push(new Disk(_this.disks.length, 8));
                });
            }
        },
        {
            key: "nextChipPurchase",
            get: function get() {
                return new Purchase("Buy 1 Hz Chip", this.nextChipCost, function(player2) {
                    player2.chips.push(new Chip);
                });
            }
        },
        {
            key: "selection",
            get: function get() {
                return this._selection;
            },
            set: function set(selection) {
                this._selection = selection;
            }
        },
        {
            key: "maxStorage",
            get: function get() {
                return this.disks.reduce(function(total, disk) {
                    return total + disk.capacity;
                }, 0);
            }
        },
        {
            key: "schema",
            get: function get() {
                return _Player.SAVE_DATA_CODEC.parse(this);
            },
            set: function set(schema) {
                var _this = this;
                var _a3, _b;
                var _ref, _ref1;
                this.disks = (_ref = null == (_a3 = schema.disks) ? void 0 : _a3.map(function(disk) {
                    return Disk.fromSchema(disk);
                })) !== null && _ref !== void 0 ? _ref : _Player.DEFAULTS.disks, this.chips = (_ref1 = null == (_b = schema.chips) ? void 0 : _b.map(function(chip) {
                    return Chip.fromSchema(chip, _this.disks);
                })) !== null && _ref1 !== void 0 ? _ref1 : _Player.DEFAULTS.chips, this.cloud = schema.cloud ? Cloud.fromSchema(schema.cloud) : _Player.DEFAULTS.cloud, this.stats.schema = schema.stats, console.log("Imported save data!");
            }
        },
        {
            key: "saveData",
            get: function get() {
                return function utf8ToBase64(str) {
                    return btoa(encodeURIComponent(str));
                }(JSON.stringify(this.schema));
            },
            set: function set(data2) {
                if (null == data2) return;
                var parsed = JSON.parse(function base64ToUTF8(str) {
                    return decodeURIComponent(atob(str));
                }(data2)), decoded = _Player.SAVE_DATA_CODEC.parse(parsed);
                this.schema = decoded;
            }
        },
        {
            key: "lastSaveTime",
            get: function get() {
                return this._lastSaveTime;
            },
            set: function set(lastSaveTime) {
                this._lastSaveTime = lastSaveTime;
            }
        },
        {
            key: "timeUntilAutosave",
            get: function get() {
                return this.lastSaveTime + _Player.AUTOSAVE_COOLDOWN - Date.now();
            }
        },
        {
            key: "decrementBits",
            value: function decrementBits(bits) {
                var requestedBitsToDrain = bits;
                var totalDrained = 0;
                var drainedFromDisks = this.drainDisks(bits);
                if (totalDrained += drainedFromDisks, (bits -= drainedFromDisks) > 0 && null !== this.cloud) {
                    var drainedFromCloud = this.cloud.drain(bits);
                    console.log("Drained ".concat(drainedFromCloud, " bits from cloud")), totalDrained += drainedFromCloud, bits -= drainedFromCloud;
                }
                if (bits > 0) throw alert("SERIOUS ERROR: Not enough bits to decrement!"), new Error("SERIOUS ERROR: Not enough bits to decrement!");
                if (totalDrained > requestedBitsToDrain) throw alert("SERIOUS ERROR: Drained too many bits!"), new Error("SERIOUS ERROR: Drained too many bits!");
            }
        },
        {
            key: "drainDisks",
            value: function drainDisks(bits) {
                var drainRecursive = function(bits2, disks) {
                    if (disks = disks.filter(function(disk) {
                        return disk.bits > 0;
                    }), bits2 <= 0 || 0 === disks.length) return 0;
                    var minBits = bits2;
                    var sortedDisks = disks.slice().sort(function(a, b) {
                        return minBits = Math.min(minBits, a.bits, b.bits), b.bits / b.capacity - a.bits / a.capacity || b.capacity - a.capacity;
                    });
                    var drained = 0;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = sortedDisks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var disk = _step.value;
                            var diskDrained = disk.drain(Math.min(minBits, bits2));
                            if (drained += diskDrained, (bits2 -= diskDrained) <= 0) break;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return drainRecursive(bits2, sortedDisks) + drained;
                }, totalDrained = drainRecursive(bits, this.disks);
                if (totalDrained > bits) throw alert("SERIOUS ERROR: Drained more bits than requested!"), new Error("SERIOUS ERROR: Drained more bits than requested!");
                return totalDrained;
            }
        },
        {
            key: "save",
            value: function save() {
                db.save.put({
                    data: this.saveData
                }, 0), console.log("Saved!"), this.lastSaveTime = Date.now();
            }
        },
        {
            key: "update",
            value: function update() {
                -1 === this.lastSaveTime && (this.lastSaveTime = Date.now()), Date.now() >= this.lastSaveTime + _Player.AUTOSAVE_COOLDOWN && this.save();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.chips[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var chip = _step.value;
                        chip.cycle();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (null !== this.cloud) {
                    var uploadedBits = this.cloud.upload(this.bitsOnDisks);
                    this.drainDisks(uploadedBits);
                }
                this.bits = this.bitsOnDisks + this.bitsOnCloud, this.stats.update(this);
            }
        },
        {
            key: "interactWithDisk",
            value: function interactWithDisk(disk) {
                this.selection = disk, disk.increment();
            }
        },
        {
            key: "interactWithChip",
            value: function interactWithChip(chip) {
                this.selection = chip;
            }
        },
        {
            key: "canAfford",
            value: function canAfford(cost) {
                return this.bits >= cost;
            }
        },
        {
            key: "buyPurchase",
            value: function buyPurchase(purchase) {
                var cost = purchase.cost, callback = purchase.callback;
                this.canAfford(cost) && (this.decrementBits(cost), callback(this));
            }
        },
        {
            key: "interactWithCloud",
            value: function interactWithCloud() {
                null !== this.cloud && (this.cloud.startUpload(), this.selection = this.cloud);
            }
        }
    ]);
    return _Player1;
}();
var Player = _Player;
__publicField(Player, "DEFAULTS", {
    get disks () {
        return [
            new Disk(0, 8)
        ];
    },
    get chips () {
        return [];
    },
    cloud: null,
    get stats () {
        return new PlayerStats;
    }
}), __publicField(Player, "SAVE_DATA_CODEC", mod.object({
    disks: mod.array(Disk.CODEC).default(_Player.DEFAULTS.disks),
    chips: mod.array(Chip.CODEC).default(_Player.DEFAULTS.chips),
    cloud: mod.nullable(Cloud.CODEC).default(_Player.DEFAULTS.cloud),
    stats: PlayerStats.CODEC.default(_Player.DEFAULTS.stats.schema)
}).partial()), __publicField(Player, "AUTOSAVE_COOLDOWN", 1e4), __publicField(Player, "INSTANCE", new _Player);
var player = Player.INSTANCE, components = [];
function registerComponent(component) {
    null !== component && components.push(component);
}
var _hoisted_1$9 = createBaseVNode("br", null, null, -1), _hoisted_2$9 = createBaseVNode("br", null, null, -1), _sfc_main$a = defineComponent({
    __name: "Upgrade",
    props: {
        upgrade: {
            type: Object,
            required: !0
        }
    },
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return openBlock(), createElementBlock("div", {
                class: "upgrade",
                onClick: _cache[0] || (_cache[0] = function($event) {
                    return unref(player).buyPurchase(__props.upgrade);
                }),
                style: normalizeStyle({
                    backgroundColor: unref(player).canAfford(__props.upgrade.cost) ? "yellow" : "white"
                })
            }, [
                createBaseVNode("span", null, toDisplayString(__props.upgrade.name), 1),
                _hoisted_1$9,
                createBaseVNode("span", null, "Cost: " + toDisplayString(unref(formatBits)(__props.upgrade.cost)), 1),
                _hoisted_2$9
            ], 4);
        };
    }
}), _hoisted_1$8 = {
    key: 0,
    class: "panel"
}, _hoisted_2$8 = {
    class: "header"
}, _hoisted_3$6 = createBaseVNode("br", null, null, -1), _hoisted_4$4 = {
    class: "decimal-value"
}, _hoisted_5$3 = createBaseVNode("br", null, null, -1), _hoisted_6$3 = createBaseVNode("br", null, null, -1), _hoisted_7$3 = {
    class: "upgrades-panel"
}, _hoisted_8$3 = createBaseVNode("div", {
    class: "upgrades-header"
}, "Upgrades", -1), _sfc_main$9 = defineComponent({
    __name: "DiskInfoPanel",
    props: {
        disk: {
            type: Object,
            required: !0
        }
    },
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return __props.disk ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
                createBaseVNode("span", _hoisted_2$8, toDisplayString(__props.disk.name), 1),
                _hoisted_3$6,
                createBaseVNode("span", _hoisted_4$4, "(" + toDisplayString(unref(formatBits)(__props.disk.bits)) + ")", 1),
                _hoisted_5$3,
                _hoisted_6$3,
                createBaseVNode("div", _hoisted_7$3, [
                    _hoisted_8$3,
                    createVNode(_sfc_main$a, {
                        upgrade: __props.disk.capacityPurchase
                    }, null, 8, [
                        "upgrade"
                    ])
                ])
            ])) : createCommentVNode("", !0);
        };
    }
}), _hoisted_1$7 = {
    class: "container"
}, _hoisted_2$7 = {
    class: "progress-bar"
}, _export_sfc = function(sfc, props2) {
    var target = sfc.__vccOpts || sfc;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = props2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _slicedToArray(_step.value, 2), key = _step_value[0], val = _step_value[1];
            target[key] = val;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return target;
}, ProgressBarBelow = _export_sfc(defineComponent({
    __name: "ProgressBarBelow",
    props: {
        progress: {
            type: Number,
            required: !0
        },
        color: {
            type: String,
            required: !1,
            default: "#00aa00"
        }
    },
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return openBlock(), createElementBlock("div", _hoisted_1$7, [
                renderSlot(_ctx.$slots, "default", {}, void 0, !0),
                createBaseVNode("div", _hoisted_2$7, [
                    createBaseVNode("div", {
                        style: normalizeStyle({
                            backgroundColor: __props.color,
                            width: 100 * __props.progress + "%",
                            height: "100%"
                        })
                    }, null, 4)
                ])
            ]);
        };
    }
}), [
    [
        "__scopeId",
        "data-v-c90a8e96"
    ]
]), _hoisted_1$6 = {
    class: "container"
}, _hoisted_2$6 = {
    key: 0
}, _hoisted_3$5 = {
    key: 1
}, Overclockable = _export_sfc(defineComponent({
    __name: "Overclockable",
    props: {
        chip: {
            type: Object,
            required: !0
        },
        enabled: {
            type: Boolean,
            required: !1,
            default: !0
        }
    },
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return openBlock(), createElementBlock("div", _hoisted_1$6, [
                __props.enabled ? (openBlock(), createElementBlock("span", _hoisted_2$6, [
                    createVNode(ProgressBarBelow, {
                        progress: __props.chip.overclockProgress
                    }, {
                        default: withCtx(function() {
                            return [
                                createVNode(ProgressBarBelow, {
                                    progress: __props.chip.overclockCooldownProgress,
                                    color: "#cc1199"
                                }, {
                                    default: withCtx(function() {
                                        return [
                                            renderSlot(_ctx.$slots, "default", {}, void 0, !0)
                                        ];
                                    }),
                                    _: 3
                                }, 8, [
                                    "progress"
                                ])
                            ];
                        }),
                        _: 3
                    }, 8, [
                        "progress"
                    ])
                ])) : (openBlock(), createElementBlock("span", _hoisted_3$5, [
                    renderSlot(_ctx.$slots, "default", {}, void 0, !0)
                ]))
            ]);
        };
    }
}), [
    [
        "__scopeId",
        "data-v-cdefd7be"
    ]
]), _hoisted_1$5 = {
    key: 0,
    class: "panel"
}, _hoisted_2$5 = {
    class: "header"
}, _hoisted_3$4 = createBaseVNode("br", null, null, -1), _hoisted_4$3 = createBaseVNode("option", {
    value: null
}, "None", -1), _hoisted_5$2 = [
    "value"
], _hoisted_6$2 = createBaseVNode("br", null, null, -1), _hoisted_7$2 = createBaseVNode("br", null, null, -1), _hoisted_8$2 = {
    key: 0
}, _hoisted_9$1 = createBaseVNode("br", null, null, -1), _hoisted_10$1 = createBaseVNode("br", null, null, -1), _hoisted_11$1 = createBaseVNode("br", null, null, -1), _hoisted_12$1 = createBaseVNode("br", null, null, -1), _hoisted_13$1 = {
    class: "upgrades-panel"
}, _hoisted_14$1 = createBaseVNode("div", {
    class: "upgrades-header"
}, "Upgrades", -1), _sfc_main$6 = defineComponent({
    __name: "ChipInfoPanel",
    props: {
        chip: {
            type: Object,
            required: !0
        }
    },
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return __props.chip ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
                createBaseVNode("span", _hoisted_2$5, toDisplayString(__props.chip.name), 1),
                _hoisted_3$4,
                createTextVNode(" Target Disk: "),
                withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
                        return __props.chip.targetDisk = $event;
                    }),
                    style: normalizeStyle({
                        backgroundColor: null === __props.chip.targetDisk ? "yellow" : "white"
                    })
                }, [
                    _hoisted_4$3,
                    (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(player).disks, function(disk) {
                        return openBlock(), createElementBlock("option", {
                            value: disk
                        }, toDisplayString(disk.name), 9, _hoisted_5$2);
                    }), 256))
                ], 4), [
                    [
                        vModelSelect,
                        __props.chip.targetDisk
                    ]
                ]),
                _hoisted_6$2,
                _hoisted_7$2,
                __props.chip.overclock > 0 ? (openBlock(), createElementBlock("span", _hoisted_8$2, [
                    createVNode(Overclockable, {
                        chip: __props.chip,
                        style: {
                            height: "2%"
                        }
                    }, {
                        default: withCtx(function() {
                            return [
                                createBaseVNode("div", {
                                    class: "overclock",
                                    onClick: _cache[1] || (_cache[1] = function($event) {
                                        return __props.chip.activateOverclock();
                                    })
                                }, [
                                    _hoisted_9$1,
                                    createTextVNode(" Overclock " + toDisplayString(__props.chip.overclock) + " ", 1),
                                    _hoisted_10$1,
                                    _hoisted_11$1
                                ])
                            ];
                        }),
                        _: 1
                    }, 8, [
                        "chip"
                    ]),
                    _hoisted_12$1
                ])) : createCommentVNode("", !0),
                createBaseVNode("div", _hoisted_13$1, [
                    _hoisted_14$1,
                    createVNode(_sfc_main$a, {
                        upgrade: __props.chip.clockSpeedPurchase
                    }, null, 8, [
                        "upgrade"
                    ]),
                    createVNode(_sfc_main$a, {
                        upgrade: __props.chip.overclockPurchase
                    }, null, 8, [
                        "upgrade"
                    ])
                ])
            ])) : createCommentVNode("", !0);
        };
    }
}), _hoisted_1$4 = {
    key: 0,
    class: "panel"
}, _hoisted_2$4 = createBaseVNode("span", {
    class: "header"
}, "Cloud", -1), _hoisted_3$3 = createBaseVNode("br", null, null, -1), _hoisted_4$2 = {
    class: "decimal-value"
}, _hoisted_5$1 = createBaseVNode("br", null, null, -1), _hoisted_6$1 = createBaseVNode("br", null, null, -1), _hoisted_7$1 = {
    class: "upgrades-panel"
}, _hoisted_8$1 = createBaseVNode("div", {
    class: "upgrades-header"
}, "Upgrades", -1), _sfc_main$5 = defineComponent({
    __name: "CloudInfoPanel",
    props: {
        cloud: {
            type: Object,
            required: !0
        }
    },
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return __props.cloud ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
                _hoisted_2$4,
                _hoisted_3$3,
                createBaseVNode("span", _hoisted_4$2, "(" + toDisplayString(__props.cloud.bits) + ")", 1),
                _hoisted_5$1,
                _hoisted_6$1,
                createBaseVNode("div", _hoisted_7$1, [
                    _hoisted_8$1,
                    createVNode(_sfc_main$a, {
                        upgrade: __props.cloud.uploadSpeedPurchase
                    }, null, 8, [
                        "upgrade"
                    ])
                ])
            ])) : createCommentVNode("", !0);
        };
    }
}), _sfc_main$4 = defineComponent({
    __name: "InfoPanel",
    props: {
        selection: {
            type: Object,
            required: !0
        }
    },
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return openBlock(), createElementBlock(Fragment, null, [
                _instanceof(__props.selection, unref(Disk)) ? (openBlock(), createBlock(_sfc_main$9, {
                    key: 0,
                    disk: __props.selection
                }, null, 8, [
                    "disk"
                ])) : createCommentVNode("", !0),
                _instanceof(__props.selection, unref(Chip)) ? (openBlock(), createBlock(_sfc_main$6, {
                    key: 1,
                    chip: __props.selection
                }, null, 8, [
                    "chip"
                ])) : createCommentVNode("", !0),
                _instanceof(__props.selection, unref(Cloud)) ? (openBlock(), createBlock(_sfc_main$5, {
                    key: 2,
                    cloud: __props.selection
                }, null, 8, [
                    "cloud"
                ])) : createCommentVNode("", !0)
            ], 64);
        };
    }
}), _hoisted_1$3 = {
    class: "outer-container"
}, _hoisted_2$3 = {
    key: 0,
    class: "ctext"
}, _hoisted_3$2 = {
    class: "inner-container"
}, _sfc_main$3 = defineComponent({
    __name: "ObjectsContainer",
    props: {
        header: {
            type: String,
            required: !0
        },
        info: {
            type: String,
            required: !1
        }
    },
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return openBlock(), createElementBlock("div", _hoisted_1$3, [
                createBaseVNode("div", {
                    class: normalizeClass([
                        "cheader",
                        __props.info ? "" : "ctext"
                    ])
                }, toDisplayString(__props.header), 3),
                __props.info ? (openBlock(), createElementBlock("div", _hoisted_2$3, toDisplayString(__props.info), 1)) : createCommentVNode("", !0),
                createBaseVNode("div", _hoisted_3$2, [
                    renderSlot(_ctx.$slots, "default")
                ])
            ]);
        };
    }
}), data = generate();
function generate() {
    return {
        savedOpacity: Math.max(1 - (Date.now() - player.lastSaveTime) / 5e3, 0),
        exportSaveData: function() {
            navigator.clipboard.writeText(player.saveData), alert("Save data copied to clipboard!");
        },
        importSaveData: function() {
            return player.saveData = prompt("Enter your save data:");
        },
        resetSaveData: /*#__PURE__*/ _asyncToGenerator(function() {
            var _tmp;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _tmp = confirm("Are you sure you want to reset your save data?");
                        if (!_tmp) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            db.save.clear()
                        ];
                    case 1:
                        _tmp = (_state.sent(), location.reload());
                        _state.label = 2;
                    case 2:
                        _tmp;
                        return [
                            2
                        ];
                }
            });
        })
    };
}
var _hoisted_1$2 = createBaseVNode("div", {
    class: "info"
}, [
    createBaseVNode("div", null, "b0.0.0"),
    createBaseVNode("div", null, "TetroGem 2022")
], -1), _hoisted_2$2 = {
    class: "info right-side"
}, _sfc_main$2 = defineComponent({
    __name: "DebugInfoComponent",
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return openBlock(), createElementBlock(Fragment, null, [
                _hoisted_1$2,
                createBaseVNode("div", _hoisted_2$2, [
                    createBaseVNode("div", {
                        class: "saved",
                        style: normalizeStyle({
                            opacity: unref(data).savedOpacity
                        })
                    }, "Saved!", 4),
                    createBaseVNode("div", null, "Next autosave in: " + toDisplayString(Math.ceil(unref(player).timeUntilAutosave / 1e3)) + "s", 1),
                    createBaseVNode("button", {
                        onClick: _cache[0] || (_cache[0] = function($event) {
                            return unref(player).save();
                        })
                    }, "Save"),
                    createBaseVNode("button", {
                        onClick: _cache[1] || (_cache[1] = function($event) {
                            return unref(data).exportSaveData();
                        })
                    }, "Export"),
                    createBaseVNode("button", {
                        onClick: _cache[2] || (_cache[2] = function($event) {
                            return unref(data).importSaveData();
                        })
                    }, "Import"),
                    createBaseVNode("button", {
                        onClick: _cache[3] || (_cache[3] = function($event) {
                            return unref(data).resetSaveData();
                        }),
                        style: {
                            "background-color": "pink"
                        }
                    }, "Reset")
                ])
            ], 64);
        };
    }
});
function estimateSecondsUntil(number, goal, increasePerSecond) {
    return 0 === increasePerSecond ? 0 : (goal - number) / increasePerSecond;
}
var _withScopeId$1 = function(n) {
    return pushScopeId("data-v-2e3f6b83"), n = n(), popScopeId(), n;
}, _hoisted_1$1 = {
    class: "disk-header"
}, _hoisted_2$1 = _withScopeId$1(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_3$1 = _withScopeId$1(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_4$1 = {
    class: "disk-value"
}, ChipComponent = _export_sfc(defineComponent({
    __name: "ChipComponent",
    props: {
        chip: {
            type: Object,
            required: !0
        }
    },
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return openBlock(), createBlock(Overclockable, {
                chip: __props.chip,
                enabled: __props.chip.overclock > 0
            }, {
                default: withCtx(function() {
                    return [
                        createBaseVNode("div", {
                            class: "disk disk-size",
                            onClick: _cache[0] || (_cache[0] = function($event) {
                                return unref(player).interactWithChip(__props.chip);
                            }),
                            style: normalizeStyle({
                                backgroundColor: null === __props.chip.targetDisk ? "grey" : 0 === __props.chip.bitsPerSecond ? "red" : unref(player).canAfford(__props.chip.clockSpeedPurchase.cost) || unref(player).canAfford(__props.chip.overclockPurchase.cost) ? "yellow" : "white"
                            })
                        }, [
                            createBaseVNode("span", _hoisted_1$1, toDisplayString(__props.chip.name), 1),
                            _hoisted_2$1,
                            _hoisted_3$1,
                            createBaseVNode("span", _hoisted_4$1, toDisplayString(null === __props.chip.targetDisk ? "(Disabled)" : "(".concat(__props.chip.targetDisk.diskLetter, ":)")), 1)
                        ], 4)
                    ];
                }),
                _: 1
            }, 8, [
                "chip",
                "enabled"
            ]);
        };
    }
}), [
    [
        "__scopeId",
        "data-v-2e3f6b83"
    ]
]), _withScopeId = function(n) {
    return pushScopeId("data-v-574969f0"), n = n(), popScopeId(), n;
}, _hoisted_1 = {
    class: "bit-counter"
}, _hoisted_2 = {
    class: "containers-container"
}, _hoisted_3 = {
    class: "objects-containers"
}, _hoisted_4 = {
    class: "disk-header"
}, _hoisted_5 = _withScopeId(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_6 = _withScopeId(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_7 = [
    "onClick"
], _hoisted_8 = {
    class: "disk-header"
}, _hoisted_9 = _withScopeId(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_10 = {
    class: "disk-header"
}, _hoisted_11 = _withScopeId(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_12 = _withScopeId(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_13 = {
    class: "disk-value"
}, _hoisted_14 = {
    class: "disk-header"
}, _hoisted_15 = _withScopeId(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_16 = _withScopeId(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_17 = {
    class: "disk-info"
}, _hoisted_18 = _withScopeId(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_19 = {
    class: "disk-header"
}, _hoisted_20 = _withScopeId(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_21 = _withScopeId(function() {
    return createBaseVNode("br", null, null, -1);
}), _hoisted_22 = {
    class: "disk-info"
};
function update() {
    player.update(), function update$1() {
        Object.assign(data, generate());
    }();
}
var app = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    var _ensureRenderer;
    var app2 = (_ensureRenderer = function ensureRenderer() {
        return renderer || (renderer = createRenderer(rendererOptions));
    }()).createApp.apply(_ensureRenderer, _toConsumableArray(args)), mount = app2.mount;
    return app2.mount = function(containerOrSelector) {
        var container = function normalizeContainer(container) {
            if (isString(container)) {
                return document.querySelector(container);
            }
            return container;
        }(containerOrSelector);
        if (!container) return;
        var component = app2._component;
        isFunction(component) || component.render || component.template || (component.template = container.innerHTML), container.innerHTML = "";
        var proxy = mount(container, !1, _instanceof(container, SVGElement));
        return _instanceof(container, Element) && (container.removeAttribute("v-cloak"), container.setAttribute("data-v-app", "")), proxy;
    }, app2;
}(_export_sfc(defineComponent({
    __name: "App",
    setup: function(__props) {
        return registerComponent(getCurrentInstance()), function(_ctx, _cache) {
            return openBlock(), createElementBlock(Fragment, null, [
                createBaseVNode("div", _hoisted_1, " You have " + toDisplayString(unref(formatBits)(unref(player).bits)), 1),
                createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", _hoisted_3, [
                        unref(player).stats.internetUnlocked ? (openBlock(), createBlock(_sfc_main$3, {
                            key: 0,
                            header: "Internet"
                        }, {
                            default: withCtx(function() {
                                return [
                                    unref(player).stats.cloudUnlocked ? (openBlock(), createBlock(_sfc_main$3, {
                                        key: 0,
                                        header: "Cloud",
                                        info: null === unref(player).cloud ? void 0 : "Used ".concat(unref(formatBits)(unref(player).bitsOnCloud), ", Uploading at ").concat(unref(formatBits)(unref(player).cloud.uploadSpeed), "/s")
                                    }, {
                                        default: withCtx(function() {
                                            return [
                                                null === unref(player).cloud ? (openBlock(), createElementBlock("div", {
                                                    key: 0,
                                                    class: "cloud cloud-progress",
                                                    onClick: _cache[0] || (_cache[0] = function($event) {
                                                        return unref(player).buyPurchase(unref(player).cloudPurchase);
                                                    }),
                                                    style: normalizeStyle({
                                                        backgroundColor: unref(player).canAfford(unref(player).cloudPurchase.cost) ? "yellow" : "white"
                                                    })
                                                }, [
                                                    createBaseVNode("span", _hoisted_4, toDisplayString(unref(player).cloudPurchase.name), 1),
                                                    _hoisted_5,
                                                    createBaseVNode("span", null, "Cost: " + toDisplayString(unref(formatBits)(unref(player).cloudPurchase.cost)), 1)
                                                ], 4)) : createCommentVNode("", !0),
                                                null !== unref(player).cloud ? (openBlock(), createBlock(ProgressBarBelow, {
                                                    key: 1,
                                                    class: "cloud-progress",
                                                    progress: unref(player).cloud.uploadProgress
                                                }, {
                                                    default: withCtx(function() {
                                                        return [
                                                            createBaseVNode("div", {
                                                                class: "cloud",
                                                                onClick: _cache[1] || (_cache[1] = function($event) {
                                                                    return unref(player).interactWithCloud();
                                                                }),
                                                                style: normalizeStyle({
                                                                    backgroundColor: unref(player).canAfford(unref(player).cloud.uploadSpeedPurchase.cost) ? "yellow" : "white"
                                                                })
                                                            }, " Upload to Cloud ", 4)
                                                        ];
                                                    }),
                                                    _: 1
                                                }, 8, [
                                                    "progress"
                                                ])) : createCommentVNode("", !0)
                                            ];
                                        }),
                                        _: 1
                                    }, 8, [
                                        "info"
                                    ])) : createCommentVNode("", !0)
                                ];
                            }),
                            _: 1
                        })) : createCommentVNode("", !0),
                        _hoisted_6,
                        createVNode(_sfc_main$3, {
                            header: "Disks",
                            info: "Used ".concat(unref(formatBits)(unref(player).bitsOnDisks), " / ").concat(unref(formatBits)(unref(player).maxStorage), ", Full in ").concat(unref(formatTime)(unref(estimateSecondsUntil)(unref(player).bitsOnDisks, unref(player).maxStorage, unref(player).stats.bitsPerSecond)))
                        }, {
                            default: withCtx(function() {
                                return [
                                    (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(player).disks, function(disk) {
                                        return openBlock(), createElementBlock("div", {
                                            class: "disk disk-size",
                                            onClick: function($event) {
                                                return unref(player).interactWithDisk(disk);
                                            },
                                            style: normalizeStyle({
                                                backgroundColor: unref(player).canAfford(disk.capacityPurchase.cost) ? "yellow" : "white"
                                            })
                                        }, [
                                            createBaseVNode("span", _hoisted_8, toDisplayString(disk.nameWithoutLetter), 1),
                                            _hoisted_9,
                                            createBaseVNode("span", _hoisted_10, "(" + toDisplayString(disk.diskLetter) + ":)", 1),
                                            _hoisted_11,
                                            _hoisted_12,
                                            createBaseVNode("span", _hoisted_13, toDisplayString(unref(formatBits)(disk.bits)), 1)
                                        ], 12, _hoisted_7);
                                    }), 256)),
                                    createBaseVNode("div", {
                                        class: "disk disk-buy disk-size",
                                        onClick: _cache[2] || (_cache[2] = function($event) {
                                            return unref(player).buyPurchase(unref(player).nextDiskPurchase);
                                        }),
                                        style: normalizeStyle({
                                            backgroundColor: unref(player).canAfford(unref(player).nextDiskPurchase.cost) ? "yellow" : "white"
                                        })
                                    }, [
                                        createBaseVNode("span", _hoisted_14, toDisplayString(unref(player).nextDiskPurchase.name), 1),
                                        _hoisted_15,
                                        _hoisted_16,
                                        createBaseVNode("span", _hoisted_17, "Cost: " + toDisplayString(unref(formatBits)(unref(player).nextDiskPurchase.cost)), 1)
                                    ], 4)
                                ];
                            }),
                            _: 1
                        }, 8, [
                            "info"
                        ]),
                        _hoisted_18,
                        unref(player).stats.chipsUnlocked ? (openBlock(), createBlock(_sfc_main$3, {
                            key: 1,
                            header: "Chips",
                            info: 0 === unref(player).chips.length ? void 0 : "Computing ".concat(unref(formatBits)(unref(player).stats.bitsPerSecond), "/s")
                        }, {
                            default: withCtx(function() {
                                return [
                                    (openBlock(!0), createElementBlock(Fragment, null, renderList(unref(player).chips, function(chip) {
                                        return openBlock(), createBlock(ChipComponent, {
                                            class: "disk-size",
                                            chip: chip
                                        }, null, 8, [
                                            "chip"
                                        ]);
                                    }), 256)),
                                    createBaseVNode("div", {
                                        class: "disk disk-buy disk-size",
                                        onClick: _cache[3] || (_cache[3] = function($event) {
                                            return unref(player).buyPurchase(unref(player).nextChipPurchase);
                                        }),
                                        style: normalizeStyle({
                                            backgroundColor: unref(player).canAfford(unref(player).nextChipPurchase.cost) ? "yellow" : "white"
                                        })
                                    }, [
                                        createBaseVNode("span", _hoisted_19, toDisplayString(unref(player).nextChipPurchase.name), 1),
                                        _hoisted_20,
                                        _hoisted_21,
                                        createBaseVNode("span", _hoisted_22, "Cost: " + toDisplayString(unref(formatBits)(unref(player).nextChipPurchase.cost)), 1)
                                    ], 4)
                                ];
                            }),
                            _: 1
                        }, 8, [
                            "info"
                        ])) : createCommentVNode("", !0)
                    ]),
                    createVNode(_sfc_main$4, {
                        selection: unref(player).selection
                    }, null, 8, [
                        "selection"
                    ])
                ]),
                createVNode(_sfc_main$2)
            ], 64);
        };
    }
}), [
    [
        "__scopeId",
        "data-v-574969f0"
    ]
]));
!(function() {
    var _main = _asyncToGenerator(function() {
        var res;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        db.open()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        db.save.limit(1).first()
                    ];
                case 2:
                    res = _state.sent();
                    if (console.log(res), void 0 !== res) try {
                        player.saveData = res.data;
                    } catch (e) {
                        alert("Failed to load save data. Resetting save data.");
                    }
                    setInterval(function() {
                        update(), function forceUpdateAll() {
                            var _a3;
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var component = _step.value;
                                    null == (_a3 = component.proxy) || _a3.$forceUpdate();
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        }();
                    }, 20), app.mount("#app");
                    return [
                        2
                    ];
            }
        });
    });
    function main() {
        return _main.apply(this, arguments);
    }
    return main;
})()();


//#sourceMappingURL=data:application/json;charset=utf-8;base64,IntcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInN0ZG91dFwifSI=