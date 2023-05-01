//todo: this will do with redux persist

export const properties = {
    cart:'cart',
}

export const createDataLS = (data,property)=>{
    let newData=JSON.stringify(data);
    localStorage.setItem(property, newData);
}

export const getDataLS = (property)=>{
    let data = localStorage.getItem(property);
    return JSON.parse(data);
}

export const DeleteDataLS = (property)=>{
    localStorage.removeItem(property);
}