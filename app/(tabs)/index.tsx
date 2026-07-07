import "@/global.css";
import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/test" className="mt-4 rounded bg-black text-white p-4">
        Go to Test Page
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-black text-white p-4">
        Go to Sign in
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-black text-white p-4">
        Go to Sign Up
      </Link>
    </View>
  );
}


// APP IDEAS:
// ¨¨¨¨¨¨¨¨¨¨
// 1. A daily habit tracker that allows users to add habits, mark them as complete, and view their progress.
// 2. A alarm clock app with barcode scanning.
// 3. A simple to-do list app with the ability to add, edit, and delete tasks.
// 4. A Grocery list app that allows users to add items, categorize them by customizable store layout, and check them off as they shop.
// 5. A link hub app that allows users to save and organize links for videos, websites and posts.
