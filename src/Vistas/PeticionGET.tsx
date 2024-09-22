import React, { useState } from "react";
import ButtonBuscar from "../Components/ButtonBuscar";
import "../App.css";

interface BlogData {
  id: number;
  title: string;
  author: string;
  category: string;
}

const PeticionGET: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = () => {
    fetch("https://api.vercel.app/blog")
      .then((response) => response.json())
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error al buscar los blogs:", error);
        setError("No se pudieron cargar los blogs");
        setBlogs([]);
      });
  };

  return (
    <div className="form-container">
      <h1>Lista de Blogs</h1>
      <div className="button-group">
        <ButtonBuscar onClick={handleSearch} />
      </div>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {blogs.length > 0 ? (
        <table className="table table-striped table-bordered table-hover mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
};

export default PeticionGET;
