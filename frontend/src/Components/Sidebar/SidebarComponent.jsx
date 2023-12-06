import { useState } from "react";

import {
    Sidebar,
    Menu,
    MenuItem,
  } from "react-pro-sidebar";
  import { Box, IconButton, Typography  } from "@mui/material";
  import { Link } from "react-router-dom";
  
  import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
  import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function SidebarComponent() {
    const [isCollapsed, setisCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  return (
    <>
<div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        breakPoint="md"
        style={{ height: "100%" }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <Menu iconShape="square">
              {/* LOGO */}
              <MenuItem
                onClick={() => setisCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography>Admin Dashboard</Typography>
                    <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>
              {!isCollapsed && (
                <Box mb="25px">
                 
                 
                </Box>
              )}

              <Link to="#" className="menu-bars">
                <MenuItem icon={<HomeOutlinedIcon />}>Dashboard</MenuItem>
              </Link>
              <Link to="/user" className="menu-bars">
                <MenuItem icon={<HomeOutlinedIcon />}>จัดการผู้ใช้งาน</MenuItem>
              </Link>
         
              {/* <SubMenu icon={<MapOutlinedIcon />} label="Data">
                <Link to={"/admin/viewtable"} className="menu-bars">
                  <MenuItem icon={<TableViewIcon />}>
                    {" "}
                    Table 
                  </MenuItem>
                </Link>
                <MenuItem icon={<BarChartOutlinedIcon />}>
                  {" "}
                  Line charts
                </MenuItem>
              </SubMenu> */}

              
            </Menu>

            <div
              style={{
                padding: "0 24px",
                marginBottom: "8px",
                marginTop: "32px",
              }}
            >
             
            </div>

           
          </div>
        </div>
      </Sidebar>
      <main>
        <div style={{ padding: "16px 2px ", color: "#44596e" }}>
          <div style={{ marginBottom: "16px" }}>
            {broken && (
              <IconButton onClick={() => setToggled(!toggled)}>
                <MenuOutlinedIcon />
              </IconButton>
            )}
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default SidebarComponent
