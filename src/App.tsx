import { Panel, Grid, Container, Flex, Avatar, Typography } from '@maxhub/max-ui';

const App = () => (
    <Panel mode="secondary" className="panel">
        <Grid gap={12} cols={1}>
            <Container className="me">
                <Flex direction="column" align="center">
                    <Avatar.Container size={72} form="squircle" className="me__avatar">
                        <Avatar.Image src="https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg" />
                    </Avatar.Container>

                    <Typography.Title>Иван Иванов</Typography.Title>
                </Flex>
            </Container>
        </Grid>
    </Panel>
)

export default App;
