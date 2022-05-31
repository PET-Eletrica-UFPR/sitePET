import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { Home } from './routes/Home';
import { Projects } from './routes/Projects';
import { Graduation } from './routes/Graduation';
import { Extension } from './routes/Extension';
import { Events } from './routes/Events';
import { Certificates } from './routes/Certificates';
import { AboutUs } from './routes/AboutUs';
import { NotFound } from './routes/NotFound';

import { Header } from './components/Header';
import { Footer } from './components/Footer';


export function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          }>
            <Route index element={<Home />} />
            <Route path='projects' element={<Projects />} />
            <Route path='graduation' element={<Graduation />} />
            <Route path='extension' element={<Extension />} />
            <Route path='events' element={<Events />} />
            <Route path='certificates' element={<Certificates />} />
            <Route path='about-us' element={<AboutUs />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
