import { useParams, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function OrderDetailsPage() {
  const { orderId } = useParams({ from: '/orders/$orderId' });

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container px-4 py-12 max-w-4xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/orders">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Link>
        </Button>

        <h1 className="text-3xl font-bold mb-8">Order #{orderId}</h1>

        <Card>
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center py-8">
              Order details will be available once you place an order.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
