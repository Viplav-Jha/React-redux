import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CourseList from "../CourseList";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/enquiries">Enquiries</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact>
          <CourseList courses={coursesData} />
        </Route>
      </div>
    </Router>
  );
}

const coursesData = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React.",
  },
  {
    id: 2,
    title: "Intermediate React",
    description: "Dive deeper into React concepts.",
  },
];

export default App;
