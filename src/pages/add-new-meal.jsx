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
  SearchInput,
  ToolButton,
  CellSimple,
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
import AddFoodIcon from "../assets/add-food.svg?react";
import ScanIcon from "../assets/scan.svg?react";
import { useMaxBridge } from "../contexts/maxBridgeContext";
import { useNavigate } from "react-router-dom";

const AddNewMeal = ({ meal, date }) => {
  const navigate = useNavigate();
  return (
    <Panel mode="secondary" className="flex flex-col">
      <div className="min-h-dvh bg-inherit pb-[70px]">
        <CellList
          mode="full-width"
          filled={true}
          className=" rounded-b-4xl overflow-hidden "
        >
          <Flex direction="column" align="center" className="p-2">
            <div className="grid grid-cols-3 grid-rows-1 w-full items-center justify-center">
              <Button
                mode="link"
                onClick={() => {
                  navigate(-1);
                }}
                asChild
              >
                <span className="w-4 h-4">
                  <ArrowRight className="w-4 h-4 rotate-180 justify-start" />
                </span>
              </Button>

              <Typography.Headline
                variant="large-strong"
                className="justify-self-center"
              >
                {meal}
              </Typography.Headline>
            </div>

            <Typography.Title variant="custom" className="text-xl">
              {date}
            </Typography.Title>

            <SearchInput className="mt-5 w-full" />
            <div
              className="grid grid-cols-2 grid-rows-1 gap-2 justify-between mt-5 mb-5 w-full"
              gap={12}
            >
              <ToolButton
                appearance="secondary"
                onClick={function Ki() {}}
                icon={<AddFoodIcon className="w-8 h-8" />}
              >
                Добавить
              </ToolButton>

              <ToolButton
                appearance="secondary"
                onClick={() => {
                  navigate("/barcode");
                }}
                icon={<ScanIcon className="w-8 h-8" />}
              >
                Сканировать
              </ToolButton>
            </div>
          </Flex>
        </CellList>

        <TabBar />
      </div>
    </Panel>
  );
};

export default AddNewMeal;
