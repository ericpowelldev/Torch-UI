//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import { createUseStyles } from "react-jss";

import { BiCart, BiSave } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Button from "components/buttons/Button";
import LoadingIcon from "components/utils/LoadingIcon";
import WarningIcon from "components/utils/WarningIcon";
import ErrorIcon from "components/utils/ErrorIcon";

//////////////////////// COMPONENT ////////////////////////

export default function Page(props) {
  const useStyles = createUseStyles(
    {
      root: {
        position: `fixed`,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
      },
      flexParent: {
        display: `flex`,
        alignItems: `center`,
        width: `fit-content`,
        marginLeft: `auto`,
        marginRight: `auto`,
      },
      break_v: {
        width: `100%`,
        height: `16px`,
      },
      break_h: {
        width: `24px`,
        height: `auto`,
      },
      break_h_sm: {
        width: `8px`,
        height: `auto`,
      },
      test: {
        padding: 0,
        fontSize: 9,
      },
    },
    {
      index: 100,
    }
  );
  const cls = useStyles();

  return (
    <div className={cls.root}>
      <LoadingIcon style={{ display: `inline-block` }} />
      <LoadingIcon style={{ display: `inline-block` }} disabled />
      <LoadingIcon style={{ display: `inline-block` }} color="primary" />
      <LoadingIcon style={{ display: `inline-block` }} color="secondary" />
      <LoadingIcon style={{ display: `inline-block` }} color="tertiary" />
      <LoadingIcon style={{ display: `inline-block` }} color="info" />
      <LoadingIcon style={{ display: `inline-block` }} color="error" />
      <LoadingIcon style={{ display: `inline-block` }} color="warning" />
      <LoadingIcon style={{ display: `inline-block` }} color="success" />

      <div className={cls.break_v} />

      <WarningIcon style={{ display: `inline-block` }} />
      <WarningIcon style={{ display: `inline-block` }} disabled />
      <WarningIcon style={{ display: `inline-block` }} color="primary" />
      <WarningIcon style={{ display: `inline-block` }} color="secondary" />
      <WarningIcon style={{ display: `inline-block` }} color="tertiary" />
      <WarningIcon style={{ display: `inline-block` }} color="info" />
      <WarningIcon style={{ display: `inline-block` }} color="error" />
      <WarningIcon style={{ display: `inline-block` }} color="warning" />
      <WarningIcon style={{ display: `inline-block` }} color="success" />

      <div className={cls.break_v} />

      <ErrorIcon style={{ display: `inline-block` }} />
      <ErrorIcon style={{ display: `inline-block` }} disabled />
      <ErrorIcon style={{ display: `inline-block` }} color="primary" />
      <ErrorIcon style={{ display: `inline-block` }} color="secondary" />
      <ErrorIcon style={{ display: `inline-block` }} color="tertiary" />
      <ErrorIcon style={{ display: `inline-block` }} color="info" />
      <ErrorIcon style={{ display: `inline-block` }} color="error" />
      <ErrorIcon style={{ display: `inline-block` }} color="warning" />
      <ErrorIcon style={{ display: `inline-block` }} color="success" />

      <div className={cls.break_v} />

      <div className={cls.flexParent}>
        <div className={cls.flexChild}>
          <Button error color="primary" tint="100">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button error color="primary" tint="100" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button error color="primary" tint="100" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="primary" tint="200">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="200" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="200" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="primary" tint="300">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="300" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="300" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="primary" tint="400">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="400" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="400" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button warning color="primary" tint="500">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button warning color="primary" tint="500" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button warning color="primary" tint="500" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="primary" tint="600">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="600" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="600" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="primary" tint="700">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="700" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="700" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="primary" tint="800">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="800" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="primary" tint="800" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button loading color="primary" tint="900">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button loading color="primary" tint="900" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button loading color="primary" tint="900" variant="link">
            Button
          </Button>
        </div>
      </div>

      <div className={cls.break_v} />
      <div className={cls.break_v} />
      <div className={cls.break_v} />

      <div className={cls.flexParent}>
        <Button icon={<BiCart />} color="primary">
          Add To Cart
        </Button>
        <div className={cls.break_h_sm} />
        <Button icon={<BiSave />} color="secondary">
          Save
        </Button>
        <div className={cls.break_h_sm} />
        <Button icon={<AiOutlineCloseCircle />} color="default">
          Cancel
        </Button>
      </div>
    </div>
  );
}