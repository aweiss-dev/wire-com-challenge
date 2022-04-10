import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Pagination } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Container/Search/Components/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  return <Pagination {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
  itemCount: 30,
  maxVisibleItems: 5,
  activePage: 1,
};
export const Interactive = Template.bind({});
Interactive.args = {};
Interactive.decorators = [
  () => {
    const [activePage, setActivePage] = useState(1);
    return (
      <>
        <Pagination
          activePage={activePage}
          onChange={(page) => setActivePage(page)}
          itemCount={100}
          maxVisibleItems={5}
        />
        <p>Active Page Number: {activePage}</p>
      </>
    );
  },
];
