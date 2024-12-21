// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
//
// const Home: React.FC = () => {
//     const [posts, setPosts] = useState<any[]>([]);
//
//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/posts');
//                 setPosts(response.data);
//             } catch (error) {
//                 console.error('Eroare la preluarea postărilor:', error);
//             }
//         };
//
//         fetchPosts();
//     }, []);
//
//     const handleLike = async (postId: string) => {
//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.post(
//                 `http://localhost:5000/api/posts/${postId}/like`,
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             setPosts(posts.map(post => (post._id === postId ? response.data : post)));
//         } catch (error) {
//             console.error('Eroare la like:', error);
//         }
//     };
//
//     const handleDislike = async (postId: string) => {
//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.post(
//                 `http://localhost:5000/api/posts/${postId}/dislike`,
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             setPosts(posts.map(post => (post._id === postId ? response.data : post)));
//         } catch (error) {
//             console.error('Eroare la dislike:', error);
//         }
//     };
//
//     return (
//         <div className="container mx-auto p-6">
//             <h1 className="text-4xl font-bold text-center mb-6">Postări Recente</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {posts.map(post => (
//                     <div key={post._id} className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
//                         <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
//                         <div className="flex items-center justify-between mt-4">
//                             <button
//                                 onClick={() => handleLike(post._id)}
//                                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                             >
//                                 👍 {post.likes.length}
//                             </button>
//                             <button
//                                 onClick={() => handleDislike(post._id)}
//                                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                             >
//                                 👎 {post.dislikes.length}
//                             </button>
//                             <Link to={`/post/${post._id}`} className="text-blue-500 hover:underline">
//                                 Vezi mai mult →
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Home;
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post._id} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                        <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
                        <div className="flex items-center justify-between mt-4">
                            <Link to={`/post/${post._id}`} className="text-blue-500 hover:underline">
                                Vezi mai mult →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
