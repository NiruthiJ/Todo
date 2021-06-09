import React from "react";

import { Story } from "@storybook/react";
import DaysRemainText, {
  IDaysRemainProps,
} from "./components/atom/DaysRemainText/DaysRemainText";
const Template: Story<IDaysRemainProps> = (args) => (
  <DaysRemainText {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  endDate: new Date(),
  completed: true,
};
