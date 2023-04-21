import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div className="text-gray-500 m-5 lg:w-9/12 sm:w-5/6 w-11/12 h-full mx-auto ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
