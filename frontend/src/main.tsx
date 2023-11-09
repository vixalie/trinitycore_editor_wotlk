/* Mantine styles */
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

/* Custom styles */
import "./index.css";

import { ColorSchemeScript } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BootLoader } from "./BootLoader";
import { EventBusContext, eventBus } from "./EventBus";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EventBusContext.Provider value={eventBus}>
      <ColorSchemeScript defaultColorScheme="dark" />
      <BootLoader />
    </EventBusContext.Provider>
  </React.StrictMode>
);
