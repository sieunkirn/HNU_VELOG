import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPostPage({ onAdd }) {
    const [form, setForm] = useState({
        title: "",
        tags: "",
        content: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 태그를 쉼표/엔터/공백 등으로 분리해서 배열로 만들기
        const tagsArr = form.tags
            .split(/[,\s]+/).map(tag => tag.trim()).filter(tag => tag !== "");
        const newPost = {
            title: form.title,
            author: "HNU_VeLoG", // 필요에 따라 수정
            date: new Date().toLocaleDateString("ko-KR", { year: 'numeric', month: 'long', day: 'numeric' }),
            tags: tagsArr,
            content: form.content,
        };
        onAdd(newPost);
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold mb-6">새 글 작성</h2>
                <div className="mb-4">
                    <input
                        className="w-full border px-3 py-2 rounded text-lg"
                        name="title"
                        placeholder="제목을 입력하세요"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full border px-3 py-2 rounded"
                        name="tags"
                        placeholder="태그를 입력하세요. (쉼표로 구분)"
                        value={form.tags}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
          <textarea
              className="w-full border px-3 py-2 rounded h-48"
              name="content"
              placeholder="내용을 입력하세요..."
              value={form.content}
              onChange={handleChange}
              required
          />
                </div>
                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                        발행
                    </button>
                    <button
                        type="button"
                        className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                        onClick={() => navigate(-1)}
                    >
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
}
