import {
  Panel,
  Grid,
  Container,
  Flex,
  Avatar,
  Typography,
  Button,
} from "@maxhub/max-ui";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Panel mode="secondary">
          <Grid gap={12} cols={1}>
            <Container className="p-4">
              <Flex direction="column" align="center">
                <Avatar.Container size={72} form="circle">
                  <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
                </Avatar.Container>

                <Typography.Title>Иван Иванов</Typography.Title>
              </Flex>
            </Container>
          </Grid>
        </Panel>
      }
    />
  </Routes>
);

export default App;
