
const useCardLogic = () => {
   const changeRoute = (method,url) =>{
        return method(url);
   }

   return {
    changeRoute
   }
};

export default useCardLogic;