import { IReminder, IReminderGet } from "../types/IReminder";
import { IReminderListingItem } from "../types/IReminderListingItem";
import { ReminderService } from "../services/reminderService";
import { formatDateToISO } from "../utils";


export class ReminderController{

    reminderService : ReminderService;
    constructor(){
        this.reminderService = new ReminderService();
    }

    private formatDateToBr(date: Date) {
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
      
        return day + '/' + month  + '/' + year;
    }


    async getRemindersListing() : Promise<IReminderListingItem[]> {
        let reminders = await this.reminderService.getAll();
        let remindersListing : IReminderListingItem[] = [];
        let found: boolean = false;
        reminders.forEach(reminder => {
            found = false;
            const reminderDate = this.formatDateToBr(new Date(reminder.date));
            if(remindersListing.length > 0){
            remindersListing.forEach(item => {
                if(item.date === reminderDate){
                    item.remindersNames.push({name: reminder.name, id: reminder.id});
                    found = true;
                }
            })
            if(!found) remindersListing.push({date: reminderDate, remindersNames: [{name: reminder.name, id: reminder.id}]});
            }else{
                remindersListing.push({date: reminderDate, remindersNames: [{name: reminder.name, id: reminder.id}]})
            }
            
        })
        remindersListing.sort(function compare(a, b) {
            if (formatDateToISO(a.date) < formatDateToISO(b.date)){
              return -1;
            }
            if (formatDateToISO(a.date) > formatDateToISO(b.date)){
              return 1;
            }
            return 0;
        })
        return remindersListing;
    }

    async getById(id: string) : Promise<IReminderGet>{
        return await this.reminderService.getById(id);
    }

    async create(data : IReminder){
        await this.reminderService.create(data);
    }

    async update(data : IReminder, id: string) : Promise<IReminder>{
        return await this.reminderService.update(data,id);
    }

    async delete(id: string){
        await this.reminderService.delete(id);
    }

}