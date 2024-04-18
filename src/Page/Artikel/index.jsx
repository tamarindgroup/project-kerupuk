import React, {useEffect, useState} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Button, Typography } from "@mui/material";
// import { Card, Typography } from "antd";
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
import { BeatLoader } from 'react-spinners';
import { useTranslation } from "react-i18next";
import dataArtikel from "../../data/artikel";
import { FcGlobe } from "react-icons/fc";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link } from "react-router-dom";


export const Artikel =  () => {

    const theme = useTheme();
    const { t, i18n } = useTranslation("global");
    const [Artikel, setArtikel] = useState(dataArtikel);
    // console.log(artikel, 'dataArtikel');
    const [language, setLanguage] = useState('');
    const [labelText, setLabelText] = useState('Translate');
    const activeLanguage = i18n.language;

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
      }

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
                paddingLeft: isDesktop ? 0 : '50px'
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
                paddingTop: !isDesktop ? '0' : '10px',
                display: isDesktop ? 'flex' : 'flex',
                float: isDesktop ? 'right' : 'left',
                marginLeft: !isDesktop ? '-210px' : 0,
                transform: isDesktop ? "skew(-35deg)" : 0,
                }}>
              <Grid container spacing={2}>
                <Grid item>
                <FaFacebookF style={{ height: '18px' }} />
                </Grid>
                <Grid item>
                <XIcon style={{ height: '20px' }} />
                </Grid>
                <Grid item>
                <InstagramIcon style={{ height: '20px' }} />
                </Grid>
                <Grid item>
                <SiGooglemybusiness style={{ height: '25px', width: '18px', paddingTop: '4px' }} />
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
                            paddingLeft: isDesktop ? '' : 10
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
                            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                                Menu
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
                                <a href="/" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    Home
                                </a>
                            </ListItem>
                            <ListItem>
                                <HiOutlineClipboardList style={{ paddingRight: '30px' }} />
                                <a href="/produk" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    Product
                                </a>
                            </ListItem>
                            <ListItem>
                                <FcAbout style={{ paddingRight: '30px' }} />
                                <a href="/about" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    About
                                </a>
                            </ListItem>
                            <ListItem>
                                <LuContact style={{ paddingRight: '30px' }} />
                                <a href="/artikel" style={{ color: '#ff9c00', textDecoration: 'none' }}>
                                    Artikel
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

          <Grid container display={ !isDesktop ? 'block' : 'flex'} spacing={1} justifyContent="center" style={{ marginTop: !isDesktop ? '200px' : '10px' }}>
               <Grid item xs={ !isDesktop ? 10 : 12}>
                <div style={{ paddingLeft: !isDesktop ? '25px' : '22px' }}>
                <h1 id="title-top-artikel" style={{ textAlign: 'left', color: 'gray' }}>Seputar Kerupuk</h1>
                <p id="deskripsi_kerupuk" style={{ width: isDesktop ? '100%' : '80%', fontSize: isDesktop ? '23px' : '16px' }}>
                informasi terbaru seputar berbagai jenis kerupuk, proses pembuatan, variasi rasa, serta tips dan trik untuk menikmati kerupuk dengan lebih nikmat. 
                </p>
                </div>
                </Grid>
                {Artikel.map(data => (
                    <Grid item key={data.id} xs={10} sm={6} md={4} mt={isDesktop ? '60px' : '60px'}>
                      <div style={{ paddingLeft: !isDesktop ? '3px' : 0 }}>
                        <a target="_blank" style={{ textDecoration: 'none', color: 'black' }} href={data[activeLanguage].link}>
                            <div style={{ padding: '16px', width: '100%' }}>
                                <img src={data[activeLanguage].image} 
                                style={{ 
                                    height: isDesktop ? '300px' : '190px', 
                                    width: isDesktop ? '100%' : '100%',
                                    borderRadius: '20px' 
                                    }} />
                                <h2 id="title-artikel" style={{ width: isDesktop ? '100%' : '90%' }}>{data[activeLanguage].nama}</h2>
                                <label id='sub-artikel' level={4}>{data[activeLanguage].sub_nama}</label>
                            </div>
                          </a>
                      </div>
                    </Grid>
                  ))}
              </Grid>


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

          <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? '300px' : '150px' }}>
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
                            <div style={{ width: isDesktop ?  '100%' : 270 }}>
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

export default Artikel;