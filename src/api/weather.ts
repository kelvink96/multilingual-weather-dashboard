import { requests } from '../lib';

export const WeatherApi = {
    currentByCity: <T>(): Promise<T> => requests.get(`weather?q=Nairobi,KE`),
};
