import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select.js";
import "./select.stories.css";
import { useRef, useState } from "react";
import Button from "../button/Button.js";

const meta: Meta<typeof Select> = {
  title: "components/select",
  component: Select,
};

export default meta;
type Story = StoryObj<unknown>;

function RenderedSelects() {
  const [value, setValue] = useState("1");
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    console.log(selectRef.current);
  };

  return (
    <div className="selects-wrapper">
      <Select
        label="Controlled"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
      />
      <div className="select-uncontrolled-example">
        <Select
          ref={selectRef}
          label="Uncontrolled"
          defaultValue="2"
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" },
          ]}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <Select
        label="Small"
        selectSize="s"
        options={[
          { value: "1", label: "Small" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
      />
      <Select
        label="Medium"
        selectSize="m"
        options={[
          { value: "1", label: "Medium" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
      />
      <Select
        label="Large"
        selectSize="l"
        options={[
          { value: "1", label: "Large" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
      />
    </div>
  );
}

export const Selects: Story = {
  render: () => <RenderedSelects />,
};
