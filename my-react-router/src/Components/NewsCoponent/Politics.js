import React from "react";

export default function Politics({ Title }) {
  return (
    <>
      <div className="NewsTitleContainer">
        <h1>
          <span>{Title}</span> news on NewsFeeder
        </h1>
      </div>
    </>
  );
}
