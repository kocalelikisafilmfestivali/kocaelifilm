import type { NextPage } from "next";
import {
  CalendarIcon,
  CloudUploadIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import BlogCard from "../components/BlogCard";
import Image from "next/image";
const people = [
  {
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
  },
  {
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
  },
  {
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
  },
  {
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
  },
];
/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
const Home: NextPage = () => {
  const features = [
    {
      name: "Başvuru Formu",
      icon: CloudUploadIcon,
    },
    {
      name: "Şartname",
      icon: LockClosedIcon,
    },
    {
      name: "Festival Programı",
      icon: CalendarIcon,
    },
  ];
  return (
    <div className="relative py-20 bg-white">
      <section className="box">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          T.C. Kültür ve Turizm Bakanlığı Katkılarıyla
        </h2>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Uluslararası Kocaeli Kısa Film Festivali
        </h1>
        <div className="relative mt-8 overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <Image
              layout="fill"
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="relative px-6 bg-gray-900 bg-opacity-75 py-22 sm:py-28 sm:px-12 lg:px-16">
            <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
              <h2
                id="comfort-heading"
                className="text-2xl font-bold text-white sm:text-3xl"
              >
                Festival Hakkında
              </h2>
              <p className="mt-3 text-lg text-white">
                Endless tasks, limited hours, a single piece of paper. Not
                really a haiku, but were doing our best here. No kanban boards,
                burndown charts, or tangled flowcharts with our Focus system.
                Just the undeniable urge to fill empty circles.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="box">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Jüri Üyelerimiz</h2>

          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 lg:gap-y-12"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full mb-4 h-60">
                    <img
                      className="object-cover w-full h-full rounded-lg shadow-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <h3>{person.name}</h3>
                  <p className="text-indigo-600">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="box">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
              alt="Laravel"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
              alt="Statamic"
            />
          </div>
        </div>
      </section>

      <section className="box">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Festival Kapsamındaki Etkinlikler
          </h2>

          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-4 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 mb-4">
                    <img
                      className="object-cover rounded-lg shadow-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-base text-indigo-600">{person.role}</p>
                    </div>
                    <div className="text-base">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative box">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Festival Haberleri
            </h2>
          </div>
          <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post, i) => (
              <BlogCard key={i} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="box !pb-0">
        <h2 className="text-3xl font-bold text-gray-900">İletişim Bilgileri</h2>
        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-500">
          Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id
          malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
        </p>
        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Los Angeles</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">4556 Brendan Ferry</span>
              <span className="block">Los Angeles, CA 90210</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">New York</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">886 Walter Streets</span>
              <span className="block">New York, NY 12345</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Toronto</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">7363 Cynthia Pass</span>
              <span className="block">Toronto, ON N3Y 4H8</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">London</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">114 Cobble Lane</span>
              <span className="block">London N1 2EF</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
