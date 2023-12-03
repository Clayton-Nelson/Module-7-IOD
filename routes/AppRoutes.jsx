import { Routes, Route } from "react-router";
import BitcoinRatesPage from "../pages/BitcoinRatesPage";
import Homepage from "../pages/Homepage";
import PageNotFound from "../pages/PageNotFound";
import DashboardPage from "../pages/DashboardPage";
import { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import MUIHomepage from "../pages/MUIHomepage";
import MUIBitcoinRatesPage from "../pages/MUIBitcoinRatesPage";
import MUIDashboardPage from "../pages/MUIDashboardPage";
import {
  MUIDashboardMessages,
  MUIDashboardTasks,
} from "../pages/MUIDashboardPage";
import MUIPageNotFound from "../pages/MUIPageNotFound";

function AppRoutes(props) {
  const isMUICurrentPath = props.match?.path.includes("MUI/");
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} /> {/*This is the beginning of exercise 4's routes*/}

      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>

      <Route path="/bitcoinrates" element={<BitcoinRatesPage {...props} />} />

      <Route path="*" element={isMUICurrentPath ? <MUIPageNotFound /> : <PageNotFound />}/> {/*This is the end of exercise 4's routes*/}
      {/*When i first created the MUIPageNotFound i just copied the original PageNotFound line and added MUI/ like with MUI/dash and MUI/bitcoinrates*/}
      {/*This didnt work so i just wrote a line detecting wether MUI/ was in the current webaddress and if so then use MUIPageNotFound instead of PageNotFound*/}

      <Route path="MUI" element={<MUIHomepage {...props} />} /> {/*This is the beginning of exercise 5's routes*/}

      <Route path="MUI/dash" element={<MUIDashboardPage {...props} />}>
        <Route path="messages" element={<MUIDashboardMessages />} />
        <Route path="tasks" element={<MUIDashboardTasks />} />
      </Route>

      <Route path="MUI/bitcoinrates" element={<MUIBitcoinRatesPage {...props} />} />{/*This is the end of exercise 5's routes*/}

    </Routes>
  );
}

export default AppRoutes;
