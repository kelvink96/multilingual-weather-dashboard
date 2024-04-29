import { useDisclosure } from '@mantine/hooks';
import { AppShell, Group, Stack, TextInput, useMantineColorScheme } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';
import classes from './App.module.css';
import { IconSearch } from '@tabler/icons-react';
import { LanguagePicker, ThemeToggle } from '../components';

export const AppLayout = () => {
    const [opened, { toggle }] = useDisclosure();
    const { colorScheme } = useMantineColorScheme();

    return (
        <AppShell
            header={{ height: { base: 60, md: 70, lg: 80 } }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header className={classes.header}>
                <Header toggle={toggle} opened={opened} />
            </AppShell.Header>
            <AppShell.Navbar py="md" px={4}>
                <Stack px="md">
                    <TextInput
                        leftSection={<IconSearch size={16} />}
                        placeholder="search location"
                        value="Nairobi, KE"
                    />
                    <Group grow>
                        <LanguagePicker variant="filled" />
                        <ThemeToggle expanded variant="filled" />
                    </Group>
                </Stack>
            </AppShell.Navbar>
            <AppShell.Main bg={colorScheme === 'light' ? 'gray.1' : 'dark.9'}>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};
