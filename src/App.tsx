/**
 * ⚠️ ROUTING RULES:
 * - Define ALL routes here using <Routes> and <Route>
 * - Never add <BrowserRouter> here (it lives in main.tsx)
 * - Never use useRoutes()
 * - Import pages directly (no lazy loading)
 */

import { Routes, Route } from 'react-router';
import Index from '@/pages/Index';
import Course from '@/pages/Course';
import HolePage from '@/pages/HolePage';
import Rates from '@/pages/Rates';
import Groups from '@/pages/Groups';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/course" element={<Course />} />
      <Route path="/course/hole/:number" element={<HolePage />} />
      <Route path="/rates" element={<Rates />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
