import { useState } from "react";
import type { JwtPayload } from "@supabase/supabase-js";
import NavbarMain from "@/components/NavbarMain";
import CodeEditor from "@/components/CodeEditor";
import { UserAuth } from "@/context/AuthContext";
import ProfileCard from "@/components/ProfileCard";
import Dashboard from "@/components/Dashboard";
import LessonCard from "@/components/LessonCard";



const Home = () => {
  return (
    <div >
      <Dashboard />
    </div>
  );
};

export default Home;