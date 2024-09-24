import React from "react";
import { Button as AntButton } from "antd";
import "./index.less";

export interface ButtonProps {
    /**
     * @description   设置按钮类型
     * @default       default
     */
    type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
    /**
     * @description   按钮名称
     */
    label: String;
    /**
     * @description   点击按钮时的回调
     */
    onClick: () => void;
}

export default ({ type, label, onClick }: ButtonProps) => {
    return <AntButton className="button-style" type={type || "default"} onClick={onClick}>{label}</AntButton>;
};