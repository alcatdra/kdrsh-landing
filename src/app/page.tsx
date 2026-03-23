import { HEADER } from "@/components/landing/HEADER";
import { HERO } from "@/components/landing/HERO";

export default function Home() {
  return (
    <>
      <HEADER />
      <main className="relative overflow-hidden">
        <HERO />
      </main>
    </>
  );
}
