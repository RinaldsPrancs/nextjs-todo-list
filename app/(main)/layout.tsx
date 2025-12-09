
import {ModeToggle} from "@/components/ui/ModeToggle";
import HeaderInfo from '../_components/HeaderInfo';
import { Suspense } from "react";
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      
      <header className="flex justify-end items-center p-4 gap-4 h-16">

            <ModeToggle/>

            <Suspense>
              <HeaderInfo />
            </Suspense>


          </header>
      <main>{children}</main>
    </div>
  );
}