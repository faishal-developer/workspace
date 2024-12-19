import { getDataLS } from "./localStorage";


export function pagetitle(title){
    document.title =title;
};

export const themeChange = (givenTheme)=>{
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
    const resultTheme = givenTheme ? givenTheme : theme;
    document.body.className = resultTheme;
    return resultTheme;
} 

export const stringSlicer=(data,length)=>{
    if(typeof data !== 'string') return null;
    else if(data.length<=length) return data;
    return `${data.slice(0,length)}...`
}

export const widthDetector=(max,min)=>{
    let w = window.innerWidth;
    return w<= max && w>= min ?true : false;
}

export const stickyPosition=(id,className,id2)=>{
    const stickyElement = document.getElementById(id);
    // const stickyOffset = stickyElement.offsetTop;
    const rect = stickyElement.getBoundingClientRect();
    let rectOff, stickyElementOfff,height,isTrue=true;
    if(id2){
        stickyElementOfff = document.getElementById(id2);
        rectOff = stickyElementOfff.getBoundingClientRect();
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (id2) {
            let Falsy = height - 400 >= scrollPosition;
            setTimeout(()=>{
                isTrue = Falsy
            },100);
            height = stickyElementOfff.offsetTop + stickyElementOfff.offsetHeight;
        }
                // console.log("working",isTrue,rect.top,scrollPosition);
        if (isTrue && (rect.top+40 < scrollPosition) && (scrollPosition<2450)) {
            stickyElement.classList.add(className);
        } else {
            stickyElement.classList.remove(className);
        }
    });
}

export const cal_discounted_price = (price,discount) =>{
    price = Number(price);
    discount = Number(discount);
    let discounted =  Math.floor(price - price*discount/100);
    return discounted ;
}

export const cal_subtotal = ({price,discount,quantity}) =>{
    let discounted =  cal_discounted_price(price,discount);
    return discounted*quantity ;
}


export const capitalize = (string) =>{
    if(typeof string !=='string')return '';
    let strArray = string.split(' ');
    let firstWord = strArray[0].split('');
    firstWord[0] = firstWord[0].toUpperCase();
    firstWord = firstWord.join('');
    strArray[0] = firstWord;
    strArray = strArray.join(' ');
    return strArray;
}

export const removeUnderScore=(string)=>{
    if(typeof string !=='string')return '';
    let strArray = string.split('_');
    return capitalize(strArray[0])+' '+strArray.splice(1).join(' ');
}

export const scrollToTop=()=>{
    window.scrollTo(0, 0);
}

export const NumberByLang = (num, t) => {
    let numArray = Number(num).toString().split('');
    let newArray = [];
    numArray.forEach(n => {
        newArray.push(t(`number.${n}`))
    })
    return newArray.join('')
}

export const changeRoute = (navigate, url) => {
    return navigate(url);
}

export const addQueryParams = (navigate,location,{key,value}) =>{
    let newLocation = location.pathname;
    let newSearch = location.search && location.search.split('?')[1];
    newSearch = newSearch.split('&')?.filter(s=>s?.split('=')[0]!==key).join('&');
    newLocation += newSearch ? '?'+newSearch+'&'+key+"="+value : '?'+key+"="+value;

    // location.search ? newLocation += location.search+'&'+queryParams : newLocation+='?'+queryParams;
    navigate(newLocation);
}

export const getTotal = (newData) => {
    if(!newData?.[0]?.product_data?.price)return 0;
    let t = 0;
    newData.forEach((el, i) => {
        // t += cal_discounted_price(el.price, el.discount) * el.quantity;
        t += cal_subtotal({price:el.product_data.price, discount:el.product_data.discount,quantity:el.quantity});
    });
    return t;
}

export const getCartFromLocalStorage=()=>{
    return getDataLS('cart')
}

export function screenWidth() {

  return window.innerWidth;
}

export const handleKeyWords=(keywords,text)=>{
    const regex= new RegExp(text,'gi')
    const searchedText=keywords.filter((t)=>t.match(regex))
    return searchedText.slice(0,10)
}

