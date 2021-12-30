import HTTP from "./index";

const getTasks = () => HTTP.get('/tasks');
const createTask = (data) => HTTP.post('/tasks', data);

export {getTasks, createTask}
