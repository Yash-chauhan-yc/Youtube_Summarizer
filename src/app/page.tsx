import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HomePage } from "./_components/HomePage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Button>Hello</Button>
    </div>
  );
}
