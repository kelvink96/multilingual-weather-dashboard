import { Alert, AlertProps } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

type Props = AlertProps & { message: string; code: number | string };

export const ErrorAlert = (props: Props) => {
    const { message, code, title, ...others } = props;

    return (
        <Alert color={others.color ?? 'red'} title={`${code}: ${title}`} icon={<IconInfoCircle />} {...others}>
            {message}
        </Alert>
    );
};
