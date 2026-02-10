# Specification

## Summary
**Goal:** Build a mobile-first multi-vendor eCommerce web app for mobile phones and electronics with Internet Identity auth, product browsing, cart/checkout (COD + Stripe), order tracking, admin management, support tickets, and required legal/brand pages.

**Planned changes:**
- Add Internet Identity (II) authentication with sign-in/sign-out UI; require login for purchasing and account/order pages; persist session in the frontend; backend exposes current user profile by caller Principal.
- Implement user profiles stored by Principal (display name, optional phone, optional shipping address, createdAt/updatedAt) with frontend view/edit screens.
- Create catalog models/APIs for categories, brands, products (vendor-associated), product image URLs, price, specs, stock, and active/inactive status; implement pagination and product detail fetch by id.
- Build mobile-first browsing UX: home, category and brand pages, product list/grid, and product detail page with image gallery, price, specs, and stock status; consistent blue/white theme and large product images.
- Implement authenticated user cart persisted in backend: add/remove items, quantity adjustments, and subtotal calculations.
- Implement checkout collecting shipping details (from profile or entered), validating stock, and creating orders with payment methods: Cash on Delivery and Stripe; mark orders paid only on successful Stripe payment.
- Implement order management: order item snapshot at purchase, status lifecycle (Pending/Confirmed/Shipped/Delivered/Cancelled), user order history and order detail tracking; enforce users can only access their own orders.
- Add admin dashboard protected by backend admin allowlist of Principals: CRUD products (including images/specs/price/category/brand/stock), update order status, view minimal users list, and basic sales reports (totals by day and by product; totals/orders/revenue/top products for date range).
- Implement search and filtering on listings (keyword, category, brand, price range) with URL query parameters and backend server-side filtering/pagination.
- Add customer support contact form (subject, message, optional order id) storing tickets in backend; admin ticket list with Open/Resolved status updates.
- Add Privacy Policy and Terms & Conditions pages with professionally structured English content, linked from persistent footer and from sign-in/checkout areas.
- Add app shell/brand identity: app name “ArZang Mobile And Electronic”, About/Contact page with business owner name and contact number, and mobile-optimized header/footer navigation (including Admin link only for admins).
- Enforce security/privacy baseline: authorization checks for all user/admin operations, no plaintext passwords, and do not embed any example admin credentials in code.

**User-visible outcome:** Users can sign in with Internet Identity, browse and search/filter products, view product details, add items to a persistent cart, checkout via COD or Stripe, and track orders; admins can manage products/orders/users, view sales reports, and resolve support tickets; legal pages and About/Contact info are available in English with a consistent blue/white mobile-first UI.
