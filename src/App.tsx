import React from 'react'
import { NativeBaseProvider, Box, extendTheme, ColorMode, Text } from "native-base";

import { customTheme } from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const theme = extendTheme(customTheme)



  return (
    // TODO Explain
    <SafeAreaProvider>
      {/* Custom theme from Native Base */}
      <NativeBaseProvider theme={theme}>
        <Box>Hello world</Box>
        <Text fontFamily="body" fontWeight={600} fontStyle="italic">algo</Text>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}