import {
  Panel,
  Grid,
  Container,
  Flex,
  Avatar,
  Typography,
  Button,
} from "@maxhub/max-ui";
import TabBar from "../components/tabs";
import CircularProgress from "../components/circular-progress";
import { currentNorm, dailyNorm, dailyRemain } from "../mocks/variables";
import ArrowRight from "../assets/arrow-right.svg?react";
import NormStatic from "../components/norm-static";
import MacronutrientBar from "../components/progress-bars";

const Main = () => (
  <Panel mode="primary" className="h-dvw">
    <Grid gap={12} cols={1}>
      <Container className="p-4">
        <Flex direction="column" align="center">
          <Typography.Headline variant="large-strong" className="mb-5 mt-8">
            Дневник
          </Typography.Headline>

          <div className="flex flex-row items-center justify-between w-full">
            <Button mode="link">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </Button>

            <Typography.Title>Четверг, 09 ноября</Typography.Title>

            <Button mode="link">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <Flex
            direction="row"
            align="center"
            justify="between"
            className="w-full justify-between pl-18 pr-18 mt-6"
          >
            <NormStatic value={dailyNorm} label="норма" />
            <CircularProgress
              value={currentNorm}
              max={dailyNorm}
              label="ккал"
            />
            <NormStatic value={dailyRemain} label="осталось" />
          </Flex>
          <Flex
            direction="row"
            align="center"
            display="inline-flex"
            justify="between"
            className="w-full justify-between pt-3"
          >
            <MacronutrientBar label="белки" current={12} max={100} unit="г" />
            <MacronutrientBar label="жиры" current={22} max={100} unit="г" />
            <MacronutrientBar
              label="углеводы"
              current={42}
              max={100}
              unit="г"
            />
          </Flex>
        </Flex>
      </Container>
    </Grid>

    <TabBar />
  </Panel>
);

export default Main;
