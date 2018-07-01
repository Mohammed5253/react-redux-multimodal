export const setModal = (data) =>{
    
    return dispatch =>{
         return dispatch({
            type:"SHOW_MODAL"
        })
    };    
}

export const resetModal = (data) =>{
   
    return dispatch =>{
         return dispatch({
            type:"HIDE_MODAL"
        })
    };    
}

export const loginModal = (data) =>{
    
    return dispatch =>{
        return dispatch({
           type:"LOGIN_MODAL"
       })
   };  
}