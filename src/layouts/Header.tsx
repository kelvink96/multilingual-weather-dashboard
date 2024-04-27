import { ActionIcon, Burger, Group, SegmentedControl, Text, TextInput } from '@mantine/core';
import { LanguagePicker, Logo } from '../components';
import { IconSearch, IconSun } from '@tabler/icons-react';

type Props = {
    opened: boolean;
    toggle: () => void;
};

export const Header = (props: Props) => {
    const { opened, toggle } = props;

    return (
        <>
            <Group h="100%" px="md">
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <Group>
                    <Logo size={30} />
                    <Text>{new Date().toLocaleDateString()}</Text>
                </Group>
                <Group>
                    <TextInput leftSection={<IconSearch />} />
                    <LanguagePicker />
                    <ActionIcon variant="default" aria-label="toggle theme">
                        <IconSun stroke={1.5} />
                    </ActionIcon>
                    <SegmentedControl data={['Celcius', 'Farenheit']} />
                </Group>
            </Group>
        </>
    );
};
