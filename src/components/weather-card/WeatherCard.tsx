import { Flex, Group, MantineColor, Paper, PaperProps, Stack, Text, ThemeIcon } from '@mantine/core';
import { createElement, FunctionComponent } from 'react';

type Props = PaperProps & {
    icon: FunctionComponent;
    title: string;
    unit: string | number;
    extraIcon?: FunctionComponent;
    color?: MantineColor;
};

export const WeatherCard = (props: Props) => {
    const { icon, unit, title, extraIcon, color, ...others } = props;

    return (
        <Paper {...others}>
            <Group>
                <ThemeIcon variant="transparent" c={color}>
                    {createElement(icon)}
                </ThemeIcon>
                <Stack gap="sm">
                    <Text>{title}</Text>
                    <Flex gap={2} align="center">
                        <Text fz="xl" fw={600}>
                            {unit}
                        </Text>
                        {extraIcon && (
                            <ThemeIcon variant="transparent" c="dark.8" size="xs">
                                {createElement(extraIcon)}
                            </ThemeIcon>
                        )}
                    </Flex>
                </Stack>
            </Group>
        </Paper>
    );
};
