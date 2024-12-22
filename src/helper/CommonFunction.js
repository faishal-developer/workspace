import { getDataLS } from "./localStorage";

// all common function that are used very often 

// set page title 
export function pagetitle(title){
    document.title =title;
};

// during theme change you should trigger the function 
export const themeChange = (givenTheme)=>{
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
    const resultTheme = givenTheme ? givenTheme : theme;
    document.body.className = resultTheme;
    return resultTheme;
} 

// for string slicer it is helpfull, specially when you will show limited char 
export const stringSlicer=(data,length)=>{
    if(typeof data !== 'string') return null;
    else if(data.length<=length) return data;
    return `${data.slice(0,length)}...`
}

// windows width detector 
export const widthDetector=(max,min)=>{
    let w = window.innerWidth;
    return w<= max && w>= min ?true : false;
}

// capitalize 
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

// scroll to top 
export const scrollToTop=()=>{
    window.scrollTo(0, 0);
}

// number charecter changer when changing language 
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

