// DEPENDENCIES ---------------------------------------------------------------- //

import React from "react";

import { BoolValues, ColorValues, TintValues, TooltipPlacementValues } from "@utils/types";

import { useTui } from "@tui";
import { useRootStyles, useContentStyles, useArrowStyles } from "./styles";

// PROPS ---------------------------------------------------------------- //

interface TooltipProps {
  // General Properties //

  props?: {
    root?: React.HTMLAttributes<HTMLElement>;
    content?: React.HTMLAttributes<HTMLElement>;
    arrow?: React.HTMLAttributes<HTMLElement>;
  };
  classes?: {
    root?: string;
    content?: string;
    arrow?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactElement;

  // Specialized Properties //

  arrow?: BoolValues;
  color?: ColorValues;
  content: React.ReactNode;
  disabled?: BoolValues;
  disableInteractive?: BoolValues;
  enterDelay?: number;
  followCursor?: BoolValues;
  leaveDelay?: number;
  maxWidth?: React.CSSProperties["maxWidth"];
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  placement?: TooltipPlacementValues;
  tint?: TintValues;

  // HTML Properties //

  [x: string]: any;
}

// COMPONENT ---------------------------------------------------------------- //

const Tooltip = ({
  // General Properties //

  props,
  classes,
  className,
  children,

  // Specialized Properties //

  arrow = true,
  color = "utility",
  content,
  disabled = false,
  disableInteractive = false,
  enterDelay = 0,
  followCursor = false,
  leaveDelay = 0,
  maxWidth = 256,
  onClose,
  onOpen,
  open: controlledOpen,
  placement = "top",
  tint = 700,

  // HTML Properties //

  ...rest
}: TooltipProps) => {
  // Hooks
  const { theme } = useTui();

  // Styles
  const rootStyles = useRootStyles(theme, { followCursor, placement }, [
    classes?.root,
    className,
  ]);
  const contentStyles = useContentStyles(theme, { color, disabled, maxWidth, tint }, [
    classes?.content,
  ]);
  const arrowStyles = useArrowStyles(theme, { color, disabled, placement, tint }, [
    classes?.arrow,
  ]);

  // State
  const [internalOpen, setInternalOpen] = React.useState(false);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

  // Refs
  const childRef = React.useRef<HTMLElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const enterTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const leaveTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Controlled State
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  // Calculate position based on placement
  const calculatePosition = (mouseX?: number, mouseY?: number) => {
    if (!childRef.current || !tooltipRef.current) return;

    const childRect = childRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const spacing = 6;

    let top = 0;
    let left = 0;

    if (followCursor && mouseX !== undefined && mouseY !== undefined) {
      top = mouseY - tooltipRect.height - spacing;
      left = mouseX - tooltipRect.width / 2;
    } else {
      // Calculate based on placement
      switch (placement) {
        case "top":
          top = childRect.top - tooltipRect.height - spacing;
          left = childRect.left + childRect.width / 2 - tooltipRect.width / 2;
          break;
        case "top-start":
          top = childRect.top - tooltipRect.height - spacing;
          left = childRect.left;
          break;
        case "top-end":
          top = childRect.top - tooltipRect.height - spacing;
          left = childRect.right - tooltipRect.width;
          break;
        case "bottom":
          top = childRect.bottom + spacing;
          left = childRect.left + childRect.width / 2 - tooltipRect.width / 2;
          break;
        case "bottom-start":
          top = childRect.bottom + spacing;
          left = childRect.left;
          break;
        case "bottom-end":
          top = childRect.bottom + spacing;
          left = childRect.right - tooltipRect.width;
          break;
        case "left":
          left = childRect.left - tooltipRect.width - spacing;
          top = childRect.top + childRect.height / 2 - tooltipRect.height / 2;
          break;
        case "left-start":
          left = childRect.left - tooltipRect.width - spacing;
          top = childRect.top;
          break;
        case "left-end":
          left = childRect.left - tooltipRect.width - spacing;
          top = childRect.bottom - tooltipRect.height;
          break;
        case "right":
          left = childRect.right + spacing;
          top = childRect.top + childRect.height / 2 - tooltipRect.height / 2;
          break;
        case "right-start":
          left = childRect.right + spacing;
          top = childRect.top;
          break;
        case "right-end":
          left = childRect.right + spacing;
          top = childRect.bottom - tooltipRect.height;
          break;
      }
    }

    // Ensure tooltip stays within viewport
    const padding = 8;
    top = Math.max(padding, Math.min(top, window.innerHeight - tooltipRect.height - padding));
    left = Math.max(padding, Math.min(left, window.innerWidth - tooltipRect.width - padding));

    setPosition({ top, left });
  };

  // Handle open
  const handleOpen = () => {
    if (disabled) return;
    clearTimeout(leaveTimeoutRef.current);

    enterTimeoutRef.current = setTimeout(() => {
      if (controlledOpen === undefined) {
        setInternalOpen(true);
      }
      if (onOpen) onOpen();
    }, enterDelay);
  };

  // Handle close
  const handleClose = () => {
    if (disabled) return;
    clearTimeout(enterTimeoutRef.current);

    leaveTimeoutRef.current = setTimeout(() => {
      if (controlledOpen === undefined) {
        setInternalOpen(false);
      }
      if (onClose) onClose();
    }, leaveDelay);
  };

  // Handle mouse move for follow cursor
  const handleMouseMove = (e: MouseEvent) => {
    if (disabled) return;
    if (followCursor) {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      calculatePosition(e.clientX, e.clientY);
    }
  };

  // Update position when open or placement changes
  React.useEffect(() => {
    if (disabled) return;
    if (isOpen) {
      calculatePosition(
        followCursor ? cursorPosition.x : undefined,
        followCursor ? cursorPosition.y : undefined
      );
    }
  }, [isOpen, placement]);

  // Add window scroll/resize listeners
  React.useEffect(() => {
    if (disabled) return;
    if (isOpen) {
      const handleUpdate = () => calculatePosition();
      window.addEventListener("scroll", handleUpdate, true);
      window.addEventListener("resize", handleUpdate);

      return () => {
        window.removeEventListener("scroll", handleUpdate, true);
        window.removeEventListener("resize", handleUpdate);
      };
    }
  }, [isOpen]);

  // Cleanup timeouts
  React.useEffect(() => {
    if (disabled) return;
    return () => {
      clearTimeout(enterTimeoutRef.current);
      clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  // Clone child and add event handlers
  const childProps = (children as any)?.props || {};
  const child = React.isValidElement(children)
    ? React.cloneElement(children, {
        ref: childRef,
        onMouseEnter: (e: React.MouseEvent) => {
          handleOpen();
          if (typeof childProps.onMouseEnter === "function") {
            childProps.onMouseEnter(e);
          }
        },
        onMouseLeave: (e: React.MouseEvent) => {
          handleClose();
          if (typeof childProps.onMouseLeave === "function") {
            childProps.onMouseLeave(e);
          }
        },
        onMouseMove: followCursor
          ? (e: React.MouseEvent) => {
              handleMouseMove(e.nativeEvent);
              if (typeof childProps.onMouseMove === "function") {
                childProps.onMouseMove(e);
              }
            }
          : childProps.onMouseMove,
        onFocus: (e: React.FocusEvent) => {
          handleOpen();
          if (typeof childProps.onFocus === "function") {
            childProps.onFocus(e);
          }
        },
        onBlur: (e: React.FocusEvent) => {
          handleClose();
          if (typeof childProps.onBlur === "function") {
            childProps.onBlur(e);
          }
        },
        "aria-describedby": isOpen ? "torch-ui-tooltip" : undefined,
      } as any)
    : children;

  // Don't render tooltip if no content
  if (!content) {
    return child;
  }

  // Return Component
  return (
    <>
      {child}
      {isOpen && (
        <div
          ref={tooltipRef}
          id="torch-ui-tooltip"
          role="tooltip"
          className={rootStyles}
          style={{
            top: position.top,
            left: position.left,
          }}
          onMouseEnter={
            !disableInteractive
              ? () => {
                  clearTimeout(leaveTimeoutRef.current);
                }
              : undefined
          }
          onMouseLeave={!disableInteractive ? handleClose : undefined}
          {...props?.root}
          {...rest}
        >
          <div className={contentStyles} {...props?.content}>
            {content}
          </div>
          {arrow ? <div className={arrowStyles} {...props?.arrow} /> : null}
        </div>
      )}
    </>
  );
};

// EXPORT ---------------------------------------------------------------- //

export default Tooltip;
