// types.ts

import { IconType } from "react-icons";

export interface FormData {
    name: string;
    email: string;
    linkedin: string;
    github: string;
    rememberMe: boolean;
}

export interface InputConfig {
    id: keyof FormData;
    type?: string;
    label?: string;
    icon: IconType;
    placeholder: string;
}
