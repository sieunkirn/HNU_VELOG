import {useParams, useNavigate, Link} from "react-router-dom";
import React from "react";

export default function DetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const posts = [
        {
            title: "남자 코트 추천",
            author: "HNU_VeLoG",
            date: "2024년 7월 15일",
            tags: ["패션", "추천", "코트"],
            content: `
겨울이 다가오면서 따뜻하고 스타일리시한 남자 코트를 찾고 계신가요? 이번 포스트에서는 다양한 스타일의 남자 코트를 추천해드리겠습니다.

1. 울 코트  
클래식한 울 코트는 어떤 상황에서도 무난하게 입을 수 있는 아이템입니다. 특히 비즈니스 캐주얼 룩이나 정장 스타일링에 완벽하게 어울립니다.

2. 다운 코트  
극한의 추위에도 따뜻함을 유지할 수 있는 다운 코트는 실용성에 뛰어난 선택입니다. 최근에는 슬림한 핏의 다운 코트들이 많이 출시되어 스타일리시함도 놓치지 않을 수 있습니다.

3. 트렌치 코트  
봄, 가을철에 입기 좋은 트렌치 코트는 세련된 느낌을 연출할 수 있습니다. 벨트를 활용한 스타일링으로 다양한 룩을 만들어보세요.

겨울이 다가오면서 따뜻하고 스타일리시한 남자 코트를 찾고 계신가요? 이번 포스트에서는 다양한 스타일의 남자 코트를 추천해드리겠습니다.

1. 울 코트  
클래식한 울 코트는 어떤 상황에서도 무난하게 입을 수 있는 아이템입니다. 특히 비즈니스 캐주얼 룩이나
      `.trim(),
        },
    ];

    const post = posts[id] || posts[0];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
            <div className="w-full max-w-5xl bg-white rounded-lg shadow p-8">

                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-3xl font-bold">{post.title}</h1>
                        <div className="text-gray-500 text-sm mt-1">
                            {post.author} · {post.date}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Link to={'/edit'}>
                            <p className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">수정</p>
                        </Link>



                        <button
                            onClick={() => {
                                if (window.confirm("삭제하시겠습니까?")) {
                                    alert("안되지롱~");
                                }
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                        >
                            삭제
                        </button>
                    </div>
                </div>

                <div className="flex gap-2 mb-6">
                    {post.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="leading-relaxed whitespace-pre-line text-gray-800">
                    {post.content}
                </div>
            </div>
        </div>
    );
}
