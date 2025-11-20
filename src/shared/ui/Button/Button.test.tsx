import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test2</Button>);
        expect(screen.getByText('Test2')).toHaveClass('clear');
    });
});
