import './HomePage.css';
import Tile from '../UIElements/Tile';
import '../UIElements/Tile.css';
import '../../../../src/styles.css';

const HomePage = () => {
  return (
    <div className="tile-container">
      <div className="tile--patient-experience">
        <Tile
          to="/patient-experience"
          className="patient-experience"
          size="large"
          title="Patient Experience"
          subtitle={null}
          bodyHeader={null}
          bodyCenter={null}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
      <div className="tile--pharmacy">
        <Tile
          to="/pharmacy"
          className="pharmacy"
          size="large"
          title="Pharmacy"
          subtitle={null}
          bodyHeader={null}
          bodyCenter={null}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
      <div className="tile--safety-news">
        <Tile
          to="/safety-news"
          className="safety-news"
          size="large"
          title="Safety News"
          subtitle={null}
          bodyHeader={null}
          bodyCenter={null}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
      <div className="tile--education">
        <Tile
          to="/education"
          className="education"
          size="large"
          title="Education"
          subtitle={null}
          bodyHeader={null}
          bodyCenter={null}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
      <div className="tile--audit-qi">
        <Tile
          to="/audit-qi"
          className="audit-qi"
          size="large"
          title="Audit & QI"
          subtitle={null}
          bodyHeader={null}
          bodyCenter={null}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
      <div className="tile--learning-actions">
        <Tile
          to="/learning-actions"
          className="learning-actions"
          size="large"
          title="Learning & Actions"
          subtitle={null}
          bodyHeader={null}
          bodyCenter={null}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
      <div className="tile--infection-control">
        <Tile
          to="/infection-control"
          className="infection-control"
          size="large"
          title="Infection Control"
          subtitle={null}
          bodyHeader={null}
          bodyCenter={null}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
      <div className="tile--icu-examplar">
        <Tile
          to="/icu-examplar"
          className="icu-examplar"
          size="large"
          title="ICU Examplar"
          subtitle={null}
          bodyHeader={null}
          bodyCenter={null}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
      <div className="tile--headlines">
        <Tile
          to="/headlines"
          className="headlines"
          size="large"
          title="Headlines"
          subtitle={null}
          bodyHeader={null}
          bodyCenter={null}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
      <div className="tile--quality-safety">
        <Tile
          to="/quality-safety"
          className="quality-safety"
          size="large"
          title="Quality & Safety"
          subtitle={null}
          bodyHeader={null}
          bodyCenter={null}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
    </div>
  );
};

export default HomePage;
