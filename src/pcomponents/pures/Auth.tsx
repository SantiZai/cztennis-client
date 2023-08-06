import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import ErrorMessageCustom from "./ErrorMessageCustom";

interface Props {
    signup: boolean;
}

interface Values {
    fullname: string;
    password: string;
    confirm?: string;
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
    const handleSubmit = (values: Values) => {
        console.log(values);
    };

    return (
        <div className="w-3/4 mx-auto">
            <Formik
                initialValues={{
                    fullname: "",
                    password: "",
                    confirm: "",
                }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={formSchema}
            >
                {({ touched, errors, isSubmitting }) => (
                    <Form>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="fullname">Nombre completo: </label>
                            <Field
                                name="fullname"
                                type="text"
                            />
                            {errors.fullname && touched.fullname && (
                                <ErrorMessageCustom
                                    name="fullname"
                                />
                            )}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="password">Contraseña: </label>
                            <Field
                                name="password"
                                type="text"
                            />
                            {errors.password && touched.password && (
                                <ErrorMessageCustom
                                    name="password"
                                />
                            )}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="confirm">Confirm: </label>
                            <Field
                                name="confirm"
                                type="text"
                            />
                            {errors.confirm && touched.confirm && (
                                <ErrorMessageCustom
                                    name="confirm"
                                />
                            )}
                        </div>
                        <Button type="submit">
                            {props.signup ? "Registrarse" : "Acceder"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Auth;
