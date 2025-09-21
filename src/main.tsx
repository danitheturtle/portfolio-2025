import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Button } from "@/components/Button.tsx"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <div className="relative w-full text-base font-regular px-4 py-4 rounded-lg bg-gray-900 text-white flex">
      <div className=" mr-12">Test Alert</div>
    </div>
    <Button></Button>
  </StrictMode>
);
