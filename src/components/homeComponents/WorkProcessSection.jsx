import { useState } from 'react';
import { Divider } from '../common/Divider';
import { DividerTop } from '../common/DividerTop';
import { ProcessStep } from '../workSection/ProcessStep'
import { SectionHeader } from '../workSection/SectionHeader';
import { MethodologyAndCollaboration } from '../workSection/MethodologyAndCollaboration';
import { useProcessSteps } from '../../hooks/useProcessSteps';

export const WorkProcessSection = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const { processSteps } = useProcessSteps();

  return (
    <section className="relative min-h-screen bg-blue-950/5 text-white py-20 px-4">
      <DividerTop />
      <Divider />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
                <ProcessStep 
                    key={index} 
                    step={step} 
                    index={index} 
                    hoveredStep={hoveredStep} 
                    setHoveredStep={setHoveredStep} 
                />
            ))}
        </div>

        <MethodologyAndCollaboration />
        
      </div>
    </section>
  );
};
