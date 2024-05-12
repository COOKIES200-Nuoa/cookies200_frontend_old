import { ReactEventHandler } from "react";

export interface InputErrorProps {
    condition: boolean,
    text: string
}

export interface InputLabelProps {
    htmlFor: string,
    text: string
}

export interface InputFieldProps {
    id: string,
    name: string,
    type: string,
    placeholder: string,
    value: any,
    onChange: ReactEventHandler,
    onBlur: ReactEventHandler,
    status: boolean,
    label: string,
    error: InputErrorProps,
}

export interface User {
    username: string;
    password: string;
}
