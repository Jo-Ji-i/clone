import { useParams } from 'react-router-dom';

export default function InsightDetail() {
  const { id } = useParams();
  return <div className="text-xl font-bold">Insight Detail: {id}</div>;
}
