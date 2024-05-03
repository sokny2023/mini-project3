
"use client";

import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className='h-screen flex w-full justify-center items-center'>
        <Spinner size='lg'/>
    </div>
  );
}
