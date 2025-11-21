import Header from './Header';
import Footer from './Footer';
import Sub from './Sub';
import FadeInSection from './common/FadeInSection';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1 w-full">{children}</main>
      <FadeInSection>
        <Sub />
      </FadeInSection>
      <Footer />
    </div>
  );
}
