import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
//Routes
import Navbar from './Navbar';
import SchoolList from './school/SchoolList';
import Login from './auth/Login';
import HomePage from './HomePage';
import Profile from './school/Profile';
import SingnUp from './school/SignUp';
import TeacherList from './teacher/search/TeacherList';
import Teacher from './teacher/manage/Teacher';
import Search from './teacher/search/Search';
import Req from '../components/school/Req';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <br />
          <Route path="/" exact component={HomePage} />
          <Route path="/teacherSearch" exact component={TeacherList} />
          <Route path="/login" exact component={Login} />
          <Route path="/schoolProfile" exact component={Profile} />
          <Route path="/signUp" exact component={SingnUp} />
          <Route path="/teacherList" exact component={TeacherList} />
          <Route path="/teacher" exact component={Teacher} />
          <Route path="/teacherSearch" exact component={Search} />
          <Route path="/req" exact component={Req} />
        </div>
      </Router>
    );
  }
}

export default App;
