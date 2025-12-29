import { useAuthStore } from "@/store/authStore";
import { Button, Text, View } from "react-native";

export default function Home() {
  const logout = useAuthStore((s) => s.logout);

  return (
    <View style={{ padding: 40 }}>
      <Text>Home</Text>

      <Button title="Logout" onPress={logout} />
    </View>
  );
}
