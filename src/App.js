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
// import Chat from "./pcinstructor";
// import PcAdminChat from "./pcadmin"
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
import GradesReport from "./pcReports";
import ViewAllAnnouncements from "./ViewAllAnnouncements";
import io from "socket.io-client";
import CreateExam from "./CreateExam";
import CourseDetail from "./CourseDetail";
import AccessDenied from "./AccessDenied";
import { useUser } from "./UserContext";
import ExamQuestions from "./ExamQuestions";
import AutoGrader from "./AutoGrader";
import CourseExams from "./CourseExamEvaluation";
import EvaluationFormforQA from "./Form";
import PersonA from "./QAOfficerComponent";
import PersonB from "./StudentComponent";
import PersonC from "./InstructorChat";
import CourseContentDisplay from "./QACourseContentdisplay";
import VerifyUser from "./VerifyUser";
import ResetPassword from "./ResetPassword";
import AdminDiscussion from "./AdminDiscussion";
import PCDiscussion from "./PCDiscussion";
const socket = io.connect("http://localhost:3001");
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
        <Route path="/verifyUser" element={<VerifyUser />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

        {userRole !== null ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/profile" element={<Navigate to="/nda" />} />
        )}

        <Route
          path="/admin"
          element={userRole === "admin" ? <Admin /> : <Navigate to="/nda" />}
        />
        <Route
          path="/admindiscussion"
          element={
            userRole === "admin" ? (
              <AdminDiscussion socket={socket} />
            ) : (
              <Navigate to="/nda" />
            )
          }
        />

        <Route
          path="/adminChat"
          element={
            userRole === "admin" ? <AdminChat /> : <Navigate to="/nda" />
          }
        />

        {userRole !== null ? (
          <Route path="/userActivity" element={<UserActivity />} />
        ) : (
          <Route path="/userActivity" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null ? (
          <Route path="/student" element={<Student />} />
        ) : (
          <Route path="/student" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "qa" ? (
          <Route path="/qadashboard" element={<QADashboard />} />
        ) : (
          <Route path="/qadashboard" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "qa" ? (
          <Route path="/discussion" element={<DiscussionForum />} />
        ) : (
          <Route path="/discussion" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "qa" ? (
          <Route path="/reports" element={<QAreports />} />
        ) : (
          <Route path="/reports" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "qa" ? (
          <Route
            path="/qastudentdiscussion"
            element={<QAStudentDiscussion />}
          />
        ) : (
          <Route path="/qastudentdiscussion" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "qa" ? (
          <Route path="/newpolicy" element={<NewPolicy />} />
        ) : (
          <Route path="/newpolicy" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "qa" ? (
          <Route path="/existingpolicy" element={<ExistingPolicies />} />
        ) : (
          <Route path="/existingpolicy" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "qa" ? (
          <Route
            path="/qacoursecontentdisplay"
            element={<CourseContentDisplay />}
          />
        ) : (
          <Route
            path="/qacoursecontentdisplay"
            element={<Navigate to="/nda" />}
          />
        )}

        {userRole === "admin" || userRole === "qa" ? (
          <Route path="/audit" element={<CourseExams />} />
        ) : (
          <Route path="/audit" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "qa" ? (
          <Route path="/form" element={<EvaluationFormforQA />} />
        ) : (
          <Route path="/form" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "qa" ? (
          <Route path="/persona" element={<PersonA socket={socket} />} />
        ) : (
          <Route path="/persona" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "student" ? (
          <Route path="/personb" element={<PersonB socket={socket} />} />
        ) : (
          <Route path="/personb" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "instructor" ? (
          <Route path="/personc" element={<PersonC socket={socket} />} />
        ) : (
          <Route path="/personc" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null ? (
          <Route path="/announcements" element={<Announcements />} />
        ) : (
          <Route path="/announcements" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null ? (
          <Route
            path="/viewAllAnnouncements"
            element={<ViewAllAnnouncements />}
          />
        ) : (
          <Route
            path="/viewAllAnnouncements"
            element={<Navigate to="/nda" />}
          />
        )}

        {userRole !== null || userRole !== "student" ? (
          <Route path="/coursemodules" element={<CourseModules />} />
        ) : (
          <Route path="/coursemodules" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null ? (
          <Route path="/assessments" element={<Assessments />} />
        ) : (
          <Route path="/assessments" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null ? (
          <Route path="/grades" element={<Grades />} />
        ) : (
          <Route path="/grades" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null ? (
          <Route path="/studentdiscussion" element={<StudentDiscussion />} />
        ) : (
          <Route path="/studentdiscussion" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null ? (
          <Route path="/studentchat" element={<StudentChat />} />
        ) : (
          <Route path="/studentchat" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "pc" ? (
          <Route path="/PC" element={<ProgramCoordinator />} />
        ) : (
          <Route path="/PC" element={<Navigate to="/nda" />} />
        )}

        {userRole === "admin" || userRole === "pc" ? (
          <Route
            path="/pcdiscussion"
            element={<PCDiscussion socket={socket} />}
          />
        ) : (
          <Route path="/pcdiscussion" element={<Navigate to="/nda" />} />
        )}

        {/* {userRole !== null || userRole !== "student" ? (
             <Route path="/pcinstructor" element={<Chat />} />
        ) : (
          <Route path="/pcinstructor" element={<Navigate to="/nda" />} />
        )} */}

        {/* {userRole !== null || userRole !== "student" ? (
             <Route path="/pcadmin" element={<PcAdminChat />} />
        ) : (
          <Route path="/pcadmin" element={<Navigate to="/nda" />} />
        )} */}

        {userRole !== null || userRole !== "student" ? (
          <Route path="/Enquiry" element={<InquiryInbox />} />
        ) : (
          <Route path="/Enquiry" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null || userRole !== "student" ? (
          <Route path="/UpdateCourse" element={<UpdateCourseContent />} />
        ) : (
          <Route path="/UpdateCourse" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null || userRole !== "student" ? (
          <Route path="/pcReports" element={<GradesReport />} />
        ) : (
          <Route path="/pcReports" element={<Navigate to="/nda" />} />
        )}

        {/* {userRole !== null || userRole !== "student" ? (
             <Route path="/PCChat" element={<Chat />} />
        ) : (
          <Route path="/PCChat" element={<Navigate to="/nda" />} />
        )} */}

        {userRole !== null || userRole !== "instructor" ? (
          <Route path="/instructor" element={<Instructor />} />
        ) : (
          <Route path="/instructor" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null || userRole !== "instructor" ? (
          <Route
            path="/instructorDiscussion"
            element={<InstructorDiscussion />}
          />
        ) : (
          <Route
            path="/instructorDiscussion"
            element={<Navigate to="/nda" />}
          />
        )}

        {userRole !== null || userRole !== "instructor" ? (
          <Route path="/AutoGrader" element={<AutoGrader />} />
        ) : (
          <Route path="/AutoGrader" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null || userRole !== "instructor" ? (
          <Route path="/instructorChat" element={<ChatApp />} />
        ) : (
          <Route path="/instructorChat" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null || userRole !== "instructor" ? (
          <Route path="/create-exam/:id" element={<CreateExam />} />
        ) : (
          <Route path="/create-exam/:id" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null || userRole !== "instructor" ? (
          <Route path="/exam-questions" element={<ExamQuestions />} />
        ) : (
          <Route path="/exam-questions" element={<Navigate to="/nda" />} />
        )}

        {userRole !== null || userRole !== "instructor" ? (
          <Route path="/course/:id" element={<CourseDetail />} />
        ) : (
          <Route path="/course/:id" element={<Navigate to="/nda" />} />
        )}

        <Route path="/nda" element={<AccessDenied />} />
      </Routes>
    </Router>
  );
}

export default App;
