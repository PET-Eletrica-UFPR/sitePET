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
        <Route path='projects' element={<Projects />} />
        <Route path='graduation' element={<Graduation />} />
        <Route path='extension' element={<Extension />} />
        <Route path='events' element={<Events />} />
        <Route path='certificates' element={<Certificates />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
