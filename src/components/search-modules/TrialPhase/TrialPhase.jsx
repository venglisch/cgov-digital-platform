import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fieldset, Checkbox } from '../../atomic';
import './TrialPhase.scss';

const TrialPhase = ({ selectedPhases, phaseFields }) => {
  const [phases, setPhases] = useState([]);

  useEffect(() => {
    //initialize trials state after mount
    setPhases([...selectedPhases]);
  }, [selectedPhases]);

  const handleSelectAll = e => {
    setPhases([]);
  };

  const handleCheckPhase = e => {
    let filtered = [];
    if (e.target.checked) {
      setPhases([...phases, e.target.value]);
    } else {
      filtered = phases.filter((value, index, arr) => {
        return value !== e.target.value;
      });
      setPhases([...filtered]);
    }
  };

  return (
    <Fieldset
      id="trialphase"
      classes="trial-phase"
      legend="Trial Phase"
      helpUrl="https://www.cancer.gov/about-cancer/treatment/clinical-trials/search/help#trialphase"
    >
      <p>Search by one or more trial phases.</p>
      <Checkbox
        value=""
        name="tp"
        id="tp_all"
        label="All"
        classes="tp-all"
        checked={phases.length === 0}
        onChange={handleSelectAll}
      />
      <div className="group-phases">
        {phaseFields.map((field, idx) => (
          <Checkbox
          id={'tp_' + field.value}
          key={'tp_' + field.value}
          name="tp"
          value={field.value}
          label={field.label}
          onChange={handleCheckPhase}
          checked={phases.includes(field.value)}
        />
        ))}
        
      </div>
    </Fieldset>
  );
};

TrialPhase.propTypes = {
  phaseFields: PropTypes.array,
  selectedPhases: PropTypes.array,
};

TrialPhase.defaultProps = {
  selectedPhases: [],
  phaseFields: [
    { label: 'Phase I', value: 'I' },
    { label: 'Phase I', value: 'II' },
    { label: 'Phase III', value: 'III' },
    { label: 'Phase IV', value: 'IV' },
  ]
};

export default TrialPhase;
