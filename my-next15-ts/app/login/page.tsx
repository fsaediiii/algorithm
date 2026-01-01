"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type LoginForm = {
  username: string;
  password: string;
};

const FAKE_USER = {
  username: "admin",
  password: "admin",
  token: "xyz",
};

const Login = () => {
  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      document.cookie = `access_token=${FAKE_USER.token}; path=/`;
      router.replace("/");
      setLoading(false);
    }, 400);
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-3xl p-8 shadow-xl"
        style={{ backgroundColor: "#E6F9D9" }}
      >
        <h1 className="mb-6 text-center text-2xl font-bold" style={{ color: "#3A4E2B" }}>
          ورود به حساب کاربری
        </h1>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium" style={{ color: "#3A4E2B" }}>
            نام کاربری
          </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="admin"
            className="w-full rounded-lg border px-3 py-2 text-sm"
            style={{
              backgroundColor: "#E6F9D9",
              borderColor: "#B7E17E",
              color: "#3A4E2B",
            }}
            required
          />
        </div>

        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium" style={{ color: "#3A4E2B" }}>
            رمز عبور
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="admin"
            className="w-full rounded-lg border px-3 py-2 text-sm"
            style={{
              backgroundColor: "#E6F9D9",
              borderColor: "#B7E17E",
              color: "#3A4E2B",
            }}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg py-2 text-white transition"
          style={{
            backgroundColor: "#B7E17E",
          }}
          onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "#F6B28B")}
          onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = "#B7E17E")}
        >
          {loading ? "در حال ورود..." : "ورود"}
        </button>

        <p className="mt-4 text-center text-xs" style={{ color: "#3A4E2B" }}>
          ورود بدون اعتبارسنجی (فقط تست)
        </p>
      </form>
    </div>
  );
};

export default Login;
