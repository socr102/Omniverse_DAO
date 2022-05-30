import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SecHeadArrowL from '../static/pinkArrow.png'
import SecHeadArrowR from '../static/blue-Arrow.png'
import BitScaleLogo from '../static/bitscale-logo.png'
import ChainLinkLogo from '../static/chainlink-logo.png'
import ImmuteableLogo from '../static/immuteable-logo.png'
import LotusLogo from '../static/lotus_white.png'
import BitcoinLogo from '../static/Bitcoincom.png'
import QuantstampLogo from '../static/quantstamp-logo.png'
import RoadmapBg from '../static/roadmap-bg.png'
import RoadmapBlueLine from '../static/roadmap-blue-line.png'
import RoadmapPinkLine from '../static/roadmap-pink-line.png'
import FeatureContenImg from '../static/feature-content-bg.png'
import styles from '../styles/Home.module.css'
import Slider from '../components/Slider'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Omini Verse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* Hero Section */}
        <div className={styles.heroContainer}>
          <div className={styles.blackGradientBottom2}>
            <Navbar/>
            <div className={styles.heroContentWrap}>
                <h1>Omniverse</h1>
                <div className={styles.heroBtn}>
                  <button>Explore</button>
                </div>
            </div>
            <div className={styles.navigationsWrap}>
              <ul>
                <li><a className={styles.active}></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Feature Section */}
        <div className={styles.featureContentWrap}>
          <div className={styles.featureImg}>
            <Image src={FeatureContenImg} layout="responsive" alt="bg"></Image>
          </div>
          <div className={styles.ContentWrap}>
            <div className={styles.contentBody}>
              <h3>OVERVIEW</h3>
              <p>The Omniverse is an ecosystem of media, tools, and protocols unified by their development 
              and interoperability via Layer Zero technology.</p>
              <p>Built by the Omniverse DAO with an emphasis on superior user experience.</p>
            </div>
            <div className={styles.contentBody}>
              <h3>VISION</h3>
              <p>Creating a revolutionary game on groundbreaking interoperable blockchain technology will lead to us to developing a host of follow on products. There are no tools for this era of DAO run communities operating on multiple blockchains.</p>
              <p>
              With Omni X, we seek to change this. The first gaming DAO tool we are building is a multi-chain NFT marketplace framework. The Omni Wars game marketplace will be built on this framework, but we seek to open up this development to any other blockchain game looking to quickly bootstrap their own unique game specific NFT marketplace.
              Built by the Omniverse DAO with an emphasis on superior user experience.</p>
            </div>
          </div>
        </div>
        {/* Home Page BackGround */}
        <div className={styles.HomePageBg}>
        {/* Slider Section */}
        <div className={styles.secHeadingCon}>
          <div className={styles.secHeadingWrap}>
            <div className={styles.secHeadImgL}>
              <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
            </div>
            <h3>Omniverse</h3>
            <div className={styles.secHeadImgR}>
              <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
            </div>
          </div>
        </div>
        <Slider/>
        <div className={styles.secHeadingCon}>
          <div className={styles.secHeadingWrap}>
            <div className={styles.secHeadImgL}>
              <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
            </div>
            <h3>Omniverse</h3>
            <div className={styles.secHeadImgR}>
              <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
            </div>
          </div>
        </div>
        <Slider/>
        {/* Roadmap Section */}
        <div className={styles.secHeadingCon}>
          <div className={styles.secHeadingWrap}>
            <div className={styles.secHeadImgL}>
              <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
            </div>
            <h3>Omniverse</h3>
            <div className={styles.secHeadImgR}>
              <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
            </div>
          </div>
          <h1>RoadMap</h1>
        </div>
        <div className={styles.roadmapCon}>
          {/* First Phase */}
          <div className={styles.roadmapWrap}>
            <div className={styles.ContL}>
              <h1 className={styles.purpletxt}>Mar 2022</h1>
              <div className={styles.BgWrap}>
                <div className={styles.BgImg}>
                  <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                </div>
                <div className={styles.roadmapTxt}>
                  <h3>Community &amp; Core team Growth</h3>
                  <p>Launched Socials and github launched to 
                  establish, foster and grow community.</p>
                </div>
              </div>
            </div>
            <div className={styles.ContR}>
              <div className={styles.roadlineImg}>
                <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
              </div>
            </div>
          </div>
          {/* Second Phase */}
          <div className={styles.roadmapWrap}>
            <div className={styles.ContR}>
              <div className={styles.roadlineBlue}>
                <div className={styles.alignLine}>
                  <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                </div>
              </div>
            </div>
            <div className={styles.ContL}>
              <h1>APR 2022</h1>
              <div className={styles.BgWrap}>
                <div className={styles.BgImg}>
                  <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                </div>
                <div className={styles.roadmapTxt}>
                  <h3>Capital Raise</h3>
                  <p>Expanded team and added core contributors to collaborate on development.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Third Phase */}
          <div className={styles.roadmapWrap}>
            <div className={styles.ContL}>
              <h1>Mar 2022</h1>
              <div className={styles.BgWrap}>
                <div className={styles.BgImg}>
                  <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                </div>
                <div className={styles.roadmapTxt}>
                  <h3>GREG</h3>
                  <p>Launch Website showcasing interchain nft asset transfer.
                  Genesis omniverse greg omni-nft colection. </p>
                </div>
              </div>
            </div>
            <div className={styles.ContR}>
              <div className={styles.roadlineImg}>
                <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
              </div>
            </div>
          </div>
          {/* Forth Phase */}
          <div className={styles.roadmapWrap}>
            <div className={styles.ContR}>
              <div className={styles.roadlineBlue}>
                <div className={styles.alignLine}>
                  <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                </div>
              </div>
            </div>
            <div className={styles.ContL}>
              <h1>June 2022</h1>
              <div className={styles.BgWrap}>
                <div className={styles.BgImg}>
                  <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                </div>
                <div className={styles.roadmapTxt}>
                  <h3>Omni X</h3>
                  <p>Alpha NFT marketplace infrastructure release.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Fifth Phase */}
          <div className={styles.roadmapWrap}>
            <div className={styles.ContL}>
              <h1>Q3 2022</h1>
              <div className={styles.BgWrap}>
                <div className={styles.BgImg}>
                  <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                </div>
                <div className={styles.roadmapTxt}>
                  <h3>faction nfts</h3>
                  <p>NFT PFP Collections: faction specific GENESIS collections.
                  Engagement Competitions: rewards for world building, fan art, and lore production. </p>
                </div>
              </div>
            </div>
            <div className={styles.ContR}>
              <div className={styles.roadlineImg}>
                <Image src={RoadmapBlueLine} layout="responsive" alt="blueline"></Image>
              </div>
            </div>
          </div>
          {/* Sixth Phase */}
          <div className={styles.roadmapWrap}>
            <div className={styles.ContR}>
              <div className={`${styles.roadlineBlue} ${styles.linehide}`}>
                <div className={styles.alignLine}>
                  <Image src={RoadmapPinkLine} layout="responsive" alt="blueline"></Image>
                </div>
              </div>
            </div>
            <div className={styles.ContL}>
              <h1>Q4 2022</h1>
              <div className={styles.BgWrap}>
                <div className={styles.BgImg}>
                  <Image src={RoadmapBg} layout="responsive" alt="bg"></Image>
                </div>
                <div className={styles.roadmapTxt}>
                  <h3>Omni Wars</h3>
                  <p>Alpha gameplay launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Home Page BackGround End*/}
        </div>
         {/* Home Page BackGround End*/}
        {/* Partners Section */}
        <div className={styles.secHeadingCon}>
          <div className={styles.secHeadingWrap}>
            <div className={styles.secHeadImgL}>
              <Image src={SecHeadArrowL} layout="responsive" alt="arrow"></Image>
            </div>
            <h3>Omniverse</h3>
            <div className={styles.secHeadImgR}>
              <Image src={SecHeadArrowR} layout="responsive" alt="arrow"></Image>
            </div>
          </div>
          <h1>Our Partners</h1>
        </div>
        <div className={styles.partCompGrid}>
          <div className={styles.PartCompWrap}>
            <Image src={BitScaleLogo} alt="bitscale" width={200}></Image>
          </div>
          <div className={styles.PartCompWrap}>
            <Image src={ChainLinkLogo} alt="bitscale" width={240}></Image>
          </div>
          <div className={styles.PartCompWrap}>
            <Image src={ImmuteableLogo} alt="bitscale" width={350}></Image>
          </div>
          <div className={styles.PartCompWrap}>
            <Image src={LotusLogo} alt="bitscale" width={180}></Image>
          </div>
          <div className={styles.PartCompWrap}>
            <Image src={BitcoinLogo} alt="bitscale" width={280}></Image>
          </div>
          <div className={styles.PartCompWrap}>
            <Image src={QuantstampLogo} alt="bitscale" width={370}></Image>
          </div>
        </div>
      </div>
      <div className={styles.FooterAreaContain}>
        <Footer/>
      </div>
    </>
  )
}

export default Home