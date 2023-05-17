import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Nav_Setting } from "../../data";
import { useState } from "react";
import AntSwitch from "../../components/AntSwitch";
import useSettings from "../../hooks/useSettings";
import profile from "./../../assets/profile/profile.jpg"
const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setselected] = useState(0);
  const { onToggleMode } = useSettings();
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0 0 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack alignItems={"center"} spacing={3} direction="column">
          <Box
            sx={{
              height: 64,
              width: 64,
              borderRadius: 1.5,
              backgroundColor: theme.palette.primary.main,
            }}
            p={1}
          >
            <img src={Logo} alt="chat app logo" />
          </Box>

          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems={"center"}
            spacing={2}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  p={1}
                >
                  <IconButton sx={{ width: "max-content", color: "#ffffff" }}>
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setselected(el.index)}
                  sx={{ width: "max-content", color: "#000" }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: 48 }} />

            {Nav_Setting.map((el) => (
              selected === 3 ?
            
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
                p={1}
              >
                <IconButton sx={{ width: "max-content", color: "#ffffff" }}>
                  {el.icon}
                </IconButton>
              </Box>:
                              <IconButton
                              onClick={() => setselected(3)}
                              sx={{ width: "max-content", color: "#000" }}
                            >
                              {el.icon}
                            </IconButton>
            ))}
          </Stack>
          <Stack spacing={4}>
          <AntSwitch
            defaultChecked={theme.palette.mode === "dark"}
            onChange={onToggleMode}
          />
          {/* Profile Menu */}
          <Avatar src={profile} alt="no image"/>
        </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
