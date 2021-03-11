import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CommonLayout from '@layouts/CommonLayout';


const theme = createMuiTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    type: 'light',
    primary: {
      light: "#ff88ff",
      main: "#f57d01",
      dark: "#f57d01",
      contrastText: "#fff"
    },
    secondary: {
      main: '#fff'
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161"
    },
  },
  // typography: {
  //   h6: {
  //     fontWeight: 500,
  //   },
  // },
});

class AppLayout extends React.PureComponent {

  render() {
    const {
      children,
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CommonLayout>
            {children}
        </CommonLayout>
      </ThemeProvider>
    );
  }
}
export default AppLayout;
