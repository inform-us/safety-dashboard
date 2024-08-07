import Button from '../shared/components/UIElements/Button';
import links from '../shared/links';

const InfectionControl = () => {
  return (
    <div>
      <h2>Infection Control</h2>
      <p>This is the Infection Control page.</p>
      <p>
        This page will have - 2c. Manual input form (Infection control)- text based and possibly images/screen shots of
        charts if 3b not achievable
      </p>
      <Button href={links['3b']}>3b: Exemplar ward Infection Control Hand hygiene dashboard (Power BI) </Button>
    </div>
  );
};

export default InfectionControl;
