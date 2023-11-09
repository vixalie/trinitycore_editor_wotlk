import { Outlet } from "react-router-dom";
import classes from "./App.module.css";
import SideNavigations from "./components/navigations/SideNavigations";

function App() {
  return (
    <div className={[classes["app_layout"]]}>
      <nav className={[classes["root_navigation"]]}>
        <SideNavigations />
      </nav>
      <section className={[classes["content_section"]]}>
        <Outlet />
      </section>
    </div>
  );
}

export default App;
