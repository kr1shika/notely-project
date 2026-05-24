import api from './api';

export const noteService = {
  // Get all notes
  getNotes: async () => {
    const response = await api.get('/notes/');
    return response.data;
  },
  
  // Get archived notes
  getArchivedNotes: async () => {
    const response = await api.get('/notes/archived');
    return response.data;
  },
  
  // Get single note
  getNote: async (id) => {
    const response = await api.get(`/notes/${id}`);
    return response.data;
  },
  
  // Create note
  createNote: async (title, content) => {
    const response = await api.post('/notes/', { title, content });
    return response.data;
  },
  
  // Update note
  updateNote: async (id, updates) => {
    const response = await api.put(`/notes/${id}`, updates);
    return response.data;
  },
  
  // Delete note
  deleteNote: async (id) => {
    await api.delete(`/notes/${id}`);
  },
  
  // Archive note
  archiveNote: async (id) => {
    const response = await api.put(`/notes/${id}`, { is_archived: true });
    return response.data;
  },
  
  // Unarchive note
  unarchiveNote: async (id) => {
    const response = await api.put(`/notes/${id}`, { is_archived: false });
    return response.data;
  },
};