import './globals.css'; // Update the path to your actual CSS file

export const metadata = {
  title: 'Campaign Tracker',
  description: 'Track campaigns and performance metrics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {/* Add a header, footer, or global components if needed */}
          {children}
        </div>
      </body>
    </html>
  );
}

