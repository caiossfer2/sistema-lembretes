import { IReminder, IReminderGet } from "../types/IReminder";
import { api } from "./api";

export class ReminderService{
    baseUrl = '/Reminder'

    async getAll() : Promise<IReminderGet[]> {
        const response =  await api.get(this.baseUrl);
        return response.data
    }

    async getById(id: string) : Promise<IReminderGet>{
        const response =  await api.get(`${this.baseUrl}/${id}`);
        return response.data;
    }

    async create(data : IReminder){
        await api.post(this.baseUrl, data);
    }

    async update(data : IReminder, id: string) : Promise<IReminder>{
        await api.put(`${this.baseUrl}/${id}`, data)
        return data
    }

    async delete(id: string){
        await api.delete(`${this.baseUrl}/${id}`);
    }

}