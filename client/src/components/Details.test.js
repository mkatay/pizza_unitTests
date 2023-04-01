//async
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render,screen } from '@testing-library/react';
import {Details} from './Details';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const selProduct={id:1,name:'teszt'}

const MockDetails=()=>{
    return(
    <QueryClientProvider client={queryClient}>
        <Details selProduct={selProduct}/>
    </QueryClientProvider>
    )
}

it('should render one heading element with text prop',async () => {
    render(<MockDetails  />);
    const h1Element =await  screen.findByText(/teszt/i)
    expect(h1Element).toBeInTheDocument();
  });
//nem csak a client oldal tesztelődik, hanem a backend is, az API is tesztelőúdik...nem a legjobb megoldás
//a backenden elérni az adatokat a cliens tesztelésnél: drága(az erőforrás elérése), időbe telik(lassú), s a kliens oldal tesztelése külső tényezőtől függ
  it('should render 3 div element with details',async () => {
    render(<MockDetails  />);
    const divElements =await  screen.findAllByText(/méret/i)
    expect(divElements.length).toBe(3);
  });
  //mocking request????????