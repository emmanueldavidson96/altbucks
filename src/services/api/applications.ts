import axios from 'axios';
import { API_BASE_URL } from './config';

export const applicationService = {
    createApplication: async (applicationData) => {
        return axios.post(`${API_BASE_URL}/api/applications`, applicationData);
    },

    getUserApplications: async (userId) => {
        return axios.get(`${API_BASE_URL}/api/applications/user/${userId}`);
    },

    updateApplicationStatus: async (id, status) => {
        return axios.patch(`${API_BASE_URL}/api/applications/${id}/status`, { status });
    }
};