'use client';
import React, {useState} from 'react';
import PdfViewer from '../PdfViewer';

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

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  // Limitar a 2 decimales
  const fileSize = (bytes / Math.pow(1024, i)).toFixed(2);
  
  return `${fileSize} ${sizes[i]}`;
}

// Función para detectar la extensión del archivo y devolver el icono y color correspondientes
const getFileIconAndColor = (fileName) => {
  if (!fileName) {
    return { icon: '📄', color: '#ccc' };
  }
  
  const extension = fileName.split('.').pop().toLowerCase();
  console.log(extension)
  switch (extension) {
    case 'pdf':
      return { icon: 'ri-file-pdf-2-fill', color: '#d9534f' }; // Rojo para PDF
    case 'xls':
    case 'xlsx':
      return { icon: 'ri-file-excel-2-fill', color: '#4caf50' }; // Verde para Excel
    case 'zip':
      return { icon: 'ri-file-zip-fill', color: '#f39c12' }; // Naranja para ZIP
    case 'jpg':
    case 'jpeg':
    case 'png':
      return { icon: 'ri-file-image-fill', color: '#3498db' }; // Azul para imágenes
    default:
      return { icon: 'ri-file-download-fill', color: '#ccc' }; // Color gris por defecto para otros archivos
  }
};



const FileItem = ({ file }) => {
  // Extraer el nombre del archivo desde la URL
  const fileName = getFileNameFromUrl(file.download_url);
  const [click, setClick] = useState(file.click_count || 0);
  // Obtener icono y color basados en la extensión del archivo
  const { icon, color } = getFileIconAndColor(file.download_url);
  const [open, setOpen] = useState(false); // Cambia esto por la URL de tu PDF

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDownload = async (fileUrl) => {
    const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);

    try {
        const response = await fetch(fileUrl,{
          method: 'GET',
          mode: 'no-cors', // This is the key line
      });
        console.log(response)
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = fileName;
        a.download = fileName; // Especifica un nombre de archivo aquí si lo deseas
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url); // Liberar el objeto URL
    } catch (error) {
        console.error('Error al descargar el archivo:', error);
    }
};

  const handleFileClick = async (id) => {
    try {
      // Realizar el POST request para incrementar los clics
      const response = await fetch(`https://apird.mantosoft.com/wp-json/custom-api/v1/update-clicks/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      if (data.status === 'success') {
        setClick((prevClick) => prevClick + 1);
      } else {
        console.error('Error al actualizar los clics');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="file-itemf" style={{  border: '1px solid #ddd', padding: '15px 15px', borderRadius: '5px', marginBottom: '15px' }}>
  
  {/* Contenedor con diseño responsivo */}
  <div className="row">
    
    {/* Icono del archivo (apilable en pantallas pequeñas) */}
    <div className=" p-0 ml-3  d-flex justify-content-center align-items-center ">
      <i className={icon} style={{ fontSize: '60px', color }}></i>
    </div>
    
    {/* Información del archivo */}
    <div className="col-12 col-md-10 ">
      <h1 className='mb-2' style={{  fontWeight: 'bold',fontSize: '18px', lineHeight:'25px'}}>
        {file.title || 'Archivo sin nombre'}
      </h1>
      {file?.description && <p className='mb-2 text-muted'>{file.description}</p>}
    
      
      {/* Metadatos */}
      <div className="row  text-muted">
        <div className="col-md-4 mb-2">
          <strong style={{fontWeight:"bold",fontSize: '14px'}}>Tamaño:</strong> {formatFileSize(file?.file_size) || 'Desconocido'}
        </div>
        <div className=" col-md-2 mb-2">
        <strong style={{fontWeight:"bold",fontSize: '14px'}}> Clics:</strong> {click|| 0}
        </div>
        <div className="col-md-6 mb-2" >
        <strong style={{fontWeight:"bold",fontSize: '14px'}}> Fecha:</strong> {file?.upload_date || 'No disponible'}
        </div>
      </div>
      
      {/* Botones de acción */}
      <div className="row">
      <div className="col-md-12 mb-2 d-flex  ">
        {file?.download_url && (
          <button
          style={{ backgroundColor: color, borderColor:color, color: 'white',  borderRadius: '5px' }}
           
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() =>{ 
              handleFileClick(file.attachment_id);
              // handleDownload(file.download_url);

              window.open(file.download_url, '_blank', 'noopener,noreferrer');
          }}
            className="btn btn-primary"
          >
            Descargar <i className="ri-download-cloud-fill"></i>
          </button>
        )}
        {file && file.mime_type == "application/pdf" ? (

        <button onClick={handleClickOpen}  className="btn"
        style={{  backgroundColor: '#F5F5F5', borderColor:'#F5F5F5', color: '#B6B6B6', borderRadius: '5px' }}
        >
          Visualizar <i className="ri-fullscreen-fill"></i>
        </button>  
        ):null}
        {/* <PdfViewer pdfUrl={file.download_url} open={open} onClose={handleClose} /> */}
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default FileItem;
