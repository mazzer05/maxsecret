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
import { currentNorm, dailyNorm } from "../mocks/variables";

const Main = () => (
  <Panel mode="secondary">
    <Grid gap={12} cols={1}>
      <Container className="p-4">
        <Flex direction="column" align="center">
          <Avatar.Container size={72} form="circle">
            <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
          </Avatar.Container>
          <Typography.Title>Иван Иванов</Typography.Title>
          <div className="p-4">
            <h2>Сегодня</h2>
            <CircularProgress
              value={currentNorm}
              max={dailyNorm}
              label="ккал"
            />
          </div>
        </Flex>
      </Container>
    </Grid>

    <TabBar />
  </Panel>
);

export default Main;
