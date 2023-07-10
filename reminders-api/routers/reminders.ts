import { Router } from 'express';
import DTO from '../dto/remindersDto';
import Reminder from '../models/reminders';


const router = Router();
const reminders: Reminder[] = [];


router.get('/', (req, res) => {
    res.send("list of reminders");
});

router.post('/', (req, res) => {
    const { title } = req.body as DTO;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    res.status(201).json(reminders);
});

export default router;
