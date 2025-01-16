"use client";

import { Suspense } from "react";

const notfound = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>notfound</div>
    </Suspense>
  );
};
export default notfound;
