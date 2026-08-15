import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div data-ev-id="ev_f21ad28c06" className="min-h-screen bg-background flex flex-col">
      <Header />
      <main data-ev-id="ev_9a3f7aa24f" className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>);

}