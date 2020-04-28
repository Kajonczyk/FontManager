import React from "react";
import { StyledInput } from "./InputStyles";
import { QueryContext } from "../../Shared/QueryContext";
export const Input = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <QueryContext.Consumer>
        {(context) => (
          <StyledInput
            placeholder="Search..."
            onChange={(e) => context.setQuery(e.target.value)}
          />
        )}
      </QueryContext.Consumer>
    </div>
  );
};
