import { createContext, useCallback, useContext, useState } from "react";
import { MoodOptionType, MoodOptionWithTimestamp } from "./types";

type AppContextType = {
    moods: MoodOptionWithTimestamp[];
    selectMood: (mood: MoodOptionType) => void;
}

const AppContext = createContext<AppContextType>({
    moods: [],
    selectMood: () => { }
});

export const AppContextProvider: React.FC = ({ children }) => {
    const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

    const handleSelectMood = useCallback((mood: MoodOptionType) => {
        setMoodList(current => [...current, { mood, timestamp: Date.now() }]);
    }, []);

    return (
        <AppContext.Provider value={{ moods: moodList, selectMood: handleSelectMood }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);