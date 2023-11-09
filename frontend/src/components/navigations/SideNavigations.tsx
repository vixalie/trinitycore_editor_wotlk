import { ConfirmNQuit } from "@/wailsjs/go/main/App";
import { ActionIcon, Menu, ThemeIcon, Tooltip } from "@mantine/core";
import {
  IconBooks,
  IconMenu2,
  IconPower,
  IconQuestionMark,
  IconServer,
  IconShirt,
  IconUser,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { ActivatableNavIcon } from "./ActivatableNavLink";
import classes from "./SideNavigations.module.css";

export default function SideNavigations() {
  const navigate = useNavigate();

  return (
    <>
      <Tooltip label="服务器" position="right">
        <ActivatableNavIcon to="/server">
          <ThemeIcon variant="transparent">
            <IconServer stroke={1.5} />
          </ThemeIcon>
        </ActivatableNavIcon>
      </Tooltip>
      <Tooltip label="账号" position="right">
        <ActivatableNavIcon to="/account">
          <ThemeIcon variant="transparent">
            <IconUser stroke={1.5} />
          </ThemeIcon>
        </ActivatableNavIcon>
      </Tooltip>
      <Tooltip label="装备" position="right">
        <ActivatableNavIcon to="/equipment">
          <ThemeIcon variant="transparent">
            <IconShirt stroke={1.5} />
          </ThemeIcon>
        </ActivatableNavIcon>
      </Tooltip>
      <Tooltip label="法术效果" position="right">
        <ActivatableNavIcon to="/equipment">
          <ThemeIcon variant="transparent">
            <IconBooks stroke={1.5} />
          </ThemeIcon>
        </ActivatableNavIcon>
      </Tooltip>
      <div className={[classes["spacer"]]}></div>
      <Menu shadow="md" position="right-end">
        <Menu.Target>
          <Tooltip label="主菜单" position="right">
            <ActionIcon size="xl" variant="subtle">
              <ThemeIcon variant="transparent">
                <IconMenu2 stroke={1.5} />
              </ThemeIcon>
            </ActionIcon>
          </Tooltip>
        </Menu.Target>
        <Menu.Dropdown miw={130}>
          <Menu.Item
            leftSection={<IconQuestionMark stroke={1.5} />}
            onClick={() => navigate("/about")}
          >
            关于...
          </Menu.Item>
          <Menu.Item
            leftSection={<IconPower stroke={1.5} />}
            onClick={() => ConfirmNQuit()}
          >
            退出
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
