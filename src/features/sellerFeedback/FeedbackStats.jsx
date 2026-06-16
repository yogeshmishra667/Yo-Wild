import styled from "styled-components";
import {
  HiOutlineExclamationTriangle,
  HiOutlineShieldExclamation,
  HiOutlineTruck,
  HiOutlineArchiveBoxXMark,
  HiOutlineArrowPath,
  HiOutlineLink,
} from "react-icons/hi2";
import { categoryCount, totalOneStar, sellerInfo } from "./feedbackData";

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
  margin-bottom: 3.2rem;
`;

const Card = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  padding: 1.6rem;
  display: grid;
  grid-template-columns: 5.6rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
`;

const IconBox = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-${(p) => p.$color}-100);

  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--color-${(p) => p.$color}-700);
  }
`;

const CardTitle = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const CardValue = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1;
`;

const Warning = styled.div`
  background-color: var(--color-red-100);
  border: 1px solid var(--color-red-700);
  border-radius: var(--border-radius-sm);
  padding: 1.2rem 1.6rem;
  font-size: 1.4rem;
  color: var(--color-red-700);
  font-weight: 500;
  margin-bottom: 2.4rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContextBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  padding: 1.6rem 2.4rem;
  margin-bottom: 2.4rem;
  font-size: 1.3rem;
  color: var(--color-grey-600);
  line-height: 1.7;
`;

const ContextTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-grey-700);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

const SourceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

const SourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.2rem;
  color: var(--color-brand-600);
  text-decoration: none;
  background-color: var(--color-brand-50);
  padding: 0.3rem 0.9rem;
  border-radius: 100px;
  border: 1px solid var(--color-brand-200);

  &:hover {
    background-color: var(--color-brand-100);
  }

  & svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

function FeedbackStats() {
  const fraudCount =
    (categoryCount["delivery-fraud"] || 0) +
    (categoryCount["fake-product"] || 0) +
    (categoryCount["tampered-box"] || 0) +
    (categoryCount["pre-activated"] || 0);
  const deliveryCount =
    (categoryCount["wrong-item"] || 0) + (categoryCount["late-delivery"] || 0);
  const physicalCount =
    (categoryCount["damaged"] || 0) + (categoryCount["missing-accessories"] || 0);
  const refundCount =
    (categoryCount["return-refused"] || 0) + (categoryCount["poor-service"] || 0);

  return (
    <>
      <Warning>
        <HiOutlineExclamationTriangle style={{ width: "2rem", height: "2rem", flexShrink: 0, marginTop: "0.1rem" }} />
        <div>
          <strong>HIGH RISK — Do NOT buy a high-value phone from this seller.</strong>
          <br />
          {fraudCount} of {totalOneStar} sampled 1-star reviews report outright fraud — delivery agent swapping, pre-activated phones, or counterfeit products. With ~6,000–7,000 total reviews, even a 4% negative rate equals 240–280 fraud/damage cases. Multiple consumer court filings and YouTube investigations confirm a systematic pattern.
        </div>
      </Warning>

      <StatsGrid>
        <Card>
          <IconBox $color="red">
            <HiOutlineShieldExclamation />
          </IconBox>
          <CardTitle>Fraud (Swap/Fake/Pre-used)</CardTitle>
          <CardValue>{fraudCount}</CardValue>
        </Card>

        <Card>
          <IconBox $color="yellow">
            <HiOutlineTruck />
          </IconBox>
          <CardTitle>Wrong / Late Delivery</CardTitle>
          <CardValue>{deliveryCount}</CardValue>
        </Card>

        <Card>
          <IconBox $color="silver">
            <HiOutlineArchiveBoxXMark />
          </IconBox>
          <CardTitle>Damaged / Missing Parts</CardTitle>
          <CardValue>{physicalCount}</CardValue>
        </Card>

        <Card>
          <IconBox $color="red">
            <HiOutlineArrowPath />
          </IconBox>
          <CardTitle>Return Refused / Bad Service</CardTitle>
          <CardValue>{refundCount}</CardValue>
        </Card>
      </StatsGrid>

      <ContextBox>
        <ContextTitle>Research Context — What is Darshita Etel?</ContextTitle>
        Darshita Etel ({sellerInfo.legalName}) is a Top 50 Amazon India seller (ranked ~{sellerInfo.amazonRank}) based in {sellerInfo.location}, active since {sellerInfo.activeSince}. They are the <strong>exclusive/primary authorized seller</strong> on Amazon India for iQOO, realme, and often Samsung flagship phones. With {sellerInfo.totalCustomers} customers and ~{sellerInfo.totalFeedback} reviews, the majority of buyers get genuine products. However, 1-star complaints reveal a consistent pattern of <strong>delivery agent fraud</strong> (sealed boxes tampered mid-route), <strong>pre-activated/used phones</strong> sent as new, and <strong>aggressive refund blocking</strong>. Several cases have reached consumer courts.
        <br /><br />
        <strong>Key insight:</strong> Most fraud appears to happen during <em>last-mile delivery</em> (Blue Dart / Amazon Logistics), not necessarily at dispatch — but the seller's refund refusal behavior is a separate, seller-specific problem.
        <SourceList>
          {sellerInfo.sources.map((s, i) => (
            <SourceLink key={i} href={s.url} target="_blank" rel="noopener noreferrer">
              <HiOutlineLink />
              {s.label}
            </SourceLink>
          ))}
        </SourceList>
      </ContextBox>
    </>
  );
}

export default FeedbackStats;
