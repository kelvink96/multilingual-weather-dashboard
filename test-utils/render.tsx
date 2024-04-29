// ./test-utils/render.tsx
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
// Import your theme object
import { theme } from '../src/theme';
import { IntlProvider } from 'react-intl';
import { locales } from '../src/i18n';

export function render(ui: React.ReactNode) {
    return testingLibraryRender(<>{ui}</>, {
        wrapper: ({ children }: { children: React.ReactNode }) => (
            <IntlProvider locale="en-US" defaultLocale="en-US" messages={locales['en-US'].messages}>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </IntlProvider>
        ),
    });
}
