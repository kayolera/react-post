import { Component } from 'react';
import p from 'prop-types';
import './styles.css';
export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button onClick={onClick} disabled={disabled} className="button">
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: p.string.isRequired,
  onClick: p.func.isRequired,
  disabled: p.bool,
};
