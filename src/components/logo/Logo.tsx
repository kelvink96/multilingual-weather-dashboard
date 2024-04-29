import { Group, Text, ThemeIcon, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import { IconSnowflake } from '@tabler/icons-react';
import { FormattedMessage } from 'react-intl';

type Props = Partial<UnstyledButtonProps>;

export const Logo = ({ ...others }: Props) => {
    return (
        <UnstyledButton component={Group} {...others}>
            <ThemeIcon variant="filled" size="lg">
                <IconSnowflake />
            </ThemeIcon>
            <Text>
                <FormattedMessage id="app.title" />
            </Text>
        </UnstyledButton>
    );
};
