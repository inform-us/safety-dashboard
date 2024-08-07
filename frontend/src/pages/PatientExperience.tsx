import './PatientExperience.css';

const PatientExperience = () => {
  return (
    <div className="patient-experience-parent">
      <div className="patient-experience">
        <section className="charts__container">
          <header className="patient-experience__header">
            <h1>Patient Survey Results</h1>
          </header>
          <div className="patient-experience__charts">
            <div className="chart-section">
              <h2>Monthly Result Data by Unit and Patient/Visitor</h2>
              <div className="chart">Chart 1</div>
              <div className="chart">Chart 2</div>
              <div className="chart">Chart 3</div>
              <div className="chart">Chart 4</div>
            </div>

            <div className="chart-section">
              <h2>Run Chart of Completed Surveys by Unit</h2>
              <div className="chart">Run Chart 1</div>
              <div className="chart">Run Chart 2</div>
              <div className="chart">Run Chart 3</div>
              <div className="chart">Run Chart 4</div>
            </div>

            <div className="chart-section">
              <h2>Run Chart of Overall Results by Unit</h2>
              <div className="chart">Overall Chart 1</div>
              <div className="chart">Overall Chart 2</div>
              <div className="chart">Overall Chart 3</div>
              <div className="chart">Overall Chart 4</div>
            </div>
          </div>
        </section>

        <section className="learning-actions__container">
          <header className="patient-experience__header">
            <h1>Learning and Actions</h1>
          </header>
          <div className="summary-points">
            <h3>Compliant Key Summary Points</h3>
            <ul>
              <li>Document all family discussion</li>
              <li>Consider the language we use with patients and families can have a lasting impression</li>
            </ul>
          </div>
          <div className="learning-actions">
            <h3>Actions and Learning</h3>
            <p>You said, we did</p>
          </div>
        </section>
      </div>
      <section className="peec__container">
        <header className="peec__header">
          <h1>PEEC News</h1>
        </header>
        <div>
          <h3>Ongoing Patient Experience Projects</h3>
          <ul>
            <li>Visitors room</li>
            <li>Visitors pack</li>
            <li>Memorial service</li>
            <li>Volunteers and visibility</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PatientExperience;
