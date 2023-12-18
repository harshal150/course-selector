import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards"
import Spinner from "./Components/Spinner"
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";


const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading , setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title)
  async function fetchData() {
    setLoading(true);
    try {
      const responce = await fetch(apiUrl);
      let output = await responce.json();
      setCourses(output.data);
    } catch { 
      toast.error("Network me dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex flex-row content-center ">
        <Filter filterData={filterData}
        category = {category}
        setCategory = {setCategory}></Filter>
      </div>
      <div className="w-11/12 max-w-[1200] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>):(<Cards courses = {courses} category = {category}/>)
        }
      </div>
        
  
    </div>
  );
};

export default App;
