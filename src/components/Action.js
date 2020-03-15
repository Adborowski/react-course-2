import React from 'react';

// stateless functional component (faster than class-based)
const Action = (props) => (
    
        <div>
           <button 
           onClick={props.handlePick}
           disabled={!props.hasOptions}
           >
           What do I do?
           </button>
        </div>
    
)

export {Action as default}