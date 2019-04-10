import React from 'react';
import Option from './Option';


const Options = (props) => {
    return (
        <section component="Option">
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                className="button button--link"
                onClick={props.handleClearOptions}
                >
                    Clear Options
                </button>
            </div>  
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}

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