import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Item } from ".";
import {
  CompleteData,
  MissingDescription,
  MissingHomepage,
} from "./Item.mockdata";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Container/Search/Components/Item",
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => {
  return <Item {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
  ...CompleteData,
};
export const WithoutHomepage = Template.bind({});
WithoutHomepage.args = {
  ...MissingHomepage,
};
export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  ...MissingDescription,
};
