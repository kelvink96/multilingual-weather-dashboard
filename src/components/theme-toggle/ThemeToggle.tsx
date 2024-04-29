import { ActionIcon, Tooltip, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export const ThemeToggle = () => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <Tooltip label={`Switch to ${colorScheme === 'light' ? 'dark' : 'light'} theme`}>
            <ActionIcon
                variant="light"
                size="lg"
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                aria-label="toggle theme"
            >
                {colorScheme === 'light' ? <IconSun stroke={1.5} /> : <IconMoon stroke={1.5} />}
            </ActionIcon>
        </Tooltip>
    );
};
