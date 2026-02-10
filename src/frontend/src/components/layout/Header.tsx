import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../../hooks/useAuth';
import { useAdmin } from '../../hooks/useAdmin';
import LoginButton from '../auth/LoginButton';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, ShoppingCart, User, Package, Shield, Home, Grid3x3, Phone } from 'lucide-react';

export default function Header() {
  const { isAuthenticated } = useAuth();
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-6">
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => {
                    navigate({ to: '/' });
                    closeMobileMenu();
                  }}
                >
                  <Home className="h-4 w-4" />
                  Home
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => {
                    navigate({ to: '/category/$categoryId', params: { categoryId: 'mobiles' } });
                    closeMobileMenu();
                  }}
                >
                  <Grid3x3 className="h-4 w-4" />
                  Mobile Phones
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => {
                    navigate({ to: '/category/$categoryId', params: { categoryId: 'electronics' } });
                    closeMobileMenu();
                  }}
                >
                  <Grid3x3 className="h-4 w-4" />
                  Electronics
                </Button>
                {isAuthenticated && (
                  <>
                    <Button
                      variant="ghost"
                      className="justify-start gap-2"
                      onClick={() => {
                        navigate({ to: '/orders' });
                        closeMobileMenu();
                      }}
                    >
                      <Package className="h-4 w-4" />
                      My Orders
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start gap-2"
                      onClick={() => {
                        navigate({ to: '/account' });
                        closeMobileMenu();
                      }}
                    >
                      <User className="h-4 w-4" />
                      Account
                    </Button>
                  </>
                )}
                {isAdmin && (
                  <Button
                    variant="ghost"
                    className="justify-start gap-2"
                    onClick={() => {
                      navigate({ to: '/admin' });
                      closeMobileMenu();
                    }}
                  >
                    <Shield className="h-4 w-4" />
                    Admin
                  </Button>
                )}
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => {
                    navigate({ to: '/about' });
                    closeMobileMenu();
                  }}
                >
                  <Phone className="h-4 w-4" />
                  Contact
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/generated/app-logo.dim_1024x1024.png"
              alt="ArZang Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-bold text-lg hidden sm:inline-block">
              ArZang Mobile & Electronic
            </span>
            <span className="font-bold text-lg sm:hidden">ArZang</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/category/$categoryId" params={{ categoryId: 'mobiles' }}>Mobiles</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/category/$categoryId" params={{ categoryId: 'electronics' }}>Electronics</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate({ to: '/cart' })}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate({ to: '/account' })}>
                  <User className="mr-2 h-4 w-4" />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate({ to: '/orders' })}>
                  <Package className="mr-2 h-4 w-4" />
                  My Orders
                </DropdownMenuItem>
                {isAdmin && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate({ to: '/admin' })}>
                      <Shield className="mr-2 h-4 w-4" />
                      Admin Dashboard
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <div className="w-full">
                    <LoginButton />
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
}
