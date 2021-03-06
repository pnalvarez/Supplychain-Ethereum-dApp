'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Supplychain = require('./build/Supplychain.json');

var _Supplychain2 = _interopRequireDefault(_Supplychain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Supplychain2.default.interface), '0xB44447D854AAB82950C91DFeCe1C719a304D1ce3');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3N1cHBseWNoYWluLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJTdXBwbHljaGFpbiIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNiLEtBQUssQUFBTCxNQUFXLHNCQUFZLEFBQXZCLEFBRGEsWUFFYixBQUZhLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoic3VwcGx5Y2hhaW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9