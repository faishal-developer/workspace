
const useasideDropDown = () => {
    const filterCategory=(activeId,array,setData)=>{
        let newArray = array.filter((el)=>el.id===activeId);
        let data = newArray[0].value?.length>=1? newArray[0].value : null;
        console.log(data, newArray[0].length >= 1,newArray[0].value.length);
        setData(data)
    }
    return{
        filterCategory
    }
};

export default useasideDropDown;