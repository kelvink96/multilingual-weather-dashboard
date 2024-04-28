import { Box, Flex, Grid, Group, Image, Paper, PaperProps, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { ForecastApi, WeatherApi } from '../api';
import { Forecast, Weather } from '../models';
import { fromUnixTime, format } from 'date-fns';

const PAPER_PROPS: PaperProps = {
    p: 'md',
    withBorder: true,
};

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
                    {currentWeather && (
                        <Stack>
                            <Paper {...PAPER_PROPS}>
                                <Title order={6}>
                                    Current weather: {format(fromUnixTime(currentWeather?.dt), 'hh:mm bb')}
                                </Title>
                                <Flex>
                                    <Text>City: {currentWeather?.name}</Text>
                                    <Text>Country: {currentWeather?.sys.country}</Text>
                                </Flex>
                                {currentWeather?.weather?.map((w) => (
                                    <Paper component={Group} key={w.id}>
                                        <Image
                                            src={`https://openweathermap.org/img/wn/${w.icon}@2x.png`}
                                            h={60}
                                            w={60}
                                            fit="contain"
                                        />
                                        <Stack>
                                            <Text>{w.main}</Text>
                                            <Text>{w.description}</Text>
                                        </Stack>
                                    </Paper>
                                ))}
                                <Flex>
                                    <Text>Temp feels like: {currentWeather?.main.feels_like}</Text>
                                    <Text>Max {currentWeather?.main.temp_max}</Text>
                                    <Text>Min {currentWeather?.main.temp_min}</Text>
                                </Flex>
                            </Paper>
                            <Paper {...PAPER_PROPS}>
                                <Text>Sunrise: {currentWeather?.sys.sunrise}</Text>
                                <Text>Sunset: {currentWeather?.sys.sunset}</Text>
                            </Paper>
                            <SimpleGrid
                                cols={{ base: 1, sm: 2, lg: 5 }}
                                spacing={{ base: 10, sm: 'xl' }}
                                verticalSpacing={{ base: 'md', sm: 'xl' }}
                            >
                                <Paper {...PAPER_PROPS}>
                                    <Text>Temperature</Text>
                                    <Text>{currentWeather?.main.temp}</Text>
                                </Paper>
                                <Paper {...PAPER_PROPS}>
                                    <Text>Pressure</Text>
                                    <Text>{currentWeather?.main.pressure}</Text>
                                </Paper>
                                <Paper {...PAPER_PROPS}>
                                    <Text>Humidity</Text>
                                    <Text>{currentWeather?.main.humidity}</Text>
                                </Paper>
                                <Paper {...PAPER_PROPS}>
                                    <Text>Visibility</Text>
                                    <Text>{currentWeather?.visibility}km</Text>
                                </Paper>
                                <Paper {...PAPER_PROPS}>
                                    <Text>Wind</Text>
                                    <Text>Speed: {currentWeather?.wind.speed}</Text>
                                    <Text>Degrees: {currentWeather?.wind.deg}</Text>
                                </Paper>
                                <Paper {...PAPER_PROPS}>
                                    <Text>Cloudiness</Text>
                                    <Text>{currentWeather?.clouds.all}%</Text>
                                </Paper>
                                <Paper {...PAPER_PROPS}>
                                    <Text>Rain</Text>
                                    <Text>1 hour: {currentWeather?.rain['1h']}mm</Text>
                                    <Text>3 hour: {currentWeather?.rain['3h']}mm</Text>
                                </Paper>
                            </SimpleGrid>
                        </Stack>
                    )}
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <Paper {...PAPER_PROPS}>
                        <Title order={5}>5-day forecast</Title>
                        {forecast?.list?.map((f) => (
                            <Paper key={f.dt} withBorder>
                                <Text>{format(fromUnixTime(f?.dt), 'MM/dd/yyyy hh:mm bb')}</Text>
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
