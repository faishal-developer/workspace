import React from 'react';
import useTabs from './Tabs.Presenter';

const Tabs = (props) => {
    const {children,active} = props;
    const { isChildrenExist } = useTabs;

    return (
        <div>
            {
                isChildrenExist(children)?
                isChildrenExist(children).map((item,current)=>(
                    <div className={item.props.label===active?"d-block" : null}>
                        {item}
                    </div>
                )):null
            }
        </div>
    );
};

export default Tabs;