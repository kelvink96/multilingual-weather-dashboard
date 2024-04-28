// src/i18n/I18n.js

import { IntlProvider } from 'react-intl';

// Import the configuration we created earlier
import { defaultLocale, locales } from './i18n-config';
import { ReactNode, useState } from 'react';
import { LocaleContext } from '../context';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState(defaultLocale);

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={locales[locale].messages}>
                {children}
            </IntlProvider>
        </LocaleContext.Provider>
    );
};
