const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function request(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export const api = {
  getTextures: () => request('/textures'),
  getCollections: () => request('/collections'),
};
