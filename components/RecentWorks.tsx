import Image from "next/image";
import Link from "next/link";

const link = 'services'
const works = [
  {
    title: "Устранение протечек",
    image: "/images/recent/one.png",
    link,
    public: true,
    category: "Ремонт сантехники",
  },
  {
    title: "Устранение засоров",
    image: "/images/recent/two.png",
    link,
    public: true,
    category: "Чистка канализации",
  },
  {
    title: "Установка смесителей",
    image: "/images/recent/thre.png",
    link,
    public: true,
    category: "Монтаж сантехники",
  },
  {
    title: "Ремонт душевой кабины",
    image: "/images/recent/four.png",
    link,
    public: true,
    category: "Ремонт сантехники",
  },
  {
    title: "Установка унитаза",
    image: "/images/recent/five.png",
    link,
    public: true,
    category: "Монтаж сантехники",
  },
  {
    title: "Замена труб",
    image: "/images/recent/sex.png",
    link,
    public: true,
    category: "Ремонт сантехники",
  },
  {
    title: "Герметизация ванной",
    image: "/images/recent/seven.png",
    link,
    public: true,
    category: "Ремонт сантехники",
  },
  {
    title: "Установка водонагревателя",
    image: "/images/recent/eight.png",
    link,
    public: true,
    category: "Монтаж сантехники",
  },
];

export function RecentWorks() {
  return (
    <section id="проекты" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto p-5">
        <div className="text-center mb-16">
          < h2
            className="text-3xl font-bold mb-4"
          >
            Наши работы
          </ h2>
          < p
            className="text-muted-foreground max-w-2xl mx-auto"
        
          >
            Примеры наших работ по ремонту и установке сантехники в Тюмени.
          </ p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {works.map((work, index) => (
            < div
              key={work.title}
            
              className="relative group overflow-hidden rounded-lg hover:shadow-xl transition-shadow border hover:border-primary"
            >
              <Image
                src={work.image}
                alt={work.title}
                width={300}
                height={200}
                className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-center items-center text-white p-6">
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-sm">{work.category}</p>
                {work.public && (
                  <Link
                    href={work.link}
                    className="bg-gradient-to-r from-primary to-secondary text-white hover:bg-yellow-500 px-5 py-1 rounded-md mt-3 text-sm"
                  >
                    Подробнее
                  </Link>
                )}
              </div>
            </ div>
          ))}
      
        </div>
      </div>
    </section>
  );
}