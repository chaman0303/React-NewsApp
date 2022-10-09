import React from "react";

export default function National({ Title }) {
  return (
    <div className="NewsTitleContainer">
      <h1>
        <span>{Title}</span> news on NewsFeeder
      </h1>
    </div>
  );
}
