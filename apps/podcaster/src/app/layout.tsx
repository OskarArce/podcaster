import Link from 'next/link';
import './global.css';

export const metadata = {
  title: 'Welcome to podcaster',
  description: 'Created by Oskar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section>
          <div id="welcome">
            <Link href="/">
              <h1>Podcaster</h1>
            </Link>
          </div>

          {children}
        </section>
      </body>
    </html>
  );
}
