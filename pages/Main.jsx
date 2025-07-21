import {Link, useNavigate} from "react-router-dom";

export default function MainPage() {
    return (
        <div className="CardView">
            {
                Array.from({ length: 3 }, (_, i) => {
                    return (
                        <>
                            <CardView init={i}/>
                        </>
                    )
                })
            }
        </div>
    );
}

function CardView({ init }) {
    const navigate = useNavigate();
    return (
        <Link to={`/details/${init}`}>
            <div className={'w-32 h-32 bg-gray-100'}>
                {init}번째 카드뷰
            </div>
        </Link>

    );
}

