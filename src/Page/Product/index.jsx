import React, {useEffect, useState} from "react";
import { Grid, Typography, Button } from "@mui/material";
import Textra from 'react-textra'
import { useTheme } from '@mui/material/styles';
import { Input, Empty } from 'antd';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoPusatKerupuk from '../../Image/logo pusat kerupuk.webp';
import Call from '../../Image/phone-call.png';
import Email from '../../Image/message.png';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGooglemybusiness } from "react-icons/si";
import Location from '../../Image/location.png';
import ReactWhatsapp from 'react-whatsapp';
import IconWhatsapp from '../../Image/icon-whatsapp.png'
import ArrowUp from '../../Image/arrow-up.gif';
import { useTranslation } from "react-i18next";
import dataProduk from "../../data/produk";
import { PulseLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import { useScrollContext } from "../../Context";
import ShoppingCart from '../../Image/shopping-cart.gif';
import Shopee from '../../Image/shopee.png';
import Tokped from '../../Image/tokped.png';
import BestSeller from '../../Image/best-seller.png';

export function Product() {

    const theme = useTheme();
    const { t, i18n } = useTranslation("global");
    const [Produk, setProduk] = useState(dataProduk);
    const activeLanguage = i18n.language;
    const maxArtikel = 30;
    const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    const [showMore, setShowMore] = useState(30);
    const [loadingMore, setLoadingMore] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [isRinging, setIsRinging] = useState(false);
    const [isCardFlipped, setIsCardFlipped] = useState(
        Produk.map(() => false)
      );
    const [selectedBrand, setSelectedBrand] = useState('Semua');
    const { isShaking } = useScrollContext();

    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const [showMenu, setShowMenu] = React.useState(false);

    const handleClick = () => {
        setIsOptionsVisible(!isOptionsVisible);
      };

      const handleCategoryClick = (category) => {
        if (category === "lainnya") {
          setShowMenu((prev) => !prev); // Toggle visibilitas menu
        } else {
          setSelectedBrand(category); // Atur kategori yang dipilih
          setShowMenu(false); // Tutup menu jika kategori lain dipilih
          setSearchValue(""); // Reset search value ketika kategori berubah
        }
      };

      const loadMore = () => {
        setLoadingMore(true);
        setTimeout(() => {
          const newShowMore = showMore + 3;
          setShowMore(Math.min(newShowMore, maxArtikel));
          setLoadingMore(false);
        }, 1000);
      };

      const [showIcons, setShowIcons] = useState(false);

    const handleCartClick = () => {
      setShowIcons(!showIcons);
    };

      useEffect(() => {
        // Simulate loading for 10 seconds
        const loadingTimeout = setTimeout(() => {
          setIsLoading(false);
        }, 2000); // Set loading state to false after 10 seconds
    
        const handleScroll = () => {
          const scrollY = window.scrollY;
          if (scrollY > 100) {
            setIsRinging(true);
          } else {
            setIsRinging(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          clearTimeout(loadingTimeout); // Clear the loading timeout when the component unmounts
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

    const filteredProducts = Produk
    ?.filter(
        (product) => 
        (selectedBrand === 'Semua' || product[activeLanguage].brand === selectedBrand) &&
        (product[activeLanguage].nama.toLowerCase().includes(searchValue.toLowerCase()))
    )
    .slice(0, showMore);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });


      const toggleCardFlip = (index) => {
        const updatedIsCardFlipped = [...isCardFlipped];
        updatedIsCardFlipped[index] = !updatedIsCardFlipped[index];
        setIsCardFlipped(updatedIsCardFlipped);
      };

      const handleSearchIconMouseDown = (event) => {
        event.stopPropagation();
      };

      

    return (
        <>

         {/* <Helmet>
            <title>Pusat Kerupuk Indonesia - Produk Kerupuk Lengkap dari Kami</title>
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Di Produk Kerupuk Lengkap dari Kami, kami bangga menyajikan berbagai macam kerupuk mulai dari yang klasik hingga yang modern, memenuhi selera dan preferensi setiap pelanggan. Kami menawarkan kerupuk tradisional yang autentik, serta inovasi-inovasi baru dalam dunia kerupuk yang siap menggoyang lidah Anda." />
            <meta name="keywords" content="
            kerupuk, 
            aneka kerupuk, 
            kerupuk napoleon, 
            kerupuk bunga merah, 
            kerupuk shinjuku, 
            kerupuk cap kapal,
            kerupuk jengkol,
            kerupuk kasandra kuning,
            kerupuk kecipir warna,
            kerupuk kelabang kuning,
            kerupuk mawar kuning,
            kerupuk sisir warna,
            kerupuk tersanjung warna,
            kerupuk udang mas,
            kerupuk kelabang cream,
            kerupuk makaroni ayam,
            kerupuk makaroni kuning,
            kerupuk mawar cream,
            kerupuk tempe bulat,
            kerupuk tiga roda,
            kerupuk udang mede,
            kerupuk ceriping pedas,
            kerupuk ikan putih,
            kerupuk udang kuning,
            kerupuk udang salju,
            keruuk mangkok udang,
            kerupuk mawar kuning,
            kerupuk mawar pink,
            kerupuk t-extra,
            kerupuk kasandra warna,
            kerupuk kepang mas,
            kerupuk kepang warna,
            kerupuk mawar pink,
            kerupuk mawar putih,
            kerupuk mawar warna,
            kerupuk penting,
            kerupuk manggar,
            kerupuk rantai jumbo orange,
            kerupuk rantai jumbo pink,
            kerupuk rantai jumbo putih,
            kerupuk rantai jumbo warna warni,
            kerupuk rantai lemon warna,
            kerupuk rantai putih sedang rasa,
            kerupuk rantai sedang putih,
            " />
            <script type="application/ld+json">
                 {`
                     {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Pusat Kerupuk Indonesia",
                        "url": "https://www.pusatkerupukindonesia.id",
                        "logo": "https://www.pusatkerupukindonesia.id/logo_pusat_kerupuk.webp",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+6282131131108",
                            "contactType": "customer service"
                        }
                      }
                    `}
              </script>
              <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.pusatkerupukindonesia.id"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Produk",
                                "item": "https://www.pusatkerupukindonesia.id/produk"
                            }
                        ]
                    }
                    `}
                </script>
         </Helmet> */}

         {/* <div style={{ display: 'flex', top: !isDesktop ? '250px' : '100px', position: 'relative', marginBottom: isDesktop ? '200px' : '300px' }}>
            <img src={Waisak} style={{ width: isDesktop ? '30%' : '80%', margin: !isDesktop ? 'auto' : 'auto', borderRadius: '20px' }}  /> 
         </div>  */}
          
          <div
              style={{ 
                marginTop: isDesktop ? 100 : 300, 
                display: "block", 
                marginLeft: isDesktop ? 10 : -2,
                width: isDesktop ? "100%" : '100%', 
                marginBottom: isDesktop ? 10 : 5
            }}
            >

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Input.Search
              placeholder={t("Search")}
              onMouseDown={handleSearchIconMouseDown}
              onSearch={(value) => {
                const filteredProducts = Produk
                  ?.filter(
                    (data) =>
                      (selectedBrand === 'Semua' || data[activeLanguage].brand === selectedBrand) &&
                      (data[activeLanguage].nama.toLowerCase().includes(value.toLowerCase()))
                  )
                  .slice(0, showMore);
      
                setIsSearchEmpty(filteredProducts.length === 0);
                setSearchValue(value);
              }}
              style={{
                width: isDesktop ? '50%' : '90%',
                marginBottom: '20px',
                '& .ant-input-search-icon': {
                  backgroundColor: 'orange',
                },
              }}
            />
            </div>

            <Grid container xs={!isDesktop ? 10 : 12} style={{ display: 'flex', justifyContent: 'center', marginLeft: !isDesktop ? 18 : 140 }}>
                    <Grid item xs={3} sm={!isDesktop ? 3 : 1 }>
                    <Button
                        className={`category-button ${selectedBrand === 'kapal' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('kapal')}
                        style={{ fontSize: '9px', width: isDesktop ? '150px' : '90px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}> {t("button-kapal.text")} </label>
                    </Button>
                    </Grid>
                    <Grid item xs={3} sm={!isDesktop ? 3 : 1 }>
                    <Button
                        className={`category-button ${selectedBrand === 'shinjuku' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('shinjuku')}
                        style={{ fontSize: '9px', width: isDesktop ? '150px' : '90px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}> {t("button-shinjuku.text")} </label>
                    </Button>
                    </Grid>
                    <Grid item xs={3} sm={!isDesktop ? 3 : 1 }>
                    <Button
                        className={`category-button ${selectedBrand === 'napoleon' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('napoleon')}
                        style={{ fontSize: '9px', width: isDesktop ? '150px' : '90px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}> {t("button-napoleon.text")} </label>
                    </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                    <Button
                        className={`category-button ${selectedBrand === 'bunga-merah' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('bunga-merah')}
                        style={{ fontSize: '2px', width: isDesktop ? '180px' : '130px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}> {t("button-bunga-merah.text")} </label>
                    </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                    <Button
                        className={`category-button ${selectedBrand === 'layar' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('layar')}
                        style={{ fontSize: '2px', width: isDesktop ? '180px' : '130px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}> Layar </label>
                    </Button>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                    <Button
                        className={`category-button ${selectedBrand === 'kambing-lima' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('kambing-lima')}
                        style={{ fontSize: '2px', width: isDesktop ? '180px' : '130px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}> Kambing Lima </label>
                    </Button>
                    </Grid>
                    <Grid item xs={3} sm={!isDesktop ? 3 : 0}>
                    <Button
                      className={`category-button ${selectedBrand === "lainnya" ? "selected" : ""}`}
                      onClick={() => handleCategoryClick("lainnya")}
                      style={{ fontSize: "9px", width: isDesktop ? "150px" : "130px", position: 'relative', left: !isDesktop ? '20px' : 0 }}
                    >
                      <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px" }}>
                        {t("button-lain.text")}
                      </label>
                    </Button>
                  </Grid>
                  {showMenu && (
                  <Grid
                    item
                    xs={isDesktop ? 1 : 7}
                    style={{
                      position: "relative", // Agar tampil di luar grid utama
                      top: isDesktop ? "5px" : '60px', // Atur sesuai posisi tombol lainnya
                      left: isDesktop ? "-290px" : '13px', // Menyesuaikan posisi horizontal
                      background: "orange",
                      borderRadius: '10px',
                      padding: "10px",
                      zIndex: 10, // Pastikan menu ada di atas elemen lainnya
                    }}
                  >
                    <ul style={{ listStyleType: "none", margin: 0, padding: 0, textAlign: 'center', fontFamily: 'sans-serif', fontStyle: 'italic', color: 'white' }}>
                    <Button
                        className={`category-button ${selectedBrand === 'kemasan' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('kemasan')}
                        style={{ fontSize: '2px', width: isDesktop ? '100%' : '130px', paddingTop: '30px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px", textAlign: 'center', color: 'white', fontStyle: 'italic' }}> Asam Jawa Kemasan </label>
                    </Button>
                    <Button
                        className={`category-button ${selectedBrand === 'karung' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('karung')}
                        style={{ fontSize: '2px', width: isDesktop ? '100%' : '130px', paddingTop: '30px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px", textAlign: 'center', color: 'white', fontStyle: 'italic' }}> Asam Jawa 50kg  </label>
                    </Button>
                      <Button
                        className={`category-button ${selectedBrand === 'kulit-tahu' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('kulit-tahu')}
                        style={{ fontSize: '2px', width: isDesktop ? '100%' : '130px', paddingTop: '30px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px", textAlign: 'center', color: 'white', fontStyle: 'italic' }}> Kulit Kembang Tahu </label>
                    </Button>
                    <Button
                        className={`category-button ${selectedBrand === 'tepung-putri' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('tepung-putri')}
                        style={{ fontSize: '2px', width: isDesktop ? '100%' : '130px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px", textAlign: 'center', color: 'white', fontStyle: 'italic' }}> Tepung Putri </label>
                    </Button>
                    <Button
                        className={`category-button ${selectedBrand === 'lain' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('lain')}
                        style={{ fontSize: '2px', width: isDesktop ? '100%' : '130px' }}
                    >
                        <label id="kategori-artikel" style={{ fontSize: !isDesktop ? "10px" : "12px", textAlign: 'center', color: 'white', fontStyle: 'italic' }}> Lainnya </label>
                    </Button>
                    </ul>
                  </Grid>
                )}

               </Grid>


              <Grid container spacing={ isDesktop ? 5 : 10} justifyContent="center" marginLeft={isDesktop ? 4 : '-80px'} mt={6}>
              {isSearchEmpty ? (
                  <Empty description={t("component-empty.text")} 
                  style={{ 
                    marginTop: !isDesktop ? "60px" : '90px', 
                    marginBottom: isDesktop ? '300px' : '100px', 
                    display: 'block', 
                    justifyContent: 'center',
                    marginLeft: '85px' 
                }} />
                ) : (
                filteredProducts.map((e, index) => (
                    <Grid item key={e._id} xs={12} sm={4} md={4} lg={4} mb={isDesktop ? 20 : 20}>
                      {isCardFlipped[index] ? (
                        <div
                          className={`product-card flipped-card`}
                          style={{
                            width: isDesktop ? "60%" : "90%",
                            height: isDesktop ? "600px" : '550px',
                            backgroundColor: "#f8f8f8",
                            borderRadius: "8px",
                            boxShadow:
                              "0px 8px 16px rgba(255, 165, 0, 0.6)",
                            transform: isCardFlipped[index]
                              ? "rotateY(180deg)"
                              : "rotateY(0deg)",
                            transformStyle: "preserve-3d",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "100px",
                              background: 'rgba(205, 88, 57, 1.0)',
                              position: "relative",
                              borderRadius: "10px",
                              zIndex: "1",
                            }}
                          >
                            {e[activeLanguage].type === 'best' && (
                              <img
                                src={BestSeller}
                                alt="Best Seller"
                                style={{
                                  position: "absolute",
                                  top: -30,
                                  left: isDesktop ? -70 : -10,
                                  width: "100px", // Ukuran gambar
                                  height: "auto",
                                  zIndex: 2, // Pastikan gambar ada di atas elemen lain
                                  transform: isCardFlipped[index]
                                ? "rotateY(180deg)"
                                : "none",
                                }}
                              />
                            )}
                            <Typography
                            id="list-menu"
                            style={{
                              textAlign: "center",
                              // fontFamily: "'Brush Script MT', cursive",
                              margin: 22,
                              color: "white",
                              fontSize: 35,
                              transform: isCardFlipped[index] ? "rotateY(180deg)" : "none",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            {e[activeLanguage].brand === "kulit-tahu"
                              ? "Kulit Tahu"
                              : e[activeLanguage].brand === "tepung-putri"
                              ? "Tepung Putri"
                              : e[activeLanguage].brand === "karung" || e[activeLanguage].brand === "kemasan" ? (
                                "Asam Jawa"
                              ) : [
                                "kapal",
                                "shinjuku",
                                "napoleon",
                                "bunga-merah",
                                "layar",
                                "kambing-lima",
                                "tepung-putri",
                              ].includes(e[activeLanguage].brand)
                              ? t("title-kerupuk.text")
                              : "Produk Lainnya"
                            }
                          </Typography>
                            
                          </div>
                          <img src={LogoPusatKerupuk} width={300} height={300} 
                           style={{ 
                            paddingTop: '70px',
                            transform: isCardFlipped[index]
                                ? "rotateY(180deg)"
                                : "none",
                              transformStyle: "preserve-3d", 
                            }} />
                          {/* <p
                            type="secondary"
                            style={{
                              width: "80%",
                              textAlign: "justify",
                              paddingTop: "30px",
                              fontSize: !isDesktop ? "10px" : "10px",
                              transform: isCardFlipped[index]
                                ? "rotateY(180deg)"
                                : "none",
                              transformStyle: "preserve-3d",
                              whiteSpace: 'pre-line'
                            }}
                          >
                            {e[activeLanguage].deskripsi.split('\n').map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                          </p> */}
                          <br />
                          <Button
                            id="kembali"
                            style={{
                              marginTop: "10px",
                              transform: isCardFlipped[index]
                                ? "rotateY(180deg)"
                                : "none",
                            }}
                            onClick={() => toggleCardFlip(index)}
                          >
                            {t("kembali.text")}
                          </Button>
                        </div>
                      ) : (
                        <div
                          className={`product-card`}
                          style={{
                            width: isDesktop ? "60%" : "340px",
                            height: isDesktop ? "600px" : '550px',
                            backgroundColor: "#f8f8f8",
                            borderRadius: "8px",
                            boxShadow:
                              "0px 8px 16px rgba(255, 165, 0, 0.6)",
                            transform: isCardFlipped[index]
                              ? "rotateY(180deg)"
                              : "rotateY(0deg)",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                            display: "flex",
                            margin: isDesktop ? "20px" : "6.5px",
                            flexDirection: "column",
                            padding: "20px",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "100px",
                              background: 'rgba(205, 88, 57, 1.0)',
                              position: "relative",
                              borderRadius: "10px",
                              top: "-20px",
                              zIndex: "1",
                            }}
                          >
                            {e[activeLanguage].type === 'best' && (
                              <img
                                src={BestSeller}
                                alt="Best Seller"
                                style={{
                                  position: "absolute",
                                  top: -30,
                                  left: isDesktop ? 330 : 250,
                                  width: "100px", // Ukuran gambar
                                  height: "auto",
                                  zIndex: 2, // Pastikan gambar ada di atas elemen lain
                                }}
                              />
                            )}
                            <Typography
                            id="list-menu"
                            style={{
                              textAlign: "center",
                              // fontFamily: "'Brush Script MT', cursive",
                              margin: 22,
                              color: "white",
                              fontSize: 35,
                              transform: isCardFlipped[index] ? "rotateY(180deg)" : "none",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            {e[activeLanguage].brand === "kulit-tahu"
                              ? "Kulit Tahu"
                              : e[activeLanguage].brand === "tepung-putri"
                              ? "Tepung Putri"
                              : e[activeLanguage].brand === "karung" || e[activeLanguage].brand === "kemasan" ? (
                                "Asam Jawa"
                              ) : [
                                "kapal",
                                "shinjuku",
                                "napoleon",
                                "bunga-merah",
                                "layar",
                                "kambing-lima",
                                "tepung-putri",
                              ].includes(e[activeLanguage].brand)
                              ? t("title-kerupuk.text")
                              : "Produk Lainnya"
                            }
                          </Typography>


                          </div>
                          <img loading="lazy" src={e[activeLanguage].image} style={{ height: "300px" }} />
                          <h2
                          id="list-menu"
                            style={{
                              color: 'gray',
                              marginTop: "30px",
                              marginBottom: "5px",
                              textAlign: "center",
                            }}
                          > { e[activeLanguage].nama } </h2>
                          <Button
                            id="review"
                            style={{
                              alignSelf: "center",
                            }}
                            onClick={() => toggleCardFlip(index)}
                          >
                            {t("review.text")}
                          </Button>
                        </div>
                      )}
                    </Grid>
                  )))}
              </Grid>
            </div>


            {!isLoading && !['kapal', 'shinjuku', 'napoleon', 'bunga-merah', 'kulit-tahu', "layar", "kambing-lima", "tepung-putri", "kemasan", "karung", "lainnya"].includes(selectedBrand) && 
                showMore < maxArtikel && filteredProducts.length >= showMore && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                    <Button
                    id="load-more"
                    type="primary"
                    onClick={loadMore}
                    style={{
                        marginTop: "-300px",
                        marginBottom: "50px",
                        alignSelf: "center",
                        background: "rgba(205, 88, 57, 1.0)",
                        border: "none",
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "none",
                        boxShadow: "0px 10px 20px rgba(255, 165, 0, 0.4)",
                        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                        display: "block",
                        position: "relative",
                    }}
                    >
                    {loadingMore ? (
                        <PulseLoader style={{ paddingLeft: '10px' }} color="#ffffff" size={10} />
                    ) : (
                        t("button-lainnya.text")
                    )}
                    </Button>
                </div>
                )}


<img 
        src={ShoppingCart}
        style={{
          cursor: 'pointer',
          color: 'gray',
          maxWidth: '100%',
          width: '85px',
          height: '85px',
          position: 'fixed',
          bottom: isDesktop ? '100px' : '100px',
          left: !isDesktop ? '8px' : '10px',
          zIndex: 3,
        }}
        onClick={handleCartClick}
      />

      <div style={{
        position: 'fixed',
        bottom: isDesktop ? '200px' : '200px', // Adjusted based on ShoppingCart height and desired space
        left: !isDesktop ? '25px' : '30px',
        zIndex: 2,
        transition: 'opacity 0.5s ease-in-out',
        opacity: showIcons ? 1 : 0,
        // transform: `translateY(${showIcons ? '0px' : '20px'})`,
      }}>
        <a href="https://id.shp.ee/qFRcxzb" target="_blank">
        <img 
        id="shopee"
          src={Shopee}
          style={{
            cursor: 'pointer',
            color: 'gray',
            maxWidth: '100%',
            width: '45px',
            height: '45px',
            position: 'relative',
            display: 'block',
            marginBottom: '10px', // Space between Shopee and Tokped
          }}
        />
        </a>
        <a href="https://tokopedia.link/LvsFHThQNLb" target="_blank">
        <img 
        id="tokped"
          src={Tokped}
          style={{
            cursor: 'pointer',
            color: 'gray',
            maxWidth: '100%',
            width: '45px',
            height: '45px',
            position: 'relative',
          }}
        />
        </a>
      </div>



                <img src={ArrowUp} 
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


<div>
      {/* Ikon WhatsApp */}
      <img 
        id="whatsapp" 
        loading="lazy" 
        src={IconWhatsapp} 
        onClick={handleClick} // Toggle visibility saat diklik
        style={{
          maxWidth: '100%',
          width: '70px',
          height: '70px',
          position: 'fixed',
          bottom: '20px',
          right: isDesktop ? '20px' : '20px',
          zIndex: 3,
          cursor: 'pointer'
        }}
      />

      {/* Opsi dengan posisi vertikal dan jarak */}
      <div 
        className={`options ${isOptionsVisible ? 'visible' : ''}`} 
        style={{ position: 'fixed', bottom: '100px', right: '30px', zIndex: 4 }}
      >
        {/* Tombol Agen */}
        {isOptionsVisible && (
          <ReactWhatsapp
          number="+6282160904267" 
          message={"Halo Pusat Kerupuk Indonesia, boleh tau kerupuk apa saja yang ada ?"}
          style={{ textDecoration: 'none', padding: 0, border: 'none', background: 'none' }}
        >
          <h4 id="agen" className="option-item agen">Agen</h4>
        </ReactWhatsapp>
      )}

      {/* Tombol Sales */}
      {isOptionsVisible && (
        <ReactWhatsapp 
          number="+6282189018400" 
          message={"Halo Pusat Kerupuk Indonesia, boleh tau kerupuk apa saja yang ada ?"}
          style={{ textDecoration: 'none', padding: 0, border: 'none', background: 'none' }}
        >
          <h4 id="sales" className="option-item sales">Sales</h4>
        </ReactWhatsapp>
        )}
      </div>

      {/* CSS */}
      <style jsx>{`
    .options {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      pointer-events: none;
    }

    .options.visible {
      opacity: 1;
      pointer-events: all;
    }

    .option-item {
      background: #4caf50;
      color: white;
      border: none;
      padding: 10px 20px;
      margin: 3px 0; /* Jarak antara tombol Agen dan Sales */
      border-radius: 20px;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .option-item:hover {
      transform: scale(1.1);
    }

    /* Posisi Agen dan Sales untuk jarak vertikal */
    .agen {
      transform: translateY(-20px); /* Geser Agen lebih ke atas */
    }

    /* Efek saat di hover pada Agen */
    .agen:hover {
      transform: translateY(-30px); /* Geser lebih ke atas saat dihover */
    }

    .sales {
      transform: translateY(-10px); /* Geser Sales sedikit lebih ke atas dari posisi sebelumnya */
    }
  `}</style>
    </div>

          <div style={{ width: '100%', backgroundColor: '#424045', height: isDesktop ? '220px' : '300px', marginTop:  isDesktop ? 0 : '-40px' }}>
                <Grid container style={{display: 'flex', justifyContent: 'center', paddingTop: isDesktop ? '60px' : '40px', paddingLeft: isDesktop ? 0 : 12 }}>
                <Grid item xs={12} sm={2} > 
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                        <img loading="lazy" src={Call} width={ isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("telepon.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0 }}><Textra effect="rightLeft" data={['082131131108', '085935331734']} /></span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img loading="lazy" src={Location} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                            <span style={{ fontSize: isDesktop ? '16px' : '18px', fontWeight: 'bold' }}>{t("alamat.text")} :</span>
                            <span style={{ fontSize: isDesktop ? '16px' : '12px', margin: 0, padding: 0, width: '300px' }}>Jalan Veteran no 4A Medan Pusat Pasar, Medan, Sumatera Utara 20231</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginTop: isDesktop ? 0 : '20px' }}>
                        <img  loading="lazy" src={Email} width={isDesktop ? 70 : 55} height={isDesktop ? 70 : 55} />
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
                        <img loading="lazy" src={LogoPusatKerupuk} width={100} height={100} />
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