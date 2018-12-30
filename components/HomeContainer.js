import {createStackNavigator} from 'react-navigation';
import HomeTest from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const HomeContainer = createStackNavigator({
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen},
});

export default HomeContainer;