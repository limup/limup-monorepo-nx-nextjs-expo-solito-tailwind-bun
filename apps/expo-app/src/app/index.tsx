import { View, Text } from "react-native";
import { Link } from "solito/link";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Text className="text-2xl font-bold mb-4">Welcome to Solito + Nx + Bun</Text>
      <Link href="/users/1">
        <Text className="text-blue-600 underline">Go to User 1</Text>
      </Link>
      <Link href="/users/2">
        <Text className="text-blue-600 underline">Go to User 2</Text>
      </Link>
    </View>
  );
}
