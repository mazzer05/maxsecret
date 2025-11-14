import {
  Panel,
  Grid,
  Container,
  Flex,
  Typography,
  Button,
  CellAction,
} from "@maxhub/max-ui";

import Plus from "../assets/plus.svg?react";
import BreakFastIcon from "../assets/breakfast.svg?react";

const TestRamzan = () => (
  <Panel className="place-items-center">
    <CellAction
      before={<BreakFastIcon className="w-6 h-6" />}
      height="compact"
      mode="primary"
      onClick={() => {}}
      showChevron={false}
      className="max-w-[80%] border border-gray shadow-md rounded-xl items-center"
    >
      <span className="flex justify-between">
        Завтрак <Plus className="w-4 h-4" />
      </span>
    </CellAction>
  </Panel>
);

export default TestRamzan;
