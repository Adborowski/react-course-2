import React from 'react';
import Option from './Option.js';

// stateless functional component (faster than class-based)
const Options = (props) => (

        <div>

            <button 
            onClick={props.handleDeleteOptions}
            className="button button--link"
            >
                Remove All
            
            </button>

        {!props.options.length && <p>Please add an item</p>}
        <p>{props.options.length}</p>
            <ol>
                {props.options.map((option, index) => (
                    <Option 
                        key={index} 
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption}
                    />)  
                )}
            </ol>
        </div>
    )

export {Options as default};