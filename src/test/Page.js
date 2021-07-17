//////////////////////// DEPENDENCIES ////////////////////////

import React from "react";
import { createUseStyles } from "react-jss";
import Button from "components/buttons/Button";
import Spinner from "components/utils/Spinner";

//////////////////////// COMPONENT ////////////////////////

function Page(props) {
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
      },
      break_v: {
        width: `100%`,
        height: `16px`,
      },
      break_h: {
        width: `24px`,
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
      <Spinner color="success" />

      <div className={cls.break_v} />

      <div className={cls.flexParent}>
        <div className={cls.flexChild}>
          <Button loading color="success" tint="100">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button loading color="success" tint="100" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button loading color="success" tint="100" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="success" tint="200">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="200" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="200" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="success" tint="300">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="300" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="300" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="success" tint="400">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="400" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="400" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button loading color="success" tint="500">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button loading color="success" tint="500" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button loading color="success" tint="500" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="success" tint="600">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="600" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="600" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="success" tint="700">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="700" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="700" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button color="success" tint="800">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="800" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button color="success" tint="800" variant="link">
            Button
          </Button>
        </div>

        <div className={cls.break_h} />

        <div className={cls.flexChild}>
          <Button loading color="success" tint="900">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button loading color="success" tint="900" variant="outline">
            Button
          </Button>
          <div className={cls.break_v} />
          <Button loading color="success" tint="900" variant="link">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
}

//////////////////////// EXPORT ////////////////////////

export default Page;
