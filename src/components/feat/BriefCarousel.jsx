// BriefSection.jsx
import GenericCarousel from './GenericCarousel';
import { InsightCover } from '../../data/cover.js';
import BriefCard from '../design/BriefCard.jsx';

export default function BriefSection() {
  return (
    <GenericCarousel
      items={InsightCover}
      Card={BriefCard}
      title="Insights / Brief"
      link="/research"
    />
  );
}
