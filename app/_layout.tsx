import { useAuthStore } from "@/store/authStore";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const bootstrap = useAuthStore((s) => s.bootstrap);

  console.log("useAuthStore:", useAuthStore);

  useEffect(() => {
    bootstrap();
  }, []);

  return <Stack />;
}
