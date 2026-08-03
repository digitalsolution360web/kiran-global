'use client';

import { useEffect, useState,  useCallback } from 'react';
import { useDropzone } from 'react-dropzone';


interface Gallery {
  id: number;
  title: string;
  alt: string;
  heading: string;
  order:number;
  image: string;
  created_at: string;
}

export default function GalleryPage() {
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [search, setSearch] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [editingGallery, setEditingGallery] = useState<Gallery | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    alt: '',
    heading: '',
    order:0,
    image: '',
  });
  const limit = 10;

  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    fetchGallery();
  }, [page, search]);


  const fetchGallery = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `/api/gallery?page=${page}&limit=${limit}&search=${search}`
      );

      const data = await res.json();

      setGallery(data.data || []);
      setTotal(data.total || 0);

      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
    // Image upload handler
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'gallery');
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        // Update the image field with the Cloudflare URL
        setFormData(prev => ({
          ...prev,
          image: data.url
        }));
        alert('Image uploaded successfully!');
      } else {
        alert('Failed to upload image: ' + data.error);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp', '.svg']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,  
  });

  const openModal = (gallery?: Gallery) => {
    if (gallery) {
      setEditingGallery(gallery);
      setFormData({
        title: String(gallery.title),
        alt: String(gallery.alt),
        heading: String(gallery.heading),
        order:Number(gallery.order),
        image: gallery.image || '',
      });
    } else {
      setEditingGallery(null);

      setFormData({
        title: '',
        alt: '',
        heading: '',
        order:0,
        image: '',
      });
    }

    setShowModal(true);
  };

  const closeModal = () => {
  setShowModal(false);
  setEditingGallery(null);
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = editingGallery ? 'PUT' : 'POST';
     const submitData = {
    ...formData,
  };
    const body = editingGallery
      ? {
          ...submitData,
          id: editingGallery.id,
        }
      : submitData;

    const res = await fetch('/api/gallery', {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      fetchGallery();
      closeModal();
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this image?')) return;

    const res = await fetch(`/api/gallery?id=${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      fetchGallery();
    }
  };

  return (
    <>
      <div className="animate-fade-in pb-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              Gallery
            </h1>

            <p className="text-[var(--text-secondary)] text-sm mt-1">
              Manage all gallery images.
            </p>
          </div>

          <button
            onClick={() => openModal()}
            className="btn-primary flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white w-full sm:w-auto"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>

            Add Image
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
            Failed to fetch gallery images.
          </div>
        )}

        {/* SEARCH */}
        {/* <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl py-3 px-12 text-[var(--text-primary)]"
          />

          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div> */}

        {/* TABLE */}
        <div className="hidden md:block bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-2xl mb-6">
          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-[var(--bg-primary)] text-left text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  <th className="px-5 py-4">Order</th>
                  <th className="px-5 py-4">Image</th>
                  <th className="px-5 py-4">Heading</th>
                  <th className="px-5 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[var(--border-color)]">

                {loading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="px-5 py-4">
                        <div className="h-12 w-12 rounded-lg skeleton" />
                      </td>
                      <td className="px-5 py-4">
                        <div className="h-4 w-40 skeleton" />
                      </td>
                      <td className="px-5 py-4">
                        <div className="h-4 w-20 skeleton" />
                      </td>
                      <td className="px-5 py-4">
                        <div className="h-4 w-20 skeleton" />
                      </td>
                    </tr>
                  ))
                ) : gallery.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-16 text-center text-[var(--text-secondary)]"
                    >
                      No images found.
                    </td>
                  </tr>
                ) : (
                  gallery.map((image) => (
                    <tr
                      key={image.id}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-5 py-4 text-xs text-[var(--text-muted)]">
                        #{image.order}
                      </td>
                      <td className="px-5 py-4">
                        <img
                          src={image.image || '/placeholder.png'}
                          className="w-12 h-12 rounded-lg object-cover border border-[var(--border-color)]"
                        />
                      </td>


                      <td className="px-5 py-4 text-sm text-[var(--text-secondary)]">
                         {image.heading}
                      </td>
                      
                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                            
                          <button
                            onClick={() => openModal(image)}
                            className="p-2 text-sky-400 hover:bg-sky-500/10 rounded-lg"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                          </button>

                          <button
                            onClick={() => handleDelete(image.id)}
                            className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}

              </tbody>

            </table>

          </div>
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] disabled:opacity-40"
            >
              Prev
            </button>

            <div className="text-sm text-[var(--text-secondary)]">
              {page} / {totalPages}
            </div>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999] p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden">

            {/* HEADER */}
            <div className="flex items-center justify-between p-5 border-b border-[var(--border-color)]">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                {editingGallery ? 'Update Image' : 'Add Image'}
              </h2>
              <button
                onClick={closeModal}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-4 max-h-[calc(80vh-120px)] overflow-y-auto">
                
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Heading */}
                  <div>
                    <label className="block text-xs font-bold mb-2 text-[var(--text-secondary)] uppercase">
                      Heading 
                    </label>
                    <input
                      type="text"
                     
                      value={formData.heading}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          heading: e.target.value,
                        })
                      }
                      placeholder="Heading"
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl py-3 px-4 text-sm"
                    />
                  </div>
                  {/* TITLE */}
                  <div>
                    <label className="block text-xs font-bold mb-2 text-[var(--text-secondary)] uppercase">
                      Title 
                    </label>
                    <input
                      type="text"
                     
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          title: e.target.value,
                        })
                      }
                      placeholder="Title"
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl py-3 px-4 text-sm"
                    />
                  </div>
                  {/* ALT */}
                  <div>
                    <label className="block text-xs font-bold mb-2 text-[var(--text-secondary)] uppercase">
                      Alt tag 
                    </label>
                    <input
                      type="text"
                     
                      value={formData.alt}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          alt: e.target.value,
                        })
                      }
                      placeholder="Alt tag"
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl py-3 px-4 text-sm"
                    />
                  </div>
                  {/* ORDER */}
                  <div>
                    <label className="block text-xs font-bold mb-2 text-[var(--text-secondary)] uppercase">
                      Order
                    </label>
                    <input
                      type="number"
                     
                      value={formData.order}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          order: Number(e.target.value),
                        })
                      }
                      placeholder="Order"
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl py-3 px-4 text-sm"
                    />
                  </div>

                   {/* IMAGE UPLOAD */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold mb-2 text-[var(--text-secondary)] uppercase">
                      Image <span className="text-red-400">*</span>
                    </label>
                    
                    {/* Drag & Drop Zone */}
                    <div
                      {...getRootProps()}
                      className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                        isDragActive 
                          ? 'border-teal-500 bg-teal-500/10' 
                          : 'border-[var(--border-color)] hover:border-teal-500'
                      } ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
                    >
                      <input {...getInputProps()} required/>
                      
                      {uploading ? (
                        <div className="flex flex-col items-center gap-2">
                          <svg className="animate-spin h-8 w-8 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="text-sm text-[var(--text-secondary)]">Uploading...</span>
                        </div>
                      ) : (
                        <>
                          <svg className="mx-auto h-12 w-12 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-sm text-[var(--text-secondary)] mt-2">
                            {isDragActive ? 'Drop the image here...' : 'Drag & drop an image here, or click to select'}
                          </p>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            Supports: JPG, PNG, GIF, WEBP, SVG (Max 5MB)
                          </p>
                        </>
                      )}
                    </div>

                    {/* Image Preview */}
                    {formData.image && (
                      <div className="mt-3 flex items-center gap-3 p-3 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)]">
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="w-16 h-16 rounded-lg object-cover border border-[var(--border-color)]"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[var(--text-primary)] truncate">
                            {formData.image.split('/').pop() || 'Image uploaded'}
                          </p>
                          <p className="text-xs text-[var(--text-muted)] truncate">
                            {formData.image}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, image: '' })}
                          className="p-1 text-red-400 hover:text-red-500 transition-colors"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>
                    )}
  {/* OR - Manual URL input */}
                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-xs text-[var(--text-muted)]">OR</span>
                      <input
                        type="text"
                        value={formData.image}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            image: e.target.value,
                          })
                        }
                        className="flex-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl py-2 px-4 text-sm"
                        placeholder="Enter image URL manually"
                      />
                    </div>
                  </div>


              </div>
               </div>
              {/* FOOTER */}
              <div className="p-5 border-t border-[var(--border-color)] flex gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:bg-[var(--bg-primary)] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl btn-primary text-white font-semibold"
                >
                  {editingGallery ? 'Update Image' : 'Save Image'}
                </button>
              </div>
              
            </form>
          </div>
        </div>
      )}
       
    </>
  );
}