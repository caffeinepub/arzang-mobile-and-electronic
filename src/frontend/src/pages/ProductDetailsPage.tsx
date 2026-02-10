import { useParams } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from '@tanstack/react-router';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

export default function ProductDetailsPage() {
  const { productId } = useParams({ from: '/product/$productId' });

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shopping
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src="/assets/generated/product-placeholder.dim_800x800.png"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">In Stock</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Product #{productId}</h1>
              <p className="text-2xl font-bold text-primary">$999</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Product Description</h3>
                <p className="text-muted-foreground">
                  Product details will be available once the admin adds products to the catalog.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Specifications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Specifications will be displayed here</li>
                  <li>• Once products are added by admin</li>
                </ul>
              </CardContent>
            </Card>

            <Button size="lg" className="w-full" disabled>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
