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
            <Flex
                px="sm"
                justify={{ base: 'center', md: 'space-between' }}
                gap={{ base: 'sm', md: 0 }}
                align="center"
                wrap="wrap"
            >
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
                <Flex direction={{ base: 'row', md: 'column' }} gap={{ base: 'sm', md: 4 }} wrap="wrap">
                    <Text fz="sm">
                        <FormattedMessage id="weather.pressure_label" />: <b>{pressure} hPa</b>
                    </Text>
                    <Text fz="sm">
                        <FormattedMessage id="weather.humidity_label" />: <b>{humidity}%</b>
                    </Text>
                    <Text fz="sm">
                        <FormattedMessage id="weather.wind_label" />: <b>{wind} m/s</b>
                    </Text>
                </Flex>
            </Flex>
            <Divider mt="sm" />
        </Paper>
    );
};
