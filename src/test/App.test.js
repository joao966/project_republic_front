//Stage de teste
import React from 'react';
import { screen } from '@testing-library/react';
import renderWhiteRouter from './ProviderTest';
import App from '../App';

describe('Page initial', () => {
  test('testa se a rota é a raiz e se a pagina possui um botão de inscrever-se', () => {
    const { history } = renderWhiteRouter(
      <App/>
    );

    expect(history.location.pathname).toBe('/');

    const button = screen.getByRole('link', {
      name: /inscrever-se/i
    })
    expect(button).toBeDefined();
  })
})

describe('Page register', () => {
  test('testa se a pagina muda para a rota de registro', () => {
    const { history } = renderWhiteRouter(
      <App />
    )

    history.push('/register');
    expect(history.location.pathname).toBe('/register');

    const button = screen.queryByTestId('button-register');
    expect(button).toBeDefined();
  })
})

describe('Page dashboard', () => {
  test('testa se a pagina muda para a rota dashboard', () => {
    const { history } = renderWhiteRouter(
      <App />
    )

    history.push('/dashboard');
    expect(history.location.pathname).toBe('/dashboard');

    const modal = screen.queryByTestId('modal');
    expect(modal).toBeDefined();
  })
})

describe('Page finale', () => {
  test('testa se há um h1 na tela', () => {
    renderWhiteRouter(
      <App />
    )

    const Heading = screen.queryByTestId('heading');
    expect(Heading).toBeDefined();
  })
})