import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import { appRoute } from "./app-route";
import { theme } from "./theme";

export function BootLoader() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications autoClose={5000} />
      <ModalsProvider>
        <RouterProvider router={appRoute} />
      </ModalsProvider>
    </MantineProvider>
  );
}
