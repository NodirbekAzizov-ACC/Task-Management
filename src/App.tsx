import Sidebar from "./shared/components/sidebar/sidebar.component"
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import DashboardPage from "./pages/home/dashboard-page";
import TasksPage from "./pages/tasks/tasks-page";
import MentorsPage from "./pages/mentors/mentors-page";
import MessagesPage from "./pages/messages/messages-page";
import SettingsPage from "./pages/settings/settings-page";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />} >
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={ <DashboardPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
