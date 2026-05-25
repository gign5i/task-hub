import type {Metadata} from "next";
import {Dashboard} from "@/app/dashboard/Dashboard";

export const metadata: Metadata = {
  title: "dashboard",
};

export default function DashboardPage() {
  return <Dashboard />;
}
