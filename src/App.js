import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import Admin from "./Admin";
import Student from "./Student";
import QADashboard from "./QADash";
import DiscussionForum from "./Discussion";
import QAreports from "./Reports";
import QAStudentDiscussion from "./QAStudentDiscussion";
import Homepage from "./Home";
import Contact from "./Contact";
import Announcements from "./Announcements";
import CourseModules from "./CourseModules";
import Assessments from "./Assessments";
import Grades from "./Grades";
import StudentDiscussion from "./StudentDiscussion";
import StudentChat from "./StudentChat";
import Profile from "./Profile";
import UserActivity from "./UserActivity";
import AboutUsPage from "./AboutUs";
import ProgramCoordinator from "./PC";
import Chat from "./PCChat";
import Services from "./Services";
import InstructorDiscussion from "./InstructorDiscussion";
import Instructor from "./Instructor";
import ChatApp from "./InstructorChat";
import AdminChat from "./AdminChat";
import NewPolicy from "./NewPolicy";
import ExistingPolicies from "./ExistingPolicy";
// import QaOfficer from './QAOfficerComponent';
// import Studentpage from './StudentComponent';
import InquiryInbox from "./Enquiry";
import UpdateCourseContent from "./UpdateCourse";

import CreateExam from "./CreateExam";
import CourseDetail from "./CourseDetail";
import AccessDenied from "./AccessDenied";
import { useUser } from "./UserContext";
import ExamQuestions from "./ExamQuestions";
function App() {
  const { userRole } = useUser();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<Services />} />

        {userRole === "admin" || userRole === "pc" ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/profile" element={<Navigate to="/nda" />} />
        )}

        <Route
          path="/admin"
          element={userRole === "admin" ? <Admin /> : <Navigate to="/nda" />}
        />
        <Route
          path="/adminChat"
          element={
            userRole === "admin" ? <AdminChat /> : <Navigate to="/nda" />
          }
        />

        <Route path="/userActivity" element={<UserActivity />} />

        <Route path="/student" element={<Student />} />
        <Route path="/qadashboard" element={<QADashboard />} />
        <Route path="/qahome" element={<QADashboard />} />
        <Route path="/discussion" element={<DiscussionForum />} />
        <Route path="/reports" element={<QAreports />} />
        <Route path="/qastudentdiscussion" element={<QAStudentDiscussion />} />
        <Route path="/newpolicy" element={<NewPolicy />} />
        <Route path="/existingpolicy" element={<ExistingPolicies />} />
        {/* <Route path='/qaofficercomponent' element={<QaOfficer/>}/>
        <Route path='/studentcomponent' element={<Studentpage />}/> */}

        <Route path="/announcements" element={<Announcements />} />
        <Route path="/coursemodules" element={<CourseModules />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/studentdiscussion" element={<StudentDiscussion />} />
        <Route path="/studentchat" element={<StudentChat />} />

        <Route path="/PC" element={<ProgramCoordinator />} />
        <Route path="/PCChat" element={<Chat />} />
        <Route path="/Enquiry" element={<InquiryInbox />} />
        <Route path="/UpdateCourse" element={<UpdateCourseContent />} />

        <Route path="/instructor" element={<Instructor />} />
        <Route
          path="/instructorDiscussion"
          element={<InstructorDiscussion />}
        />
        <Route path="/instructorChat" element={<ChatApp />} />
        <Route path="/create-exam/:id" element={<CreateExam />} />
        <Route path="/exam-questions" element={<ExamQuestions />} />
        <Route path="/course/:id" element={<CourseDetail />} />

        <Route path="/nda" element={<AccessDenied />} />
      </Routes>
    </Router>
  );
}

export default App;
