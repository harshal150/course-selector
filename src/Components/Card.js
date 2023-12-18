import React from "react";
import { FcLike , FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandlerFunction(){
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter(((cid)=> cid !== course.id)));
      toast.warning("Like Removed");
    }
    else {
      if(likedCourses.length === 0){
        setLikedCourses([course.id])
      }
      else{
        setLikedCourses((prev)=> [...prev , course.id])
      }
      toast.success("Liked Successfully");

    }
  }
  return (
    <div className="max-w-xs bg-white border border-blue-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <img className="rounded-t-lg" src={course.image.url} alt="" />
        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-1 grid place-items-center">
          <button onClick={clickHandlerFunction}>
            {
              likedCourses.includes(course.id) ? (<FcLike  fontSize="1.50rem"/>) : (<FcLikePlaceholder/>) 
            } 
          </button>
        </div>
      </div>
      <div>
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-2 mt-2">
          {course.title}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-serif mx-2 mt-2">
          {course.description}
        </p>
      </div>
    </div>
  );
};
export default Card;
