import { createContext, useEffect, useReducer } from 'react' // Το δηλώνουμε 
     
export const AuthContext = createContext() // (1) Το Δημιοτργούμε 

export const authReducer = ( state, action ) => {           // (4) όπου το authReducer παίρνει την τιμή του χρήστη,  
    switch ( action.type ) {                               //  Ανάλογα με το action που έχει επιλέξει. 
        case 'LOGIN':                                     //   Και επιστρέφει την κατάσταση του.
            return { user: action.payload }              //    Και επιστρέφει την κατάσταση του.
        case 'REGISTER':                                //     Payload = δεδομένα 
            return { user: action.payload }           
        case 'LOGOUT':
            return { user: null }
        default: 
            return state
    }
}

export const AuthContextProvider = ({ children }) => {              // (3) το children το φέρνουμε απο εδώ καλώντας το 
    const [ state, dispatch ] = useReducer(authReducer, {          //   useReducer, που παίρνει σαν παράμετρο το authReducer και τον χρήστη
        user: JSON.parse(localStorage.getItem('user')) || null,   // in page refresh keep the user
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if( user ){
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])
    console.log('AuthContext state:', state)

    return (                                    // (2) το γυρνάμε πίσω στην εφαρμογή, και τυλίγουμε μέσα το children 
        <AuthContext.Provider value={{...state, dispatch}}>              
            { children }
        </AuthContext.Provider>
    )
}