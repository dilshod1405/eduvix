import Banner from "@/app/_components/banner/Banner";
import Footer from "@/app/_components/footer/Footer";
import Header from "@/app/_components/header/Header";
import axios from "axios";
import { notFound } from "next/navigation";
import CourseDisplay from "../CourseDetail";

// ✅ Fetch course data from API using Axios
async function getCourse(id) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_EDU}/content/specialities/${id}/`, {
      headers: { "Cache-Control": "no-store" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching course:", error.response?.status, error.message);
    return null;
  }
}

// ✅ Fetch modules data
async function getModules() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_EDU}/content/modules/`, {
      headers: { "Cache-Control": "no-store" },
    });
    return response.data; // Ensure this is an array
  } catch (error) {
    console.error("Error fetching modules:", error.response?.status, error.message);
    return null;
  }
}

async function getLessons() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_EDU}/content/lessons/`, {
      headers: { "Cache-Control": "no-store" },
    });
    return response.data; // Ensure this is an array
  } catch (error) {
    console.error("Error fetching modules:", error.response?.status, error.message);
    return null;
  }
}

export default async function CourseDetail({ params }) {
  const { id } = params;

  // ✅ Check if ID is valid
  if (!id || isNaN(id)) {
    return notFound();
  }

  // Fetch data
  const course = await getCourse(id);
  const modules = await getModules(id);
  const lessons = await getLessons(id);

  // ✅ Check if course data is valid
  if (!course) {
    return notFound();
  }
  // ✅ Check if modules and lessons data are valid
  if (!modules || !Array.isArray(modules) || modules.length === 0) {
    return notFound();
  }
  if (!lessons || !Array.isArray(lessons) || lessons.length === 0) {
    return notFound();
  }
  // ✅ Filter modules and lessons based on course ID
  const filteredModules = modules.filter(
    (module) => String(module.speciality) === String(id)
  );
  
  const filteredLessons = lessons.filter(
    (lesson) => String(lesson.module?.speciality) === String(id)
  );
  

  return (
    <div className="">
      <Header />
      <CourseDisplay course={course} filteredModules={filteredModules} filteredLessons={filteredLessons}/>
      <Footer />
    </div>
  );
}
