import { Group, Text, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import { IconSnowflake } from '@tabler/icons-react';

type Props = Partial<UnstyledButtonProps>;

export const Logo = ({ ...others }: Props) => {
    return (
        <UnstyledButton component={Group} {...others}>
            <IconSnowflake size={24} />
            <Text>Weather Dashboard</Text>
        </UnstyledButton>
    );
};
