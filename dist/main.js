/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/alarm.js":
/*!**********************!*\
  !*** ./src/alarm.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAudio: () => (/* binding */ addAudio),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _music_Chicago_Hard_To_Say_Im_Sorry_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music/Chicago_Hard_To_Say_Im_Sorry.mp3 */ \"./src/music/Chicago_Hard_To_Say_Im_Sorry.mp3\");\n\nvar addAudio = function addAudio() {\n  var audio = \"<audio id='audio-id' loop autoplay>\\n      <source src=\\\"\".concat(_music_Chicago_Hard_To_Say_Im_Sorry_mp3__WEBPACK_IMPORTED_MODULE_0__, \"\\\" type=\\\"audio/mpeg\\\">\\n    </audio>\\n  \");\n  var musicContainer = document.getElementById('music');\n  if (musicContainer.childElementCount === 0) musicContainer.innerHTML = audio;\n  var audioElement = document.getElementById('audio-id');\n  audioElement.muted = true;\n};\nvar alarm = function alarm() {\n  var audioElement = document.getElementById('audio-id');\n  var endTimes = document.getElementsByClassName('time');\n  var now = new Date();\n  var hour = now.getHours();\n  var minute = now.getMinutes();\n  Object.values(endTimes).forEach(function (item) {\n    var endHour = Number(item.value);\n    if (hour === endHour && minute <= 7) {\n      item.style.backgroundColor = '#ff6b00';\n      if (!item.getAttribute('data-set')) {\n        audioElement.muted = false;\n        setTimeout(function () {\n          audioElement.muted = true;\n          item.removeAttribute('data-set');\n        }, 30 * 1000);\n      } else {\n        item.removeAttribute('data-set');\n      }\n      item.setAttribute('data-set', 'played');\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alarm);\n\n//# sourceURL=webpack://to-do-list/./src/alarm.js?");

/***/ }),

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ drawClock)\n/* harmony export */ });\nfunction drawFace(ctx, radius) {\n  var grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);\n  grad.addColorStop(0, '#333');\n  grad.addColorStop(0.5, 'white');\n  grad.addColorStop(1, '#333');\n  ctx.beginPath();\n  ctx.arc(0, 0, radius, 0, 2 * Math.PI);\n  ctx.fillStyle = 'white';\n  ctx.fill();\n  ctx.strokeStyle = grad;\n  ctx.lineWidth = radius * 0.1;\n  ctx.stroke();\n  ctx.beginPath();\n  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);\n  ctx.fillStyle = '#333';\n  ctx.fill();\n}\nfunction drawNumbers(ctx, radius) {\n  ctx.font = \"\".concat(radius * 0.15, \"px arial\");\n  ctx.textBaseline = 'middle';\n  ctx.textAlign = 'center';\n  for (var num = 1; num < 13; num += 1) {\n    var ang = num * Math.PI / 6;\n    ctx.rotate(ang);\n    ctx.translate(0, -radius * 0.85);\n    ctx.rotate(-ang);\n    ctx.fillText(num.toString(), 0, 0);\n    ctx.rotate(ang);\n    ctx.translate(0, radius * 0.85);\n    ctx.rotate(-ang);\n  }\n}\nfunction drawHand(ctx, pos, length, width) {\n  ctx.beginPath();\n  ctx.lineWidth = width;\n  ctx.lineCap = 'round';\n  ctx.moveTo(0, 0);\n  ctx.rotate(pos);\n  ctx.lineTo(0, -length);\n  ctx.stroke();\n  ctx.rotate(-pos);\n}\nfunction drawTime(ctx, radius) {\n  var now = new Date();\n  var hour = now.getHours();\n  var minute = now.getMinutes();\n  var second = now.getSeconds();\n  // hour\n  hour %= 12;\n  hour = hour * Math.PI / 6 + minute * Math.PI / (6 * 60) + second * Math.PI / (360 * 60);\n  drawHand(ctx, hour, radius * 0.5, radius * 0.07);\n  // minute\n  minute = minute * Math.PI / 30 + second * Math.PI / (30 * 60);\n  drawHand(ctx, minute, radius * 0.8, radius * 0.07);\n  // second\n  second = second * Math.PI / 30;\n  drawHand(ctx, second, radius * 0.9, radius * 0.02);\n}\nfunction drawClock(ctx, radius) {\n  drawFace(ctx, radius);\n  drawNumbers(ctx, radius);\n  drawTime(ctx, radius);\n}\n\n//# sourceURL=webpack://to-do-list/./src/clock.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteArrOfIndex: () => (/* binding */ deleteArrOfIndex),\n/* harmony export */   editTask: () => (/* binding */ editTask),\n/* harmony export */   exhangeData: () => (/* binding */ exhangeData),\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   setData: () => (/* binding */ setData)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar setData = function setData(tasks) {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\nvar getData = function getData() {\n  return JSON.parse(localStorage.getItem('tasks')) || [{}];\n};\nvar deleteArrOfIndex = function deleteArrOfIndex(arrOfIndex) {\n  var tasks = getData().filter(function (e) {\n    return !arrOfIndex.includes(e.index.toString());\n  }).map(function (e, i) {\n    return _objectSpread(_objectSpread({}, e), {}, {\n      index: i + 1\n    });\n  });\n  setData(tasks);\n};\nvar editTask = function editTask(e) {\n  var tasks = getData();\n  var editedTask = tasks.filter(function (item) {\n    return item.index === Number(e.target.name);\n  })[0];\n  if (e.target.type === 'checkbox') {\n    editedTask.completed = e.target.checked;\n  }\n  if (e.target.type === 'text') {\n    editedTask.description = e.target.value;\n  }\n  if (e.target.type === 'number') {\n    editedTask.endTime = e.target.value;\n  }\n  tasks[editedTask.index - 1] = editedTask;\n  setData(tasks);\n};\nvar exhangeData = function exhangeData(liId1, liId2) {\n  var tasks = getData();\n  var _ref = [Number(liId1.split('-')[1]), Number(liId2.split('-')[1])],\n    idx1 = _ref[0],\n    idx2 = _ref[1];\n  var _ref2 = [tasks[idx1 - 1], tasks[idx2 - 1]],\n    task1 = _ref2[0],\n    task2 = _ref2[1];\n  task1.index = idx2;\n  task2.index = idx1;\n  tasks[idx1 - 1] = task2;\n  tasks[idx2 - 1] = task1;\n  setData(tasks);\n};\n\n//# sourceURL=webpack://to-do-list/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n/* harmony import */ var _alarm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alarm.js */ \"./src/alarm.js\");\n\n\n\n\nvar todos = new _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ntodos.buildForm1();\ntodos.buildForm2();\ntodos.showTasks();\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\nvar radius = canvas.height / 2;\nctx.translate(radius, radius);\nradius *= 0.90;\nsetInterval(function () {\n  return (0,_clock_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ctx, radius);\n}, 1000);\n(0,_alarm_js__WEBPACK_IMPORTED_MODULE_3__.addAudio)();\nsetInterval(_alarm_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 15 * 1000);\nvar context = new AudioContext();\nif (context.state === 'suspended') {\n  setInterval(function () {\n    return (0,_clock_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ctx, radius);\n  }, 1000);\n  setInterval(_alarm_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 15 * 1000);\n}\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/newElement.js":
/*!***************************!*\
  !*** ./src/newElement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar createNewElement = function createNewElement(_ref) {\n  var type = _ref.type,\n    id = _ref.id,\n    className = _ref.className,\n    content = _ref.content,\n    _ref$events = _ref.events,\n    events = _ref$events === void 0 ? {} : _ref$events;\n  var el = document.createElement(type);\n  el.id = id || '';\n  el.className = className || '';\n  el.innerHTML = content || '';\n  Object.entries(events).forEach(function (_ref2) {\n    var _ref3 = _slicedToArray(_ref2, 2),\n      fn = _ref3[0],\n      handle = _ref3[1];\n    el.addEventListener(fn, handle);\n  });\n  return el;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewElement);\n\n//# sourceURL=webpack://to-do-list/./src/newElement.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _newElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newElement.js */ \"./src/newElement.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nvar Task = /*#__PURE__*/_createClass(function Task() {\n  var _this = this;\n  _classCallCheck(this, Task);\n  _defineProperty(this, \"buildForm1\", function () {\n    var form = (0,_newElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'form',\n      id: 'form1',\n      className: '',\n      content: \"\\n        <input id=\\\"form1-input1\\\" name=\\\"newTask\\\" type=\\\"text\\\"\\n          placeholder=\\\"Add to your list...\\\" required\\n        />\\n\\n        <input id=\\\"form1-input2\\\" name=\\\"endTime\\\" type=\\\"number\\\" min=\\\"0\\\" max=\\\"23\\\"\\n          placeholder=\\\"hour\\\" required\\n        />\\n\\n        <button type='submit' id='form1-btn'>\\n          <span id=\\\"form1-span\\\" class=\\\"material-symbols-outlined\\\">\\n            subdirectory_arrow_left\\n          </span>\\n        </button>\\n        \\n      \",\n      events: {\n        submit: _this.addNew\n      }\n    });\n    document.querySelector('main').appendChild(form);\n  });\n  _defineProperty(this, \"buildForm2\", function () {\n    var btn = (0,_newElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'button',\n      id: 'form2-btn',\n      content: 'Clear all completed'\n    });\n    var form = (0,_newElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'form',\n      id: 'form2',\n      events: {\n        submit: _this.deleteTasks,\n        input: _data_js__WEBPACK_IMPORTED_MODULE_0__.editTask\n      }\n    });\n    form.append(btn);\n    document.querySelector('main').appendChild(form);\n  });\n  _defineProperty(this, \"createLiTemplate\", function (task) {\n    var span1 = (0,_newElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'span',\n      id: \"span1-\".concat(task.index),\n      className: 'material-symbols-outlined',\n      content: 'more_vert',\n      events: {\n        click: _this.enableEdit\n      }\n    });\n    var span2 = (0,_newElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'span',\n      id: \"span2-\".concat(task.index),\n      className: 'material-symbols-outlined span-none',\n      content: 'delete',\n      events: {\n        click: _this.deleteSingleTask\n      }\n    });\n    var li = (0,_newElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'li',\n      id: \"li-\".concat(task.index),\n      className: 'form2-ul-li',\n      content: \"<input class=\\\"form2-input\\\" type=\\\"checkbox\\\" name=\\\"\".concat(task.index, \"\\\" \").concat(task.completed ? 'checked' : '', \"/>\\n      <input class=\\\"form2-input\\\" type=\\\"text\\\" value=\\\"\").concat(task.description, \"\\\" name=\\\"\").concat(task.index, \"\\\" disabled required/>\\n      <input class=\\\"form2-input time\\\" type=\\\"number\\\" value=\\\"\").concat(task.endTime, \"\\\" name=\\\"\").concat(task.index, \"\\\" disabled required max=\\\"23\\\" min=\\\"0\\\"/>\\n      <hr>\\n      \"),\n      events: {\n        drag: _this.drag,\n        dragover: _this.dragover\n      }\n    });\n    li.draggable = 'true';\n    li.appendChild(span1);\n    li.appendChild(span2);\n    return li;\n  });\n  _defineProperty(this, \"defineLi\", function (e) {\n    var li;\n    if (e.target.nodeName === 'LI') li = e.target;\n    if (e.target.parentNode.nodeName === 'LI') li = e.target.parentNode;\n    return li;\n  });\n  _defineProperty(this, \"drag\", function (e) {\n    e.preventDefault();\n    _this.draggedLiId = e.target.id;\n  });\n  _defineProperty(this, \"dragover\", function (e) {\n    e.preventDefault();\n  });\n  _defineProperty(this, \"drop\", function (e) {\n    e.preventDefault();\n    var draggedLi = _this.draggedLiId ? document.querySelector(\"#\".concat(_this.draggedLiId)) : null;\n    var draggOverE = _this.defineLi(e);\n    var ul = document.querySelector('#ul-tasks');\n    if (draggedLi && draggOverE.id !== draggedLi.id) {\n      ul.insertBefore(draggedLi, draggOverE);\n      (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.exhangeData)(draggedLi.id, draggOverE.id);\n      _this.refreshTasks();\n    }\n  });\n  _defineProperty(this, \"refreshTasks\", function () {\n    document.querySelector('#ul-tasks').innerHTML = '';\n    _this.showTasks();\n  });\n  _defineProperty(this, \"showTasks\", function () {\n    var ul = (0,_newElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'ul',\n      id: 'ul-tasks',\n      className: 'form2-ul',\n      events: {\n        drop: _this.drop\n      }\n    });\n    (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.getData)().forEach(function (e) {\n      ul.appendChild(_this.createLiTemplate(e));\n    });\n    document.querySelector('#form2').insertAdjacentElement('afterbegin', ul);\n  });\n  _defineProperty(this, \"addNew\", function (e) {\n    e.preventDefault();\n    var tasks = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\n    var newTask = {\n      index: tasks.length + 1,\n      description: e.target.elements[0].value,\n      endTime: e.target.elements[1].value,\n      completed: false\n    };\n    if (newTask.description.length > 0) {\n      tasks.push(newTask);\n      (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.setData)(tasks);\n      _this.refreshTasks();\n      e.target.reset();\n    }\n  });\n  _defineProperty(this, \"deleteTasks\", function (e) {\n    e.preventDefault();\n    var checks = document.querySelectorAll('input[type=\"checkbox\"]');\n    var checkeds = [];\n    checks.forEach(function (e) {\n      if (e.checked) checkeds.push(e.name);\n    });\n    if (checkeds.length > 0) {\n      (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.deleteArrOfIndex)(checkeds);\n    }\n    _this.refreshTasks();\n  });\n  _defineProperty(this, \"deleteSingleTask\", function (e) {\n    var arrIndex = new Array(e.target.id.split('-')[1]);\n    (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.deleteArrOfIndex)(arrIndex);\n    _this.refreshTasks();\n  });\n  _defineProperty(this, \"enableEdit\", function (e) {\n    var span1 = document.querySelector(\"#\".concat(e.target.id));\n    span1.classList.add('span-none');\n    var index = e.target.id.split('-')[1];\n    var span2 = document.querySelector(\"#span2-\".concat(index));\n    span2.classList.remove('span-none');\n    var inputs = document.querySelectorAll(\".form2-input[name=\\\"\".concat(index, \"\\\"]\"));\n    Object.values(inputs).forEach(function (input) {\n      input.disabled = false;\n      input.focus();\n      if (input.type === 'text') {\n        input.setSelectionRange(input.value.length, input.value.length);\n      }\n    });\n  });\n  document.querySelector('#refresh-btn').addEventListener('click', this.refreshTasks);\n  this.draggedLiId = null;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to-do-list/./src/tasks.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  font-size: 15px;\n  font-family: Raleway, fantasy;\n  margin: 0;\n}\n\nbody {\n  background: bisque;\n  padding: 20px 10px;\n  max-width: 700px;\n}\n\n#header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n#header h1 {\n  flex: 1;\n  font-size: 20px;\n}\n\n#form1 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 10px 0;\n  margin: 20px 0;\n  background: rgb(255, 243, 220);\n}\n\n#form1-input1 {\n  flex: 1;\n  background: none;\n  border: none;\n  padding: 5px 5px;\n}\n\n#form1-input2 {\n  flex: 1;\n  max-width: 80px;\n  text-align: center;\n  background: none;\n  outline: none;\n  border: none;\n  border-left: 0.1px solid orange;\n  padding: 5px 5px;\n}\n\n#form1-input1:focus {\n  outline: none;\n  background: none;\n  width: 30px;\n}\n\n#form1-btn {\n  border: none;\n  background: transparent;\n}\n\n#form1-span {\n  background: rgb(255, 243, 220);\n}\n\n#refresh-btn:hover {\n  color: #545b77;\n}\n\n#refresh-btn:active {\n  color: bisque;\n}\n\n#form2-btn {\n  width: 100%;\n  margin-top: 20px;\n  padding: 15px 0;\n  background: wheat;\n  border: none;\n  border-radius: 5px;\n  transition: box-shadow 0.2s;\n  box-shadow: 1px 1px #545b77;\n}\n\n#form2-btn:hover {\n  background: orange;\n  box-shadow: 2px 3px #545b77;\n}\n\n#form2-btn:active {\n  box-shadow: 0 1px #545b77;\n  transform: translateY(1px);\n}\n\n#form2-btn:active::after {\n  box-shadow: 2px 3px #545b77;\n}\n\n.form2-ul {\n  list-style: none;\n  padding-left: 5px;\n}\n\n.form2-input {\n  border: none;\n  outline: none;\n  color: black;\n  text-transform: capitalize;\n  height: 60px;\n}\n\n.form2-input:nth-child(3) {\n  max-width: 80px;\n  text-align: center;\n  border-left: 1px solid orange;\n  outline: none;\n  color: black;\n  text-transform: capitalize;\n  height: 60px;\n  font-size: 1.3rem;\n}\n\n.form2-ul-li {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 5px;\n  padding: 5px 5px;\n  background: none;\n  border-bottom: 1px solid rgb(224, 224, 224);\n}\n\n.form2-ul-li:hover {\n  background: wheat;\n  outline: auto #116a7b;\n}\n\n.form2-input:hover {\n  color: #116a7b;\n  font-weight: bold;\n}\n\n.form2-input[type=text] {\n  flex: 1;\n  padding: 5px 5px;\n  background: none;\n}\n\n.span-none {\n  display: none;\n}\n\n.material-symbols-outlined {\n  width: 30px;\n  font-weight: 400;\n  color: rgb(131, 131, 131);\n  cursor: pointer;\n}\n\n.material-symbols-outlined:hover {\n  color: #116a7b;\n}\n\n.material-symbols-outlined:active {\n  color: bisque;\n}\n\n#canvas {\n  margin-right: 50px;\n  width: 130px;\n  height: 130px;\n}\n\n#music {\n  margin-top: 20px;\n}\n\n@media screen and (min-width: 768px) {\n  body {\n    padding: 20px 10%;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/music/Chicago_Hard_To_Say_Im_Sorry.mp3":
/*!****************************************************!*\
  !*** ./src/music/Chicago_Hard_To_Say_Im_Sorry.mp3 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d454cffb726a7c40473.mp3\";\n\n//# sourceURL=webpack://to-do-list/./src/music/Chicago_Hard_To_Say_Im_Sorry.mp3?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;