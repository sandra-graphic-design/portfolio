import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PaletteIcon from '@mui/icons-material/Palette';
import { InsertDriveFile } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { DarkMode } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../pages/_app';
import { Translate } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreHoriz } from '@mui/icons-material';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import useTranslation from '../intl/useTranslation';
import { useRouter } from 'next/router';


const Header = () => {
  const colorMode = useContext(ColorModeContext);

  //Translate Menu
  const [anchorElTranslate, setAnchorEltranslate] = useState<null | HTMLElement>(null);
  const openTranslate = Boolean(anchorElTranslate);
  const handleTranslationMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEltranslate(event.currentTarget);
  };
  const handleTranslationMenuClose = () => {
    setAnchorEltranslate(null);
  };

  //Context Menu
  const [anchorElContext, setAnchorElContext] = useState<null | HTMLElement>(null);
  const openContext = Boolean(anchorElContext);
  const handleContextMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElContext(event.currentTarget);
  };
  const handleContextMenuClose = () => {
    setAnchorElContext(null);
  };

  const { setLocale, locales } = useTranslation();
  const { asPath, pathname, push, route } = useRouter();

  function convertLocale(locale: string) {
    if (locale === "en") {
      return "English"
    } else if (locale === "es") {
      return "Español"
    } else if (locale === "ca") {
      return "Catalán"
    }
  }

  function handleLocaleChange(language: string) {
    if (!window) {
      return;
    }

    const regex = new RegExp(`^/(${locales.join('|')})`);
    localStorage.setItem('lang', language);
    setLocale(language);

    if (!route.includes('post/')) {
      push(pathname, asPath.replace(regex, `/${language}`));
    }

    handleTranslationMenuClose()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} color="primary" enableColorOnDark>
        <Toolbar>
          <Tooltip title="Home" arrow>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorElTranslate}
            open={openTranslate}
            onClose={handleTranslationMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {locales.map((locale) => (
              <MenuItem key={locale} onClick={() => handleLocaleChange(locale)}>
                {convertLocale(locale)}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="secondary">
            Portfolio
          </Typography>
          <Tooltip title="Language" arrow>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleTranslationMenuClick}
            >
              <Translate />
            </IconButton>
          </Tooltip>
          <Tooltip title="Dark Mode" arrow>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={colorMode.toggleColorMode}
            >
              <DarkMode />
            </IconButton>
          </Tooltip>
          <Tooltip title="More" arrow>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleContextMenuClick}
            >
              <MoreHoriz />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorElContext}
            open={openContext}
            onClose={handleContextMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link href="https://docs.google.com/document/d/1C055L0uhJOlNPqIaOaA1ZBP4XYTQJNPCDOkXfJzlEFo/edit?usp=share_link" target="_blank">
              <MenuItem onClick={handleContextMenuClose}>
                <ListItemIcon>
                  <InsertDriveFile fontSize="small" color="secondary" />
                </ListItemIcon>
                <ListItemText>Resume</ListItemText>
              </MenuItem>
            </Link>
            <Link href="https://www.behance.net/sbenito" target="_blank">
              <MenuItem onClick={handleContextMenuClose}>
                <ListItemIcon>
                  <PaletteIcon fontSize="small" color="secondary" />
                </ListItemIcon>
                <ListItemText>Behance</ListItemText>
              </MenuItem>
            </Link>
            <Link href="https://www.linkedin.com/in/sandrabenito/" target="_blank">
              <MenuItem onClick={handleContextMenuClose}>
                <ListItemIcon>
                  <LinkedInIcon fontSize="small" color="secondary" />
                </ListItemIcon>
                <ListItemText>LinkedIn</ListItemText>
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
