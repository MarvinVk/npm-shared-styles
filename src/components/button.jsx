import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/* elements */
import Loader from './loader.jsx';

class Button extends Component {

    /**
     * Handle click
     *
     * @param e
     */
    handleClick(e) {
        if (!this.props.onClick || this.props.disabled) return;
        e.preventDefault();

        if (this.props.onClick) {
            this.props.onClick(e);
        }
    };

    render() {
        // set class names for button
        const classNames = cn('button', this.props.className, {
            [`button--${this.props.color}`]: this.props.color,
            'button--full': this.props.full,
            'button--disabled': this.props.disabled,
            'button--loading': this.props.loading
        });

        return (
            <button
                type={this.props.type}
                className={classNames}
                onClick={this.handleClick}
            >
                {this.props.loading &&
                    <Loader
                        className="button__loader"
                        color={this.props.color === 'white' ? 'black' : 'white'}
                    />
                }
                {this.props.label}
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.oneOf(['red', 'green', 'white']),
    full: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;
