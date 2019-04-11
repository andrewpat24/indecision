import React from 'react';

const Option = (props) => {
    return (
        <section component="Option">
            <div className="option">
                <p className="option__text">
                    {props.count}. {props.text}
                </p>
                <button 
                    className="button button--link"
                    onClick={(e) => {
                        props.handleRemoveOption(props.text)
                    }}>
                    Remove Option
                </button>
            </div>
        </section>
    )
}

export default Option;