import styles from "./FormsControl.module.css";
import {Field} from "redux-form";

export const createField = (place, validator, components, name, props= {}) => (
    <div>
        <Field placeholder={place}
               validate={validator}
               component={components}
               name={name}
               {...props}
        />
    </div>
)

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <input {...input} onChange={props.onParameterChange} autoFocus={true} onBlur={props.deactivateEditMode} value={props.machineParameterLocal}/>
            <br/>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}