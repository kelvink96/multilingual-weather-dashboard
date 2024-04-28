import enUsMessages from '../lang/en-US.json';
import swKeMessaged from '../lang/sw-KE.json';

export const defaultLocale = 'en-US';

type Message = {
    name: string;
    messages: never;
};

export const locales: Record<string, Message> = {
    'en-US': { name: 'English', messages: enUsMessages } as never,
    'sw-KE': { name: 'Swahili', messages: swKeMessaged } as never,
};
