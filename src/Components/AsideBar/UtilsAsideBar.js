import data from './tempJson.json';

export const themes=(t)=>{
    return [
        { name: t('green'),value:"green-theme" },
        { name: t('blue'),value:"blue-theme" },
        { name: t('pink'),value:"pink-theme" },
    ]
};

export const Category=(t,categoris,sub_categories)=>{
    let cats = [];
    // categoris.forEach(cat => {
        
    // });
    return [
        { name: t('aside.all'), id: 0, value: [...data[0].cloths, ...data[1].laser, ...data[2].TD_printed], bg_color:'bg_green'},
        { name: t('aside.cloth'), id: 3, value: data[0].cloths, bg_color:'bg_green'},
        { name: t('aside.laser'),id:1, value: data[1].laser, bg_color:'bg_green'},
        { name: t('aside.3d'),id:2, value: data[2].TD_printed, bg_color:'bg_green'},
    ]
}