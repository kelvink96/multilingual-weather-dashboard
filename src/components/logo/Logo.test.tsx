import { Logo } from './Logo.tsx';
import { render } from '../../../test-utils';

describe('Logo', () => {
    it('should render logo', () => {
        render(<Logo />);
    });
});
