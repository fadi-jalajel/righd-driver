import { authService } from "@/src/auth/authService";
import { Button, Text, View } from "react-native";

export default function Index() {
  const testSignup = async () => {
    const user = await authService.signUp("test1@righd.com", "password123");
    console.log("SIGNED UP:", user);
  };

  const testLogin = async () => {
    const user = await authService.signIn("test1@righd.com", "password123");
    console.log("SIGNED IN:", user);
  };

  return (
    <View style={{ padding: 40 }}>
      <Text>Auth Test</Text>

      <Button title="Test Sign Up" onPress={testSignup} />
      <Button title="Test Sign In" onPress={testLogin} />
    </View>
  );
}
