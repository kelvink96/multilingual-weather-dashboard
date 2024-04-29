import { Drawer, DrawerProps, ScrollArea, Stack, Text, Title } from '@mantine/core';
import { Forecast } from '../../models';
import { ForecastCard } from '../forecast-card';

type Props = DrawerProps & {
    forecastList: Forecast['list'];
};

export const FullForecastDrawer = (props: Props) => {
    const { forecastList, ...others } = props;

    return (
        <Drawer title={<Title order={5}>5 day forecast</Title>} scrollAreaComponent={ScrollArea.Autosize} {...others}>
            <Stack px="md">
                {forecastList ? (
                    forecastList.map(
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
                    )
                ) : (
                    <Text>No forecast found</Text>
                )}
            </Stack>
        </Drawer>
    );
};
