import React from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import ListBlog from "./pages/admin/ListBlog";
import Comment from "./pages/admin/Comment";
import AddBlog from "./pages/admin/AddBlog";
import Login from "./components/admin/Login";
import 'quill/dist/quill.snow.css';
import {Toaster} from 'react-hot-toast'
import { useAppContext } from "./context/AppContext";

const App = () => {
  const {token}=useAppContext();
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Admin routes */}
        <Route path="/admin" element={token ?<Layout /> :<Login/>}>
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="listBlog" index element={<ListBlog />} />
          <Route path="addBlog" index element={<AddBlog />} />
          <Route path="comments" index element={<Comment />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
