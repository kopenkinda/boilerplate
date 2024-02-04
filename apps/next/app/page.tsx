'use client';
import { Button } from '@repo/ui/button';

const RootPage = () => {
  return (
    <div className="mx-auto mt-4 grid h-32 w-1/2 grid-rows-2 place-items-center gap-2 bg-glow-conic">
      <h1 className="text-3xl font-bold text-white">Boilerplate</h1>
      <Button onClick={() => alert('Hello world!')}>Hi</Button>
    </div>
  );
};

export default RootPage;
