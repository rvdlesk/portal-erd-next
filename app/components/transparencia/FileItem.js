import React from 'react';

// Función para extraer el nombre del archivo desde la URL
const getFileNameFromUrl = (url) => {
  if (!url) {
    return 'Desconocido';
  }

  const fileName = url.split('/').pop();
  const nameWithoutExtension = fileName.split('.')[0]; // Eliminamos la extensión
  const formattedName = nameWithoutExtension
    .replace(/[^a-zA-Z0-9 ]/g, ' ') // Reemplazamos caracteres especiales por espacios
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '); // Capitalizamos la primera letra de cada palabra

  return formattedName;
};

// Función para detectar la extensión del archivo y devolver el icono y color correspondientes
const getFileIconAndColor = (fileName) => {
  if (!fileName) {
    return { icon: '📄', color: '#ccc' };
  }
  
  const extension = fileName.split('.').pop().toLowerCase();
  console.log(extension)
  switch (extension) {
    case 'pdf':
      return { icon: '📕', color: '#d9534f' }; // Rojo para PDF
    case 'xls':
    case 'xlsx':
      return { icon: '📊', color: '#4caf50' }; // Verde para Excel
    case 'zip':
      return { icon: '🗜️', color: '#f39c12' }; // Naranja para ZIP
    case 'jpg':
    case 'jpeg':
    case 'png':
      return { icon: '🖼️', color: '#3498db' }; // Azul para imágenes
    default:
      return { icon: '📄', color: '#ccc' }; // Color gris por defecto para otros archivos
  }
};

const FileItem = ({ file }) => {
  // Extraer el nombre del archivo desde la URL
  const fileName = getFileNameFromUrl(file.download_url);
  // Obtener icono y color basados en la extensión del archivo
  const { icon, color } = getFileIconAndColor(file.download_url);

  return (
    <div className="file-item" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      {/* Icono del archivo */}
      <div style={{ marginRight: '15px', fontSize: '40px', color }}>
        {icon}
      </div>

      {/* Información del archivo */}
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{fileName || 'Archivo sin nombre'}</h3>
        <p style={{ margin: '0', color: '#777' }}>
          Tamaño: {file?.size || 'Desconocido'} KB
          <br />
          Clics: {file?.clicks || 0}
          <br />
          Fecha: {file?.date || 'No disponible'}
        </p>
      </div>

      {/* Botones de acción */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {file?.download_url && (
          <a href={file.download_url} className="btn-download" style={{ backgroundColor: '#d9534f', color: '#fff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', marginRight: '10px' }}>
            Descargar
          </a>
        )}
        {file?.preview_url && (
          <a href={file.preview_url} className="btn-preview" style={{ backgroundColor: '#f7f7f7', color: '#333', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
            Visualizar
          </a>
        )}
      </div>
    </div>
  );
};

export default FileItem;
