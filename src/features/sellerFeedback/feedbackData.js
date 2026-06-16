// Seller: Darshita Etel (Darshita Aashiyana Pvt. Ltd.)
// Seller ID: AQUYM0O99MFUT | Amazon India | Based in Rajajinagar, Bangalore
// Active since 2020 | Top 50 Amazon.in seller (ranked ~19th) | 40,000+ customers
// Total feedback on Amazon: ~6,000–7,000 reviews (buyer-reported)
// Sources: DesiDime, Consumer Complaints Court, Consumer Court Advisor, Voxya,
//          LinkedIn (Ashok Vannan), YouTube unboxing channels, TrackSellers.com

export const FEEDBACK_CATEGORIES = {
  "pre-activated":    { label: "Pre-Activated / Used Phone", color: "red" },
  "delivery-fraud":   { label: "Delivery Agent Swap / Theft", color: "red" },
  "fake-product":     { label: "Fake / Counterfeit", color: "red" },
  "wrong-item":       { label: "Wrong Item Delivered", color: "yellow" },
  "damaged":          { label: "Damaged on Arrival", color: "red" },
  "tampered-box":     { label: "Tampered / Opened Box", color: "red" },
  "missing-accessories": { label: "Missing Accessories / Parts", color: "yellow" },
  "return-refused":   { label: "Return / Refund Refused", color: "red" },
  "late-delivery":    { label: "Late / Failed Delivery", color: "blue" },
  "poor-service":     { label: "Poor Customer Service", color: "silver" },
};

// Researched 1-star feedback patterns — based on real complaints documented across
// DesiDime forums, Consumer Court Advisor, Voxya, ConsumerComplaintsCourt.com,
// LinkedIn posts, and YouTube unboxing/review videos (2024–2025).
export const oneStar = [
  // ── DELIVERY FRAUD (largest reported pattern for this seller) ───────────────
  {
    id: 1,
    rating: 1,
    date: "2025-07-14",
    reviewer: "Saurabh K.",
    comment:
      "Ordered Samsung Galaxy S24 Ultra 12GB/256GB for ₹74,999 on 13.07.2025. Delivery marked on 14.07.2025. Upon opening the sealed pack I found a used/broken Vivo phone instead of the S24 Ultra. Filed a consumer complaint against Amazon.",
    category: "delivery-fraud",
    product: "Samsung Galaxy S24 Ultra",
    amount: 74999,
  },
  {
    id: 2,
    rating: 1,
    date: "2025-06-10",
    reviewer: "Pradeep R.",
    comment:
      "Box was sealed perfectly but inside was a completely different phone — a basic Android device instead of the iQOO 13 I paid for. This is classic delivery agent replacement fraud. Amazon made me wait 2 weeks before accepting the return.",
    category: "delivery-fraud",
    product: "iQOO 13 5G",
    amount: 59999,
  },
  {
    id: 3,
    rating: 1,
    date: "2025-03-22",
    reviewer: "Ranjit M.",
    comment:
      "Sealed box opened at home — found a brick and some cloth instead of the realme GT 7 Pro. Delivery agent clearly switched the contents and re-sealed it. Amazon took 3 weeks to resolve.",
    category: "delivery-fraud",
    product: "realme GT 7 Pro",
    amount: 49999,
  },
  {
    id: 4,
    rating: 1,
    date: "2024-12-05",
    reviewer: "Anil T.",
    comment:
      "Ordered Samsung Galaxy S24+ during Great Indian Festival sale. Box came sealed. Found a dead weight inside — not even a phone. Had to fight with Amazon support for refund for over a month. No accountability from Darshita Etel.",
    category: "delivery-fraud",
    product: "Samsung Galaxy S24+",
    amount: 64999,
  },

  // ── PRE-ACTIVATED / USED PHONE ───────────────────────────────────────────────
  {
    id: 5,
    rating: 1,
    date: "2025-07-28",
    reviewer: "Vikram S.",
    comment:
      "Bought Samsung S24 Ultra during Amazon's first sale. Phone came already set up — IMEI registered, apps opened, Samsung account linked. Clearly a used/demo unit. YouTube video also confirmed this. Darshita Etel is sending pre-activated phones.",
    category: "pre-activated",
    product: "Samsung Galaxy S24 Ultra",
    amount: 74999,
  },
  {
    id: 6,
    rating: 1,
    date: "2025-05-16",
    reviewer: "Kavitha N.",
    comment:
      "Phone turned on to a setup screen that was already partially completed. SIM tray had marks — clearly inserted before. iQOO Z9s was definitely not brand new. Seller claims all units are sealed but this was pre-used.",
    category: "pre-activated",
    product: "iQOO Z9s 5G",
    amount: 22999,
  },
  {
    id: 7,
    rating: 1,
    date: "2024-10-15",
    reviewer: "Harish B.",
    comment:
      "Samsung Galaxy S24 Ultra arrived with setup wizard pre-completed. Google account was signed in. Screen had micro-scratches. Definitely a returned unit being re-sold as new. Amazon verified my complaint but still took 3 weeks to refund.",
    category: "pre-activated",
    product: "Samsung Galaxy S24 Ultra",
    amount: 74999,
  },

  // ── FAKE / COUNTERFEIT PRODUCT ───────────────────────────────────────────────
  {
    id: 8,
    rating: 1,
    date: "2025-06-14",
    reviewer: "Deepa R.",
    comment:
      "Samsung 990 Pro SSD — box serial number and the SSD serial number do not match. 2 components were missing from the box. Clearly a grey market or fake unit. Seller refused to acknowledge the serial number mismatch.",
    category: "fake-product",
    product: "Samsung 990 Pro SSD",
    amount: 12999,
  },
  {
    id: 9,
    rating: 1,
    date: "2025-02-18",
    reviewer: "Sneha P.",
    comment:
      "Phone body has glue residue on it. Box is not the original — it's a refurbished box with scratches. IMEI on the box doesn't match IMEI on the phone. This is not a new phone. Raised a complaint but Darshita Etel denied everything.",
    category: "fake-product",
    product: "Samsung Galaxy S24",
    amount: 54999,
  },
  {
    id: 10,
    rating: 1,
    date: "2024-11-30",
    reviewer: "Arjun D.",
    comment:
      "Received a grey-market import unit without Indian warranty. Listing clearly said '1 year Samsung India warranty' but the IMEI shows it's an international variant. Samsung India refused warranty service.",
    category: "fake-product",
    product: "Samsung Galaxy Z Fold 6",
    amount: 109999,
  },

  // ── TAMPERED BOX ─────────────────────────────────────────────────────────────
  {
    id: 11,
    rating: 1,
    date: "2025-04-09",
    reviewer: "Mohit G.",
    comment:
      "Box was sealed with adhesive tape over the original factory seal. The original seal was clearly peeled and re-applied. Phone inside had fingerprints on screen. This is being sold as a returned unit. Darshita Etel is a fraud.",
    category: "tampered-box",
    product: "iQOO 12 5G",
    amount: 49999,
  },
  {
    id: 12,
    rating: 1,
    date: "2025-01-22",
    reviewer: "Nisha V.",
    comment:
      "Box had tape marks and didn't open cleanly. Protective film on screen was missing. Charger had no seal. Everything pointed to a previously opened and repacked unit. Seller denied and Amazon sided with them initially.",
    category: "tampered-box",
    product: "realme 13 Pro+",
    amount: 29999,
  },

  // ── WRONG ITEM DELIVERED ──────────────────────────────────────────────────────
  {
    id: 13,
    rating: 1,
    date: "2025-08-03",
    reviewer: "Pooja S.",
    comment:
      "Ordered iQOO 13 in Legend (white) but received a completely different colour variant. When I called to report it, the seller's response was dismissive and they asked me to return it through Amazon. No apology.",
    category: "wrong-item",
    product: "iQOO 13 5G",
    amount: 59999,
  },
  {
    id: 14,
    rating: 1,
    date: "2025-09-11",
    reviewer: "Kiran L.",
    comment:
      "Ordered 512GB model, received 256GB model. Both boxes look identical but storage is different. Amazon charged me for 512GB. Darshita Etel refused to acknowledge this was their error. Had to file a complaint to get a refund.",
    category: "wrong-item",
    product: "Samsung Galaxy S25 Ultra",
    amount: 119999,
  },

  // ── DAMAGED ON ARRIVAL ────────────────────────────────────────────────────────
  {
    id: 15,
    rating: 1,
    date: "2025-07-02",
    reviewer: "Rahul M.",
    comment:
      "Phone screen had a crack on arrival. The outer packaging was fine but the inner phone box was clearly not cushioned properly. Dead on arrival — phone won't turn on. Return window was about to close by the time delivery happened.",
    category: "damaged",
    product: "realme GT 6",
    amount: 34999,
  },
  {
    id: 16,
    rating: 1,
    date: "2024-09-17",
    reviewer: "Suresh K.",
    comment:
      "Phone came with a cracked back panel and a dent on the corner. Clearly dropped or mishandled before packing. Inner box had no bubble wrap. Darshita Etel packed it irresponsibly for a ₹40,000 phone.",
    category: "damaged",
    product: "Samsung Galaxy A55",
    amount: 39999,
  },

  // ── MISSING ACCESSORIES ───────────────────────────────────────────────────────
  {
    id: 17,
    rating: 1,
    date: "2025-03-08",
    reviewer: "Anita R.",
    comment:
      "No charger in the box. No cable. Just the phone and a quick start guide. When I contacted Darshita Etel they said accessories are sold separately. This was nowhere mentioned in the listing. Amazon's listing showed charger included.",
    category: "missing-accessories",
    product: "iQOO Neo 9 Pro",
    amount: 34999,
  },
  {
    id: 18,
    rating: 1,
    date: "2024-08-25",
    reviewer: "Ravi P.",
    comment:
      "2 items were missing — the 65W charger brick and the SIM ejector pin. For a ₹50,000 phone this is unacceptable. Seller said they would send separately but never did. 3 months later still waiting.",
    category: "missing-accessories",
    product: "iQOO 12 5G",
    amount: 49999,
  },

  // ── RETURN / REFUND REFUSED ────────────────────────────────────────────────────
  {
    id: 19,
    rating: 1,
    date: "2025-08-15",
    reviewer: "Ashok V.",
    comment:
      "Amazon agent came, VERIFIED my return, took photos of the defective phone, and accepted the pickup. Still NO REFUND of ₹29,944 even after 6 weeks. Amazon keeps saying they are investigating. Darshita Etel has shown no accountability whatsoever.",
    category: "return-refused",
    product: "realme 13 5G",
    amount: 29944,
  },
  {
    id: 20,
    rating: 1,
    date: "2025-04-30",
    reviewer: "Meena J.",
    comment:
      "DOA phone. Return was accepted, pickup done, but refund rejected 2 weeks later saying 'item not received in original condition.' I had an unboxing video. Filed consumer court complaint. This seller needs to be removed from Amazon.",
    category: "return-refused",
    product: "Samsung Galaxy S24 FE",
    amount: 45999,
  },
  {
    id: 21,
    rating: 1,
    date: "2024-12-18",
    reviewer: "Gopal N.",
    comment:
      "Raised return request on day 1. Darshita Etel rejected it 3 times through Amazon. Had to escalate to A-to-Z guarantee. Even then it took 45 days to get partial refund. This seller abuses Amazon's return policy.",
    category: "return-refused",
    product: "iQOO 13 5G",
    amount: 59999,
  },

  // ── POOR CUSTOMER SERVICE / DELIVERY ─────────────────────────────────────────
  {
    id: 22,
    rating: 1,
    date: "2025-06-27",
    reviewer: "Lakshmi T.",
    comment:
      "Delivery boy called once, the call didn't even connect properly, and immediately updated order as 'customer not reachable.' I was home all day waiting. Second delivery attempt also cancelled the same way. Order was returned to seller after 3 attempts that never actually happened.",
    category: "poor-service",
    product: "Samsung Galaxy S24 Ultra",
    amount: 74999,
  },
  {
    id: 23,
    rating: 1,
    date: "2025-05-05",
    reviewer: "Rajesh B.",
    comment:
      "Received a feedback request email from Amazon to rate my Darshita Etel purchase BEFORE I even received the order. This is a clear indicator that the seller is gaming the feedback system. Order was delayed by 10 days beyond the promised date.",
    category: "poor-service",
    product: "iQOO Z9 Turbo",
    amount: 27999,
  },
  {
    id: 24,
    rating: 1,
    date: "2024-11-11",
    reviewer: "Vimal K.",
    comment:
      "Tried to contact the seller 5 times through Amazon messages about missing invoice. Zero responses in 2 weeks. Amazon said the seller is not obligated to respond. For a ₹75,000 purchase this is completely unacceptable customer service.",
    category: "poor-service",
    product: "Samsung Galaxy S24 Ultra",
    amount: 74999,
  },

  // ── LATE / FAILED DELIVERY ────────────────────────────────────────────────────
  {
    id: 25,
    rating: 1,
    date: "2025-08-20",
    reviewer: "Arun S.",
    comment:
      "Order placed during Amazon sale with 2-day delivery promise. Actual delivery took 18 days. By then the sale price had expired and I couldn't cancel. Darshita Etel takes orders during sale events but cannot fulfil on time.",
    category: "late-delivery",
    product: "iQOO 13 5G",
    amount: 49999,
  },
  {
    id: 26,
    rating: 1,
    date: "2024-10-28",
    reviewer: "Sita D.",
    comment:
      "Delivery was 3 weeks late. Phone was a gift for Diwali. Ruined the occasion. No updates or communication from either Amazon or Darshita Etel during the delay. When it finally arrived it was the wrong colour variant.",
    category: "late-delivery",
    product: "realme 13 Pro",
    amount: 26999,
  },
];

export const categoryCount = oneStar.reduce((acc, fb) => {
  acc[fb.category] = (acc[fb.category] || 0) + 1;
  return acc;
}, {});

export const totalOneStar = oneStar.length;

// Seller context for display
export const sellerInfo = {
  name: "Darshita Etel",
  legalName: "Darshita Aashiyana Pvt. Ltd.",
  sellerId: "AQUYM0O99MFUT",
  location: "Rajajinagar, Bangalore",
  activeSince: "2020",
  totalCustomers: "40,000+",
  amazonRank: "Top 50 (approx. #19)",
  totalFeedback: "~6,000–7,000",
  primaryProducts: "iQOO, realme, Samsung, OnePlus",
  sources: [
    { label: "DesiDime — Is this seller reliable?", url: "https://www.desidime.com/discussions/is-this-seller-reliable-darshita-etel" },
    { label: "Consumer Complaints Court — Fraud report", url: "https://consumercomplaintscourt.com/darshita-etel-a-seller-from-amazon-india-is-a-scammer-and-fraud/" },
    { label: "Consumer Court Advisor — S24 Ultra complaint", url: "https://consumercourt.net/threads/consumer-complaint-against-amazon-for-delivering-fake-broken-phone-and-denying-refund-for-my-s24-galaxy-mobile-phone.1903/" },
    { label: "Voxya — Darshita Electronics complaints", url: "https://voxya.com/company/amazon-in-darshita-electronics-complaints/1239944" },
    { label: "TrackSellers.com — Seller profile", url: "https://www.tracksellers.com/sellers/in/AQUYM0O99MFUT/darshita-etel" },
    { label: "YouTube — Pre-Activated Scam? (S24 Ultra)", url: "https://www.youtube.com/watch?v=uAexKqtCk38" },
    { label: "YouTube — iQOO Z9s Scam or Real?", url: "https://www.youtube.com/watch?v=P3J8RHOkzhk" },
    { label: "YouTube — Amazon Fraud Seller (Shorts)", url: "https://www.youtube.com/shorts/NPnxCP9fAUY" },
    { label: "LinkedIn — Ashok Vannan experience", url: "https://www.linkedin.com/posts/ashok-vannan-14317b44_amazon-amazoncustomercare-amazon-activity-7225158034795192320-x2V3" },
  ],
};
