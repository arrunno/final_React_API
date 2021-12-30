import Container from "@mui/material/Container";
import {
    Alert, Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../store/slice/cartSlice";

export default () => {
    const products = useSelector(state => state.cart);
    const dispatcher = useDispatch();
    const onRemoveProduct = (id) => dispatcher(removeFromCart(id));

    return (
        <Container maxWidth="md" sx={{my: 2}}>
            {
                products.length === 0 ?
                    <Alert severity="info">Basket is empty!</Alert>
                    :
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 100}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Category</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Sub total</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow
                                        key={product.id}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                        <TableCell component="th" scope="row">{product.name}</TableCell>
                                        <TableCell align="right">{product.category}</TableCell>
                                        <TableCell align="right">{product.description}</TableCell>
                                        <TableCell align="right">{product.count}</TableCell>
                                        <TableCell align="right">{product.price}</TableCell>
                                        <TableCell align="right">{product.price * product.count}</TableCell>
                                        <TableCell>
                                            <Button variant="outlined"
                                                    color="error"
                                                    onClick={() => onRemoveProduct(product.id)}
                                                >
                                                <DeleteOutlineIcon/>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </Container>
    )
}
