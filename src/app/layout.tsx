import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PinPulse AI | Pinterest growth for creators',
  description: 'AI-powered pin generation, publishing workflow, credit wallet, and dashboard for Pinterest creators.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
