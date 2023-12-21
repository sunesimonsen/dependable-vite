import { saveSession, restoreSession } from "@dependable/session";

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeFullReload", () => {
    saveSession();
  });

  try {
    restoreSession();
  } catch {
    // Ignore
  }
}
