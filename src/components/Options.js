import React from 'react';
import Option from './Option.js';

// stateless functional component (faster than class-based)
const Options = (props) => (

        <div>

            <div className="widget-header">

                <h3 className="widget-header__title">Your options</h3>

                <button 
                onClick={props.handleDeleteOptions}
                className="button button--link"
                >
                    Remove All
                
                </button>
            
            </div>


            {!props.options.length && <p className="widget__message">Please add an item</p>}

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