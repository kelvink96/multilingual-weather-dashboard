import { Box, Button, Flex, Grid, Paper, PaperProps, SimpleGrid, Stack, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { ForecastApi, WeatherApi } from '../api';
import { Forecast, Weather } from '../models';
import { ForecastCard, FullForecastDrawer, HeroWeatherCard, WeatherCard } from '../components';
import {
    IconCloud,
    IconDashboard,
    IconDropletHalf2,
    IconDroplets,
    IconMaximize,
    IconMist,
    IconSunrise,
    IconSunset,
    IconTemperature,
    IconTemperatureCelsius,
    IconWind,
} from '@tabler/icons-react';
import { timeFormatter } from '../utils';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDisclosure } from '@mantine/hooks';

const PAPER_PROPS: PaperProps = {
    p: 'md',
    shadow: 'md',
};

export const HomePage = () => {
    const [currentWeather, setCurrentWeather] = useState<Weather>();
    const [forecast, setForecast] = useState<Forecast>();
    const intl = useIntl();
    const [opened, { open, close }] = useDisclosure(false);

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
        <>
            <Box mt="md">
                <Grid gutter={{ base: 5, xs: 'md', md: 'lg', xl: 'xl' }}>
                    <Grid.Col span={{ base: 12, md: 12, lg: 8 }}>
                        {currentWeather && (
                            <Stack>
                                <Title order={4} mb="sm">
                                    <FormattedMessage id="weather.title_label" />: {timeFormatter(currentWeather.dt)}
                                </Title>
                                <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
                                    {currentWeather && currentWeather.weather && currentWeather.weather.length && (
                                        <HeroWeatherCard
                                            city={currentWeather.name}
                                            country={currentWeather.sys.country}
                                            description={currentWeather.weather[0].main}
                                            title={currentWeather.weather[0].description}
                                            icon={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                                            tempFeelsLike={currentWeather?.main.feels_like}
                                            maxTemp={currentWeather?.main.temp_max}
                                            minTemp={currentWeather?.main.temp_min}
                                            {...PAPER_PROPS}
                                        />
                                    )}
                                    <Stack>
                                        <WeatherCard
                                            title={intl.formatMessage({ id: 'weather.sunrise_label' })}
                                            icon={IconSunrise}
                                            unit={timeFormatter(currentWeather?.sys.sunrise)}
                                            color="yellow.7"
                                            {...PAPER_PROPS}
                                        />
                                        <WeatherCard
                                            title={intl.formatMessage({ id: 'weather.sunset_label' })}
                                            icon={IconSunset}
                                            unit={timeFormatter(currentWeather?.sys.sunset)}
                                            color="blue.7"
                                            {...PAPER_PROPS}
                                        />
                                    </Stack>
                                </SimpleGrid>
                                <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
                                    <WeatherCard
                                        title={intl.formatMessage({ id: 'weather.temp_label' })}
                                        icon={IconTemperature}
                                        unit={currentWeather?.main.temp}
                                        extraIcon={IconTemperatureCelsius}
                                        color="red.7"
                                        {...PAPER_PROPS}
                                    />
                                    <WeatherCard
                                        title={intl.formatMessage({ id: 'weather.pressure_label' })}
                                        icon={IconDashboard}
                                        unit={`${currentWeather?.main.temp} hPa`}
                                        color="violet.7"
                                        {...PAPER_PROPS}
                                    />
                                    <WeatherCard
                                        title={intl.formatMessage({ id: 'weather.humidity_label' })}
                                        icon={IconDropletHalf2}
                                        unit={`${currentWeather?.main.humidity}%`}
                                        color="cyan.7"
                                        {...PAPER_PROPS}
                                    />
                                    <WeatherCard
                                        title={intl.formatMessage({ id: 'weather.visibility_label' })}
                                        icon={IconMist}
                                        unit={`${currentWeather?.visibility} km`}
                                        color="green.7"
                                        {...PAPER_PROPS}
                                    />
                                    <WeatherCard
                                        title={intl.formatMessage({ id: 'weather.wind_label' })}
                                        icon={IconWind}
                                        unit={`${currentWeather?.wind.speed} m/s`}
                                        color="pink.7"
                                        {...PAPER_PROPS}
                                    />
                                    <WeatherCard
                                        title={intl.formatMessage({ id: 'weather.cloudiness_label' })}
                                        icon={IconCloud}
                                        unit={`${currentWeather?.clouds.all}%`}
                                        color="lime.7"
                                        {...PAPER_PROPS}
                                    />
                                    {currentWeather.rain && (
                                        <WeatherCard
                                            title={intl.formatMessage({ id: 'weather.rain_label' })}
                                            icon={IconDroplets}
                                            unit={`${currentWeather.rain?.['1h']}mm`}
                                            color="indigo.7"
                                            {...PAPER_PROPS}
                                        />
                                    )}
                                </SimpleGrid>
                            </Stack>
                        )}
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
                        <Stack>
                            <Flex justify="space-between">
                                <Title order={4}>5-day forecast</Title>
                                {forecast?.list && forecast.list.length > 0 && (
                                    <Button onClick={open} variant="light" leftSection={<IconMaximize size={18} />}>
                                        View full forecast
                                    </Button>
                                )}
                            </Flex>
                            <Paper shadow="md">
                                {forecast?.list &&
                                    forecast?.list?.length > 0 &&
                                    forecast?.list
                                        ?.slice(0, 5)
                                        .map(
                                            (f) =>
                                                f.weather && (
                                                    <ForecastCard
                                                        key={f.dt}
                                                        date={f.dt}
                                                        temp={f.main.temp}
                                                        pressure={f.main.pressure}
                                                        humidity={f.main.humidity}
                                                        wind={f.wind.speed}
                                                        icon={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`}
                                                        mainWeather={f.weather[0].main}
                                                    />
                                                )
                                        )}
                            </Paper>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Box>
            <FullForecastDrawer
                opened={opened}
                onClose={close}
                forecastList={forecast?.list}
                position="right"
                size="xl"
            />
        </>
    );
};
