import React from 'react';

// stateless functional component (faster than class-based)
const Option = (props) => (
    
        <div className="option">
            <p className="option__text">
                {props.count}. {props.optionText}
            </p>

            <button className="button button--link" onClick={()=>{

                    props.handleDeleteOption(props.optionText)

                }}>delete</button>
        </div>
    )


export {Option as default};