export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full">
      <div className="flex w-full h-[650px] px-24 py-16 gap-6">
        <div className="flex flex-[3] bg-gray-400">슬라이드 배너 자리</div>

        <div className="flex flex-col flex-[1] bg-gray-500">
          <div>카드1</div>
          <div>카드2</div>
          <div>카드3</div>
        </div>
      </div>

      <div className="flex w-full h-[550px] px-24 py-1 gap-6">
        <div className="flex flex-[3] bg-gray-400">Insights / Brief </div>

        <div className="flex flex-col flex-[1] bg-gray-500"> Quarterly Trends</div>
      </div>

      <div className="flex w-full flex-col h-[800px] px-24 my-20 py-12 bg-orange-50">
        <div> Research Report </div>
        <div className="flex flex-row ">
          <div> 포스트 1</div>
          <div> 포스트 2</div>
          <div> 포스트 3</div>
        </div>
      </div>

      <div className="flex w-full h-[550px] px-24 py-1 mb-20 gap-6">
        <div className="flex flex-[3] bg-gray-400">Media Cover </div>

        <div className="flex flex-col flex-[1] bg-gray-500"> Data </div>
      </div>
    </div>
  );
}
