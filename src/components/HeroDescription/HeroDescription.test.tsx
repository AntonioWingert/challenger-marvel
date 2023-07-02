import { screen } from '@testing-library/react';
import render from '../../utils/renderWithRouter';
import HeroDescription from '.';

describe('<HeroDescription />', () => {
  it('should render correctly with default props', () => {
    const { container } = render(
      <HeroDescription description='Description' name='Hero' thumbnail='Hero.Image' />
    );

    expect(screen.getByText(/hero/i)).toBeVisible();
    expect(screen.getByAltText('Hero image Hero')).toBeVisible();
    expect(screen.getByAltText('Hero image Hero')).toHaveAttribute('src', 'Hero.Image/portrait_uncanny.jpg');
    expect(container.firstChild).toMatchSnapshot();
  });
});