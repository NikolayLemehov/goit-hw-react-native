import SrcApp from './src/SrcApp';
import {Provider} from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SrcApp/>
    </Provider>
  );
}
