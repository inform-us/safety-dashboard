import Button from '../shared/components/UIElements/Button';
import links from '../shared/links';

const ICUExamplar = () => {
  return (
    <div>
      <h2>ICUExamplar</h2>
      <p>This is the ICUExamplar page.</p>
      <p>
        This page will have - 2a. Manual input form (matrons) several sections of paragraphs of text and simple tables
        currently created in excel and power point.
      </p>
      <Button href={links['3a']}>3a: Exemplar ward CCU dashboard (Power BI) </Button>
    </div>
  );
};

export default ICUExamplar;
