import '../styles/index.css'
import { ThemeProvider, createTheme, responsiveFontSizes, useTheme, PaletteLinearProgress } from '@mui/material/styles';
import Header from '../components/header';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';
import { useState, useMemo, createContext, useContext, useEffect } from 'react';
import { AppPropsType } from 'next/dist/shared/lib/utils';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Analytics } from '@vercel/analytics/react';
import Meta from '../components/meta';
import Script from 'next/script';
import * as gtag from "../lib/gtag"


export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: '#fff',
        },
        secondary: {
          main: '#16274C',
        },
        background: {
          default: '#fff',
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: '#1A1A1A',
        },
        secondary: {
          main: '#fff',
        },
        background: {
          default: '#1A1A1A',
        },
      }),
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


export default function App({ Component, pageProps, router }: AppPropsType) {
  let theme = useTheme();
  const colorContext = useContext(ColorModeContext);
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      getColorMode: () => {
        if (mode === 'light') {
          return 'light'
        } else {
          return 'dark'
        }
      },
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Update the theme only if the mode changes
  theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  theme = responsiveFontSizes(theme)

  return <div>
    <Script id="google-tag-manager" strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WVDZBMT');`}}
    />
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WVDZBMT"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C467WGNEJZ" />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `  window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-C467WGNEJZ');
            `
      }}
    />
    <LanguageProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} key={router.route} />
          <Analytics />
          <Meta />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </LanguageProvider>
  </div>
}
