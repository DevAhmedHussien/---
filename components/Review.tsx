import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

// ** Sample Reviews Data (Expanded to 10 Reviews per Service) **
const reviews = [
  {
    name: "Александр Иванов",
    location: "Тюмень",
    service: "Устранение протечек",
    rating: 5,
    review: "У раковины тек сифон. Заказал здесь ремонт сифона - приехал сантехник, с новым сифоном. Сифон почему-то был разобранный. Сантехник сказал, что все в порядке, так и должно быть. Сифон при мне собрал, заменил, сейчас не течет ничего.",
  },
  {
    name: "Мария Петрова",
    location: "Тюмень",
    service: "Устранение протечек",
    rating: 4,
    review: "Была задача установить и подключить раковину и стояк. Когда нам в прошлый раз это устанавливали, “мастер” плитку на стене разбил. И в этот раз я ожидал чего-то подобного, но...нет. Все аккуратно прошло, грязь за собой убрали.",
  },
  {
    name: "Иван Сергеев",
    location: "Тюмень",
    service: "Устранение протечек",
    rating: 5,
    review: "Спасибо, что спасли от запаха из трубы в ванной. Фу, такая мерзость. Даже не думала что там столько плесени (надеюсь, что это была только плесень). Если задумаю менять трубы - обращусь к вам.",
  },
  {
    name: "Ольга Кузнецова",
    location: "Тюмень",
    service: "Устранение протечек",
    rating: 5,
    review: "Таак. Мастер опоздал на 30 минут - это минус. По его словам - «покупал смеситель». У вас смесителей на складе нет?)) Впрочем, замена прошла быстро и мастер никаких доп. денег не брал - это плюс.  Из крана больше не течет - это, понятное дело, тоже +. Короче просто не опаздывайте - такое бесит)",
  },
  {
    name: "Андрей Крылов",
    location: "Тюмень",
    service: "Устранение протечек",
    rating: 4,
    review: "Качеством выполнения работ осталась довольна. Самой, конечно, так сделать невозможно. Работа идет быстро, мастер действительно профессионал. Цена вполне адекватная. Рекомендую.",
  },

  {
    name: "Сергей Фомин",
    location: "Тюмень",
    service: "Установка смесителей",
    rating: 5,
    review: "Спасибо вашей компании. Быстро приехали и устранили засор в школьном туалете. Мастер очень хороший специалист. Удачи вашем труде.",
  },
  {
    name: "Елена Смирнова",
    location: "Тюмень",
    service: "Установка смесителей",
    rating: 4,
    review: "Бачок вдруг начал течь на пол. Думал, ну все - бачок накрылся. Но обошлось: сантехник осмотрел унитаз и выяснилось что просто прокладка неплотно прилегает. Прокладку заменил, бачок не течет)",
  },
  {
    name: "Михаил Тихонов",
    location: "Тюмень",
    service: "Установка смесителей",
    rating: 5,
    review: "Бачок вдруг начал течь на пол. Думал, ну все - бачок накрылся. Но обошлось: сантехник осмотрел унитаз и выяснилось что просто прокладка неплотно прилегает. Прокладку заменил, бачок не течет)",
  },
  {
    name: "Кристина Долгова",
    location: "Тюмень",
    service: "Установка смесителей",
    rating: 5,
    review: "Засорилась  труба под раковиной в ванной. Вода вообще не сливалась((. Мастер приехал уже с запчастью, засор убрал и патрубок заменил. Все по прайсу, претензий нет.",
  },
  {
    name: "Анатолий Егоров",
    location: "Тюмень",
    service: "Установка смесителей",
    rating: 5,
    review: "Купили новую раковину и тумбу под нее, вызвали специалиста, чтобы правильно установить и подключить. Очень вежливый, знающий мастер. Никаких лишних вопросов: пришел - увидел - начал работать. Установка прошла успешно",
  },

  {
    name: "Иван Ковалев",
    location: "Тюмень",
    service: "Ремонт душевой кабины",
    rating: 5,
    review: "Душевая кабина теперь как новая. Спасибо за работу!",
  },
  {
    name: "Оксана Лебедева",
    location: "Тюмень",
    service: "Ремонт душевой кабины",
    rating: 4,
    review: "Все починили, но пришлось ждать мастера.",
  },
 
];

// ** Star Rating Component **
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <FaStar key={index} className={`text-yellow-400 ${index < rating ? "" : "opacity-30"}`} />
    ))}
  </div>
);

const CustomerReviews: React.FC = () => {
  return (
    <section id="Отзывы" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ** Section Title ** */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Отзывы клиентов</h2>
          <p className="text-gray-600">Что говорят жители Тюмени о наших услугах?</p>
        </div>

        {/* ** Reviews Grid ** */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FaUserCircle className="text-gray-400 text-4xl mr-3" />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.location}</p>
                </div>
              </div>

              {/* ** Service Name ** */}
              <p className="text-primary font-semibold">{review.service}</p>

              {/* ** Star Rating ** */}
              <StarRating rating={review.rating} />

              {/* ** Customer Review ** */}
              <p className="text-gray-700 mt-2 italic">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
