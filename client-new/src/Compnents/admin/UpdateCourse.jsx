import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../../App.css";

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [course, setCourse] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [courseImages, setCourseImages] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [uploadFailed,setUploadFailed] = useState(false);
  const [uploadSuccess,setUploadSuccess] = useState(false);


  const handleCloudinaryImageUpload = async (e, file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "jr-tinker");
    formData.append("cloud_name", "priyank-cloud");

    try {
      setImageLoading(true);
      const response = await fetch("https://api.cloudinary.com/v1_1/priyank-cloud/image/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setUploadedImageUrl(result.url);
        setUploadFailed(false)
        setUploadSuccess(true)
        toast.success("Image uploaded successfully");
      } else {
        toast.error("Image upload failed");
        setUploadFailed(true)
        setUploadSuccess(false)
      }
    } catch (error) {
      toast.error("Error uploading image");
    } finally {
      setImageLoading(false);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setCourseImages(file);
    setImagePreview(URL.createObjectURL(file));

    await handleCloudinaryImageUpload(e, file);
  };

  const singleCourse = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:4600/admin/course-dashboard/single-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId: id }),
      });

      if (response.ok) {
        const result = await response.json();
        setCourse(result.course);
        setImagePreview(result.course.courseImage);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    singleCourse();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const courseData = {
      id,
      ...Object.fromEntries(formData.entries()),
      courseImage: uploadedImageUrl || course.courseImage,
      ageGroup: {
        min: Number(formData.get("ageGroup.min")),
        max: Number(formData.get("ageGroup.max")),
      },
    };

    delete courseData["ageGroup.min"];
    delete courseData["ageGroup.max"];
    console.log("course data: is: ",courseData)

    try {
      const response = await fetch("http://localhost:4600/admin/course-dashboard/update-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error("Failed to update course")
      }else{

        toast.success("Course updated successfully");
        navigate("/admin/course-dashboard/all-course")
      }

      // navigate("/courses");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-primary w-12 h-12"></span>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-24 pt-64">
      <div className="max-w-3xl mx-auto bg-white shadow-md p-8 rounded-2xl border">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Update Course</h1>
        {course && (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-medium text-xl text-cyan-800">Course Name</label>
              <input
                type="text"
                name="courseName"
                defaultValue={course.courseName}
                required
                className="input input-bordered w-full mt-2 text-lg px-3 py-6 text-cyan-600"
              />
            </div>

            <div>
              <label className="font-medium text-xl text-cyan-800">Instructor Name</label>
              <input
                type="text"
                name="instructorName"
                defaultValue={course.instructorName}
                required
                className="input input-bordered w-full mt-2 text-lg px-3 py-6 text-cyan-600"
              />
            </div>

            <div>
              <label className="font-medium text-xl text-cyan-800">Course Duration</label>
              <input
                type="text"
                name="courseDuration"
                defaultValue={course.courseDuration}
                required
                className="input input-bordered w-full mt-2 text-lg px-3 py-6 text-cyan-600"
              />
            </div>

            <div>
              <label className="font-medium text-xl text-cyan-800">Course Rating</label>
              <input
                type="number"
                name="courseRating"
                min="1"
                max="5"
                defaultValue={course.courseRating}
                className="input input-bordered w-full mt-2 text-lg px-3 py-6 text-cyan-600"
              />
            </div>

            <div>
              <label className="font-medium text-xl text-cyan-800">Course Price</label>
              <input
                type="number"
                name="coursePrice"
                defaultValue={course.coursePrice}
                className="input input-bordered w-full mt-2 text-lg px-3 py-6 text-cyan-600"
              />
            </div>

            <div>
              <label className="font-medium text-xl text-cyan-800">Course Image</label>
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full mt-2"
                onChange={handleImageChange}
              />
              {imageLoading && <p className="text-sm mt-2 text-yellow-600">Uploading image...</p>}
              
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Course Preview"
                  className="mt-4 rounded-md w-40 h-40 object-cover"
                />
              )}
              {uploadFailed && <p className="text-sm mt-2 text-red-600">Image not uploaded</p>}
              {uploadSuccess && <p className="text-sm mt-2 text-green-600">Image uploaded successfully</p>}
            </div>

            <div>
              <label className="font-medium text-xl text-cyan-800">Min Age</label>
              <input
                type="number"
                name="ageGroup.min"
                min="1"
                defaultValue={course.ageGroup?.min}
                required
                className="input input-bordered w-full mt-2 text-lg px-3 py-6 text-cyan-600"
              />
            </div>

            <div>
              <label className="font-medium text-xl text-cyan-800">Max Age</label>
              <input
                type="number"
                name="ageGroup.max"
                min="1"
                defaultValue={course.ageGroup?.max}
                required
                className="input input-bordered w-full mt-2 text-lg px-3 py-6 text-cyan-600"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-medium text-xl text-cyan-800">Description</label>
              <textarea
                name="courseDescription"
                defaultValue={course.courseDescription}
                required
                rows="4"
                className="textarea textarea-bordered w-full mt-2 text-lg px-3 py-6 text-cyan-600"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="btn bg-cyan-800 w-full mt-4 text-xl text-white font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update Course"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default UpdateCourse;
