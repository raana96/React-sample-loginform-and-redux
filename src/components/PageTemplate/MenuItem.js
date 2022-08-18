import React, { Fragment } from "react";

import {
  ListItem,
  ListItemIcon,
  DashboardIcon,
  ListItemText,
  ShoppingCartIcon,
  PeopleIcon,
  BarChartIcon,
  LayersIcon,
} from "../../includes";
import { Link } from "react-router-dom";
export const mainListItems = (
  <Fragment>
    <Link to="/dashboard" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon className="iconDrawer"/>
        </ListItemIcon>
        <ListItemText primary="Dashboard"/>
      </ListItem>
    </Link>
    <Link to="/orders"  style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon className="iconDrawer"/>
        </ListItemIcon>
        <ListItemText primary="my orders" />
      </ListItem>
    </Link>
    <Link to="/customers" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon className="iconDrawer"/>
        </ListItemIcon>
        <ListItemText primary="customers" />
      </ListItem>
    </Link>
    <Link to="/reports" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon className="iconDrawer"/>
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </Link>
    <Link to="/integrations" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon className="iconDrawer"/>
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </Link>
  </Fragment>
);
