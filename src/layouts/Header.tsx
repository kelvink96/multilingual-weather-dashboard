import { Burger, Group, Text, TextInput } from '@mantine/core';
import { LanguagePicker, Logo, ThemeToggle } from '../components';
import { IconSearch } from '@tabler/icons-react';

type Props = {
    opened: boolean;
    toggle: () => void;
};

export const Header = (props: Props) => {
    const { opened, toggle } = props;

    return (
        <>
            <Group h="100%" px="md" justify="space-between">
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <Group>
                    <Logo size={30} />
                    <Text>{new Date().toLocaleDateString()}</Text>
                </Group>
                <Group>
                    <TextInput
                        leftSection={<IconSearch size={16} />}
                        placeholder="search location"
                        value="Nairobi, KE"
                        variant="filled"
                    />
                    <LanguagePicker />
                    <ThemeToggle />
                </Group>
            </Group>
        </>
    );
};
