// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import ButtonBase from "components/buttons/ButtonBase";
import Button from "components/buttons/Button";
import Spacer from "components/utils/Spacer";
import { useTUI } from "providers/TUI";

const tint = `500`;

// COMPONENT -------------------------------------------------- //

const Page = () => {
  const { theme } = useTUI();

  return (
    <div style={{ width: `100vw`, height: `100vh`, padding: 24, background: theme.color.bg[2] }}>
      <ButtonBase>ButtonBase</ButtonBase>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button color="primary" tint={tint} loading>
          Button
        </Button>
        <Spacer vertical />
        <Button color="secondary" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="tertiary" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="utility" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="info" tint={tint} warning>
          Button
        </Button>
        <Spacer vertical />
        <Button color="warning" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="error" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="success" tint={tint} success>
          Button
        </Button>
        <Spacer vertical />
        <Button color="grayscale" tint={tint} error>
          Button
        </Button>
        <Spacer vertical />
        <Button color="grayscale" tint={tint} disabled>
          Button
        </Button>
      </div>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button color="primary" variant="outline" tint={tint} loading>
          Button
        </Button>
        <Spacer vertical />
        <Button color="secondary" variant="outline" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="tertiary" variant="outline" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="utility" variant="outline" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="info" variant="outline" tint={tint} warning>
          Button
        </Button>
        <Spacer vertical />
        <Button color="warning" variant="outline" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="error" variant="outline" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="success" variant="outline" tint={tint} success>
          Button
        </Button>
        <Spacer vertical />
        <Button color="grayscale" variant="outline" tint={tint} error>
          Button
        </Button>
        <Spacer vertical />
        <Button color="grayscale" variant="outline" tint={tint} disabled>
          Button
        </Button>
      </div>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button color="primary" variant="transparent" tint={tint} loading>
          Button
        </Button>
        <Spacer vertical />
        <Button color="secondary" variant="transparent" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="tertiary" variant="transparent" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="utility" variant="transparent" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="info" variant="transparent" tint={tint} warning>
          Button
        </Button>
        <Spacer vertical />
        <Button color="warning" variant="transparent" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="error" variant="transparent" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="success" variant="transparent" tint={tint} success>
          Button
        </Button>
        <Spacer vertical />
        <Button color="grayscale" variant="transparent" tint={tint} error>
          Button
        </Button>
        <Spacer vertical />
        <Button color="grayscale" variant="transparent" tint={tint} disabled>
          Button
        </Button>
      </div>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center` }}>
        <Button color="primary" variant="link" tint={tint} loading>
          Button
        </Button>
        <Spacer vertical />
        <Button color="secondary" variant="link" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="tertiary" variant="link" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="utility" variant="link" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="info" variant="link" tint={tint} warning>
          Button
        </Button>
        <Spacer vertical />
        <Button color="warning" variant="link" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="error" variant="link" tint={tint}>
          Button
        </Button>
        <Spacer vertical />
        <Button color="success" variant="link" tint={tint} success>
          Button
        </Button>
        <Spacer vertical />
        <Button color="grayscale" variant="link" tint={tint} error>
          Button
        </Button>
        <Spacer vertical />
        <Button color="grayscale" variant="link" tint={tint} disabled>
          Button
        </Button>
      </div>
    </div>
  );
};

// EXPORT -------------------------------------------------- //

export default Page;
