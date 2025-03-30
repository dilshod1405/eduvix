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
        console.log(res.data);
        
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
    <div className="md:flex md:flex-row min-h-screen m-auto">
        <div className="p-5 md:p-10 bg-slate-200 rounded-md md:w-1/5 w-3/4 md:mt-10 m-auto md:sticky md:top-[170px]">
            <h2 className="md:text-xl text-lg font-bold mb-2 md:mb-4 text-slate-700 text-center">Kategoriya bo'yicha qidirish</h2>
            <div className="mb-4 md:mb-6">
                {categories.map(category => (
                <label key={category.id} className="flex items-center">
                    <Checkbox checked={selectedCategories.includes(category.name)} onChange={() => handleCategoryChange(category.name)} sx={{color: '#1e293b', '&.Mui-checked': {color: '#1e293b'}}}/>
                    <div className="ml-2 text-gray-700 md:text-lg text-sm font-semibold ">
                        {category.name}
                    </div>
                </label>
                ))}
            </div>
        </div>
        
        <div className="md:w-4/5 pt-5 md:pl-5 md:pr-5 md:mt-10 mt-5">
            <h2 className="md:text-4xl text-xl md:pt-0 font-bold text-center text-slate-500">Hozirda mavjud o'quv kurslar</h2>
            <Card filteredSpecialities={filteredSpecialities} loading={loading}/>
        </div>
    </div>
  );
}
