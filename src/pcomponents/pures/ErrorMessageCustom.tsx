import { ErrorMessage } from "formik";

interface Props {
    name: string;
    className?: string;
}

const ErrorMessageCustom = (props: Props) => {
    return (
        <ErrorMessage
            name={props.name}
            component="div"
            className={`font-bold text-red-600 ${props.className}`}
        />
    );
};

export default ErrorMessageCustom;
