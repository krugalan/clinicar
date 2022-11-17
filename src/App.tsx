import React from 'react'
import { NativeBaseProvider, extendTheme, Text, } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'



import { customTheme } from './styles';
import store, { persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { AppNavigation } from './navigation';


export default function App() {
  const theme = extendTheme(customTheme)



  return (
    <SafeAreaProvider>
      {/* redux provider  for persist APP data */}
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          {/* Custom theme from Native Base */}
          <NativeBaseProvider theme={theme}>
            <AppNavigation />
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}