import express from "express";
import {
  addBlog,
  addComment,
  deleteBlogbyId,
  generateContent,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublish,
} from "../controllers/BlogContoller.js";
import upload from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";

const blogRouter = express.Router();

//we are writting .single because we will upload a singe image and property of that image will be image name
blogRouter.post("/add", auth, upload.single("image"), addBlog);
blogRouter.get("/get-all-blogs", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete", auth, deleteBlogbyId);
blogRouter.post("/toggle", auth, togglePublish);

blogRouter.post("/add-comment", addComment);
blogRouter.post("/get-comments", getBlogComments);
blogRouter.post("/generate", auth, generateContent);

export default blogRouter;
