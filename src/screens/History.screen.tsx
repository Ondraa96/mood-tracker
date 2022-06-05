import { StyleSheet, View, Text } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: React.FC = () => {
    const { moods } = useAppContext();

    return (
        <View style={styles.container}>
            {moods.map((item) => (
                <MoodItemRow item={item} key={item.timestamp} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
