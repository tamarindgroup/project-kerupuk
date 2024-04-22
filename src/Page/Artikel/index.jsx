import React, {useEffect, useState} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Button, Typography } from "@mui/material";
// import { Card, Typography } from "antd";
import Textra from 'react-textra'
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
import Header from "../Header";
import { FaCircleArrowUp } from "react-icons/fa6";


export const Artikel =  () => {

    const theme = useTheme();
    const { t, i18n } = useTranslation("global");
    const [Artikel, setArtikel] = useState(dataArtikel);
    // console.log(artikel, 'dataArtikel');
    const [language, setLanguage] = useState('');
    const [labelText, setLabelText] = useState('Translate');
    const activeLanguage = i18n.language;

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

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
         <Header />

          <Grid container display={ !isDesktop ? 'block' : 'flex'} spacing={1} justifyContent="center" style={{ marginTop: !isDesktop ? '200px' : '10px' }}>
               <Grid item xs={ !isDesktop ? 10 : 12}>
                <div style={{ paddingLeft: !isDesktop ? '25px' : '22px' }}>
                <h1 id="title-top-artikel" style={{ textAlign: 'left', color: 'gray' }}>{t("seputar.text")}</h1>
                <p id="deskripsi_kerupuk" style={{ width: isDesktop ? '100%' : '80%', fontSize: isDesktop ? '23px' : '16px' }}>
                 {t("deskripsi-seputar.text")}
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


              <FaCircleArrowUp 
                style={{
                    cursor: 'pointer',
                    color: 'gray',
                    maxWidth: '100%', // Tambahkan ini
                    width: '55px',
                    height: '55px',
                    position: 'fixed', // Tetapkan posisi elemen
                    bottom: '25px',    // Atur jarak dari bawah
                    left: !isDesktop ? '20px' : '20px',     // Atur jarak dari kanan
                    // zIndex: '9999',   
                }}
                onClick={scrollToTop}
                />


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

        <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? 150 : '300px' }}>
                <Grid container style={{display: 'flex', justifyContent: 'center', paddingTop: isDesktop ? '60px' : '40px', paddingLeft: isDesktop ? 0 : 12 }}>
                <Grid item xs={12} sm={2} > 
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                        <img src={Call} width={ isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("telepon.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0 }}><Textra effect="rightLeft" data={['082131131108', '085935331734']} /></span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img src={Location} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("alamat.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0, width: '300px' }}>Jalan Veteran no 4A Medan Pusat Pasar, Medan, Sumatera Utara 20231</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img src={Email} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("email.text")} :</span>
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
                            {t("deskripsi-footer.text")}
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
                            <label style={{ color: 'white', fontSize: '20px' }}>{t("jam-layanan.text")}</label>
                            <br />
                            <br />
                            <div style={{ width: isDesktop ? '100%' : '80%' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("senin1.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("Selasa.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("Rabu.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("Kamis.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("Jumat.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                                <br />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ color: 'white' }}>{t("sabtu1.text")}</label>
                                    </div>
                                    <div>
                                        <label style={{ color: 'white' }}>07.00 - 18.00</label>
                                    </div>
                                </div>
                                <hr style={{ borderBottom: '1px solid white' }} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ width: '100%', backgroundColor: '#1f1e21', height: isDesktop ? '90px' : '200px', marginTop:  isDesktop ? '-10px' : 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: 'white' }}><label style={{ color:  "#ff9c00"}}>@2024</label>{t("pusat-kerupuk-indonesia.text")}</span>
            </div>
        </>
    )
}

export default Artikel;