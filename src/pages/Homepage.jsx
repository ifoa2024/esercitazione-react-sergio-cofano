import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Richiesta all'API di JSONPlaceholder
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data); // Impostiamo i post ottenuti nella variabile di stato
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      } finally {
        setLoading(false); // Una volta finito, fermiamo il caricamento
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Benvenuto nella nostra applicazione!</h1>
      <p>Scopri i post più recenti:</p>

      {loading ? (
        <p>Caricamento...</p> // Mostra il messaggio di caricamento se i dati non sono ancora stati recuperati
      ) : (
        <Row>
          {posts.slice(0, 6).map((post) => ( // Limitiamo a 6 post
            <Col key={post.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    {post.body.substring(0, 100)}... {/* Mostra i primi 100 caratteri del corpo del post */}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomePage;
