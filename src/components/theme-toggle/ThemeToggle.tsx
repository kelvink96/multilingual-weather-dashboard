import { ActionIcon, Button, ButtonProps, Tooltip, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

type Props = { variant?: ButtonProps['variant']; expanded?: boolean };

export const ThemeToggle = (props: Props) => {
    const { expanded, variant } = props;
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <Tooltip label={`Switch to ${colorScheme === 'light' ? 'dark' : 'light'} theme`}>
            {expanded ? (
                <Button
                    variant={variant ?? 'light'}
                    onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                    aria-label="toggle theme"
                    leftSection={colorScheme === 'light' ? <IconSun stroke={1.5} /> : <IconMoon stroke={1.5} />}
                >
                    {`${colorScheme === 'light' ? 'Dark' : 'Light'} mode`}{' '}
                </Button>
            ) : (
                <ActionIcon
                    variant={variant ?? 'light'}
                    size="lg"
                    onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                    aria-label="toggle theme"
                >
                    {colorScheme === 'light' ? <IconSun stroke={1.5} /> : <IconMoon stroke={1.5} />}
                </ActionIcon>
            )}
        </Tooltip>
    );
};
