import React from 'react';
import './Tooltip.scss';

const ToolTip = (props) => {
    return (
        <div className="custom_tooltip_content">
            {
                props.array ?
                    <ul>
                        {
                            props.title.map((tit, index) => {
                                return <li key={index}>{tit}</li>
                            })
                        }
                    </ul>
                    :
                    <p>{props.title}</p>

            }
            <i></i>
        </div>
    );
};

export default ToolTip;
