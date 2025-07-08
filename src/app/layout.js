import './globals.css';
import Navbar from '@/components/Navbar';
import PageWrapper from '@/components/PageWrapper'; // <- new client wrapper

export const metadata = {
  title: 'Aatiqa Hussain Portfolio',
  description: 'React | Node | Full Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageWrapper>
          <main className="p-4">{children}</main>
        </PageWrapper>
      </body>
    </html>
  );
}
