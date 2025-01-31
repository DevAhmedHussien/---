const stats = [
  { value: "10+", label: "Лет опыта" },
  { value: "1000+", label: "Завершенных проектов" },
  { value: "100%", label: "Довольных клиентов" },
  { value: "5/5", label: "Рейтинг клиентов" },
];

export function WorkExperience() {
  return (
    <section className="md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center p-9">
        {/* Section Title */}
        < h2
          className="text-3xl font-bold mb-4"
          style={{ textAlign: "left" }}
        >
          Наш опыт работы
        </ h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            < div
              key={stat.label}
              className="bg-white/10 rounded-lg p-8 shadow-lg text-center backdrop-blur-sm hover:scale-105 transform transition"
            >
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-primary text-lg font-medium">{stat.label}</div>
            </ div>
          ))}
        </div>
      </div>
      
    </section>
  );
}