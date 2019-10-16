import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SearchCriteriaTable } from '../../components/atomic';
import {history} from '../../services/history.service';

const ResultsPageHeader = ({ handleUpdate , resultsCount }) => {

  const handleRefineSearch = () => {
    handleUpdate('formType', 'advanced');
    history.push('/search');
  }
  return (
    <div className="cts-results-header">
      <p>
        <strong>Results 1-10 of {resultsCount} for your search</strong>
      </p>

      <SearchCriteriaTable />
      <p className="reset-form">
        <Link to="/search">Start Over</Link>
        <span aria-hidden="true" className="separator">|</span>
        <button type="button" className="btnAsLink" onClick={handleRefineSearch}>Refine Search Criteria</button>
      </p>
    </div>
  );
};

ResultsPageHeader.propTypes = {
  resultsCount: PropTypes.string,
};

export default ResultsPageHeader;
