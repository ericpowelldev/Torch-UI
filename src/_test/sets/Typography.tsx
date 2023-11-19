// DEPENDENCIES -------------------------------------------------- //

import React from "react";
import { css } from "@emotion/css";

import { useTUI } from "providers/TUI";

import Text from "components/display/Text";
import Spacer from "components/layout/Spacer";

const tint = 500;

// COMPONENT -------------------------------------------------- //

const Typography = () => {
  const { theme } = useTUI();

  return (
    <>
      <Text variant="h1">Header 1 Text</Text>
      <Text variant="h2">Header 2 Text</Text>
      <Text variant="h3">Header 3 Text</Text>
      <Text variant="h4">Header 4 Text</Text>
      <Text variant="h5">Header 5 Text</Text>
      <Text variant="h6">Header 6 Text</Text>

      <Spacer />

      <Text variant="p1">Paragraph 1 Text</Text>
      <Text variant="p2">Paragraph 2 Text</Text>
      <Text variant="p3">Paragraph 3 Text</Text>
      <Text variant="p4">Paragraph 4 Text</Text>
      <Text variant="p5">Paragraph 5 Text</Text>
      <Text variant="p6">Paragraph 6 Text</Text>

      <Spacer />

      <Text href="http://localhost:3000/" target="_blank">
        Link Text
      </Text>

      <Spacer />

      <div
        className={css`
          width: fit-content;
          padding: 1rem;
          background: ${theme.color.bg[2]};
          backdrop-filter: blur(12px);
        `}>
        <Text color="fg1">Foreground 1 Text</Text>
        <Text color="fg2">Foreground 2 Text</Text>
        <Text color="fg3">Foreground 3 Text</Text>
        <Text color="fg4">Foreground 4 Text</Text>
      </div>

      <Spacer />

      <div
        className={css`
          width: fit-content;
          padding: 1rem;
          background: ${theme.color.bgi[2]};
          backdrop-filter: blur(12px);
        `}>
        <Text color="fgi1">Foreground Inverse 1 Text</Text>
        <Text color="fgi2">Foreground Inverse 2 Text</Text>
        <Text color="fgi3">Foreground Inverse 3 Text</Text>
        <Text color="fgi4">Foreground Inverse 4 Text</Text>
      </div>

      <Spacer />

      <Text color="primary" tint={tint}>
        Primary Text
      </Text>
      <Text color="secondary" tint={tint}>
        Secondary Text
      </Text>
      <Text color="tertiary" tint={tint}>
        Tertiary Text
      </Text>
      <Text color="utility" tint={tint}>
        Utility Text
      </Text>
      <Text color="info" tint={tint}>
        Info Text
      </Text>
      <Text color="warning" tint={tint}>
        Warning Text
      </Text>
      <Text color="error" tint={tint}>
        Error Text
      </Text>
      <Text color="success" tint={tint}>
        Success Text
      </Text>
    </>
  );
};

// EXPORT -------------------------------------------------- //

export default Typography;
