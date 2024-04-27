import axios, { AxiosError, AxiosResponse } from 'axios';
import router from '../routes';
import { notifications } from '@mantine/notifications';

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

const API_KEY = import.meta.env.VITE_API_KEY!;

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';

const responseBody = (response: AxiosResponse) => response.data;

type IError = Partial<AxiosError> & { response: { data: never } };

axios.interceptors.response.use(
    async (response) => {
        await sleep();
        return response;
    },
    (error: IError) => {
        const { data, status } = error.response;

        switch (status) {
            case 400:
                if (data['errors']) {
                    const modelStateErrors: string[] = [];

                    for (const modelStateErrorsKey in modelStateErrors) {
                        if (data['errors'][modelStateErrorsKey]) {
                            modelStateErrors.push(data['errors'][modelStateErrorsKey]);
                        }
                    }

                    throw modelStateErrors.flat();
                }
                notifications.show({
                    title: data['title'],
                    message: data['title'],
                });
                break;
            case 401:
                notifications.show({
                    title: data['title'],
                    message: data['title'],
                });
                break;
            case 404:
                router.navigate('/error/404', { state: { error: data } });
                notifications.show({
                    title: data['title'],
                    message: data['title'],
                });
                break;
            case 500:
                router.navigate('/error/500', { state: { error: data } });
                notifications.show({
                    title: error.response['data']['title'],
                    message: error.response['data']['title'],
                });
                break;
            default:
                break;
        }
        return Promise.reject(error.response);
    }
);

export const requests = {
    get: (url: string) => axios.get(url + `&appid=${API_KEY}`).then(responseBody),
    post: (url: string, body: object) => axios.post(url + `&appid=${API_KEY}`, body).then(responseBody),
    put: (url: string, body: object) => axios.put(url + `&appid=${API_KEY}`, body).then(responseBody),
    delete: (url: string) => axios.delete(url + `&appid=${API_KEY}`).then(responseBody),
};
