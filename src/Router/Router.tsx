import Aboutpage from "@/components/About/Aboutpage";
import Homepage from "@/components/Home/Homepage";
import NotFound from "@/components/Notfound";
import Menupage from "@/components/Page/Menupage";
import Reservation from "@/components/Reservation/Reservationpage";
import MainLayout from "@/layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "about",
          element: <Aboutpage />,
        },
        {
          path: "menus",
          element: <Menupage />,
        },
        {
          path: "reservation",
          element: <Reservation />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
