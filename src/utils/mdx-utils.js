import { api } from '../services/api'

export const getPosts = async () => {
    const { data } = await api.get('/posts'); 

    if (data) {
        return data;
    }

    return [];
}

export const getPostBySlug = async (id) => {
    // Buscar um post específico pelo id
    const { data } = await api.get(`/posts?id=eq.${id}`); // Ajuste o endpoint conforme necessário

    if (data && data.length > 0) {
        return data[0]; // Supondo que a API retorna um array
    }

    return {};
}
