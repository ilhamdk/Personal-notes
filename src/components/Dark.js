import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import ToggleTheme from '../components/ToggleTheme';

class Dark extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          // mendapatkan nilai tema baru berdasarkan state sebelumnya
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          // menyimpan nilai tema baru ke local storage
          localStorage.setItem('theme', newTheme);
 
          // mengembalikan dengan nilai theme terbaru.
          return {
            theme: newTheme
          };
        });

      }
    }
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <ToggleTheme />
      </ThemeProvider>
    )
  }
}

export default Dark;