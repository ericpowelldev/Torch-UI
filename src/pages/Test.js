import React from "react";
import Container from "components/layout/container/Container";
import Flex from "components/layout/container/Flex";

//////////////////////// COMPONENT ////////////////////////
export default function Test(props) {
  return (
    <Container size="xl" style={{ background: `#555` }}>
      <Flex parent justifyContent="center" gap="4" style={{ background: `#888`, height: `100vh` }}>
        <Flex child xs="6">
          <div style={{ padding: `24px`, background: `#bbb`, width: `100%`, height: `100%` }}>xs=6</div>
        </Flex>
        <Flex child xs="6">
          <div style={{ padding: `24px`, background: `#ddd`, width: `100%`, height: `100%` }}>xs=6</div>
        </Flex>
        <Flex child xs="12">
          <div style={{ padding: `24px`, background: `#fff`, width: `100%`, height: `100%` }}>xs=12</div>
        </Flex>
        <Flex child xs="9">
          <div style={{ padding: `24px`, background: `#bbb`, width: `100%`, height: `100%` }}>xs=9</div>
        </Flex>
        <Flex child xs="3">
          <div style={{ padding: `24px`, background: `#ddd`, width: `100%`, height: `100%` }}>xs=3</div>
        </Flex>
        <Flex child xs>
          <div style={{ padding: `24px`, background: `#fff`, width: `100%`, height: `100%` }}>xs=true</div>
        </Flex>
        <Flex child>
          <div style={{ padding: `24px`, background: `#bbb`, width: `100%`, height: `100%` }}>none</div>
        </Flex>
      </Flex>
    </Container>
  );
}
