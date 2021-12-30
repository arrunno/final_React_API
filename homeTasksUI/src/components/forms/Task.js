import {Form, Formik} from 'formik';
import {Alert, Button, CircularProgress, Paper, Snackbar} from '@mui/material';
import * as Yup from 'yup';
import TextFieldInput from "./TextFieldInput";
import Container from "@mui/material/Container";
import '../../style.css'
import {createTask} from "../../api/taskApi";
import {useEffect, useState} from "react";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Value must be more than 5')
        .required(),
    category: Yup.string()
        .required()
    // ,
    // quantity: Yup.number()
    //     .typeError('Must be a number')
    //     .positive()
    //     .required(),
    // price: Yup.number()
    //     .typeError('Must be a number')
    //     .positive()
    //     .required()
});

export default () => {
    const [notification, setNotification] = useState({isVisible: false, message:'', severity: ''});

    const onCreateTask = (task, helpers) => {
        createTask(task)
            .then(({status}) => {
                if(status === 201) {
                    setNotification({isVisible: true, message: 'Task created successfully', severity: 'success'});
                    helpers.resetForm();
                }
            })
            .catch((error) => setNotification({isVisible: true, message: 'Something went wrong', severity: 'error'}))
            .finally(() => helpers.setSubmitting(false));
    }

    return (

        <Formik initialValues={{
            name: '',
            category: '',
        }}
                onSubmit={onCreateTask}
                validationSchema={validationSchema}>
            {props => (
                <Container maxWidth="sm">

                    <Paper elevation={3} sx={{p: 1}}>
                        {
                            notification.isVisible &&
                            <Alert severity={notification.severity} sx={{ width: '100%' }}>
                                {notification.message}
                            </Alert>
                        }
                        <Form className="task-form">
                            <TextFieldInput error={props.touched.category && !!props.errors.category}
                                            fieldName="category"
                                            label="Category:"/>
                            <TextFieldInput error={props.touched.name && !!props.errors.name}
                                            fieldName="name"
                                            label="Name:"
                                            placeholder="Type name..."/>
                            <TextFieldInput error={props.touched.status && !!props.errors.status}
                                            fieldName="status"
                                            label="status:"
                                            placeholder="Task status..."/>
                            <TextFieldInput error={props.touched.doer && !!props.errors.doer}
                                            fieldName="doer"
                                            label="doer:"
                                            placeholder="Type doer..."/>
                            <TextFieldInput error={props.touched.value && !!props.errors.value}
                                            fieldName="value"
                                            label="value:"
                                            placeholder="Type value..."/>
                            {
                                props.isSubmitting ? <CircularProgress/> : <Button type="submit">Submit</Button>
                            }
                        </Form>
                    </Paper>
                </Container>
            )}
        </Formik>
    )
}
