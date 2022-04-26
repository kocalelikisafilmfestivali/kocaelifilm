/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import {
  CalendarIcon,
  CloudUploadIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import BlogCard from "../components/BlogCard";
import JuriCard from "../components/JuriCard";
import Link from "next/link";
import { client } from "../apollo-client";
import { gql } from "@apollo/client";
const Home: NextPage<{ juries: any; posts: any; sponsors: any }> = ({
  juries,
  sponsors,
  posts,
}) => {
  const features = [
    {
      name: "Başvuru Formu",
      icon: CloudUploadIcon,
      href: "/basvuru-formu",
    },
    {
      name: "Şartname",
      icon: LockClosedIcon,
      href: "/katilim-sartnamesi",
    },
    {
      name: "Festival Programı",
      icon: CalendarIcon,
      href: "/festival-programi",
    },
  ];
  return (
    <div className="relative py-10 sm:py-20">
      <section className="box">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          T.C. Kültür ve Turizm Bakanlığı Katkılarıyla
        </h2>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Kocaeli Kısa Film Festivali
        </h1>
        <h3 className="mt-2 text-sm font-semibold tracking-wider text-indigo-600 uppercase">
          01-05 Ekim 2022
        </h3>
        <div className="relative mt-8 overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
              alt=""
            />
          </div>
          <div className="relative px-6 py-20 bg-gray-900 bg-opacity-75 sm:py-28 sm:px-12 lg:px-16">
            <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
              <h2
                id="comfort-heading"
                className="text-2xl font-bold text-white sm:text-3xl"
              >
                Festival Hakkında
              </h2>
              <p className="mt-3 text-lg text-white">
                Kültür ve Turizm Bakanlığı destekleriyle gerçekleşecek Kocaeli
                Kısa Film Festivali Türkiye’den seçkin sanatçıların katılacağı,
                Öykülü-Kurmaca kategorisindeki filmlerin yarışacağı bir festival
                olacaktır. Festivalde yönetmen, sinema oyuncuları, yapımcı ve
                sinema eleştirmenlerinin katılımıyla çeşitli atölye çalışmaları,
                sempozyum ve etkinlikler organizasyonda yer alacaktır.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Link key={i} href={feature.href}>
                <a>
                  <div className="flex items-center justify-center px-6 py-6 bg-white rounded-lg shadow-selectShadow">
                    <div className="flex items-center justify-center">
                      <span className="flex items-center justify-center p-3 mr-4 bg-indigo-500 rounded-md shadow-lg">
                        <feature.icon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </span>

                      <h3 className="text-lg font-semibold tracking-wide text-gray-900">
                        {feature.name}
                      </h3>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="juri" className="box">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Jüri Üyelerimiz</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 lg:gap-y-12">
            {juries.map((jury: any, i: number) => (
              <JuriCard person={jury} key={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="sponsorlar" className="box">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {sponsors.map((sponsor: any, i: number) => (
            <div
              key={i}
              className="relative flex justify-center col-span-1 px-8 py-4 overflow-hidden h-28 bg-gray-50"
            >
              {sponsor?.image?.url ? (
                <div
                  className={`relative ${
                    sponsor.title === "Sinema Genel Müdürlüğü"
                      ? "w-[75%] sm:w-[50%]"
                      : "w-full h-full"
                  }`}
                >
                  <img
                    className="object-contain w-full h-full filter drop-shadow"
                    src={`${process.env.NEXT_APP_API_IMAGE_URL}${sponsor.image.url}`}
                    alt={sponsor.title}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full text-xs font-semibold sm:text-base">
                  {sponsor.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="etkinlikler" className="box">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Festival Kapsamındaki Etkinlikler
          </h2>

          {posts.filter((e: any) => e.type === "e").length > 0 ? (
            <ul
              role="list"
              className="space-y-12 lg:grid lg:grid-cols-4 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
            >
              {posts
                .filter((e: any) => e.type === "e")
                .map((post: any, i: number) => (
                  <li key={i}>
                    <div className="flex flex-col items-center">
                      <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full">
                        <img
                          className="object-cover w-full h-full"
                          src={`${process.env.NEXT_APP_API_IMAGE_URL}${post.image.url}`}
                          alt={post.title}
                        />
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <a>
                          <div className="space-y-2">
                            <div className="space-y-1 text-lg font-medium leading-6">
                              <h3>{post.title}</h3>
                              <p className="text-base text-indigo-600">
                                {post.tags.name}
                              </p>
                            </div>
                            <div className="text-base line-clamp-3">
                              <p className="text-gray-500">
                                {post.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            <div>Etkinlikler Çok Yakında Burada.</div>
          )}
        </div>
      </section>

      <section id="haberler" className="relative box">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Festival Haberleri
            </h2>
          </div>
          {posts.filter((e: any) => e.type === "e").length > 0 ? (
            <div className="grid max-w-lg gap-8 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
              {posts
                .filter((e: any) => e.type === "h")
                .slice(0, 3)
                .map((post: any, i: number) => (
                  <BlogCard key={i} post={post} />
                ))}
            </div>
          ) : (
            <div className="mt-12">Haberler Çok Yakında Burada.</div>
          )}
        </div>
      </section>

      <section id="iletisim" className="box !pb-0">
        <h2 className="text-3xl font-bold text-gray-900">İletişim Bilgileri</h2>
        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-500">
          Aşığıda verilen adreslerden yada sosyal medya hesaplarımızdan bizimle
          iletişime geçebilirsiniz.
        </p>
        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-base text-gray-500">
              <a
                href="mailto:direktorluk@kocaelifilmfestivali.com"
                className="block"
              >
                direktorluk@kocaelifilmfestivali.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              İrtibat Telefonu
            </h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">0530 543 82 33 / 0531 624 39 45</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const {
    data: { juries },
  } = await client.query({
    query: gql`
      query Juries {
        juries {
          name
          id
          job
          juryType
          content {
            document
          }
          image {
            url
          }
        }
      }
    `,
  });

  const {
    data: { sponsors },
  } = await client.query({
    query: gql`
      query Sponsors {
        sponsors {
          title
          image {
            url
          }
        }
      }
    `,
  });

  const {
    data: { posts },
  } = await client.query({
    query: gql`
      query Posts {
        posts {
          id
          title
          description
          image {
            url
          }
          type
          tags {
            name
          }
          content {
            document
          }
        }
      }
    `,
  });

  if (!juries || !posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      juries: juries,
      posts: posts,
      sponsors: sponsors,
    },
  };
}
