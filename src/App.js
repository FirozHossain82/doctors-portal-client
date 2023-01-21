 import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-teal-50 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
