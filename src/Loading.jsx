import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Loading() {
  return (
    <div className="flex grow mx-16 my-8 text-red-600 text-xl items-center justify-center">
      <AiOutlineLoading3Quarters  className="animate-spin" />
    <div className="">   Loading</div>
    </div>
  );
}