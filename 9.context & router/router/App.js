
// to nie działało
// export default function BasicExample() {
//     return (
    //       <BrowserRouter>
    //         <Routes>
    //           <Route path="/" element={<Home dupa={-3} />}>
//             <Route path="about" element={<About />} />
//             <Route path="dashboard" element={<Navigate to="dashboards" />}>
//               <Route path=":id" element={<Dashboard />} />
//             </Route>
//             <Route path="dashboards" element={<DashboardList />} />
//             {/* <Route path="*" element={<Navigate to="/" />} /> */}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   }

import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Link,
  useParams,
  Navigate,
} from "react-router-dom";

export default function BasicExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home dupa={-3} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={<Navigate to="/dashboards" />}
        ></Route>
        <Route path="/dashboards" element={<DashboardList />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

function DashboardList() {
  return (
    <>
      <Link to="/dashboard/1">idziemy do dashboarda 1</Link>
      <br />
      <Link to="/dashboard/2">idziemy do dashboarda 2</Link>
    </>
  );
}

function Home({ dupa }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home {dupa}</h2>
      <button onClick={() => navigate("/about")}>GO TO ABOUT</button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  const params = useParams();
  return (
    <div>
      <h2>Dashboard o id {params.id}</h2>
    </div>
  );
}
