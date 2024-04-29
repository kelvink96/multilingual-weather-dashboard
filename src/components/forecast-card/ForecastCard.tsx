import { Divider, Flex, Image, Paper, PaperProps, Stack, Text } from '@mantine/core';
import { dateFormatter } from '../../utils';
import { FormattedMessage } from 'react-intl';
import { IconTemperatureCelsius } from '@tabler/icons-react';

type Props = PaperProps & {
    date: number;
    temp: string | number;
    pressure: string | number;
    humidity: string | number;
    wind: string | number;
    icon: string;
    mainWeather: string;
};

export const ForecastCard = (props: Props) => {
    const { date, temp, pressure, humidity, wind, icon, mainWeather, ...others } = props;

    return (
        <Paper {...others}>
            <Flex justify="space-between" align="center">
                <Flex align="center">
                    <Image src={icon} h={90} w={90} fit="contain" />
                    <Stack gap={4}>
                        <Text fz="sm">{dateFormatter(date)}</Text>
                        <Text fw={600}>{mainWeather}</Text>
                    </Stack>
                </Flex>
                <Flex gap={4} align="center" justify="start">
                    <Text fz={28} fw={500}>
                        {temp}
                    </Text>
                    <IconTemperatureCelsius size={18} stroke={1} />
                </Flex>
                <Stack gap={4} mr="md">
                    <Text fz="sm">
                        <FormattedMessage id="weather.pressure_label" />: {pressure} hPa
                    </Text>
                    <Text fz="sm">
                        <FormattedMessage id="weather.humidity_label" />: {humidity}%
                    </Text>
                    <Text fz="sm">
                        <FormattedMessage id="weather.wind_label" />: {wind} m/s
                    </Text>
                </Stack>
            </Flex>
            <Divider />
        </Paper>
    );
};
