import axios from "axios";

export const api = axios.create({
    baseURL: 'https://jdpqcwpulwzwgzomnsqm.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkcHFjd3B1bHd6d2d6b21uc3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MTQ3NDksImV4cCI6MjA0NjM5MDc0OX0.zGGvNgGPO0jZnnkcGGzZkXafWfm1-caTJyDgv5xSFK8", 
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkcHFjd3B1bHd6d2d6b21uc3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MTQ3NDksImV4cCI6MjA0NjM5MDc0OX0.zGGvNgGPO0jZnnkcGGzZkXafWfm1-caTJyDgv5xSFK8"
    }
})