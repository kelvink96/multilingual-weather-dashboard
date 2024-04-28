import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { locales } from './i18n-config';

export const useDocL10n = () => {
    // Get the active locale from the `intl`
    // instance.
    const { locale, formatMessage } = useIntl();

    // Update the <html dir> attr whenever
    // the locale changes.
    useEffect(() => {
        document.dir = locales[locale].dir;

        document.title = formatMessage({ id: 'app.title' });
    }, [formatMessage, locale]);
};
