import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import store from './src/store/reducers';
import { PaperProvider, MD2DarkTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const reduxApp = () => (
    <Provider store={store}>
        <PaperProvider>
            <App />
            <Toast />
        </PaperProvider>
    </Provider>
)
AppRegistry.registerComponent(appName, () => reduxApp);
