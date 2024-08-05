import './HomeTiles.css';
import Tile from '../UIElements/Tile';
import '../UIElements/Tile.css';
import '../../../../src/styles.css';

const HomeTiles = () => {
  return (
    <div className="tile-container">
      <div className="tile--patient-experience">
        <Tile
          to="/patient-experience"
          className="patient-experience"
          size="large"
          title="Patient Experience"
          body_paragraph1={null}
          body_paragraph2={null}
          body_paragraph3={null}
          style={{}}
          horizontalRuleColor="dark"     />
      </div>
      <div className="tile--pharmacy">
        <Tile
          to="/pharmacy"
          className="pharmacy"
          size="large"
          title="Pharmacy"
          body_paragraph1={null}
          body_paragraph2={null}
          body_paragraph3={null}
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
          body_paragraph1={null}
          body_paragraph2={null}
          body_paragraph3={null}
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
          body_paragraph1={null}
          body_paragraph2={null}
          body_paragraph3={null}
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
          body_paragraph1={'T06 feeding and nutrition magnets are now in full use above each bed space.'}
          body_paragraph2={'Colour correspond to the colours of the rainbow indication NBL, fluid only intake, soft foods, solids...'}
          body_paragraph3={'The next Audit and QI meeting is on January 11 1330-1430 and Lisa will be presenting her Stop Think Glove project.'}
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
          body_paragraph1={'Incident of aggression Summary xxxxxxxx Investivation xxxxxxx Learning and actions xxxxxxx'}
          body_paragraph2={'Incident of missed deterioation Summaryxxxxxxxx 1/ 2a interim Weekly Investivation'}
          body_paragraph3={'Learning and actions'}
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
          body_paragraph1={null}
          body_paragraph2={null}
          body_paragraph3={null}
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
          body_paragraph1={null}
          body_paragraph2={null}
          body_paragraph3={null}
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
          body_paragraph1={'News'}
          body_paragraph2={'Events'}
          body_paragraph3={'Announcements'}
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
          body_paragraph1={'Quality'}
          body_paragraph2={'Safety'}
          body_paragraph3={null}
          style={{}}
          horizontalRuleColor="dark"
        />
      </div>
    </div>
  );
};

export default HomeTiles;
