import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Users } from 'lucide-react';

export default function AdminUsersPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container px-4 py-12">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>

        <h1 className="text-3xl font-bold mb-8">User Management</h1>

        <Card>
          <CardContent className="p-12 text-center">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No registered users yet</h2>
            <p className="text-muted-foreground">
              User information will appear here once customers create accounts.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
