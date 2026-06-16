import styled from "styled-components";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import { FEEDBACK_CATEGORIES } from "./feedbackData";
import { HiOutlineStar } from "react-icons/hi2";

const ReviewText = styled.p`
  font-size: 1.3rem;
  color: var(--color-grey-600);
  line-height: 1.5;
`;

const Reviewer = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--color-grey-700);
`;

const Product = styled.span`
  font-size: 1.3rem;
  color: var(--color-grey-500);
`;

const Stars = styled.div`
  display: flex;
  gap: 0.2rem;
  color: var(--color-red-700);
`;

function FeedbackRow({ feedback }) {
  const { rating, date, reviewer, comment, category, product } = feedback;
  const cat = FEEDBACK_CATEGORIES[category];

  return (
    <Table.Row>
      <div>
        <Stars>
          {Array.from({ length: rating }, (_, i) => (
            <HiOutlineStar key={i} style={{ width: "1.4rem", height: "1.4rem" }} />
          ))}
        </Stars>
        <Reviewer>{reviewer}</Reviewer>
        <br />
        <Product>{product}</Product>
      </div>

      <ReviewText>{comment}</ReviewText>

      <div>
        <Tag type={cat.color}>{cat.label}</Tag>
      </div>

      <div style={{ fontSize: "1.3rem", color: "var(--color-grey-500)" }}>
        {new Date(date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>
    </Table.Row>
  );
}

export default FeedbackRow;
