"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import PeopleIcon from "@mui/icons-material/People";
import Link from "next/link";
import PaidIcon from "@mui/icons-material/Paid";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import DiscountIcon from "@mui/icons-material/Discount";
export default function SideBar() {
  return (
    <List>
      {/* Botón Tickets */}
      <ListItem disablePadding>
        <ListItemButton component={Link} href="/admin/tickets">
          <ListItemIcon>
            <ConfirmationNumberOutlinedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Tickets" />
        </ListItemButton>
      </ListItem>

      {/* Botón Colivers */}
      <ListItem disablePadding>
        <ListItemButton component={Link} href="/admin/colivers">
          <ListItemIcon>
            <PeopleIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Colivers" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} href="/admin/">
          <ListItemIcon>
            <NewspaperIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Noticias" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} href="/admin/">
          <ListItemIcon>
            <DiscountIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Beneficios" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} href="/admin/">
          <ListItemIcon>
            <ReceiptLongIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Contratos" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} href="/admin/">
          <ListItemIcon>
            <PaidIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Multas" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
