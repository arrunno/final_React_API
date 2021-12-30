import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Product from "../forms/Task";
import {Route, Routes} from "react-router-dom";
import Tasks from "../../page/Tasks";
import UserForm from "../forms/UserForm";
import UpdateTask from "../forms/UpdateTask";
import Cart from "../../page/Cart";
import Login from "../forms/Login";
import SecuredRoute from "../security/SecuredRoute";

export default () => {
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Routes>
                <Route path="/" element={<Tasks/>}/>

                <Route path="/tasks/create" element={<SecuredRoute/>}>
                    <Route path="/tasks/create" element={<Product/>}/>
                </Route>

                <Route path="/users/registration" element={<SecuredRoute roles={['ADMIN']}/>}>
                    <Route path="/users/registration" element={<UserForm/>}/>
                </Route>

                <Route path="/tasks/update/:taskId" element={<UpdateTask/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
    )
}
