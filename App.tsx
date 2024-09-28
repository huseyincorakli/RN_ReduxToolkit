import { StyleSheet, View } from 'react-native';
import FirstComponent from './components/first';
import SecondComponent from './components/second';
import { Provider } from 'react-redux'
import {store } from './redux/store'
import MainPage from './components/main';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      {/* <FirstComponent/>
      <SecondComponent/> */}
      {/* <MainPage></MainPage> */}
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
