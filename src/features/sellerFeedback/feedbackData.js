// Amazon seller AQUYM0O99MFUT — 1-star feedback sample data
// Categories derived from common complaint patterns for phone sellers on Amazon India

export const FEEDBACK_CATEGORIES = {
  "fake-product": { label: "Fake / Counterfeit", color: "red" },
  "wrong-item": { label: "Wrong Item Delivered", color: "yellow" },
  "damaged": { label: "Damaged on Arrival", color: "red" },
  "late-delivery": { label: "Late Delivery", color: "blue" },
  "missing-accessories": { label: "Missing Accessories", color: "yellow" },
  "return-refused": { label: "Return / Refund Refused", color: "red" },
  "poor-packaging": { label: "Poor Packaging", color: "silver" },
  "tampered-box": { label: "Tampered / Opened Box", color: "red" },
};

export const oneStar = [
  {
    id: 1,
    rating: 1,
    date: "2025-12-10",
    reviewer: "Rahul S.",
    comment:
      "Received a fake phone. IMEI doesn't match. Box was sealed but product inside is clearly a duplicate. Avoid this seller at all costs.",
    category: "fake-product",
    product: "Samsung Galaxy S24 Ultra",
  },
  {
    id: 2,
    rating: 1,
    date: "2025-11-28",
    reviewer: "Priya M.",
    comment:
      "Ordered iPhone 15 Pro Max 256GB in Natural Titanium but got a completely different model. Seller refused to acknowledge the mistake.",
    category: "wrong-item",
    product: "Apple iPhone 15 Pro Max",
  },
  {
    id: 3,
    rating: 1,
    date: "2025-11-15",
    reviewer: "Arun K.",
    comment:
      "Phone arrived with cracked screen. Packaging was very flimsy — just a plastic bag with no bubble wrap inside the box.",
    category: "damaged",
    product: "OnePlus 12",
  },
  {
    id: 4,
    rating: 1,
    date: "2025-10-30",
    reviewer: "Sneha T.",
    comment:
      "Delivery was 3 weeks late. I needed the phone urgently and got no updates from the seller despite multiple messages.",
    category: "late-delivery",
    product: "Google Pixel 9 Pro",
  },
  {
    id: 5,
    rating: 1,
    date: "2025-10-12",
    reviewer: "Vikram P.",
    comment:
      "No charger or USB cable in the box. When I contacted the seller they said accessories are not included, which was nowhere mentioned in the listing.",
    category: "missing-accessories",
    product: "Samsung Galaxy S24+",
  },
  {
    id: 6,
    rating: 1,
    date: "2025-09-25",
    reviewer: "Deepa R.",
    comment:
      "Raised a return request for dead-on-arrival phone. Seller keeps rejecting my return claim saying the product was working when shipped. Amazon had to intervene.",
    category: "return-refused",
    product: "Apple iPhone 16 Pro",
  },
  {
    id: 7,
    rating: 1,
    date: "2025-09-08",
    reviewer: "Mohit G.",
    comment:
      "Box was clearly opened and re-sealed with tape. Serial number sticker was peeled. Looks like a returned/refurbished unit sold as new.",
    category: "tampered-box",
    product: "Samsung Galaxy Z Fold 6",
  },
  {
    id: 8,
    rating: 1,
    date: "2025-08-20",
    reviewer: "Anita B.",
    comment:
      "Got a completely different brand phone (Redmi) instead of the iPhone I ordered. Total fraud. Filed a complaint with Amazon.",
    category: "wrong-item",
    product: "Apple iPhone 15",
  },
  {
    id: 9,
    rating: 1,
    date: "2025-08-05",
    reviewer: "Suresh L.",
    comment:
      "IMEI on box and phone don't match. Battery drains in 2 hours. Clearly a refurbished phone being sold as brand new.",
    category: "fake-product",
    product: "OnePlus 12R",
  },
  {
    id: 10,
    rating: 1,
    date: "2025-07-18",
    reviewer: "Kavitha N.",
    comment:
      "Phone came in a torn box with no protective film on screen. Both corners dented. Seller ignored my messages for a week.",
    category: "poor-packaging",
    product: "Google Pixel 9",
  },
  {
    id: 11,
    rating: 1,
    date: "2025-07-02",
    reviewer: "Rajan D.",
    comment:
      "Received grey market import without Indian warranty. Seller listing clearly said '1 year manufacturer warranty' which is not valid in India.",
    category: "fake-product",
    product: "Apple iPhone 16",
  },
  {
    id: 12,
    rating: 1,
    date: "2025-06-15",
    reviewer: "Pooja S.",
    comment:
      "Earphones missing from the box. Charger brick also missing. Only phone and USB cable were there. This was supposed to be a sealed box.",
    category: "missing-accessories",
    product: "Samsung Galaxy S24",
  },
  {
    id: 13,
    rating: 1,
    date: "2025-05-28",
    reviewer: "Arjun M.",
    comment:
      "Phone not turning on. DOA. Return window closed by the time it arrived due to the 3-week delay. Seller not cooperating.",
    category: "damaged",
    product: "Apple iPhone 15 Plus",
  },
  {
    id: 14,
    rating: 1,
    date: "2025-05-10",
    reviewer: "Nisha K.",
    comment:
      "Seller sealed the box with adhesive tape over the original seal. Clear sign of tampering. IMEI doesn't match manufacturer records.",
    category: "tampered-box",
    product: "Samsung Galaxy S25 Ultra",
  },
  {
    id: 15,
    rating: 1,
    date: "2025-04-22",
    reviewer: "Kiran V.",
    comment:
      "Refund denied three times. The phone stopped working after 10 days. Seller says screen damage is not covered, but it happened on its own.",
    category: "return-refused",
    product: "OnePlus 13",
  },
];

export const categoryCount = oneStar.reduce((acc, fb) => {
  acc[fb.category] = (acc[fb.category] || 0) + 1;
  return acc;
}, {});

export const totalOneStar = oneStar.length;
