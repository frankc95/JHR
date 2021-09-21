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
        flexDirection: "column",
      }}
    >
      <h1>404</h1>
      <h2>Unfortunately, this page doesn't exist...</h2>
      <br />
      <Link href="/">
        <a style={{ zIndex: "2" }}>Go back</a>
      </Link>
    </div>
  );
};

export default faq;
