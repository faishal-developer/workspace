// it is important when endpoints is changable 
export const Endpoints={
    base: (process.env.REACT_APP_BASE_URL ?? "http://localhost:5000") +"/api/v1",

    //home
    home:"/",
    
    // auth
    sign_in:"/auth/login",

    
}