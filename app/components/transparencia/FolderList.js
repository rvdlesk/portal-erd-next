import React from 'react';
import FileItem from '@/app/components/transparencia/FileItem'; 
import './style.css'

const FolderList = ({ subfolders, files, onFolderClick }) => {
  return (
    <div>
      {/* Renderizar subcarpetas */}
      {subfolders.length > 0 && (
        <div className="subfolders">
          <ul>
            {subfolders.map((subfolder) => (
              <li key={subfolder.id}>
                <div 
                 className="folder-item"
                  onClick={() => onFolderClick(subfolder.id, subfolder.name)} 
                >
                <i  class="ri-folder-fill"></i> 
                <span>{subfolder.name}</span> {/* Muestra el nombre de la subcarpeta */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Renderizar archivos que están en la carpeta actual */}
      {files.length > 0 && (
        <div className="files" style={{ marginTop: '20px' }}>
          <h2>Archivos</h2>
          <ul>
            {files.map((file) => (
              <li key={file.attachment_id}>
                <FileItem file={file} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FolderList;
