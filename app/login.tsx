import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function Login() {
  const login = useAuthStore((s) => s.login);
  const signup = useAuthStore((s) => s.signup);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (e: any) {
      Alert.alert("Login failed", e.message);
    }
  };

  const handleSignup = async () => {
    try {
      await signup(email, password);
    } catch (e: any) {
      Alert.alert("Signup failed", e.message);
    }
  };

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 12, marginBottom: 12 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, padding: 12, marginBottom: 20 }}
      />

      <Button title="Login" onPress={handleLogin} />
      <View style={{ height: 12 }} />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
}
