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
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6">Postări Recente</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post._id} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                        <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
                        <Link to={`/post/${post._id}`} className="text-blue-500 hover:underline mt-4 inline-block">
                            Vezi mai mult →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
