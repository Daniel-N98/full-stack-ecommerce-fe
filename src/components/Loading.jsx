import { useState } from "react";

export default function Loading({ loadState }) {
  return (
    <h2 className="text-center">
      {loadState.isLoading ? "Loading..." : "Not found"}
    </h2>
  );
}
