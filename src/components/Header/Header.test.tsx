import { screen } from '@testing-library/react';
import render from '../../utils/renderWithRouter';
import Header from '.';

describe('<Header />', () => {
  it('should render correctly with default props', () => {
    const { container } = render(
      <Header />
    );

    expect(screen.getByText(/Marvel Challenger/i)).toBeVisible();
    expect(screen.getByText(/Marvel Challenger/i)).toHaveStyleRule('font-size', '2.4rem');
    expect(container.firstChild).toMatchSnapshot();
  });
});