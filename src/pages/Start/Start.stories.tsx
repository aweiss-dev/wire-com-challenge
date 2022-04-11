import { ComponentStory, ComponentMeta } from "@storybook/react";
import { rest } from "msw";

import { MockedListData } from "../../containers/Search/components/ItemList/ItemList.mockdata";
import { uri, getEndpoint } from "../../containers/Search/Search.client";
import { Start } from "./Start";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Pages/Start",
  component: Start,
  parameters: {
    msw: {
      handlers: [
        rest.get(`${uri}${getEndpoint({ name: "" })}`, (req, res, ctx) => {
          return res(ctx.json(MockedListData));
        }),
      ],
    },
  },
} as ComponentMeta<typeof Start>;

const Template: ComponentStory<typeof Start> = () => {
  return <Start />;
};
export const Basic = Template.bind({});
Basic.args = {};
