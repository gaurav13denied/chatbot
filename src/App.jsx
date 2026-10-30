import { Navigate, Route, Routes } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash.jsx';
import InnerLayout from './components/layout/InnerLayout.jsx';
import Home from './pages/Home.jsx';
import Printers from './pages/Printers.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/printers"
          element={
            <InnerLayout active="categories">
              <Printers />
            </InnerLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <InnerLayout active="contact">
              <Contact />
            </InnerLayout>
          }
        />
        <Route
          path="/privacy"
          element={
            <InnerLayout>
              <Privacy />
            </InnerLayout>
          }
        />
        <Route
          path="/terms"
          element={
            <InnerLayout>
              <Terms />
            </InnerLayout>
          }
        />
        {/* The design links both legal pages to /legal */}
        <Route path="/legal" element={<Navigate to="/privacy" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
