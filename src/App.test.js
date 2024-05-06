import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders WelcomeComponent react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('welcome-component');
  expect(linkElement).toBeInTheDocument();
});

test('renders all the books', () => {
  render(<App />);
  const allTheBooks = screen.getAllByTestId('book-card');
  expect(allTheBooks).toHaveLength(150)
})

describe('renders CommentArea component', () => {
  it('renders rate component', () => {
    render(<App />);
    const findRateField = screen.getByPlaceholderText('inserisci un voto da 1 a 5');
    expect(findRateField).toBeInTheDocument()
  })
  it('renders comment component', () => {
    render(<App />);
    const findCommentField = screen.getByPlaceholderText('inserisci la tua recensione');
    expect(findCommentField).toBeInTheDocument()
  })
})

describe('filter test', () => {
  it('find four results searching "Dark"', () => {
    render(<App />);
    const InputField = screen.getByTestId('searchbar-input');
    fireEvent.change(InputField, {target: {value: 'dark'}})
    const booksFiltered = screen.getAllByTestId('book-card')
    expect(booksFiltered).toHaveLength(4)
  })
})