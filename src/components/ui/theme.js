import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      mode: 'dark',
      light: '#978aad',
      main: '#d1c4e9',
      dark: '#574c6b',
      contrastText: 'white',
    },
    secondary: {
      light: '#e7cbeb',
      main: '#e1bee7',
      dark: '#9d85a1',
    },
  },
  
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
