import { screen } from '@testing-library/react';
import render  from '../../utils/renderWithRouter';
import CustomInput from '.';


describe('<CustomInput />', () => {
  it('should render the input with all props passed', () => {
    const { container } = render(
      CustomInput({ placeholder: 'test' }),
    );
    
    expect(screen.getByPlaceholderText(/test/i)).toBeVisible();
    expect(container.firstChild).toMatchSnapshot();
  });
});