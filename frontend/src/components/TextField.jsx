import PropTypes from "prop-types";

const TextField = ({
    classes = '',
    helperText,
    label,
    name,
    placeholder = ' ',
    fieldClasses = '',
    ...rest
}) => {
    return (
        <div className={`text-field-wrapper ${classes}`}>
            <label
                htmlFor={name}
                className='label-text'
            >
                {label}
            </label>

            <input
               className={`text-field ${fieldClasses}`}
                id={name}
                placeholder={placeholder}
                {...rest}
            />

            {helperText && <p className='helper-text'>{helperText}</p>}
        </div>
    );
}

TextField.propTypes = {
    classes: PropTypes.string.isRequired,
    helperText: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    fieldClasses: PropTypes.string.isRequired,
}

export default TextField;