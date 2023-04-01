import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render,screen } from '@testing-library/react';
import {MyCard} from './MyCard';
//import axios from 'axios'
//import {Details} from './Details';


it('should render one heading element', () => {
  render(<MyCard />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});

it('should render same text in heading element passed into props', () => {
    render(<MyCard name={'Baconos pizza'}/>);
    const headingElement = screen.getByText(/baconos pizza/i)
    expect(headingElement).toBeInTheDocument();
  });

  it('should render one image ', () => {
    render(<MyCard />);
    const imgElement = screen.getByRole('img')
    expect(imgElement).toBeInTheDocument();
  });

   it('image should have title attribute passed into props name', () => {
    render(<MyCard name={'finom pizza'}/>);
    const imgElement = screen.getByRole('img')
    expect(imgElement.title).toBe('finom pizza');
  });

  it('should render one button', () => {
    render(<MyCard />);
    const btnElement = screen.getByRole('button')
    expect(btnElement).toBeInTheDocument();
  });

  it('should render one button with specific text', () => {
    render(<MyCard />);
    const btnElement = screen.getByRole('button')
    expect(btnElement.textContent).toBe('Részletek...');
  });
//query: 

it('should render the button strict with specific text', () => {
    render(<MyCard />);
    const btnElement = screen.queryByText('tovább...')
    expect(btnElement).not.toBeInTheDocument()
  });
//getAll - array lesz:
it('should render only one image ', () => {
    render(<MyCard />);
    const imgElements = screen.getAllByRole('img')
    expect(imgElements.length).toBe(1);
  });

  
  it('should render one button and calls setSelProduct prop when clicked', () => {
    const mockFunction = jest.fn();
    render(<MyCard setSelProduct={mockFunction} />);
    const btnElement = screen.getByRole('button')
    fireEvent.click(btnElement);
    expect(btnElement).toBeInTheDocument()
    expect(mockFunction).toHaveBeenCalledTimes(1)
  });

//integration tests:
/*

it('should render one button and calls setSelProduct prop when clicked',async () => {
  const mockFunction = jest.fn();
  render(<MyCard setSelProduct={mockFunction} />);
  const btnElement = screen.getByRole('button')
  fireEvent.click(btnElement);
  const divElement=screen.getByText(/méret/i)
  expect(divElement).toBeInTheDocument()
  
});*/