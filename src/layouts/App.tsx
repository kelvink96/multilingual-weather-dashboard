import { useDisclosure } from '@mantine/hooks';
import { AppShell, Skeleton } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';

export const AppLayout = () => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: { base: 60, md: 70, lg: 80 } }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Header toggle={toggle} opened={opened} />
            </AppShell.Header>
            <AppShell.Navbar py="md" px={4}>
                Navbar
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};
