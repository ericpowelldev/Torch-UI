// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import { IoMdSettings } from "react-icons/io";

import Button from "components/buttons/Button";
import Spacer from "components/utils/Spacer";

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
        <Button color="utility" tint={tint} size="xs" icon={<IoMdSettings />}>
          Utility
        </Button>
        <Spacer vertical />
        <Button color="info" tint={tint} size="sm" loading>
          Info
        </Button>
        <Spacer vertical />
        <Button color="warning" tint={tint} size="md" warning>
          Warning
        </Button>
        <Spacer vertical />
        <Button color="error" tint={tint} size="lg" error>
          Error
        </Button>
        <Spacer vertical />
        <Button color="success" tint={tint} size="xl" success>
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
    </>
  );
};

// EXPORT -------------------------------------------------- //

export default Buttons;
