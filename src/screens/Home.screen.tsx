
import { StyleSheet, View, Text, Alert } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodItemRow } from '../components/MoodItemRow';
import { useAppContext } from '../App.provider';

export const Home: React.FC = () => {
    const { selectMood } = useAppContext();
    return (
        <View style={styles.container}>
            <MoodPicker onSelect={selectMood} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});
