import { Route } from "wouter";
import "./App.css";

import LivechatChatDetails from "./pages/Livechat/ChatDetails";
import LivechatFullscreen from "./pages/Livechat/Fullscreen";
import LivechatMessageBox from "./pages/Livechat/MessageBox";
import LivechatAppSettings from "./pages/Livechat/AppSettings";

import HelpdeskTicketDetails from "./pages/Helpdesk/TicketDetails";
import HelpdeskFullscreen from "./pages/Helpdesk/Fullscreen";
import HelpdeskAppSettings from "./pages/Helpdesk/AppSettings";

import AppRoute from "./routes";

function App() {
  return (
    <div className="App">
      <Route
        path={AppRoute.LivechatChatDetails}
        component={LivechatChatDetails}
      />
      <Route
        path={AppRoute.LivechatMessageBox}
        component={LivechatMessageBox}
      />
      <Route
        path={AppRoute.LivechatFullscreen}
        component={LivechatFullscreen}
      />
      <Route
        path={AppRoute.LivechatAppSettings}
        component={LivechatAppSettings}
      />

      <Route
        path={AppRoute.HelpDeskTicketDetails}
        component={HelpdeskTicketDetails}
      />
      <Route
        path={AppRoute.HelpDeskFullscreen}
        component={HelpdeskFullscreen}
      />
      <Route
        path={AppRoute.HelpDeskAppSettings}
        component={HelpdeskAppSettings}
      />
    </div>
  );
}

export default App;
