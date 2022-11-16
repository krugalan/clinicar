import React from 'react'
import { NativeBaseProvider, Box, extendTheme, ColorMode } from "native-base";

import { customTheme } from './styles';

export default function App() {
  const theme = extendTheme(customTheme)



  return (
    // Custom theme from Native Base
    <NativeBaseProvider theme={theme}>
      <Box>Hello world</Box>
      <Box bg="primary.500" p={4} />
    </NativeBaseProvider>
  );
}