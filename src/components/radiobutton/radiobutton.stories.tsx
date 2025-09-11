import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";
import "./radiobutton.stories.css";
import { useState } from "react";

const meta: Meta<typeof RadioButton> = {
  title: "components/radioButton",
  component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

function RenderedRadioButtons() {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="radio-buttons-wrapper">
      <h3 className="radio-buttons-header">Controlled Group</h3>
      <RadioButton
        label="Option 1"
        name="radio-group"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleGroupChange}
      />
      <RadioButton
        label="Option 2"
        name="radio-group"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleGroupChange}
      />
      <RadioButton
        label="Option 3"
        name="radio-group"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={handleGroupChange}
      />

      <h3 className="radio-buttons-header">Uncontrolled Group</h3>
      <RadioButton
        label="Uncontrolled 1"
        name="uncontrolled-group"
        defaultChecked
      />
      <RadioButton label="Uncontrolled 2" name="uncontrolled-group" />
    </div>
  );
}

export const RadioButtons: Story = {
  render: () => <RenderedRadioButtons />,
};
