import { format, fromUnixTime } from 'date-fns';

export const dateFormatter = (date: number): string => {
    return format(fromUnixTime(date), 'MM/dd/yyyy HH:mm');
};

export const timeFormatter = (time: number): string => {
    return format(fromUnixTime(time), 'HH:mm');
};
