import React from 'react';

const OutputTextLenght = (props) => {
    return(
        <div>
            {
                (props.textLength < 5)
                ? <p>The text is to short</p>
                : <p>The text long enough</p>
            }
        </div>
        
     )
}

export default OutputTextLenght;