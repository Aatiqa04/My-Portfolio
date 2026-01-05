import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';
import ThemeProvider from '@/components/ThemeProvider';
import ScrollProgress from '@/components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Aatiqa Hussain | Full Stack Developer',
  description: 'Passionate MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Based in Pakistan.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React Developer', 'Node.js', 'Next.js', 'Web Developer', 'Aatiqa Hussain'],
  authors: [{ name: 'Aatiqa Hussain' }],
  creator: 'Aatiqa Hussain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aatiqahussain.dev',
    title: 'Aatiqa Hussain | Full Stack Developer',
    description: 'Passionate MERN Stack Developer skilled in building full-stack web applications.',
    siteName: 'Aatiqa Hussain Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aatiqa Hussain - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aatiqa Hussain | Full Stack Developer',
    description: 'Passionate MERN Stack Developer skilled in building full-stack web applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <PageWrapper>
            <main>{children}</main>
          </PageWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
