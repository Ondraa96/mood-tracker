import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { History } from './History.screen';
import { Home } from './Home.screen';

const BottomTab = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name='Home' component={Home} />
            <BottomTab.Screen name='History' component={History} />
        </BottomTab.Navigator>
    );
}