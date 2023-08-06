import * as Yup from "yup";
import { Formik, Field, Form, FormikHelpers } from "formik";
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

const getSchema = (signup: boolean) => {
    let formSchema = Yup.object().shape({
        fullname: Yup.string()
            .min(4, "Mínimo 4 caracteres")
            .max(50, "Máximo 50 caracteres")
            .required("Campo requerido"),
        password: Yup.string()
            .min(4, "Mínimo 4 caracteres")
            .required("Campo requerido"),
    });

    if (signup) {
        formSchema = formSchema.shape({
            confirm: Yup.string()
                .required("Campo requerido")
                .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
        });
    }

    return formSchema;
};

const Auth = (props: Props) => {
    const handleSubmit = (
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
    ) => {
        if (props.signup) {
            console.log("Creando cuenta", values);
        } else {
            console.log("Iniciando sesión", values);
        }
        setTimeout(() => {
            console.log("aa");
            setSubmitting(false);
        }, 1000);
    };

    const initialValues = {
        fullname: "",
        password: "",
        confirm: "",
    };

    return (
        <div className="w-3/4 mx-auto">
            <Formik
                initialValues={initialValues}
                onSubmit={
                    handleSubmit as (
                        values: Values & { confirm: string },
                        {
                            setSubmitting,
                        }: FormikHelpers<Values & { confirm: string }>
                    ) => void
                }
                validationSchema={getSchema(props.signup)}
                enableReinitialize
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
                                <ErrorMessageCustom name="fullname" />
                            )}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="password">Contraseña: </label>
                            <Field
                                name="password"
                                type="text"
                            />
                            {errors.password && touched.password && (
                                <ErrorMessageCustom name="password" />
                            )}
                        </div>
                        {props.signup && (
                            <div className="flex flex-col mb-4">
                                <label htmlFor="confirm">Confirm: </label>
                                <Field
                                    name="confirm"
                                    type="text"
                                />
                                {errors.confirm && touched.confirm && (
                                    <ErrorMessageCustom name="confirm" />
                                )}
                            </div>
                        )}
                        <Button type="submit">
                            {isSubmitting
                                ? "submitting"
                                : props.signup
                                ? "Registrarse"
                                : "Acceder"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Auth;
