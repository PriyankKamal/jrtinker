import { useState } from "react";
import "../../App.css";

const CreateCourse = () => {
  //   const [formData, setFormData] = useState({
  //     courseName: "",
  //     courseDescription: "",
  //     courseCategory: "",
  //     coursePrice: "",
  //     instructorName: "",
  //     courseRating: "",
  //     courseImages: [],
  //   });

  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [ageGroup, setAgeGroup] = useState({ min: "", max: "" });
  const [coursePrice, setCoursePrice] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [courseRating, setCourseRating] = useState("");
  const [courseImages, setCourseImages] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  // console.log("env: ",import.meta.env.VITE_CLODINARY_API_KEY);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("file is: ", file);
    setImagePreview(URL.createObjectURL(file));
    setCourseImages(file);

    handleCloudinaryImageUpload(e, file);
  };

  const handleCloudinaryImageUpload = async (e, file) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "jr-tinker");
    formData.append("cloud_name", "priyank-cloud");
    try {
      setImageLoading(true);
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/priyank-cloud/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        setImageLoading(false);
        const result = await response.json();
        
        // alert("Image Uploaded Successfully");
        setUploadedImageUrl(result.url);
      } else {
        alert("Image Upload Failed");
      }
    } catch (error) {
      console.log("Error in Image Upload: ", error);
      alert("Error in Image Upload");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:4600/admin/course-dashboard/create-course",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseName,
            courseDescription,
            courseDuration,
            ageGroup: {
              min: Number(ageGroup.min),
              max: Number(ageGroup.max),
            },
            coursePrice: Number(coursePrice),
            instructorName,
            courseRating: Number(courseRating),
            courseImage: uploadedImageUrl,
          }),
        }
      );
      if (response.ok) {
        alert("Course Created Successfully");
        setCourseName("");
        setCourseDescription("");
        setCourseDuration("");
        setAgeGroup({ min: "", max: "" });

        setCoursePrice("");
        setInstructorName("");
        setCourseRating("");
        setCourseImages(null);
        setImagePreview("");
        setUploadedImageUrl("");
      }
      // else{
      //   alert("Error in Course Creation");
      // }
    } catch (error) {
      console.log("Error in Course Creation: ", error);
      alert("Error in Course Creation");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 pt-60 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create a New Course
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Course Name */}
        <div className="space-y-1">
          <label className="label font-semibold">Course Name</label>
          <input
            type="text"
            name="courseName"
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:outline-0 focus:border-0"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>

        {/* Course Description */}
        <div className="space-y-1">
          <label className="label font-semibold">Course Description</label>
          <textarea
            name="courseDescription"
            className="textarea textarea-bordered resize-none w-full focus:ring-2 focus:ring-blue-500 focus:outline-0 focus:border-0"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
          />
        </div>

        {/* Course Duration */}
        <div className="space-y-1">
          <label className="label font-semibold">Course Duration</label>
          <input
            type="text"
            name="courseDuration"
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:outline-0 focus:border-0"
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
            required
          ></input>
        </div>
        {/* Age group MIN */}
        <div className="space-y-1">
          <label className="label font-semibold">Age Group (MIN)</label>
          <input
            type="text"
            name="courseDuration"
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:outline-0 focus:border-0"
            value={ageGroup.min}
            onChange={(e) =>
              setAgeGroup({ ...ageGroup, min: e.target.value })
            }
            required
          ></input>
        </div>
        {/* Age group MAX */}
        <div className="space-y-1">
          <label className="label font-semibold">Age Group (MAX)</label>
          <input
            type="text"
            name="courseDuration"
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:outline-0 focus:border-0"
            value={ageGroup.max}
            onChange={(e) =>
              setAgeGroup({ ...ageGroup, max: e.target.value })
            }
            required
          ></input>
        </div>

        {/* Course Price */}
        <div className="space-y-1">
          <label className="label font-semibold">Course Price (INR)</label>
          <input
            type="number"
            name="coursePrice"
            className="remove-arrow input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:outline-0 focus:border-0"
            value={coursePrice}
            onChange={(e) => setCoursePrice(e.target.value)}
          /> 
        </div>

        {/* Instructor Name */}
        <div className="space-y-1">
          <label className="label font-semibold">Instructor Name</label>
          <input
            type="text"
            name="instructorName"
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:outline-0 focus:border-0"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            required
          />
        </div>

        {/* Course Rating */}
        <div className="space-y-1">
          <label className="label font-semibold">Course Rating (0-5)</label>
          <input
            type="number"
            name="courseRating"
            className="remove-arrow input input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:outline-0 focus:border-0"
            value={courseRating}
            onChange={(e) => setCourseRating(e.target.value)}
            min="0"
            max="5"
            step="0.1"
            required
          />
        </div>

        {/* Course Images Upload */}
        <div className="space-y-1">
          <label className="label font-semibold">Upload Course Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="file-input file-input-bordered w-full focus:ring-2 focus:ring-blue-500 focus:outline-0 focus:border-0"
            onChange={handleImageChange}
          />
        </div>

        {/* Image Preview */}
        {/* <div className="flex gap-2 mt-2">
          {formData.courseImages.map((image, index) => (
            <img key={index} src={image} alt={`Course ${index}`} className="w-16 h-16 rounded-lg object-cover" />
          ))}
        </div> */}
        {imageLoading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {!imageLoading && imagePreview && (
          <img
            src={imagePreview}
            alt={`Course image`}
            className="w-16 h-16 rounded-lg object-cover"
          />
        )}

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
