import React from 'react';

const Action = (props) => {
    return (
        <section className="Action">
            <button 
                onClick={props.handlePickAction}
                disabled={!props.hasOptions}
                className="big-button"
            >
                What should I do? 
            </button>
        </section>
    )
}

export default Action; 