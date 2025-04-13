import Banner from "@/app/_components/banner/Banner";
import Footer from "@/app/_components/footer/Footer";
import Header from "@/app/_components/header/Header";
import axios from "axios";
import { notFound } from "next/navigation";
import CourseDisplay from "../CourseDetail";

// ✅ Fetch course data from API using Axios
async function getCourse(id) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_EDU}/edu/specialities/${id}/`, {
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
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_EDU}/edu/modules/`, {
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
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_EDU}/edu/lessons/`, {
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

  if (!course) {
    return notFound();
  }

  // ✅ Wrap single object in an array
  const moduleArray = Array.isArray(modules) ? modules : [modules];

  // ✅ Now filter correctly
  const filteredModules = moduleArray.filter(
    (module) => module.speciality.id === course.id
  );

  const filteredLessons = lessons.filter(
    (lesson) => lesson.module.speciality.id === course.id
  );

  return (
    <div className="">
      <Header />
      <CourseDisplay course={course} filteredModules={filteredModules} filteredLessons={filteredLessons}/>
      <Footer />
    </div>
  );
}
