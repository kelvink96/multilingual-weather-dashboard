import { Flex, Image, Paper, PaperProps, Text, Title } from '@mantine/core';
import { timeFormatter } from '../../utils';
import { FormattedMessage } from 'react-intl';

type Props = PaperProps & {
    time: number;
    city: string;
    country: string;
    icon: string;
    title: string;
    description: string;
    maxTemp: number;
    minTemp: number;
    tempFeelsLike: number;
};

export const HeroWeatherCard = (props: Props) => {
    const { city, country, minTemp, maxTemp, tempFeelsLike, time, icon, title, description, ...others } = props;

    return (
        <Paper {...others}>
            <Title order={6}>
                <FormattedMessage id="weather.title_label" />: {timeFormatter(time)}
            </Title>
            <Flex>
                <Text>
                    <FormattedMessage id="location.city_label" />: {city}
                </Text>
                <Text>
                    <FormattedMessage id="location.country_label" />: {country}
                </Text>
            </Flex>
            <Image src={icon} h={64} w={64} fit="contain" />
            <Flex>
                <Text>
                    <FormattedMessage id="weather.feels_like_label" />: {tempFeelsLike}
                </Text>
                <Text>
                    <FormattedMessage id="weather.max_label" />: {maxTemp}
                </Text>
                <Text>
                    <FormattedMessage id="weather.min_label" />: {minTemp}
                </Text>
            </Flex>
        </Paper>
    );
};
