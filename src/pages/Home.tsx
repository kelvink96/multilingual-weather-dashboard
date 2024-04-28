import { Box, Grid, Paper, PaperProps, SimpleGrid, Stack, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { ForecastApi, WeatherApi } from '../api';
import { Forecast, Weather } from '../models';
import { ForecastCard, HeroWeatherCard, WeatherCard } from '../components';
import {
    IconCloud,
    IconDashboard,
    IconDropletHalf2,
    IconDroplets,
    IconMist,
    IconSunrise,
    IconSunset,
    IconTemperature,
    IconTemperatureCelsius,
    IconWind,
} from '@tabler/icons-react';
import { timeFormatter } from '../utils';
import { useIntl } from 'react-intl';

const PAPER_PROPS: PaperProps = {
    p: 'md',
    withBorder: true,
};

export const HomePage = () => {
    const [currentWeather, setCurrentWeather] = useState<Weather>();
    const [forecast, setForecast] = useState<Forecast>();
    const intl = useIntl();

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
                            {currentWeather && currentWeather.weather && currentWeather.weather.length && (
                                <HeroWeatherCard
                                    city={currentWeather.name}
                                    country={currentWeather.sys.country}
                                    description={currentWeather.weather[0].main}
                                    title={currentWeather.weather[0].description}
                                    icon={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                                    time={currentWeather.dt}
                                    tempFeelsLike={currentWeather?.main.feels_like}
                                    maxTemp={currentWeather?.main.temp_max}
                                    minTemp={currentWeather?.main.temp_min}
                                    {...PAPER_PROPS}
                                />
                            )}
                            <WeatherCard
                                title={intl.formatMessage({ id: 'weather.sunrise_label' })}
                                icon={IconSunrise}
                                unit={timeFormatter(currentWeather?.sys.sunrise)}
                                {...PAPER_PROPS}
                            />
                            <WeatherCard
                                title={intl.formatMessage({ id: 'weather.sunset_label' })}
                                icon={IconSunset}
                                unit={timeFormatter(currentWeather?.sys.sunset)}
                                {...PAPER_PROPS}
                            />
                            <SimpleGrid
                                cols={{ base: 1, sm: 2, lg: 5 }}
                                spacing={{ base: 10, sm: 'xl' }}
                                verticalSpacing={{ base: 'md', sm: 'xl' }}
                            >
                                <WeatherCard
                                    title={intl.formatMessage({ id: 'weather.temp_label' })}
                                    icon={IconTemperature}
                                    unit={currentWeather?.main.temp}
                                    extraIcon={IconTemperatureCelsius}
                                    {...PAPER_PROPS}
                                />
                                <WeatherCard
                                    title={intl.formatMessage({ id: 'weather.pressure_label' })}
                                    icon={IconDashboard}
                                    unit={`${currentWeather?.main.temp}hPa`}
                                    {...PAPER_PROPS}
                                />
                                <WeatherCard
                                    title={intl.formatMessage({ id: 'weather.humidity_label' })}
                                    icon={IconDropletHalf2}
                                    unit={`${currentWeather?.main.humidity}%`}
                                    {...PAPER_PROPS}
                                />
                                <WeatherCard
                                    title={intl.formatMessage({ id: 'weather.visibility_label' })}
                                    icon={IconMist}
                                    unit={`${currentWeather?.visibility}km`}
                                    {...PAPER_PROPS}
                                />
                                <WeatherCard
                                    title={intl.formatMessage({ id: 'weather.wind_label' })}
                                    icon={IconWind}
                                    unit={`${currentWeather?.wind.speed} m/s`}
                                    {...PAPER_PROPS}
                                />
                                <WeatherCard
                                    title={intl.formatMessage({ id: 'weather.cloudiness_label' })}
                                    icon={IconCloud}
                                    unit={`${currentWeather?.clouds.all}%`}
                                    {...PAPER_PROPS}
                                />
                                <WeatherCard
                                    title={intl.formatMessage({ id: 'weather.rain_label' })}
                                    icon={IconDroplets}
                                    unit={`${currentWeather.rain['1h']}mm`}
                                    {...PAPER_PROPS}
                                />
                            </SimpleGrid>
                        </Stack>
                    )}
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <Paper {...PAPER_PROPS}>
                        <Title order={5}>5-day forecast</Title>
                        {forecast?.list?.map(
                            (f) =>
                                f.weather && (
                                    <ForecastCard
                                        key={f.dt}
                                        date={f.dt}
                                        temp={f.main.temp}
                                        pressure={f.main.pressure}
                                        humidity={f.main.humidity}
                                        icon={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`}
                                        mainWeather={f.weather[0].main}
                                    />
                                )
                        )}
                    </Paper>
                </Grid.Col>
            </Grid>
        </Box>
    );
};
