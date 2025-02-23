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
      headers: {
        "Cache-Control": "no-store", // Prevent caching issues
      },
    });

    return response.data; // Return the course data
  } catch (error) {
    console.error("Error fetching course:", error.response?.status, error.message);
    return null; // Return null if not found or request fails
  }
}

async function getModules(id) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_EDU}/edu/modules/${id}/`, {
      headers: {
        "Cache-Control": "no-store", // Prevent caching issues
      },
    });

    return response.data; // Return the course data
  } catch (error) {
    console.error("Error fetching course:", error.response?.status, error.message);
    return null; // Return null if not found or request fails
  }
}

// ✅ Ensure `params` is handled correctly
export default async function CourseDetail({ params }) {
    const { id } = await params;
  if (!id || !id) {
    return notFound(); // Ensure `id` exists before using it
  }

   // Handle special characters in `id`
  const course = await getCourse(id); // Fetch course data
  const module = await getModules(id);

  if (!course) {
    return notFound(); // Show 404 if course doesn't exist
  }

  return (
    <div className="h-screen">
      <Header />
      <CourseDisplay course={course} />
      <Footer />
    </div>
  );
}
