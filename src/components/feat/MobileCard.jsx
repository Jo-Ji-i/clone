export default function MobileCard({ card }) {
  return (
    <div
      style={{ backgroundImage: `url(${card.image})` }}
      className="flex flex-col justify-center w-full h-auto gap-4 p-4 mx-2 text-white bg-center bg-cover min-h-80 bg-black/30 bg-blend-darken rounded-2xl"
    >
      <div className="text-sm opacity-90">· Insights</div>
      <div className="text-xl font-bold md:text-3xl sm:text-2xl">{card.title}</div>
      <div className="flex items-center justify-center h-10 text-sm font-medium rounded-full w-28 bg-black/70">
        Details
      </div>
    </div>
  );
}
