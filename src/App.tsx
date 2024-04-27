import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const myColor: MantineColorsTuple = [
    '#e5f4ff',
    '#cde2ff',
    '#9bc2ff',
    '#64a0ff',
    '#3984fe',
    '#1d72fe',
    '#0969ff',
    '#0058e4',
    '#004ecc',
    '#0043b5',
];

const theme = createTheme({
    colors: { 'deep-blue': myColor },
    fontFamily: 'Inter, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Inter, sans-serif' },
    primaryColor: 'deep-blue',
    primaryShade: 8,
    defaultRadius: 'md',
});

function App() {
    return (
        <>
            <MantineProvider theme={theme}>
                <Notifications />
                <RouterProvider router={routes} />
            </MantineProvider>
        </>
    );
}

export default App;
