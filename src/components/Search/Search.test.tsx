import { fireEvent, screen } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';
import render from '../../utils/renderWithRouter';
import Search from '.';
import mockMarvelAPI from '../../mocks/HeroData.mock';


describe('<Search />', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockMarvelAPI),
    } as unknown as Response);
  
  });
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should render home page', () => {
    const { container } = render(
      <Search />
    );
    expect(screen.getByText('Pesquise seu heroi favorito!')).toBeVisible();
    expect(screen.getByPlaceholderText('Insira o nome do seu personagem favorito')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Pesquisar' })).toBeVisible();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render error message if there is no hero with this name', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        data: {
          results: [],
        }
      }),
    } as unknown as Response);

    const { container } = render(
      <Search />
    );

    const input = screen.getByPlaceholderText(/insira o nome do seu personagem favorito/i);
    const button = screen.getByRole('button', { name: 'Pesquisar' });

    expect(input).toBeVisible();
    expect(button).toBeVisible();

    fireEvent.change(input, { target: { value: 'HeroNotFound' } });
    fireEvent.click(button);

    expect(await screen.findByText('Nenhum personagem com esse nome foi encontrado')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render error message if user not pass name', async () => {
    const { container } = render(
      <Search />
    );

    const input = screen.getByPlaceholderText(/insira o nome do seu personagem favorito/i);
    const button = screen.getByRole('button', { name: 'Pesquisar' });

    expect(input).toBeVisible();
    expect(button).toBeVisible();

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);

    expect(await screen.findByText('Insira um nome válido')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render one list of heroes with name passed', async () => {
    const { container } = render(
      <Search />
    );

    const input = screen.getByPlaceholderText(/insira o nome do seu personagem favorito/i);
    const button = screen.getByRole('button', { name: 'Pesquisar' });

    expect(input).toBeVisible();
    expect(button).toBeVisible();

    fireEvent.change(input, { target: { value: 'Spider' } });
    fireEvent.click(button);

    const hero = await screen.findAllByText(/spider/i);

    expect(hero[0]).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});