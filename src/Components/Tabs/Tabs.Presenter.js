
const useTabs = () => {

    const isChildrenExist=(children)=>{
        return children.length > 1 ? children.filter(item => (item !== null) || (item !== undefined)) : children;
    }
    return {
        isChildrenExist
    }
};

export default useTabs;