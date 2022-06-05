import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Analytics } from './Analytics.screen';
import { History } from './History.screen';
import { Home } from './Home.screen';

const BottomTab = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name='Home' component={Home} />
            <BottomTab.Screen name='History' component={History} />
            <BottomTab.Screen name='Analytics' component={Analytics} />
        </BottomTab.Navigator>
    );
}