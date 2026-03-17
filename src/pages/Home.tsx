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
      
<LessonCard 
  name="If / Else" 
  description="Conditional statements and logic" 
  level="10" 
  progress={50} 
  color="bg-blue-600/20 border-blue-500" 
/>

      <LessonCard 
        name="Cycles" 
        description="Fundamnets of cycles" 
        level="10" 
        progress="50" 
        color="bg-purple-600/20 border-purple-500" 
      />

      <LessonCard 
        name="Variables" 
        description="Types of data and variables" 
        level="4" 
        progress="90" 
        color="bg-green-600/20 border-green-500" 
      />

    </div>
  );
};

export default Home;