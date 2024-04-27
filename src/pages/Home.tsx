import { Box, Grid, Image, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { ForecastApi, WeatherApi } from '../api';
import { Forecast, Weather } from '../models';

export const HomePage = () => {
    const [currentWeather, setCurrentWeather] = useState<Weather>();
    const [forecast, setForecast] = useState<Forecast>();

    const fetchCurrentWeather = useCallback(async () => {
        try {
            const response: Weather = await WeatherApi.currentByCity();

            setCurrentWeather(response);
        } catch (e) {
            console.log(e);
        }
    }, []);

    const fetchForecast = useCallback(async () => {
        try {
            const response: Forecast = await ForecastApi.forecastByCity();

            setForecast(response);
        } catch (e) {
            console.log(e);
        }
    }, []);

    useEffect(() => {
        fetchCurrentWeather();
        fetchForecast();
    }, [fetchCurrentWeather, fetchForecast]);

    return (
        <Box>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                    <Paper>
                        <Title>Current weather: {currentWeather?.dt}</Title>
                        <Text>City: {currentWeather?.name}</Text>
                        <Text>Country: {currentWeather?.sys.country}</Text>
                        <Text>Temp feels like: {currentWeather?.main.feels_like}</Text>
                        <Text>Max {currentWeather?.main.temp_max}</Text>
                        <Text>Min {currentWeather?.main.temp_min}</Text>
                        {currentWeather?.weather?.map((w) => (
                            <Paper component={Stack} key={w.id}>
                                <Image
                                    src={`https://openweathermap.org/img/wn/${w.icon}@2x.png`}
                                    h={60}
                                    w={60}
                                    fit="contain"
                                />
                                <Text>{w.main}</Text>
                                <Text>{w.description}</Text>
                            </Paper>
                        ))}
                    </Paper>
                    <Paper>
                        <Text>Sunrise: {currentWeather?.sys.sunrise}</Text>
                        <Text>Sunset: {currentWeather?.sys.sunset}</Text>
                    </Paper>
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 5 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}
                    >
                        <Paper>
                            <Text>Temperature</Text>
                            <Text>{currentWeather?.main.temp}</Text>
                        </Paper>
                        <Paper>
                            <Text>Pressure</Text>
                            <Text>{currentWeather?.main.pressure}</Text>
                        </Paper>
                        <Paper>
                            <Text>Humidity</Text>
                            <Text>{currentWeather?.main.humidity}</Text>
                        </Paper>
                        <Paper>
                            <Text>Visibility</Text>
                            <Text>{currentWeather?.visibility}km</Text>
                        </Paper>
                        <Paper>
                            <Text>Wind</Text>
                            <Text>Speed: {currentWeather?.wind.speed}</Text>
                            <Text>Degrees: {currentWeather?.wind.deg}</Text>
                        </Paper>
                        <Paper>
                            <Text>Cloudiness</Text>
                            <Text>{currentWeather?.clouds.all}%</Text>
                        </Paper>
                        <Paper>
                            <Text>Rain</Text>
                            <Text>1 hour: {currentWeather?.rain['1h']}mm</Text>
                            <Text>3 hour: {currentWeather?.rain['3h']}mm</Text>
                        </Paper>
                    </SimpleGrid>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <Paper>
                        <Title>5-day forecast</Title>
                        {forecast?.list?.map((f) => (
                            <Paper key={f.dt}>
                                <Text>{f.dt_txt}</Text>
                                <Text>Temp: {f.main.temp}</Text>
                                <Text>Pressure: {f.main.pressure}</Text>
                                <Text>Humidity: {f.main.humidity}</Text>
                                {f.weather && (
                                    <>
                                        <Image
                                            src={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`}
                                            h={60}
                                            w={60}
                                            fit="contain"
                                        />
                                        <Text>{f.weather[0].main}</Text>
                                    </>
                                )}
                            </Paper>
                        ))}
                    </Paper>
                </Grid.Col>
            </Grid>
        </Box>
    );
};
