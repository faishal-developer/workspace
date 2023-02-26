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

export const stickyPosition=(id,className)=>{
    const stickyElement = document.getElementById(id);
    // const stickyOffset = stickyElement.offsetTop;
    const rect = stickyElement.getBoundingClientRect();

    window.addEventListener('scroll', () => {
        console.log(rect.top, window.scrollY, 'top')
        const scrollPosition = window.scrollY;
        if (rect.top <= scrollPosition) {
            stickyElement.classList.add(className);
        } else {
            stickyElement.classList.remove(className);
        }
    });
}
