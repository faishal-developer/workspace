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
        id === 'search_bar' && console.log(height-400<=scrollPosition, height,scrollPosition,isTrue);
        
        if (isTrue && rect.top <= scrollPosition) {
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
