import { screen } from '@testing-library/react';
import render  from '../../utils/renderWithRouter';
import CustomButton from '.';


describe('<CustomButton />', () => {
  it('should render the button with all props passed', () => {
    const { container } = render(
      CustomButton({ title: 'Test', size: 'lg' }),
    );
    expect(screen.getByRole('button', { name: /Test/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Test/i })).toHaveStyle('padding: 2px 6px 3px 6px');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button with default props', () => {
    render(CustomButton({ title: 'default' }));
    expect(screen.getByRole('button', { name: /default/i })).toHaveStyle('padding: 2px 6px 3px 6px');
  });
});