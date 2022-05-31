import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './routes/Home';
import { Projects } from './routes/Projects';
import { Graduation } from './routes/Graduation';
import { Extension } from './routes/Extension';
import { Events } from './routes/Events';
import { Certificates } from './routes/Certificates';
import { AboutUs } from './routes/AboutUs';
import { NotFound } from './routes/NotFound';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='projetos' element={<Projects />} />
        <Route path='graduacao' element={<Graduation />} />
        <Route path='extensao' element={<Extension />} />
        <Route path='eventos' element={<Events />} />
        <Route path='certificados' element={<Certificates />} />
        <Route path='sobre-nos' element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
