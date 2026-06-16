import styled from "styled-components";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import FeedbackStats from "../features/sellerFeedback/FeedbackStats";
import FeedbackTable from "../features/sellerFeedback/FeedbackTable";

const SellerInfo = styled.div`
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

function SellerFeedback() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Seller Feedback Analysis</Heading>
      </Row>

      <SellerInfo>
        <InfoItem>
          <InfoLabel>Seller ID</InfoLabel>
          <InfoValue>AQUYM0O99MFUT</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Platform</InfoLabel>
          <InfoValue>Amazon India</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Product (ASIN)</InfoLabel>
          <InfoValue>B0DSKNQW8F</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Filter Applied</InfoLabel>
          <InfoValue style={{ color: "var(--color-red-700)" }}>1-Star Reviews Only</InfoValue>
        </InfoItem>
      </SellerInfo>

      <FeedbackStats />

      <Heading as="h2" style={{ marginBottom: "2rem" }}>
        1-Star Reviews ({15} total)
      </Heading>

      <FeedbackTable />
    </>
  );
}

export default SellerFeedback;
