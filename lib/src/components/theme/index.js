"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const default_1 = __importDefault(require("./default"));
const deepmerge_1 = __importDefault(require("deepmerge"));
//默认皮肤类型
exports.ThemeCtx = react_1.default.createContext(default_1.default);
exports.ThemeProvider = (props) => {
    const theme = Object.assign({}, default_1.default, props.value);
    return (react_1.default.createElement(exports.ThemeCtx.Provider, { value: theme }, props.children));
};
//主题高阶组件
class ThemeBox extends react_1.default.Component {
    constructor() {
        // static defaultProps = {
        //   themeStyles:(theme:Theme)=>T
        // }
        super(...arguments);
        //获取当前styles样式
        this.getCurrentStyles = (theme) => {
            const { themeStyles, styles } = this.props;
            console.log(1111, themeStyles);
            console.log(212, styles);
            const defaultThemeStyles = themeStyles(theme);
            if (styles) {
                return deepmerge_1.default(defaultThemeStyles, styles); //合并样式
            }
            return defaultThemeStyles;
        };
    }
    render() {
        return (
        //Consumer接收一个函数作为子节点，函数接收当前Context（主题）值作为参数，并返回一个React节点
        react_1.default.createElement(exports.ThemeCtx.Consumer, null, theme => this.props.children(this.getCurrentStyles(theme), theme)));
    }
}
exports.ThemeBox = ThemeBox;
//# sourceMappingURL=index.js.map