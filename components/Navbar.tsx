import Image from "next/image";
import logo from "../public/logo.png";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 w-full h-16 bg-white shadow-selectShadow">
      <nav className="w-full h-full">
        <div className="grid w-full h-full grid-cols-[200px,1fr,200px] place-content-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative w-20 h-10">
            <Image
              layout="fill"
              objectFit="contain"
              src={logo}
              quality={100}
              priority
              alt="Kocaeli Film Festivali"
            />
          </div>
          <div className="flex mx-auto text-sm space-x-7 text-slate-700">
            <button>Festival</button>
            <button>Haberler</button>
            <button>Sponsorlar</button>
            <button>Etkinlikler</button>
            <button>Jüri Üyeleri</button>
            <button>İletişim</button>
          </div>

          <button className="flex items-center justify-center px-3 py-2 text-sm text-white bg-indigo-500 rounded-md">
            Dereceye Giren Filmler
          </button>
        </div>
      </nav>
    </div>
  );
}
