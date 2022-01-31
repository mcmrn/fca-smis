import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Classes from "./components/pages/home/classes/Classes";
import ClassesInfo from "./components/pages/home/classes/ClassesInfo";
import Home from "./components/pages/home/Home";
import Settings from "./components/pages/home/settings/Settings";
import SettingsClassLevel from "./components/pages/home/settings/SettingsClassLevel";
import SettingsRole from "./components/pages/home/settings/SettingsRole";
import SettingsRoom from "./components/pages/home/settings/SettingsRoom";
import SettingsSection from "./components/pages/home/settings/SettingsSection";
import SettingSubject from "./components/pages/home/settings/SettingSubject";
import SettingTeacher from "./components/pages/home/settings/SettingTeacher";
import Students from "./components/pages/home/students/Students";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/reactjs-training-fbs-smis" element={<Home />} />
          <Route exact path="/students" element={<Students />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/classesinfo" element={<ClassesInfo />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route
            exact
            path="/classlevelsettings"
            element={<SettingsClassLevel />}
          />
          <Route exact path="/teachersettings" element={<SettingTeacher />} />
          <Route exact path="/sectionsettings" element={<SettingsSection />} />
          <Route exact path="/roomsettings" element={<SettingsRoom />} />
          <Route exact path="/subjectsettings" element={<SettingSubject />} />
          <Route exact path="/rolesettings" element={<SettingsRole />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
