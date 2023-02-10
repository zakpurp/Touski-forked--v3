import { useState } from "react";
import { useRouter } from "next/router";
import Hero from "../components/Hero";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Hero />
    </div>
  );
}
