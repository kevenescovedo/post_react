import { Component } from "react";
import "./style.css";

export class Button extends Component {
    state = {}
    render() {
        const {text, onClick, disabled} = this.props;
    return <button onClick={onClick} disabled={disabled} className="btn">{text}</button>
    }
}