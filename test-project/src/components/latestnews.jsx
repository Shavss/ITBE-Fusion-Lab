import React, { useState } from 'react';

const LatestNewsSection = ({ blogPosts }) => {
    const [visiblePosts, setVisiblePosts] = useState(4);

    const loadMore = () => setVisiblePosts((prev) => prev + 4);

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            background: 'rgba(248, 248, 248, 0.9)',
            padding: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: '#171614', marginBottom: '2rem' }}>LATEST NEWS</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px'
            }}>
                {blogPosts.slice(0, visiblePosts).map((post) => (
                    <div key={post.id} style={{
                        background: '#fff',
                        padding: '2rem',
                        borderRadius: '16px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        border: '1px solid #ddd'
                    }}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                        <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>{post.title}</h3>
                        <p style={{ fontSize: '11px', color: '#777' }}>{post.date}</p>
                        <p style={{ fontSize: '13px', lineHeight: '20px', color: '#333' }}>{post.summary}</p>
                        <a href={`/blog/${post.id}`} style={{
                            marginTop: '1rem',
                            padding: '0.8rem 1.5rem',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: '#fff',
                            backgroundColor: '#000',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#fff'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#000'}>
                            Read More →
                        </a>
                    </div>
                ))}
            </div>

            {visiblePosts < blogPosts.length && (
                <button onClick={loadMore} style={{
                    marginTop: '2rem',
                    padding: '0.8rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#000',
                    borderRadius: '50px'
                }}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default LatestNewsSection;