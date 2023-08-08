import * as Yup from "yup";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Button } from "@/components/ui/button";
import ErrorMessageCustom from "./ErrorMessageCustom";
import { useContext, useState } from "react";
import { AuthContext } from "@/utils/AuthProvider";
import { createUser, login } from "@/utils/services";
import { useToast } from "@/components/ui/use-toast";
import { User } from "@/utils/interfaces";
import { useNavigate } from "react-router-dom";

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

const Auth = () => {
    const [signup, setSignup] = useState<boolean>(false);

    const { setLoggedIn, setUser } = useContext(AuthContext);

    const { toast } = useToast();

    const navigate = useNavigate();

    const handleSubmit = async (
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
    ) => {
        if (signup) {
            try {
                const res = await createUser(values.fullname, values.password);
                if (res.status === 200) {
                    toast({
                        title: "Usuario creado",
                        description: `Bienvenido ${values.fullname}`,
                    });
                    setSignup(false);
                }
            } catch (err) {
                console.error(err);
            }
        } else {
            try {
                const res = await login(values.fullname, values.password);
                if ((res.status = 200)) {
                    setLoggedIn(true);
                    setUser(res.data as User);
                    localStorage.setItem("user", res.data.id);
                    navigate("/");
                }
            } catch (err) {
                console.error(err);
            }
            setSubmitting(false);
        }
    };

    const initialValues = {
        fullname: "",
        password: "",
        confirm: "",
    };

    return (
        <div className="w-3/4 h-screen flex flex-col justify-end py-10 mx-auto">
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
                validationSchema={getSchema(signup)}
                enableReinitialize
            >
                {({ touched, errors, isSubmitting, resetForm }) => (
                    <Form className="mb-20">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="fullname">Nombre completo</label>
                            <Field
                                name="fullname"
                                type="text"
                                style={{ color: "black", borderRadius: "5px" }}
                            />
                            {errors.fullname && touched.fullname && (
                                <ErrorMessageCustom name="fullname" />
                            )}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="password">Contraseña</label>
                            <Field
                                name="password"
                                type="text"
                                style={{ color: "black", borderRadius: "5px" }}
                            />
                            {errors.password && touched.password && (
                                <ErrorMessageCustom name="password" />
                            )}
                        </div>
                        {signup && (
                            <div className="flex flex-col mb-4">
                                <label htmlFor="confirm">Confirm: </label>
                                <Field
                                    name="confirm"
                                    type="text"
                                    style={{
                                        color: "black",
                                        borderRadius: "5px",
                                    }}
                                />
                                {errors.confirm && touched.confirm && (
                                    <ErrorMessageCustom name="confirm" />
                                )}
                            </div>
                        )}
                        <div className="w-full flex justify-between">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "submitting"
                                    : signup
                                    ? "Registrarse"
                                    : "Acceder"}
                            </Button>
                            <Button
                                variant="link"
                                size="nothing"
                                spacing="topBottom"
                                type="button"
                                onClick={() => {
                                    resetForm();
                                    setSignup(!signup);
                                }}
                                disabled={isSubmitting}
                            >
                                {signup ? "Acceder" : "Registrarse"}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Auth;
