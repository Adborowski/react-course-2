import React from 'react';

// stateless functional component (faster than class-based)
const Option = (props) => (
    
        <div>
            {props.optionText}
            <button className="button button--link" onClick={()=>{

                    props.handleDeleteOption(props.optionText)

                }}>delete</button>
        </div>
    )


export {Option as default};