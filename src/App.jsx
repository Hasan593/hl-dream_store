import { RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import router from "./Router/route";

function App() {
  return (
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
  );
}

export default App;
