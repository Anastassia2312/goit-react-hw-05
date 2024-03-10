import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
  return (
    <Suspense fallback={<div>Loading sub component...</div>}>
      <Outlet />
    </Suspense>
  );
}
