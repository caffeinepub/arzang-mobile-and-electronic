import { useParams } from '@tanstack/react-router';
import { getCategoryById, getBrandsByCategory } from '../data/catalogTaxonomy';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { Package } from 'lucide-react';

export default function CategoryPage() {
  const { categoryId } = useParams({ from: '/category/$categoryId' });
  const category = getCategoryById(categoryId);
  const brands = getBrandsByCategory(categoryId);

  if (!category) {
    return (
      <div className="container px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Category Header */}
      <section className="bg-gradient-to-br from-primary/5 to-background border-b">
        <div className="container px-4 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg text-muted-foreground">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="container px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Brand</h2>
        {brands.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {brands.map((brand) => (
              <Link key={brand.id} to="/brand/$brandId" params={{ brandId: brand.id }}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold">{brand.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No brands available in this category yet.</p>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Products Section - Placeholder */}
      <section className="container px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">All Products</h2>
        <Card>
          <CardContent className="p-12 text-center">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Product listings will be available once the admin adds products to this category.
            </p>
            <p className="text-sm text-muted-foreground">
              Browse by brand above or check back soon!
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
