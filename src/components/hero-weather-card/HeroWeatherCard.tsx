import { Flex, Image, Paper, PaperProps, Stack, Text } from '@mantine/core';
import { FormattedMessage } from 'react-intl';
import { IconTemperatureCelsius } from '@tabler/icons-react';

type Props = PaperProps & {
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
    const { city, country, minTemp, maxTemp, tempFeelsLike, icon, title, description, ...others } = props;

    return (
        <Paper {...others}>
            <Stack gap="md">
                <Text>
                    <FormattedMessage id="location.city_label" />: {city}
                </Text>
                <Text>
                    <FormattedMessage id="location.country_label" />: {country}
                </Text>
            </Stack>
            <Flex gap="md" align="center">
                <Image src={icon} h={128} w={128} fit="contain" />
                <Stack>
                    <Flex gap={4} align="center">
                        <Text>
                            <FormattedMessage id="weather.feels_like_label" />{' '}
                        </Text>
                        :<Text fw={500}>{tempFeelsLike}</Text>
                        <IconTemperatureCelsius size={16} stroke={1} />
                    </Flex>
                    <Flex gap={4} align="center">
                        <Text>
                            <FormattedMessage id="weather.max_label" />
                        </Text>
                        :<Text fw={500}>{maxTemp}</Text>
                        <IconTemperatureCelsius size={16} stroke={1} />
                    </Flex>
                    <Flex gap={4} align="center">
                        <Text>
                            <FormattedMessage id="weather.min_label" />
                        </Text>
                        :<Text fw={500}>{minTemp}</Text>
                        <IconTemperatureCelsius size={16} stroke={1} />
                    </Flex>
                </Stack>
            </Flex>
        </Paper>
    );
};
