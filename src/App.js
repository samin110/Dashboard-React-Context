import Sidebar from "./Components/Sidebar/Sidebar";
import styles from "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalDashboardPage from "./Pages/Dashboards/Personal/PersonalDashboardPage";
import AnalyticsDashboardPage from "./Pages/Dashboards/Analytics/AnalyticsDashboardPage";
import HiringDashboardPage from "./Pages/Dashboards/Hiring/HiringDashboardPage";
import HRDashboardPage from "./Pages/Dashboards/HumanResources/HRDashboardPage";

import { useContextApp } from "./Context/ContextApp";

import MobileMenu from "./Components/MobileMenu/MobileMenu";

function App() {
  const { isShowDrawerMenu } = useContextApp();

  return (
    <div className={styles.wrapper}>
      <MobileMenu />
      <BrowserRouter>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div
          className={styles.container_pages}
          style={
            isShowDrawerMenu.dashboards || isShowDrawerMenu.apps || isShowDrawerMenu.list || isShowDrawerMenu.charts
              ? { marginRight: "21.2rem", width: "calc(100% - 21.2rem)" }
              : {}
          }
        >
          <div className={styles.pages}>
            <Routes>
              <Route path='/' element={<PersonalDashboardPage />} />
              <Route path='/analytics' element={<AnalyticsDashboardPage />} />
              <Route path='/hiring' element={<HiringDashboardPage />} />
              <Route path='/human-resource' element={<HRDashboardPage />} />
              {/* <Route path='/dashboards'>
                <Route path='personal' element={<PersonalDashboardPage />} />
                <Route path='video' element={<VideoDashboardPage />} />
                <Route path='football' element={<FootballDashboardPage />} />
                <Route path='shop' element={<ShopDashboardPage />} />
              </Route>
              <Route path='/apps'>
                <Route path='accounting' element={<AccountingPage />} />
                <Route path='map' element={<MapPage />} />
                <Route path='chat' element={<ChatPage />} />
              </Route>
              <Route path='/list'>
                <Route path='list-of-data' element={<ListOfDataPage />} />
                <Route path='data-table' element={<DataTablePage />} />
                <Route path='user-profile' element={<UserProfilePage />} />
              </Route> */}
              <Route>{/* Charts */}</Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
