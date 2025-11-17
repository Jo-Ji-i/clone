import Header from './Header';
import Footer from './Footer';
import Sub from './Sub';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-6xl px-4 py-6 mx-auto">{children}</main>

      <Sub />
      <Footer />
    </div>
  );
}
