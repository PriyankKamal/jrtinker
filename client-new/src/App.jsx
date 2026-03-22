import { Suspense, lazy } from "react";
import {Routes, Route } from "react-router-dom";
import CourseClassDetails from "./Compnents/CourseClassDetails";
import CourseFilterOptions from "./Compnents/CourseFilterOptions";
import ContactUs from "./Compnents/ContactUs";
import Projects from "./Compnents/Projects";
import ScrollToTop from "./Compnents/ScrollToTop ";
import { KnowMoreSection } from "./Compnents/knowmore/KnowMoreInfo";
import Footer from "./Compnents/footer/Footer";
import CreateTeacher from "./Compnents/admin/CreateTeacher";
import SchoolContactForm from "./Compnents/SchoolContactForm";
import { ReactLenis, useLenis } from "lenis/react";


// Lazy load components
const Navbar = lazy(() => import("./Compnents/Navbar"));
const Home = lazy(() => import("./Pages/Home"));
const StemLab = lazy(() => import("./Compnents/StemLab"));
const Products = lazy(() => import("./Compnents/Products"));
const Login = lazy(() => import("./Compnents/Login"));
const BookDemoClass = lazy(() => import("./Compnents/BookDemoClass"));
const KnowmoreInfo = lazy(() => import("./Compnents/KnowmoreInfo"));
const SignUp = lazy(() => import("./Compnents/SignUp"));
const CreateCourse = lazy(() => import("./Compnents/admin/CreateCourse"));
const SingleCourseData = lazy(() => import("./Compnents/SingleCourseData"));
const UpdateCourse = lazy(() => import("./Compnents/admin/UpdateCourse"));
const AllCourses = lazy(() => import("./Compnents/admin/AllCourses"));
// const Footer = lazy(() => import("./Compnents/Footer"));
const BookeDemoClassSlotBookedPage = lazy(() => import("./Compnents/BookeDemoClassSlotBookedPage"));
const Courses = lazy(() => import("./Pages/Course"));
const ProtectedRoute = lazy(() => import("./Compnents/ProtectedRoute"));
const PageNotFound = lazy(() => import("./Compnents/PageNotFound"));

// Grade-specific components
const CBSE = lazy(() => import("./Compnents/grades/CBSE/Cbse"));
const Icse = lazy(() => import("./Compnents/grades/ICSE/Icse"));
const Igcse = lazy(() => import("./Compnents/grades/IGCSE/Igcse"));
const StateBoard = lazy(() => import("./Compnents/grades/STATEBOARD/StateBoard"));
const Foundation = lazy(() => import("./Compnents/grades/FOUNDATION/Foundation"));
const JeeNeet = lazy(() => import("./Compnents/grades/JEENEET/JeeNeet"));

const App = () => {
  return (
    // <Router> 
    <ReactLenis root options={{ smooth: true, duration: 1.2 }}>


      <Suspense fallback={<div>Loading...</div>}> 
        <Navbar /> 
        {/* <NavbarNew/> */}
        {/* <NavbarNew2/> */}
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/class" element={<CourseClassDetails />} />
          <Route path="/courses/course-filter" element={<CourseFilterOptions />} />
          <Route path="/courses/:id" element={<SingleCourseData />} />
          <Route path="/products" element={<Products />} />
          <Route path="/stemlab" element={<StemLab />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/courses/:id/bookdemoclass" element={<BookDemoClass />} /> */}
          <Route path="/know-more-info" element={<KnowMoreSection />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us-school" element={<SchoolContactForm />} />
          
          {/* Grade-specific routes */}
          <Route path="/cbse-info" element={<CBSE />} />
          <Route path="/igcse-info" element={<Igcse />} /> 
          <Route path="/icse-info" element={<Icse />} />
          <Route path="/state-board-info" element={<StateBoard />} />
          <Route path="/foundation-info" element={<Foundation />} />
          <Route path="/jee-neet-info" element={<JeeNeet />} />

          {/* Protected Routes */} 
            <Route path="/admin/course-dashboard/create-teacher" element={<CreateTeacher />} />



          <Route element={<ProtectedRoute />}>
            <Route path="/admin/course-dashboard/create-course" element={<CreateCourse />} />
            <Route path="/courses/:id/bookdemoclass" element={<BookDemoClass />} />
            <Route path="/courses/:id/bookdemoclass/book-demo-class-slot-booked-page" element={<BookeDemoClassSlotBookedPage />} />
            <Route path="/admin/course-dashboard/update-course/:id" element={<UpdateCourse />} />
            <Route path="/admin/course-dashboard/all-course" element={<AllCourses />} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
        <Footer/>
      </Suspense>
    </ReactLenis>


    // {/* </Router> */}
  );
};

export default App;
