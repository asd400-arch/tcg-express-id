import './globals.css';
import { AuthProvider } from './components/AuthContext';
import { ToastProvider } from './components/Toast';
import { UnreadMessagesProvider } from './components/UnreadMessagesContext';
import ServiceWorkerRegister from './components/ServiceWorkerRegister';
import ChatWidget from './components/help/ChatWidget';
import PushPromptBanner from './components/PushPromptBanner';

export const metadata = {
  title: 'TCG Express Indonesia | Platform Pengiriman B2B',
  description: 'Platform pengiriman B2B on-demand di Indonesia. Posting pekerjaan, dapatkan penawaran, lacak pengiriman secara real-time.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TCG Express ID',
  },
  openGraph: {
    title: 'TCG Express Indonesia - Pengiriman Peralatan Teknologi B2B',
    description: 'Platform pengiriman peralatan teknologi B2B terpercaya di Indonesia. Cepat, andal, bergaransi.',
    url: 'https://app.tcgexpress.id',
    siteName: 'TCG Express Indonesia',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCG Express Indonesia',
    description: 'Pengiriman peralatan teknologi B2B di Indonesia',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#3b82f6',
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/icons/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <AuthProvider>
          <ToastProvider>
            <UnreadMessagesProvider>
              {children}
              <ChatWidget />
              <PushPromptBanner />
            </UnreadMessagesProvider>
          </ToastProvider>
        </AuthProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
