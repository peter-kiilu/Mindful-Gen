// src/app/(auth)/register/page.tsx
import { AuthForm } from "@/components/AuthForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center premium-gradient-bg p-4">
      <div className="glass-card p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border-none relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gradient mb-2">
            Join the Ecosystem
          </h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Initialization Protocol 2026</p>
        </div>

        <AuthForm type="register" />
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Existing identity found?{" "}
            <Link href="/login" className="text-indigo-500 font-black hover:text-indigo-400 transition-colors underline-offset-4 hover:underline">
              Synchronize here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}