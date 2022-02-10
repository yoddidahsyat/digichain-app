import {createContext, useReducer} from 'react';

export const AppContext = createContext();

const initialState = {
    isLogin: false,
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        
        case "LOGIN":
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                isLogin: true,
                isLoading: false,
                user: {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    role: action.payload.role
                }
            }

        case "USER_LOADED":
            return {
                ...state,
                isLogin: true,
                isLoading: false,
                user: {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    role: action.payload.role
                }
            }
        
        case "REGISTER":
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                isLogin: true,
                isLoading: false,
                user: {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    role: action.payload.role
                }
            }
        
        case "AUTH_ERROR":
        case "LOGOUT":
            localStorage.removeItem("token");

            return {
                ...state,
                isLogin: false,
                isLoading: false,
                user: null
            }
        
        default:
            throw new Error();
    }
}

export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    );
};