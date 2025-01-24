import  { createContext, useContext, useReducer } from "react";
import { initialState, userReducer } from "./Reducer";

export const UserContext = createContext();

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    return(
        <UserContext.Provider value={{ isLoggedIn: state.isLoggedIn, user: state.user, dispatch: dispatch }}>
            {children}
        </UserContext.Provider>
    )
}
export default GlobalProvider;
// Export custom hook to use state and dispatch in components
export const useUserContext = () => {
  return useContext(UserContext);
};
