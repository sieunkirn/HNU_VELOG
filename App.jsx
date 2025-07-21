import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import WritePage from "./pages/Write.jsx";
import MainPage from "./pages/Main.jsx";
import DetailsPage from "./pages/Details.jsx";
import EditPage from "./pages/Edit.jsx";

const initialPosts = [
    {
        title: "남자 코트 추천",
        author: "HNU_VeLoG",
        date: "2024년 7월 15일",
        tags: ["패션", "추천", "코트"],
        content: "코트 추천 포스트 내용...",
    },
];

export default function App() {
    const [posts, setPosts] = useState(initialPosts);

    const handleAdd = (newPost) => {
        setPosts(prev => [...prev, newPost]);
    };

    const handleEdit = (id, updatedPost) => {
        setPosts(prev =>
            prev.map((post, idx) => (idx === Number(id) ? updatedPost : post))
        );
    };

    return (
        <>
            <div className="header">
                <Link to={'/'}>
                    <p className="home-button">HNU_VeLoG</p>
                </Link>
                <Link to={'/write'}>
                    <p className="write-button">WRITE</p>
                </Link>
            </div>

            <Routes>
                <Route path='/' element={<MainPage posts={posts} />} />
                <Route path='/write' element={<WritePage onAdd={handleAdd} />} />
                <Route path='/details/:id' element={<DetailsPage posts={posts} />} />
                <Route path='/edit/:id' element={<EditPage posts={posts} onEdit={handleEdit} />} />
                <Route path='*' element={<MainPage posts={posts} />} />
            </Routes>
        </>
    );
}
