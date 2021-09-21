import React from "react";
import Link from "next/link";

const faq = () => {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Sorry, this page doesn't exist yet... <br />
      <Link href="/">
        <a style={{ zIndex: "2" }}>Go back</a>
      </Link>
    </div>
  );
};

export default faq;
