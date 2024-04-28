import { createContext } from 'react';

export type LocaleContextType = {
    locale: string;
    setLocale: (value: string) => void;
};

export const LocaleContext = createContext<LocaleContextType | null>({
    locale: '',
    setLocale: () => {},
});
