import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from 'react-router-dom';
import { useDocL10n } from './i18n';
import routes from './routes';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const myColor: MantineColorsTuple = [
    '#fff0e4',
    '#ffe0cf',
    '#fac0a1',
    '#f69e6e',
    '#f28043',
    '#f06d27',
    '#f06418',
    '#d6530c',
    '#bf4906',
    '#a73c00',
];

const theme = createTheme({
    colors: { tomamto: myColor },
    fontFamily: 'Inter, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Inter, sans-serif' },
    primaryColor: 'tomamto',
    primaryShade: 7,
    defaultRadius: 'md',
});

function App() {
    useDocL10n();
    return (
        <>
            <MantineProvider theme={{ ...theme }}>
                <Notifications />
                <RouterProvider router={routes} />
            </MantineProvider>
        </>
    );
}

export default App;
