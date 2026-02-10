import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, Users, MessageSquare, BarChart3, CreditCard } from 'lucide-react';

export default function AdminDashboardPage() {
  const adminSections = [
    {
      title: 'Products',
      description: 'Manage product catalog',
      icon: Package,
      href: '/admin/products',
    },
    {
      title: 'Orders',
      description: 'View and manage orders',
      icon: ShoppingCart,
      href: '/admin/orders',
    },
    {
      title: 'Users',
      description: 'View registered users',
      icon: Users,
      href: '/admin/users',
    },
    {
      title: 'Support Tickets',
      description: 'Manage customer support',
      icon: MessageSquare,
      href: '/admin/support',
    },
    {
      title: 'Sales Reports',
      description: 'View sales analytics',
      icon: BarChart3,
      href: '/admin/reports',
    },
    {
      title: 'Stripe Setup',
      description: 'Configure payment gateway',
      icon: CreditCard,
      href: '/admin/products',
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your store and view analytics</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminSections.map((section) => (
            <Link key={section.href} to={section.href}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
