import { screen } from '@testing-library/react';
import render from '../../utils/renderWithRouter';
import Loading from '.';

describe('<Loading />', () => {
  it('should render correctly with default props', () => {
    const { container } = render(
      <Loading />
    );

    expect(screen.getByLabelText(/loading-spinner/i)).toBeVisible();
    expect(container.firstChild).toMatchSnapshot();
  });
});