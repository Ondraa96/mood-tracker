import { useCallback, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';

export const Home: React.FC = () => {
    const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

    const handleSelectMood = useCallback((mood: MoodOptionType) => {
        setMoodList(current => [...current, { mood, timestamp: Date.now() }]);
    }, []);

    return (
        <View style={styles.container}>
            <MoodPicker onSelect={handleSelectMood} />
            {moodList.map(({ mood, timestamp }) => (
                <Text key={timestamp}>{mood.emoji} {new Date(timestamp).toString()}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});
