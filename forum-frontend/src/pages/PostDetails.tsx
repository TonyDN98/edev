import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetails: React.FC = () => {
    const { id } = useParams();
    const [post, setPost] = useState<any>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Eroare la preluarea postării:', error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) return <p>Se încarcă...</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <h2>Comentarii</h2>
            {post.comments.map((comment: any) => (
                <p key={comment._id}>{comment.content}</p>
            ))}
        </div>
    );
};

export default PostDetails;
