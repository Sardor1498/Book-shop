import React from "react";

const SelectClassic = ({
    register,
    options,
    width = "100%",
    name,
    withLabel = false,
    label,
    icon = null,
    type = "primary",
    required = false,
    onChange = (e) => console.log(e)
}) => {
    return (
        <>
            {withLabel ? (
                <label style={{ width: "356px" }}>
                    <span className="label_title">{label}</span>
                    <div className="select_primary_wrapper">
                        {icon && (
                            <span className="select_icon_wrap d-flex justify-center align-center">
                                <img src={icon} alt="" />
                            </span>
                        )}
                        <select
                            onChange={(e) => onChange(e)}
                            style={icon ? { paddingLeft: "60px", width } : { width }}
                            className={type}
                            name={name}
                            {...register(name, { required: true })}
                            // ref={register({
                            //     required,
                            // })}
                        >
                            {options.map((o) => (
                                <option value={o.value}>{o.label}</option>
                            ))}
                        </select>
                    </div>
                </label>
            ) : (
                <div className="select_primary_wrapper">
                    {icon && (
                        <span className="select_icon_wrap d-flex justify-center align-center">
                            <img src={icon} alt="" />
                        </span>
                    )}
                    <select
                        onChange={(e) => onChange(e)}
                        style={icon ? { paddingLeft: "60px", width } : { width }}
                        className={type}
                        name={name}
                        {...register(name, { required: true })}
                        // ref={register({
                        //     required: true,
                        // })}
                    >
                        {options.map((o, i) => (
                            <option key={o.label + i} value={o.value}>{o.label}</option>
                        ))}
                    </select>
                </div>
            )}
        </>
    );
};

export default SelectClassic;
