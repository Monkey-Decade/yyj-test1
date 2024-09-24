import React from "react";
import { Input as AntInput } from "antd";
import "./index.less";

export interface InputProps {
    /**
     * @description   输入框默认文本
     */
    placeholder?: string;
    /**
     * @description   输入框内容
     */
    value?: string;
    /**
     * @description   输入框内容变化时的回调
     */
    onChange?: () => void;
}

export default ({ placeholder, value, onChange }: InputProps) => {
    return <AntInput
            className="input-style"
            allowClear
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />;
};