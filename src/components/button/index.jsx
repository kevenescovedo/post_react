import p from 'prop-types';
import { Component } from "react";
import "./style.css";

export class Button extends Component {
    state = {}
    render() {
        const {text, onClick, disabled = false} = this.props;
    return <button onClick={onClick} disabled={disabled} className="btn">{text}</button>
    }
}
Button.defaultProps = {
  disabled: false,
}
Button.propTypes = {
  text: p.string.isRequired,
  onClick: p.func.isRequired,
  disabled: p.bool

}
