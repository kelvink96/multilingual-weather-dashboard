import { Group, Text, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import { IconSnowflake } from '@tabler/icons-react';
import { FormattedMessage } from 'react-intl';

type Props = Partial<UnstyledButtonProps>;

export const Logo = ({ ...others }: Props) => {
    return (
        <UnstyledButton component={Group} {...others}>
            <IconSnowflake size={24} />
            <Text>
                <FormattedMessage id="app.title" />
            </Text>
        </UnstyledButton>
    );
};
