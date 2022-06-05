import { createContext, useContext } from "react";

type AppContextType = {
    greeting: string;
}

const AppContext = createContext<AppContextType>({ greeting: 'hello' });

export const AppContextProvider: React.FC = ({ children }) => {
    return (
        <AppContext.Provider value={{ greeting: 'Hello world!' }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);