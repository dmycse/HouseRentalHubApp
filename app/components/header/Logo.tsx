import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Logo() {

  // let router = useRouter();


  return (
    <Link href="/" className="flex items-center gap-1">
      <Image 
        src="/images/logo.png"
        alt="logo"
        width={25}
        height={25}
      />
      <span className="hidden md:inline font-bold text-2xl text-primary">HouseRentalHub</span>
    </Link>
  )
}
