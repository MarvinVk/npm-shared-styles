import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/* assets */
import loaderWhite from './../assets/loader-white.svg';
import loaderBlack from '../assets/loader-black.svg';
import loaderRed from '../assets/loader-red.svg';
import loaderBlue from '../assets/loader-blue.svg';
import loaderGreen from '../assets/loader-green.svg';

class Loader extends Component {

    render() {
        // set class names for holder
        const classNames = cn('loader', this.props.className, {
            'loader--block': this.props.type === 'block',
            'loader--overlay': this.props.type === 'overlay',
            'loader--full': this.props.type === 'full'
        });

        let loaderSrc = '';
        switch (this.props.color) {
            case 'black':
                loaderSrc = loaderBlack;
                break;
            case 'red':
                loaderSrc = loaderRed;
                break;
            case 'blue':
                loaderSrc = loaderBlue;
                break;
            case 'green':
                loaderSrc = loaderGreen;
                break;
            default:
                loaderSrc = loaderWhite;
                break;
        }

        return (
            <div className={classNames}>
                <img src={loaderSrc} className="loader__svg" alt="loader"/>
            </div>
        );
    }
}

Loader.propTypes = {
    type: PropTypes.oneOf(['block', 'overlay', 'full']),
    className: PropTypes.string,
    color: PropTypes.oneOf(['white', 'black', 'red', 'blue', 'green'])
};

Loader.defaultProps = {
    color: 'blue'
};

export default Loader;
