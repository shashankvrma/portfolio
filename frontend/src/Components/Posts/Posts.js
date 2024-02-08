import { useEffect, useState } from "react";
import './Posts.css';
import { Link } from "react-router-dom";

const Posts = () => {
    const [post_list, set_post_list] = useState("");
    const [error, setError] = useState(null);
    const url = "http://localhost:3000";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/posts');
                const result = await response.json();
                const normalizedPostList = Array.isArray(result) ? result : [result];
                console.log(normalizedPostList);
                if (!response.ok) {
                    // Check for HTTP error status
                    throw new Error('Network response was not ok');
                }
                set_post_list(normalizedPostList);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            }
        };

        fetchData();
        return () => {
            // Perform cleanup tasks if needed
            // For example, cancelling network requests or clearing subscriptions
        };
    }, []);
    return (
        <>
            {error ? (
                // Display custom error page
                <div className="main-body">
                    <h1>Error</h1>
                    <p>{error}</p>
                </div>
            ) : post_list ? (
                <div className="main-body container posts_body">
                    <ul className="card-list">
                        {post_list.map((item) => (
                                <div className="card" key={item.id}>
                                    <div className="card__header">
                                        <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="card__image" width="600" />
                                    </div>
                                    <div className="card__body">
                                        <span className="tag tag-blue" key={`${item.id}-category`}>{item.category.name}</span>
                                        <Link className="Linkpost" key={`${item.post_id}-title`} to={`${url}/post/${item.post_id}`}><h3 className="postUrl">{item.title}</h3></Link>
                                        <p key={`${item.id}-content`} className="PostContent">{item.content}</p>
                                    </div>
                                    <div className="card__footer">
                                        <div className="user">
                                            <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
                                            <div className="user__info" key={`${item.id}-author`}>
                                                <h5 className="user_name">{item.author.fullName}</h5>
                                                <small>2h ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </ul>
                </div>) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default Posts;