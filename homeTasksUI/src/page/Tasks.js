import {useEffect, useState} from "react";
import {getTasks} from "../api/taskApi";
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {addToCart} from "../store/slice/cartSlice";
import {useDispatch} from "react-redux";
import {Trans, useTranslation} from "react-i18next";

const Tasks = () => {
    const [ tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const dispatcher = useDispatch();
    const onAddTask = (task) => dispatcher(addToCart(task));

    const {t} = useTranslation();

    useEffect(() => {
        getTasks()
            .then(({data}) => setTasks(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Container maxWidth="md" sx={{my: 2}}>
                {
                    loading ?
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                            <CircularProgress/>
                        </Box>
                        :
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 100}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Category</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                        <TableCell align="right">Doer</TableCell>
                                        <TableCell align="right">Value</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tasks.map((task) => (
                                        <TableRow
                                            key={task.id}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell>
                                                {task.name}
                                            </TableCell>
                                            <TableCell align="right">{task.category}</TableCell>
                                            <TableCell align="right">{task.status}</TableCell>
                                            <TableCell align="right">{task.doer}</TableCell>
                                            <TableCell align="right">{task.value}</TableCell>
                                            <TableCell>
                                                <Button variant="outlined" onClick={() => onAddTask(task)}>
                                                    <AddShoppingCartIcon/>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                }
            </Container>
        </>
    )
}

export default Tasks;
