// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import TemaClaro from "../../theme/temaClaro/TemaClaro";
import { DatosFormProvider } from "@/context/DatosFormProvider";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${TemaClaro.Documento.Fondo};
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={TemaClaro}>
      <GlobalStyle />
      <DatosFormProvider>
        <Component {...pageProps} />
      </DatosFormProvider>
    </ThemeProvider>
  );
}
