import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  // return React.createElement(
  //   "div", //element
  //   {}, //attributes
  //   [
  //     React.createElement("h1", {}, "Adop Me!"),
  //     React.createElement(Pet, {
  //       animal: "Dog",
  //       name: "Juanjo",
  //       breed: "Yorki",
  //     }),
  //     React.createElement(Pet, {
  //       animal: "Cat",
  //       name: "Samuel",
  //       breed: "Mixed",
  //     }),
  //     React.createElement(Pet, {
  //       animal: "Dog",
  //       name: "Emma",
  //       breed: "Shitzu",
  //     }),
  //   ] //children
  // );

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
