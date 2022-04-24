import { MenuIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import logo from "../public/logo.png";

export default function Navbar() {
  const [open, setopen] = useState(false);
  const router = useRouter();
  return (
    <div className="sticky top-0 z-10 w-full h-16 bg-white shadow-selectShadow">
      <nav className="relative w-full h-full">
        <div className="flex items-center justify-between lg:grid w-full h-full lg:grid-cols-[200px,1fr,200px] place-content-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Link href="/">
            <a>
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
            </a>
          </Link>
          <div className="items-center hidden mx-auto text-sm lg:flex space-x-7 text-slate-700">
            <button
              onClick={() => {
                if (router.asPath !== "/") {
                  router.push("/").then(() => {
                    window.scrollTo(
                      0,
                      (document.getElementById("haberler")
                        ?.offsetTop as number) - 40
                    );
                  });
                } else {
                  window.scrollTo(
                    0,
                    (document.getElementById("haberler")?.offsetTop as number) -
                      40
                  );
                }
              }}
            >
              Haberler
            </button>
            <button
              onClick={() => {
                if (router.asPath !== "/") {
                  router.push("/").then(() => {
                    window.scrollTo(
                      0,
                      (document.getElementById("sponsorlar")
                        ?.offsetTop as number) - 40
                    );
                  });
                } else {
                  window.scrollTo(
                    0,
                    (document.getElementById("sponsorlar")
                      ?.offsetTop as number) - 40
                  );
                }
              }}
            >
              Destekçilerimiz
            </button>
            <button
              onClick={() => {
                if (router.asPath !== "/") {
                  router.push("/").then(() => {
                    window.scrollTo(
                      0,
                      (document.getElementById("etkinlikler")
                        ?.offsetTop as number) - 40
                    );
                  });
                } else {
                  window.scrollTo(
                    0,
                    (document.getElementById("etkinlikler")
                      ?.offsetTop as number) - 40
                  );
                }
              }}
            >
              Etkinlikler
            </button>
            <button
              onClick={() => {
                if (router.asPath !== "/") {
                  router.push("/").then(() => {
                    window.scrollTo(
                      0,
                      (document.getElementById("juri")?.offsetTop as number) -
                        40
                    );
                  });
                } else {
                  window.scrollTo(
                    0,
                    (document.getElementById("juri")?.offsetTop as number) - 40
                  );
                }
              }}
            >
              Jüri Üyeleri
            </button>
            <button
              onClick={() => {
                if (router.asPath !== "/") {
                  router.push("/").then(() => {
                    window.scrollTo(
                      0,
                      (document.getElementById("iletisim")
                        ?.offsetTop as number) - 40
                    );
                  });
                } else {
                  window.scrollTo(
                    0,
                    (document.getElementById("iletisim")?.offsetTop as number) -
                      40
                  );
                }
              }}
            >
              İletişim
            </button>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => router.push("/dereceye-giren-filmler")}
              className="items-center justify-center hidden px-3 py-2 ml-auto text-sm text-white bg-indigo-500 rounded-md sm:flex"
            >
              Dereceye Giren Filmler
            </button>
            <button
              onClick={() => {
                setopen(!open);
              }}
              className="px-2 py-2 ml-2 text-white bg-indigo-500 rounded-md lg:hidden"
            >
              <MenuIcon className="w-5 h-5 " />
            </button>
          </div>
        </div>
        {open && (
          <div className="absolute z-20 flex flex-col w-full text-sm bg-white border-t divide-y shadow-lg lg:hidden text-slate-700">
            <button
              onClick={() => {
                if (router.asPath !== "/") {
                  router.push("/").then(() => {
                    window.scrollTo(
                      0,
                      (document.getElementById("haberler")
                        ?.offsetTop as number) - 40
                    );
                  });
                } else {
                  window.scrollTo(
                    0,
                    (document.getElementById("haberler")?.offsetTop as number) -
                      40
                  );
                }
                setopen(false);
              }}
              className="px-4 py-2 font-medium text-left"
            >
              Haberler
            </button>
            <button
              onClick={() => {
                if (router.asPath !== "/") {
                  router.push("/").then(() => {
                    window.scrollTo(
                      0,
                      (document.getElementById("sponsorlar")
                        ?.offsetTop as number) - 40
                    );
                  });
                } else {
                  window.scrollTo(
                    0,
                    (document.getElementById("sponsorlar")
                      ?.offsetTop as number) - 40
                  );
                }
                setopen(false);
              }}
              className="px-4 py-2 font-medium text-left"
            >
              Destekçilerimiz
            </button>
            <button
              onClick={() => {
                if (router.asPath !== "/") {
                  router.push("/").then(() => {
                    window.scrollTo(
                      0,
                      (document.getElementById("etkinlikler")
                        ?.offsetTop as number) - 40
                    );
                  });
                } else {
                  window.scrollTo(
                    0,
                    (document.getElementById("etkinlikler")
                      ?.offsetTop as number) - 40
                  );
                }
                setopen(false);
              }}
              className="px-4 py-2 font-medium text-left"
            >
              Etkinlikler
            </button>
            <button
              onClick={() => {
                if (router.asPath !== "/") {
                  router.push("/").then(() => {
                    window.scrollTo(
                      0,
                      (document.getElementById("juri")?.offsetTop as number) -
                        40
                    );
                  });
                } else {
                  window.scrollTo(
                    0,
                    (document.getElementById("juri")?.offsetTop as number) - 40
                  );
                }
                setopen(false);
              }}
              className="px-4 py-2 font-medium text-left"
            >
              Jüri Üyeleri
            </button>
            <button
              onClick={() => {
                if (router.asPath !== "/") {
                  router.push("/").then(() => {
                    window.scrollTo(
                      0,
                      (document.getElementById("iletisim")
                        ?.offsetTop as number) - 40
                    );
                  });
                } else {
                  window.scrollTo(
                    0,
                    (document.getElementById("iletisim")?.offsetTop as number) -
                      40
                  );
                }
                setopen(false);
              }}
              className="px-4 py-2 font-medium text-left"
            >
              İletişim
            </button>
            <button
              onClick={() => router.push("/dereceye-giren-filmler")}
              className="flex items-center justify-center w-full px-3 py-3 text-sm text-white bg-indigo-500 sm:hidden"
            >
              Dereceye Giren Filmler
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
