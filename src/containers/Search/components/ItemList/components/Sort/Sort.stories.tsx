import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sort, SortOption } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Container/Search/Components/Sort",
  component: Sort,
} as ComponentMeta<typeof Sort>;

const Template: ComponentStory<typeof Sort> = (args) => <Sort {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  activeValue: "STARS_ASC",
};

export const Interactive = Template.bind({});
Interactive.decorators = [
  () => {
    const [sortBy, setSortBy] = useState<SortOption>("ALPHABET_ASC");
    return (
      <>
        <Sort activeValue={sortBy} onChange={(sortBy) => setSortBy(sortBy)} />
        <p>Selected value: {sortBy}</p>
      </>
    );
  },
];
