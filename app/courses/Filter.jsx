'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Checkbox from '@mui/material/Checkbox';

export default function FilterComponent() {
  const [categories, setCategories] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [filteredSpecialities, setFilteredSpecialities] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch categories
    axios.get(`${process.env.NEXT_PUBLIC_API_URL_EDU}/edu/categories/`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));

    // Fetch all specialities
    axios.get(`${process.env.NEXT_PUBLIC_API_URL_EDU}/edu/specialities/`)
      .then((res) => {
        setSpecialities(res.data);
        setFilteredSpecialities(res.data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching specialities:", err));
  }, []);

  // Handle category selection
  const handleCategoryChange = (categoryName) => {
    let updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(categoryName)) {
      updatedCategories = updatedCategories.filter(name => name !== categoryName);
    } else {
      updatedCategories.push(categoryName);
    }

    setSelectedCategories(updatedCategories);

    // Filter specialities based on category selection
    if (updatedCategories.length === 0) {
      setFilteredSpecialities(specialities); // Show all if none selected
    } else {
      setFilteredSpecialities(
        specialities.filter(speciality => updatedCategories.includes(speciality.category.name))
      );
    }
  };

  return (
    <div className="md:flex md:flex-row">
        <div className="p-5 md:p-10 bg-indigo-50 rounded-md md:w-1/4 w-3/4 md:mt-10 mt-5 m-auto md:sticky md:top-20">
            <h2 className="md:text-xl text-lg font-bold mb-2 md:mb-4 text-indigo-500 text-center">Kategoriya bo'yicha qidirish</h2>
            <div className="mb-4 md:mb-6">
                {categories.map(category => (
                <label key={category.id} className="flex items-center">
                    <Checkbox checked={selectedCategories.includes(category.name)} onChange={() => handleCategoryChange(category.name)} sx={{color: '#3F51B5', '&.Mui-checked': {color: '#3F51B5'}}}/>
                    <div className="ml-2 text-gray-700 md:text-lg text-sm font-semibold ">
                        {category.name}
                    </div>
                </label>
                ))}
            </div>
        </div>
        
        <div className="md:w-3/4 md:mx-auto pt-5 md:pl-10 md:pr-10 block m-auto md:mt-10 mt-5">
            <h2 className="md:text-4xl text-xl md:pt-0 font-bold text-center text-indigo-500">Hozirda mavjud o'quv kurslar</h2>
            <Card filteredSpecialities={filteredSpecialities} loading={loading}/>
        </div>
    </div>
  );
}
