import {FormEvent,ChangeEvent } from 'react';

export default interface form {
    handleSubmit:(event: FormEvent<HTMLFormElement>)=> void;
    reset:()=> void;
    inputFilter:string|number;
    inputSearch:string|number;
    handleInputChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}