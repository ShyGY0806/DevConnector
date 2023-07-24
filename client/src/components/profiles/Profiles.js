import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  const [searchKeyword, setSearchKeyword] = useState('');

  // Filter the profiles based on the search keyword
  const filteredProfiles = profiles.filter((profile) =>
    profile.user.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <section className="container">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Browse and connect with
            developers
          </p>

          {/* Search bar with the magnifier icon */}
          <div className="search-bar">
            <i className="fas fa-search search-icon" />
            <input
              type="text"
              placeholder="Search developers..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="large-search-box"
            />
          </div>

          <div className="profiles">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
