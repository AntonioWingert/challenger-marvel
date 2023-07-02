import { screen } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';
import render from '../../utils/renderWithRouter';
import Description from '.';
import mockMarvelAPICharacterById from '../../mocks/HeroId.mock';


describe('<Search />', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockMarvelAPICharacterById),
    } as unknown as Response);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });


  it('should render home page', async () => {
    const { container } = render(
      <Description />
    );

    const heading = await screen.findByRole('heading', {
      name: /iron man/i
    });
    const image = await screen.findByRole('img', {
      name: /Hero image Iron Man/i
    });
    const button = await screen.findByRole('link', {
      name: /voltar/i
    });

    expect(heading).toBeVisible();
    expect(image).toBeVisible();
    expect(button).toBeVisible();

    expect(container).toMatchSnapshot();
  });

  it('should render not found page with invalid hero', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        data: {
          results: [],
        }
      }),
    } as unknown as Response);
    const { container } = render(
      <Description />
    );

    const image = await screen.findByRole('img', {
      name: /hero not found/i
    });

    const heading = await screen.findByRole('heading', {
      name: /herói não encontrado/i
    });

    const button = await screen.findByRole('link', {
      name: /voltar/i
    });

    expect(image).toBeVisible();
    expect(heading).toBeVisible();
    expect(button).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it('should return error when api returns error', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(
      new Error('Hero not found')
    );

    render(<Description />);

  });
});