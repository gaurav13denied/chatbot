import { Navigate, Route, Routes } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash.jsx';
import MobileChat from './components/MobileChat.jsx';
import { ChatProvider } from './lib/ChatContext.jsx';
import InnerLayout from './components/layout/InnerLayout.jsx';
import Home from './pages/Home.jsx';
import Plumbing from './pages/Plumbing.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Cookies from './pages/Cookies.jsx';
import Refund from './pages/Refund.jsx';
import Cancellation from './pages/Cancellation.jsx';
import TaxesFees from './pages/TaxesFees.jsx';

// Every inner page shares the same fixed header + footer.
const inner = (element, active) => <InnerLayout active={active}>{element}</InnerLayout>;

export default function App() {
  return (
    <ChatProvider>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/plumbing" element={inner(<Plumbing />, 'categories')} />
        <Route path="/contact" element={inner(<Contact />, 'contact')} />
        <Route path="/privacy" element={inner(<Privacy />)} />
        <Route path="/terms" element={inner(<Terms />)} />
        <Route path="/cookies" element={inner(<Cookies />)} />
        <Route path="/refund-policy" element={inner(<Refund />)} />
        <Route path="/cancellation-policy" element={inner(<Cancellation />)} />
        <Route path="/taxes-and-fees" element={inner(<TaxesFees />)} />
        {/* Old addresses keep working */}
        <Route path="/category/printers" element={<Navigate to="/category/plumbing" replace />} />
        <Route path="/category/printers-1" element={<Navigate to="/category/plumbing" replace />} />
        <Route path="/category/printers-2" element={<Navigate to="/category/plumbing" replace />} />
        <Route path="/legal" element={<Navigate to="/privacy" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Phone only: round chat icon at the bottom right + full-screen chat */}
      <MobileChat />
    </ChatProvider>
  );
}
