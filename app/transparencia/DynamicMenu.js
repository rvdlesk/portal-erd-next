import { useEffect, useState } from "react";

export default function DynamicMenu({ setCategoryContent }) {
  const [categories, setCategories] = useState([]);

  // Función para obtener las categorías desde la API
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://apird.mantosoft.com/wp-json/wp/v2/categoria-transparencia?per_page=100"
      );
      const data = await response.json();
      // Ordena las categorías primero por el parent ID y luego por el ID de cada categoría
      const sortedCategories = data.sort((a, b) => a.parent - b.parent || a.id - b.id);
      setCategories(sortedCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Función para hacer la petición POST cuando una categoría es seleccionada
  const handleCategoryClick = async (categoryId) => {
    try {
      const response = await fetch(`https://apird.mantosoft.com/wp-json/wp/v2/transparencia?categoria=${categoryId}`);
      const data = await response.json();
      setCategoryContent(data);  // Actualiza el contenido en el componente padre
    } catch (error) {
      console.error("Error fetching category content:", error);
    }
  };

  // Llama a la función cuando el componente se monta
  useEffect(() => {
    fetchCategories();
  }, []);

  // Función para renderizar las categorías de manera recursiva
  const renderCategories = (categories, parent = 0) => {
    const filteredCategories = categories.filter(
      (category) => category.parent === parent
    );

    return filteredCategories.length > 0 ? (
      <ul className="list-unstyled">
        {filteredCategories.map((category) => {
          const hasChildren = categories.some(
            (childCategory) => childCategory.parent === category.id
          );

          return (
            <li key={category.id} className="mb-2">
              {/* Si la categoría tiene hijos, habilitar el colapso */}
              {hasChildren ? (
                <>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(category.id);
                    }}
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls={`collapse${category.id}`}
                  >
                    {category.name} <i className="ri-arrow-down-s-line"></i>
                  </a>
                  <div className="collapse" id={`collapse${category.id}`}>
                    {renderCategories(categories, category.id)}
                  </div>
                </>
              ) : (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(category.id);
                  }}
                >
                  {category.name}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    ) : null;
  };

  return (
    <div className="list-submenu">
      <div className="group-submenu second" style={{ paddingRight: "10px" }}>
        <div className="group-submenu-title">Generales</div>
        {renderCategories(categories)}
      </div>
    </div>
  );
}
