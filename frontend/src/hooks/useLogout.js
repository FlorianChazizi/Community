import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const logout = () => {
        localStorage.removeItem('user')     // Remove user from local storage
        dispatch({type: 'LOGOUT'});        //  Drop all user's information
        console.log('Successuflly logged out!')
        console.log(localStorage)
        console.log(dispatch)
    }
    return {logout}
}