
import InputLabel from './InputLabel/InputLabel';
import InputError from './InputError/InputError';
import { InputFieldProps } from '../../types';

const InputField = ({
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    status,
    label,
    error,
}: any) => {
    return (
        <div className=''>
            {label && <InputLabel htmlFor={name} text={label} />}

            <input
                id={id}
                name={name}
                type={type}
                className="w-full block md:text-lg sm:text-base text-sm sm:p-3 p-2 ps-4 mb-4 border border-slate-300 rounded-lg transition-all focus:border-blue-500 hover:border-black"
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />

            <InputError condition={error.condition} text={error.text} />
        </div>
    );
};

export default InputField
