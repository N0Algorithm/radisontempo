import './framer/styles.css'

import PricingPlanFramerComponent from './framer/pricing-plan'
import BadgeFramerComponent from './framer/elements/badge'
import AnalyzeCardFramerComponent from './framer/analyze-card'
import DevelopmentCardFramerComponent from './framer/development-card'
import MaintenanceCardFramerComponent from './framer/maintenance-card'
import CtaButtonFramerComponent from './framer/cta-button'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 bg-[rgb(0,_0,_0)]'>
      <PricingPlanFramerComponent.Responsive/>
      <BadgeFramerComponent.Responsive
        LZ2eCPtLx={14}
        OLBJJ2ZZ2={"Radison - AI Automation Partner"}
        bWKfsW3Ha={"rgb(13, 13, 13)"}
        sVlsQOR6K={"rgb(255, 255, 255)"}
        xOxJpNi7Y={true}
        zKyvF25Hr={0.9}
      />
      <AnalyzeCardFramerComponent.Responsive/>
      <DevelopmentCardFramerComponent.Responsive/>
      <MaintenanceCardFramerComponent.Responsive/>
      <CtaButtonFramerComponent.Responsive
        IHCtoN6iC={true}
        NAbd17i0q={"Our Services"}
        ae3kdG3b0={"rgb(81, 47, 235)"}
        t90xdY6CE={"/#services"}
        yt52UU3wF={15}
      />
    </div>
  );
};