// DEPENDENCIES -------------------------------------------------- //

import React from "react";

import Input from "components/inputs/Input";
import Spacer from "components/layout/Spacer";

// COMPONENT -------------------------------------------------- //

const Typography = () => {
  return (
    <>
      <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, width: `100%` }}>
        <Input multiline fullWidth required label="Standard Input" placeholder="Standard placeholder..." variant="standard" type="text" />
        <Spacer vertical size="xl" />
        <Input fullWidth required label="Standard Input" placeholder="Standard placeholder..." variant="standard" />
        <Spacer vertical size="xl" />
        <Input fullWidth disabled label="Standard Input" placeholder="Standard placeholder..." variant="standard" />
      </div>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center`, width: `100%` }}>
        <Input
          select
          fullWidth
          required
          label="Transparent Input"
          placeholder="Transparent placeholder..."
          variant="transparent"
          type="number"
        />
        <Spacer vertical size="xl" />
        <Input fullWidth required label="Transparent Input" placeholder="Transparent placeholder..." variant="transparent" />
        <Spacer vertical size="xl" />
        <Input fullWidth disabled label="Transparent Input" placeholder="Transparent placeholder..." variant="transparent" />
      </div>

      <Spacer />

      <div style={{ display: `flex`, alignItems: `center`, width: `100%` }}>
        <Input
          select
          fullWidth
          required
          label="Outline Input"
          placeholder="Outline placeholder..."
          variant="outline"
          type="password"
        />
        <Spacer vertical size="xl" />
        <Input fullWidth required label="Outline Input" placeholder="Outline placeholder..." variant="outline" />
        <Spacer vertical size="xl" />
        <Input fullWidth disabled label="Outline Input" placeholder="Outline placeholder..." variant="outline" />
      </div>
    </>
  );
};

// EXPORT -------------------------------------------------- //

export default Typography;
