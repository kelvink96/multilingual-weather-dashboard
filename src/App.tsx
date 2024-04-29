import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from 'react-router-dom';
import { useDocL10n } from './i18n';
import routes from './routes';
import { theme } from './theme';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

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
