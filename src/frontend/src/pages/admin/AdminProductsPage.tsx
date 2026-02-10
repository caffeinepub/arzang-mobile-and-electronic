import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Package } from 'lucide-react';

export default function AdminProductsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container px-4 py-12">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Product Management</h1>
          <Button disabled>Add Product</Button>
        </div>

        <Card>
          <CardContent className="p-12 text-center">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No products yet</h2>
            <p className="text-muted-foreground mb-4">
              Product management functionality is being prepared.
            </p>
            <p className="text-sm text-muted-foreground">
              You'll be able to add, edit, and manage products here soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
