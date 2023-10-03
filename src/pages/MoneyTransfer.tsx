import { Divider } from "../components/Divider";
import { TopBanner } from "../components/TopBanner";
import '../styles/moneyTransfer.scss'
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUserOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalanceOutlined';
export interface IMoneyTransferProps {
}

const transferAgents = [
    {
        img: '',
        link: 'https://www.westernunion.com/it/en/web/send-money/start',
        desc: 'We help people and businesses move money for better—better communities, better economies, and a better world....',
    },
    {
        img: '',
        link: 'https://www.worldremit.com/en',
        desc: 'WorldRemit is a fast and secure service that lets you transfer money online using a computer, smartphone, or our app...',
    }, {
        img: '',
        link: 'https://www.swift.com/',
        desc: "Banking & payments. We're here to help you transact securely and reliably, comply with regulation, improve operational efficiency and innovate at scale to serve ...",
    }, {
        img: '',
        link: 'https://www.transfast.com/',
        desc: 'Transfast is a network provider that supports cross-border remittance services of Originating Institutions in the Gulf Cooperation Council countries. Transfast ...',
    }, {
        img: '',
        link: 'https://www.riamoneytransfer.com/',
        desc: 'Send money online through Ria Money Transfer, one of the largest international money transfer companies in the world. Transfer money using your bank, ...',
    }, {
        img: '',
        link: 'https://www.smallworldfs.com/en',
        desc: 'https://www.riamoneytransfer.com/',
    }, {
        img: '',
        link: 'https://www.moneygram.com/mgo/us/en/',
        desc: "With millions of downloads, the MoneyGram money transfer app is an easier way to send money from the United States, pay bills and more. But don't just take our ...",
    }, {
        img: '',
        link: 'https://www.kaahexpress.eu/',
        desc: 'Easy and secure money transfer. ... Submit all personal info & ID at a Kaah agency. 2. Fill out all the details of the transfer.',
    }, {
        img: '',
        link: 'https://www.ethioremit.com/',
        desc: 'Ethioremit is the pioneer and the only international mobile airtime top up retail channel aggregation and marketing platform for the Ethiopian corridor.',
    }, {
        img: '',
        link: 'https://tawakalexpress.net/Bananapay.html',
        desc: 'Banana Pay is an online international money transfer service through which any person with resident address of America can send money online from and to the ...',
    }, {
        img: '',
        link: 'https://www.dahabshiil.com/',
        desc: 'The most convenient way to send money to loved ones abroad. Dahabshiil is the trusted online money transfer service, with flexible payment options.',
    }, {
        img: '',
        link: 'https://www.xpressmoney.com/',
        desc: 'Money Transfers. Your loved ones can receive money instantly anywhere across the globe · SECURE MONEY TRANSFERS. With a robust ...',
    }, {
        img: '',
        link: 'https://cashexpress.com/',
        desc: 'Cash Express is one of the leading providers of money transfer services worldwide. Headquartered in Abu Dhabi Global Market, we are present in 60 countries ...',
    }, {
        img: '',
        link: 'https://www.bakaal.com/',
        desc: 'Bakaal offers money transfer organizations the opportunity to grow and expand their business and access diverse delivery options including cash pick up, mobile ...',
    }, {
        img: '',
        link: 'https://amal.express/',
        desc: 'Amal Express is a global Money Transfer company with branches all over the world. Amal Express has successfully provided fast, cost effective, secure, flexible, ...',
    }, {
        img: '',
        link: 'https://www.thunes.com/',
        desc: 'Thunes will allow Tigo Money to accelerate international money transfers into our digital wallets, by connecting more and more partners around the world,',
    }, {
        img: '',
        link: 'https://paysii.com/en/send-money/ethiopia',
        desc: 'PaySii is a registered trademark owned by SafariPay. SafariPay Corp. is a Delaware corporation regulated by various States,',
    },

]
const resources = [
    {
        icon: <CurrencyExchangeIcon className="icon" />,
        title: 'Foreign Exchange Rate',
        desc: 'Foreign Exchange Rate is defined as the price of the domestic currency with respect to another currency. The purpose of foreign exchange is to compare one currency with another for showing their relative values.',
        link: 'https://coopbankoromia.com.et/daily-exchange-rates/'
    },
    {
        icon: <VerifiedUserIcon className="icon" />,
        title: 'Trade Registration and Licensing',
        desc: 'Obtaining a business license in Ethiopia. The Ministry of Trade and Industry is the main institution responsible for registering a business in Ethiopia.',
        link: 'https://etrade.gov.et/'
    },
    {
        icon: <AccountBalanceIcon className="icon" />,
        title: 'National Bank Directives',
        desc: 'The National Bank of Ethiopia was established in 1963 by proclamation 206 of 1963 and began operation in January 1964. Prior to this proclamation, the Bank used to carry out dual activities, i.e. commercial banking and central banking.',
        link: 'https://nbe.gov.et/directives/'
    }
]

const Agents = () => <div className="cards-container">
    <Grid container className="cards-grid" columnSpacing={2} rowSpacing={4} xs={9.2}>
        {transferAgents.map((agent: any, i: number) =>
            <Grid item className="grid-item" xs={12} sm={6} md={4} >
                <Card className='agent-card'>
                    <CardMedia
                        className="card-media"
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={`/images/agentImage${i + 1}.jpg`}
                        sx={{ objectFit: i > transferAgents.length - 3 ? 'contain' : 'initial' }}
                    ></CardMedia>
                    <div className="card-content">

                        <CardContent className="card-desc">
                            <p>{agent.desc}</p></CardContent>
                        <CardActions className="card-actions">
                            <a href={agent.link}>Read More</a>
                        </CardActions>
                    </div>
                </Card>
            </Grid>
        )}
    </Grid>
</div>

const Resources = () => <div className="resources-container">
    <div className="title"><h2>Some Useful <span>Diaspora</span> Resources</h2></div>

    <Grid container columnSpacing={4} rowSpacing={4} xs={9.2} className="cards">
        {resources.map((resource: any, i: number) =>
            <Grid item xs={12} sm={6} md={4}>
                <Card className="card-item">
                    <CardMedia component="circle" className="card-media">
                        {resource.icon}
                    </CardMedia>
                    <CardContent className="card-content">
                        <div className="title">
                            <h3>
                                {resource.title}
                            </h3>
                        </div>
                        <div className="desc">
                            <p>
                                {resource.desc}
                            </p>
                        </div>
                    </CardContent>
                    <CardActions className="card-actions">
                        <Button>
                            <a href={resource.link} className="link">
                                Read More
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )}
    </Grid>
</div>

const SwiftCode = () =>
    <div className="swift-code">
        <h2>Swift code <span>CBORETAA</span></h2>
    </div>

export function MoneyTransfer(props: IMoneyTransferProps) {
    return (<div>
        <TopBanner containerClass="mt hd-container" overlayClass="mt hd-background-overlay" contentClass="mt hd-content" footerClass="mt hd-footer" contentHeader="Money Transfer" contentParagraph="We Partner With Over 13 World Best Money Transfer Agents" />
        <div className="title">
            <h2><strong>International Remittance</strong></h2>
        </div>
        <Divider />
        <Agents />
        <Resources />
        <SwiftCode />
    </div>
    );
}
