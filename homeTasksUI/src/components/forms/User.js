import {Form, Formik} from 'formik';
import {
    Button,
    CircularProgress,
    Paper
} from '@mui/material';
import * as Yup from 'yup';
import TextFieldInput from "./TextFieldInput";
import Container from "@mui/material/Container";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required(),
    surname: Yup.string()
        .required(),
    email: Yup.string()
        .required()
        .email(),
    password: Yup.string()
        .min(5, 'Value must be more than 5'),
    reppassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export default () => (
    <Formik initialValues={{
        name: ''

    }}
            onSubmit={(values, helpers) => {
                console.log('values ', values);
                console.log('helpers ', helpers);

                helpers.setSubmitting(true);

                setTimeout(() => {
                    helpers.setSubmitting(false);
                }, 2000);

            }}
            validationSchema={validationSchema}>
        {props => (
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{p:1}}>
                    <Form className="product-form">
                        <TextFieldInput error={props.touched.name && props.errors.name}
                                        fieldName="name"
                                        label="Name:"
                                        placeholder="Type name..."/>
                        <TextFieldInput error={props.touched.surname && props.errors.surname}
                                        fieldName="Surname"
                                        label="Surname:"
                                        placeholder="Type surname..."/>
                        <TextFieldInput error={props.touched.email && props.errors.email}
                                        fieldName="email"
                                        label="Email:"
                                        placeholder="Type email..."/>
                        <TextFieldInput error={props.touched.password && props.errors.password}
                                        fieldName="password"
                                        label="Password:"
                                        placeholder="Type password..."
                                        type="password" />
                        <TextFieldInput error={props.touched.reppassword && props.errors.reppassword}
                                        fieldName="reppassword"
                                        label="Repeated password:"
                                        placeholder="Retype password..."
                                        type="password" />
                        {
                            props.isSubmitting ? <CircularProgress/> : <Button type="submit">Submit</Button>
                        }
                    </Form>
                </Paper>
            </Container>
        )}
    </Formik>


)