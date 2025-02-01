import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import UsersList from './components/UsersList';
import UserDetail from './components/UserDetail';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<UsersList />} />
                        <Route path="/users/:id" element={<UserDetail />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}