import Image from "next/image";
import photo from "@/android-chrome-512x512.png";
export default function Home() {
  return (
    <main className="container mx-auto">
      <Image src={photo} width="512" height="512" alt="Icon" />
    </main>
  );
}
