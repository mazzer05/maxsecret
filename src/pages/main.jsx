import {
  Panel,
  Grid,
  Container,
  Flex,
  Avatar,
  Typography,
  Button,
  CellList,
  CellAction,
} from "@maxhub/max-ui";
import TabBar from "../components/tabs";
import CircularProgress from "../components/circular-progress";
import { currentNorm, dailyNorm, dailyRemain } from "../mocks/variables";
import ArrowRight from "../assets/arrow-right.svg?react";
import NormStatic from "../components/norm-static";
import MacronutrientBar from "../components/progress-bars";
import Plus from "../assets/plus.svg?react";
import BreakFastIcon from "../assets/breakfast.svg?react";
import MealItem from "../components/meal-item";
import { useWindowScroll } from "@reactuses/core";

const Main = () => {
  const { y } = useWindowScroll();
  const showShadow = y > 20;

  return (
    <Panel mode="secondary" className="flex flex-col">
      <div className="min-h-dvh bg-inherit pb-[70px]">
        <Grid gap={12} cols={1}>
          <CellList
            mode="full-width"
            filled={true}
            className={`fixed top-0 left-0 right-0 z-10 rounded-b-4xl overflow-hidden ${
              showShadow ? "shadow-xl" : ""
            }`}
          >
            <Flex direction="column" align="center" className="p-2">
              <Typography.Headline variant="large-strong" className="mb-4 mt-2">
                Дневник
              </Typography.Headline>

              <div className="flex flex-row items-center justify-between w-full">
                <Button mode="link">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </Button>

                <Typography.Title variant="custom" className="text-xl">
                  Четверг, 09 ноября
                </Typography.Title>

                <Button mode="link">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Flex>
          </CellList>
          <CellList
            mode="full-width"
            filled={true}
            className="rounded-b-4xl overflow-hidden"
          >
            <Flex
              direction="column"
              align="center"
              className="p-2 pb-5 pt-[110px]"
            >
              <Flex
                direction="row"
                align="center"
                justify="between"
                className="w-full justify-between pl-18 pr-18 mt-3"
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
                <MacronutrientBar
                  label="белки"
                  current={12}
                  max={100}
                  unit="г"
                />
                <MacronutrientBar
                  label="жиры"
                  current={22}
                  max={100}
                  unit="г"
                />
                <MacronutrientBar
                  label="углеводы"
                  current={42}
                  max={100}
                  unit="г"
                />
              </Flex>
            </Flex>
          </CellList>
        </Grid>

        <div className="flex flex-col p-2 pb-5 ">
          <Typography.Headline className="pl-2 pt-2 mb-3">
            Приемы пищи
          </Typography.Headline>

          <MealItem id={1} label={"Завтрак"} current={144} max={350} />
          <MealItem id={1} label={"Завтрак"} current={144} max={350} />
          <MealItem id={1} label={"Завтрак"} current={144} max={350} />
          <MealItem id={1} label={"Завтрак"} current={144} max={350} />
          <MealItem id={1} label={"Завтрак"} current={144} max={350} />
        </div>

        <TabBar />
      </div>
    </Panel>
  );
};

export default Main;
