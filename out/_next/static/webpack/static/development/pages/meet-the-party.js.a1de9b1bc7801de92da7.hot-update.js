webpackHotUpdate("static/development/pages/meet-the-party.js",{

/***/ "./pages/meet-the-party.js":
/*!*********************************!*\
  !*** ./pages/meet-the-party.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");







var _jsxFileName = "/Users/pottsga/dev/wedding/pages/meet-the-party.js";


var EmmaImagePath = '/static/images/party/bride/emma_hill.jpg';
var KahliImagePath = '/static/images/party/bride/kahli_potts.jpg';
var KatherineImagePath = '/static/images/party/bride/katherine_hill.jpg';
var MadeleineImagePath = '/static/images/party/bride/madeleine_tilley.jpg';
var NatalieImagePath = '/static/images/party/bride/natalie_ferguson.jpg';
var PaigeImagePath = '/static/images/party/bride/paige_plampin.jpg';
var RyanImagePath = '/static/images/party/groom/ryan_phelps.jpg';
var TylerImagePath = '/static/images/party/groom/tyler_phelps.jpg';

var PartyMember = function PartyMember(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: {
      width: '400px',
      background: props.isMaidOfHonor ? '#6A2541' : '#F0EAD6',
      color: props.isMaidOfHonor ? 'white' : 'black',
      borderRadius: '5px',
      margin: '10px',
      padding: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: props.img,
    style: {
      width: '200px',
      height: '200px',
      borderRadius: '2px',
      display: 'block',
      margin: 'auto',
      marginBottom: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.name, ' ', props.isMaidOfHonor ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    style: {
      color: '#DAA520'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\u2014 Maid of Honor") : ''), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, props.blurb));
};

var MeetTheParty =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MeetTheParty, _React$Component);

  function MeetTheParty() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MeetTheParty);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MeetTheParty)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MeetTheParty, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        container: "true",
        title: "Meet the Party",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Bridesmaids"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PartyMember, {
        name: "Emma",
        isMaidOfHonor: true,
        img: EmmaImagePath,
        blurb: "Emma and I met in the 5th grade. We don\u2019t really remember how we first initially met but all we know is that we became instant best friends. We most likely connected due to our weirdness and sense of humor. We spent our middle school sleep overs hacking people\u2019s emails and trying to become YouTube famous. We spent most nights on the phone quizzing each other for upcoming tests. We were both high achievers in school and awfully competitive when it came to comparing our grades. Emma is now an ICU Nurse at The Cleveland Clinic and she is currently in school to become a Nurse Practitioner. ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PartyMember, {
        name: "Kahli",
        img: KahliImagePath,
        blurb: "I met Kahli 7 years ago. Kahli is Greg\u2019s sister, and my soon to be sister-in-law. Kahli is the most fun-loving person I know. She keeps things real. If she were to try to tell you a lie, she would bust up laughing while telling you. ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PartyMember, {
        name: "Katherine",
        img: KatherineImagePath,
        blurb: "Katherine and I met in pharmacy school. I can always depend on Katherine to relieve my nerves before a quiz or exam. I enjoy all our laughs and jokes in the stressful place called pharmacy school. Katherine is down to earth and basically the mom of us friends in pharmacy school.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PartyMember, {
        name: "Madeleine",
        img: MadeleineImagePath,
        blurb: "Madeleine and I met in pharmacy school. This girl is glued to the books. She is absolutely addicted to knowing 110% more than what she will need for the exam. Although she is extremely studious and smart, she definitely knows how to put the books down every once and awhile to have a good time. Madeleine is such a dependable friend.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PartyMember, {
        name: "Natalie",
        img: NatalieImagePath,
        blurb: "Natalie and I met at some point in middle school or high school. We both graduated high school together. I told my older brother to quit trying to date people in my class, but I\u2019m glad he didn\u2019t listen for this one. Natalie and Tyler are getting married June 21 this year as well. Natalie graduated from Kent State University and joined the family here in SC to teach special education.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PartyMember, {
        name: "Paige",
        img: PaigeImagePath,
        blurb: "Paige and I met in pharmacy school. Paige is the person you text and she doesn\u2019t respond for 3 days. But you know that she isn\u2019t ignoring you, but she\u2019s just busy and isn\u2019t connected to her phone like every other living person at this point. We all love this about Paige. Paige is like me in the sense that you think she\u2019s real quiet when you first meet her but she\u2019s really funny and knows how to have a good time.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Groomsmen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PartyMember, {
        name: "Ryan",
        img: RyanImagePath,
        blurb: "Ryan is Michelle\u2019s younger brother. He currently attends college at the Ohio State University.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PartyMember, {
        name: "Tyler",
        img: TylerImagePath,
        blurb: "Tyler is Michelle\u2019s older brother. He currently works for Clemson.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })));
    }
  }]);

  return MeetTheParty;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MeetTheParty);

/***/ })

})
//# sourceMappingURL=meet-the-party.js.a1de9b1bc7801de92da7.hot-update.js.map