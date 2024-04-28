import { useContext, useState } from 'react';
import { Group, Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './LanguagePicker.module.css';
import { LocaleContext, LocaleContextType } from '../../context';
import { locales } from '../../i18n/i18n-config.ts';

export const LanguagePicker = () => {
    const { locale, setLocale } = useContext(LocaleContext) as LocaleContextType;
    const [opened, setOpened] = useState(false);

    const items = Object.keys(locales).map((item) => (
        <Menu.Item
            onClick={() => {
                setLocale(item);
            }}
            key={item}
        >
            {locales[item].name}
        </Menu.Item>
    ));

    return (
        <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target" withinPortal>
            <Menu.Target>
                <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
                    <Group gap="xs">
                        <span className={classes.label}>{locales[locale].name}</span>
                    </Group>
                    <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
    );
};
