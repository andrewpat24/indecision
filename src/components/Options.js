import React from 'react';


const Options = (props) => {
    return (
        <section className="Option">
            <button onClick={props.handleClearOptions}>Clear Options</button>
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