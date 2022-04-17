import Image from "next/image";

const Blog = () => {
  return (
    <div className="gap-8 py-10 bg-white md:grid md:grid-cols-2 sm:py-20 box">
      <div className="relative w-full mx-auto mb-8 overflow-hidden rounded-lg shadow-lg aspect-square">
        <Image
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
          alt=""
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="w-full">
        <div className="mx-auto mb-5 text-lg max-w-prose">
          <h1>
            <span className="block mt-2 text-3xl font-bold text-left text-gray-900 sm:text-4xl">
              Furkan Çığırtkan
            </span>
            <span className="block text-base font-semibold text-left text-indigo-600">
              Jüri Üyesi
            </span>
          </h1>
        </div>
        <div className="mx-auto prose text-left max-w-none">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            distinctio quae beatae pariatur facere, cum sequi vero eligendi
            quibusdam ipsam esse obcaecati odio enim a labore eius debitis error
            ad accusantium itaque illum recusandae. Id nam facilis, nulla, neque
            unde hic commodi est iste voluptatum voluptate quisquam aperiam
            laboriosam quo et. Facilis impedit dicta aut ipsum cumque atque quae
            quisquam omnis eum corporis! Quis accusantium nesciunt
            exercitationem ipsum voluptatem consectetur iste laudantium amet in
            minus veritatis natus, unde ullam labore illum magni eveniet esse
            beatae placeat aspernatur doloremque impedit suscipit id eligendi?
            Dolor quo delectus commodi quia provident nesciunt iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
