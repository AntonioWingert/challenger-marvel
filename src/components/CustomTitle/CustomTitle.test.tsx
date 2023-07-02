import { screen } from '@testing-library/react';
import render from '../../utils/renderWithRouter';
import CustomTitle from '.';

describe('<CustomTitle />', () => {
  it('should render correctly with default props', () => {
    const {container} = render(
      <CustomTitle title="Header" $size="sm" />
    );

    expect(screen.getByText(/header/i)).toBeVisible();
    expect(screen.getByText(/header/i)).toHaveStyleRule('font-size', '1.6rem');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const {container} = render(
      <CustomTitle title="Header" $size="xxl" $weight="bold" $color="secondary" />
    );

    expect(screen.getByText(/header/i)).toBeVisible();
    expect(screen.getByText(/header/i)).toHaveStyleRule('font-size', '3rem');
    expect(screen.getByText(/header/i)).toHaveStyleRule('font-weight', '700');
    expect(screen.getByText(/header/i)).toHaveStyleRule('color', '#F5F5F5');
    expect(container.firstChild).toMatchSnapshot();
  }
  );
});