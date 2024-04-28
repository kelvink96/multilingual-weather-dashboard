import { Group, Paper, PaperProps, Stack, Text } from '@mantine/core';
import { createElement, FunctionComponent } from 'react';

type Props = PaperProps & {
    icon: FunctionComponent;
    title: string;
    unit: string | number;
    extraIcon?: FunctionComponent;
};

export const WeatherCard = (props: Props) => {
    const { icon, unit, title, extraIcon, ...others } = props;

    return (
        <Paper {...others}>
            <Group>
                {createElement(icon)}
                <Stack>
                    <Text>{title}</Text>
                    <Text>{unit}</Text>
                    {extraIcon && createElement(extraIcon)}
                </Stack>
            </Group>
        </Paper>
    );
};
