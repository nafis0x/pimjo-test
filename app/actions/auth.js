"use server";
import { pool } from "@/lib/db";
import { SERVER_LINK } from "@/lib/urls";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET;

//register
export async function signupAction(formData) {
  const cookiesStore = await cookies();
  const email = formData.email;
  const password = formData.password;
  const name = formData.fullName;

  const res = await pool.query("SELECT id FROM users WHERE email=$1", [email]);
  if (res.rows.length > 0) return { success: false, message: "Email exists" };

  const hashed = await bcrypt.hash(password, 10);
  await pool.query(
    "INSERT INTO users (email, password, name) VALUES ($1, $2, $3)",
    [email, hashed, name]
  );

  const token = jwt.sign({ email: email }, JWT_SECRET, {
    expiresIn: "7d",
  });

  cookiesStore.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return { success: true, message: "Signup successful" };
}

//login
export async function loginAction(formData) {
  const cookiesStore = await cookies();
  const email = formData.email;
  const password = formData.password;

  const res = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  const user = res.rows[0];
  if (!user) return { success: false, message: "Invalid credentials" };

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return { success: false, message: "Invalid credentials" };

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "7d",
  });

  cookiesStore.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return { success: true, message: "Login successful" };
}

//get my data
export async function fetchUserAction() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;

  if (!token)
    return { success: false, message: "Not authenticated", user: null };

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const res = await pool.query(
      "SELECT id, email, name, created_at FROM users WHERE email=$1",
      [decoded.email]
    );
    const user = res.rows[0];
    if (!user) return { success: false, message: "User not found", user: null };
    return { success: true, user };
  } catch (err) {
    return { success: false, message: "Invalid token", user: null };
  }
}

//logout
export async function logoutAction() {
  const cookiesStore = await cookies();
  cookiesStore.delete("token", { path: "/" });
  return { success: true, message: "Logged out successfully" };
}

//delete user data
export async function deleteUsers(id) {
  console.log("user delete id:", id);
  try {
    const response = await fetch(`${SERVER_LINK}/users/${id}`, {
      method: "DELETE",
    });

    console.log("user delete:", await response.json());
    if (!response.ok) {
      return {
        success: false,
        data: "can not delete the user",
      };
    }

    const data = await response.json();
    if (data) {
      return {
        success: true,
        data: data,
      };
    }

    return {
      success: false,
      data: [],
    };
  } catch (error) {
    console.log("Error : ", error);
    return {
      success: false,
      error: "Network error or server unavailable",
    };
  }
}
