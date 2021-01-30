import Container from "@components/Container";
import Flex from "@components/Flex";
import Grid from "@components/Grid";

//////////////////////// COMPONENT ////////////////////////
export default function Home(props) {
  return (
    <Container size="xl" style={{ background: `#999`, height: `100vh` }}>
      {/* <Flex parent justify="between" spacing="4" wrap style={{ background: `#aaa`, height: `100vh` }}>
        <Flex child style={{ background: `#bbb` }}><p>Yo what up doggo</p></Flex>
        <Flex child style={{ background: `#ccc` }}></Flex>
        <Flex child lg="4" xs="12" style={{ background: `#ddd` }}></Flex>
        <Flex child lg="8" xs="12" style={{ background: `#eee` }}></Flex>
      </Flex> */}
      <Grid parent rows="4" cols="6" spacing="4" style={{ background: `#aaa`, height: `100vh` }}>
        <Grid parent child rows="2" cols="2" spacing="2">
          <Grid child style={{ background: `#bbb` }}>
            1
          </Grid>
          <Grid child style={{ background: `#bbb` }}>
            2
          </Grid>
          <Grid child style={{ background: `#bbb` }}>
            3
          </Grid>
          <Grid child style={{ background: `#bbb` }}>
            4
          </Grid>
        </Grid>
        <Grid child area="1/1/1/span 2" style={{ background: `#bbb` }}>
          1
        </Grid>
        <Grid child style={{ background: `#ccc` }}>
          2
        </Grid>
        <Grid child style={{ background: `#ddd` }}>
          3
        </Grid>
        <Grid child style={{ background: `#eee` }}>
          4
        </Grid>
        <Grid child style={{ background: `#bbb` }}>
          5
        </Grid>
        <Grid child style={{ background: `#ccc` }}>
          6
        </Grid>
        <Grid child style={{ background: `#ddd` }}>
          7
        </Grid>
        <Grid child style={{ background: `#eee` }}>
          8
        </Grid>
        <Grid child style={{ background: `#bbb` }}>
          9
        </Grid>
        <Grid child style={{ background: `#ccc` }}>
          10
        </Grid>
        <Grid child style={{ background: `#ddd` }}>
          11
        </Grid>
        <Grid child style={{ background: `#eee` }}>
          12
        </Grid>
        <Grid child style={{ background: `#bbb` }}>
          13
        </Grid>
        <Grid child style={{ background: `#ccc` }}>
          14
        </Grid>
        <Grid child style={{ background: `#ddd` }}>
          15
        </Grid>
        <Grid child style={{ background: `#eee` }}>
          16
        </Grid>
      </Grid>
    </Container>
  );
}
