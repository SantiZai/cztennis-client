import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

interface Props {
    signup: boolean;
}

const formSchema = Yup.object().shape({
    fullname: Yup.string()
        .min(4, "Mínimo 4 caracteres")
        .max(50, "Máximo 50 caracteres")
        .required("Campo requerido"),
    password: Yup.string()
        .min(4, "Mínimo 4 caracteres")
        .required("Campo requerido"),
    confirm: Yup.string()
        .test(
            "password-match",
            "Las contraseñas no coinciden",
            function (value) {
                return this.parent.password === value;
            }
        )
        .required("Campo requerido"),
});

const Auth = (props: Props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                    confirm: "",
                }}
                validationSchema={formSchema}
            >
                <Form>
                    <label htmlFor="fullname">Nombre completo: </label>
                    <Field name="fullname" type="text" />
                    {props.signup ? (
                        <div>
                            <h2>Registrarse</h2>
                        </div>
                    ) : (
                        <div>
                            <h2>Acceder</h2>
                        </div>
                    )}
                </Form>
            </Formik>
        </div>
    );
};

export default Auth;
