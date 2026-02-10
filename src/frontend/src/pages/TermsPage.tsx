import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container px-4 py-12 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Terms & Conditions</CardTitle>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using ArZang Mobile And Electronic's online shopping platform, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">2. Products and Services</h2>
              <p className="text-muted-foreground">
                We offer mobile phones and electronic accessories for sale. All product descriptions, images, and specifications are provided for informational purposes and we strive to ensure accuracy. However, we do not warrant that product descriptions or other content is error-free.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">3. Pricing and Payment</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>All prices are listed in the local currency and are subject to change without notice</li>
                <li>We accept Cash on Delivery (COD) and online payment methods</li>
                <li>Payment must be completed before order fulfillment</li>
                <li>We reserve the right to refuse or cancel orders at our discretion</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">4. Orders and Delivery</h2>
              <p className="text-muted-foreground">
                <strong>Order Processing:</strong> Orders are processed within 1-2 business days after payment confirmation.
              </p>
              <p className="text-muted-foreground">
                <strong>Delivery:</strong> Delivery times vary based on location. We will provide tracking information once your order ships.
              </p>
              <p className="text-muted-foreground">
                <strong>Cash on Delivery:</strong> For COD orders, payment must be made in cash to the delivery person upon receipt of goods.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">5. Returns and Refunds</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Products can be returned within 7 days of delivery if unused and in original packaging</li>
                <li>Defective products will be replaced or refunded at our discretion</li>
                <li>Return shipping costs are the responsibility of the customer unless the product is defective</li>
                <li>Refunds will be processed within 7-14 business days after receiving the returned item</li>
              </ul>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">6. Warranty</h2>
              <p className="text-muted-foreground">
                All products come with manufacturer warranty as specified in the product description. Warranty claims must be made directly with the manufacturer or through our customer support.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">7. User Accounts</h2>
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality of your account credentials. We use Internet Identity for secure authentication. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, ArZang Mobile And Electronic shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or products.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">9. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms and Conditions are governed by and construed in accordance with the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts of Pakistan.
              </p>
            </section>

            <Separator className="my-6" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">10. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms and Conditions, please contact:
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
