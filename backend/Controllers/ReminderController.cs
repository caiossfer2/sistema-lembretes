using System;
using backend.Data;
using backend.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ReminderController : ControllerBase
    {

        private readonly Context _context;
        
        public ReminderController(Context context){
            _context = context;
        }

         [HttpGet]
        public async Task<ActionResult<List<ReminderModel>>> getAll(){
            return await _context.Reminders.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ReminderModel>> getById(int id){
           
            ReminderModel? reminder = await _context.Reminders.FirstOrDefaultAsync(x => x.id == id);
            if(reminder == null){
                return NotFound();
            }
            return reminder;
        }
        
        [HttpPost]
        public async Task<ActionResult<ReminderModel>> create([FromBody] ReminderModel reminder){
            await _context.Reminders.AddAsync(reminder);
            await _context.SaveChangesAsync();
            return reminder; 
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ReminderModel>> update(ReminderModel reminderModel, int id){
            ReminderModel? obtainedReminder = await _context.Reminders.FindAsync(id);
            if(obtainedReminder == null){
                return NotFound();
            }
            obtainedReminder.name = reminderModel.name;
            obtainedReminder.date = reminderModel.date;
            _context.Reminders.Update(obtainedReminder);
            await _context.SaveChangesAsync();
            return obtainedReminder;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> delete(int id){
            ReminderModel? obtainedReminder = await _context.Reminders.FindAsync(id);
            if(obtainedReminder == null){
                return NotFound();
            }
            _context.Reminders.Remove(obtainedReminder);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
