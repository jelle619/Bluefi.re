import './globals.css';

export const metadata = {
    title: "Bluefi.re",
    description: "Cave of a dragon called Bluefire, showing what he is up to.",
  };

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }