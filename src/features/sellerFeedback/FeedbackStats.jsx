import styled from "styled-components";
import {
  HiOutlineExclamationTriangle,
  HiOutlineShieldExclamation,
  HiOutlineTruck,
  HiOutlineArchiveBoxXMark,
} from "react-icons/hi2";
import { categoryCount, totalOneStar } from "./feedbackData";

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
  align-items: center;
  gap: 1rem;
`;

function FeedbackStats() {
  const fakeCount =
    (categoryCount["fake-product"] || 0) + (categoryCount["tampered-box"] || 0);
  const deliveryCount =
    (categoryCount["wrong-item"] || 0) + (categoryCount["late-delivery"] || 0);
  const damagedCount =
    (categoryCount["damaged"] || 0) +
    (categoryCount["poor-packaging"] || 0) +
    (categoryCount["missing-accessories"] || 0);
  const refundCount = categoryCount["return-refused"] || 0;

  return (
    <>
      <Warning>
        <HiOutlineExclamationTriangle style={{ width: "2rem", height: "2rem", flexShrink: 0 }} />
        HIGH RISK seller — {fakeCount} out of {totalOneStar} one-star reviews report fake or tampered products. Not recommended for high-value purchases.
      </Warning>

      <StatsGrid>
        <Card>
          <IconBox $color="red">
            <HiOutlineShieldExclamation />
          </IconBox>
          <CardTitle>Fake / Tampered</CardTitle>
          <CardValue>{fakeCount}</CardValue>
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
          <CardTitle>Damaged / Missing</CardTitle>
          <CardValue>{damagedCount}</CardValue>
        </Card>

        <Card>
          <IconBox $color="red">
            <HiOutlineExclamationTriangle />
          </IconBox>
          <CardTitle>Return Refused</CardTitle>
          <CardValue>{refundCount}</CardValue>
        </Card>
      </StatsGrid>
    </>
  );
}

export default FeedbackStats;
