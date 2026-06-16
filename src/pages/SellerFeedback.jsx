import styled from "styled-components";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import FeedbackStats from "../features/sellerFeedback/FeedbackStats";
import FeedbackTable from "../features/sellerFeedback/FeedbackTable";
import { sellerInfo, totalOneStar } from "../features/sellerFeedback/feedbackData";

const SellerInfoBar = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  padding: 1.6rem 2.4rem;
  margin-bottom: 2.4rem;
  display: flex;
  gap: 3.2rem;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const InfoLabel = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const InfoValue = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-grey-800);
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-700);
  margin-bottom: 2rem;
`;

function SellerFeedback() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Seller Feedback Analysis</Heading>
      </Row>

      <SellerInfoBar>
        <InfoItem>
          <InfoLabel>Seller Name</InfoLabel>
          <InfoValue>{sellerInfo.name}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Legal Entity</InfoLabel>
          <InfoValue>{sellerInfo.legalName}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Seller ID</InfoLabel>
          <InfoValue style={{ fontSize: "1.3rem", fontFamily: "monospace" }}>{sellerInfo.sellerId}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Location</InfoLabel>
          <InfoValue>{sellerInfo.location}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Active Since</InfoLabel>
          <InfoValue>{sellerInfo.activeSince}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Total Reviews</InfoLabel>
          <InfoValue>{sellerInfo.totalFeedback}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Filter Applied</InfoLabel>
          <InfoValue style={{ color: "var(--color-red-700)" }}>1-Star Only</InfoValue>
        </InfoItem>
      </SellerInfoBar>

      <FeedbackStats />

      <SectionHeading>
        1-Star Reviews — {totalOneStar} sampled complaints (researched across 9 sources)
      </SectionHeading>

      <FeedbackTable />
    </>
  );
}

export default SellerFeedback;
