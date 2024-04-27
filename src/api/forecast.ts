import { requests } from '../lib';

export const ForecastApi = {
    forecastByCity: () => requests.get(`forecast?q=Nairobi,KE`),
};
