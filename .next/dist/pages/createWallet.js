'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _supplychain = require('../ethereum/supplychain');

var _supplychain2 = _interopRequireDefault(_supplychain);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedro.alvarez/Desktop/ProjetoFinal/pages/createWallet.js?entry';


var createWallet = function (_Component) {
    (0, _inherits3.default)(createWallet, _Component);

    function createWallet() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, createWallet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = createWallet.__proto__ || (0, _getPrototypeOf2.default)(createWallet)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            account: '0x0',
            walletAddress: '0x0',
            maxWeight: '',
            funcao: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _supplychain2.default.methods.createWallet(_this.state.walletAddress, _this.state.maxWeight, _this.state.funcao).send({ from: _this.state.account });

                            case 5:
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 10:
                                _this.setState({ loading: false });

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 7]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(createWallet, [{
        key: 'componentDidMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var accounts, account;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context2.sent;
                                account = accounts[0];

                                this.setState({ account: account });

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentDidMount() {
                return _ref3.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, this.state.account, '(manager) adicionando nova wallet'), _react2.default.createElement('form', { className: 'ui form', onSubmit: this.onSubmit, style: { marginTop: "60px" }, error: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('div', { className: 'field', style: { marginBottom: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Address: '), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ walletAddress: e.target.value });
                }, name: 'address', placeholder: 'Insert Ethereum Wallet Address', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            })), _react2.default.createElement('div', { className: 'field', style: { marginBottom: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, ' Max Weight'), _react2.default.createElement('input', { type: 'text', onChange: function onChange(e) {
                    _this3.setState({ maxWeight: e.target.value });
                }, name: 'id', placeholder: 'ID of medicine on database', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            })), _react2.default.createElement('select', { onChange: function onChange(e) {
                    _this3.setState({ funcao: e.target.value });
                }, className: 'ui dropdown', style: { marginBottom: "40px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('option', { value: 'Productor', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Productor'), _react2.default.createElement('option', { value: 'Stock', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Stock'), _react2.default.createElement('option', { value: 'Transport', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Transport'), _react2.default.createElement('option', { value: 'CirurgicCenter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Cirurgic Center'), _react2.default.createElement('option', { value: 'Seller', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Seller'), _react2.default.createElement('option', { value: 'Buyer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Buyer')), this.state.errorMessage !== '' ? _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Oops, there was an error!'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, this.state.errorMessage)) : null, _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', className: 'ui positive button', loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Create a Kind of Medicine for your Supplychain')));
        }
    }]);

    return createWallet;
}(_react.Component);

exports.default = createWallet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NyZWF0ZVdhbGxldC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIndlYjMiLCJzdXBwbHljaGFpbiIsIk1lc3NhZ2UiLCJCdXR0b24iLCJjcmVhdGVXYWxsZXQiLCJzdGF0ZSIsImFjY291bnQiLCJ3YWxsZXRBZGRyZXNzIiwibWF4V2VpZ2h0IiwiZnVuY2FvIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFRLEFBQ1IsQUFBUTs7Ozs7OztJQUVhLEE7Ozs7Ozs7Ozs7Ozs7Ozs0TkFFbkIsQTtxQkFBUSxBQUNLLEFBQ1Q7MkJBRkksQUFFVyxBQUNmO3VCQUhJLEFBR08sQUFDWDtvQkFKSSxBQUlJLEFBQ1I7MEJBTEksQUFLVSxBQUNkO3FCQU5JLEEsQUFNSztBQU5MLEFBQ0osaUIsQUFRSjtpR0FBVyxpQkFBQSxBQUFNLEdBQU47OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7a0NBQUEsQUFBRSxBQUVGOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQUh2QixBQUdQLEFBQWMsQUFBOEI7Z0RBSHJDO2dEQUFBO3VDQUtELHNCQUFBLEFBQVksUUFBWixBQUNhLGFBQWEsTUFBQSxBQUFLLE1BRC9CLEFBQ3FDLGVBQWMsTUFBQSxBQUFLLE1BRHhELEFBQzhELFdBQVUsTUFBQSxBQUFLLE1BRDdFLEFBQ21GLFFBRG5GLEFBRWEsS0FBSyxFQUFDLE1BQU0sTUFBQSxBQUFLLE1BUDdCLEFBS0QsQUFFa0IsQUFBa0I7O2lDQVBuQztnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFTTDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQVR4QixBQVNMLEFBQWMsQUFBbUI7O2lDQUVuQztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQVhSLEFBV1AsQUFBYyxBQUFVOztpQ0FYakI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQWVnQixjQUFBLEFBQUssSUFBTCxBLEFBQVM7O2lDQUExQjtBLHFEQUNBO0EsMENBQVUsU0FBQSxBLEFBQVMsQUFDekI7O3FDQUFBLEFBQUssU0FBUyxFQUFDLFNBQWYsQUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUVUO3lCQUNQOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLG9CQUFLLEFBQUssTUFBVixBQUFnQixTQURoQixBQUNBLEFBQ0Esc0RBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0IsV0FBVSxVQUFVLEtBQXBDLEFBQXlDLFVBQVUsT0FBTyxFQUFDLFdBQTNELEFBQTBELEFBQVksVUFBUyxPQUEvRTs4QkFBQTtnQ0FBQSxBQUNRO0FBRFI7K0JBQ1EsY0FBQSxTQUFLLFdBQUwsQUFBZSxTQUFRLE9BQU8sRUFBQyxjQUEvQixBQUE4QixBQUFlOzhCQUE3QztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVEQUFPLE1BQVAsQUFBWSxRQUFPLFVBQVUsa0JBQUEsQUFBQyxHQUFJLEFBQUM7MkJBQUEsQUFBSyxTQUFTLEVBQUMsZUFBZSxFQUFBLEFBQUUsT0FBaEMsQUFBYyxBQUF5QixBQUFRO0FBQWxGLG1CQUFvRixNQUFwRixBQUF5RixXQUFVLGFBQW5HLEFBQStHOzhCQUEvRztnQ0FIWixBQUNRLEFBRUksQUFFSjtBQUZJO2lDQUVKLGNBQUEsU0FBSyxXQUFMLEFBQWUsU0FBUSxPQUFPLEVBQUMsY0FBL0IsQUFBOEIsQUFBZTs4QkFBN0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5REFBTyxNQUFQLEFBQVksUUFBTyxVQUFVLGtCQUFBLEFBQUMsR0FBSSxBQUFDOzJCQUFBLEFBQUssU0FBUyxFQUFDLFdBQVcsRUFBQSxBQUFFLE9BQTVCLEFBQWMsQUFBcUIsQUFBUTtBQUE5RSxtQkFBZ0YsTUFBaEYsQUFBcUYsTUFBSyxhQUExRixBQUFzRzs4QkFBdEc7Z0NBUFosQUFLUSxBQUVJLEFBRUo7QUFGSTtpQ0FFSixjQUFBLFlBQVEsVUFBVSxrQkFBQSxBQUFDLEdBQUksQUFBQzsyQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFRLEVBQUEsQUFBRSxPQUF6QixBQUFjLEFBQWtCLEFBQVE7QUFBaEUsbUJBQWtFLFdBQWxFLEFBQTRFLGVBQWMsT0FBTyxFQUFDLGNBQWxHLEFBQWlHLEFBQWU7OEJBQWhIO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFlBQVEsT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsOEJBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBRkosQUFFSSxBQUNBLDBCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQUhKLEFBR0ksQUFDQSw4QkFBQSxjQUFBLFlBQVEsT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFKSixBQUlJLEFBQ0Esb0NBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBTEosQUFLSSxBQUNBLDJCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQWZaLEFBU1EsQUFNSSxBQUVKLGdCQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLHFCQUN4QixBQUFDLDBDQUFRLFVBQVQ7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCx5QkFBQSxBQUFTOzs4QkFBVDtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOENBQUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBSyxNQUhqQixBQUNJLEFBRUksQUFBZSxpQkFwQi9CLEFBcUJ5QixBQUNqQixzQkFBQSxBQUFDLHlDQUFPLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDLHNCQUFxQixTQUFTLEtBQUEsQUFBSyxNQUFuRSxBQUF5RTs4QkFBekU7Z0NBQUE7QUFBQTtlQXpCWixBQUNJLEFBRUEsQUFzQlEsQUFJYjs7Ozs7QUE1RHVDLEE7O2tCQUFyQixBIiwiZmlsZSI6ImNyZWF0ZVdhbGxldC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVkcm8uYWx2YXJlei9EZXNrdG9wL1Byb2pldG9GaW5hbCJ9