"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import s from "./login.module.scss";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className={s.container}>
      <div className={s.card}>
        <h1 className={s.title}>Login</h1>
        <form className={s.loginForm}>
          <input
            id="email"
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            className={s.inputs}
          />
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            className={s.inputs}
          />
          <button type="submit" className={s.loginBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
