import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import DashboardPage from "./pages/dashboard/dashboard-page";
import TasksPage from "./pages/tasks/tasks-page";
import MentorsPage from "./pages/mentors/mentors-page";
import MessagesPage from "./pages/messages/messages-page";
import SettingsPage from "./pages/settings/settings-page";
import MianLayoutComponent from "./shared/Layouts/mian-layout.component";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MianLayoutComponent />} >
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
