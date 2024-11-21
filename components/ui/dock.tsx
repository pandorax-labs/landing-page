"use client";

import React, { PropsWithChildren, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}


const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>((props, ref) => {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(props.children, (child) => {
      if (React.isValidElement(child) && child.type === DockIcon) {
        return React.cloneElement(child, {
          ...child.props,
          mouseX: mouseX,
          magnification: props.magnification,
          distance: props.distance,
        });
      }
      return child;
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={cn(dockVariants({ className: props.className }), {
        "items-start": props.direction === "top",
        "items-center": props.direction === "middle",
        "items-end": props.direction === "bottom",
      })}
    >
      {renderChildren()}
    </motion.div>
  );
});

const DockIcon: React.FC<{ size?: number; children: React.ReactNode }> = ({ size, children }) => {
  return <div style={{ fontSize: size }}>{children}</div>;
};

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}



DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
