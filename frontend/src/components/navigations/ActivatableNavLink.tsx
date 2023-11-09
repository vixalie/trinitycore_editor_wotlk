import { ActionIcon } from "@mantine/core";
import { isNil } from "ramda";
import {
  ForwardRefExoticComponent,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
} from "react";
import { NavLinkProps, useMatch, useNavigate } from "react-router-dom";

type ActivatableNavLinkProps = {
  to: NavLinkProps["to"];
  disabled?: boolean;
};

export const ActivatableNavIcon = forwardRef(
  (
    { to, disabled, children }: PropsWithChildren<ActivatableNavLinkProps>,
    ref: ForwardedRef
  ): ForwardRefExoticComponent<PropsWithChildren<ActivatableNavLinkProps>> => {
    const matches = useMatch(to);
    const navigate = useNavigate();
    return (
      <ActionIcon
        size="xl"
        variant={isNil(matches) ? "subtle" : "light"}
        disabled={disabled}
        onClick={() => !isNil(to) && navigate(to)}
        ref={ref}
      >
        {children}
      </ActionIcon>
    );
  }
);
