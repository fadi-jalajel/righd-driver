import { useAuthStore } from "@/store/authStore";
import { Redirect } from "expo-router";

export default function Index() {
  const { user, loading } = useAuthStore();

  if (loading) return null;

  if (!user) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/home" />;
}
