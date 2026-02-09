// src/app/(auth)/login/page.tsx
import { AuthForm } from "@/components/AuthForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center premium-gradient-bg p-4">
      <div className="glass-card p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border-none relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gradient mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Identify Verification Required</p>
        </div>

        <AuthForm type="login" />
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-medium">
            New to the ecosystem?{" "}
            <Link href="/register" className="text-indigo-500 font-black hover:text-indigo-400 transition-colors underline-offset-4 hover:underline">
              Create Identity
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}