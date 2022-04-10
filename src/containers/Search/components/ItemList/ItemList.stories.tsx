import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ItemList } from ".";
import { MockedListData } from "./ItemList.mockdata";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Container/Search/Components/ItemList",
  component: ItemList,
} as ComponentMeta<typeof ItemList>;

const Template: ComponentStory<typeof ItemList> = (args) => {
  return <ItemList {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
  items: MockedListData,
  loading: false,
};
export const Loading = Template.bind({});
Loading.args = {
  items: [],
  loading: true,
};
export const Error = Template.bind({});
Error.args = {
  items: [],
  loading: false,
  error: "Hi, I am an Error Message",
};
export const EmptyResults = Template.bind({});
EmptyResults.args = {
  items: [],
  loading: false,
};
