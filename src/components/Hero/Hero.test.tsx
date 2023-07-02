import { screen } from '@testing-library/react';
import render from '../../utils/renderWithRouter';
import Hero from '.';

describe('<Hero />', () => {
  it('should render correctly with default props', () => {
    const { container } = render(
      <Hero id={1} name='Hero' thumbnail='hero.image' />
    );

    expect(screen.getByText(/hero/i)).toBeVisible();
    expect(screen.getByAltText('Hero image Hero')).toBeVisible();
    expect(screen.getByAltText('Hero image Hero')).toHaveAttribute('src', 'hero.image/portrait_medium.jpg');
    expect(container.firstChild).toMatchSnapshot();
  });
});