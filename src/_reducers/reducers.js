const initialState = {
    modalType: null,
    modalProps: {},
    show:false,
    loginshow:false
  }

export const custreducers = (state = initialState, action) => {
    
    switch (action.type) {
        case 'SHOW_MODAL':
          return {
            show:true
          }
        case 'LOGIN_MODAL':
          return {
            loginshow:true
          }  
        case 'HIDE_MODAL':
          return initialState
        default:
          return state
      }

}


export default custreducers;