import Button from '../shared/components/UIElements/Button';
import links from '../shared/links';

const Pharmacy = () => {
  return (
    <div>
      <h2>Pharmacy</h2>
      <p>This is the pharmacy page.</p>
      <p>This will also have - 2d: Manual input form (pharmacy)- several sections with several lines of text</p>
      <Button href={links['3c']}>3c: Exemplar ward safe storage dashboard (Power BI)</Button>
      <Button href={links['5']}>5: Clinical inpatients dashboard (Power BI)</Button>
    </div>
  );
};

export default Pharmacy;
