import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input.js";
import "./input.stories.css";
import { useRef, useState } from "react";
import Button from "../button/Button.js";
import Spinner from "../spinner/Spinner.js";

const meta: Meta<typeof Input> = {
  title: "components/input",
  component: Input,
};

export default meta;
type Story = StoryObj<unknown>;

function RenderedInputs() {
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current);
  };
  return (
    <div className="inputs-wrapper">
      <Input
        label="Controlled input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="uncontrolled-example">
        <Input
          ref={inputRef}
          label="Uncontrolled input"
          defaultValue="Default value"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <Input label="With text helper" helperText="This is input" />
      <Input label="Error state" helperText="Fix error" error />
      <Input label="Prefix" inputPrefix={<Spinner size="m" />} />
      <Input label="Postfix" inputPostfix="$" />
    </div>
  );
}

export const Inputs: Story = {
  render: () => <RenderedInputs />,
};
