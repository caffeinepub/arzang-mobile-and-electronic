import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProfileSetupModal from '../profile/ProfileSetupModal';

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ProfileSetupModal />
    </div>
  );
}
