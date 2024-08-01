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
          bodyCenter={'Message of the week'}
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
          bodyCenter={'T06 feeding and nutrition magnets are now in full use above each bed space. Colour correspond to the colours of the rainbow indication NBL, fluid only intake, soft foods, solids...The next Audit and QI meeting is on January 11 1330-1430 and Lisa will be presenting her Stop Think Glove project.'}
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
          bodyHeader={'Incident of agression'}
          bodyCenter={'A patient was admitted to the unit with a history of aggression..xxx'}
          bodyFooter={'Learning and Actions..xxxxx'}
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
          bodyCenter={'We have improved over the last 3 months with our pressure ulcers Please remember to turn your patients'}
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
          bodyHeader={'News news news'}
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
          bodyCenter={'Bulletin - link to share point document'}
          bodyFooter={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
    </div>
  );
};

export default HomePage;
