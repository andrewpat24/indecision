import React from 'react';
import Option from './Option';


const Options = (props) => {
    return (
        <section className="Option">
            <button 
            className="button button--link"
            onClick={props.handleClearOptions}
            >
                Clear Options
            </button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}

            {props.options.map((option) => (
                <div 
                    key={option}
                >
                    <Option 
                        text={option}
                        handleRemoveOption={props.handleRemoveOption}
                    /> 
                </div> 
            ) ) }

        </section>
    )
}

export default Options; 