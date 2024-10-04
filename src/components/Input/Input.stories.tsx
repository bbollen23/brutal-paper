import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "BrutalPaper/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    label: "Name",
    placeholder: "Enter your full name"
};


const TemplateWithError: ComponentStory<typeof Input> = (args) => {
    const [inputValue, setInputValue] = useState<string>('');  // State to hold input value
    const var1 = 10;  // Example external variable

    const customValidator = (value: string) => {
        return value.length > var1;
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <Input
            {...args}
            value={inputValue}
            onChange={handleInputChange}
            validator={customValidator}
            errorMessage={`Input must be at least ${var1} characters.`}  // Optional error message
        />
    )
};

export const ErrorHandling = TemplateWithError.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorHandling.args = {
    label: "Name",
    placeholder: "Enter your full name"
};
