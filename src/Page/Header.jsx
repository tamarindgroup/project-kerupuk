import React, {useEffect, useState} from "react";
import { useTheme } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Typography, Button } from "@mui/material";
import CallIcon from '../Image/calling.png';
import EmailIcon from '../Image/mail.png';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LogoPusatKerupuk from '../Image/logo pusat kerupuk.png';
import { FaFacebookF } from "react-icons/fa";
import { SiGooglemybusiness } from "react-icons/si";
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import { VscHome } from "react-icons/vsc";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { LuContact } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { FcGlobe } from "react-icons/fc";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Textra from 'react-textra'
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Header = () => {
    const theme = useTheme();
    const { t, i18n } = useTranslation("global");
    const [isLoading, setIsLoading] = useState(false);
    const [age, setAge] = React.useState('');
    const [language, setLanguage] = useState('');
    const [labelText, setLabelText] = useState('Translate');
    const activeLanguage = i18n.language;
    const [whatsappClicked, setWhatsappClicked] = useState(false);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
      }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      }));

      const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          width: `800px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: '800px',
        }),
      }));

      const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            setOpen(true);
        };

        const handleDrawerClose = () => {
            setOpen(false);
        };

    useEffect(() => {
        AOS.init({ duration: 3000 })
      }, []);

    const skewStyle = {
        transform: 'skew(-35deg)'
      };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });


    return (
        <>
         <div className="header" style={{
            borderBottom: isDesktop ? 'solid 2px #e32222' : 0,
            borderBottomColor: isDesktop ? '#e32222' : 0,
            height: isDesktop ? '217px' : '175px',
            width: '100%'
            // boxSizing: 'border-box'
          }}>
            <div className="header-top" style={{
                marginTop: isDesktop ? '-7px' : '-1px',
                color: '#fff',
                width: isDesktop ? '38%' : 'auto',
                height: isDesktop ? '53px' : '80px',
                paddingLeft: isDesktop ? '0' : 60,
                float: isDesktop ?  'right' : 0,
                padding: isDesktop ? '0 0 0 350px' : 0,
                lineHeight: '40px',
                position: !isDesktop ? 0 : 0,
                backgroundColor: '#ff9c00',
                display: isDesktop ? 'flex' : 'block',
                transform: isDesktop ? "skew(35deg)" : 0
            }}>
             <div className="left" style={{ 
                display: 'flex',
                // position: 'relative', 
                marginTop: !isDesktop ? '-4px' : '5px', 
                transform: isDesktop ? "skew(-35deg)" : 0,
                paddingLeft: isDesktop ? 0 : '50px'
                }}>
             <AccessTimeIcon style={{ height: '20px', paddingRight: '8px', paddingTop: '10px' }} />
             <label style={{ 
                paddingTop: isDesktop ? '-20px' : 0, 
                position: isDesktop ? 'relative' : 0, 
                top: isDesktop ? 0 : 0,
                }}>{t("kami-buka.text")}: {t("Senin.text")} - {t("Sabtu.text")} 7:00 - 18:00</label> 
             </div>
             <div className="right" style={{ 
                paddingLeft: isDesktop ? '100px' : '340px',
                textAlign: isDesktop ? 'right' : 'center',
                paddingTop: !isDesktop ? '0' : '10px',
                display: isDesktop ? 'flex' : 'flex',
                float: isDesktop ? 'right' : 'left',
                marginLeft: !isDesktop ? '-210px' : 0,
                transform: isDesktop ? "skew(-35deg)" : 0,
                }}>
              <Grid container spacing={2}>
                <Grid item>
                <a href="https://www.facebook.com/pusatkerupukindonesia/" target="_blank">
                <FaFacebookF style={{ height: '18px', color: 'white' }} />
                </a>
                </Grid>
                <Grid item>
                <XIcon style={{ height: '20px' }} />
                </Grid>
                <Grid item>
                <a href="https://www.instagram.com/pusatkerupukindonesia?igsh=MXR0djRpMjdkeGwweQ==" target="_blank">
                <InstagramIcon style={{ height: '20px', color: 'white' }} />
                </a>
                </Grid>
                <Grid item>
                <a href="https://www.google.com/search?q=Distributor+%7C+Agen+Kerupuk+Mentah+Sumatera+%7C+Medan+%7C+Aceh&stick=H4sIAAAAAAAA_-NgU1I1qDA0MDQ0NTA0N08xNzVPMUiyMqgwS0o1NDMzNkkFchMNLZMXsVq6ZBaXFGUmlZbkFynUKDimp-YpeKcWlRaUZiv4puaVJGYoBJfmJpakFiUCpX1TUxLzQMqSUzMAGjkUfGUAAAA&hl=en&mat=CXU_1kQYn4ebElcBezTaARnAG0yBbRC9ei_Bms8qUvYIOn3k5CwGXyvg4bhFN0_BfD6ySdUW5kSFCe5FDCroWtkN4YBbGJTWOlQKvMJq2SKZtMO1KR4p9ezOF9hUO0ffAu0&authuser=0" target="_blank">
                <SiGooglemybusiness style={{ height: '25px', width: '18px', paddingTop: '4px', color: 'white' }} />
                </a>
                </Grid>
              </Grid>
             </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center', // Mengatur elemen berada di tengah secara vertikal
                paddingTop: isDesktop ? '57px' : '-10px',
                justifyContent: 'center', 
                margin: !isDesktop ? 10 : 0
            }}>
                <img src={LogoPusatKerupuk} height={isDesktop ? 90 : 50} width={isDesktop ? 100 : 50} style={{ marginRight: '10px' }} />
                <label id="title-pusat-kerupuk" style={{ fontSize: isDesktop ? '22px' : '20px' }}>{t("pusat-kerupuk.text")}</label>
            </div>
            <div className="hub"
                style={{ 
                    position: isDesktop ? 'relative' : 0,
                    float: isDesktop ? 'right' : 0, 
                    left: isDesktop ? '-200px' : '-30px',
                    marginTop: isDesktop ? '-60px' : '30px',
                    marginLeft: isDesktop ? 0 : '-20px'
                }}
            >
                <Grid container spacing={ isDesktop ? 6 : 2} justifyContent="center"> {/* Mengatur grid container menjadi center */}
                    <Grid item display={'flex'}>
                        <img src={CallIcon} 
                        height={ isDesktop ? 40 : 30} 
                        width={ isDesktop ? 50 : 30} 
                        style={{
                            paddingLeft: isDesktop ? '' : 10
                        }}
                        />
                        <div style={{ display: 'block', marginTop: isDesktop ? 0 : '-1px' }}>
                            <Typography style={{ paddingLeft: '12px', fontSize: isDesktop ? 17 : 12, fontWeight: 700 }}>{t("Telpon-kami.text")}</Typography>
                            <Typography style={{ paddingLeft: '12px', fontSize: isDesktop ? 17 : 10 }}><Textra effect="rightLeft" data={['082131131108', '085935331734']} /></Typography>
                            {/* <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 8 }}>082131131108</Typography> */}
                        </div>
                    </Grid>
                    <Grid item display={'flex'} style={{left: isDesktop ? '-120px' : '-160px' }}>
                        <img src={EmailIcon} 
                        height={ isDesktop ? 40 : 30} 
                        width={ isDesktop ? 50 : 30} 
                            style={{
                                left: isDesktop ? 10 : '20px',
                                top: isDesktop ? 0 : '-1px',
                                position: 'relative'
                            }}
                        />
                        <div style={{ display: 'block', left: isDesktop ? '10px' : '13px', top: isDesktop ? '-2px' : '-4px', position: 'relative',  }}>
                            <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 12, fontWeight: 700 }}>{t("kirim-email.text")}</Typography>
                            <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 10 }}>pusatkerupukindonesia@gmail.com</Typography>
                        </div>
                    </Grid>
                    <Grid item> {/* Menggunakan Grid item untuk tombol Contact */}
                        <Button style={{ 
                            backgroundColor: '#ff9c00',
                            height: '40px',
                            width: '100px',
                            color: 'white',
                            marginTop: isDesktop ? '10px' : '19px', // Atur margin atas sesuai kebutuhan
                        }}>
                            {t("Kontak.text")}
                        </Button>
                    </Grid>
                </Grid>
            </div>
             {isDesktop ? 
            <div className="header-bottom" style={{
                color: 'white',
                display: 'flex',
                marginTop: '30px',
                width: '55%',
                // paddingLeft: isDesktop ? '-1900px' : 0,
                height: '50px',
                padding: '0 0 0 25px',
                float: 'right',
                backgroundColor: '#e32222',
                marginBottom: '-10px',
                // position: 'relative',
                zIndex: '-3',
            }}>
                <Grid container spacing={8} style={{
                    transform: 'skew(35deg)',
                    // position: 'relative',
                    paddingLeft: '-40px',
                    paddingTop: '6px',
                }}>
                    <Grid item>
                        <Button style={{ color: 'white' }} href="/">Home</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{ color: 'white' }} href="/produk">Product</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{ color: 'white' }} href="/about">About</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{ color: 'white' }} href="/artikel">Artikel</Button>
                    </Grid>
                    <Grid item style={{
                        // position: 'relative',
                        top: '-7px',
                        left: '200px'
                    }}>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Grid>
                </Grid>
            </div>
               :  
               <> 
                   <AppBar style={{ marginTop: '320px', backgroundColor: '#ff9c00' }} position="absolute">
                        <Toolbar>
                            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" style={{ marginLeft: '11px' }}>
                                {t("Menu.text")}
                            </Typography>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={open ? handleDrawerClose : handleDrawerOpen}
                            >
                                {open ? <ChevronLeftIcon /> : <MenuIcon />}
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="persistent"
                        anchor="right"
                        open={open}
                    >
                        <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            <ListItem>
                                <VscHome style={{ paddingRight: '30px' }} />
                                <a id="list-menu" href="/" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    {t("Halaman-utama.text")}
                                </a>
                            </ListItem>
                            <ListItem>
                                <HiOutlineClipboardList style={{ paddingRight: '30px' }} />
                                <a id="list-menu" href="/produk" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    {t("Produk.text")}
                                </a>
                            </ListItem>
                            <ListItem>
                                <FcAbout style={{ paddingRight: '30px' }} />
                                <a id="list-menu" href="/about" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    {t("Tentang.text")}
                                </a>
                            </ListItem>
                            <ListItem>
                                <LuContact style={{ paddingRight: '30px' }} />
                                <a id="list-menu" href="/artikel" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    {t("Artikel.text")}
                                </a>
                            </ListItem>
                            <ListItem>
                                <FcGlobe />
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-autowidth-label">Translate</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={language}
                                    onChange={handleChange}
                                    autoWidth
                                    label={labelText}
                                >
                                    <MenuItem onClick={() => changeLanguage('id')} value={10}>Indonesia</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('en')} value={20}>English</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('zh')} value={30}>Chinese</MenuItem>
                                    <MenuItem onClick={() => changeLanguage('ar')} value={30}>Arabic</MenuItem>
                                </Select>
                            </FormControl>
                            </ListItem>
                        </List>
                        <Divider />
                    </Drawer>
               </>  
            }
          </div>
        </>
    )
}

export default Header;