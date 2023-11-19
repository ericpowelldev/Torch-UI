// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import { IoMdSettings } from "react-icons/io";

import Button from "components/buttons/Button";
import Spacer from "components/layout/Spacer";

const tint = 500;

// COMPONENT -------------------------------------------------- //

const Buttons = () => {
  return (
    <>
      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button color="primary" tint={tint}>
          Primary
        </Button>
        <Spacer vertical />
        <Button color="secondary" tint={tint}>
          Secondary
        </Button>
        <Spacer vertical />
        <Button color="tertiary" tint={tint}>
          Tertiary
        </Button>
        <Spacer vertical />
        <Button color="utility" tint={tint} icon={<IoMdSettings />}>
          Utility
        </Button>
        <Spacer vertical />
        <Button color="info" tint={tint} loading>
          Info
        </Button>
        <Spacer vertical />
        <Button color="warning" tint={tint} warning>
          Warning
        </Button>
        <Spacer vertical />
        <Button color="error" tint={tint} error>
          Error
        </Button>
        <Spacer vertical />
        <Button color="success" tint={tint} success>
          Success
        </Button>
        <Spacer vertical />
        <Button disabled>Disabled</Button>
      </div>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button variant="transparent" color="primary" tint={tint}>
          Primary
        </Button>
        <Spacer vertical />
        <Button variant="transparent" color="secondary" tint={tint}>
          Secondary
        </Button>
        <Spacer vertical />
        <Button variant="transparent" color="tertiary" tint={tint}>
          Tertiary
        </Button>
        <Spacer vertical />
        <Button variant="transparent" color="utility" tint={tint} icon={<IoMdSettings />}>
          Utility
        </Button>
        <Spacer vertical />
        <Button variant="transparent" color="info" tint={tint} loading>
          Info
        </Button>
        <Spacer vertical />
        <Button variant="transparent" color="warning" tint={tint} warning>
          Warning
        </Button>
        <Spacer vertical />
        <Button variant="transparent" color="error" tint={tint} error>
          Error
        </Button>
        <Spacer vertical />
        <Button variant="transparent" color="success" tint={tint} success>
          Success
        </Button>
        <Spacer vertical />
        <Button variant="transparent" disabled>
          Disabled
        </Button>
      </div>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button variant="simple" color="primary" tint={tint}>
          Primary
        </Button>
        <Spacer vertical />
        <Button variant="simple" color="secondary" tint={tint}>
          Secondary
        </Button>
        <Spacer vertical />
        <Button variant="simple" color="tertiary" tint={tint}>
          Tertiary
        </Button>
        <Spacer vertical />
        <Button variant="simple" color="utility" tint={tint} icon={<IoMdSettings />}>
          Utility
        </Button>
        <Spacer vertical />
        <Button variant="simple" color="info" tint={tint} loading>
          Info
        </Button>
        <Spacer vertical />
        <Button variant="simple" color="warning" tint={tint} warning>
          Warning
        </Button>
        <Spacer vertical />
        <Button variant="simple" color="error" tint={tint} error>
          Error
        </Button>
        <Spacer vertical />
        <Button variant="simple" color="success" tint={tint} success>
          Success
        </Button>
        <Spacer vertical />
        <Button variant="simple" disabled>
          Disabled
        </Button>
      </div>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button variant="outline" color="primary" tint={tint}>
          Primary
        </Button>
        <Spacer vertical />
        <Button variant="outline" color="secondary" tint={tint}>
          Secondary
        </Button>
        <Spacer vertical />
        <Button variant="outline" color="tertiary" tint={tint}>
          Tertiary
        </Button>
        <Spacer vertical />
        <Button variant="outline" color="utility" tint={tint} icon={<IoMdSettings />}>
          Utility
        </Button>
        <Spacer vertical />
        <Button variant="outline" color="info" tint={tint} loading>
          Info
        </Button>
        <Spacer vertical />
        <Button variant="outline" color="warning" tint={tint} warning>
          Warning
        </Button>
        <Spacer vertical />
        <Button variant="outline" color="error" tint={tint} error>
          Error
        </Button>
        <Spacer vertical />
        <Button variant="outline" color="success" tint={tint} success>
          Success
        </Button>
        <Spacer vertical />
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </div>

      <Spacer size="xl" />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button color="primary" tint={0}>
          Tint 0
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={50}>
          Tint 50
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={100}>
          Tint 100
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={150}>
          Tint 150
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={200}>
          Tint 200
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={250}>
          Tint 250
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={300}>
          Tint 300
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={350}>
          Tint 350
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={400}>
          Tint 400
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={450}>
          Tint 450
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={500}>
          Tint 500
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={550}>
          Tint 550
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={600}>
          Tint 600
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={650}>
          Tint 650
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={700}>
          Tint 700
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={750}>
          Tint 750
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={800}>
          Tint 800
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={850}>
          Tint 850
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={900}>
          Tint 900
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={950}>
          Tint 950
        </Button>
        <Spacer vertical size="xs" />
        <Button color="primary" tint={1000}>
          Tint 1000
        </Button>
        <Spacer vertical size="xs" />
      </div>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button color="secondary" tint={0}>
          Tint 0
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={50}>
          Tint 50
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={100}>
          Tint 100
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={150}>
          Tint 150
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={200}>
          Tint 200
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={250}>
          Tint 250
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={300}>
          Tint 300
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={350}>
          Tint 350
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={400}>
          Tint 400
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={450}>
          Tint 450
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={500}>
          Tint 500
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={550}>
          Tint 550
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={600}>
          Tint 600
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={650}>
          Tint 650
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={700}>
          Tint 700
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={750}>
          Tint 750
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={800}>
          Tint 800
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={850}>
          Tint 850
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={900}>
          Tint 900
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={950}>
          Tint 950
        </Button>
        <Spacer vertical size="xs" />
        <Button color="secondary" tint={1000}>
          Tint 1000
        </Button>
        <Spacer vertical size="xs" />
      </div>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button color="tertiary" tint={0}>
          Tint 0
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={50}>
          Tint 50
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={100}>
          Tint 100
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={150}>
          Tint 150
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={200}>
          Tint 200
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={250}>
          Tint 250
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={300}>
          Tint 300
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={350}>
          Tint 350
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={400}>
          Tint 400
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={450}>
          Tint 450
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={500}>
          Tint 500
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={550}>
          Tint 550
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={600}>
          Tint 600
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={650}>
          Tint 650
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={700}>
          Tint 700
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={750}>
          Tint 750
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={800}>
          Tint 800
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={850}>
          Tint 850
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={900}>
          Tint 900
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={950}>
          Tint 950
        </Button>
        <Spacer vertical size="xs" />
        <Button color="tertiary" tint={1000}>
          Tint 1000
        </Button>
        <Spacer vertical size="xs" />
      </div>

      <Spacer size="xl" />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button color="primary" tint={tint} size="xs" loading icon={<IoMdSettings />}>
          Extra Small
        </Button>
        <Spacer vertical />
        <Button color="primary" tint={tint} size="sm" loading icon={<IoMdSettings />}>
          Small
        </Button>
        <Spacer vertical />
        <Button color="primary" tint={tint} size="md" loading icon={<IoMdSettings />}>
          Medium
        </Button>
        <Spacer vertical />
        <Button color="primary" tint={tint} size="lg" loading icon={<IoMdSettings />}>
          Large
        </Button>
        <Spacer vertical />
        <Button color="primary" tint={tint} size="xl" loading icon={<IoMdSettings />}>
          Extra Large
        </Button>
      </div>

      <Spacer size="xl" />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button color="primary" tint={tint} pill icon={<IoMdSettings />}>
          Pill
        </Button>
        <Spacer vertical />
        <Button variant="transparent" color="primary" tint={tint} pill icon={<IoMdSettings />}>
          Pill
        </Button>
        <Spacer vertical />
        <Button variant="simple" color="primary" tint={tint} pill icon={<IoMdSettings />}>
          Pill
        </Button>
        <Spacer vertical />
        <Button variant="outline" color="primary" tint={tint} pill icon={<IoMdSettings />}>
          Pill
        </Button>
        <Spacer vertical />
        <Button color="primary" tint={tint} size="xs" pill loading icon={<IoMdSettings />}>
          Pill
        </Button>
        <Spacer vertical />
        <Button variant='transparent' color="primary" tint={tint} size="xs" pill loading icon={<IoMdSettings />}>
          Pill
        </Button>
        <Spacer vertical />
        <Button variant='simple' color="primary" tint={tint} size="xs" pill loading icon={<IoMdSettings />}>
          Pill
        </Button>
        <Spacer vertical />
        <Button variant='outline' color="primary" tint={tint} size="xs" pill loading icon={<IoMdSettings />}>
          Pill
        </Button>
      </div>
    </>
  );
};

// EXPORT -------------------------------------------------- //

export default Buttons;
