import React from 'react';

const Option = (props) => {
    return (
        <section className="Option">
            <p>
                {props.text}
                <button 
                    onClick={(e) => {
                        props.handleRemoveOption(props.text)
                    }}>
                    Remove Option
                </button>
            </p>
        </section>
    )
}

export default Option;