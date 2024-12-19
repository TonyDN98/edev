import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Eroare la preluarea postărilor:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Postări recente</h1>
            {posts.map(post => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content.substring(0, 100)}...</p>
                    <Link to={`/post/${post._id}`}>Vezi mai mult</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
