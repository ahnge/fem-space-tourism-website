import Nav from "./componants/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componants/homePage/Home";
import Destination from "./componants/destinationPage/Destination";
import Crew from "./componants/CrewPage/Crew";
import Tech from "./componants/techPage/Tech";
import Moon from "./componants/destinationPage/Moon";
import Mars from "./componants/destinationPage/Mars";
import Europa from "./componants/destinationPage/Europa";
import Titan from "./componants/destinationPage/Titan";
import Douglas from "./componants/CrewPage/Douglas";
import Mark from "./componants/CrewPage/Mark";
import Victor from "./componants/CrewPage/Victor";
import Ansari from "./componants/CrewPage/Ansari";
import LaunchVehicle from "./componants/techPage/LaunchVehicle";
import SpaceCapsule from "./componants/techPage/SpaceCapsule";
import Spaceport from "./componants/techPage/Spaceport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}>
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="/crew" element={<Crew />}>
          <Route path="douglas" element={<Douglas />} />
          <Route path="mark" element={<Mark />} />
          <Route path="victor" element={<Victor />} />
          <Route path="ansari" element={<Ansari />} />
        </Route>
        <Route path="/tech" element={<Tech />}>
          <Route path="launchvehicle" element={<LaunchVehicle />} />
          <Route path="spaceport" element={<Spaceport />} />
          <Route path="spacecapsule" element={<SpaceCapsule />} />
        </Route>
      </Routes>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
