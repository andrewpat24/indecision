import React from 'react';

const Action = (props) => {
    return (
        <section className="Action">
            <button 
                onClick={props.handlePickAction}
                disabled={!props.hasOptions}
            >
                What should I do? 
            </button>
        </section>
    )
}

export default Action; 