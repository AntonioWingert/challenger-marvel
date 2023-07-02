import { screen } from '@testing-library/react';
import render from '../../utils/renderWithRouter';
import HeroNotFound from '.';

describe('<HeroNotFound />', () => {
  it('should render correctly with default props', () => {
    const { container } = render(
      <HeroNotFound />
    );

    expect(screen.getByText(/Herói não encontrado/i)).toBeVisible();
    expect(screen.getByAltText('Hero not found')).toBeVisible();
    expect(screen.getByAltText('Hero not found')).toHaveAttribute('src', '/spider-man.png');
    expect(container.firstChild).toMatchSnapshot();
  });
});