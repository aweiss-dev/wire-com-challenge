import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

import { SearchField } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Container/Search/Components/SearchField",
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

const Wrapper = styled.div`
  margin: 1rem;
`;

const Template: ComponentStory<typeof SearchField> = (args) => (
  <Wrapper>
    <SearchField {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  value: "Value here",
};
export const Error = Template.bind({});
Error.args = {
  errorText: "Something went wrong",
};
export const Interactive = Template.bind([]);
Interactive.decorators = [
  () => {
    const [inputValue, setInputValue] = useState("");
    return (
      <Wrapper>
        <SearchField
          value={inputValue}
          onValueChange={(value) => setInputValue(value)}
        />
        <p>Input Value: {inputValue}</p>
      </Wrapper>
    );
  },
];
