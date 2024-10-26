'use client'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import LoadingContent from '@/app/components/Loading';
import FolderList from '@/app/components/transparencia/FolderList';
import { Button, Typography } from "@ogticrd/ui-kit";
import { getOriginalTitle } from '@/app/utils/menuUtils';

export default function FolderContent() {
  const { parent, child } = useParams();
  const [content, setContent] = useState(null);
  const [subfolders, setSubfolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [navigationStack, setNavigationStack] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [currentParentId, setCurrentParentId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch initial folder content
  const fetchContent = async (folderId = null) => {
    setLoading(true);
    let searchQuery = child ? getOriginalTitle(child) : getOriginalTitle(parent);
    console.log('Fetching data with query:', searchQuery);

    try {
      const response = await fetch(
        `https://apird.mantosoft.com/wp-json/wp/v2/transparencia?search=${searchQuery}&_embed`
      );
      const data = await response.json();
      console.log('API Data received:', data);

      if (data.length > 0) {
        const folderData = data[0];
        setContent(folderData);
        setCurrentFolder(folderData.folder);
        const filteredSubfolders = folderData.subcarpetas.filter(subfolder => subfolder.parent === folderData.folder.id);
        const filteredFiles = folderData.archivos.filter(file => {
          return (file.folder && file.folder.folder_id === folderData.folder.id) || (!file.folder.folder_id && currentParentId === null);
        });

        setSubfolders(filteredSubfolders);
        setFiles(filteredFiles);
        setCurrentParentId(folderData.folder.id);
      } else {
        setContent(null);
        console.log('No content found for this query.');
      }
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFolderClick = (folderId, folderName) => {
    setLoading(true);
    const filteredSubfolders = content.subcarpetas.filter(subfolder => subfolder.parent === folderId);
    const filteredFiles = content.archivos.filter(file => file.folder.folder_id === folderId);

    setSubfolders(filteredSubfolders);
    setFiles(filteredFiles);
    setCurrentParentId(folderId);
    setCurrentFolder({ id: folderId, name: folderName });

    setNavigationStack(prevStack => [...prevStack, { id: folderId, name: folderName }]);
    setLoading(false);
  };

  const handleBackClick = () => {
    if (navigationStack.length > 1) {
      const newStack = [...navigationStack];
      newStack.pop();
      setNavigationStack(newStack);

      const previousFolder = newStack[newStack.length - 1];
      const filteredSubfolders = content.subcarpetas.filter(subfolder => subfolder.parent === previousFolder.id);
      const filteredFiles = content.archivos.filter(file => file.folder.folder_id === previousFolder.id);

      setSubfolders(filteredSubfolders);
      setFiles(filteredFiles);
      setCurrentParentId(previousFolder.id);
      setCurrentFolder(previousFolder);
    } else {
      setNavigationStack([]);
      fetchContent();
    }
  };

  const handleJumpToFolder = level => {
    const targetFolder = navigationStack[level];
    const newStack = navigationStack.slice(0, level + 1);
    setNavigationStack(newStack);

    const filteredSubfolders = content.subcarpetas.filter(subfolder => subfolder.parent === targetFolder.id);
    const filteredFiles = content.archivos.filter(file => file.folder.folder_id === targetFolder.id);

    setSubfolders(filteredSubfolders);
    setFiles(filteredFiles);
    setCurrentParentId(targetFolder.id);
    setCurrentFolder(targetFolder);
  };

  useEffect(() => {
    fetchContent();
  }, [parent, child]);

  if (loading) return <div  style={{display:'flex',justifyContent:'center', height:'30vh'}}>
<LoadingContent />
</div>

  return (
    <div className="entry-content">
      {content ? (
        <>
          {navigationStack.length > 0 && (
            <div className="pathd" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <a href="#!" style={{ color: "#003670" }} onClick={() => {
                setNavigationStack([]);
                fetchContent();
              }}>{content.title.rendered.toUpperCase()}</a>
              {navigationStack.map((folder, index) => (
                <span key={folder.id}>
                  &nbsp;{` > `}&nbsp;
                  <a style={{ color: "#003670" }} href="#!" onClick={() => handleJumpToFolder(index)}>
                    {folder.name.toUpperCase()}
                  </a>
                </span>
              ))}
              <button
                style={{ marginLeft: 'auto', backgroundColor: '#003876', borderColor: "#003876", color: 'white', padding: '5px 10px', borderRadius: '5px' }}
                onClick={handleBackClick}>
                <i className="ri-arrow-left-s-line"></i> Atrás
              </button>
            </div>
          )}
          <h1 className="entry-title">{currentFolder ? currentFolder.name : content.title.rendered}</h1>
          {content.content.rendered && navigationStack.length < 1 ? (
            <div className="wordpress-content" style={{ padding: '0px 0px 2rem 0' }} dangerouslySetInnerHTML={{ __html: content.content.rendered }} />
          ) : null}
          <FolderList subfolders={subfolders} files={files} onFolderClick={handleFolderClick} />
        </>
      ) : (
        <p>No se encontró contenido para {getOriginalTitle(child || parent)}</p>
      )}
    </div>
  );
}
