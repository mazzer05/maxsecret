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
import ArrowRight from "../assets/arrow-right.svg";
import StatisticIcon from "../assets/statistic.svg";
import NormStatic from "../components/norm-static";
import MacronutrientBar from "../components/progress-bars";

const Main = () => (
  <Panel mode="secondary">
    <Grid gap={12} cols={1}>
      <Container className="p-4 bg-[#111c27]">
        <Flex direction="column" align="center">
          <Typography.Headline variant="large-strong">
            Дневник
          </Typography.Headline>

          <Flex direction="row" align="center" gap={72}>
            <Button mode="link">
              <img
                src={ArrowRight}
                alt="Предыдущий день"
                className="w-4 h-4 rotate-180 "
              />
            </Button>

            <Typography.Title>Четверг, 09 ноября</Typography.Title>

            <Button mode="link">
              <img src={ArrowRight} alt="Предыдущий день" className="w-4 h-4" />
            </Button>
          </Flex>
          <Flex
            direction="row"
            align="center"
            display="inline-flex"
            justify="between"
            className="w-full justify-between pl-20 pr-20"
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
            className="w-full justify-between"
          >
            <MacronutrientBar label="белки" current={12} max={100} unit="г" />
            <MacronutrientBar label="белки" current={12} max={100} unit="г" />
            <MacronutrientBar label="белки" current={12} max={100} unit="г" />
          </Flex>
        </Flex>
      </Container>
    </Grid>

    <TabBar />
  </Panel>
);

export default Main;
