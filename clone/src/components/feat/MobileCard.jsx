export default function MobileCard({ card }) {
  return (
    <div
      style={{ backgroundImage: `url(${card.image})` }}
      className="flex flex-col justify-center w-11/12 h-56 gap-4 p-4 text-white bg-center bg-cover sm:w-4/5 md:w-3/4 lg:w-full sm:h-64 md:h-80 lg:h-96 sm:p-6 md:p-8 bg-black/30 bg-blend-darken rounded-2xl"
    >
      <div className="text-sm opacity-90">· Insights</div>
      <div className="text-xl font-bold md:text-3xl sm:text-2xl">{card.title}</div>
      <div className="flex items-center justify-center h-10 text-sm font-medium rounded-full w-28 bg-black/70">
        Details
      </div>
    </div>
  );
}
