import { Grid } from "@mantine/core";
import Graph from "./Info/Graph";
import Table from "./Info/Tables";

const Info = () => {
  return (
    <Grid grow gutter="sm">
      <Grid.Col span={7}>
        <Graph/>
      </Grid.Col>
      <Grid.Col span={3}>
        <Table/>
      </Grid.Col>
    </Grid>
  );
}

export default Info;
