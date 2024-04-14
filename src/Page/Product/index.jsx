import React, {useEffect} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Typography, Button } from "@mui/material";
import CallIcon from '../../Image/calling.png';
import EmailIcon from '../../Image/mail.png';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoPusatKerupuk from '../../Image/logo pusat kerupuk.png';
import Call from '../../Image/phone-call.png';
import Email from '../../Image/message.png';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGooglemybusiness } from "react-icons/si";
import Location from '../../Image/location.png';
import ReactWhatsapp from 'react-whatsapp';
import IconWhatsapp from '../../Image/icon-whatsapp.png'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
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

export function Product() {

    const theme = useTheme();

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

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });

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

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

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
                height: isDesktop ? '40px' : '80px',
                paddingLeft: isDesktop ? '0' : 60,
                float: isDesktop ?  'right' : 0,
                padding: isDesktop ? '0 0 0 350px' : 0,
                lineHeight: '40px',
                position: !isDesktop ? 0 : 'relative',
                backgroundColor: '#ff9c00',
                display: isDesktop ? 'flex' : 'block',
                transform: isDesktop ? "skew(35deg)" : 0
            }}>
             <div className="left" style={{ 
                display: 'flex',
                // position: 'relative', 
                top: '-4px', 
                transform: isDesktop ? "skew(-35deg)" : 0,
                paddingLeft: isDesktop ? 0 : '60px'
                }}>
             <AccessTimeIcon style={{ height: '20px', paddingRight: '8px', paddingTop: '10px' }} />
             <label style={{ 
                paddingTop: isDesktop ? '-20px' : 0, 
                position: isDesktop ? 'relative' : 0, 
                top: isDesktop ? 0 : 0,
                }}>We are Open: Sen - Sab 7:00 - 18:00</label> 
             </div>
             <div className="right" style={{ 
                paddingLeft: isDesktop ? '100px' : '340px',
                textAlign: isDesktop ? 'right' : 'center',
                paddingTop: '0',
                display: isDesktop ? 'flex' : 'flex',
                float: isDesktop ? 'right' : 'left',
                marginLeft: !isDesktop ? '-210px' : 0,
                transform: isDesktop ? "skew(-35deg)" : 0,
                }}>
              <Grid container spacing={2}>
                <Grid item>
                <FacebookIcon style={{ height: '20px' }} />
                </Grid>
                <Grid item>
                <XIcon style={{ height: '20px' }} />
                </Grid>
                <Grid item>
                <InstagramIcon style={{ height: '20px' }} />
                </Grid>
                <Grid item>
                <GoogleIcon style={{ height: '20px' }} />
                </Grid>
              </Grid>
             </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center', // Meratakan elemen secara vertikal
                paddingTop: isDesktop ? '50px' : '20px',
                marginLeft: isDesktop ? '270px' : '60px',
            }}>
                <img src={LogoPusatKerupuk} height={isDesktop ? 90 : 50} width={isDesktop ? 100 : 50} style={{ marginRight: '10px' }} />
                <label style={{ fontSize: isDesktop ? '22px' : '20px' }}>Pusat Kerupuk Indonesia</label>
            </div>
            <div className="hub"
                style={{ 
                    position: isDesktop ? 'relative' : 0,
                    float: isDesktop ? 'right' : 0, 
                    left: isDesktop ? '-500px' : '-30px',
                    marginTop: isDesktop ? '-410px' : '30px',
                }}
            >
                <Grid container spacing={6} justifyContent="center"> {/* Mengatur grid container menjadi center */}
                    <Grid item display={'flex'}>
                        <img src={CallIcon} 
                        height={ isDesktop ? 40 : 30} 
                        width={ isDesktop ? 50 : 30} 
                        style={{
                            paddingLeft: isDesktop ? '' : 40
                        }}
                        />
                        <div style={{ display: 'block', marginTop: isDesktop ? 0 : '1px' }}>
                            <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 10, fontWeight: 700 }}>Call Us</Typography>
                            <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 8 }}>082131131108</Typography>
                        </div>
                    </Grid>
                    <Grid item display={'flex'} style={{left: isDesktop ? '-120px' : '-160px' }}>
                        <img src={EmailIcon} 
                        height={ isDesktop ? 40 : 30} 
                        width={ isDesktop ? 50 : 30} 
                            style={{
                                left: isDesktop ? '200px' : '200px',
                                top: isDesktop ? 0 : '-1px'
                            }}
                        />
                        <div style={{ display: 'block', left: isDesktop ? '210px' : '200px', top: isDesktop ? '-2px' : '-1px' }}>
                            <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 10, fontWeight: 700 }}>Send us Email</Typography>
                            <Typography style={{ paddingLeft: '20px', fontSize: isDesktop ? 17 : 8 }}>pusatkerupukindonesia@gmail.com</Typography>
                        </div>
                    </Grid>
                    <Grid item> {/* Menggunakan Grid item untuk tombol Contact */}
                        <Button style={{ 
                            backgroundColor: '#ff9c00',
                            height: '40px',
                            width: '100px',
                            color: 'white',
                            marginTop: isDesktop ? '10px' : '-10px', // Atur margin atas sesuai kebutuhan
                        }}>
                            Contact
                        </Button>
                    </Grid>
                </Grid>
            </div>
             {isDesktop ? 
            <div className="header-bottom" style={{
                color: 'white',
                display: 'flex',
                marginTop: '28px',
                width: isDesktop ? '55%' : '100%',
                left: '10px',
                height: '50px',
                padding: '0 0 0 25px',
                float: 'right',
                backgroundColor: '#e32222',
                marginBottom: '-10px',
                // position: 'relative',
                zIndex: '99999',
            }}>
                <Grid container spacing={8} style={{
                    transform: 'skew(35deg)',
                    // position: 'relative',
                    left: '20px',
                    top: '6px',
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
                        <Button style={{ color: 'white' }} href="/contact">Contact</Button>
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
                    <AppBar style={{ marginTop: '320px', backgroundColor: '#ff9c00' }} position="absolute" open={open}>
                        <Toolbar>
                        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                            Menu
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            sx={{ ...(open && { display: 'none' }) }} 
                        >
                            <MenuIcon />
                        </IconButton>
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        sx={{
                        width: '200px',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: '150px',
                        },
                        }}
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
                            <VscHome style={{ paddingRight: '10px' }} />
                        <a href="/" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                            Home
                        </a>
                        </ListItem>
                        <ListItem>
                            <HiOutlineClipboardList style={{ paddingRight: '10px' }} />
                        <a href="/produk" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                            Product
                        </a>
                        </ListItem>
                        <ListItem>
                            <FcAbout style={{ paddingRight: '10px' }} />
                        <a href="/about" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                            About
                        </a>
                        </ListItem>
                        <ListItem>
                            <LuContact style={{ paddingRight: '10px' }} />
                        <a href="/contact" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                            Contact
                        </a>
                        </ListItem>
                        </List>
                        <Divider />
                    </Drawer>
               </>  
            }
          </div>

          <ReactWhatsapp id="icon-whatsapp" style={{ 
                width: 0,
                height: 0,
                cursor: 'pointer'
            }} 
            number="082131131108" 
            message={"Hallo"}>
           <img src={IconWhatsapp} 
              style={{
                maxWidth: '100%', // Tambahkan ini
                width: '70px',
                height: '70px',
                position: 'fixed', // Tetapkan posisi elemen
                bottom: '20px',    // Atur jarak dari bawah
                right: !isDesktop ? '20px' : '20px',     // Atur jarak dari kanan
                // zIndex: '9999',   
              }}
            />
        </ReactWhatsapp>

          <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? '300px' : '1250px' }}>
                <Grid container style={{display: 'flex', justifyContent: 'center', paddingTop: isDesktop ? '60px' : '40px', paddingLeft: isDesktop ? 0 : 12 }}>
                <Grid item xs={12} sm={2} > 
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                        <img src={Call} width={ isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>Phone :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0 }}>082131131108</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img src={Location} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>Address :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0, width: '300px' }}>Jalan Veteran no 4A Medan Pusat Pasar, Medan, Sumatera Utara 20231</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img src={Email} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>Email :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0, width: '300px' }}>pusatkerupukindonesia@gmail.com</span>
                        </div>
                    </div>
                </Grid>
                </Grid>
            </div>`

            <div style={{ width: '100%', backgroundColor: '#2b292c', height: isDesktop ? '520px' : '1000px', marginTop:  isDesktop ? '-30px' : '-30px' }}>
                <Grid container spacing={2} display={isDesktop ? 0 : 'block'} justifyContent={'center'} alignItems={'center'} pt={8} pl={isDesktop ? 0 : 4}>
                    <Grid item xs={4}>
                        <img src={LogoPusatKerupuk} width={100} height={100} />
                        <p id="deskripsi_kerupuk" style={{ width: '280px', color: 'white', marginTop: '40px' }}>
                            Temukan beragam kerupuk renyah dalam koleksi kami. Dari kerupuk kentang hingga kerupuk udang, 
                            setiap gigitan menjanjikan cita rasa autentik dan kualitas premium yang tak tertandingi. 
                            Dibuat dengan bahan-bahan berkualitas terbaik dan proses produksi yang terjamin kebersihannya, 
                            kami menawarkan pilihan camilan yang sempurna untuk setiap kesempatan. 
                        </p>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '40px' }}>
                            <div style={{ backgroundColor: '#38363e', padding: '5px', borderRadius: '20%' }}>
                                <FaFacebookF color="white" />
                            </div>
                            <div style={{ backgroundColor: '#38363e', padding: '5px', borderRadius: '20%' }}>
                                <BsTwitterX color="white" />
                            </div>
                            <div style={{ backgroundColor: '#38363e', padding: '5px', borderRadius: '20%' }}>
                                <BsInstagram color="white" />
                            </div>
                            <div style={{ backgroundColor: '#38363e', padding: '5px', borderRadius: '20%' }}>
                                <SiGooglemybusiness color="white" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{ marginTop: isDesktop ? 0 : 60 }}>
                            <label style={{ color: 'white', fontSize: '20px' }}> Service Hours </label>
                            <br />
                            <br />
                            <div style={{ width: isDesktop ?  '100%' : 245 }}>
                            <label style={{ color: 'white' }}>Senin</label>
                            <label style={{ color: 'white', paddingLeft: '105px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            <br />
                            <label style={{ color: 'white' }}>Selasa</label>
                            <label style={{ color: 'white', paddingLeft: '100px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            <br />
                            <label style={{ color: 'white' }}>Rabu</label>
                            <label style={{ color: 'white', paddingLeft: '107px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            <br />
                            <label style={{ color: 'white' }}>Kamis</label>
                            <label style={{ color: 'white', paddingLeft: '102px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            <br />
                            <label style={{ color: 'white' }}>Jumat</label>
                            <label style={{ color: 'white', paddingLeft: '102px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            <br />
                            <label style={{ color: 'white' }}>Sabtu</label>
                            <label style={{ color: 'white', paddingLeft: '102px' }}>07.00 - 18.00</label>
                            <hr style={{ borderBottom: '1px solid white' }} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ width: '100%', backgroundColor: '#1f1e21', height: isDesktop ? '90px' : '200px', marginTop:  isDesktop ? '-10px' : 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: 'white' }}><label style={{ color:  "#ff9c00"}}>@2024</label> Pusat Kerupuk Indonesia</span>
            </div>
        </>
    )
}