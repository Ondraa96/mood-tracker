import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './App.provider';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

export const App: React.FC = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppContextProvider>
  );
}
