import { screen } from '@testing-library/react';
import render from '../../utils/renderWithRouter';
import HeroContainer from '.';
import mockMarvelAPI from '../../mocks/HeroData.mock';

describe('<Hero />', () => {
  it('should render correctly with default props', () => {
    const { container } = render(
      <HeroContainer data={mockMarvelAPI.data}/>
    );

    expect(screen.getByText(/iron man/i)).toBeVisible();
    expect(screen.getByAltText('Hero image Iron Man')).toBeVisible();
    expect(screen.getByAltText('Hero image Iron Man')).toHaveAttribute('src', 'http://example.com/ironman/portrait_medium.jpg');
    expect(container.firstChild).toMatchSnapshot();
  });
});