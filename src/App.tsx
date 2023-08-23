import { Route } from "wouter";
import "./App.css";

import LivechatCustomerDetails from "./pages/Livechat/ChatDetails";
import LivechatFullScreen from "./pages/Livechat/FullScreen";
import LivechatMessageBox from "./pages/Livechat/MessageBox";
import LivechatAppSettings from "./pages/Livechat/AppSettings";

import HelpdeskTicketDetails from "./pages/Helpdesk/TicketDetails";
import HelpdeskFullScreen from "./pages/Helpdesk/FullScreen";
import HelpdeskSettings from "./pages/Helpdesk/AppSettings";

import AppRoute from "./routes";

function App() {
  return (
    <div className="App">
      <Route
        path={AppRoute.LivechatCustomerDetails}
        component={LivechatCustomerDetails}
      />
      <Route
        path={AppRoute.LivechatMessageBox}
        component={LivechatMessageBox}
      />
      <Route
        path={AppRoute.LivechatFullscreen}
        component={LivechatFullScreen}
      />
      <Route path={AppRoute.LivechatSettings} component={LivechatAppSettings} />

      <Route
        path={AppRoute.HelpDeskTicketDetails}
        component={HelpdeskTicketDetails}
      />
      <Route
        path={AppRoute.HelpDeskFullscreen}
        component={HelpdeskFullScreen}
      />
      <Route path={AppRoute.HelpDeskSettings} component={HelpdeskSettings} />
    </div>
  );
}

export default App;
