import { Image, Paper, PaperProps, Text } from '@mantine/core';
import { dateFormatter } from '../../utils';
import { FormattedMessage } from 'react-intl';
import { IconTemperatureCelsius } from '@tabler/icons-react';

type Props = PaperProps & {
    date: number;
    temp: string | number;
    pressure: string | number;
    humidity: string | number;
    icon: string;
    mainWeather: string;
};

export const ForecastCard = (props: Props) => {
    const { date, temp, pressure, humidity, icon, mainWeather, ...others } = props;

    return (
        <Paper {...others}>
            <Text>{dateFormatter(date)}</Text>
            <Text>
                <FormattedMessage id="weather.temp_label" />: {temp}
            </Text>
            <IconTemperatureCelsius />
            <Text>
                <FormattedMessage id="weather.pressure_label" />: {pressure} hPa
            </Text>
            <Text>
                <FormattedMessage id="weather.humidity_label" />: {humidity}%
            </Text>
            <Image src={icon} h={60} w={60} fit="contain" />
        </Paper>
    );
};
