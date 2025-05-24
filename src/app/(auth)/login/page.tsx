// src/app/(auth)/login/page.tsx
import { AuthForm } from "@/components/AuthForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="p-8 rounded-lg shadow-lg bg-white w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Welcome Back!
        </h1>
        <AuthForm type="login" />
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}