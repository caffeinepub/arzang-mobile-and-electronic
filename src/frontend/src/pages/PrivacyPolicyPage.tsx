import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container px-4 py-12 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Privacy Policy</CardTitle>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground">
                ArZang Mobile And Electronic ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online shopping platform.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">2. Information We Collect</h2>
              <p className="text-muted-foreground">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Account information (display name, authentication credentials via Internet Identity)</li>
                <li>Contact information (phone number, shipping address)</li>
                <li>Order and transaction history</li>
                <li>Communication preferences and support inquiries</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
              <p className="text-muted-foreground">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Provide customer support</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">4. Authentication & Security</h2>
              <p className="text-muted-foreground">
                We use Internet Identity for secure authentication. Your identity is managed through cryptographic principals, and we do not store traditional passwords. All data transmissions are encrypted using industry-standard protocols.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">5. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Payment processors to complete transactions</li>
                <li>Shipping partners to deliver your orders</li>
                <li>Service providers who assist in operating our platform</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">6. Your Rights</h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">7. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your information for as long as necessary to provide our services and comply with legal obligations. Order history and transaction records are retained for accounting and legal purposes.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground">
                <strong>Business Owner:</strong> Imad Ali Durrani<br />
                <strong>Contact Number:</strong> 0325-1565255
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
