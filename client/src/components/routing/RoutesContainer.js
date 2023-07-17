import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Alert from '../layout/Alert';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import PrivateRoute from '../routing/PrivateRoute';
import NotFound from '../layout/NotFound';

export const RoutesContainer = () => {
  return (
    <section className="container">
      <Alert />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route
          path="/create-profile"
          element={<PrivateRoute component={CreateProfile} />}
        />
        <Route
          path="/edit-profile"
          element={<PrivateRoute component={EditProfile} />}
        />
        <Route
          path="/add-experience"
          element={<PrivateRoute component={AddExperience} />}
        />
        <Route
          path="/add-education"
          element={<PrivateRoute component={AddEducation} />}
        />
        <Route path="/posts" element={<PrivateRoute component={Posts} />} />
        <Route path="/posts/:id" element={<PrivateRoute component={Post} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default RoutesContainer;
