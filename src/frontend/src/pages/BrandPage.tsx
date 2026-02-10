import { useParams } from '@tanstack/react-router';
import { getBrandById } from '../data/catalogTaxonomy';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { Package } from 'lucide-react';

export default function BrandPage() {
  const { brandId } = useParams({ from: '/brand/$brandId' });
  const brand = getBrandById(brandId);

  if (!brand) {
    return (
      <div className="container px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Brand Not Found</h1>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Brand Header */}
      <section className="bg-gradient-to-br from-primary/5 to-background border-b">
        <div className="container px-4 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{brand.name}</h1>
            <p className="text-lg text-muted-foreground">
              Browse all {brand.name} products
            </p>
          </div>
        </div>
      </section>

      {/* Products Section - Placeholder */}
      <section className="container px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        <Card>
          <CardContent className="p-12 text-center">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              No products available for {brand.name} yet.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Products will appear here once the admin adds them to the catalog.
            </p>
            <Button asChild>
              <Link to="/">Browse Other Categories</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
