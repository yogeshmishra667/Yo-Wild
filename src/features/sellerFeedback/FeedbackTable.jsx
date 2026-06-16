import { useState } from "react";
import styled from "styled-components";
import Table from "../../ui/Table";
import FeedbackRow from "./FeedbackRow";
import { FEEDBACK_CATEGORIES, oneStar } from "./feedbackData";

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const FilterBtn = styled.button`
  padding: 0.6rem 1.4rem;
  border-radius: 100px;
  border: 1px solid
    ${(p) => (p.$active ? "var(--color-brand-600)" : "var(--color-grey-300)")};
  background-color: ${(p) =>
    p.$active ? "var(--color-brand-600)" : "var(--color-grey-0)"};
  color: ${(p) => (p.$active ? "#fff" : "var(--color-grey-700)")};
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-brand-600);
    color: ${(p) => (p.$active ? "#fff" : "var(--color-brand-600)")};
  }
`;

function FeedbackTable() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? oneStar
      : oneStar.filter((f) => f.category === activeFilter);

  return (
    <div>
      <FilterBar>
        <FilterBtn
          $active={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
        >
          All ({oneStar.length})
        </FilterBtn>
        {Object.entries(FEEDBACK_CATEGORIES).map(([key, { label, color }]) => {
          const count = oneStar.filter((f) => f.category === key).length;
          if (!count) return null;
          return (
            <FilterBtn
              key={key}
              $active={activeFilter === key}
              onClick={() => setActiveFilter(key)}
            >
              {label} ({count})
            </FilterBtn>
          );
        })}
      </FilterBar>

      <Table columns="18rem 1fr 18rem 10rem">
        <Table.Header>
          <div>Reviewer</div>
          <div>Feedback</div>
          <div>Issue Type</div>
          <div>Date</div>
        </Table.Header>

        <Table.Body
          data={filtered}
          render={(feedback) => (
            <FeedbackRow key={feedback.id} feedback={feedback} />
          )}
        />
      </Table>
    </div>
  );
}

export default FeedbackTable;
