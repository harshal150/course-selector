import React from "react";
// import { filterData } from "../data";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

 function filterHandler(title){
  setCategory(title);
 }
  return (
    <div className="w-11/12 flex  max-w-max space-x-15 gap-y-2 mx-auto py-4 justify-center">
      <div>
        {filterData.map((data) => (
          <button
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 mx-2 py-2.5 text-center me-2 mb-2"
            key={data.id}
            onClick={()=> filterHandler(data.title)}
          >
            {data.title}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Filter;
