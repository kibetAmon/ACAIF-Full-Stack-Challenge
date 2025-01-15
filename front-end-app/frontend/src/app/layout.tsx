import './globals.css';

export const metadata = {
  title: 'Campaign Tracker',
  description: 'Track campaigns and performance metrics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
