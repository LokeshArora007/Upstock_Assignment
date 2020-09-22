import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',
    htmlFontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: 'Rubik',
            fontStyle: 'normal',
          },
        ],
      },
    },
    MuiFormLabel: {
      root: {
        color: 'rgba(0, 0, 0, 0.74)',
        '&$disabled': {
          color: 'rgba(0, 0, 0, 0.50)',
        },
      },
    },
    MuiInputBase: {
      root: {
        '&$disabled': {
          color: 'rgba(0, 0, 0, 0.50)',
        },
      },
    },
    MuiTableCell: {
      head: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontWeight: '550',
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#00AAE1',
      dark: '#143C8C',
      contrastText: '#fff',
    },
    secondary: {
      main: '#64B42D',
      dark: '#008732',
      contrastText: '#fff',
    },
    error: {
      main: '#BD0043',
      contrastText: '#fff',
    },
    divider: '#D7D6D5',
    background: {
      paper: '#fff',
      default: "#fff"
    },
  } 
});

export default theme;
