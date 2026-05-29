import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext1';
import { useDebounce } from '../hooks/useDebounce';
import { noteService } from '../services/noteService';

export default function NotesWorkspace() {
    const { user, loading: authLoading, logout } = useAuth();
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [activeNote, setActiveNote] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showArchived, setShowArchived] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [localTitle, setLocalTitle] = useState('');
    const [localContent, setLocalContent] = useState('');
    const debouncedTitle = useDebounce(localTitle, 800);
    const debouncedContent = useDebounce(localContent, 800);

    useEffect(() => {
        if (!authLoading && !user) {
            navigate('/login');
        }
    }, [user, authLoading, navigate]);

    useEffect(() => {
        if (user) {
            fetchNotes();
        }
    }, [user, showArchived]);

    useEffect(() => {
        if (activeNote && debouncedTitle !== activeNote.title) {
            updateNote(activeNote.id, { title: debouncedTitle });
        }
    }, [debouncedTitle]);

    useEffect(() => {
        if (activeNote && debouncedContent !== activeNote.content) {
            updateNote(activeNote.id, { content: debouncedContent });
        }
    }, [debouncedContent]);

    useEffect(() => {
        if (activeNote) {
            setLocalTitle(activeNote.title || '');
            setLocalContent(activeNote.content || '');
        }
    }, [activeNote]);

    const fetchNotes = async () => {
        setLoading(true);
        setError('');
        try {
            const data = showArchived
                ? await noteService.getArchivedNotes()
                : await noteService.getNotes();
            setNotes(data);

            if (!activeNote && data.length > 0) {
                setActiveNote(data[0]);
            } else if (data.length === 0) {
                setActiveNote(null);
            }
        } catch (err) {
            console.error('Failed to fetch notes:', err);
            setError('Failed to load notes. Please refresh.');
        } finally {
            setLoading(false);
        }
    };

    const createNewNote = async () => {
        setSaving(true);
        try {
            const newNote = await noteService.createNote('Untitled', '');
            setNotes([newNote, ...notes]);
            setActiveNote(newNote);
        } catch (err) {
            console.error('Failed to create note:', err);
            setError('Failed to create note. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    const updateNote = async (id, updates) => {
        try {
            const updatedNote = await noteService.updateNote(id, updates);
            setNotes(notes.map(note => note.id === id ? updatedNote : note));
            if (activeNote?.id === id) {
                setActiveNote(updatedNote);
            }
        } catch (err) {
            console.error('Failed to update note:', err);
            setError('Failed to save changes. Please try again.');
        }
    };

    const deleteNote = async (id) => {
        if (!confirm('Are you sure you want to delete this note?')) return;

        try {
            await noteService.deleteNote(id);
            const updatedNotes = notes.filter(note => note.id !== id);
            setNotes(updatedNotes);

            if (activeNote?.id === id) {
                setActiveNote(updatedNotes[0] || null);
            }
        } catch (err) {
            console.error('Failed to delete note:', err);
            setError('Failed to delete note. Please try again.');
        }
    };

    const archiveNote = async (id) => {
        try {
            await noteService.archiveNote(id);
            await fetchNotes();
            if (activeNote?.id === id) {
                setActiveNote(null);
            }
        } catch (err) {
            console.error('Failed to archive note:', err);
            setError('Failed to archive note. Please try again.');
        }
    };

    const handleTitleChange = (e) => {
        setLocalTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setLocalContent(e.target.value);
    };

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (authLoading || loading) {
        return (
            <div className="h-screen bg-[#f9f0d6] flex items-center justify-center">
                <div className="text-xl">Loading your workspace...</div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="h-screen bg-[#f9f0d6] flex overflow-hidden text-black">
            <aside className="w-[290px] border-r border-black/5 bg-[#f9f0d6] flex flex-col">
                <div className="p-4 border-b border-black/5">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <h2 className="font-semibold text-lg">Notely</h2>
                            <p className="text-xs text-black/50 mt-1">{user?.email}</p>
                        </div>
                        <button
                            onClick={logout}
                            className="text-xs px-3 py-1 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <div className="p-4">
                    <input
                        type="text"
                        placeholder="Search notes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/5 outline-none focus:ring-2 focus:ring-black/10"
                    />
                </div>

                <div className="px-4 pb-4 space-y-2">
                    <button
                        onClick={createNewNote}
                        disabled={saving}
                        className="w-full bg-black text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        + New Note
                    </button>

                    <button
                        onClick={() => setShowArchived(!showArchived)}
                        className="w-full border border-black/20 py-3 rounded-xl font-medium hover:bg-black/5 transition-opacity"
                    >
                        {showArchived ? '← Back to Notes' : ' Archived'}
                    </button>
                </div>

                {error && (
                    <div className="mx-4 mb-4 p-2 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs">
                        {error}
                        <button onClick={() => setError('')} className="ml-2 underline">Dismiss</button>
                    </div>
                )}

                <div className="flex-1 overflow-y-auto px-3 pb-6">
                    <p className="px-3 mb-3 text-xs uppercase tracking-[0.2em] text-black/40">
                        {showArchived ? 'Archived Notes' : 'All Notes'} ({filteredNotes.length})
                    </p>

                    {filteredNotes.length === 0 ? (
                        <div className="text-center text-black/40 text-sm py-8">
                            {searchTerm ? 'No matching notes' : 'No notes yet.\nClick + to create one'}
                        </div>
                    ) : (
                        <div className="space-y-1">
                            {filteredNotes.map((note) => (
                                <div key={note.id} className="group relative">
                                    <button
                                        onClick={() => setActiveNote(note)}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${activeNote?.id === note.id
                                            ? "bg-black text-white"
                                            : "hover:bg-black/5 text-black/70"
                                            }`}
                                    >
                                        <div className="font-medium truncate">{note.title || 'Untitled'}</div>
                                        <div className="text-xs opacity-60 mt-1">
                                            {new Date(note.updated_at || note.created_at).toLocaleDateString()}
                                        </div>
                                    </button>

                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                        {!showArchived && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    archiveNote(note.id);
                                                }}
                                                className="p-1 rounded hover:bg-black/10 text-xs"
                                                title="Archive"
                                            >

                                            </button>
                                        )}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                deleteNote(note.id);
                                            }}
                                            className="p-1 rounded hover:bg-black/10 text-xs"
                                            title="Delete"
                                        >
                                            delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </aside>

            {/* MAIN EDITOR */}
            <main className="flex-1 overflow-y-auto">
                {activeNote ? (
                    <>
                        <div className="h-16 border-b border-black/5 flex items-center justify-between px-8 bg-[#f9f0d6]/80 backdrop-blur sticky top-0 z-20">
                            <div className="flex items-center gap-3 text-sm text-black/50">
                                <span>Workspace</span>
                                <span>/</span>
                                <span className="text-black font-medium">
                                    {localTitle || 'Untitled'}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => archiveNote(activeNote.id)}
                                    className="px-4 py-2 rounded-lg hover:bg-black/5 transition-colors text-sm"
                                >
                                    Archive
                                </button>
                                <button
                                    onClick={() => deleteNote(activeNote.id)}
                                    className="px-4 py-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors text-sm"
                                >
                                    Delete
                                </button>
                                <div className="text-xs text-black/40 px-2">
                                    {saving ? 'Saving...' :
                                        (debouncedTitle !== activeNote.title || debouncedContent !== activeNote.content) ? 'Unsaved changes...' : 'Saved'}
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto px-8 py-10">
                            <input
                                type="text"
                                value={localTitle}
                                onChange={handleTitleChange}
                                placeholder="Untitled"
                                className="w-full bg-transparent text-6xl font-black tracking-tight outline-none placeholder:text-black/20"
                            />

                            <div className="flex items-center gap-6 mt-6 text-sm text-black/40">
                                <p>Last edited {new Date(activeNote.updated_at || activeNote.created_at).toLocaleString()}</p>
                                <p>{localContent.length} characters</p>
                                <p className="text-green-600">
                                    {debouncedTitle === activeNote.title && debouncedContent === activeNote.content ? '✓ Saved' : '⌛ Saving...'}
                                </p>
                            </div>

                            <div className="mt-14">
                                <textarea
                                    value={localContent}
                                    onChange={handleContentChange}
                                    placeholder="Start writing your note here..."
                                    className="w-full min-h-[500px] bg-transparent outline-none resize-none text-lg leading-9 text-black/75 placeholder:text-black/30"
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="max-w-md">
                            <h2 className="text-3xl font-bold mb-4">Welcome to Notely</h2>
                            <p className="text-black/60 mb-8">
                                {showArchived
                                    ? "You don't have any archived notes yet."
                                    : "You don't have any notes yet. Create your first note to get started!"}
                            </p>
                            {!showArchived && (
                                <button
                                    onClick={createNewNote}
                                    className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-90"
                                >
                                    + Create Your First Note
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}