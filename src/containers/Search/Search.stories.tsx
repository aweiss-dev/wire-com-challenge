import { ComponentStory, ComponentMeta } from "@storybook/react";
import { rest } from "msw";

import { Search } from ".";
import { MockedListData } from "./components/ItemList/ItemList.mockdata";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Container/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => {
  return <Search />;
};
export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  msw: {
    handlers: [
      rest.get(`https://libraries.io/api/bower-search`, (req, res, ctx) => {
        return res(ctx.json(MockedListData));
      }),
    ],
  },
};

export const Loading = Template.bind({});
Loading.args = {};
Loading.parameters = {
  msw: {
    handlers: [
      rest.get(`https://libraries.io/api/bower-search`, (req, res, ctx) => {
        return res(ctx.delay(4000));
      }),
    ],
  },
};

export const Error = Template.bind({});
Error.args = {};
Error.parameters = {
  msw: {
    handlers: [
      rest.get(`https://libraries.io/api/bower-search`, (req, res) => {
        return res.networkError("Error Occured");
      }),
    ],
  },
};
